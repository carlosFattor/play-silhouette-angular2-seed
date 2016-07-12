package controllers

import javax.inject.Inject

import com.mohiva.play.silhouette.api.Authenticator.Implicits._
import com.mohiva.play.silhouette.api.{ LoginEvent, Silhouette }
import com.mohiva.play.silhouette.api.exceptions.ProviderException
import com.mohiva.play.silhouette.api.util.{ Clock, Credentials }
import com.mohiva.play.silhouette.impl.exceptions.IdentityNotFoundException
import com.mohiva.play.silhouette.impl.providers.{ CredentialsProvider, SocialProviderRegistry }
import forms.SignInForm
import models.services.UserService
import net.ceedubs.ficus.Ficus._
import play.api.Configuration
import play.api.i18n.{ Messages, I18nSupport, MessagesApi }
import play.api.libs.concurrent.Execution.Implicits._
import play.api.libs.json.Json
import play.api.mvc.Controller
import utils.auth.JWTEnv

import scala.concurrent.Future
import scala.concurrent.duration._

class SignInController @Inject() (
  val messagesApi: MessagesApi,
  silhouette: Silhouette[JWTEnv],
  credentialsProvider: CredentialsProvider,
  userService: UserService,
  configuration: Configuration,
  socialProviderRegistry: SocialProviderRegistry,
  clock: Clock,
  implicit val webJarAssets: WebJarAssets) extends Controller with I18nSupport {

  def submit = silhouette.UnsecuredAction.async { implicit request =>
    SignInForm.form.bindFromRequest.fold(
      errorForm => {
        Future.successful(BadRequest(Json.obj("message" -> Messages("invalid.credentials"))))
      },
      data => {
        credentialsProvider.authenticate(Credentials(data.email, data.password)).flatMap { loginInfo =>
          println("loginInfo=> " + loginInfo)
          userService.retrieve(loginInfo).flatMap {
            case None => Future.failed(new IdentityNotFoundException("Couldn't find user"))
            case Some(user) =>
              silhouette.env.authenticatorService.create(loginInfo).map {
                case authenticator if data.rememberMe =>
                  val c = configuration.underlying
                  authenticator.copy(
                    expirationDateTime = clock.now + c.as[FiniteDuration]("silhouette.authenticator.rememberMe.authenticatorExpiry"),
                    idleTimeout = c.getAs[FiniteDuration]("silhouette.authenticator.rememberMe.authenticatorIdleTimeout")
                  )
                case authenticator => authenticator
              }.flatMap { authenticator =>
                silhouette.env.eventBus.publish(LoginEvent(user, request))
                silhouette.env.authenticatorService.init(authenticator).map { token =>
                  Ok(Json.obj("token" -> token))
                }
              }
          }
        }.recover {
          case e: ProviderException =>
            Unauthorized(Json.obj("message" -> Messages("invalid.credentials")))
        }
      })
  }

}