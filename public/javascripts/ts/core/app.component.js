System.register(["angular2/core", "angular2/router", "../components/sign/signin.component", "../components/sign/signup.component", '../services/cookies/cookie.service', "../components/sign/loggedout.component", "../components/homes/home.component", 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, signin_component_1, signup_component_1, cookie_service_1, loggedout_component_1, home_component_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (signin_component_1_1) {
                signin_component_1 = signin_component_1_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (cookie_service_1_1) {
                cookie_service_1 = cookie_service_1_1;
            },
            function (loggedout_component_1_1) {
                loggedout_component_1 = loggedout_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (_1) {}],
        execute: function() {
            App = (function () {
                function App() {
                    this.mobileView = 992;
                    this.toggle = false;
                    this.attachEvents();
                }
                App.prototype.attachEvents = function () {
                    var _this = this;
                    window.onresize = function () {
                        if (_this.getWidth() >= _this.mobileView) {
                            if (localStorage.getItem('toggle')) {
                                _this.toggle = !localStorage.getItem('toggle') ? false : true;
                            }
                            else {
                                _this.toggle = true;
                            }
                        }
                        else {
                            _this.toggle = false;
                        }
                    };
                };
                App.prototype.getWidth = function () {
                    return window.innerWidth;
                };
                App.prototype.toggleSidebar = function () {
                    this.toggle = !this.toggle;
                    localStorage.setItem('toggle', this.toggle.toString());
                };
                App = __decorate([
                    core_1.Component({
                        selector: "app",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, router_1.RouterOutlet, router_1.RouterLink, cookie_service_1.CookieService],
                        template: "<main class='wrapper'><router-outlet></router-outlet></main>"
                    }),
                    router_1.RouteConfig([
                        { path: '/loggedout', name: 'LoggedoutPage', component: loggedout_component_1.LoggedoutComponent },
                        { path: "/signin", name: "SignIn", component: signin_component_1.SignInComponent },
                        { path: "/signup", name: "SignUp", component: signup_component_1.SignUpComponent },
                        { path: "/home", name: "Home", component: home_component_1.HomeComponent },
                        { path: "/**", redirectTo: ["SignIn"] }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
