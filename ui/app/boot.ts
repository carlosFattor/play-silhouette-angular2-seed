import {Component, bind, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {
    RouteConfig,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    LocationStrategy,
    HashLocationStrategy,
    PathLocationStrategy
    } from 'angular2/router';

import {App} from './ts/core/app.component';
import {AuthService} from "./ts/core/auth.service";
import {CookieService} from "./ts/services/cookies/cookie.service";
import {WindowService} from "./ts/services/windows/window.service";

//bootstrap(App,[CookieService, AuthService, WindowService, HTTP_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
bootstrap(App, [ROUTER_PROVIDERS, FORM_PROVIDERS, ROUTER_PROVIDERS,
                HTTP_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}),
                CookieService, AuthService, WindowService])