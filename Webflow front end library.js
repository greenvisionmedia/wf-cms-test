//This is just webflow.js, run through jsNice
//AFAIK this is unrelated to CMS stuff

/**
 * @license
 Webflow: Front-end site library
 @license MIT
 Inline scripts may access the api using an async handler:
   var Webflow = Webflow || [];
   Webflow.push(readyFunction);
 Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 _.each
 _.map
 _.find
 _.filter
 _.any
 _.contains
 _.delay
 _.defer
 _.throttle (webflow)
 _.debounce
 _.keys
 _.has
 _.now

 http://underscorejs.org
 (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 Underscore may be freely distributed under the MIT license.
 @license MIT
*/
'use strict';
!function(m) {
  /**
   * @param {number} i
   * @return {?}
   */
  function t(i) {
    if (n[i]) {
      return n[i].exports;
    }
    var module = n[i] = {
      i : i,
      l : false,
      exports : {}
    };
    return m[i].call(module.exports, module, module.exports, t), module.l = true, module.exports;
  }
  var n = {};
  /** @type {!Array} */
  t.m = m;
  t.c = n;
  /**
   * @param {!Function} d
   * @param {string} name
   * @param {!Function} n
   * @return {undefined}
   */
  t.d = function(d, name, n) {
    if (!t.o(d, name)) {
      Object.defineProperty(d, name, {
        enumerable : true,
        get : n
      });
    }
  };
  /**
   * @param {!Object} x
   * @return {undefined}
   */
  t.r = function(x) {
    if ("undefined" != typeof Symbol && Symbol.toStringTag) {
      Object.defineProperty(x, Symbol.toStringTag, {
        value : "Module"
      });
    }
    Object.defineProperty(x, "__esModule", {
      value : true
    });
  };
  /**
   * @param {number} val
   * @param {number} byteOffset
   * @return {?}
   */
  t.t = function(val, byteOffset) {
    if (1 & byteOffset && (val = t(val)), 8 & byteOffset) {
      return val;
    }
    if (4 & byteOffset && "object" == typeof val && val && val.__esModule) {
      return val;
    }
    /** @type {!Object} */
    var d = Object.create(null);
    if (t.r(d), Object.defineProperty(d, "default", {
      enumerable : true,
      value : val
    }), 2 & byteOffset && "string" != typeof val) {
      var s;
      for (s in val) {
        t.d(d, s, function(attrPropertyName) {
          return val[attrPropertyName];
        }.bind(null, s));
      }
    }
    return d;
  };
  /**
   * @param {!Object} module
   * @return {?}
   */
  t.n = function(module) {
    /** @type {function(): ?} */
    var n = module && module.__esModule ? function() {
      return module.default;
    } : function() {
      return module;
    };
    return t.d(n, "a", n), n;
  };
  /**
   * @param {!Function} e
   * @param {string} input
   * @return {?}
   */
  t.o = function(e, input) {
    return Object.prototype.hasOwnProperty.call(e, input);
  };
  /** @type {string} */
  t.p = "";
  t(t.s = 2);
}([function(mixin, canCreateDiscussions, fn) {
  /**
   * @param {!Object} opts
   * @return {undefined}
   */
  function next(opts) {
    if (o.env()) {
      if (isFunction(opts.design)) {
        el.on("__wf_design", opts.design);
      }
      if (isFunction(opts.preview)) {
        el.on("__wf_preview", opts.preview);
      }
    }
    if (isFunction(opts.destroy)) {
      el.on("__wf_destroy", opts.destroy);
    }
    if (opts.ready && isFunction(opts.ready)) {
      (function(o) {
        if (awsSTSToken) {
          return void o.ready();
        }
        if ($.contains(results, o.ready)) {
          return;
        }
        results.push(o.ready);
      })(opts);
    }
  }
  /**
   * @param {!Object} opts
   * @return {undefined}
   */
  function callback(opts) {
    if (isFunction(opts.design)) {
      el.off("__wf_design", opts.design);
    }
    if (isFunction(opts.preview)) {
      el.off("__wf_preview", opts.preview);
    }
    if (isFunction(opts.destroy)) {
      el.off("__wf_destroy", opts.destroy);
    }
    if (opts.ready && isFunction(opts.ready)) {
      (function(self) {
        results = $.filter(results, function(status) {
          return status !== self.ready;
        });
      })(opts);
    }
  }
  /**
   * @param {string} self
   * @param {string} method
   * @return {?}
   */
  function main(self, method) {
    /** @type {!Array} */
    var args = [];
    var comp = {};
    return comp.up = $.throttle(function(notifications) {
      $.each(args, function(saveNotifs) {
        saveNotifs(notifications);
      });
    }), self && method && self.on(method, comp.up), comp.on = function(func) {
      if ("function" == typeof func) {
        if (!$.contains(args, func)) {
          args.push(func);
        }
      }
    }, comp.off = function(type) {
      args = arguments.length ? $.filter(args, function(p) {
        return p !== type;
      }) : [];
    }, comp;
  }
  /**
   * @param {?} value
   * @return {undefined}
   */
  function iterator(value) {
    if (isFunction(value)) {
      value();
    }
  }
  /**
   * @return {undefined}
   */
  function _rejectedPromise() {
    if (self) {
      self.reject();
      el.off("load", self.resolve);
    }
    self = new jQuery.Deferred;
    el.on("load", self.resolve);
  }
  var o = {};
  var returnedData = {};
  /** @type {!Array} */
  var results = [];
  var _readyFn = window.Webflow || [];
  var jQuery = window.jQuery;
  var el = jQuery(window);
  var c = jQuery(document);
  var isFunction = jQuery.isFunction;
  var $ = o._ = fn(4);
  var chartapp = o.tram = fn(1) && jQuery.tram;
  /** @type {boolean} */
  var awsSTSToken = false;
  /** @type {boolean} */
  var p = false;
  /** @type {boolean} */
  chartapp.config.hideBackface = false;
  /** @type {boolean} */
  chartapp.config.keepInherited = true;
  /**
   * @param {string} name
   * @param {!Function} callback
   * @param {?} isNew
   * @return {?}
   */
  o.define = function(name, callback, isNew) {
    if (returnedData[name]) {
      callback(returnedData[name]);
    }
    var result = returnedData[name] = callback(jQuery, $, isNew) || {};
    return next(result), result;
  };
  /**
   * @param {?} name
   * @return {?}
   */
  o.require = function(name) {
    return returnedData[name];
  };
  /**
   * @param {string} fn
   * @return {undefined}
   */
  o.push = function(fn) {
    if (awsSTSToken) {
      if (isFunction(fn)) {
        fn();
      }
    } else {
      _readyFn.push(fn);
    }
  };
  /**
   * @param {string} undefined
   * @return {?}
   */
  o.env = function(undefined) {
    var $nxtCollapsed = window.__wf_design;
    /** @type {boolean} */
    var $nxtCollasible = void 0 !== $nxtCollapsed;
    return undefined ? "design" === undefined ? $nxtCollasible && $nxtCollapsed : "preview" === undefined ? $nxtCollasible && !$nxtCollapsed : "slug" === undefined ? $nxtCollasible && window.__wf_slug : "editor" === undefined ? window.WebflowEditor : "test" === undefined ? window.__wf_test : "frame" === undefined ? window !== window.top : void 0 : $nxtCollasible;
  };
  var elem;
  /** @type {string} */
  var ua = navigator.userAgent.toLowerCase();
  var l = o.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
  /** @type {(boolean|number)} */
  var chrome = o.env.chrome = /chrome/.test(ua) && /Google/.test(navigator.vendor) && parseInt(ua.match(/chrome\/(\d+)\./)[1], 10);
  /** @type {boolean} */
  var x = o.env.ios = /(ipod|iphone|ipad)/.test(ua);
  /** @type {boolean} */
  o.env.safari = /safari/.test(ua) && !chrome && !x;
  if (l) {
    c.on("touchstart mousedown", function(eventObj) {
      elem = eventObj.target;
    });
  }
  /** @type {!Function} */
  o.validClick = l ? function(activeElem) {
    return activeElem === elem || jQuery.contains(activeElem, elem);
  } : function() {
    return true;
  };
  var self;
  /** @type {string} */
  var display = "resize.webflow orientationchange.webflow load.webflow";
  o.resize = main(el, display);
  o.scroll = main(el, "scroll.webflow resize.webflow orientationchange.webflow load.webflow");
  o.redraw = main();
  /**
   * @param {string} url
   * @return {undefined}
   */
  o.location = function(url) {
    /** @type {string} */
    window.location = url;
  };
  if (o.env()) {
    /**
     * @return {undefined}
     */
    o.location = function() {
    };
  }
  /**
   * @return {undefined}
   */
  o.ready = function() {
    /** @type {boolean} */
    awsSTSToken = true;
    if (p) {
      /** @type {boolean} */
      p = false;
      $.each(returnedData, next);
    } else {
      $.each(results, iterator);
    }
    $.each(_readyFn, iterator);
    o.resize.up();
  };
  /**
   * @param {?} t
   * @return {undefined}
   */
  o.load = function(t) {
    self.then(t);
  };
  /**
   * @param {number} options
   * @return {undefined}
   */
  o.destroy = function(options) {
    options = options || {};
    /** @type {boolean} */
    p = true;
    el.triggerHandler("__wf_destroy");
    if (null != options.domready) {
      awsSTSToken = options.domready;
    }
    $.each(returnedData, callback);
    o.resize.off();
    o.scroll.off();
    o.redraw.off();
    /** @type {!Array} */
    results = [];
    /** @type {!Array} */
    _readyFn = [];
    if ("pending" === self.state()) {
      _rejectedPromise();
    }
  };
  jQuery(o.ready);
  _rejectedPromise();
  mixin.exports = window.Webflow = o;
}, function(canCreateDiscussions, isSlidingUp, saveNotifs) {
  var _deepAssign2 = saveNotifs(5)(saveNotifs(6));
  window.tram = function(jQuery) {
    /**
     * @param {!Object} element
     * @param {!Array} options
     * @return {?}
     */
    function tram(element, options) {
      return (new C.Bare).init(element, options);
    }
    /**
     * @param {string} camelCaseName
     * @return {?}
     */
    function __toDashed__(camelCaseName) {
      return camelCaseName.replace(/[A-Z]/g, function(p_Interval) {
        return "-" + p_Interval.toLowerCase();
      });
    }
    /**
     * @param {?} a
     * @return {?}
     */
    function hexToRgb(a) {
      /** @type {number} */
      var whiteRating = parseInt(a.slice(1), 16);
      return [whiteRating >> 16 & 255, whiteRating >> 8 & 255, 255 & whiteRating];
    }
    /**
     * @param {?} a
     * @param {?} b
     * @param {?} i
     * @return {?}
     */
    function rgb(a, b, i) {
      return "#" + (1 << 24 | a << 16 | b << 8 | i).toString(16).slice(1);
    }
    /**
     * @return {undefined}
     */
    function noop() {
    }
    /**
     * @param {string} to
     * @param {number} from
     * @param {number} name
     * @return {undefined}
     */
    function unitWarning(to, from, name) {
      debug("Units do not match [" + to + "]: " + from + ", " + name);
    }
    /**
     * @param {?} current
     * @param {number} safe
     * @param {number} paramName
     * @return {?}
     */
    function validTime(current, safe, paramName) {
      if (void 0 !== safe && (paramName = safe), void 0 === current) {
        return paramName;
      }
      /** @type {number} */
      var i = paramName;
      return GH_USER_NAME_PATTERN.test(current) || !visible_gl.test(current) ? i = parseInt(current, 10) : visible_gl.test(current) && (i = 1e3 * parseFloat(current)), 0 > i && (i = 0), i == i ? i : paramName;
    }
    /**
     * @param {string} message4
     * @return {undefined}
     */
    function debug(message4) {
      if (config.debug && window) {
        window.console.warn(message4);
      }
    }
    var P = function(prototype, url, undefined) {
      /**
       * @param {!Function} obj
       * @return {?}
       */
      function isObject(obj) {
        return "object" == (0, _deepAssign2.default)(obj);
      }
      /**
       * @param {!Function} value
       * @return {?}
       */
      function isFunction(value) {
        return "function" == typeof value;
      }
      /**
       * @return {undefined}
       */
      function BareConstructor() {
      }
      return function P(_superclass, definition) {
        /**
         * @return {?}
         */
        function C() {
          var self = new Bare;
          return isFunction(self.init) && self.init.apply(self, arguments), self;
        }
        /**
         * @return {undefined}
         */
        function Bare() {
        }
        if (definition === undefined) {
          /** @type {!Function} */
          definition = _superclass;
          /** @type {function(new:Object, *=): !Object} */
          _superclass = Object;
        }
        /** @type {function(): undefined} */
        C.Bare = Bare;
        var extensions;
        var _super = BareConstructor[prototype] = _superclass[prototype];
        var proto = Bare[prototype] = C[prototype] = new BareConstructor;
        return proto.constructor = C, C.mixin = function(def) {
          return Bare[prototype] = C[prototype] = P(C, def)[prototype], C;
        }, C.open = function(def) {
          if (extensions = {}, isFunction(def) ? extensions = def.call(C, proto, _super, C, _superclass) : isObject(def) && (extensions = def), isObject(extensions)) {
            var ext;
            for (ext in extensions) {
              if (url.call(extensions, ext)) {
                proto[ext] = extensions[ext];
              }
            }
          }
          return isFunction(proto.init) || (proto.init = _superclass), C;
        }, C.open(definition);
      };
    }("prototype", {}.hasOwnProperty);
    var easing = {
      ease : ["ease", function(t, shadowXpos, tileHeight, ts) {
        /** @type {number} */
        var a = (t = t / ts) * t;
        /** @type {number} */
        var b = a * t;
        return shadowXpos + tileHeight * (-2.75 * b * a + 11 * a * a + -15.5 * b + 8 * a + .25 * t);
      }],
      "ease-in" : ["ease-in", function(t, shadowXpos, tileHeight, ts) {
        /** @type {number} */
        var a = (t = t / ts) * t;
        /** @type {number} */
        var b = a * t;
        return shadowXpos + tileHeight * (-1 * b * a + 3 * a * a + -3 * b + 2 * a);
      }],
      "ease-out" : ["ease-out", function(t, shadowXpos, tileHeight, ts) {
        /** @type {number} */
        var a = (t = t / ts) * t;
        /** @type {number} */
        var b = a * t;
        return shadowXpos + tileHeight * (.3 * b * a + -1.6 * a * a + 2.2 * b + -1.8 * a + 1.9 * t);
      }],
      "ease-in-out" : ["ease-in-out", function(t, shadowXpos, tileHeight, ts) {
        /** @type {number} */
        var a = (t = t / ts) * t;
        /** @type {number} */
        var b = a * t;
        return shadowXpos + tileHeight * (2 * b * a + -5 * a * a + 2 * b + 2 * a);
      }],
      linear : ["linear", function(h, boardManager, n, size) {
        return n * h / size + boardManager;
      }],
      "ease-in-quad" : ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(t, s, c, ts) {
        return c * (t = t / ts) * t + s;
      }],
      "ease-out-quad" : ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(pageY, canCreateDiscussions, boardManager, count) {
        return -boardManager * (pageY = pageY / count) * (pageY - 2) + canCreateDiscussions;
      }],
      "ease-in-out-quad" : ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(t, s, c, d) {
        return (t = t / (d / 2)) < 1 ? c / 2 * t * t + s : -c / 2 * (--t * (t - 2) - 1) + s;
      }],
      "ease-in-cubic" : ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(u, lambda, beta, len) {
        return beta * (u = u / len) * u * u + lambda;
      }],
      "ease-out-cubic" : ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(t, lineOfs, i, unit) {
        return i * ((t = t / unit - 1) * t * t + 1) + lineOfs;
      }],
      "ease-in-out-cubic" : ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(t, s, c, d) {
        return (t = t / (d / 2)) < 1 ? c / 2 * t * t * t + s : c / 2 * ((t = t - 2) * t * t + 2) + s;
      }],
      "ease-in-quart" : ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(u, lambda, beta, len) {
        return beta * (u = u / len) * u * u * u + lambda;
      }],
      "ease-out-quart" : ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(t, canCreateDiscussions, n, unit) {
        return -n * ((t = t / unit - 1) * t * t * t - 1) + canCreateDiscussions;
      }],
      "ease-in-out-quart" : ["cubic-bezier(0.770, 0, 0.175, 1)", function(t, s, c, d) {
        return (t = t / (d / 2)) < 1 ? c / 2 * t * t * t * t + s : -c / 2 * ((t = t - 2) * t * t * t - 2) + s;
      }],
      "ease-in-quint" : ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(u, lambda, beta, len) {
        return beta * (u = u / len) * u * u * u * u + lambda;
      }],
      "ease-out-quint" : ["cubic-bezier(0.230, 1, 0.320, 1)", function(t, lineOfs, i, unit) {
        return i * ((t = t / unit - 1) * t * t * t * t + 1) + lineOfs;
      }],
      "ease-in-out-quint" : ["cubic-bezier(0.860, 0, 0.070, 1)", function(t, s, c, d) {
        return (t = t / (d / 2)) < 1 ? c / 2 * t * t * t * t * t + s : c / 2 * ((t = t - 2) * t * t * t * t + 2) + s;
      }],
      "ease-in-sine" : ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(avgScore, _2, i, size) {
        return -i * Math.cos(avgScore / size * (Math.PI / 2)) + i + _2;
      }],
      "ease-out-sine" : ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(avgScore, mysecond_no, myfirst_no, size) {
        return myfirst_no * Math.sin(avgScore / size * (Math.PI / 2)) + mysecond_no;
      }],
      "ease-in-out-sine" : ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(size, canCreateDiscussions, n, R) {
        return -n / 2 * (Math.cos(Math.PI * size / R) - 1) + canCreateDiscussions;
      }],
      "ease-in-expo" : ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(_num2, mysecond_no, myfirst_no, _num1) {
        return 0 === _num2 ? mysecond_no : myfirst_no * Math.pow(2, 10 * (_num2 / _num1 - 1)) + mysecond_no;
      }],
      "ease-out-expo" : ["cubic-bezier(0.190, 1, 0.220, 1)", function(len, i, index, undefined) {
        return len === undefined ? i + index : index * (1 - Math.pow(2, -10 * len / undefined)) + i;
      }],
      "ease-in-out-expo" : ["cubic-bezier(1, 0, 0, 1)", function(value, index, key, undefined) {
        return 0 === value ? index : value === undefined ? index + key : (value = value / (undefined / 2)) < 1 ? key / 2 * Math.pow(2, 10 * (value - 1)) + index : key / 2 * (2 - Math.pow(2, -10 * --value)) + index;
      }],
      "ease-in-circ" : ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(t, canCreateDiscussions, n, ts) {
        return -n * (Math.sqrt(1 - (t = t / ts) * t) - 1) + canCreateDiscussions;
      }],
      "ease-out-circ" : ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(t, lineOfs, i, unit) {
        return i * Math.sqrt(1 - (t = t / unit - 1) * t) + lineOfs;
      }],
      "ease-in-out-circ" : ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(t, canCreateDiscussions, n, d) {
        return (t = t / (d / 2)) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + canCreateDiscussions : n / 2 * (Math.sqrt(1 - (t = t - 2) * t) + 1) + canCreateDiscussions;
      }],
      "ease-in-back" : ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(b, canCreateDiscussions, C, count, n) {
        return void 0 === n && (n = 1.70158), C * (b = b / count) * b * ((n + 1) * b - n) + canCreateDiscussions;
      }],
      "ease-out-back" : ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(t, lineOfs, i, unit, s) {
        return void 0 === s && (s = 1.70158), i * ((t = t / unit - 1) * t * ((s + 1) * t + s) + 1) + lineOfs;
      }],
      "ease-in-out-back" : ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(t, canCreateDiscussions, c, d, s) {
        return void 0 === s && (s = 1.70158), (t = t / (d / 2)) < 1 ? c / 2 * t * t * ((1 + (s = s * 1.525)) * t - s) + canCreateDiscussions : c / 2 * ((t = t - 2) * t * ((1 + (s = s * 1.525)) * t + s) + 2) + canCreateDiscussions;
      }]
    };
    var clamped = {
      "ease-in-back" : "cubic-bezier(0.600, 0, 0.735, 0.045)",
      "ease-out-back" : "cubic-bezier(0.175, 0.885, 0.320, 1)",
      "ease-in-out-back" : "cubic-bezier(0.680, 0, 0.265, 1)"
    };
    /** @type {!HTMLDocument} */
    var doc = document;
    /** @type {!Window} */
    var global = window;
    /** @type {string} */
    var dataKey = "bkwld-tram";
    /** @type {!RegExp} */
    var p = /[\-\.0-9]/g;
    /** @type {!RegExp} */
    var testRxp = /[A-Z]/;
    /** @type {string} */
    var typeNumber = "number";
    /** @type {!RegExp} */
    var typeColor = /^(rgb|#)/;
    /** @type {!RegExp} */
    var typeLength = /(em|cm|mm|in|pt|pc|px)$/;
    /** @type {!RegExp} */
    var typeLenPerc = /(em|cm|mm|in|pt|pc|px|%)$/;
    /** @type {!RegExp} */
    var typeAngle = /(deg|rad|turn)$/;
    /** @type {string} */
    var typeFancy = "unitless";
    /** @type {!RegExp} */
    var emptyTrans = /(all|none) 0s ease 0s/;
    /** @type {!RegExp} */
    var DEFERRED_PREFIX = /^(width|height)$/;
    /** @type {string} */
    var space = " ";
    /** @type {!Element} */
    var testDiv = doc.createElement("a");
    /** @type {!Array} */
    var domPrefixes = ["Webkit", "Moz", "O", "ms"];
    /** @type {!Array} */
    var prefixes = ["-webkit-", "-moz-", "-o-", "-ms-"];
    /**
     * @param {string} prop
     * @return {?}
     */
    var testFeature = function(prop) {
      if (prop in testDiv.style) {
        return {
          dom : prop,
          css : prop
        };
      }
      var i;
      var e;
      /** @type {string} */
      var dir = "";
      var terms = prop.split("-");
      /** @type {number} */
      i = 0;
      for (; i < terms.length; i++) {
        /** @type {string} */
        dir = dir + (terms[i].charAt(0).toUpperCase() + terms[i].slice(1));
      }
      /** @type {number} */
      i = 0;
      for (; i < domPrefixes.length; i++) {
        if ((e = domPrefixes[i] + dir) in testDiv.style) {
          return {
            dom : e,
            css : prefixes[i] + prop
          };
        }
      }
    };
    var support = tram.support = {
      bind : Function.prototype.bind,
      transform : testFeature("transform"),
      transition : testFeature("transition"),
      backface : testFeature("backface-visibility"),
      timing : testFeature("transition-timing-function")
    };
    if (support.transition) {
      var timingProp = support.timing.dom;
      if (testDiv.style[timingProp] = easing["ease-in-back"][0], !testDiv.style[timingProp]) {
        var x;
        for (x in clamped) {
          easing[x][0] = clamped[x];
        }
      }
    }
    var isFunction = tram.frame = function() {
      var raf = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || global.oRequestAnimationFrame || global.msRequestAnimationFrame;
      return raf && support.bind ? raf.bind(global) : function(fn) {
        global.setTimeout(fn, 16);
      };
    }();
    var now = tram.now = function() {
      /** @type {(Performance|null)} */
      var perf = global.performance;
      /** @type {(function(this:Performance): number|null)} */
      var perfNow = perf && (perf.now || perf.webkitNow || perf.msNow || perf.mozNow);
      return perfNow && support.bind ? perfNow.bind(perf) : Date.now || function() {
        return +new Date;
      };
    }();
    var MyClass = P(function(TabEvents) {
      /**
       * @param {string} value
       * @param {!Object} options
       * @return {?}
       */
      function add(value, options) {
        var original = function(i) {
          /** @type {number} */
          var j = -1;
          /** @type {number} */
          var tl = i ? i.length : 0;
          /** @type {!Array} */
          var result = [];
          for (; ++j < tl;) {
            /** @type {string} */
            var d = i[j];
            if (d) {
              result.push(d);
            }
          }
          return result;
        }(("" + value).split(space));
        var name = original[0];
        options = options || {};
        var definition = propertyMap[name];
        if (!definition) {
          return debug("Unsupported property: " + name);
        }
        if (!options.weak || !this.props[name]) {
          var Class = definition[0];
          var exports = this.props[name];
          return exports || (exports = this.props[name] = new Class.Bare), exports.init(this.$el, original, definition, options), exports;
        }
      }
      /**
       * @param {number} options
       * @param {!Function} fromQueue
       * @param {!Object} queueArgs
       * @return {?}
       */
      function start(options, fromQueue, queueArgs) {
        if (options) {
          var type = (0, _deepAssign2.default)(options);
          if (fromQueue || (this.timer && this.timer.destroy(), this.queue = [], this.active = false), "number" == type && fromQueue) {
            return this.timer = new Delay({
              duration : options,
              context : this,
              complete : next
            }), void(this.active = true);
          }
          if ("string" == type && fromQueue) {
            switch(options) {
              case "hide":
                hide.call(this);
                break;
              case "stop":
                callback.call(this);
                break;
              case "redraw":
                redraw.call(this);
                break;
              default:
                add.call(this, options, queueArgs && queueArgs[1]);
            }
            return next.call(this);
          }
          if ("function" == type) {
            return void options.call(this, this);
          }
          if ("object" == type) {
            /** @type {number} */
            var timespan = 0;
            d.call(this, options, function(prop, target) {
              if (prop.span > timespan) {
                timespan = prop.span;
              }
              prop.stop();
              prop.animate(target);
            }, function(extras) {
              if ("wait" in extras) {
                timespan = validTime(extras.wait, 0);
              }
            });
            updateStyles.call(this);
            if (timespan > 0) {
              this.timer = new Delay({
                duration : timespan,
                context : this
              });
              /** @type {boolean} */
              this.active = true;
              if (fromQueue) {
                /** @type {function(): undefined} */
                this.timer.complete = next;
              }
            }
            var p = this;
            /** @type {boolean} */
            var v = false;
            var styles = {};
            isFunction(function() {
              d.call(p, options, function(prop) {
                if (prop.active) {
                  /** @type {boolean} */
                  v = true;
                  styles[prop.name] = prop.nextStyle;
                }
              });
              if (v) {
                p.$el.css(styles);
              }
            });
          }
        }
      }
      /**
       * @return {undefined}
       */
      function next() {
        if (this.timer && this.timer.destroy(), this.active = false, this.queue.length) {
          var queued = this.queue.shift();
          start.call(this, queued.options, true, queued.args);
        }
      }
      /**
       * @param {string} val
       * @return {undefined}
       */
      function callback(val) {
        var min;
        if (this.timer) {
          this.timer.destroy();
        }
        /** @type {!Array} */
        this.queue = [];
        /** @type {boolean} */
        this.active = false;
        if ("string" == typeof val) {
          /** @type {number} */
          (min = {})[val] = 1;
        } else {
          min = "object" == (0, _deepAssign2.default)(val) && null != val ? val : this.props;
        }
        d.call(this, min, close);
        updateStyles.call(this);
      }
      /**
       * @return {undefined}
       */
      function hide() {
        callback.call(this);
        /** @type {string} */
        this.el.style.display = "none";
      }
      /**
       * @return {undefined}
       */
      function redraw() {
        this.el.offsetHeight;
      }
      /**
       * @return {undefined}
       */
      function updateStyles() {
        var name;
        var prop;
        /** @type {!Array} */
        var result = [];
        for (name in this.upstream && result.push(this.upstream), this.props) {
          if ((prop = this.props[name]).active) {
            result.push(prop.string);
          }
        }
        /** @type {string} */
        result = result.join(",");
        if (this.style !== result) {
          /** @type {string} */
          this.style = result;
          /** @type {string} */
          this.el.style[support.transition.dom] = result;
        }
      }
      /**
       * @param {!Array} params
       * @param {!Function} m
       * @param {!Function} t
       * @return {undefined}
       */
      function d(params, m, t) {
        var name;
        var prop;
        var value;
        var w;
        /** @type {boolean} */
        var doOpen = m !== close;
        var item = {};
        for (name in params) {
          value = params[name];
          if (name in transformMap) {
            if (!item.transform) {
              item.transform = {};
            }
            item.transform[name] = value;
          } else {
            if (testRxp.test(name)) {
              name = __toDashed__(name);
            }
            if (name in propertyMap) {
              item[name] = value;
            } else {
              if (!w) {
                w = {};
              }
              w[name] = value;
            }
          }
        }
        for (name in item) {
          if (value = item[name], !(prop = this.props[name])) {
            if (!doOpen) {
              continue;
            }
            prop = add.call(this, name);
          }
          m.call(this, prop, value);
        }
        if (t && w) {
          t.call(this, w);
        }
      }
      /**
       * @param {!Object} tooltip
       * @return {undefined}
       */
      function close(tooltip) {
        tooltip.stop();
      }
      /**
       * @param {!Object} n
       * @param {string} s
       * @return {undefined}
       */
      function c(n, s) {
        n.set(s);
      }
      /**
       * @param {?} name
       * @return {undefined}
       */
      function init(name) {
        this.$el.css(name);
      }
      /**
       * @param {string} name
       * @param {!Function} method
       * @return {undefined}
       */
      function chain(name, method) {
        /**
         * @return {?}
         */
        TabEvents[name] = function() {
          return this.children ? function(f, mapArgs) {
            var i;
            var l = this.children.length;
            /** @type {number} */
            i = 0;
            for (; l > i; i++) {
              f.apply(this.children[i], mapArgs);
            }
            return this;
          }.call(this, method, arguments) : (this.el && method.apply(this, arguments), this);
        };
      }
      /**
       * @param {!Object} element
       * @return {undefined}
       */
      TabEvents.init = function(element) {
        if (this.$el = jQuery(element), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = false, config.keepInherited && !config.fallback) {
          var upstream = getStyle(this.el, "transition");
          if (upstream && !emptyTrans.test(upstream)) {
            this.upstream = upstream;
          }
        }
        if (support.backface && config.hideBackface) {
          setStyle(this.el, support.backface.css, "hidden");
        }
      };
      chain("add", add);
      chain("start", start);
      chain("wait", function(time) {
        time = validTime(time, 0);
        if (this.active) {
          this.queue.push({
            options : time
          });
        } else {
          this.timer = new Delay({
            duration : time,
            context : this,
            complete : next
          });
          /** @type {boolean} */
          this.active = true;
        }
      });
      chain("then", function(SEVERITIES) {
        return this.active ? (this.queue.push({
          options : SEVERITIES,
          args : arguments
        }), void(this.timer.complete = next)) : debug("No active transition timer. Use start() or wait() before then().");
      });
      chain("next", next);
      chain("stop", callback);
      chain("set", function(t) {
        callback.call(this, t);
        d.call(this, t, c, init);
      });
      chain("show", function(val) {
        if ("string" != typeof val) {
          /** @type {string} */
          val = "block";
        }
        /** @type {string} */
        this.el.style.display = val;
      });
      chain("hide", hide);
      chain("redraw", redraw);
      chain("destroy", function() {
        callback.call(this);
        jQuery.removeData(this.el, dataKey);
        /** @type {null} */
        this.$el = this.el = null;
      });
    });
    var C = P(MyClass, function(TabEvents) {
      /**
       * @param {!Object} el
       * @param {?} index
       * @return {?}
       */
      function add(el, index) {
        var options = jQuery.data(el, dataKey) || jQuery.data(el, dataKey, new MyClass.Bare);
        return options.el || options.init(el), index ? options.start(index) : options;
      }
      /**
       * @param {!Object} obj
       * @param {?} x
       * @return {?}
       */
      TabEvents.init = function(obj, x) {
        var keys = jQuery(obj);
        if (!keys.length) {
          return this;
        }
        if (1 === keys.length) {
          return add(keys[0], x);
        }
        /** @type {!Array} */
        var result = [];
        return keys.each(function(canCreateDiscussions, e) {
          result.push(add(e, x));
        }), this.children = result, this;
      };
    });
    var Property = P(function(options) {
      /**
       * @return {?}
       */
      function stickToBorder() {
        var x = this.get();
        this.update("auto");
        var a = this.get();
        return this.update(x), a;
      }
      /**
       * @param {string} str
       * @return {?}
       */
      function toHex(str) {
        /** @type {(Array<string>|null)} */
        var m = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(str);
        return (m ? rgb(m[1], m[2], m[3]) : str).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
      }
      /** @type {number} */
      var edit_note = 500;
      /** @type {string} */
      var easing = "ease";
      /** @type {number} */
      var hostInfoParaName = 0;
      /**
       * @param {!Object} element
       * @param {!Array} settings
       * @param {!Array} data
       * @param {!Object} options
       * @return {undefined}
       */
      options.init = function(element, settings, data, options) {
        /** @type {!Object} */
        this.$el = element;
        this.el = element[0];
        var o = settings[0];
        if (data[2]) {
          o = data[2];
        }
        if (t[o]) {
          o = t[o];
        }
        this.name = o;
        this.type = data[1];
        this.duration = validTime(settings[1], this.duration, edit_note);
        this.ease = function(ease, undefined, text) {
          return void 0 !== undefined && (text = undefined), ease in easing ? ease : text;
        }(settings[2], this.ease, easing);
        this.delay = validTime(settings[3], this.delay, hostInfoParaName);
        this.span = this.duration + this.delay;
        /** @type {boolean} */
        this.active = false;
        /** @type {null} */
        this.nextStyle = null;
        /** @type {boolean} */
        this.auto = DEFERRED_PREFIX.test(this.name);
        this.unit = options.unit || this.unit || config.defaultUnit;
        this.angle = options.angle || this.angle || config.defaultAngle;
        if (config.fallback || options.fallback) {
          this.animate = this.fallback;
        } else {
          this.animate = this.transition;
          /** @type {string} */
          this.string = this.name + space + this.duration + "ms" + ("ease" != this.ease ? space + easing[this.ease][0] : "") + (this.delay ? space + this.delay + "ms" : "");
        }
      };
      /**
       * @param {string} value
       * @return {undefined}
       */
      options.set = function(value) {
        value = this.convert(value, this.type);
        this.update(value);
        this.redraw();
      };
      /**
       * @param {string} value
       * @return {undefined}
       */
      options.transition = function(value) {
        /** @type {boolean} */
        this.active = true;
        value = this.convert(value, this.type);
        if (this.auto) {
          if ("auto" == this.el.style[this.name]) {
            this.update(this.get());
            this.redraw();
          }
          if ("auto" == value) {
            value = stickToBorder.call(this);
          }
        }
        /** @type {string} */
        this.nextStyle = value;
      };
      /**
       * @param {number} value
       * @return {undefined}
       */
      options.fallback = function(value) {
        var from = this.el.style[this.name] || this.convert(this.get(), this.type);
        value = this.convert(value, this.type);
        if (this.auto) {
          if ("auto" == from) {
            from = this.convert(this.get(), this.type);
          }
          if ("auto" == value) {
            value = stickToBorder.call(this);
          }
        }
        this.tween = new Tween({
          from : from,
          to : value,
          duration : this.duration,
          delay : this.delay,
          ease : this.ease,
          update : this.update,
          context : this
        });
      };
      /**
       * @return {?}
       */
      options.get = function() {
        return getStyle(this.el, this.name);
      };
      /**
       * @param {string} val
       * @return {undefined}
       */
      options.update = function(val) {
        setStyle(this.el, this.name, val);
      };
      /**
       * @return {undefined}
       */
      options.stop = function() {
        if (this.active || this.nextStyle) {
          /** @type {boolean} */
          this.active = false;
          /** @type {null} */
          this.nextStyle = null;
          setStyle(this.el, this.name, this.get());
        }
        var tween = this.tween;
        if (tween && tween.context) {
          tween.destroy();
        }
      };
      /**
       * @param {string} value
       * @param {!Object} type
       * @return {?}
       */
      options.convert = function(value, type) {
        if ("auto" == value && this.auto) {
          return value;
        }
        var context;
        /** @type {boolean} */
        var hasDefault = "number" == typeof value;
        /** @type {boolean} */
        var extension = "string" == typeof value;
        switch(type) {
          case typeNumber:
            if (hasDefault) {
              return value;
            }
            if (extension && "" === value.replace(p, "")) {
              return +value;
            }
            /** @type {string} */
            context = "number(unitless)";
            break;
          case typeColor:
            if (extension) {
              if ("" === value && this.original) {
                return this.original;
              }
              if (type.test(value)) {
                return "#" == value.charAt(0) && 7 == value.length ? value : toHex(value);
              }
            }
            /** @type {string} */
            context = "hex or rgb string";
            break;
          case typeLength:
            if (hasDefault) {
              return value + this.unit;
            }
            if (extension && type.test(value)) {
              return value;
            }
            /** @type {string} */
            context = "number(px) or string(unit)";
            break;
          case typeLenPerc:
            if (hasDefault) {
              return value + this.unit;
            }
            if (extension && type.test(value)) {
              return value;
            }
            /** @type {string} */
            context = "number(px) or string(unit or %)";
            break;
          case typeAngle:
            if (hasDefault) {
              return value + this.angle;
            }
            if (extension && type.test(value)) {
              return value;
            }
            /** @type {string} */
            context = "number(deg) or string(angle)";
            break;
          case typeFancy:
            if (hasDefault) {
              return value;
            }
            if (extension && typeLenPerc.test(value)) {
              return value;
            }
            /** @type {string} */
            context = "number(unitless) or string(unit or %)";
        }
        return function(selector, id) {
          debug("Type warning: Expected: [" + selector + "] Got: [" + (0, _deepAssign2.default)(id) + "] " + id);
        }(context, value), value;
      };
      /**
       * @return {undefined}
       */
      options.redraw = function() {
        this.el.offsetHeight;
      };
    });
    var Color = P(Property, function(TabEvents, baseConnect) {
      /**
       * @return {undefined}
       */
      TabEvents.init = function() {
        baseConnect.init.apply(this, arguments);
        if (!this.original) {
          this.original = this.convert(this.get(), typeColor);
        }
      };
    });
    var Scroll = P(Property, function(t, baseConnect) {
      /**
       * @return {undefined}
       */
      t.init = function() {
        baseConnect.init.apply(this, arguments);
        this.animate = this.fallback;
      };
      /**
       * @return {?}
       */
      t.get = function() {
        return this.$el[this.name]();
      };
      /**
       * @param {string} value
       * @return {undefined}
       */
      t.update = function(value) {
        this.$el[this.name](value);
      };
    });
    var Transform = P(Property, function(options, baseConnect) {
      /**
       * @param {!Array} object
       * @param {!Function} fn
       * @return {undefined}
       */
      function update(object, fn) {
        var p;
        var tag;
        var stack;
        var definition;
        var value;
        for (p in object) {
          stack = (definition = transformMap[p])[0];
          tag = definition[1] || p;
          value = this.convert(object[p], stack);
          fn.call(this, tag, value, stack);
        }
      }
      /**
       * @return {undefined}
       */
      options.init = function() {
        baseConnect.init.apply(this, arguments);
        if (!this.current) {
          this.current = {};
          if (transformMap.perspective && config.perspective) {
            /** @type {string} */
            this.current.perspective = config.perspective;
            setStyle(this.el, this.name, this.style(this.current));
            this.redraw();
          }
        }
      };
      /**
       * @param {string} value
       * @return {undefined}
       */
      options.set = function(value) {
        update.call(this, value, function(name, data) {
          this.current[name] = data;
        });
        setStyle(this.el, this.name, this.style(this.current));
        this.redraw();
      };
      /**
       * @param {string} props
       * @return {undefined}
       */
      options.transition = function(props) {
        var values = this.values(props);
        this.tween = new MultiTween({
          current : this.current,
          values : values,
          duration : this.duration,
          delay : this.delay,
          ease : this.ease
        });
        var p;
        var temp = {};
        for (p in this.current) {
          temp[p] = p in values ? values[p] : this.current[p];
        }
        /** @type {boolean} */
        this.active = true;
        this.nextStyle = this.style(temp);
      };
      /**
       * @param {string} props
       * @return {undefined}
       */
      options.fallback = function(props) {
        var values = this.values(props);
        this.tween = new MultiTween({
          current : this.current,
          values : values,
          duration : this.duration,
          delay : this.delay,
          ease : this.ease,
          update : this.update,
          context : this
        });
      };
      /**
       * @return {undefined}
       */
      options.update = function() {
        setStyle(this.el, this.name, this.style(this.current));
      };
      /**
       * @param {!Array} data
       * @return {?}
       */
      options.style = function(data) {
        var a;
        /** @type {string} */
        var s = "";
        for (a in data) {
          /** @type {string} */
          s = s + (a + "(" + data[a] + ") ");
        }
        return s;
      };
      /**
       * @param {string} value
       * @return {?}
       */
      options.values = function(value) {
        var data;
        var options = {};
        return update.call(this, value, function(name, source, type) {
          options[name] = source;
          if (void 0 === this.current[name]) {
            /** @type {number} */
            data = 0;
            if (~name.indexOf("scale")) {
              /** @type {number} */
              data = 1;
            }
            this.current[name] = this.convert(data, type);
          }
        }), options;
      };
    });
    var Tween = P(function(e) {
      /**
       * @return {undefined}
       */
      function initialize() {
        var i;
        var prev;
        var p;
        var len = a.length;
        if (len) {
          isFunction(initialize);
          prev = now();
          i = len;
          for (; i--;) {
            if (p = a[i]) {
              p.render(prev);
            }
          }
        }
      }
      var defaults = {
        ease : easing.ease[1],
        from : 0,
        to : 1
      };
      /**
       * @param {!Object} options
       * @return {undefined}
       */
      e.init = function(options) {
        this.duration = options.duration || 0;
        this.delay = options.delay || 0;
        var ease = options.ease || defaults.ease;
        if (easing[ease]) {
          ease = easing[ease][1];
        }
        if ("function" != typeof ease) {
          ease = defaults.ease;
        }
        this.ease = ease;
        this.update = options.update || noop;
        this.complete = options.complete || noop;
        this.context = options.context || this;
        this.name = options.name;
        var from = options.from;
        var to = options.to;
        if (void 0 === from) {
          /** @type {number} */
          from = defaults.from;
        }
        if (void 0 === to) {
          /** @type {number} */
          to = defaults.to;
        }
        this.unit = options.unit || "";
        if ("number" == typeof from && "number" == typeof to) {
          /** @type {number} */
          this.begin = from;
          /** @type {number} */
          this.change = to - from;
        } else {
          this.format(to, from);
        }
        this.value = this.begin + this.unit;
        this.start = now();
        if (false !== options.autoplay) {
          this.play();
        }
      };
      /**
       * @return {undefined}
       */
      e.play = function() {
        var t;
        if (!this.active) {
          if (!this.start) {
            this.start = now();
          }
          /** @type {boolean} */
          this.active = true;
          t = this;
          if (1 === a.push(t)) {
            isFunction(initialize);
          }
        }
      };
      /**
       * @return {undefined}
       */
      e.stop = function() {
        var option;
        var code;
        var s;
        if (this.active) {
          /** @type {boolean} */
          this.active = false;
          option = this;
          if ((s = jQuery.inArray(option, a)) >= 0) {
            code = a.slice(s + 1);
            a.length = s;
            if (code.length) {
              a = a.concat(code);
            }
          }
        }
      };
      /**
       * @param {!Object} end
       * @return {?}
       */
      e.render = function(end) {
        var value;
        /** @type {number} */
        var delta = end - this.start;
        if (this.delay) {
          if (delta <= this.delay) {
            return;
          }
          /** @type {number} */
          delta = delta - this.delay;
        }
        if (delta < this.duration) {
          var position = this.ease(delta, 0, 1, this.duration);
          return value = this.startRGB ? function(s, n, t) {
            return rgb(s[0] + t * (n[0] - s[0]), s[1] + t * (n[1] - s[1]), s[2] + t * (n[2] - s[2]));
          }(this.startRGB, this.endRGB, position) : function(fx) {
            return Math.round(fx * c) / c;
          }(this.begin + position * this.change), this.value = value + this.unit, void this.update.call(this.context, this.value);
        }
        value = this.endHex || this.begin + this.change;
        this.value = value + this.unit;
        this.update.call(this.context, this.value);
        this.complete.call(this.context);
        this.destroy();
      };
      /**
       * @param {number} to
       * @param {number} from
       * @return {?}
       */
      e.format = function(to, from) {
        if (from = from + "", "#" == (to = to + "").charAt(0)) {
          return this.startRGB = hexToRgb(from), this.endRGB = hexToRgb(to), this.endHex = to, this.begin = 0, void(this.change = 1);
        }
        if (!this.unit) {
          /** @type {string} */
          var name = from.replace(p, "");
          if (name !== to.replace(p, "")) {
            unitWarning("tween", from, to);
          }
          /** @type {string} */
          this.unit = name;
        }
        /** @type {number} */
        from = parseFloat(from);
        /** @type {number} */
        to = parseFloat(to);
        /** @type {number} */
        this.begin = this.value = from;
        /** @type {number} */
        this.change = to - from;
      };
      /**
       * @return {undefined}
       */
      e.destroy = function() {
        this.stop();
        /** @type {null} */
        this.context = null;
        /** @type {function(): undefined} */
        this.ease = this.update = this.complete = noop;
      };
      /** @type {!Array} */
      var a = [];
      /** @type {number} */
      var c = 1E3;
    });
    var Delay = P(Tween, function(t) {
      /**
       * @param {!Object} data
       * @return {undefined}
       */
      t.init = function(data) {
        this.duration = data.duration || 0;
        this.complete = data.complete || noop;
        this.context = data.context;
        this.play();
      };
      /**
       * @param {!Object} start
       * @return {undefined}
       */
      t.render = function(start) {
        if (!(start - this.start < this.duration)) {
          this.complete.call(this.context);
          this.destroy();
        }
      };
    });
    var MultiTween = P(Tween, function(t, e) {
      /**
       * @param {!Object} options
       * @return {undefined}
       */
      t.init = function(options) {
        var i;
        var n;
        for (i in this.context = options.context, this.update = options.update, this.tweens = [], this.current = options.current, options.values) {
          n = options.values[i];
          if (this.current[i] !== n) {
            this.tweens.push(new Tween({
              name : i,
              from : this.current[i],
              to : n,
              duration : options.duration,
              delay : options.delay,
              ease : options.ease,
              autoplay : false
            }));
          }
        }
        this.play();
      };
      /**
       * @param {!Object} t
       * @return {?}
       */
      t.render = function(t) {
        var i;
        var tween;
        /** @type {boolean} */
        var id = false;
        i = this.tweens.length;
        for (; i--;) {
          if ((tween = this.tweens[i]).context) {
            tween.render(t);
            this.current[tween.name] = tween.value;
            /** @type {boolean} */
            id = true;
          }
        }
        return id ? void(this.update && this.update.call(this.context)) : this.destroy();
      };
      /**
       * @return {undefined}
       */
      t.destroy = function() {
        if (e.destroy.call(this), this.tweens) {
          var i;
          i = this.tweens.length;
          for (; i--;) {
            this.tweens[i].destroy();
          }
          /** @type {null} */
          this.tweens = null;
          /** @type {null} */
          this.current = null;
        }
      };
    });
    var config = tram.config = {
      debug : false,
      defaultUnit : "px",
      defaultAngle : "deg",
      keepInherited : false,
      hideBackface : false,
      perspective : "",
      fallback : !support.transition,
      agentTests : []
    };
    /**
     * @param {string} urls
     * @return {?}
     */
    tram.fallback = function(urls) {
      if (!support.transition) {
        return config.fallback = true;
      }
      config.agentTests.push("(" + urls + ")");
      /** @type {!RegExp} */
      var regex = new RegExp(config.agentTests.join("|"), "i");
      /** @type {boolean} */
      config.fallback = regex.test(navigator.userAgent);
    };
    tram.fallback("6.0.[2-5] Safari");
    /**
     * @param {?} name
     * @return {?}
     */
    tram.tween = function(name) {
      return new Tween(name);
    };
    /**
     * @param {number} options
     * @param {!Function} callback
     * @param {!Object} thisArg
     * @return {?}
     */
    tram.delay = function(options, callback, thisArg) {
      return new Delay({
        complete : callback,
        duration : options,
        context : thisArg
      });
    };
    /**
     * @param {?} options
     * @return {?}
     */
    jQuery.fn.tram = function(options) {
      return tram.call(null, this, options);
    };
    var setStyle = jQuery.style;
    var getStyle = jQuery.css;
    var t = {
      transform : support.transform && support.transform.css
    };
    var propertyMap = {
      color : [Color, typeColor],
      background : [Color, typeColor, "background-color"],
      "outline-color" : [Color, typeColor],
      "border-color" : [Color, typeColor],
      "border-top-color" : [Color, typeColor],
      "border-right-color" : [Color, typeColor],
      "border-bottom-color" : [Color, typeColor],
      "border-left-color" : [Color, typeColor],
      "border-width" : [Property, typeLength],
      "border-top-width" : [Property, typeLength],
      "border-right-width" : [Property, typeLength],
      "border-bottom-width" : [Property, typeLength],
      "border-left-width" : [Property, typeLength],
      "border-spacing" : [Property, typeLength],
      "letter-spacing" : [Property, typeLength],
      margin : [Property, typeLength],
      "margin-top" : [Property, typeLength],
      "margin-right" : [Property, typeLength],
      "margin-bottom" : [Property, typeLength],
      "margin-left" : [Property, typeLength],
      padding : [Property, typeLength],
      "padding-top" : [Property, typeLength],
      "padding-right" : [Property, typeLength],
      "padding-bottom" : [Property, typeLength],
      "padding-left" : [Property, typeLength],
      "outline-width" : [Property, typeLength],
      opacity : [Property, typeNumber],
      top : [Property, typeLenPerc],
      right : [Property, typeLenPerc],
      bottom : [Property, typeLenPerc],
      left : [Property, typeLenPerc],
      "font-size" : [Property, typeLenPerc],
      "text-indent" : [Property, typeLenPerc],
      "word-spacing" : [Property, typeLenPerc],
      width : [Property, typeLenPerc],
      "min-width" : [Property, typeLenPerc],
      "max-width" : [Property, typeLenPerc],
      height : [Property, typeLenPerc],
      "min-height" : [Property, typeLenPerc],
      "max-height" : [Property, typeLenPerc],
      "line-height" : [Property, typeFancy],
      "scroll-top" : [Scroll, typeNumber, "scrollTop"],
      "scroll-left" : [Scroll, typeNumber, "scrollLeft"]
    };
    var transformMap = {};
    if (support.transform) {
      /** @type {!Array} */
      propertyMap.transform = [Transform];
      transformMap = {
        x : [typeLenPerc, "translateX"],
        y : [typeLenPerc, "translateY"],
        rotate : [typeAngle],
        rotateX : [typeAngle],
        rotateY : [typeAngle],
        scale : [typeNumber],
        scaleX : [typeNumber],
        scaleY : [typeNumber],
        skew : [typeAngle],
        skewX : [typeAngle],
        skewY : [typeAngle]
      };
    }
    if (support.transform && support.backface) {
      /** @type {!Array} */
      transformMap.z = [typeLenPerc, "translateZ"];
      /** @type {!Array} */
      transformMap.rotateZ = [typeAngle];
      /** @type {!Array} */
      transformMap.scaleZ = [typeNumber];
      /** @type {!Array} */
      transformMap.perspective = [typeLength];
    }
    /** @type {!RegExp} */
    var GH_USER_NAME_PATTERN = /ms/;
    /** @type {!RegExp} */
    var visible_gl = /s|\./;
    return jQuery.tram = tram;
  }(window.jQuery);
}, function(module, canCreateDiscussions, factory) {
  factory(3);
  factory(7);
  factory(8);
  factory(9);
  factory(10);
  factory(11);
  module.exports = factory(12);
}, function(mixin, canCreateDiscussions, payloadReader) {
  var item = payloadReader(0);
  item.define("brand", mixin.exports = function($) {
    /**
     * @return {undefined}
     */
    function render() {
      var disableSocial = doc.fullScreen || doc.mozFullScreen || doc.webkitIsFullScreen || doc.msFullscreenElement || Boolean(doc.webkitFullscreenElement);
      $(value).attr("style", disableSocial ? "display: none !important;" : "");
    }
    /**
     * @return {undefined}
     */
    function init() {
      var query = o.children(allbutheader);
      var n = query.length && query.get(0) === value;
      var editorInner = item.env("editor");
      if (n) {
        if (editorInner) {
          query.remove();
        }
      } else {
        if (query.length) {
          query.remove();
        }
        if (!editorInner) {
          o.append(value);
        }
      }
    }
    var value;
    var kbnServer = {};
    /** @type {!HTMLDocument} */
    var doc = document;
    var jqNode = $("html");
    var o = $("body");
    /** @type {string} */
    var allbutheader = ".w-webflow-badge";
    /** @type {!Location} */
    var winLocation = window.location;
    /** @type {boolean} */
    var x = /PhantomJS/i.test(navigator.userAgent);
    /** @type {string} */
    var f = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
    return kbnServer.ready = function() {
      var source;
      var t;
      var title;
      var s = jqNode.attr("data-wf-status");
      var hostname = jqNode.attr("data-wf-domain") || "";
      if (/\.webflow\.io$/i.test(hostname) && winLocation.hostname !== hostname) {
        /** @type {boolean} */
        s = true;
      }
      if (s && !x) {
        value = value || (source = $('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), t = $("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
          marginRight : "8px",
          width : "16px"
        }), title = $("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow"), source.append(t, title), source[0]);
        init();
        setTimeout(init, 500);
        $(doc).off(f, render).on(f, render);
      }
    }, kbnServer;
  });
}, function(mixin, canCreateDiscussions, isOptionsVisible) {
  var jQuery = window.$;
  var instile = isOptionsVisible(1) && jQuery.tram;
  mixin.exports = function() {
    var _ = {
      VERSION : "1.6.0-Webflow"
    };
    var breaker = {};
    var ArrayProto = Array.prototype;
    var ObjP = Object.prototype;
    var FuncProto = Function.prototype;
    /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
    var deferred = (ArrayProto.push, ArrayProto.slice);
    /** @type {function(this:Object, *): boolean} */
    var s = (ArrayProto.concat, ObjP.toString, ObjP.hasOwnProperty);
    /** @type {function(this:(IArrayLike<T>|string), (function(this:S, T, number, !Array<T>): ?|null), S=): undefined} */
    var nativeForEach = ArrayProto.forEach;
    /** @type {function(this:(IArrayLike<T>|string), (function(this:S, T, number, !Array<T>): R|null), S=): !Array<R>} */
    var nativeMap = ArrayProto.map;
    /** @type {function(this:(IArrayLike<T>|string), (function(this:S, T, number, !Array<T>): ?|null), S=): !Array<T>} */
    var nativeFilter = (ArrayProto.reduce, ArrayProto.reduceRight, ArrayProto.filter);
    /** @type {function(this:(IArrayLike<T>|string), (function(this:S, T, number, !Array<T>): ?|null), S=): boolean} */
    var nativeSome = (ArrayProto.every, ArrayProto.some);
    /** @type {function(this:(IArrayLike<T>|string), T, number=): number} */
    var nativeIndexOf = ArrayProto.indexOf;
    /** @type {function(!Object): !Array<string>} */
    var $keys = (ArrayProto.lastIndexOf, Array.isArray, Object.keys);
    /** @type {function(string, !Function, !Function): ?} */
    var forEach = (FuncProto.bind, _.each = _.forEach = function(obj, callback, ctx) {
      if (null == obj) {
        return obj;
      }
      if (nativeForEach && obj.forEach === nativeForEach) {
        obj.forEach(callback, ctx);
      } else {
        if (obj.length === +obj.length) {
          /** @type {number} */
          var i = 0;
          var step = obj.length;
          for (; i < step; i++) {
            if (callback.call(ctx, obj[i], i, obj) === breaker) {
              return;
            }
          }
        } else {
          var o = _.keys(obj);
          /** @type {number} */
          i = 0;
          step = o.length;
          for (; i < step; i++) {
            if (callback.call(ctx, obj[o[i]], o[i], obj) === breaker) {
              return;
            }
          }
        }
      }
      return obj;
    });
    /** @type {function(string, !Function, ?): ?} */
    _.map = _.collect = function(object, fn, context) {
      /** @type {!Array} */
      var result = [];
      return null == object ? result : nativeMap && object.map === nativeMap ? object.map(fn, context) : (forEach(object, function(cell, i, array) {
        result.push(fn.call(context, cell, i, array));
      }), result);
    };
    /** @type {function(string, !Function, ?): ?} */
    _.find = _.detect = function(obj, o, xhr) {
      var value;
      return callback(obj, function(width, expr, callback) {
        if (o.call(xhr, width, expr, callback)) {
          return value = width, true;
        }
      }), value;
    };
    /** @type {function(string, !Function, ?): ?} */
    _.filter = _.select = function(object, e, query) {
      /** @type {!Array} */
      var result = [];
      return null == object ? result : nativeFilter && object.filter === nativeFilter ? object.filter(e, query) : (forEach(object, function(val, end, b) {
        if (e.call(query, val, end, b)) {
          result.push(val);
        }
      }), result);
    };
    /** @type {function(string, !Function, ?): ?} */
    var callback = _.some = _.any = function(array, predicate, context) {
      if (!predicate) {
        predicate = _.identity;
      }
      /** @type {boolean} */
      var result = false;
      return null == array ? result : nativeSome && array.some === nativeSome ? array.some(predicate, context) : (forEach(array, function(args, i, list) {
        if (result || (result = predicate.call(context, args, i, list))) {
          return breaker;
        }
      }), !!result);
    };
    /** @type {function(string, ?): ?} */
    _.contains = _.include = function(array, i) {
      return null != array && (nativeIndexOf && array.indexOf === nativeIndexOf ? -1 != array.indexOf(i) : callback(array, function(n) {
        return n === i;
      }));
    };
    /**
     * @param {!Function} action
     * @param {?} delay
     * @return {?}
     */
    _.delay = function(action, delay) {
      /** @type {!Array<?>} */
      var actionArguments = deferred.call(arguments, 2);
      return setTimeout(function() {
        return action.apply(null, actionArguments);
      }, delay);
    };
    /**
     * @param {?} context
     * @return {?}
     */
    _.defer = function(context) {
      return _.delay.apply(_, [context, 1].concat(deferred.call(arguments, 1)));
    };
    /**
     * @param {!Function} method
     * @return {?}
     */
    _.throttle = function(method) {
      var e;
      var callArgs;
      var nthis;
      return function() {
        if (!e) {
          /** @type {boolean} */
          e = true;
          /** @type {!Arguments} */
          callArgs = arguments;
          nthis = this;
          instile.frame(function() {
            /** @type {boolean} */
            e = false;
            method.apply(nthis, callArgs);
          });
        }
      };
    };
    /**
     * @param {!Function} fn
     * @param {number} delay
     * @param {boolean} immediate
     * @return {?}
     */
    _.debounce = function(fn, delay, immediate) {
      var timeoutId;
      var a;
      var c;
      var lastMove;
      var b;
      /**
       * @return {undefined}
       */
      var startFunc = function delayed() {
        /** @type {number} */
        var elapsed = _.now() - lastMove;
        if (elapsed < delay) {
          /** @type {number} */
          timeoutId = setTimeout(delayed, delay - elapsed);
        } else {
          /** @type {null} */
          timeoutId = null;
          if (!immediate) {
            b = fn.apply(c, a);
            /** @type {null} */
            c = a = null;
          }
        }
      };
      return function() {
        c = this;
        /** @type {!Arguments} */
        a = arguments;
        /** @type {number} */
        lastMove = _.now();
        var callNow = immediate && !timeoutId;
        return timeoutId || (timeoutId = setTimeout(startFunc, delay)), callNow && (b = fn.apply(c, a), c = a = null), b;
      };
    };
    /**
     * @param {!Object} a
     * @return {?}
     */
    _.defaults = function(a) {
      if (!_.isObject(a)) {
        return a;
      }
      /** @type {number} */
      var i__7286__auto___11343 = 1;
      /** @type {number} */
      var len__7285__auto___11342 = arguments.length;
      for (; i__7286__auto___11343 < len__7285__auto___11342; i__7286__auto___11343++) {
        var array = arguments[i__7286__auto___11343];
        var i;
        for (i in array) {
          if (void 0 === a[i]) {
            a[i] = array[i];
          }
        }
      }
      return a;
    };
    /**
     * @param {!Object} o
     * @return {?}
     */
    _.keys = function(o) {
      if (!_.isObject(o)) {
        return [];
      }
      if ($keys) {
        return $keys(o);
      }
      /** @type {!Array} */
      var _results = [];
      var key;
      for (key in o) {
        if (_.has(o, key)) {
          _results.push(key);
        }
      }
      return _results;
    };
    /**
     * @param {!Object} obj
     * @param {string} target
     * @return {?}
     */
    _.has = function(obj, target) {
      return s.call(obj, target);
    };
    /**
     * @param {!Object} value
     * @return {?}
     */
    _.isObject = function(value) {
      return value === Object(value);
    };
    /** @type {function(): number} */
    _.now = Date.now || function() {
      return (new Date).getTime();
    };
    _.templateSettings = {
      evaluate : /<%([\s\S]+?)%>/g,
      interpolate : /<%=([\s\S]+?)%>/g,
      escape : /<%-([\s\S]+?)%>/g
    };
    /** @type {!RegExp} */
    var noMatch = /(.)^/;
    var cxformList = {
      "'" : "'",
      "\\" : "\\",
      "\r" : "r",
      "\n" : "n",
      "\u2028" : "u2028",
      "\u2029" : "u2029"
    };
    /** @type {!RegExp} */
    var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
    /**
     * @param {?} c
     * @return {?}
     */
    var escapeChar = function(c) {
      return "\\" + cxformList[c];
    };
    return _.template = function(text, settings, oldSettings) {
      if (!settings && oldSettings) {
        /** @type {!Object} */
        settings = oldSettings;
      }
      settings = _.defaults({}, settings, _.templateSettings);
      /** @type {!RegExp} */
      var regMatcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join("|") + "|$", "g");
      /** @type {number} */
      var i = 0;
      /** @type {string} */
      var source = "__p+='";
      text.replace(regMatcher, function(p, opt_hasNoResults, opt_isExperimentalRule, interpolateValue, e) {
        return source = source + text.slice(i, e).replace(escapeRegExp, escapeChar), i = e + p.length, opt_hasNoResults ? source = source + ("'+\n((__t=(" + opt_hasNoResults + "))==null?'':_.escape(__t))+\n'") : opt_isExperimentalRule ? source = source + ("'+\n((__t=(" + opt_isExperimentalRule + "))==null?'':__t)+\n'") : interpolateValue && (source = source + ("';\n" + interpolateValue + "\n__p+='")), p;
      });
      source = source + "';\n";
      if (!settings.variable) {
        /** @type {string} */
        source = "with(obj||{}){\n" + source + "}\n";
      }
      /** @type {string} */
      source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
      try {
        /** @type {!Function} */
        var render = new Function(settings.variable || "obj", "_", source);
      } catch (e) {
        throw e.source = source, e;
      }
      /**
       * @param {?} args
       * @return {?}
       */
      var pipe = function(args) {
        return render.call(this, args, _);
      };
      var argument = settings.variable || "obj";
      return pipe.source = "function(" + argument + "){\n" + source + "}", pipe;
    }, _;
  }();
}, function(mixin, canCreateDiscussions) {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  mixin.exports = function(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  };
}, function(global, canCreateDiscussions) {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function stringify(obj) {
    return (stringify = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(objOrTsid) {
      return typeof objOrTsid;
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    })(obj);
  }
  /**
   * @param {!Window} code
   * @return {?}
   */
  function render(code) {
    return "function" == typeof Symbol && "symbol" === stringify(Symbol.iterator) ? global.exports = render = function(obj) {
      return stringify(obj);
    } : global.exports = render = function(obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : stringify(obj);
    }, render(code);
  }
  /** @type {function(!Window): ?} */
  global.exports = render;
}, function(mixin, canCreateDiscussions, require) {
  require(0).define("focus-visible", mixin.exports = function() {
    /**
     * @param {!HTMLDocument} event
     * @return {undefined}
     */
    function init(event) {
      /**
       * @param {!Object} el
       * @return {?}
       */
      function getClosest(el) {
        return !!(el && el !== document && "HTML" !== el.nodeName && "BODY" !== el.nodeName && "classList" in el && "contains" in el.classList);
      }
      /**
       * @param {!Element} t
       * @return {undefined}
       */
      function check(t) {
        if (!t.getAttribute("data-wf-focus-visible")) {
          t.setAttribute("data-wf-focus-visible", "true");
        }
      }
      /**
       * @return {undefined}
       */
      function resetClickFn() {
        /** @type {boolean} */
        filter = false;
      }
      /**
       * @return {undefined}
       */
      function addEventListeners() {
        document.addEventListener("mousemove", initialize);
        document.addEventListener("mousedown", initialize);
        document.addEventListener("mouseup", initialize);
        document.addEventListener("pointermove", initialize);
        document.addEventListener("pointerdown", initialize);
        document.addEventListener("pointerup", initialize);
        document.addEventListener("touchmove", initialize);
        document.addEventListener("touchstart", initialize);
        document.addEventListener("touchend", initialize);
      }
      /**
       * @param {!Event} event
       * @return {undefined}
       */
      function initialize(event) {
        if (!(event.target.nodeName && "html" === event.target.nodeName.toLowerCase())) {
          /** @type {boolean} */
          filter = false;
          document.removeEventListener("mousemove", initialize);
          document.removeEventListener("mousedown", initialize);
          document.removeEventListener("mouseup", initialize);
          document.removeEventListener("pointermove", initialize);
          document.removeEventListener("pointerdown", initialize);
          document.removeEventListener("pointerup", initialize);
          document.removeEventListener("touchmove", initialize);
          document.removeEventListener("touchstart", initialize);
          document.removeEventListener("touchend", initialize);
        }
      }
      /** @type {boolean} */
      var filter = true;
      /** @type {boolean} */
      var n = false;
      /** @type {null} */
      var showAboveTimeout = null;
      var params = {
        text : true,
        search : true,
        url : true,
        tel : true,
        email : true,
        password : true,
        number : true,
        date : true,
        month : true,
        week : true,
        time : true,
        datetime : true,
        "datetime-local" : true
      };
      document.addEventListener("keydown", function(event) {
        if (!(event.metaKey || event.altKey || event.ctrlKey)) {
          if (getClosest(event.activeElement)) {
            check(event.activeElement);
          }
          /** @type {boolean} */
          filter = true;
        }
      }, true);
      document.addEventListener("mousedown", resetClickFn, true);
      document.addEventListener("pointerdown", resetClickFn, true);
      document.addEventListener("touchstart", resetClickFn, true);
      document.addEventListener("visibilitychange", function() {
        if ("hidden" === document.visibilityState) {
          if (n) {
            /** @type {boolean} */
            filter = true;
          }
          addEventListeners();
        }
      }, true);
      addEventListeners();
      event.addEventListener("focus", function(event) {
        var target;
        var i;
        var tag;
        if (getClosest(event.target) && (filter || (target = event.target, i = target.type, "INPUT" === (tag = target.tagName) && params[i] && !target.readOnly || "TEXTAREA" === tag && !target.readOnly || target.isContentEditable))) {
          check(event.target);
        }
      }, true);
      event.addEventListener("blur", function(event) {
        var el;
        if (getClosest(event.target) && event.target.hasAttribute("data-wf-focus-visible")) {
          /** @type {boolean} */
          n = true;
          window.clearTimeout(showAboveTimeout);
          showAboveTimeout = window.setTimeout(function() {
            /** @type {boolean} */
            n = false;
          }, 100);
          if ((el = event.target).getAttribute("data-wf-focus-visible")) {
            el.removeAttribute("data-wf-focus-visible");
          }
        }
      }, true);
    }
    return {
      ready : function() {
        if ("undefined" != typeof document) {
          try {
            document.querySelector(":focus-visible");
          } catch (e) {
            init(document);
          }
        }
      }
    };
  });
}, function(mixin, canCreateDiscussions, require) {
  require(0).define("focus-within", mixin.exports = function() {
    /**
     * @param {!Object} node
     * @return {?}
     */
    function filter(node) {
      /** @type {!Array} */
      var nodes = [node];
      /** @type {null} */
      var block = null;
      for (; block = node.parentNode || node.host || node.defaultView;) {
        nodes.push(block);
        node = block;
      }
      return nodes;
    }
    /**
     * @param {!Element} domElement
     * @return {undefined}
     */
    function element(domElement) {
      if (!("function" != typeof domElement.getAttribute || domElement.getAttribute("data-wf-focus-within"))) {
        domElement.setAttribute("data-wf-focus-within", "true");
      }
    }
    /**
     * @param {!Element} n
     * @return {undefined}
     */
    function match(n) {
      if ("function" == typeof n.getAttribute && n.getAttribute("data-wf-focus-within")) {
        n.removeAttribute("data-wf-focus-within");
      }
    }
    return {
      ready : function() {
        if ("undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within")) {
          try {
            document.querySelector(":focus-within");
          } catch (r) {
            /**
             * @param {!Object} e
             * @return {undefined}
             */
            init = function(e) {
              var r;
              if (!r) {
                window.requestAnimationFrame(function() {
                  /** @type {boolean} */
                  r = false;
                  if ("blur" === e.type) {
                    Array.prototype.slice.call(filter(e.target)).forEach(match);
                  }
                  if ("focus" === e.type) {
                    Array.prototype.slice.call(filter(e.target)).forEach(element);
                  }
                });
                /** @type {boolean} */
                r = true;
              }
            };
            document.addEventListener("focus", init, true);
            document.addEventListener("blur", init, true);
            element(document.body);
          }
        }
        var init;
      }
    };
  });
}, function(mixin, canCreateDiscussions, keyGen) {
  var o = keyGen(0);
  o.define("focus", mixin.exports = function() {
    /**
     * @param {!Event} event
     * @return {undefined}
     */
    function trapFocus(event) {
      if (e) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        t.unshift(event);
      }
    }
    /**
     * @param {!Event} customOptions
     * @return {undefined}
     */
    function init(customOptions) {
      if (function(data) {
        var e = data.target;
        var tg = e.tagName;
        return /^a$/i.test(tg) && null != e.href || /^(button|textarea)$/i.test(tg) && true !== e.disabled || /^input$/i.test(tg) && /^(button|reset|submit|radio|checkbox)$/i.test(e.type) && !e.disabled || !/^(button|input|textarea|select|a)$/i.test(tg) && !Number.isNaN(Number.parseFloat(e.tabIndex)) || /^audio$/i.test(tg) || /^video$/i.test(tg) && true === e.controls;
      }(customOptions)) {
        /** @type {boolean} */
        e = true;
        setTimeout(function() {
          /** @type {boolean} */
          e = false;
          customOptions.target.focus();
          for (; t.length > 0;) {
            var event = t.pop();
            event.target.dispatchEvent(new MouseEvent(event.type, event));
          }
        }, 0);
      }
    }
    /** @type {!Array} */
    var t = [];
    /** @type {boolean} */
    var e = false;
    return {
      ready : function() {
        if ("undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within") && o.env.safari) {
          document.addEventListener("mousedown", init, true);
          document.addEventListener("mouseup", trapFocus, true);
          document.addEventListener("click", trapFocus, true);
        }
      }
    };
  });
}, function(mixin, canCreateDiscussions, $) {
  var self = $(0);
  self.define("links", mixin.exports = function($, connection) {
    /**
     * @param {!Object} e
     * @return {undefined}
     */
    function callback(e) {
      var value = shouldAvoid && e.getAttribute("href-disabled") || e.getAttribute("href");
      if (location.href = value, !(value.indexOf(":") >= 0)) {
        var item = $(e);
        if (location.hash.length > 1 && location.host + location.pathname === url.host + url.pathname) {
          if (!/^#[a-zA-Z0-9\-_]+$/.test(location.hash)) {
            return;
          }
          var second = $(location.hash);
          if (second.length) {
            result.push({
              link : item,
              sec : second,
              active : false
            });
          }
        } else {
          if ("#" !== value && "" !== value) {
            /** @type {boolean} */
            var name = location.href === url.href || value === css || trueRE.test(value) && quoteEnd.test(css);
            onChange(item, color, name);
          }
        }
      }
    }
    /**
     * @return {undefined}
     */
    function resize() {
      var parentOffset = $WINDOW.scrollTop();
      var parentHeight = $WINDOW.height();
      connection.each(result, function(args) {
        var target = args.link;
        var $itemElement = args.sec;
        var offsetTop = $itemElement.offset().top;
        var offset = $itemElement.outerHeight();
        /** @type {number} */
        var height = .5 * parentHeight;
        var name = $itemElement.is(":visible") && offsetTop + offset - height >= parentOffset && offsetTop + height <= parentOffset + parentHeight;
        if (args.active !== name) {
          args.active = name;
          onChange(target, color, name);
        }
      });
    }
    /**
     * @param {!Object} item
     * @param {string} e
     * @param {string} type
     * @return {undefined}
     */
    function onChange(item, e, type) {
      var style = item.hasClass(e);
      if (!(type && style)) {
        if (type || style) {
          if (type) {
            item.addClass(e);
          } else {
            item.removeClass(e);
          }
        }
      }
    }
    var shouldAvoid;
    var result;
    var css;
    var block = {};
    var $WINDOW = $(window);
    var avoidLocations = self.env();
    /** @type {!Location} */
    var url = window.location;
    /** @type {!Element} */
    var location = document.createElement("a");
    /** @type {string} */
    var color = "w--current";
    /** @type {!RegExp} */
    var trueRE = /index\.(html|php)$/;
    /** @type {!RegExp} */
    var quoteEnd = /\/$/;
    return block.ready = block.design = block.preview = function() {
      shouldAvoid = avoidLocations && self.env("design");
      css = self.env("slug") || url.pathname || "";
      self.scroll.off(resize);
      /** @type {!Array} */
      result = [];
      /** @type {!HTMLCollection<(HTMLAnchorElement|HTMLAreaElement)>} */
      var links = document.links;
      /** @type {number} */
      var i = 0;
      for (; i < links.length; ++i) {
        callback(links[i]);
      }
      if (result.length) {
        self.scroll.on(resize);
        resize();
      }
    }, block;
  });
}, function(mixin, canCreateDiscussions, context) {
  var that = context(0);
  that.define("scroll", mixin.exports = function($) {
    /**
     * @param {!Object} elm
     * @param {string} mode
     * @return {undefined}
     */
    function apply(elm, mode) {
      var tabindex;
      switch(mode) {
        case "add":
          if (tabindex = elm.attr("tabindex")) {
            elm.attr("data-wf-tabindex-swap", tabindex);
          } else {
            elm.attr("tabindex", "-1");
          }
          break;
        case "remove":
          if (tabindex = elm.attr("data-wf-tabindex-swap")) {
            elm.attr("tabindex", tabindex);
            elm.removeAttr("data-wf-tabindex-swap");
          } else {
            elm.removeAttr("tabindex");
          }
      }
      elm.toggleClass("wf-force-outline-none", "add" === mode);
    }
    /**
     * @param {!Object} touch
     * @return {undefined}
     */
    function init(touch) {
      var target = touch.currentTarget;
      if (!(that.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(target.className))) {
        var options;
        var i = (options = target, pattern.test(options.hash) && options.host + options.pathname === location.host + location.pathname ? target.hash : "");
        if ("" !== i) {
          var source = $(i);
          if (source.length) {
            if (touch) {
              touch.preventDefault();
              touch.stopPropagation();
            }
            (function(hash) {
              if (location.hash !== hash && history && history.pushState && (!that.env.chrome || "file:" !== location.protocol)) {
                /** @type {*} */
                var newHash = history.state && history.state.hash;
                if (newHash !== hash) {
                  history.pushState({
                    hash : hash
                  }, "", hash);
                }
              }
            })(i);
            window.setTimeout(function() {
              !function(value, callback) {
                var start = $WINDOW.scrollTop();
                var end = function(element) {
                  var div = $(s);
                  var _yd = "fixed" === div.css("position") ? div.outerHeight() : 0;
                  /** @type {number} */
                  var _ypos = element.offset().top - _yd;
                  if ("mid" === element.data("scroll")) {
                    /** @type {number} */
                    var connectNumber = $WINDOW.height() - _yd;
                    var currentNumber = element.outerHeight();
                    if (currentNumber < connectNumber) {
                      /** @type {number} */
                      _ypos = _ypos - Math.round((connectNumber - currentNumber) / 2);
                    }
                  }
                  return _ypos;
                }(value);
                if (start === end) {
                  return;
                }
                var duration = function(e, v, value) {
                  if ("none" === document.body.getAttribute("data-wf-scroll-motion") || rec_certD.matches) {
                    return 0;
                  }
                  /** @type {number} */
                  var _PAGE_currentSubPage = 1;
                  return f.add(e).each(function(canCreateDiscussions, clicked_el) {
                    /** @type {number} */
                    var n = parseFloat(clicked_el.getAttribute("data-scroll-time"));
                    if (!isNaN(n) && n >= 0) {
                      /** @type {number} */
                      _PAGE_currentSubPage = n;
                    }
                  }), (472.143 * Math.log(Math.abs(v - value) + 125) - 2E3) * _PAGE_currentSubPage;
                }(value, start, end);
                /** @type {number} */
                var lastRuntime = Date.now();
                waitUntilQuiet(function start() {
                  /** @type {number} */
                  var elapsed = Date.now() - lastRuntime;
                  window.scroll(0, function(date, cur, val, max) {
                    return val > max ? cur : date + (cur - date) * ((scale = val / max) < .5 ? 4 * scale * scale * scale : (scale - 1) * (2 * scale - 2) * (2 * scale - 2) + 1);
                    var scale;
                  }(start, end, elapsed, duration));
                  if (elapsed <= duration) {
                    waitUntilQuiet(start);
                  } else {
                    if ("function" == typeof callback) {
                      callback();
                    }
                  }
                });
              }(source, function() {
                apply(source, "add");
                source.get(0).focus({
                  preventScroll : true
                });
                apply(source, "remove");
              });
            }, touch ? 0 : 300);
          }
        }
      }
    }
    var attr = {
      WF_CLICK_EMPTY : "click.wf-empty-link",
      WF_CLICK_SCROLL : "click.wf-scroll"
    };
    /** @type {!Location} */
    var location = window.location;
    /** @type {(History|null)} */
    var history = function() {
      try {
        return Boolean(window.frameElement);
      } catch (t) {
        return true;
      }
    }() ? null : window.history;
    var $WINDOW = $(window);
    var editor = $(document);
    var f = $(document.body);
    var waitUntilQuiet = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(name) {
      window.setTimeout(name, 15);
    };
    /** @type {string} */
    var metrics = that.env("editor") ? ".w-editor-body" : "body";
    /** @type {string} */
    var s = "header, " + metrics + " > .header, " + metrics + " > .w-nav:not([data-no-scroll])";
    /** @type {string} */
    var dummyTitle = 'a[href="#"]';
    /** @type {string} */
    var flagEvent = 'a[href*="#"]:not(.w-tab-link):not(' + dummyTitle + ")";
    /** @type {!Element} */
    var defStyle = document.createElement("style");
    defStyle.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));
    /** @type {!RegExp} */
    var pattern = /^#[a-zA-Z0-9][\w:.-]*$/;
    /** @type {(MediaQueryList|boolean|null)} */
    var rec_certD = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
    return {
      ready : function() {
        /** @type {string} */
        var type = attr.WF_CLICK_EMPTY;
        /** @type {string} */
        var close = attr.WF_CLICK_SCROLL;
        editor.on(close, flagEvent, init);
        editor.on(type, dummyTitle, function(event) {
          event.preventDefault();
        });
        document.head.insertBefore(defStyle, document.head.firstChild);
      }
    };
  });
}, function(mixin, canCreateDiscussions, require) {
  require(0).define("touch", mixin.exports = function($) {
    /**
     * @param {(!Function|number)} document
     * @return {undefined}
     */
    function initialize(document) {
      /**
       * @param {!Event} event
       * @return {undefined}
       */
      function onTouchStarted(event) {
        var touches = event.touches;
        if (!(touches && touches.length > 1)) {
          /** @type {boolean} */
          o = true;
          if (touches) {
            /** @type {boolean} */
            a = true;
            x = touches[0].clientX;
          } else {
            x = event.clientX;
          }
          prevX = x;
        }
      }
      /**
       * @param {!Event} event
       * @return {?}
       */
      function listener(event) {
        if (o) {
          if (a && "mousemove" === event.type) {
            return event.preventDefault(), void event.stopPropagation();
          }
          var e = event.touches;
          var x = e ? e[0].clientX : event.clientX;
          /** @type {number} */
          var diffX = x - prevX;
          prevX = x;
          if (Math.abs(diffX) > maxOldIndex && resize && "" === String(resize())) {
            !function(eventName, event, newPerPage) {
              var e = $.Event(eventName, {
                originalEvent : event
              });
              $(event.target).trigger(e, newPerPage);
            }("swipe", event, {
              direction : diffX > 0 ? "right" : "left"
            });
            l();
          }
        }
      }
      /**
       * @param {!Event} event
       * @return {?}
       */
      function f(event) {
        if (o) {
          return o = false, a && "mouseup" === event.type ? (event.preventDefault(), event.stopPropagation(), void(a = false)) : void 0;
        }
      }
      /**
       * @return {undefined}
       */
      function l() {
        /** @type {boolean} */
        o = false;
      }
      var x;
      var prevX;
      /** @type {boolean} */
      var o = false;
      /** @type {boolean} */
      var a = false;
      /** @type {number} */
      var maxOldIndex = Math.min(Math.round(.04 * window.innerWidth), 40);
      document.addEventListener("touchstart", onTouchStarted, false);
      document.addEventListener("touchmove", listener, false);
      document.addEventListener("touchend", f, false);
      document.addEventListener("touchcancel", l, false);
      document.addEventListener("mousedown", onTouchStarted, false);
      document.addEventListener("mousemove", listener, false);
      document.addEventListener("mouseup", f, false);
      document.addEventListener("mouseout", l, false);
      /**
       * @return {undefined}
       */
      this.destroy = function() {
        document.removeEventListener("touchstart", onTouchStarted, false);
        document.removeEventListener("touchmove", listener, false);
        document.removeEventListener("touchend", f, false);
        document.removeEventListener("touchcancel", l, false);
        document.removeEventListener("mousedown", onTouchStarted, false);
        document.removeEventListener("mousemove", listener, false);
        document.removeEventListener("mouseup", f, false);
        document.removeEventListener("mouseout", l, false);
        /** @type {null} */
        document = null;
      };
    }
    var that = {};
    /** @type {function(this:Window): (Selection|null)} */
    var resize = window.getSelection;
    return $.event.special.tap = {
      bindType : "click",
      delegateType : "click"
    }, that.init = function(o) {
      return (o = "string" == typeof o ? $(o).get(0) : o) ? new initialize(o) : null;
    }, that.instance = that.init(document), that;
  });
}]);
