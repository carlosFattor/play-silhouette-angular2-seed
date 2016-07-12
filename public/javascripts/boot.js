System.register(['angular2/core', 'angular2/platform/browser', 'angular2/http', 'angular2/common', 'angular2/router', './ts/core/app.component', "./ts/core/auth.service", "./ts/services/cookies/cookie.service", "./ts/services/windows/window.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, browser_1, http_1, common_1, router_1, app_component_1, auth_service_1, cookie_service_1, window_service_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (cookie_service_1_1) {
                cookie_service_1 = cookie_service_1_1;
            },
            function (window_service_1_1) {
                window_service_1 = window_service_1_1;
            }],
        execute: function() {
            //bootstrap(App,[CookieService, AuthService, WindowService, HTTP_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
            browser_1.bootstrap(app_component_1.App, [router_1.ROUTER_PROVIDERS, common_1.FORM_PROVIDERS, router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
                cookie_service_1.CookieService, auth_service_1.AuthService, window_service_1.WindowService]);
        }
    }
});
