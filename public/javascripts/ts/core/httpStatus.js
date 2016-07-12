System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var httpStatus;
    return {
        setters:[],
        execute: function() {
            exports_1("httpStatus", httpStatus = {
                CONTINUE: 100,
                SWITCHING_PROTOCOLS: 101,
                PROCESSING: 102,
                OK: 200,
                CREATED: 201,
                ACCEPTED: 202,
                NON_AUTHORITATIVE_INFORMATION: 203,
                NO_CONTENT: 204,
                RESET_CONTENT: 205,
                PARTIAL_CONTENT: 206,
                MULTI_STATUS: 207,
                MULTIPLE_CHOICES: 300,
                MOVED_PERMANENTLY: 301,
                MOVED_TEMPORARILY: 302,
                SEE_OTHER: 303,
                NOT_MODIFIED: 304,
                USE_PROXY: 305,
                TEMPORARY_REDIRECT: 307,
                BAD_REQUEST: 400,
                UNAUTHORIZED: 401,
                PAYMENT_REQUIRED: 402,
                FORBIDDEN: 403,
                NOT_FOUND: 404,
                METHOD_NOT_ALLOWED: 405,
                NOT_ACCEPTABLE: 406,
                PROXY_AUTHENTICATION_REQUIRED: 407,
                REQUEST_TIMEOUT: 408,
                CONFLICT: 409,
                GONE: 410,
                LENGTH_REQUIRED: 411,
                PRECONDITION_FAILED: 412,
                REQUEST_TOO_LONG: 413,
                REQUEST_URI_TOO_LONG: 414,
                UNSUPPORTED_MEDIA_TYPE: 415,
                REQUESTED_RANGE_NOT_SATISFIABLE: 416,
                EXPECTATION_FAILED: 417,
                INSUFFICIENT_SPACE_ON_RESOURCE: 419,
                METHOD_FAILURE: 420,
                UNPROCESSABLE_ENTITY: 422,
                LOCKED: 423,
                FAILED_DEPENDENCY: 424,
                PRECONDITION_REQUIRED: 428,
                TOO_MANY_REQUESTS: 429,
                REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
                INTERNAL_SERVER_ERROR: 500,
                NOT_IMPLEMENTED: 501,
                BAD_GATEWAY: 502,
                SERVICE_UNAVAILABLE: 503,
                GATEWAY_TIMEOUT: 504,
                HTTP_VERSION_NOT_SUPPORTED: 505,
                INSUFFICIENT_STORAGE: 507,
                NETWORK_AUTHENTICATION_REQUIRED: 511,
                statusCodes: {},
                getStatusText: function (statusCode) {
                    if (httpStatus.statusCodes.hasOwnProperty(statusCode)) {
                        return httpStatus.statusCodes[statusCode];
                    }
                    else {
                        throw new Error("Status code does not exist: " + statusCode);
                    }
                },
            });
            httpStatus.statusCodes[httpStatus.ACCEPTED] = "Accepted";
            httpStatus.statusCodes[httpStatus.BAD_GATEWAY] = "Bad Gateway";
            httpStatus.statusCodes[httpStatus.BAD_REQUEST] = "Bad Request";
            httpStatus.statusCodes[httpStatus.CONFLICT] = "Conflict";
            httpStatus.statusCodes[httpStatus.CONTINUE] = "Continue";
            httpStatus.statusCodes[httpStatus.CREATED] = "Created";
            httpStatus.statusCodes[httpStatus.EXPECTATION_FAILED] = "Expectation Failed";
            httpStatus.statusCodes[httpStatus.FAILED_DEPENDENCY] = "Failed Dependency";
            httpStatus.statusCodes[httpStatus.FORBIDDEN] = "Forbidden";
            httpStatus.statusCodes[httpStatus.GATEWAY_TIMEOUT] = "Gateway Timeout";
            httpStatus.statusCodes[httpStatus.GONE] = "Gone";
            httpStatus.statusCodes[httpStatus.HTTP_VERSION_NOT_SUPPORTED] = "HTTP Version Not Supported";
            httpStatus.statusCodes[httpStatus.INSUFFICIENT_SPACE_ON_RESOURCE] = "Insufficient Space on Resource";
            httpStatus.statusCodes[httpStatus.INSUFFICIENT_STORAGE] = "Insufficient Storage";
            httpStatus.statusCodes[httpStatus.INTERNAL_SERVER_ERROR] = "Server Error";
            httpStatus.statusCodes[httpStatus.LENGTH_REQUIRED] = "Length Required";
            httpStatus.statusCodes[httpStatus.LOCKED] = "Locked";
            httpStatus.statusCodes[httpStatus.METHOD_FAILURE] = "Method Failure";
            httpStatus.statusCodes[httpStatus.METHOD_NOT_ALLOWED] = "Method Not Allowed";
            httpStatus.statusCodes[httpStatus.MOVED_PERMANENTLY] = "Moved Permanently";
            httpStatus.statusCodes[httpStatus.MOVED_TEMPORARILY] = "Moved Temporarily";
            httpStatus.statusCodes[httpStatus.MULTI_STATUS] = "Multi-Status";
            httpStatus.statusCodes[httpStatus.MULTIPLE_CHOICES] = "Multiple Choices";
            httpStatus.statusCodes[httpStatus.NETWORK_AUTHENTICATION_REQUIRED] = "Network Authentication Required";
            httpStatus.statusCodes[httpStatus.NO_CONTENT] = "No Content";
            httpStatus.statusCodes[httpStatus.NON_AUTHORITATIVE_INFORMATION] = "Non Authoritative Information";
            httpStatus.statusCodes[httpStatus.NOT_ACCEPTABLE] = "Not Acceptable";
            httpStatus.statusCodes[httpStatus.NOT_FOUND] = "Not Found";
            httpStatus.statusCodes[httpStatus.NOT_IMPLEMENTED] = "Not Implemented";
            httpStatus.statusCodes[httpStatus.NOT_MODIFIED] = "Not Modified";
            httpStatus.statusCodes[httpStatus.OK] = "OK";
            httpStatus.statusCodes[httpStatus.PARTIAL_CONTENT] = "Partial Content";
            httpStatus.statusCodes[httpStatus.PAYMENT_REQUIRED] = "Payment Required";
            httpStatus.statusCodes[httpStatus.PRECONDITION_FAILED] = "Precondition Failed";
            httpStatus.statusCodes[httpStatus.PRECONDITION_REQUIRED] = "Precondition Required";
            httpStatus.statusCodes[httpStatus.PROCESSING] = "Processing";
            httpStatus.statusCodes[httpStatus.PROXY_AUTHENTICATION_REQUIRED] = "Proxy Authentication Required";
            httpStatus.statusCodes[httpStatus.REQUEST_HEADER_FIELDS_TOO_LARGE] = "Request Header Fields Too Large";
            httpStatus.statusCodes[httpStatus.REQUEST_TIMEOUT] = "Request Timeout";
            httpStatus.statusCodes[httpStatus.REQUEST_TOO_LONG] = "Request Entity Too Large";
            httpStatus.statusCodes[httpStatus.REQUEST_URI_TOO_LONG] = "Request-URI Too Long";
            httpStatus.statusCodes[httpStatus.REQUESTED_RANGE_NOT_SATISFIABLE] = "Requested Range Not Satisfiable";
            httpStatus.statusCodes[httpStatus.RESET_CONTENT] = "Reset Content";
            httpStatus.statusCodes[httpStatus.SEE_OTHER] = "See Other";
            httpStatus.statusCodes[httpStatus.SERVICE_UNAVAILABLE] = "Service Unavailable";
            httpStatus.statusCodes[httpStatus.SWITCHING_PROTOCOLS] = "Switching Protocols";
            httpStatus.statusCodes[httpStatus.TEMPORARY_REDIRECT] = "Temporary Redirect";
            httpStatus.statusCodes[httpStatus.TOO_MANY_REQUESTS] = "Too Many Requests";
            httpStatus.statusCodes[httpStatus.UNAUTHORIZED] = "Unauthorized";
            httpStatus.statusCodes[httpStatus.UNPROCESSABLE_ENTITY] = "Unprocessable Entity";
            httpStatus.statusCodes[httpStatus.UNSUPPORTED_MEDIA_TYPE] = "Unsupported Media Type";
            httpStatus.statusCodes[httpStatus.USE_PROXY] = "Use Proxy";
        }
    }
});
