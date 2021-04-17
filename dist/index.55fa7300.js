// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4wAiV":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "acdc4a9e13b4ee53124e4eb655fa7300";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"2RrZd":[function(require,module,exports) {
!(function () {
  function t(t, e) {
    return (function (t, e) {
      if (e.get) return e.get.call(t);
      return e.value;
    })(t, s(t, e, "get"));
  }
  function e(t, e, o) {
    return ((function (t, e, s) {
      if (e.set) e.set.call(t, s); else {
        if (!e.writable) throw new TypeError("attempted to set read only private field");
        e.value = s;
      }
    })(t, s(t, e, "set"), o), o);
  }
  function s(t, e, s) {
    if (!e.has(t)) throw new TypeError("attempted to " + s + " private field on non-instance");
    return e.get(t);
  }
  function o(t, e, s) {
    return ((e in t) ? Object.defineProperty(t, e, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = s, t);
  }
  const n = document.querySelector(".form"), i = document.querySelector(".workouts"), a = document.querySelector(".form__input--type"), r = document.querySelector(".form__input--distance"), c = document.querySelector(".form__input--duration"), l = document.querySelector(".form__input--cadence"), u = document.querySelector(".form__input--elevation");
  class p {
    constructor(t, e, s) {
      (o(this, "date", new Date()), o(this, "id", (Date.now() + "").slice(-10)), o(this, "clicks", 0), this.coords = t, this.distance = e, this.duration = s);
    }
    _setDescription() {
      this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][this.date.getMonth()]} ${this.date.getDate()}`;
    }
    click() {
      this.clicks++;
    }
  }
  class d extends p {
    constructor(t, e, s, n) {
      (super(t, e, s), o(this, "type", "running"), this.cadence = n, this.calcPace(), this._setDescription());
    }
    calcPace() {
      return (this.pace = this.duration / this.distance, this.pace);
    }
  }
  class _ extends p {
    constructor(t, e, s, n) {
      (super(t, e, s), o(this, "type", "cycling"), this.elevationGain = n, this.calcSpeed(), this._setDescription());
    }
    calcSpeed() {
      return (this.speed = this.distance / (this.duration / 60), this.speed);
    }
  }
  var h = new WeakMap(), w = new WeakMap(), v = new WeakMap(), g = new WeakMap();
  new (class {
    constructor() {
      (h.set(this, {
        writable: !0,
        value: void 0
      }), w.set(this, {
        writable: !0,
        value: void 0
      }), v.set(this, {
        writable: !0,
        value: []
      }), g.set(this, {
        writable: !0,
        value: 13
      }), this._getPosition(), this._getLocalStorage(), n.addEventListener("submit", this._newWorkout.bind(this)), a.addEventListener("change", this._toggleElevationField), i.addEventListener("click", this._moveToPopup.bind(this)));
    }
    _getPosition() {
      navigator.geolocation && navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
        alert("Could not get your position");
      });
    }
    _loadMap(s) {
      const {latitude: o} = s.coords, {longitude: n} = s.coords;
      console.log(`https://www.google.com/maps/@${o},${n},13z`);
      const i = [o, n];
      (e(this, h, L.map("map").setView(i, t(this, g))), L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(t(this, h)), t(this, h).on("click", this._showForm.bind(this)));
    }
    _showForm(t) {
      (e(this, w, t), n.classList.remove("hidden"), r.focus());
    }
    _hideForm() {
      (r.value = c.value = l.value = u.value = "", n.style.display = "none", n.classList.add("hidden"), setTimeout(() => n.style.display = "grid", 1e3));
    }
    _toggleElevationField() {
      (u.closest(".form__row").classList.toggle("form__row--hidden"), l.closest(".form__row").classList.toggle("form__row--hidden"));
    }
    _newWorkout(e) {
      const s = (...t) => t.every(t => Number.isFinite(t)), o = (...t) => t.every(t => t > 0);
      e.preventDefault();
      const n = a.value, i = +r.value, p = +c.value, {lat: h, lng: g} = t(this, w).latlng;
      let k;
      if ("running" === n) {
        const t = +l.value;
        if (!s(i, p, t) || !o(i, p, t)) return alert("Inputs have to be positive numbers!");
        k = new d([h, g], i, p, t);
      }
      if ("cycling" === n) {
        const t = +u.value;
        if (!s(i, p, t) || !o(i, p)) return alert("Inputs have to be positive numbers!");
        k = new _([h, g], i, p, t);
      }
      (t(this, v).push(k), console.log(k), this.renderWorkoutMarker(k), this._renderWorkout(k), this._hideForm(), this._setLocalStorage());
    }
    renderWorkoutMarker(e) {
      L.marker(e.coords).addTo(t(this, h)).bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: !1,
        closeOnClick: !1,
        className: `${e.type}-popup`
      })).setPopupContent(`${"running" === e.type ? "🏃‍♂️" : "🚴‍♀️"} ${e.description}`).openPopup();
    }
    _renderWorkout(t) {
      let e = `\n    <li class="workout workout--${t.type}" data-id="${t.id}">\n          <h2 class="workout__title">${t.description}</h2>\n          <div class="workout__details">\n            <span class="workout__icon">${"running" === t.type ? "🏃‍♂️" : "🚴‍♀️"}</span>\n            <span class="workout__value">${t.distance}</span>\n            <span class="workout__unit">km</span>\n          </div>\n          <div class="workout__details">\n            <span class="workout__icon">⏱</span>\n            <span class="workout__value">${t.duration}</span>\n            <span class="workout__unit">min</span>\n          </div>\n    `;
      ("running" === t.type && (e += `\n      <div class="workout__details">\n            <span class="workout__icon">⚡️</span>\n            <span class="workout__value">${t.pace.toFixed(1)}</span>\n            <span class="workout__unit">min/km</span>\n          </div>\n          <div class="workout__details">\n            <span class="workout__icon">🦶🏼</span>\n            <span class="workout__value">${t.cadence}</span>\n            <span class="workout__unit">spm</span>\n          </div>\n        </li>\n    `), "cycling" === t.type && (e += `\n    <div class="workout__details">\n            <span class="workout__icon">⚡️</span>\n            <span class="workout__value">${t.speed.toFixed(1)}</span>\n            <span class="workout__unit">km/h</span>\n          </div>\n          <div class="workout__details">\n            <span class="workout__icon">⛰</span>\n            <span class="workout__value">${t.elevationGain}</span>\n            <span class="workout__unit">m</span>\n          </div>\n        </li>\n        `), n.insertAdjacentHTML("afterend", e));
    }
    _moveToPopup(e) {
      const s = e.target.closest(".workout");
      if ((console.log(s), !s)) return;
      const o = t(this, v).find(t => t.id === s.dataset.id);
      (console.log(o), t(this, h).setView(o.coords, t(this, g), {
        animate: !0,
        pan: {
          duration: 1
        }
      }), o.click());
    }
    _setLocalStorage() {
      localStorage.setItem("workouts", JSON.stringify(t(this, v)));
    }
    _getLocalStorage() {
      const s = JSON.parse(localStorage.getItem("workouts"));
      s && (e(this, v, s), t(this, v).forEach(t => {
        this._renderWorkout(t);
      }));
    }
  })();
})();

},{}]},["4wAiV","2RrZd"], "2RrZd", "parcelRequire2367")

//# sourceMappingURL=index.55fa7300.js.map
