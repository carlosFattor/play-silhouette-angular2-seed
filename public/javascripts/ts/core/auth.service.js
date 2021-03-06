System.register(["angular2/core", "angular2/http", "../services/windows/window.service"], function(exports_1, context_1) {
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
    var core_1, http_1, window_service_1;
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (window_service_1_1) {
                window_service_1 = window_service_1_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(_windows, _http) {
                    this._windows = _windows;
                    this._http = _http;
                    this.oAuthCallbackUrl = "http://localhost:9000/authenticate/google";
                    this.oAuthTokenUrl = "http://localhost:9000/auth?redirect_uri=http://localhost:9000/authenticate/google&response_type=token&client_id=814368925475-75jkn9a9t3l2hq25vidrqt9f6ibulku9.apps.googleusercontent.com&scope=https://www.googleapis.com/auth/userinfo.profile";
                    this.oAuthUserUrl = "https://www.googleapis.com/plus/v1/people/me";
                    this.oAuthUserNameField = "displayName";
                    this.authenticated = false;
                    this.expires = 0;
                    this.userInfo = {};
                    this.windowHandle = null;
                    this.intervalId = null;
                    this.expiresTimerId = null;
                    this.loopCount = 600;
                    this.intervalLength = 100;
                    this.locationWatcher = new core_1.EventEmitter(); // @TODO: switch to RxJS Subject instead of EventEmitter
                    /*_http.get('config.json')
                        //.map(res => res.json())
                        .subscribe((config: any) => {
                            this.oAuthCallbackUrl = config.callbackUrl;
                            this.oAuthTokenUrl = config.implicitGrantUrl;
                            this.oAuthTokenUrl = this.oAuthTokenUrl
                                .replace('__callbackUrl__', config.callbackUrl)
                                .replace('__clientId__', config.clientId)
                                .replace('__scopes__', config.scopes);
                            this.oAuthUserUrl = config.userInfoUrl;
                            this.oAuthUserNameField = config.userInfoNameField;
                        })*/
                }
                AuthService.prototype.doLogin = function (user) {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Csrf-Token', this.getCookie('PLAY_CSRF_TOKEN'));
                    headers.append('Content-Type', 'application/json');
                    headers.append('Accept', 'application/json');
                    this._http.post('/signin', JSON.stringify(user), {
                        headers: headers
                    }).map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.saveJwt(data.id_token); }, function (err) { return console.log(err); }, function () { return console.log('Authentication Complete'); });
                    console.log(user);
                };
                AuthService.prototype.getCookie = function (name) {
                    var value = "; " + document.cookie;
                    var parts = value.split("; " + name + "=");
                    console.log(parts);
                    if (parts.length == 2)
                        return parts.pop().split(";").shift();
                };
                AuthService.prototype.saveJwt = function (jwt) {
                    if (jwt) {
                        localStorage.setItem('id_token', jwt);
                    }
                };
                AuthService.prototype.doSocialLogin = function () {
                    var _this = this;
                    var loopCount = this.loopCount;
                    this.windowHandle = this._windows.createWindow(this.oAuthTokenUrl, 'OAuth2 Login');
                    this.intervalId = setInterval(function () {
                        if (loopCount-- < 0) {
                            clearInterval(_this.intervalId);
                            _this.emitAuthStatus(false);
                            _this.windowHandle.close();
                        }
                        else {
                            var href;
                            try {
                                href = _this.windowHandle.location.href;
                            }
                            catch (e) {
                                console.log('error', e);
                            }
                            if (href != null) {
                                var re = /access_token=(.*)/;
                                var found = href.match(re);
                                if (found) {
                                    console.log("Callback URL:", href);
                                    clearInterval(_this.intervalId);
                                    var parsed = _this.parse(href.substr(_this.oAuthCallbackUrl.length + 1));
                                    var expiresSeconds = Number(parsed.expires_in) || 1800;
                                    _this.token = parsed.access_token;
                                    if (_this.token) {
                                        _this.authenticated = true;
                                    }
                                    _this.startExpiresTimer(expiresSeconds);
                                    _this.expires = new Date();
                                    _this.expires = _this.expires.setSeconds(_this.expires.getSeconds() + expiresSeconds);
                                    _this.windowHandle.close();
                                    _this.emitAuthStatus(true);
                                    _this.fetchUserInfo();
                                }
                            }
                        }
                    }, this.intervalLength);
                };
                AuthService.prototype.doLogout = function () {
                    this.authenticated = false;
                    this.expiresTimerId = null;
                    this.expires = 0;
                    this.token = null;
                    this.emitAuthStatus(true);
                    console.log('Session has been cleared');
                };
                AuthService.prototype.emitAuthStatus = function (success) {
                    this.locationWatcher.emit({ success: success, authenticated: this.authenticated, token: this.token, expires: this.expires });
                };
                AuthService.prototype.getSession = function () {
                    return { authenticated: this.authenticated, token: this.token, expires: this.expires };
                };
                AuthService.prototype.fetchUserInfo = function () {
                    var _this = this;
                    if (this.token != null) {
                        var headers = new http_1.Headers();
                        headers.append('Authorization', "Csrf-Token " + this.token);
                        this._http.get(this.oAuthUserUrl, { headers: headers })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (info) {
                            _this.userInfo = info;
                        }, function (err) {
                            console.error("Failed to fetch user info:", err);
                        });
                    }
                };
                AuthService.prototype.getUserInfo = function () {
                    return this.userInfo;
                };
                AuthService.prototype.getUserName = function () {
                    return this.userInfo ? this.userInfo[this.oAuthUserNameField] : null;
                };
                AuthService.prototype.startExpiresTimer = function (seconds) {
                    var _this = this;
                    if (this.expiresTimerId != null) {
                        clearTimeout(this.expiresTimerId);
                    }
                    this.expiresTimerId = setTimeout(function () {
                        console.log('Session has expired');
                        _this.doLogout();
                    }, seconds * 1000); // seconds * 1000
                    console.log('Token expiration timer set for', seconds, "seconds");
                };
                AuthService.prototype.subscribe = function (onNext, onThrow, onReturn) {
                    return this.locationWatcher.subscribe(onNext, onThrow, onReturn);
                };
                AuthService.prototype.isAuthenticated = function () {
                    return this.authenticated;
                };
                AuthService.prototype.parse = function (str) {
                    if (typeof str !== 'string') {
                        return {};
                    }
                    str = str.trim().replace(/^(\?|#|&)/, '');
                    if (!str) {
                        return {};
                    }
                    return str.split('&').reduce(function (ret, param) {
                        var parts = param.replace(/\+/g, ' ').split('=');
                        var key = parts.shift();
                        var val = parts.length > 0 ? parts.join('=') : undefined;
                        key = decodeURIComponent(key);
                        val = val === undefined ? null : decodeURIComponent(val);
                        if (!ret.hasOwnProperty(key)) {
                            ret[key] = val;
                        }
                        else if (Array.isArray(ret[key])) {
                            ret[key].push(val);
                        }
                        else {
                            ret[key] = [ret[key], val];
                        }
                        return ret;
                    }, {});
                };
                ;
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [window_service_1.WindowService, http_1.Http])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});
