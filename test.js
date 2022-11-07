!function(e) {
    var t = {};
    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        });
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(i, o, function(t) {
            return e[t];
        }.bind(null, o));
        return i;
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return n.d(t, "a", t), t;
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 4);
}([ function(e, t, n) {
    e.exports = n(1);
}, function(e, t, n) {
    var i = n(2);
    t.iframeResize = i, t.iframeResizer = i, t.iframeResizerContentWindow = n(3);
}, function(e, t, n) {
    var i, o, r;
    !function(n) {
        if ("undefined" != typeof window) {
            var a, s = 0, d = !1, c = !1, u = "message".length, l = "[iFrameSizer]", m = l.length, f = null, g = window.requestAnimationFrame, h = {
                max: 1,
                scroll: 1,
                bodyScroll: 1,
                documentElementScroll: 1
            }, p = {}, y = null, b = {
                autoResize: !0,
                bodyBackground: null,
                bodyMargin: null,
                bodyMarginV1: 8,
                bodyPadding: null,
                checkOrigin: !0,
                inPageLinks: !1,
                enablePublicMethods: !0,
                heightCalculationMethod: "bodyOffset",
                id: "iFrameResizer",
                interval: 32,
                log: !1,
                maxHeight: 1 / 0,
                maxWidth: 1 / 0,
                minHeight: 0,
                minWidth: 0,
                resizeFrom: "parent",
                scrolling: !1,
                sizeHeight: !0,
                sizeWidth: !1,
                warningTimeout: 5e3,
                tolerance: 0,
                widthCalculationMethod: "scroll",
                onClose: function() {
                    return !0;
                },
                onClosed: function() {},
                onInit: function() {},
                onMessage: function() {
                    _("onMessage function not defined");
                },
                onResized: function() {},
                onScroll: function() {
                    return !0;
                }
            }, v = {};
            window.jQuery && ((a = window.jQuery).fn ? a.fn.iFrameResize || (a.fn.iFrameResize = function(e) {
                return this.filter("iframe").each(function(t, n) {
                    q(n, e);
                }).end();
            }) : M("", "Unable to bind to jQuery, it is not fully loaded.")), o = [], void 0 === (r = "function" == typeof (i = G) ? i.apply(t, o) : i) || (e.exports = r), 
            window.iFrameResize = window.iFrameResize || G();
        }
        function w() {
            return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        }
        function E(e, t, n) {
            e.addEventListener(t, n, !1);
        }
        function I(e, t, n) {
            e.removeEventListener(t, n, !1);
        }
        function T(e) {
            return l + "[" + function(e) {
                var t = "Host page: " + e;
                return window.top !== window.self && (t = window.parentIFrame && window.parentIFrame.getId ? window.parentIFrame.getId() + ": " + e : "Nested host page: " + e), 
                t;
            }(e) + "]";
        }
        function x(e) {
            return p[e] ? p[e].log : d;
        }
        function O(e, t) {
            k("log", e, t, x(e));
        }
        function M(e, t) {
            k("info", e, t, x(e));
        }
        function _(e, t) {
            k("warn", e, t, !0);
        }
        function k(e, t, n, i) {
            !0 === i && "object" == typeof window.console && console[e](T(t), n);
        }
        function C(e) {
            function t() {
                o("Height"), o("Width"), L(function() {
                    W(C), z(A), g("onResized", C);
                }, C, "init");
            }
            function n(e) {
                return "border-box" !== e.boxSizing ? 0 : (e.paddingTop ? parseInt(e.paddingTop, 10) : 0) + (e.paddingBottom ? parseInt(e.paddingBottom, 10) : 0);
            }
            function i(e) {
                return "border-box" !== e.boxSizing ? 0 : (e.borderTopWidth ? parseInt(e.borderTopWidth, 10) : 0) + (e.borderBottomWidth ? parseInt(e.borderBottomWidth, 10) : 0);
            }
            function o(e) {
                var t = Number(p[A]["max" + e]), n = Number(p[A]["min" + e]), i = e.toLowerCase(), o = Number(C[i]);
                O(A, "Checking " + i + " is in range " + n + "-" + t), o < n && (o = n, O(A, "Set " + i + " to min value")), 
                o > t && (o = t, O(A, "Set " + i + " to max value")), C[i] = "" + o;
            }
            function r(e) {
                return k.substr(k.indexOf(":") + u + e);
            }
            function a(e, t) {
                var n, i, o;
                n = function() {
                    var n, i;
                    j("Send Page Info", "pageInfo:" + (n = document.body.getBoundingClientRect(), i = C.iframe.getBoundingClientRect(), 
                    JSON.stringify({
                        iframeHeight: i.height,
                        iframeWidth: i.width,
                        clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                        clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                        offsetTop: parseInt(i.top - n.top, 10),
                        offsetLeft: parseInt(i.left - n.left, 10),
                        scrollTop: window.pageYOffset,
                        scrollLeft: window.pageXOffset,
                        documentHeight: document.documentElement.clientHeight,
                        documentWidth: document.documentElement.clientWidth,
                        windowHeight: window.innerHeight,
                        windowWidth: window.innerWidth
                    })), e, t);
                }, i = 32, v[o = t] || (v[o] = setTimeout(function() {
                    v[o] = null, n();
                }, i));
            }
            function s(e) {
                var t = e.getBoundingClientRect();
                return R(A), {
                    x: Math.floor(Number(t.left) + Number(f.x)),
                    y: Math.floor(Number(t.top) + Number(f.y))
                };
            }
            function d(e) {
                var t = e ? s(C.iframe) : {
                    x: 0,
                    y: 0
                }, n = {
                    x: Number(C.width) + t.x,
                    y: Number(C.height) + t.y
                };
                O(A, "Reposition requested from iFrame (offset x:" + t.x + " y:" + t.y + ")"), window.top !== window.self ? window.parentIFrame ? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](n.x, n.y) : _(A, "Unable to scroll to requested position, window.parentIFrame not found") : (f = n, 
                c(), O(A, "--"));
            }
            function c() {
                !1 !== g("onScroll", f) ? z(A) : F();
            }
            function g(e, t) {
                return N(A, e, t);
            }
            var h, y, b, w, T, x, k = e.data, C = {}, A = null;
            "[iFrameResizerChild]Ready" === k ? function() {
                for (var e in p) j("iFrame requested init", B(e), p[e].iframe, e);
            }() : l === ("" + k).substr(0, m) && k.substr(m).split(":")[0] in p ? (b = k.substr(m).split(":"), 
            w = b[1] ? parseInt(b[1], 10) : 0, T = p[b[0]] && p[b[0]].iframe, x = getComputedStyle(T), 
            C = {
                iframe: T,
                id: b[0],
                height: w + n(x) + i(x),
                width: b[2],
                type: b[3]
            }, A = C.id, p[A] && (p[A].loaded = !0), (y = C.type in {
                "true": 1,
                "false": 1,
                undefined: 1
            }) && O(A, "Ignoring init message from meta parent page"), !y && function(e) {
                var t = !0;
                return p[e] || (t = !1, _(C.type + " No settings for " + e + ". Message was: " + k)), 
                t;
            }(A) && (O(A, "Received: " + k), h = !0, null === C.iframe && (_(A, "IFrame (" + C.id + ") not found"), 
            h = !1), h && function() {
                var t, n = e.origin, i = p[A] && p[A].checkOrigin;
                if (i && "" + n != "null" && !(i.constructor === Array ? function() {
                    var e = 0, t = !1;
                    for (O(A, "Checking connection is from allowed list of origins: " + i); e < i.length; e++) if (i[e] === n) {
                        t = !0;
                        break;
                    }
                    return t;
                }() : (t = p[A] && p[A].remoteHost, O(A, "Checking connection is from: " + t), n === t))) throw new Error("Unexpected message received from: " + n + " for " + C.iframe.id + ". Message was: " + e.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");
                return !0;
            }() && function() {
                switch (p[A] && p[A].firstRun && p[A] && (p[A].firstRun = !1), C.type) {
                  case "close":
                    S(C.iframe);
                    break;

                  case "message":
                    e = r(6), O(A, "onMessage passed: {iframe: " + C.iframe.id + ", message: " + e + "}"), 
                    g("onMessage", {
                        iframe: C.iframe,
                        message: JSON.parse(e)
                    }), O(A, "--");
                    break;

                  case "autoResize":
                    p[A].autoResize = JSON.parse(r(9));
                    break;

                  case "scrollTo":
                    d(!1);
                    break;

                  case "scrollToOffset":
                    d(!0);
                    break;

                  case "pageInfo":
                    a(p[A] && p[A].iframe, A), function() {
                        function e(e, i) {
                            function o() {
                                p[n] ? a(p[n].iframe, n) : t();
                            }
                            [ "scroll", "resize" ].forEach(function(t) {
                                O(n, e + t + " listener for sendPageInfo"), i(window, t, o);
                            });
                        }
                        function t() {
                            e("Remove ", I);
                        }
                        var n = A;
                        e("Add ", E), p[n] && (p[n].stopPageInfo = t);
                    }();
                    break;

                  case "pageInfoStop":
                    p[A] && p[A].stopPageInfo && (p[A].stopPageInfo(), delete p[A].stopPageInfo);
                    break;

                  case "inPageLink":
                    !function(e) {
                        var t, n = e.split("#")[1] || "", i = decodeURIComponent(n), o = document.getElementById(i) || document.getElementsByName(i)[0];
                        o ? (t = s(o), O(A, "Moving to in page link (#" + n + ") at x: " + t.x + " y: " + t.y), 
                        f = {
                            x: t.x,
                            y: t.y
                        }, c(), O(A, "--")) : window.top !== window.self ? window.parentIFrame ? window.parentIFrame.moveToAnchor(n) : O(A, "In page link #" + n + " not found and window.parentIFrame not found") : O(A, "In page link #" + n + " not found");
                    }(r(9));
                    break;

                  case "reset":
                    P(C);
                    break;

                  case "init":
                    t(), g("onInit", C.iframe);
                    break;

                  default:
                    t();
                }
                var e;
            }())) : M(A, "Ignored: " + k);
        }
        function N(e, t, n) {
            var i = null, o = null;
            if (p[e]) {
                if ("function" != typeof (i = p[e][t])) throw new TypeError(t + " on iFrame[" + e + "] is not a function");
                o = i(n);
            }
            return o;
        }
        function A(e) {
            var t = e.id;
            delete p[t];
        }
        function S(e) {
            var t = e.id;
            if (!1 !== N(t, "onClose", t)) {
                O(t, "Removing iFrame: " + t);
                try {
                    e.parentNode && e.parentNode.removeChild(e);
                } catch (e) {
                    _(e);
                }
                N(t, "onClosed", t), O(t, "--"), A(e);
            } else O(t, "Close iframe cancelled by onClose event");
        }
        function R(e) {
            null === f && O(e, "Get page position: " + (f = {
                x: void 0 !== window.pageXOffset ? window.pageXOffset : document.documentElement.scrollLeft,
                y: void 0 !== window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop
            }).x + "," + f.y);
        }
        function z(e) {
            null !== f && (window.scrollTo(f.x, f.y), O(e, "Set page position: " + f.x + "," + f.y), 
            F());
        }
        function F() {
            f = null;
        }
        function P(e) {
            O(e.id, "Size reset requested by " + ("init" === e.type ? "host page" : "iFrame")), 
            R(e.id), L(function() {
                W(e), j("reset", "reset", e.iframe, e.id);
            }, e, "reset");
        }
        function W(e) {
            function t(t) {
                c || "0" !== e[t] || (c = !0, O(i, "Hidden iFrame detected, creating visibility listener"), 
                function() {
                    function e() {
                        Object.keys(p).forEach(function(e) {
                            !function(e) {
                                function t(t) {
                                    return "0px" === (p[e] && p[e].iframe.style[t]);
                                }
                                p[e] && null !== p[e].iframe.offsetParent && (t("height") || t("width")) && j("Visibility change", "resize", p[e].iframe, e);
                            }(e);
                        });
                    }
                    function t(t) {
                        O("window", "Mutation observed: " + t[0].target + " " + t[0].type), H(e, 16);
                    }
                    var n = w();
                    n && (i = document.querySelector("body"), new n(t).observe(i, {
                        attributes: !0,
                        attributeOldValue: !1,
                        characterData: !0,
                        characterDataOldValue: !1,
                        childList: !0,
                        subtree: !0
                    }));
                    var i;
                }());
            }
            function n(n) {
                !function(t) {
                    e.id ? (e.iframe.style[t] = e[t] + "px", O(e.id, "IFrame (" + i + ") " + t + " set to " + e[t] + "px")) : O("undefined", "messageData id not set");
                }(n), t(n);
            }
            var i = e.iframe.id;
            p[i] && (p[i].sizeHeight && n("height"), p[i].sizeWidth && n("width"));
        }
        function L(e, t, n) {
            n !== t.type && g && !window.jasmine ? (O(t.id, "Requesting animation frame"), g(e)) : e();
        }
        function j(e, t, n, i, o) {
            var r, a = !1;
            i = i || n.id, p[i] && (n && "contentWindow" in n && null !== n.contentWindow ? (r = p[i] && p[i].targetOrigin, 
            O(i, "[" + e + "] Sending msg to iframe[" + i + "] (" + t + ") targetOrigin: " + r), 
            n.contentWindow.postMessage(l + t, r)) : _(i, "[" + e + "] IFrame(" + i + ") not found"), 
            o && p[i] && p[i].warningTimeout && (p[i].msgTimeout = setTimeout(function() {
                !p[i] || p[i].loaded || a || (a = !0, _(i, "IFrame has not responded within " + p[i].warningTimeout / 1e3 + " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."));
            }, p[i].warningTimeout)));
        }
        function B(e) {
            return e + ":" + p[e].bodyMarginV1 + ":" + p[e].sizeWidth + ":" + p[e].log + ":" + p[e].interval + ":" + p[e].enablePublicMethods + ":" + p[e].autoResize + ":" + p[e].bodyMargin + ":" + p[e].heightCalculationMethod + ":" + p[e].bodyBackground + ":" + p[e].bodyPadding + ":" + p[e].tolerance + ":" + p[e].inPageLinks + ":" + p[e].resizeFrom + ":" + p[e].widthCalculationMethod;
        }
        function q(e, t) {
            function n(e) {
                var t = e.split("Callback");
                if (2 === t.length) {
                    var n = "on" + t[0].charAt(0).toUpperCase() + t[0].slice(1);
                    this[n] = this[e], delete this[e], _(r, "Deprecated: '" + e + "' has been renamed '" + n + "'. The old method will be removed in the next major version.");
                }
            }
            var i, o, r = function(n) {
                var i;
                return "" === n && (e.id = (i = t && t.id || b.id + s++, null !== document.getElementById(i) && (i += s++), 
                n = i), d = (t || {}).log, O(n, "Added missing iframe ID: " + n + " (" + e.src + ")")), 
                n;
            }(e.id);
            r in p && "iFrameResizer" in e ? _(r, "Ignored iFrame, already setup.") : (!function(t) {
                var i;
                t = t || {}, p[r] = {
                    firstRun: !0,
                    iframe: e,
                    remoteHost: e.src && e.src.split("/").slice(0, 3).join("/")
                }, function(e) {
                    if ("object" != typeof e) throw new TypeError("Options is not an object");
                }(t), Object.keys(t).forEach(n, t), function(e) {
                    for (var t in b) Object.prototype.hasOwnProperty.call(b, t) && (p[r][t] = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : b[t]);
                }(t), p[r] && (p[r].targetOrigin = !0 === p[r].checkOrigin ? "" === (i = p[r].remoteHost) || null !== i.match(/^(about:blank|javascript:|file:\/\/)/) ? "*" : i : "*");
            }(t), function() {
                switch (O(r, "IFrame scrolling " + (p[r] && p[r].scrolling ? "enabled" : "disabled") + " for " + r), 
                e.style.overflow = !1 === (p[r] && p[r].scrolling) ? "hidden" : "auto", p[r] && p[r].scrolling) {
                  case "omit":
                    break;

                  case !0:
                    e.scrolling = "yes";
                    break;

                  case !1:
                    e.scrolling = "no";
                    break;

                  default:
                    e.scrolling = p[r] ? p[r].scrolling : "no";
                }
            }(), function() {
                function t(t) {
                    1 / 0 !== p[r][t] && 0 !== p[r][t] && (e.style[t] = p[r][t] + "px", O(r, "Set " + t + " = " + p[r][t] + "px"));
                }
                function n(e) {
                    if (p[r]["min" + e] > p[r]["max" + e]) throw new Error("Value for min" + e + " can not be greater than max" + e);
                }
                n("Height"), n("Width"), t("maxHeight"), t("minHeight"), t("maxWidth"), t("minWidth");
            }(), "number" != typeof (p[r] && p[r].bodyMargin) && "0" !== (p[r] && p[r].bodyMargin) || (p[r].bodyMarginV1 = p[r].bodyMargin, 
            p[r].bodyMargin = p[r].bodyMargin + "px"), i = B(r), (o = w()) && function(t) {
                e.parentNode && new t(function(t) {
                    t.forEach(function(t) {
                        Array.prototype.slice.call(t.removedNodes).forEach(function(t) {
                            t === e && S(e);
                        });
                    });
                }).observe(e.parentNode, {
                    childList: !0
                });
            }(o), E(e, "load", function() {
                var t, n;
                j("iFrame.onload", i, e, void 0, !0), t = p[r] && p[r].firstRun, n = p[r] && p[r].heightCalculationMethod in h, 
                !t && n && P({
                    iframe: e,
                    height: 0,
                    width: 0,
                    type: "init"
                });
            }), j("init", i, e, void 0, !0), p[r] && (p[r].iframe.iFrameResizer = {
                close: S.bind(null, p[r].iframe),
                removeListeners: A.bind(null, p[r].iframe),
                resize: j.bind(null, "Window resize", "resize", p[r].iframe),
                moveToAnchor: function(e) {
                    j("Move to anchor", "moveToAnchor:" + e, p[r].iframe, r);
                },
                sendMessage: function(e) {
                    j("Send Message", "message:" + (e = JSON.stringify(e)), p[r].iframe, r);
                }
            }));
        }
        function H(e, t) {
            null === y && (y = setTimeout(function() {
                y = null, e();
            }, t));
        }
        function D() {
            "hidden" !== document.visibilityState && (O("document", "Trigger event: Visiblity change"), 
            H(function() {
                U("Tab Visable", "resize");
            }, 16));
        }
        function U(e, t) {
            Object.keys(p).forEach(function(n) {
                (function(e) {
                    return p[e] && "parent" === p[e].resizeFrom && p[e].autoResize && !p[e].firstRun;
                })(n) && j(e, t, p[n].iframe, n);
            });
        }
        function V() {
            E(window, "message", C), E(window, "resize", function() {
                var e;
                O("window", "Trigger event: " + (e = "resize")), H(function() {
                    U("Window " + e, "resize");
                }, 16);
            }), E(document, "visibilitychange", D), E(document, "-webkit-visibilitychange", D);
        }
        function G() {
            function e(e, n) {
                n && (!function() {
                    if (!n.tagName) throw new TypeError("Object is not a valid DOM element");
                    if ("IFRAME" !== n.tagName.toUpperCase()) throw new TypeError("Expected <IFRAME> tag, found <" + n.tagName + ">");
                }(), q(n, e), t.push(n));
            }
            var t;
            return function() {
                var e, t = [ "moz", "webkit", "o", "ms" ];
                for (e = 0; e < t.length && !g; e += 1) g = window[t[e] + "RequestAnimationFrame"];
                g ? g = g.bind(window) : O("setup", "RequestAnimationFrame not supported");
            }(), V(), function(n, i) {
                switch (t = [], function(e) {
                    e && e.enablePublicMethods && _("enablePublicMethods option has been removed, public methods are now always available in the iFrame");
                }(n), typeof i) {
                  case "undefined":
                  case "string":
                    Array.prototype.forEach.call(document.querySelectorAll(i || "iframe"), e.bind(void 0, n));
                    break;

                  case "object":
                    e(n, i);
                    break;

                  default:
                    throw new TypeError("Unexpected data type (" + typeof i + ")");
                }
                return t;
            };
        }
    }();
}, function(e, t, n) {
    !function(t) {
        if ("undefined" != typeof window) {
            var n = !0, i = "", o = 0, r = "", a = null, s = "", d = !1, c = {
                resize: 1,
                click: 1
            }, u = !0, l = 1, m = "bodyOffset", f = !0, g = "", h = {}, p = 32, y = null, b = !1, v = "[iFrameSizer]", w = v.length, E = "", I = {
                max: 1,
                min: 1,
                bodyScroll: 1,
                documentElementScroll: 1
            }, T = "child", x = window.parent, O = "*", M = 0, _ = !1, k = null, C = 16, N = 1, A = "scroll", S = window, R = function() {
                ne("onMessage function not defined");
            }, z = function() {}, F = function() {}, P = {
                height: function() {
                    return ne("Custom height calculation function not defined"), document.documentElement.offsetHeight;
                },
                width: function() {
                    return ne("Custom width calculation function not defined"), document.body.scrollWidth;
                }
            }, W = {}, L = !1;
            try {
                var j = Object.create({}, {
                    passive: {
                        get: function() {
                            L = !0;
                        }
                    }
                });
                window.addEventListener("test", K, j), window.removeEventListener("test", K, j);
            } catch (e) {}
            var B, q, H, D, U, V, G, J = Date.now || function() {
                return new Date().getTime();
            }, Q = {
                bodyOffset: function() {
                    return document.body.offsetHeight + fe("marginTop") + fe("marginBottom");
                },
                offset: function() {
                    return Q.bodyOffset();
                },
                bodyScroll: function() {
                    return document.body.scrollHeight;
                },
                custom: function() {
                    return P.height();
                },
                documentElementOffset: function() {
                    return document.documentElement.offsetHeight;
                },
                documentElementScroll: function() {
                    return document.documentElement.scrollHeight;
                },
                max: function() {
                    return Math.max.apply(null, he(Q));
                },
                min: function() {
                    return Math.min.apply(null, he(Q));
                },
                grow: function() {
                    return Q.max();
                },
                lowestElement: function() {
                    return Math.max(Q.bodyOffset() || Q.documentElementOffset(), ge("bottom", ye()));
                },
                taggedElement: function() {
                    return pe("bottom", "data-iframe-height");
                }
            }, X = {
                bodyScroll: function() {
                    return document.body.scrollWidth;
                },
                bodyOffset: function() {
                    return document.body.offsetWidth;
                },
                custom: function() {
                    return P.width();
                },
                documentElementScroll: function() {
                    return document.documentElement.scrollWidth;
                },
                documentElementOffset: function() {
                    return document.documentElement.offsetWidth;
                },
                scroll: function() {
                    return Math.max(X.bodyScroll(), X.documentElementScroll());
                },
                max: function() {
                    return Math.max.apply(null, he(X));
                },
                min: function() {
                    return Math.min.apply(null, he(X));
                },
                rightMostElement: function() {
                    return ge("right", ye());
                },
                taggedElement: function() {
                    return pe("right", "data-iframe-width");
                }
            }, Y = (B = be, U = null, V = 0, G = function() {
                V = J(), U = null, D = B.apply(q, H), U || (q = H = null);
            }, function() {
                var e = J();
                V || (V = e);
                var t = C - (e - V);
                return q = this, H = arguments, t <= 0 || t > C ? (U && (clearTimeout(U), U = null), 
                V = e, D = B.apply(q, H), U || (q = H = null)) : U || (U = setTimeout(G, t)), D;
            });
            Z(window, "message", function(t) {
                var n = {
                    init: function() {
                        g = t.data, x = t.source, ie(), u = !1, setTimeout(function() {
                            f = !1;
                        }, 128);
                    },
                    reset: function() {
                        f ? te("Page reset ignored by init") : (te("Page size reset by host page"), Ee("resetPage"));
                    },
                    resize: function() {
                        ve("resizeParent", "Parent window requested size check");
                    },
                    moveToAnchor: function() {
                        h.findTarget(o());
                    },
                    inPageLink: function() {
                        this.moveToAnchor();
                    },
                    pageInfo: function() {
                        var e = o();
                        te("PageInfoFromParent called from parent: " + e), F(JSON.parse(e)), te(" --");
                    },
                    message: function() {
                        var e = o();
                        te("onMessage called from parent: " + e), R(JSON.parse(e)), te(" --");
                    }
                };
                function i() {
                    return t.data.split("]")[1].split(":")[0];
                }
                function o() {
                    return t.data.substr(t.data.indexOf(":") + 1);
                }
                function r() {
                    return t.data.split(":")[2] in {
                        "true": 1,
                        "false": 1
                    };
                }
                function a() {
                    var o = i();
                    o in n ? n[o]() : !e.exports && "iFrameResize" in window || "jQuery" in window && "iFrameResize" in window.jQuery.prototype || r() || ne("Unexpected message (" + t.data + ")");
                }
                v === ("" + t.data).substr(0, w) && (!1 === u ? a() : r() ? n.init() : te('Ignored message of type "' + i() + '". Received before initialization.'));
            }), Z(window, "readystatechange", xe), xe();
        }
        function K() {}
        function Z(e, t, n, i) {
            e.addEventListener(t, n, !!L && (i || {}));
        }
        function $(e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
        }
        function ee(e) {
            return v + "[" + E + "] " + e;
        }
        function te(e) {
            b && "object" == typeof window.console && console.log(ee(e));
        }
        function ne(e) {
            "object" == typeof window.console && console.warn(ee(e));
        }
        function ie() {
            var e;
            !function() {
                function e(e) {
                    return "true" === e;
                }
                var t = g.substr(w).split(":");
                E = t[0], o = void 0 !== t[1] ? Number(t[1]) : o, d = void 0 !== t[2] ? e(t[2]) : d, 
                b = void 0 !== t[3] ? e(t[3]) : b, p = void 0 !== t[4] ? Number(t[4]) : p, n = void 0 !== t[6] ? e(t[6]) : n, 
                r = t[7], m = void 0 !== t[8] ? t[8] : m, i = t[9], s = t[10], M = void 0 !== t[11] ? Number(t[11]) : M, 
                h.enable = void 0 !== t[12] && e(t[12]), T = void 0 !== t[13] ? t[13] : T, A = void 0 !== t[14] ? t[14] : A;
            }(), te("Initialising iFrame (" + location.href + ")"), function() {
                function e(e, t) {
                    return "function" == typeof e && (te("Setup custom " + t + "CalcMethod"), P[t] = e, 
                    e = "custom"), e;
                }
                "iFrameResizer" in window && Object === window.iFrameResizer.constructor && (t = window.iFrameResizer, 
                te("Reading data from page: " + JSON.stringify(t)), Object.keys(t).forEach(oe, t), 
                R = "onMessage" in t ? t.onMessage : R, z = "onReady" in t ? t.onReady : z, O = "targetOrigin" in t ? t.targetOrigin : O, 
                m = "heightCalculationMethod" in t ? t.heightCalculationMethod : m, A = "widthCalculationMethod" in t ? t.widthCalculationMethod : A, 
                m = e(m, "height"), A = e(A, "width"));
                var t;
                te("TargetOrigin for parent set to: " + O);
            }(), function() {
                void 0 === r && (r = o + "px");
                re("margin", function(e, t) {
                    -1 !== t.indexOf("-") && (ne("Negative CSS value ignored for " + e), t = "");
                    return t;
                }("margin", r));
            }(), re("background", i), re("padding", s), (e = document.createElement("div")).style.clear = "both", 
            e.style.display = "block", e.style.height = "0", document.body.appendChild(e), ce(), 
            ue(), document.documentElement.style.height = "", document.body.style.height = "", 
            te('HTML & body height set to "auto"'), te("Enable public methods"), S.parentIFrame = {
                autoResize: function(e) {
                    return !0 === e && !1 === n ? (n = !0, le()) : !1 === e && !0 === n && (n = !1, 
                    se("remove"), null !== a && a.disconnect(), clearInterval(y)), Te(0, 0, "autoResize", JSON.stringify(n)), 
                    n;
                },
                close: function() {
                    Te(0, 0, "close");
                },
                getId: function() {
                    return E;
                },
                getPageInfo: function(e) {
                    "function" == typeof e ? (F = e, Te(0, 0, "pageInfo")) : (F = function() {}, Te(0, 0, "pageInfoStop"));
                },
                moveToAnchor: function(e) {
                    h.findTarget(e);
                },
                reset: function() {
                    Ie("parentIFrame.reset");
                },
                scrollTo: function(e, t) {
                    Te(t, e, "scrollTo");
                },
                scrollToOffset: function(e, t) {
                    Te(t, e, "scrollToOffset");
                },
                sendMessage: function(e, t) {
                    Te(0, 0, "message", JSON.stringify(e), t);
                },
                setHeightCalculationMethod: function(e) {
                    m = e, ce();
                },
                setWidthCalculationMethod: function(e) {
                    A = e, ue();
                },
                setTargetOrigin: function(e) {
                    te("Set targetOrigin: " + e), O = e;
                },
                size: function(e, t) {
                    ve("size", "parentIFrame.size(" + (e || "") + (t ? "," + t : "") + ")", e, t);
                }
            }, le(), h = function() {
                function e(e) {
                    var t = e.getBoundingClientRect(), n = {
                        x: void 0 !== window.pageXOffset ? window.pageXOffset : document.documentElement.scrollLeft,
                        y: void 0 !== window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop
                    };
                    return {
                        x: parseInt(t.left, 10) + parseInt(n.x, 10),
                        y: parseInt(t.top, 10) + parseInt(n.y, 10)
                    };
                }
                function t(t) {
                    var n = t.split("#")[1] || t, i = decodeURIComponent(n), o = document.getElementById(i) || document.getElementsByName(i)[0];
                    void 0 !== o ? function(t) {
                        var i = e(t);
                        te("Moving to in page link (#" + n + ") at x: " + i.x + " y: " + i.y), Te(i.y, i.x, "scrollToOffset");
                    }(o) : (te("In page link (#" + n + ") not found in iFrame, so sending to parent"), 
                    Te(0, 0, "inPageLink", "#" + n));
                }
                function n() {
                    "" !== location.hash && "#" !== location.hash && t(location.href);
                }
                h.enable ? Array.prototype.forEach && document.querySelectorAll ? (te("Setting up location.hash handlers"), 
                Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), function(e) {
                    "#" !== e.getAttribute("href") && Z(e, "click", function(e) {
                        e.preventDefault(), t(this.getAttribute("href"));
                    });
                }), Z(window, "hashchange", n), setTimeout(n, 128)) : ne("In page linking not fully supported in this browser! (See README.md for IE8 workaround)") : te("In page linking not enabled");
                return {
                    findTarget: t
                };
            }(), ve("init", "Init message from host page"), z();
        }
        function oe(e) {
            var t = e.split("Callback");
            if (2 === t.length) {
                var n = "on" + t[0].charAt(0).toUpperCase() + t[0].slice(1);
                this[n] = this[e], delete this[e], ne("Deprecated: '" + e + "' has been renamed '" + n + "'. The old method will be removed in the next major version.");
            }
        }
        function re(e, t) {
            void 0 !== t && "" !== t && "null" !== t && (document.body.style[e] = t, te("Body " + e + ' set to "' + t + '"'));
        }
        function ae(e) {
            var t = {
                add: function(t) {
                    function n() {
                        ve(e.eventName, e.eventType);
                    }
                    W[t] = n, Z(window, t, n, {
                        passive: !0
                    });
                },
                remove: function(e) {
                    var t, n, i, o = W[e];
                    delete W[e], t = window, n = e, i = o, t.removeEventListener(n, i, !1);
                }
            };
            e.eventNames && Array.prototype.map ? (e.eventName = e.eventNames[0], e.eventNames.map(t[e.method])) : t[e.method](e.eventName), 
            te($(e.method) + " event listener: " + e.eventType);
        }
        function se(e) {
            ae({
                method: e,
                eventType: "Animation Start",
                eventNames: [ "animationstart", "webkitAnimationStart" ]
            }), ae({
                method: e,
                eventType: "Animation Iteration",
                eventNames: [ "animationiteration", "webkitAnimationIteration" ]
            }), ae({
                method: e,
                eventType: "Animation End",
                eventNames: [ "animationend", "webkitAnimationEnd" ]
            }), ae({
                method: e,
                eventType: "Input",
                eventName: "input"
            }), ae({
                method: e,
                eventType: "Mouse Up",
                eventName: "mouseup"
            }), ae({
                method: e,
                eventType: "Mouse Down",
                eventName: "mousedown"
            }), ae({
                method: e,
                eventType: "Orientation Change",
                eventName: "orientationchange"
            }), ae({
                method: e,
                eventType: "Print",
                eventName: [ "afterprint", "beforeprint" ]
            }), ae({
                method: e,
                eventType: "Ready State Change",
                eventName: "readystatechange"
            }), ae({
                method: e,
                eventType: "Touch Start",
                eventName: "touchstart"
            }), ae({
                method: e,
                eventType: "Touch End",
                eventName: "touchend"
            }), ae({
                method: e,
                eventType: "Touch Cancel",
                eventName: "touchcancel"
            }), ae({
                method: e,
                eventType: "Transition Start",
                eventNames: [ "transitionstart", "webkitTransitionStart", "MSTransitionStart", "oTransitionStart", "otransitionstart" ]
            }), ae({
                method: e,
                eventType: "Transition Iteration",
                eventNames: [ "transitioniteration", "webkitTransitionIteration", "MSTransitionIteration", "oTransitionIteration", "otransitioniteration" ]
            }), ae({
                method: e,
                eventType: "Transition End",
                eventNames: [ "transitionend", "webkitTransitionEnd", "MSTransitionEnd", "oTransitionEnd", "otransitionend" ]
            }), "child" === T && ae({
                method: e,
                eventType: "IFrame Resized",
                eventName: "resize"
            });
        }
        function de(e, t, n, i) {
            return t !== e && (e in n || (ne(e + " is not a valid option for " + i + "CalculationMethod."), 
            e = t), te(i + ' calculation method set to "' + e + '"')), e;
        }
        function ce() {
            m = de(m, "bodyOffset", Q, "height");
        }
        function ue() {
            A = de(A, "scroll", X, "width");
        }
        function le() {
            var e;
            !0 === n ? (se("add"), e = 0 > p, window.MutationObserver || window.WebKitMutationObserver ? e ? me() : a = function() {
                function e(e) {
                    function t(e) {
                        !1 === e.complete && (te("Attach listeners to " + e.src), e.addEventListener("load", i, !1), 
                        e.addEventListener("error", o, !1), a.push(e));
                    }
                    "attributes" === e.type && "src" === e.attributeName ? t(e.target) : "childList" === e.type && Array.prototype.forEach.call(e.target.querySelectorAll("img"), t);
                }
                function t(e) {
                    te("Remove listeners from " + e.src), e.removeEventListener("load", i, !1), e.removeEventListener("error", o, !1), 
                    function(e) {
                        a.splice(a.indexOf(e), 1);
                    }(e);
                }
                function n(e, n, i) {
                    t(e.target), ve(n, i + ": " + e.target.src, void 0, void 0);
                }
                function i(e) {
                    n(e, "imageLoad", "Image loaded");
                }
                function o(e) {
                    n(e, "imageLoadFailed", "Image load failed");
                }
                function r(t) {
                    ve("mutationObserver", "mutationObserver: " + t[0].target + " " + t[0].type), t.forEach(e);
                }
                var a = [], s = window.MutationObserver || window.WebKitMutationObserver, d = function() {
                    var e = document.querySelector("body");
                    return d = new s(r), te("Create body MutationObserver"), d.observe(e, {
                        attributes: !0,
                        attributeOldValue: !1,
                        characterData: !0,
                        characterDataOldValue: !1,
                        childList: !0,
                        subtree: !0
                    }), d;
                }();
                return {
                    disconnect: function() {
                        "disconnect" in d && (te("Disconnect body MutationObserver"), d.disconnect(), a.forEach(t));
                    }
                };
            }() : (te("MutationObserver not supported in this browser!"), me())) : te("Auto Resize disabled");
        }
        function me() {
            0 !== p && (te("setInterval: " + p + "ms"), y = setInterval(function() {
                ve("interval", "setInterval: " + p);
            }, Math.abs(p)));
        }
        function fe(e, t) {
            var n = 0;
            return t = t || document.body, n = null !== (n = document.defaultView.getComputedStyle(t, null)) ? n[e] : 0, 
            parseInt(n, 10);
        }
        function ge(e, t) {
            for (var n = t.length, i = 0, o = 0, r = $(e), a = J(), s = 0; s < n; s++) (i = t[s].getBoundingClientRect()[e] + fe("margin" + r, t[s])) > o && (o = i);
            return a = J() - a, te("Parsed " + n + " HTML elements"), te("Element position calculated in " + a + "ms"), 
            function(e) {
                e > C / 2 && te("Event throttle increased to " + (C = 2 * e) + "ms");
            }(a), o;
        }
        function he(e) {
            return [ e.bodyOffset(), e.bodyScroll(), e.documentElementOffset(), e.documentElementScroll() ];
        }
        function pe(e, t) {
            var n = document.querySelectorAll("[" + t + "]");
            return 0 === n.length && (ne("No tagged elements (" + t + ") found on page"), document.querySelectorAll("body *")), 
            ge(e, n);
        }
        function ye() {
            return document.querySelectorAll("body *");
        }
        function be(e, t, n, i) {
            var o, r;
            !function() {
                function e(e, t) {
                    return !(Math.abs(e - t) <= M);
                }
                return o = void 0 !== n ? n : Q[m](), r = void 0 !== i ? i : X[A](), e(l, o) || d && e(N, r);
            }() && "init" !== e ? !(e in {
                init: 1,
                interval: 1,
                size: 1
            }) && (m in I || d && A in I) ? Ie(t) : e in {
                interval: 1
            } || te("No change in size detected") : (we(), Te(l = o, N = r, e));
        }
        function ve(e, t, n, i) {
            _ && e in c ? te("Trigger event cancelled: " + e) : (e in {
                reset: 1,
                resetPage: 1,
                init: 1
            } || te("Trigger event: " + t), "init" === e ? be(e, t, n, i) : Y(e, t, n, i));
        }
        function we() {
            _ || (_ = !0, te("Trigger event lock on")), clearTimeout(k), k = setTimeout(function() {
                _ = !1, te("Trigger event lock off"), te("--");
            }, 128);
        }
        function Ee(e) {
            l = Q[m](), N = X[A](), Te(l, N, e);
        }
        function Ie(e) {
            var t = m;
            m = "bodyOffset", te("Reset trigger event: " + e), we(), Ee("reset"), m = t;
        }
        function Te(e, t, n, i, o) {
            var r;
            void 0 === o ? o = O : te("Message targetOrigin: " + o), te("Sending message to host page (" + (r = E + ":" + e + ":" + t + ":" + n + (void 0 !== i ? ":" + i : "")) + ")"), 
            x.postMessage(v + r, o);
        }
        function xe() {
            "loading" !== document.readyState && window.parent.postMessage("[iFrameResizerChild]Ready", "*");
        }
    }();
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var i, o = n(0), r = n.n(o);
    (i = {
        settings: {
            version: .97,
            container: "ibe",
            debug: !1,
            region: "apac",
            region_subdomain: {
                emea: "app",
                apac: "app-apac"
            },
            domain: "thebookingbutton.com",
            property_customdomain: !1,
            templates: {
                property: "https://{region_subdomain}.{domain}/{clientid}properties/{channelcode}",
                property_customdomain: "https://{property_customdomain}/{clientid}properties/{channelcode}",
                widgets: {
                    ga_proxy: "https://{region_subdomain}.{domain}/{clientid}/ga_proxy",
                    ga_proxy_customdomain: "https://{property_customdomain}/{clientid}/ga_proxy",
                    property_check_availability: "https://{region_subdomain}.{domain}/properties/{channelcode}/booking_widget",
                    property_check_availability_customdomain: "https://{property_customdomain}/properties/{channelcode}/booking_widget",
                    property_grid: "https://{region_subdomain}.{domain}/properties/{channelcode}/widget",
                    property_grid_customdomain: "https://{property_customdomain}/properties/{channelcode}/widget"
                }
            },
            ga_active: void 0 !== window[window.GoogleAnalyticsObject] == 1,
            ga_classname: "ibe_decorate",
            query: [],
            postmessage_domains: [],
            allowed_query_vars: [ "check_in_date", "check_out_date", "number_nights", "number_adults", "number_children", "number_infants", "promo_code", "campaign", "locale", "currency", "room_type", "room_rate", "rate_plan" ],
            mobile_fullscreen: "true"
        },
        googleAnalyticsObject: window[window.GoogleAnalyticsObject],
        getElements: function(e) {
            if (document.getElementsByClassName) return document.getElementsByClassName(e);
            var t = [], n = document.getElementsByTagName("*");
            for (var i in n) if (n[i].className && -1 !== n[i].className.indexOf(e)) {
                var o = n[i].className.split(" ");
                for (var r in o) if (o[r] == e) {
                    t.push(n[i]);
                    break;
                }
            }
            return t;
        },
        getDataAttributes: function(e) {
            for (var t = {
                query: []
            }, n = e.attributes, i = n.length, o = 0; o < i; o++) 2 === n.item(o).nodeType && 0 === n.item(o).name.indexOf("data-") && n.item(o).value.length && (0 === n.item(o).name.indexOf("data-query-") ? t.query.push(n.item(o).name.substr(11).toLowerCase() + "=" + escape(n.item(o).value)) : t[n.item(o).name.substr(5).toLowerCase()] = n.item(o).value);
            return t;
        },
        getUrlParameters: function(e) {
            var t = document.location.href.split("?")[1];
            if (t && t.length) {
                var n = t.split("&");
                for (var i in n) {
                    var o = n[i].split("=");
                    this.settings.allowed_query_vars.indexOf(o[0]) >= 0 && o[1].length && e.push(n[i]);
                }
            }
            return e;
        },
        extend: function(e, t) {
            var n = {};
            for (var i in e) n[i] = e[i];
            for (var i in t) n[i] = t[i];
            return n;
        },
        getLinker: function(e) {
            return e ? e.get("linkerParam") : ga.getAll()[0].get("linkerParam");
        },
        decorate: function(e) {
            var t = i.getLinker(e), n = i.getElements(i.settings.ga_classname);
            for (var o in n) {
                var r = n[o];
                if (r.getAttribute && r.getAttribute("data-dst")) {
                    if ("IFRAME" === r.tagName) r.setAttribute("src", i.getDecoratedURL(r, t)); else if ("FORM" === r.tagName) {
                        r.action = r.getAttribute("data-dst");
                        var a = t.split("&");
                        for (var o in a) {
                            var s = a[o].split("="), d = document.createElement("input");
                            d.setAttribute("name", s[0]), d.setAttribute("value", s[1]), d.setAttribute("type", "hidden"), 
                            d.name = s[0], d.value = s[1], d.type = "hidden", r.appendChild(d);
                        }
                    } else r.setAttribute("href", i.getDecoratedURL(r, t));
                    r.removeAttribute("data-dst");
                }
            }
        },
        getQuerySeparatorForUrl: function(e) {
            return e.indexOf("?") > 0 ? "&" : "?";
        },
        getDecoratedURL: function(e, t) {
            var n = e.getAttribute("data-dst");
            return n + i.getQuerySeparatorForUrl(n) + t;
        },
        getPropertyUrl: function(e, t) {
            return e.channelcode || i.debug("IBE: No Property Channelcode found!"), (!1 !== t && i.settings.templates.widgets[t] ? !1 !== e.property_customdomain ? i.settings.templates.widgets[t + "_customdomain"].replace("{property_customdomain}", e.property_customdomain) : i.settings.templates.widgets[t].replace("{region_subdomain}", e.region_subdomain[e.region]).replace("{domain}", e.domain) : !1 !== e.property_customdomain ? i.settings.templates.property_customdomain.replace("{property_customdomain}", e.property_customdomain) : i.settings.templates.property.replace("{region_subdomain}", e.region_subdomain[e.region]).replace("{domain}", e.domain)).replace("{channelcode}", escape(e.channelcode)).replace("{clientid}", i.formatClientId(e)) + (e.query.length > 0 ? "?" + e.query.join("&") : "");
        },
        formatClientId: function(e) {
            return e.clientid ? escape(e.clientid) + "/" : "";
        },
        decorate_debug: function(e) {
            var t = e ? e.get("trackingId") : ga.getAll()[0].get("trackingId"), n = i.getElements(i.settings.ga_classname);
            i.debug("IBE: Decorating " + n.length + ' Links, Forms or Frames with cross-domain tracking for Google Analytics Client ID "' + t + '"');
        },
        debug: function(e) {
            i.settings.debug && console.log(e);
        },
        backwardCompatibleWidgetGA: function(e) {
            if (this.settings.ga_active && !document.getElementById("ga_proxy_" + e.channelcode)) if (e.clientid) {
                i.debug('IBE: Creating Proxy Frame for cross-domain tracking for clientID "' + e.clientid + '"');
                var t = document.createElement("iframe");
                t.style.display = "none", t.style.width = "1px", t.style.height = "1px", t.style.overflow = "hidden", 
                t.setAttribute("data-dst", this.getPropertyUrl(this.extend(this.settings, e), "ga_proxy")), 
                t.className += " " + this.settings.ga_classname, t.id = "ga_proxy_" + e.channelcode, 
                document.body.appendChild(t);
            } else i.debug("IBE: Cross-domain Tracking requires a clientID to be set up");
        },
        go: function() {
            var e = this;
            this.settings = this.extend(this.settings, this.getDataAttributes(document.body)), 
            this.debug("IBE: Initiating IBE.JS Version " + this.settings.version);
            var t = this.getElements(this.settings.container), n = t.length;
            this.debug("IBE: Found " + n + ' Elements with class name "' + this.settings.container + '":', t);
            for (var o = !1, a = 0; a < n; a++) if ("DIV" === t[a].tagName) {
                var s = this.getDataAttributes(t[a]);
                s.query = this.getUrlParameters(s.query);
                var d = this.extend(this.settings, s);
                if (this.debug("IBE Widget Settings: \n ".concat(JSON.stringify(d, null, 2))), "property_check_availability" == s.widget.toLowerCase()) this.debug("IBE: Creating Property check availability widget"), 
                (c = document.createElement("iframe")).style.border = "none", c.style.width = "250px", 
                c.style.height = "200px", c.style.overflow = "hidden", c.setAttribute("src", this.getPropertyUrl(this.extend(this.settings, s), "property_check_availability")), 
                t[a].appendChild(c), this.backwardCompatibleWidgetGA(this.extend(this.settings, s)); else if ("property_grid" == s.widget.toLowerCase()) this.debug("IBE: Creating Property Availability Grid widget"), 
                (c = document.createElement("iframe")).style.border = "none", c.style.width = "100%", 
                c.style.minWidth = "800px", c.style.height = (s.height || 500) + "px", c.style.overflowX = "hidden", 
                c.setAttribute("src", this.getPropertyUrl(this.extend(this.settings, s), "property_grid")), 
                t[a].appendChild(c), this.backwardCompatibleWidgetGA(this.extend(this.settings, s)); else if ("embed" == s.widget.toLowerCase()) {
                    var c;
                    if ((c = document.createElement("iframe")).className = this.settings.container, 
                    c.style.border = "none", c.style.width = "100%", screen.width < 768) {
                        this.debug("IBE: Creating embedded widget: Mobile Version");
                        var u = document.createElement("meta");
                        u.name = "viewport", u.content = "initial-scale=1, maximum-scale=1, minimum-scale=1", 
                        document.getElementsByTagName("head")[0].appendChild(u), c.style.width = "100%", 
                        c.style.height = "100%", c.style.position = "static", "true" === d.mobile_fullscreen && (this.debug("IBE: Mobile Version - in fullscreen mode"), 
                        c.style.position = "absolute", c.style.top = 0, document.body.style.overflow = "hidden"), 
                        document.body.style.padding = 0, document.body.style.margin = 0, document.body.style.position = "unset";
                    } else {
                        var l = screen.width < 1024;
                        this.debug("IBE: Creating embedded widget: ".concat(l ? "Tablet" : "Desktop", " Version")), 
                        s.query.push("skin=0"), c.setAttribute("scrolling", "no"), c.style.overflow = "hidden", 
                        c.style.height = "900px", c.style.minWidth = "768px", c.style.maxWidth = "1024px", 
                        c.style.borderRadius = "3px", window.postMessage && (c.style.height = "200px", c.style.overflow = "hidden", 
                        c.className += " " + this.settings.container + "fr"), o = !0;
                    }
                    if (c.setAttribute(this.settings.ga_active ? "data-dst" : "src", this.getPropertyUrl(this.extend(this.settings, s), !1)), 
                    this.settings.ga_active && (c.className += " " + this.settings.ga_classname), screen.width < 768 && "true" === d.mobile_fullscreen) {
                        this.debug("IBE: Creating embedded widget: Mobile Version - in fullscreen mode - hiding all other body elements");
                        var m = document.body.childNodes;
                        for (n = m.length, a = 0; a < n; a++) 1 == m[a].nodeType && "SCRIPT" !== m[a].tagName && (m[a].style.display = "none");
                        document.body.appendChild(c);
                    } else t[a].appendChild(c);
                    o && window.postMessage && r.a.iframeResizer({
                        log: !1,
                        checkOrigin: !1
                    }, "." + this.settings.container + "fr"), "false" === d.mobile_fullscreen && (c.onload = function() {
                        setTimeout(function() {
                            e.debug("..scrolling up.."), document.body.scrollTo(0, 0), e.debug("..done scrolling up..");
                        }, 1e3);
                    });
                    break;
                }
            } else t[a].setAttribute(this.settings.ga_active ? "data-dst" : "FORM" === t[a].tagName ? "action" : "href", this.getPropertyUrl(this.extend(this.settings, this.getDataAttributes(t[a])), !1)), 
            this.settings.ga_active && (t[a].className += " " + this.settings.ga_classname);
            return this.settings.ga_active || "undefined" == typeof dataLayer || console.warn("IBE: dataLayer found but Google Analytics seems to be missing: Ensure Analytics is placed before ibe.js"), 
            this.settings.ga_active ? (this.googleAnalyticsObject(i.decorate), this.settings.debug && (console.log("IBE: Google Analytics found"), 
            this.googleAnalyticsObject(i.decorate_debug))) : this.debug("IBE: No Google Analytics found: Ensure Analytics is placed before ibe.js"), 
            this;
        }
    }).go();
} ]);