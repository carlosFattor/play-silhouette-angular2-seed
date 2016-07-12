package controllers

import javax.inject.Inject

import play.api._
import play.api.mvc._
import play.api.i18n.{ I18nSupport, Messages, MessagesApi }

class Application @Inject() (val messagesApi: MessagesApi) extends Controller with I18nSupport {

  def index = Action { implicit request =>
    Ok(views.html.index("Your new application is ready."))
  }

  def publicView(template: String) = Action { implicit request =>
    template match {
      case "signin" => Ok(views.html.sign.signin())
      case "signup" => Ok(views.html.sign.signup())
      case _ => NotFound
    }
  }

  def privateView(template: String) = Action { implicit request =>
    template match {
      case "navbar" => Ok(views.html.navbar.navbar())
      case _ => NotFound
    }
  }

}