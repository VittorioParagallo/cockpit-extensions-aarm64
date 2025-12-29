var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var _a;
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script2) {
    const fetchOpts = {};
    if (script2.integrity)
      fetchOpts.integrity = script2.integrity;
    if (script2.referrerpolicy)
      fetchOpts.referrerPolicy = script2.referrerpolicy;
    if (script2.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script2.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function makeMap(str) {
  const map = /* @__PURE__ */ Object.create(null);
  for (const key of str.split(","))
    map[key] = 1;
  return (val) => val in map;
}
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i2 = arr.indexOf(el);
  if (i2 > -1) {
    arr.splice(i2, 1);
  }
};
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
const isArray$1 = Array.isArray;
const isMap$1 = (val) => toTypeString(val) === "[object Map]";
const isSet$1 = (val) => toTypeString(val) === "[object Set]";
const isDate = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isFunction = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
const isSymbol$1 = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject$1 = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString$1(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-\w/g;
const camelize = cacheStringFunction(
  (str) => {
    return str.replace(camelizeRE, (c) => c.slice(1).toUpperCase());
  }
);
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction(
  (str) => {
    const s2 = str ? `on${capitalize(str)}` : ``;
    return s2;
  }
);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, ...arg) => {
  for (let i2 = 0; i2 < fns.length; i2++) {
    fns[i2](...arg);
  }
};
const def = (obj, key, value, writable = false) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    writable,
    value
  });
};
const looseToNumber = (val) => {
  const n2 = parseFloat(val);
  return isNaN(n2) ? val : n2;
};
const toNumber = (val) => {
  const n2 = isString$1(val) ? Number(val) : NaN;
  return isNaN(n2) ? val : n2;
};
let _globalThis$1;
const getGlobalThis$1 = () => {
  return _globalThis$1 || (_globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function normalizeStyle(value) {
  if (isArray$1(value)) {
    const res = {};
    for (let i2 = 0; i2 < value.length; i2++) {
      const item = value[i2];
      const normalized = isString$1(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString$1(value) || isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString$1(value)) {
    res = value;
  } else if (isArray$1(value)) {
    for (let i2 = 0; i2 < value.length; i2++) {
      const normalized = normalizeClass(value[i2]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
function looseCompareArrays(a2, b2) {
  if (a2.length !== b2.length)
    return false;
  let equal = true;
  for (let i2 = 0; equal && i2 < a2.length; i2++) {
    equal = looseEqual(a2[i2], b2[i2]);
  }
  return equal;
}
function looseEqual(a2, b2) {
  if (a2 === b2)
    return true;
  let aValidType = isDate(a2);
  let bValidType = isDate(b2);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a2.getTime() === b2.getTime() : false;
  }
  aValidType = isSymbol$1(a2);
  bValidType = isSymbol$1(b2);
  if (aValidType || bValidType) {
    return a2 === b2;
  }
  aValidType = isArray$1(a2);
  bValidType = isArray$1(b2);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a2, b2) : false;
  }
  aValidType = isObject(a2);
  bValidType = isObject(b2);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a2).length;
    const bKeysCount = Object.keys(b2).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a2) {
      const aHasKey = a2.hasOwnProperty(key);
      const bHasKey = b2.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a2[key], b2[key])) {
        return false;
      }
    }
  }
  return String(a2) === String(b2);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const isRef$1 = (val) => {
  return !!(val && val["__v_isRef"] === true);
};
const toDisplayString = (val) => {
  return isString$1(val) ? val : val == null ? "" : isArray$1(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef$1(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (isRef$1(val)) {
    return replacer(_key, val.value);
  } else if (isMap$1(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce(
        (entries, [key, val2], i2) => {
          entries[stringifySymbol(key, i2) + " =>"] = val2;
          return entries;
        },
        {}
      )
    };
  } else if (isSet$1(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map((v2) => stringifySymbol(v2))
    };
  } else if (isSymbol$1(val)) {
    return stringifySymbol(val);
  } else if (isObject(val) && !isArray$1(val) && !isPlainObject$1(val)) {
    return String(val);
  }
  return val;
};
const stringifySymbol = (v2, i2 = "") => {
  var _a2;
  return isSymbol$1(v2) ? `Symbol(${(_a2 = v2.description) != null ? _a2 : i2})` : v2;
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this._on = 0;
    this.effects = [];
    this.cleanups = [];
    this._isPaused = false;
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
        this
      ) - 1;
    }
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let i2, l;
      if (this.scopes) {
        for (i2 = 0, l = this.scopes.length; i2 < l; i2++) {
          this.scopes[i2].pause();
        }
      }
      for (i2 = 0, l = this.effects.length; i2 < l; i2++) {
        this.effects[i2].pause();
      }
    }
  }
  resume() {
    if (this._active) {
      if (this._isPaused) {
        this._isPaused = false;
        let i2, l;
        if (this.scopes) {
          for (i2 = 0, l = this.scopes.length; i2 < l; i2++) {
            this.scopes[i2].resume();
          }
        }
        for (i2 = 0, l = this.effects.length; i2 < l; i2++) {
          this.effects[i2].resume();
        }
      }
    }
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    }
  }
  on() {
    if (++this._on === 1) {
      this.prevScope = activeEffectScope;
      activeEffectScope = this;
    }
  }
  off() {
    if (this._on > 0 && --this._on === 0) {
      activeEffectScope = this.prevScope;
      this.prevScope = void 0;
    }
  }
  stop(fromParent) {
    if (this._active) {
      this._active = false;
      let i2, l;
      for (i2 = 0, l = this.effects.length; i2 < l; i2++) {
        this.effects[i2].stop();
      }
      this.effects.length = 0;
      for (i2 = 0, l = this.cleanups.length; i2 < l; i2++) {
        this.cleanups[i2]();
      }
      this.cleanups.length = 0;
      if (this.scopes) {
        for (i2 = 0, l = this.scopes.length; i2 < l; i2++) {
          this.scopes[i2].stop(true);
        }
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
    }
  }
}
function effectScope(detached) {
  return new EffectScope(detached);
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn, failSilently = false) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  }
}
let activeSub;
const pausedQueueEffects = /* @__PURE__ */ new WeakSet();
class ReactiveEffect {
  constructor(fn) {
    this.fn = fn;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 1 | 4;
    this.next = void 0;
    this.cleanup = void 0;
    this.scheduler = void 0;
    if (activeEffectScope && activeEffectScope.active) {
      activeEffectScope.effects.push(this);
    }
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    if (this.flags & 64) {
      this.flags &= -65;
      if (pausedQueueEffects.has(this)) {
        pausedQueueEffects.delete(this);
        this.trigger();
      }
    }
  }
  notify() {
    if (this.flags & 2 && !(this.flags & 32)) {
      return;
    }
    if (!(this.flags & 8)) {
      batch(this);
    }
  }
  run() {
    if (!(this.flags & 1)) {
      return this.fn();
    }
    this.flags |= 2;
    cleanupEffect(this);
    prepareDeps(this);
    const prevEffect = activeSub;
    const prevShouldTrack = shouldTrack;
    activeSub = this;
    shouldTrack = true;
    try {
      return this.fn();
    } finally {
      cleanupDeps(this);
      activeSub = prevEffect;
      shouldTrack = prevShouldTrack;
      this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let link = this.deps; link; link = link.nextDep) {
        removeSub(link);
      }
      this.deps = this.depsTail = void 0;
      cleanupEffect(this);
      this.onStop && this.onStop();
      this.flags &= -2;
    }
  }
  trigger() {
    if (this.flags & 64) {
      pausedQueueEffects.add(this);
    } else if (this.scheduler) {
      this.scheduler();
    } else {
      this.runIfDirty();
    }
  }
  runIfDirty() {
    if (isDirty(this)) {
      this.run();
    }
  }
  get dirty() {
    return isDirty(this);
  }
}
let batchDepth = 0;
let batchedSub;
let batchedComputed;
function batch(sub, isComputed2 = false) {
  sub.flags |= 8;
  if (isComputed2) {
    sub.next = batchedComputed;
    batchedComputed = sub;
    return;
  }
  sub.next = batchedSub;
  batchedSub = sub;
}
function startBatch() {
  batchDepth++;
}
function endBatch() {
  if (--batchDepth > 0) {
    return;
  }
  if (batchedComputed) {
    let e = batchedComputed;
    batchedComputed = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= -9;
      e = next;
    }
  }
  let error;
  while (batchedSub) {
    let e = batchedSub;
    batchedSub = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= -9;
      if (e.flags & 1) {
        try {
          ;
          e.trigger();
        } catch (err2) {
          if (!error)
            error = err2;
        }
      }
      e = next;
    }
  }
  if (error)
    throw error;
}
function prepareDeps(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    link.version = -1;
    link.prevActiveLink = link.dep.activeLink;
    link.dep.activeLink = link;
  }
}
function cleanupDeps(sub) {
  let head;
  let tail = sub.depsTail;
  let link = tail;
  while (link) {
    const prev = link.prevDep;
    if (link.version === -1) {
      if (link === tail)
        tail = prev;
      removeSub(link);
      removeDep(link);
    } else {
      head = link;
    }
    link.dep.activeLink = link.prevActiveLink;
    link.prevActiveLink = void 0;
    link = prev;
  }
  sub.deps = head;
  sub.depsTail = tail;
}
function isDirty(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) {
      return true;
    }
  }
  if (sub._dirty) {
    return true;
  }
  return false;
}
function refreshComputed(computed2) {
  if (computed2.flags & 4 && !(computed2.flags & 16)) {
    return;
  }
  computed2.flags &= -17;
  if (computed2.globalVersion === globalVersion) {
    return;
  }
  computed2.globalVersion = globalVersion;
  if (!computed2.isSSR && computed2.flags & 128 && (!computed2.deps && !computed2._dirty || !isDirty(computed2))) {
    return;
  }
  computed2.flags |= 2;
  const dep = computed2.dep;
  const prevSub = activeSub;
  const prevShouldTrack = shouldTrack;
  activeSub = computed2;
  shouldTrack = true;
  try {
    prepareDeps(computed2);
    const value = computed2.fn(computed2._value);
    if (dep.version === 0 || hasChanged(value, computed2._value)) {
      computed2.flags |= 128;
      computed2._value = value;
      dep.version++;
    }
  } catch (err2) {
    dep.version++;
    throw err2;
  } finally {
    activeSub = prevSub;
    shouldTrack = prevShouldTrack;
    cleanupDeps(computed2);
    computed2.flags &= -3;
  }
}
function removeSub(link, soft = false) {
  const { dep, prevSub, nextSub } = link;
  if (prevSub) {
    prevSub.nextSub = nextSub;
    link.prevSub = void 0;
  }
  if (nextSub) {
    nextSub.prevSub = prevSub;
    link.nextSub = void 0;
  }
  if (dep.subs === link) {
    dep.subs = prevSub;
    if (!prevSub && dep.computed) {
      dep.computed.flags &= -5;
      for (let l = dep.computed.deps; l; l = l.nextDep) {
        removeSub(l, true);
      }
    }
  }
  if (!soft && !--dep.sc && dep.map) {
    dep.map.delete(dep.key);
  }
}
function removeDep(link) {
  const { prevDep, nextDep } = link;
  if (prevDep) {
    prevDep.nextDep = nextDep;
    link.prevDep = void 0;
  }
  if (nextDep) {
    nextDep.prevDep = prevDep;
    link.nextDep = void 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function cleanupEffect(e) {
  const { cleanup } = e;
  e.cleanup = void 0;
  if (cleanup) {
    const prevSub = activeSub;
    activeSub = void 0;
    try {
      cleanup();
    } finally {
      activeSub = prevSub;
    }
  }
}
let globalVersion = 0;
class Link {
  constructor(sub, dep) {
    this.sub = sub;
    this.dep = dep;
    this.version = dep.version;
    this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Dep {
  constructor(computed2) {
    this.computed = computed2;
    this.version = 0;
    this.activeLink = void 0;
    this.subs = void 0;
    this.map = void 0;
    this.key = void 0;
    this.sc = 0;
    this.__v_skip = true;
  }
  track(debugInfo) {
    if (!activeSub || !shouldTrack || activeSub === this.computed) {
      return;
    }
    let link = this.activeLink;
    if (link === void 0 || link.sub !== activeSub) {
      link = this.activeLink = new Link(activeSub, this);
      if (!activeSub.deps) {
        activeSub.deps = activeSub.depsTail = link;
      } else {
        link.prevDep = activeSub.depsTail;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
      }
      addSub(link);
    } else if (link.version === -1) {
      link.version = this.version;
      if (link.nextDep) {
        const next = link.nextDep;
        next.prevDep = link.prevDep;
        if (link.prevDep) {
          link.prevDep.nextDep = next;
        }
        link.prevDep = activeSub.depsTail;
        link.nextDep = void 0;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
        if (activeSub.deps === link) {
          activeSub.deps = next;
        }
      }
    }
    return link;
  }
  trigger(debugInfo) {
    this.version++;
    globalVersion++;
    this.notify(debugInfo);
  }
  notify(debugInfo) {
    startBatch();
    try {
      if (false)
        ;
      for (let link = this.subs; link; link = link.prevSub) {
        if (link.sub.notify()) {
          ;
          link.sub.dep.notify();
        }
      }
    } finally {
      endBatch();
    }
  }
}
function addSub(link) {
  link.dep.sc++;
  if (link.sub.flags & 4) {
    const computed2 = link.dep.computed;
    if (computed2 && !link.dep.subs) {
      computed2.flags |= 4 | 16;
      for (let l = computed2.deps; l; l = l.nextDep) {
        addSub(l);
      }
    }
    const currentTail = link.dep.subs;
    if (currentTail !== link) {
      link.prevSub = currentTail;
      if (currentTail)
        currentTail.nextSub = link;
    }
    link.dep.subs = link;
  }
}
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = Symbol(
  ""
);
const MAP_KEY_ITERATE_KEY = Symbol(
  ""
);
const ARRAY_ITERATE_KEY = Symbol(
  ""
);
function track(target, type2, key) {
  if (shouldTrack && activeSub) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = new Dep());
      dep.map = depsMap;
      dep.key = key;
    }
    {
      dep.track();
    }
  }
}
function trigger(target, type2, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    globalVersion++;
    return;
  }
  const run = (dep) => {
    if (dep) {
      {
        dep.trigger();
      }
    }
  };
  startBatch();
  if (type2 === "clear") {
    depsMap.forEach(run);
  } else {
    const targetIsArray = isArray$1(target);
    const isArrayIndex = targetIsArray && isIntegerKey(key);
    if (targetIsArray && key === "length") {
      const newLength = Number(newValue);
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !isSymbol$1(key2) && key2 >= newLength) {
          run(dep);
        }
      });
    } else {
      if (key !== void 0 || depsMap.has(void 0)) {
        run(depsMap.get(key));
      }
      if (isArrayIndex) {
        run(depsMap.get(ARRAY_ITERATE_KEY));
      }
      switch (type2) {
        case "add":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap$1(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isArrayIndex) {
            run(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap$1(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap$1(target)) {
            run(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
  }
  endBatch();
}
function getDepFromReactive(object, key) {
  const depMap = targetMap.get(object);
  return depMap && depMap.get(key);
}
function reactiveReadArray(array) {
  const raw = toRaw(array);
  if (raw === array)
    return raw;
  track(raw, "iterate", ARRAY_ITERATE_KEY);
  return isShallow(array) ? raw : raw.map(toReactive);
}
function shallowReadArray(arr) {
  track(arr = toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
  return arr;
}
function toWrapped(target, item) {
  if (isReadonly(target)) {
    return isReactive(target) ? toReadonly(toReactive(item)) : toReadonly(item);
  }
  return toReactive(item);
}
const arrayInstrumentations = {
  __proto__: null,
  [Symbol.iterator]() {
    return iterator(this, Symbol.iterator, (item) => toWrapped(this, item));
  },
  concat(...args) {
    return reactiveReadArray(this).concat(
      ...args.map((x) => isArray$1(x) ? reactiveReadArray(x) : x)
    );
  },
  entries() {
    return iterator(this, "entries", (value) => {
      value[1] = toWrapped(this, value[1]);
      return value;
    });
  },
  every(fn, thisArg) {
    return apply(this, "every", fn, thisArg, void 0, arguments);
  },
  filter(fn, thisArg) {
    return apply(
      this,
      "filter",
      fn,
      thisArg,
      (v2) => v2.map((item) => toWrapped(this, item)),
      arguments
    );
  },
  find(fn, thisArg) {
    return apply(
      this,
      "find",
      fn,
      thisArg,
      (item) => toWrapped(this, item),
      arguments
    );
  },
  findIndex(fn, thisArg) {
    return apply(this, "findIndex", fn, thisArg, void 0, arguments);
  },
  findLast(fn, thisArg) {
    return apply(
      this,
      "findLast",
      fn,
      thisArg,
      (item) => toWrapped(this, item),
      arguments
    );
  },
  findLastIndex(fn, thisArg) {
    return apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
  },
  forEach(fn, thisArg) {
    return apply(this, "forEach", fn, thisArg, void 0, arguments);
  },
  includes(...args) {
    return searchProxy(this, "includes", args);
  },
  indexOf(...args) {
    return searchProxy(this, "indexOf", args);
  },
  join(separator) {
    return reactiveReadArray(this).join(separator);
  },
  lastIndexOf(...args) {
    return searchProxy(this, "lastIndexOf", args);
  },
  map(fn, thisArg) {
    return apply(this, "map", fn, thisArg, void 0, arguments);
  },
  pop() {
    return noTracking(this, "pop");
  },
  push(...args) {
    return noTracking(this, "push", args);
  },
  reduce(fn, ...args) {
    return reduce(this, "reduce", fn, args);
  },
  reduceRight(fn, ...args) {
    return reduce(this, "reduceRight", fn, args);
  },
  shift() {
    return noTracking(this, "shift");
  },
  some(fn, thisArg) {
    return apply(this, "some", fn, thisArg, void 0, arguments);
  },
  splice(...args) {
    return noTracking(this, "splice", args);
  },
  toReversed() {
    return reactiveReadArray(this).toReversed();
  },
  toSorted(comparer) {
    return reactiveReadArray(this).toSorted(comparer);
  },
  toSpliced(...args) {
    return reactiveReadArray(this).toSpliced(...args);
  },
  unshift(...args) {
    return noTracking(this, "unshift", args);
  },
  values() {
    return iterator(this, "values", (item) => toWrapped(this, item));
  }
};
function iterator(self2, method, wrapValue) {
  const arr = shallowReadArray(self2);
  const iter = arr[method]();
  if (arr !== self2 && !isShallow(self2)) {
    iter._next = iter.next;
    iter.next = () => {
      const result = iter._next();
      if (!result.done) {
        result.value = wrapValue(result.value);
      }
      return result;
    };
  }
  return iter;
}
const arrayProto = Array.prototype;
function apply(self2, method, fn, thisArg, wrappedRetFn, args) {
  const arr = shallowReadArray(self2);
  const needsWrap = arr !== self2 && !isShallow(self2);
  const methodFn = arr[method];
  if (methodFn !== arrayProto[method]) {
    const result2 = methodFn.apply(self2, args);
    return needsWrap ? toReactive(result2) : result2;
  }
  let wrappedFn = fn;
  if (arr !== self2) {
    if (needsWrap) {
      wrappedFn = function(item, index2) {
        return fn.call(this, toWrapped(self2, item), index2, self2);
      };
    } else if (fn.length > 2) {
      wrappedFn = function(item, index2) {
        return fn.call(this, item, index2, self2);
      };
    }
  }
  const result = methodFn.call(arr, wrappedFn, thisArg);
  return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self2, method, fn, args) {
  const arr = shallowReadArray(self2);
  let wrappedFn = fn;
  if (arr !== self2) {
    if (!isShallow(self2)) {
      wrappedFn = function(acc, item, index2) {
        return fn.call(this, acc, toWrapped(self2, item), index2, self2);
      };
    } else if (fn.length > 3) {
      wrappedFn = function(acc, item, index2) {
        return fn.call(this, acc, item, index2, self2);
      };
    }
  }
  return arr[method](wrappedFn, ...args);
}
function searchProxy(self2, method, args) {
  const arr = toRaw(self2);
  track(arr, "iterate", ARRAY_ITERATE_KEY);
  const res = arr[method](...args);
  if ((res === -1 || res === false) && isProxy(args[0])) {
    args[0] = toRaw(args[0]);
    return arr[method](...args);
  }
  return res;
}
function noTracking(self2, method, args = []) {
  pauseTracking();
  startBatch();
  const res = toRaw(self2)[method].apply(self2, args);
  endBatch();
  resetTracking();
  return res;
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol$1)
);
function hasOwnProperty(key) {
  if (!isSymbol$1(key))
    key = String(key);
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
  constructor(_isReadonly = false, _isShallow = false) {
    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }
  get(target, key, receiver) {
    if (key === "__v_skip")
      return target["__v_skip"];
    const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return isShallow2;
    } else if (key === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    const targetIsArray = isArray$1(target);
    if (!isReadonly2) {
      let fn;
      if (targetIsArray && (fn = arrayInstrumentations[key])) {
        return fn;
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty;
      }
    }
    const res = Reflect.get(
      target,
      key,
      isRef(target) ? target : receiver
    );
    if (isSymbol$1(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (isShallow2) {
      return res;
    }
    if (isRef(res)) {
      const value = targetIsArray && isIntegerKey(key) ? res : res.value;
      return isReadonly2 && isObject(value) ? readonly(value) : value;
    }
    if (isObject(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  }
}
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(false, isShallow2);
  }
  set(target, key, value, receiver) {
    let oldValue = target[key];
    const isArrayWithIntegerKey = isArray$1(target) && isIntegerKey(key);
    if (!this._isShallow) {
      const isOldValueReadonly = isReadonly(oldValue);
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArrayWithIntegerKey && isRef(oldValue) && !isRef(value)) {
        if (isOldValueReadonly) {
          return true;
        } else {
          oldValue.value = value;
          return true;
        }
      }
    }
    const hadKey = isArrayWithIntegerKey ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(
      target,
      key,
      value,
      isRef(target) ? target : receiver
    );
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value);
      }
    }
    return result;
  }
  deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0);
    }
    return result;
  }
  has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol$1(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(
      target,
      "iterate",
      isArray$1(target) ? "length" : ITERATE_KEY
    );
    return Reflect.ownKeys(target);
  }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(true, isShallow2);
  }
  set(target, key) {
    return true;
  }
  deleteProperty(target, key) {
    return true;
  }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
const toShallow = (value) => value;
const getProto$1 = (v2) => Reflect.getPrototypeOf(v2);
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap$1(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return {
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type2) {
  return function(...args) {
    return type2 === "delete" ? false : type2 === "clear" ? void 0 : this;
  };
}
function createInstrumentations(readonly2, shallow) {
  const instrumentations = {
    get(key) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "get", key);
        }
        track(rawTarget, "get", rawKey);
      }
      const { has } = getProto$1(rawTarget);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
      } else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
      } else if (target !== rawTarget) {
        target.get(key);
      }
    },
    get size() {
      const target = this["__v_raw"];
      !readonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
      return target.size;
    },
    has(key) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "has", key);
        }
        track(rawTarget, "has", rawKey);
      }
      return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
    },
    forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      !readonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    }
  };
  extend(
    instrumentations,
    readonly2 ? {
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear")
    } : {
      add(value) {
        if (!shallow && !isShallow(value) && !isReadonly(value)) {
          value = toRaw(value);
        }
        const target = toRaw(this);
        const proto = getProto$1(target);
        const hadKey = proto.has.call(target, value);
        if (!hadKey) {
          target.add(value);
          trigger(target, "add", value, value);
        }
        return this;
      },
      set(key, value) {
        if (!shallow && !isShallow(value) && !isReadonly(value)) {
          value = toRaw(value);
        }
        const target = toRaw(this);
        const { has, get: get2 } = getProto$1(target);
        let hadKey = has.call(target, key);
        if (!hadKey) {
          key = toRaw(key);
          hadKey = has.call(target, key);
        }
        const oldValue = get2.call(target, key);
        target.set(key, value);
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value);
        }
        return this;
      },
      delete(key) {
        const target = toRaw(this);
        const { has, get: get2 } = getProto$1(target);
        let hadKey = has.call(target, key);
        if (!hadKey) {
          key = toRaw(key);
          hadKey = has.call(target, key);
        }
        get2 ? get2.call(target, key) : void 0;
        const result = target.delete(key);
        if (hadKey) {
          trigger(target, "delete", key, void 0);
        }
        return result;
      },
      clear() {
        const target = toRaw(this);
        const hadItems = target.size !== 0;
        const result = target.clear();
        if (hadItems) {
          trigger(
            target,
            "clear",
            void 0,
            void 0
          );
        }
        return result;
      }
    }
  );
  const iteratorMethods = [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ];
  iteratorMethods.forEach((method) => {
    instrumentations[method] = createIterableMethod(method, readonly2, shallow);
  });
  return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = createInstrumentations(isReadonly2, shallow);
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(
      hasOwn(instrumentations, key) && key in target ? instrumentations : target,
      key,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
function shallowReactive(target) {
  return createReactiveObject(
    target,
    false,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  );
}
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function shallowReadonly(target) {
  return createReactiveObject(
    target,
    true,
    shallowReadonlyHandlers,
    shallowReadonlyCollectionHandlers,
    shallowReadonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return value ? !!value["__v_raw"] : false;
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  if (!hasOwn(value, "__v_skip") && Object.isExtensible(value)) {
    def(value, "__v_skip", true);
  }
  return value;
}
const toReactive = (value) => isObject(value) ? reactive(value) : value;
const toReadonly = (value) => isObject(value) ? readonly(value) : value;
function isRef(r2) {
  return r2 ? r2["__v_isRef"] === true : false;
}
function ref$1(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, isShallow2) {
    this.dep = new Dep();
    this["__v_isRef"] = true;
    this["__v_isShallow"] = false;
    this._rawValue = isShallow2 ? value : toRaw(value);
    this._value = isShallow2 ? value : toReactive(value);
    this["__v_isShallow"] = isShallow2;
  }
  get value() {
    {
      this.dep.track();
    }
    return this._value;
  }
  set value(newValue) {
    const oldValue = this._rawValue;
    const useDirectValue = this["__v_isShallow"] || isShallow(newValue) || isReadonly(newValue);
    newValue = useDirectValue ? newValue : toRaw(newValue);
    if (hasChanged(newValue, oldValue)) {
      this._rawValue = newValue;
      this._value = useDirectValue ? newValue : toReactive(newValue);
      {
        this.dep.trigger();
      }
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
  constructor(factory2) {
    this["__v_isRef"] = true;
    this._value = void 0;
    const dep = this.dep = new Dep();
    const { get: get2, set } = factory2(dep.track.bind(dep), dep.trigger.bind(dep));
    this._get = get2;
    this._set = set;
  }
  get value() {
    return this._value = this._get();
  }
  set value(newVal) {
    this._set(newVal);
  }
}
function customRef(factory2) {
  return new CustomRefImpl(factory2);
}
function toRefs(object) {
  const ret = isArray$1(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = propertyToRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this["__v_isRef"] = true;
    this._value = void 0;
    this._raw = toRaw(_object);
    let shallow = true;
    let obj = _object;
    if (!isArray$1(_object) || !isIntegerKey(String(_key))) {
      do {
        shallow = !isProxy(obj) || isShallow(obj);
      } while (shallow && (obj = obj["__v_raw"]));
    }
    this._shallow = shallow;
  }
  get value() {
    let val = this._object[this._key];
    if (this._shallow) {
      val = unref(val);
    }
    return this._value = val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    if (this._shallow && isRef(this._raw[this._key])) {
      const nestedRef = this._object[this._key];
      if (isRef(nestedRef)) {
        nestedRef.value = newVal;
        return;
      }
    }
    this._object[this._key] = newVal;
  }
  get dep() {
    return getDepFromReactive(this._raw, this._key);
  }
}
function propertyToRef(source, key, defaultValue) {
  return new ObjectRefImpl(source, key, defaultValue);
}
class ComputedRefImpl {
  constructor(fn, setter, isSSR) {
    this.fn = fn;
    this.setter = setter;
    this._value = void 0;
    this.dep = new Dep(this);
    this.__v_isRef = true;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 16;
    this.globalVersion = globalVersion - 1;
    this.next = void 0;
    this.effect = this;
    this["__v_isReadonly"] = !setter;
    this.isSSR = isSSR;
  }
  notify() {
    this.flags |= 16;
    if (!(this.flags & 8) && activeSub !== this) {
      batch(this, true);
      return true;
    }
  }
  get value() {
    const link = this.dep.track();
    refreshComputed(this);
    if (link) {
      link.version = this.dep.version;
    }
    return this._value;
  }
  set value(newValue) {
    if (this.setter) {
      this.setter(newValue);
    }
  }
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  if (isFunction(getterOrOptions)) {
    getter = getterOrOptions;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, isSSR);
  return cRef;
}
const INITIAL_WATCHER_VALUE = {};
const cleanupMap = /* @__PURE__ */ new WeakMap();
let activeWatcher = void 0;
function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
  if (owner) {
    let cleanups = cleanupMap.get(owner);
    if (!cleanups)
      cleanupMap.set(owner, cleanups = []);
    cleanups.push(cleanupFn);
  }
}
function watch$1(source, cb, options = EMPTY_OBJ) {
  const { immediate, deep, once, scheduler: scheduler2, augmentJob, call } = options;
  const reactiveGetter = (source2) => {
    if (deep)
      return source2;
    if (isShallow(source2) || deep === false || deep === 0)
      return traverse(source2, 1);
    return traverse(source2);
  };
  let effect;
  let getter;
  let cleanup;
  let boundCleanup;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => reactiveGetter(source);
    forceTrigger = true;
  } else if (isArray$1(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s2) => isReactive(s2) || isShallow(s2));
    getter = () => source.map((s2) => {
      if (isRef(s2)) {
        return s2.value;
      } else if (isReactive(s2)) {
        return reactiveGetter(s2);
      } else if (isFunction(s2)) {
        return call ? call(s2, 2) : s2();
      } else
        ;
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = call ? () => call(source, 2) : source;
    } else {
      getter = () => {
        if (cleanup) {
          pauseTracking();
          try {
            cleanup();
          } finally {
            resetTracking();
          }
        }
        const currentEffect = activeWatcher;
        activeWatcher = effect;
        try {
          return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
        } finally {
          activeWatcher = currentEffect;
        }
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    const depth = deep === true ? Infinity : deep;
    getter = () => traverse(baseGetter(), depth);
  }
  const scope = getCurrentScope();
  const watchHandle = () => {
    effect.stop();
    if (scope && scope.active) {
      remove(scope.effects, effect);
    }
  };
  if (once && cb) {
    const _cb = cb;
    cb = (...args) => {
      _cb(...args);
      watchHandle();
    };
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = (immediateFirstRun) => {
    if (!(effect.flags & 1) || !effect.dirty && !immediateFirstRun) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v2, i2) => hasChanged(v2, oldValue[i2])) : hasChanged(newValue, oldValue))) {
        if (cleanup) {
          cleanup();
        }
        const currentWatcher = activeWatcher;
        activeWatcher = effect;
        try {
          const args = [
            newValue,
            oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
            boundCleanup
          ];
          oldValue = newValue;
          call ? call(cb, 3, args) : cb(...args);
        } finally {
          activeWatcher = currentWatcher;
        }
      }
    } else {
      effect.run();
    }
  };
  if (augmentJob) {
    augmentJob(job);
  }
  effect = new ReactiveEffect(getter);
  effect.scheduler = scheduler2 ? () => scheduler2(job, false) : job;
  boundCleanup = (fn) => onWatcherCleanup(fn, false, effect);
  cleanup = effect.onStop = () => {
    const cleanups = cleanupMap.get(effect);
    if (cleanups) {
      if (call) {
        call(cleanups, 4);
      } else {
        for (const cleanup2 of cleanups)
          cleanup2();
      }
      cleanupMap.delete(effect);
    }
  };
  if (cb) {
    if (immediate) {
      job(true);
    } else {
      oldValue = effect.run();
    }
  } else if (scheduler2) {
    scheduler2(job.bind(null, true), true);
  } else {
    effect.run();
  }
  watchHandle.pause = effect.pause.bind(effect);
  watchHandle.resume = effect.resume.bind(effect);
  watchHandle.stop = watchHandle;
  return watchHandle;
}
function traverse(value, depth = Infinity, seen2) {
  if (depth <= 0 || !isObject(value) || value["__v_skip"]) {
    return value;
  }
  seen2 = seen2 || /* @__PURE__ */ new Map();
  if ((seen2.get(value) || 0) >= depth) {
    return value;
  }
  seen2.set(value, depth);
  depth--;
  if (isRef(value)) {
    traverse(value.value, depth, seen2);
  } else if (isArray$1(value)) {
    for (let i2 = 0; i2 < value.length; i2++) {
      traverse(value[i2], depth, seen2);
    }
  } else if (isSet$1(value) || isMap$1(value)) {
    value.forEach((v2) => {
      traverse(v2, depth, seen2);
    });
  } else if (isPlainObject$1(value)) {
    for (const key in value) {
      traverse(value[key], depth, seen2);
    }
    for (const key of Object.getOwnPropertySymbols(value)) {
      if (Object.prototype.propertyIsEnumerable.call(value, key)) {
        traverse(value[key], depth, seen2);
      }
    }
  }
  return value;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const stack = [];
let isWarning = false;
function warn$1(msg, ...args) {
  if (isWarning)
    return;
  isWarning = true;
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(
      appWarnHandler,
      instance,
      11,
      [
        msg + args.map((a2) => {
          var _a2, _b;
          return (_b = (_a2 = a2.toString) == null ? void 0 : _a2.call(a2)) != null ? _b : JSON.stringify(a2);
        }).join(""),
        instance && instance.proxy,
        trace.map(
          ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
        ).join("\n"),
        trace
      ]
    );
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
  isWarning = false;
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i2) => {
    logs.push(...i2 === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString$1(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
function callWithErrorHandling(fn, instance, type2, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err2) {
    handleError(err2, instance, type2);
  }
}
function callWithAsyncErrorHandling(fn, instance, type2, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type2, args);
    if (res && isPromise(res)) {
      res.catch((err2) => {
        handleError(err2, instance, type2);
      });
    }
    return res;
  }
  if (isArray$1(fn)) {
    const values = [];
    for (let i2 = 0; i2 < fn.length; i2++) {
      values.push(callWithAsyncErrorHandling(fn[i2], instance, type2, args));
    }
    return values;
  }
}
function handleError(err2, instance, type2, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  const { errorHandler, throwUnhandledErrorInProduction } = instance && instance.appContext.config || EMPTY_OBJ;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = `https://vuejs.org/error-reference/#runtime-${type2}`;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i2 = 0; i2 < errorCapturedHooks.length; i2++) {
          if (errorCapturedHooks[i2](err2, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    if (errorHandler) {
      pauseTracking();
      callWithErrorHandling(errorHandler, null, 10, [
        err2,
        exposedInstance,
        errorInfo
      ]);
      resetTracking();
      return;
    }
  }
  logError(err2, type2, contextVNode, throwInDev, throwUnhandledErrorInProduction);
}
function logError(err2, type2, contextVNode, throwInDev = true, throwInProd = false) {
  if (throwInProd) {
    throw err2;
  } else {
    console.error(err2);
  }
}
const queue = [];
let flushIndex = -1;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex$1(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue[middle];
    const middleJobId = getId(middleJob);
    if (middleJobId < id || middleJobId === id && middleJob.flags & 2) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob(job) {
  if (!(job.flags & 1)) {
    const jobId = getId(job);
    const lastJob = queue[queue.length - 1];
    if (!lastJob || !(job.flags & 2) && jobId >= getId(lastJob)) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex$1(jobId), 0, job);
    }
    job.flags |= 1;
    queueFlush();
  }
}
function queueFlush() {
  if (!currentFlushPromise) {
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray$1(cb)) {
    if (activePostFlushCbs && cb.id === -1) {
      activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
    } else if (!(cb.flags & 1)) {
      pendingPostFlushCbs.push(cb);
      cb.flags |= 1;
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(instance, seen2, i2 = flushIndex + 1) {
  for (; i2 < queue.length; i2++) {
    const cb = queue[i2];
    if (cb && cb.flags & 2) {
      if (instance && cb.id !== instance.uid) {
        continue;
      }
      queue.splice(i2, 1);
      i2--;
      if (cb.flags & 4) {
        cb.flags &= -2;
      }
      cb();
      if (!(cb.flags & 4)) {
        cb.flags &= -2;
      }
    }
  }
}
function flushPostFlushCbs(seen2) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)].sort(
      (a2, b2) => getId(a2) - getId(b2)
    );
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      const cb = activePostFlushCbs[postFlushIndex];
      if (cb.flags & 4) {
        cb.flags &= -2;
      }
      if (!(cb.flags & 8))
        cb();
      cb.flags &= -2;
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
function flushJobs(seen2) {
  const check = NOOP;
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && !(job.flags & 8)) {
        if (false)
          ;
        if (job.flags & 4) {
          job.flags &= ~1;
        }
        callWithErrorHandling(
          job,
          job.i,
          job.i ? 15 : 14
        );
        if (!(job.flags & 4)) {
          job.flags &= ~1;
        }
      }
    }
  } finally {
    for (; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job) {
        job.flags &= -2;
      }
    }
    flushIndex = -1;
    queue.length = 0;
    flushPostFlushCbs();
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs();
    }
  }
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx)
    return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    let res;
    try {
      res = fn(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function withDirectives(vnode, directives) {
  if (currentRenderingInstance === null) {
    return vnode;
  }
  const instance = getComponentPublicInstance(currentRenderingInstance);
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i2 = 0; i2 < directives.length; i2++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i2];
    if (dir) {
      if (isFunction(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        traverse(value);
      }
      bindings.push({
        dir,
        instance,
        value,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i2 = 0; i2 < bindings.length; i2++) {
    const binding = bindings[i2];
    if (oldBindings) {
      binding.oldValue = oldBindings[i2].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
const TeleportEndKey = Symbol("_vte");
const isTeleport = (type2) => type2.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
const isTeleportDeferred = (props) => props && (props.defer || props.defer === "");
const isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
const isTargetMathML = (target) => typeof MathMLElement === "function" && target instanceof MathMLElement;
const resolveTarget = (props, select) => {
  const targetSelector = props && props.to;
  if (isString$1(targetSelector)) {
    if (!select) {
      return null;
    } else {
      const target = select(targetSelector);
      return target;
    }
  } else {
    return targetSelector;
  }
};
const TeleportImpl = {
  name: "Teleport",
  __isTeleport: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
    const {
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      o: { insert, querySelector, createText, createComment }
    } = internals;
    const disabled = isTeleportDisabled(n2.props);
    let { shapeFlag, children, dynamicChildren } = n2;
    if (n1 == null) {
      const placeholder = n2.el = createText("");
      const mainAnchor = n2.anchor = createText("");
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      const mount = (container2, anchor2) => {
        if (shapeFlag & 16) {
          mountChildren(
            children,
            container2,
            anchor2,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      };
      const mountToTarget = () => {
        const target = n2.target = resolveTarget(n2.props, querySelector);
        const targetAnchor = prepareAnchor(target, n2, createText, insert);
        if (target) {
          if (namespace !== "svg" && isTargetSVG(target)) {
            namespace = "svg";
          } else if (namespace !== "mathml" && isTargetMathML(target)) {
            namespace = "mathml";
          }
          if (parentComponent && parentComponent.isCE) {
            (parentComponent.ce._teleportTargets || (parentComponent.ce._teleportTargets = /* @__PURE__ */ new Set())).add(target);
          }
          if (!disabled) {
            mount(target, targetAnchor);
            updateCssVars(n2, false);
          }
        }
      };
      if (disabled) {
        mount(container, mainAnchor);
        updateCssVars(n2, true);
      }
      if (isTeleportDeferred(n2.props)) {
        n2.el.__isMounted = false;
        queuePostRenderEffect(() => {
          mountToTarget();
          delete n2.el.__isMounted;
        }, parentSuspense);
      } else {
        mountToTarget();
      }
    } else {
      if (isTeleportDeferred(n2.props) && n1.el.__isMounted === false) {
        queuePostRenderEffect(() => {
          TeleportImpl.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        }, parentSuspense);
        return;
      }
      n2.el = n1.el;
      n2.targetStart = n1.targetStart;
      const mainAnchor = n2.anchor = n1.anchor;
      const target = n2.target = n1.target;
      const targetAnchor = n2.targetAnchor = n1.targetAnchor;
      const wasDisabled = isTeleportDisabled(n1.props);
      const currentContainer = wasDisabled ? container : target;
      const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
      if (namespace === "svg" || isTargetSVG(target)) {
        namespace = "svg";
      } else if (namespace === "mathml" || isTargetMathML(target)) {
        namespace = "mathml";
      }
      if (dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          currentContainer,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds
        );
        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(
          n1,
          n2,
          currentContainer,
          currentAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          false
        );
      }
      if (disabled) {
        if (!wasDisabled) {
          moveTeleport(
            n2,
            container,
            mainAnchor,
            internals,
            1
          );
        } else {
          if (n2.props && n1.props && n2.props.to !== n1.props.to) {
            n2.props.to = n1.props.to;
          }
        }
      } else {
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          const nextTarget = n2.target = resolveTarget(
            n2.props,
            querySelector
          );
          if (nextTarget) {
            moveTeleport(
              n2,
              nextTarget,
              null,
              internals,
              0
            );
          }
        } else if (wasDisabled) {
          moveTeleport(
            n2,
            target,
            targetAnchor,
            internals,
            1
          );
        }
      }
      updateCssVars(n2, disabled);
    }
  },
  remove(vnode, parentComponent, parentSuspense, { um: unmount, o: { remove: hostRemove } }, doRemove) {
    const {
      shapeFlag,
      children,
      anchor,
      targetStart,
      targetAnchor,
      target,
      props
    } = vnode;
    if (target) {
      hostRemove(targetStart);
      hostRemove(targetAnchor);
    }
    doRemove && hostRemove(anchor);
    if (shapeFlag & 16) {
      const shouldRemove = doRemove || !isTeleportDisabled(props);
      for (let i2 = 0; i2 < children.length; i2++) {
        const child = children[i2];
        unmount(
          child,
          parentComponent,
          parentSuspense,
          shouldRemove,
          !!child.dynamicChildren
        );
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
  if (moveType === 0) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }
  const { el, anchor, shapeFlag, children, props } = vnode;
  const isReorder = moveType === 2;
  if (isReorder) {
    insert(el, container, parentAnchor);
  }
  if (!isReorder || isTeleportDisabled(props)) {
    if (shapeFlag & 16) {
      for (let i2 = 0; i2 < children.length; i2++) {
        move(
          children[i2],
          container,
          parentAnchor,
          2
        );
      }
    }
  }
  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, {
  o: { nextSibling, parentNode, querySelector, insert, createText }
}, hydrateChildren) {
  function hydrateDisabledTeleport(node2, vnode2, targetStart, targetAnchor) {
    vnode2.anchor = hydrateChildren(
      nextSibling(node2),
      vnode2,
      parentNode(node2),
      parentComponent,
      parentSuspense,
      slotScopeIds,
      optimized
    );
    vnode2.targetStart = targetStart;
    vnode2.targetAnchor = targetAnchor;
  }
  const target = vnode.target = resolveTarget(
    vnode.props,
    querySelector
  );
  const disabled = isTeleportDisabled(vnode.props);
  if (target) {
    const targetNode = target._lpa || target.firstChild;
    if (vnode.shapeFlag & 16) {
      if (disabled) {
        hydrateDisabledTeleport(
          node,
          vnode,
          targetNode,
          targetNode && nextSibling(targetNode)
        );
      } else {
        vnode.anchor = nextSibling(node);
        let targetAnchor = targetNode;
        while (targetAnchor) {
          if (targetAnchor && targetAnchor.nodeType === 8) {
            if (targetAnchor.data === "teleport start anchor") {
              vnode.targetStart = targetAnchor;
            } else if (targetAnchor.data === "teleport anchor") {
              vnode.targetAnchor = targetAnchor;
              target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
              break;
            }
          }
          targetAnchor = nextSibling(targetAnchor);
        }
        if (!vnode.targetAnchor) {
          prepareAnchor(target, vnode, createText, insert);
        }
        hydrateChildren(
          targetNode && nextSibling(targetNode),
          vnode,
          target,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
      }
    }
    updateCssVars(vnode, disabled);
  } else if (disabled) {
    if (vnode.shapeFlag & 16) {
      hydrateDisabledTeleport(node, vnode, node, nextSibling(node));
    }
  }
  return vnode.anchor && nextSibling(vnode.anchor);
}
const Teleport = TeleportImpl;
function updateCssVars(vnode, isDisabled) {
  const ctx = vnode.ctx;
  if (ctx && ctx.ut) {
    let node, anchor;
    if (isDisabled) {
      node = vnode.el;
      anchor = vnode.anchor;
    } else {
      node = vnode.targetStart;
      anchor = vnode.targetAnchor;
    }
    while (node && node !== anchor) {
      if (node.nodeType === 1)
        node.setAttribute("data-v-owner", ctx.uid);
      node = node.nextSibling;
    }
    ctx.ut();
  }
}
function prepareAnchor(target, vnode, createText, insert) {
  const targetStart = vnode.targetStart = createText("");
  const targetAnchor = vnode.targetAnchor = createText("");
  targetStart[TeleportEndKey] = targetAnchor;
  if (target) {
    insert(targetStart, target);
    insert(targetAnchor, target);
  }
  return targetAnchor;
}
const leaveCbKey = Symbol("_leaveCb");
const enterCbKey$1 = Symbol("_enterCb");
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionPropsValidators = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  onBeforeEnter: TransitionHookValidator,
  onEnter: TransitionHookValidator,
  onAfterEnter: TransitionHookValidator,
  onEnterCancelled: TransitionHookValidator,
  onBeforeLeave: TransitionHookValidator,
  onLeave: TransitionHookValidator,
  onAfterLeave: TransitionHookValidator,
  onLeaveCancelled: TransitionHookValidator,
  onBeforeAppear: TransitionHookValidator,
  onAppear: TransitionHookValidator,
  onAfterAppear: TransitionHookValidator,
  onAppearCancelled: TransitionHookValidator
};
const recursiveGetSubtree = (instance) => {
  const subTree = instance.subTree;
  return subTree.component ? recursiveGetSubtree(subTree.component) : subTree;
};
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: BaseTransitionPropsValidators,
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      const child = findNonCommentChild(children);
      const rawProps = toRaw(props);
      const { mode } = rawProps;
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getInnerChild$1(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      let enterHooks = resolveTransitionHooks(
        innerChild,
        rawProps,
        state,
        instance,
        (hooks) => enterHooks = hooks
      );
      if (innerChild.type !== Comment) {
        setTransitionHooks(innerChild, enterHooks);
      }
      let oldInnerChild = instance.subTree && getInnerChild$1(instance.subTree);
      if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(oldInnerChild, innerChild) && recursiveGetSubtree(instance).type !== Comment) {
        let leavingHooks = resolveTransitionHooks(
          oldInnerChild,
          rawProps,
          state,
          instance
        );
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in" && innerChild.type !== Comment) {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            if (!(instance.job.flags & 8)) {
              instance.update();
            }
            delete leavingHooks.afterLeave;
            oldInnerChild = void 0;
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(
              state,
              oldInnerChild
            );
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el[leaveCbKey] = () => {
              earlyRemove();
              el[leaveCbKey] = void 0;
              delete enterHooks.delayedLeave;
              oldInnerChild = void 0;
            };
            enterHooks.delayedLeave = () => {
              delayedLeave();
              delete enterHooks.delayedLeave;
              oldInnerChild = void 0;
            };
          };
        } else {
          oldInnerChild = void 0;
        }
      } else if (oldInnerChild) {
        oldInnerChild = void 0;
      }
      return child;
    };
  }
};
function findNonCommentChild(children) {
  let child = children[0];
  if (children.length > 1) {
    for (const c of children) {
      if (c.type !== Comment) {
        child = c;
        break;
      }
    }
  }
  return child;
}
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance, postClone) {
  const {
    appear,
    mode,
    persisted = false,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onEnterCancelled,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
    onLeaveCancelled,
    onBeforeAppear,
    onAppear,
    onAfterAppear,
    onAppearCancelled
  } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(
      hook,
      instance,
      9,
      args
    );
  };
  const callAsyncHook = (hook, args) => {
    const done = args[1];
    callHook2(hook, args);
    if (isArray$1(hook)) {
      if (hook.every((hook2) => hook2.length <= 1))
        done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el[leaveCbKey]) {
        el[leaveCbKey](
          true
        );
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) {
        leavingVNode.el[leaveCbKey]();
      }
      callHook2(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el[enterCbKey$1] = (cancelled) => {
        if (called)
          return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el]);
        } else {
          callHook2(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el[enterCbKey$1] = void 0;
      };
      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave(el, remove2) {
      const key2 = String(vnode.key);
      if (el[enterCbKey$1]) {
        el[enterCbKey$1](
          true
        );
      }
      if (state.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el]);
      let called = false;
      const done = el[leaveCbKey] = (cancelled) => {
        if (called)
          return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el]);
        } else {
          callHook2(onAfterLeave, [el]);
        }
        el[leaveCbKey] = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone(vnode2) {
      const hooks2 = resolveTransitionHooks(
        vnode2,
        props,
        state,
        instance,
        postClone
      );
      if (postClone)
        postClone(hooks2);
      return hooks2;
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getInnerChild$1(vnode) {
  if (!isKeepAlive(vnode)) {
    if (isTeleport(vnode.type) && vnode.children) {
      return findNonCommentChild(vnode.children);
    }
    return vnode;
  }
  if (vnode.component) {
    return vnode.component.subTree;
  }
  const { shapeFlag, children } = vnode;
  if (children) {
    if (shapeFlag & 16) {
      return children[0];
    }
    if (shapeFlag & 32 && isFunction(children.default)) {
      return children.default();
    }
  }
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    vnode.transition = hooks;
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i2 = 0; i2 < children.length; i2++) {
    let child = children[i2];
    const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i2);
    if (child.type === Fragment) {
      if (child.patchFlag & 128)
        keyedFragmentCount++;
      ret = ret.concat(
        getTransitionRawChildren(child.children, keepComment, key)
      );
    } else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, { key }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i2 = 0; i2 < ret.length; i2++) {
      ret[i2].patchFlag = -2;
    }
  }
  return ret;
}
function defineComponent(options, extraOptions) {
  return isFunction(options) ? /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))() : options;
}
function useId() {
  const i2 = getCurrentInstance();
  if (i2) {
    return (i2.appContext.config.idPrefix || "v") + "-" + i2.ids[0] + i2.ids[1]++;
  }
  return "";
}
function markAsyncBoundary(instance) {
  instance.ids = [instance.ids[0] + instance.ids[2]++ + "-", 0, 0];
}
const pendingSetRefMap = /* @__PURE__ */ new WeakMap();
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray$1(rawRef)) {
    rawRef.forEach(
      (r2, i2) => setRef(
        r2,
        oldRawRef && (isArray$1(oldRawRef) ? oldRawRef[i2] : oldRawRef),
        parentSuspense,
        vnode,
        isUnmount
      )
    );
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) {
      setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
    }
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref2 } = rawRef;
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  const rawSetupState = toRaw(setupState);
  const canSetSetupRef = setupState === EMPTY_OBJ ? NO : (key) => {
    return hasOwn(rawSetupState, key);
  };
  if (oldRef != null && oldRef !== ref2) {
    invalidatePendingSetRef(oldRawRef);
    if (isString$1(oldRef)) {
      refs[oldRef] = null;
      if (canSetSetupRef(oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      {
        oldRef.value = null;
      }
      const oldRawRefAtom = oldRawRef;
      if (oldRawRefAtom.k)
        refs[oldRawRefAtom.k] = null;
    }
  }
  if (isFunction(ref2)) {
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  } else {
    const _isString = isString$1(ref2);
    const _isRef = isRef(ref2);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? canSetSetupRef(ref2) ? setupState[ref2] : refs[ref2] : ref2.value;
          if (isUnmount) {
            isArray$1(existing) && remove(existing, refValue);
          } else {
            if (!isArray$1(existing)) {
              if (_isString) {
                refs[ref2] = [refValue];
                if (canSetSetupRef(ref2)) {
                  setupState[ref2] = refs[ref2];
                }
              } else {
                const newVal = [refValue];
                {
                  ref2.value = newVal;
                }
                if (rawRef.k)
                  refs[rawRef.k] = newVal;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref2] = value;
          if (canSetSetupRef(ref2)) {
            setupState[ref2] = value;
          }
        } else if (_isRef) {
          {
            ref2.value = value;
          }
          if (rawRef.k)
            refs[rawRef.k] = value;
        } else
          ;
      };
      if (value) {
        const job = () => {
          doSet();
          pendingSetRefMap.delete(rawRef);
        };
        job.id = -1;
        pendingSetRefMap.set(rawRef, job);
        queuePostRenderEffect(job, parentSuspense);
      } else {
        invalidatePendingSetRef(rawRef);
        doSet();
      }
    }
  }
}
function invalidatePendingSetRef(rawRef) {
  const pendingSetRef = pendingSetRefMap.get(rawRef);
  if (pendingSetRef) {
    pendingSetRef.flags |= 8;
    pendingSetRefMap.delete(rawRef);
  }
}
getGlobalThis$1().requestIdleCallback || ((cb) => setTimeout(cb, 1));
getGlobalThis$1().cancelIdleCallback || ((id) => clearTimeout(id));
const isAsyncWrapper = (i2) => !!i2.type.__asyncLoader;
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
const KeepAliveImpl = {
  name: `KeepAlive`,
  __isKeepAlive: true,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const sharedContext = instance.ctx;
    if (!sharedContext.renderer) {
      return () => {
        const children = slots.default && slots.default();
        return children && children.length === 1 ? children[0] : children;
      };
    }
    const cache = /* @__PURE__ */ new Map();
    const keys = /* @__PURE__ */ new Set();
    let current = null;
    const parentSuspense = instance.suspense;
    const {
      renderer: {
        p: patch,
        m: move,
        um: _unmount,
        o: { createElement }
      }
    } = sharedContext;
    const storageContainer = createElement("div");
    sharedContext.activate = (vnode, container, anchor, namespace, optimized) => {
      const instance2 = vnode.component;
      move(vnode, container, anchor, 0, parentSuspense);
      patch(
        instance2.vnode,
        vnode,
        container,
        anchor,
        instance2,
        parentSuspense,
        namespace,
        vnode.slotScopeIds,
        optimized
      );
      queuePostRenderEffect(() => {
        instance2.isDeactivated = false;
        if (instance2.a) {
          invokeArrayFns(instance2.a);
        }
        const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance2.parent, vnode);
        }
      }, parentSuspense);
    };
    sharedContext.deactivate = (vnode) => {
      const instance2 = vnode.component;
      invalidateMount(instance2.m);
      invalidateMount(instance2.a);
      move(vnode, storageContainer, null, 1, parentSuspense);
      queuePostRenderEffect(() => {
        if (instance2.da) {
          invokeArrayFns(instance2.da);
        }
        const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance2.parent, vnode);
        }
        instance2.isDeactivated = true;
      }, parentSuspense);
    };
    function unmount(vnode) {
      resetShapeFlag(vnode);
      _unmount(vnode, instance, parentSuspense, true);
    }
    function pruneCache(filter) {
      cache.forEach((vnode, key) => {
        const name = getComponentName(vnode.type);
        if (name && !filter(name)) {
          pruneCacheEntry(key);
        }
      });
    }
    function pruneCacheEntry(key) {
      const cached = cache.get(key);
      if (cached && (!current || !isSameVNodeType(cached, current))) {
        unmount(cached);
      } else if (current) {
        resetShapeFlag(current);
      }
      cache.delete(key);
      keys.delete(key);
    }
    watch(
      () => [props.include, props.exclude],
      ([include, exclude]) => {
        include && pruneCache((name) => matches(include, name));
        exclude && pruneCache((name) => !matches(exclude, name));
      },
      { flush: "post", deep: true }
    );
    let pendingCacheKey = null;
    const cacheSubtree = () => {
      if (pendingCacheKey != null) {
        if (isSuspense(instance.subTree.type)) {
          queuePostRenderEffect(() => {
            cache.set(pendingCacheKey, getInnerChild(instance.subTree));
          }, instance.subTree.suspense);
        } else {
          cache.set(pendingCacheKey, getInnerChild(instance.subTree));
        }
      }
    };
    onMounted(cacheSubtree);
    onUpdated(cacheSubtree);
    onBeforeUnmount(() => {
      cache.forEach((cached) => {
        const { subTree, suspense } = instance;
        const vnode = getInnerChild(subTree);
        if (cached.type === vnode.type && cached.key === vnode.key) {
          resetShapeFlag(vnode);
          const da = vnode.component.da;
          da && queuePostRenderEffect(da, suspense);
          return;
        }
        unmount(cached);
      });
    });
    return () => {
      pendingCacheKey = null;
      if (!slots.default) {
        return current = null;
      }
      const children = slots.default();
      const rawVNode = children[0];
      if (children.length > 1) {
        current = null;
        return children;
      } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
        current = null;
        return rawVNode;
      }
      let vnode = getInnerChild(rawVNode);
      if (vnode.type === Comment) {
        current = null;
        return vnode;
      }
      const comp = vnode.type;
      const name = getComponentName(
        isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp
      );
      const { include, exclude, max } = props;
      if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
        vnode.shapeFlag &= -257;
        current = vnode;
        return rawVNode;
      }
      const key = vnode.key == null ? comp : vnode.key;
      const cachedVNode = cache.get(key);
      if (vnode.el) {
        vnode = cloneVNode(vnode);
        if (rawVNode.shapeFlag & 128) {
          rawVNode.ssContent = vnode;
        }
      }
      pendingCacheKey = key;
      if (cachedVNode) {
        vnode.el = cachedVNode.el;
        vnode.component = cachedVNode.component;
        if (vnode.transition) {
          setTransitionHooks(vnode, vnode.transition);
        }
        vnode.shapeFlag |= 512;
        keys.delete(key);
        keys.add(key);
      } else {
        keys.add(key);
        if (max && keys.size > parseInt(max, 10)) {
          pruneCacheEntry(keys.values().next().value);
        }
      }
      vnode.shapeFlag |= 256;
      current = vnode;
      return isSuspense(rawVNode.type) ? rawVNode : vnode;
    };
  }
};
const KeepAlive = KeepAliveImpl;
function matches(pattern, name) {
  if (isArray$1(pattern)) {
    return pattern.some((p2) => matches(p2, name));
  } else if (isString$1(pattern)) {
    return pattern.split(",").includes(name);
  } else if (isRegExp(pattern)) {
    pattern.lastIndex = 0;
    return pattern.test(name);
  }
  return false;
}
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type2, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type2, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type2, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type2, target, keepAliveRoot) {
  const injected = injectHook(
    type2,
    hook,
    keepAliveRoot,
    true
  );
  onUnmounted(() => {
    remove(keepAliveRoot[type2], injected);
  }, target);
}
function resetShapeFlag(vnode) {
  vnode.shapeFlag &= -257;
  vnode.shapeFlag &= -513;
}
function getInnerChild(vnode) {
  return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
}
function injectHook(type2, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type2] || (target[type2] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      pauseTracking();
      const reset = setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type2, args);
      reset();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => {
  if (!isInSSRComponentSetup || lifecycle === "sp") {
    injectHook(lifecycle, (...args) => hook(...args), target);
  }
};
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook(
  "bu"
);
const onUpdated = createHook("u");
const onBeforeUnmount = createHook(
  "bum"
);
const onUnmounted = createHook("um");
const onServerPrefetch = createHook(
  "sp"
);
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
const COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function resolveDynamicComponent(component) {
  if (isString$1(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
function resolveAsset(type2, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type2 === COMPONENTS) {
      const selfName = getComponentName(
        Component,
        false
      );
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = resolve(instance[type2] || Component[type2], name) || resolve(instance.appContext[type2], name);
    if (!res && maybeSelfReference) {
      return Component;
    }
    return res;
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
function renderList(source, renderItem, cache, index2) {
  let ret;
  const cached = cache && cache[index2];
  const sourceIsArray = isArray$1(source);
  if (sourceIsArray || isString$1(source)) {
    const sourceIsReactiveArray = sourceIsArray && isReactive(source);
    let needsWrap = false;
    let isReadonlySource = false;
    if (sourceIsReactiveArray) {
      needsWrap = !isShallow(source);
      isReadonlySource = isReadonly(source);
      source = shallowReadArray(source);
    }
    ret = new Array(source.length);
    for (let i2 = 0, l = source.length; i2 < l; i2++) {
      ret[i2] = renderItem(
        needsWrap ? isReadonlySource ? toReadonly(toReactive(source[i2])) : toReactive(source[i2]) : source[i2],
        i2,
        void 0,
        cached && cached[i2]
      );
    }
  } else if (typeof source === "number") {
    ret = new Array(source);
    for (let i2 = 0; i2 < source; i2++) {
      ret[i2] = renderItem(i2 + 1, i2, void 0, cached && cached[i2]);
    }
  } else if (isObject(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(
        source,
        (item, i2) => renderItem(item, i2, void 0, cached && cached[i2])
      );
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i2 = 0, l = keys.length; i2 < l; i2++) {
        const key = keys[i2];
        ret[i2] = renderItem(source[key], key, i2, cached && cached[i2]);
      }
    }
  } else {
    ret = [];
  }
  if (cache) {
    cache[index2] = ret;
  }
  return ret;
}
function createSlots(slots, dynamicSlots) {
  for (let i2 = 0; i2 < dynamicSlots.length; i2++) {
    const slot = dynamicSlots[i2];
    if (isArray$1(slot)) {
      for (let j2 = 0; j2 < slot.length; j2++) {
        slots[slot[j2].name] = slot[j2].fn;
      }
    } else if (slot) {
      slots[slot.name] = slot.key ? (...args) => {
        const res = slot.fn(...args);
        if (res)
          res.key = slot.key;
        return res;
      } : slot.fn;
    }
  }
  return slots;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.ce || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.ce) {
    const hasProps = Object.keys(props).length > 0;
    if (name !== "default")
      props.name = name;
    return openBlock(), createBlock(
      Fragment,
      null,
      [createVNode("slot", props, fallback && fallback())],
      hasProps ? -2 : 64
    );
  }
  let slot = slots[name];
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const slotKey = props.key || validSlotContent && validSlotContent.key;
  const rendered = createBlock(
    Fragment,
    {
      key: (slotKey && !isSymbol$1(slotKey) ? slotKey : `_${name}`) + (!validSlotContent && fallback ? "_fb" : "")
    },
    validSlotContent || (fallback ? fallback() : []),
    validSlotContent && slots._ === 1 ? 64 : -2
  );
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child))
      return true;
    if (child.type === Comment)
      return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}
const getPublicInstance = (i2) => {
  if (!i2)
    return null;
  if (isStatefulComponent(i2))
    return getComponentPublicInstance(i2);
  return getPublicInstance(i2.parent);
};
const publicPropertiesMap = /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
  $: (i2) => i2,
  $el: (i2) => i2.vnode.el,
  $data: (i2) => i2.data,
  $props: (i2) => i2.props,
  $attrs: (i2) => i2.attrs,
  $slots: (i2) => i2.slots,
  $refs: (i2) => i2.refs,
  $parent: (i2) => getPublicInstance(i2.parent),
  $root: (i2) => getPublicInstance(i2.root),
  $host: (i2) => i2.ce,
  $emit: (i2) => i2.emit,
  $options: (i2) => resolveMergedOptions(i2),
  $forceUpdate: (i2) => i2.f || (i2.f = () => {
    queueJob(i2.update);
  }),
  $nextTick: (i2) => i2.n || (i2.n = nextTick.bind(i2.proxy)),
  $watch: (i2) => instanceWatch.bind(i2)
});
const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    if (key === "__v_skip") {
      return true;
    }
    const { ctx, setupState, data, props, accessCache, type: type2, appContext } = instance;
    if (key[0] !== "$") {
      const n2 = accessCache[key];
      if (n2 !== void 0) {
        switch (n2) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if (hasOwn(props, key)) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance.attrs, "get", "");
      }
      return publicGetter(instance);
    } else if ((cssModule = type2.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else
      ;
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      return false;
    } else {
      {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({
    _: { data, setupState, accessCache, ctx, appContext, props, type: type2 }
  }, key) {
    let cssModules;
    return !!(accessCache[key] || data !== EMPTY_OBJ && key[0] !== "$" && hasOwn(data, key) || hasSetupBinding(setupState, key) || hasOwn(props, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key) || (cssModules = type2.__cssModules) && cssModules[key]);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
function normalizePropsOrEmits(props) {
  return isArray$1(props) ? props.reduce(
    (normalized, p2) => (normalized[p2] = null, normalized),
    {}
  ) : props;
}
function mergeModels(a2, b2) {
  if (!a2 || !b2)
    return a2 || b2;
  if (isArray$1(a2) && isArray$1(b2))
    return a2.concat(b2);
  return extend({}, normalizePropsOrEmits(a2), normalizePropsOrEmits(b2));
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render: render2,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    expose,
    inheritAttrs,
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = null;
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        {
          ctx[key] = methodHandler.bind(publicThis);
        }
      }
    }
  }
  if (dataOptions) {
    const data = dataOptions.call(publicThis, publicThis);
    if (!isObject(data))
      ;
    else {
      instance.data = reactive(data);
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP;
      const c = computed({
        get: get2,
        set
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v2) => c.value = v2
      });
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook$1(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray$1(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray$1(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val,
          enumerable: true
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render2 && instance.render === NOOP) {
    instance.render = render2;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
  if (serverPrefetch) {
    markAsyncBoundary(instance);
  }
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
  if (isArray$1(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject(opt)) {
      if ("default" in opt) {
        injected = inject(
          opt.from || key,
          opt.default,
          true
        );
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v2) => injected.value = v2
      });
    } else {
      ctx[key] = injected;
    }
  }
}
function callHook$1(hook, instance, type2) {
  callWithAsyncErrorHandling(
    isArray$1(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
    instance,
    type2
  );
}
function createWatcher(raw, ctx, publicThis, key) {
  let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString$1(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      {
        watch(getter, handler);
      }
    }
  } else if (isFunction(raw)) {
    {
      watch(getter, raw.bind(publicThis));
    }
  } else if (isObject(raw)) {
    if (isArray$1(raw)) {
      raw.forEach((r2) => createWatcher(r2, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw);
      }
    }
  } else
    ;
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: { optionMergeStrategies }
  } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(
        (m) => mergeOptions$1(resolved, m, optionMergeStrategies, true)
      );
    }
    mergeOptions$1(resolved, base, optionMergeStrategies);
  }
  if (isObject(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions$1(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions$1(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(
      (m) => mergeOptions$1(to, m, strats, true)
    );
  }
  for (const key in from) {
    if (asMixin && key === "expose")
      ;
    else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  watch: mergeWatchOptions,
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(
      isFunction(to) ? to.call(this, this) : to,
      isFunction(from) ? from.call(this, this) : from
    );
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray$1(raw)) {
    const res = {};
    for (let i2 = 0; i2 < raw.length; i2++) {
      res[raw[i2]] = raw[i2];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if (isArray$1(to) && isArray$1(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return extend(
      /* @__PURE__ */ Object.create(null),
      normalizePropsOrEmits(to),
      normalizePropsOrEmits(from != null ? from : {})
    );
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render2, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = extend({}, rootComponent);
    }
    if (rootProps != null && !isObject(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new WeakSet();
    const pluginCleanupFns = [];
    let isMounted = false;
    const app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v2) {
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin))
          ;
        else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else
          ;
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          }
        }
        return app;
      },
      component(name, component) {
        if (!component) {
          return context.components[name];
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        if (!directive) {
          return context.directives[name];
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, namespace) {
        if (!isMounted) {
          const vnode = app._ceVNode || createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (namespace === true) {
            namespace = "svg";
          } else if (namespace === false) {
            namespace = void 0;
          }
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render2(vnode, rootContainer, namespace);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          return getComponentPublicInstance(vnode.component);
        }
      },
      onUnmount(cleanupFn) {
        pluginCleanupFns.push(cleanupFn);
      },
      unmount() {
        if (isMounted) {
          callWithAsyncErrorHandling(
            pluginCleanupFns,
            app._instance,
            16
          );
          render2(null, app._container);
          delete app._container.__vue_app__;
        }
      },
      provide(key, value) {
        context.provides[key] = value;
        return app;
      },
      runWithContext(fn) {
        const lastApp = currentApp;
        currentApp = app;
        try {
          return fn();
        } finally {
          currentApp = lastApp;
        }
      }
    };
    return app;
  };
}
let currentApp = null;
function provide(key, value) {
  if (currentInstance) {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = getCurrentInstance();
  if (instance || currentApp) {
    let provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null || instance.ce ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else
      ;
  }
}
function hasInjectionContext() {
  return !!(getCurrentInstance() || currentApp);
}
const ssrContextKey = Symbol.for("v-scx");
const useSSRContext = () => {
  {
    const ctx = inject(ssrContextKey);
    return ctx;
  }
};
function watchEffect(effect, options) {
  return doWatch(effect, null, options);
}
function watchSyncEffect(effect, options) {
  return doWatch(
    effect,
    null,
    { flush: "sync" }
  );
}
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, options = EMPTY_OBJ) {
  const { immediate, deep, flush, once } = options;
  const baseWatchOptions = extend({}, options);
  const runsImmediately = cb && immediate || !cb && flush !== "post";
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else if (!runsImmediately) {
      const watchStopHandle = () => {
      };
      watchStopHandle.stop = NOOP;
      watchStopHandle.resume = NOOP;
      watchStopHandle.pause = NOOP;
      return watchStopHandle;
    }
  }
  const instance = currentInstance;
  baseWatchOptions.call = (fn, type2, args) => callWithAsyncErrorHandling(fn, instance, type2, args);
  let isPre = false;
  if (flush === "post") {
    baseWatchOptions.scheduler = (job) => {
      queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else if (flush !== "sync") {
    isPre = true;
    baseWatchOptions.scheduler = (job, isFirstRun) => {
      if (isFirstRun) {
        job();
      } else {
        queueJob(job);
      }
    };
  }
  baseWatchOptions.augmentJob = (job) => {
    if (cb) {
      job.flags |= 4;
    }
    if (isPre) {
      job.flags |= 2;
      if (instance) {
        job.id = instance.uid;
        job.i = instance;
      }
    }
  };
  const watchHandle = watch$1(source, cb, baseWatchOptions);
  if (isInSSRComponentSetup) {
    if (ssrCleanup) {
      ssrCleanup.push(watchHandle);
    } else if (runsImmediately) {
      watchHandle();
    }
  }
  return watchHandle;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString$1(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const reset = setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  reset();
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i2 = 0; i2 < segments.length && cur; i2++) {
      cur = cur[segments[i2]];
    }
    return cur;
  };
}
function useModel(props, name, options = EMPTY_OBJ) {
  const i2 = getCurrentInstance();
  const camelizedName = camelize(name);
  const hyphenatedName = hyphenate(name);
  const modifiers = getModelModifiers(props, camelizedName);
  const res = customRef((track2, trigger2) => {
    let localValue;
    let prevSetValue = EMPTY_OBJ;
    let prevEmittedValue;
    watchSyncEffect(() => {
      const propValue = props[camelizedName];
      if (hasChanged(localValue, propValue)) {
        localValue = propValue;
        trigger2();
      }
    });
    return {
      get() {
        track2();
        return options.get ? options.get(localValue) : localValue;
      },
      set(value) {
        const emittedValue = options.set ? options.set(value) : value;
        if (!hasChanged(emittedValue, localValue) && !(prevSetValue !== EMPTY_OBJ && hasChanged(value, prevSetValue))) {
          return;
        }
        const rawProps = i2.vnode.props;
        if (!(rawProps && (name in rawProps || camelizedName in rawProps || hyphenatedName in rawProps) && (`onUpdate:${name}` in rawProps || `onUpdate:${camelizedName}` in rawProps || `onUpdate:${hyphenatedName}` in rawProps))) {
          localValue = value;
          trigger2();
        }
        i2.emit(`update:${name}`, emittedValue);
        if (hasChanged(value, emittedValue) && hasChanged(value, prevSetValue) && !hasChanged(emittedValue, prevEmittedValue)) {
          trigger2();
        }
        prevSetValue = value;
        prevEmittedValue = emittedValue;
      }
    };
  });
  res[Symbol.iterator] = () => {
    let i22 = 0;
    return {
      next() {
        if (i22 < 2) {
          return { value: i22++ ? modifiers || EMPTY_OBJ : res, done: false };
        } else {
          return { done: true };
        }
      }
    };
  };
  return res;
}
const getModelModifiers = (props, modelName) => {
  return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize(modelName)}Modifiers`] || props[`${hyphenate(modelName)}Modifiers`];
};
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted)
    return;
  const props = instance.vnode.props || EMPTY_OBJ;
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modifiers = isModelListener2 && getModelModifiers(props, event.slice(7));
  if (modifiers) {
    if (modifiers.trim) {
      args = rawArgs.map((a2) => isString$1(a2) ? a2.trim() : a2);
    }
    if (modifiers.number) {
      args = rawArgs.map(looseToNumber);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(
      handler,
      instance,
      6,
      args
    );
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(
      onceHandler,
      instance,
      6,
      args
    );
  }
}
const mixinEmitsCache = /* @__PURE__ */ new WeakMap();
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = asMixin ? mixinEmitsCache : appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray$1(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
function markAttrsAccessed() {
}
function renderComponentRoot(instance) {
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit: emit2,
    render: render2,
    renderCache,
    props,
    data,
    setupState,
    ctx,
    inheritAttrs
  } = instance;
  const prev = setCurrentRenderingInstance(instance);
  let result;
  let fallthroughAttrs;
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      const thisProxy = false ? new Proxy(proxyToUse, {
        get(target, key, receiver) {
          warn$1(
            `Property '${String(
              key
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          );
          return Reflect.get(target, key, receiver);
        }
      }) : proxyToUse;
      result = normalizeVNode(
        render2.call(
          thisProxy,
          proxyToUse,
          renderCache,
          false ? shallowReadonly(props) : props,
          setupState,
          data,
          ctx
        )
      );
      fallthroughAttrs = attrs;
    } else {
      const render22 = Component;
      if (false)
        ;
      result = normalizeVNode(
        render22.length > 1 ? render22(
          false ? shallowReadonly(props) : props,
          false ? {
            get attrs() {
              markAttrsAccessed();
              return shallowReadonly(attrs);
            },
            slots,
            emit: emit2
          } : { attrs, slots, emit: emit2 }
        ) : render22(
          false ? shallowReadonly(props) : props,
          null
        )
      );
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err2) {
    blockStack.length = 0;
    handleError(err2, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(
            fallthroughAttrs,
            propsOptions
          );
        }
        root = cloneVNode(root, fallthroughAttrs, false, true);
      }
    }
  }
  if (vnode.dirs) {
    root = cloneVNode(root, null, false, true);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    setTransitionHooks(root, vnode.transition);
  }
  {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i2 = 0; i2 < dynamicProps.length; i2++) {
        const key = dynamicProps[i2];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i2 = 0; i2 < nextKeys.length; i2++) {
    const key = nextKeys[i2];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent) {
    const root = parent.subTree;
    if (root.suspense && root.suspense.activeBranch === vnode) {
      root.el = vnode.el;
    }
    if (root === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    } else {
      break;
    }
  }
}
const internalObjectProto = {};
const createInternalObject = () => Object.create(internalObjectProto);
const isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = createInternalObject();
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs,
    vnode: { patchFlag }
  } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if ((optimized || patchFlag > 0) && !(patchFlag & 16)) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
        let key = propsToUpdate[i2];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(
              options,
              rawCurrentProps,
              camelizedKey,
              value,
              instance,
              false
            );
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(
              options,
              rawCurrentProps,
              key,
              void 0,
              instance,
              true
            );
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance.attrs, "set", "");
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i2 = 0; i2 < needCastKeys.length; i2++) {
      const key = needCastKeys[i2];
      props[key] = resolvePropValue(
        options,
        rawCurrentProps,
        key,
        castValues[key],
        instance,
        !hasOwn(castValues, key)
      );
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          const reset = setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(
            null,
            props
          );
          reset();
        }
      } else {
        value = defaultValue;
      }
      if (instance.ce) {
        instance.ce._setProp(key, value);
      }
    }
    if (opt[0]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
const mixinPropsCache = /* @__PURE__ */ new WeakMap();
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = asMixin ? mixinPropsCache : appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray$1(raw)) {
    for (let i2 = 0; i2 < raw.length; i2++) {
      const normalizedKey = camelize(raw[i2]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray$1(opt) || isFunction(opt) ? { type: opt } : extend({}, opt);
        const propType = prop.type;
        let shouldCast = false;
        let shouldCastTrue = true;
        if (isArray$1(propType)) {
          for (let index2 = 0; index2 < propType.length; ++index2) {
            const type2 = propType[index2];
            const typeName = isFunction(type2) && type2.name;
            if (typeName === "Boolean") {
              shouldCast = true;
              break;
            } else if (typeName === "String") {
              shouldCastTrue = false;
            }
          }
        } else {
          shouldCast = isFunction(propType) && propType.name === "Boolean";
        }
        prop[0] = shouldCast;
        prop[1] = shouldCastTrue;
        if (shouldCast || hasOwn(prop, "default")) {
          needCastKeys.push(normalizedKey);
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$" && !isReservedProp(key)) {
    return true;
  }
  return false;
}
const isInternalKey = (key) => key === "_" || key === "_ctx" || key === "$stable";
const normalizeSlotValue = (value) => isArray$1(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot$1 = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (false)
      ;
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key))
      continue;
    const value = rawSlots[key];
    if (isFunction(value)) {
      slots[key] = normalizeSlot$1(key, value, ctx);
    } else if (value != null) {
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const assignSlots = (slots, children, optimized) => {
  for (const key in children) {
    if (optimized || !isInternalKey(key)) {
      slots[key] = children[key];
    }
  }
};
const initSlots = (instance, children, optimized) => {
  const slots = instance.slots = createInternalObject();
  if (instance.vnode.shapeFlag & 32) {
    const type2 = children._;
    if (type2) {
      assignSlots(slots, children, optimized);
      if (optimized) {
        def(slots, "_", type2, true);
      }
    } else {
      normalizeObjectSlots(children, slots);
    }
  } else if (children) {
    normalizeVNodeSlots(instance, children);
  }
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type2 = children._;
    if (type2) {
      if (optimized && type2 === 1) {
        needDeletionCheck = false;
      } else {
        assignSlots(slots, children, optimized);
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
        delete slots[key];
      }
    }
  }
};
function initFeatureFlags() {
  if (typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ !== "boolean") {
    getGlobalThis$1().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
  }
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function baseCreateRenderer(options, createHydrationFns) {
  {
    initFeatureFlags();
  }
  const target = getGlobalThis$1();
  target.__VUE__ = true;
  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = NOOP,
    insertStaticContent: hostInsertStaticContent
  } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type: type2, ref: ref2, shapeFlag } = n2;
    switch (type2) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, namespace);
        }
        break;
      case Fragment:
        processFragment(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        break;
      default:
        if (shapeFlag & 1) {
          processElement(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 6) {
          processComponent(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 64) {
          type2.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (shapeFlag & 128) {
          type2.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else
          ;
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    } else if (ref2 == null && n1 && n1.ref != null) {
      setRef(n1.ref, null, parentSuspense, n1, true);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateText(n2.children),
        container,
        anchor
      );
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateComment(n2.children || ""),
        container,
        anchor
      );
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, namespace) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(
      n2.children,
      container,
      anchor,
      namespace,
      n2.el,
      n2.anchor
    );
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    if (n2.type === "svg") {
      namespace = "svg";
    } else if (n2.type === "math") {
      namespace = "mathml";
    }
    if (n1 == null) {
      mountElement(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      const customElement = !!(n1.el && n1.el._isVueCE) ? n1.el : null;
      try {
        if (customElement) {
          customElement._beginPatch();
        }
        patchElement(
          n1,
          n2,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } finally {
        if (customElement) {
          customElement._endPatch();
        }
      }
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { props, shapeFlag, transition, dirs } = vnode;
    el = vnode.el = hostCreateElement(
      vnode.type,
      namespace,
      props && props.is,
      props
    );
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(
        vnode.children,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(vnode, namespace),
        slotScopeIds,
        optimized
      );
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props) {
      for (const key in props) {
        if (key !== "value" && !isReservedProp(key)) {
          hostPatchProp(el, key, null, props[key], namespace, parentComponent);
        }
      }
      if ("value" in props) {
        hostPatchProp(el, "value", null, props.value, namespace);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = needTransition(parentSuspense, transition);
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i2 = 0; i2 < slotScopeIds.length; i2++) {
        hostSetScopeId(el, slotScopeIds[i2]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
        const parentVNode = parentComponent.vnode;
        setScopeId(
          el,
          parentVNode,
          parentVNode.scopeId,
          parentVNode.slotScopeIds,
          parentComponent.parent
        );
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
    for (let i2 = start; i2 < children.length; i2++) {
      const child = children[i2] = optimized ? cloneIfMounted(children[i2]) : normalizeVNode(children[i2]);
      patch(
        null,
        child,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) {
      hostSetElementText(el, "");
    }
    if (dynamicChildren) {
      patchBlockChildren(
        n1.dynamicChildren,
        dynamicChildren,
        el,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds
      );
    } else if (!optimized) {
      patchChildren(
        n1,
        n2,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds,
        false
      );
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, oldProps, newProps, parentComponent, namespace);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, namespace);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
            const key = propsToUpdate[i2];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, namespace, parentComponent);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, oldProps, newProps, parentComponent, namespace);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
    for (let i2 = 0; i2 < newChildren.length; i2++) {
      const oldVNode = oldChildren[i2];
      const newVNode = newChildren[i2];
      const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64 | 128)) ? hostParentNode(oldVNode.el) : fallbackContainer;
      patch(
        oldVNode,
        newVNode,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        true
      );
    }
  };
  const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(
              el,
              key,
              oldProps[key],
              null,
              namespace,
              parentComponent
            );
          }
        }
      }
      for (const key in newProps) {
        if (isReservedProp(key))
          continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, namespace, parentComponent);
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(
        n2.children || [],
        container,
        fragmentEndAnchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          container,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds
        );
        if (n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(
            n1,
            n2,
            true
          );
        }
      } else {
        patchChildren(
          n1,
          n2,
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(
          n2,
          container,
          anchor,
          namespace,
          optimized
        );
      } else {
        mountComponent(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          optimized
        );
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
    const instance = initialVNode.component = createComponentInstance(
      initialVNode,
      parentComponent,
      parentSuspense
    );
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      setupComponent(instance, false, optimized);
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
        initialVNode.placeholder = placeholder.el;
      }
    } else {
      setupRenderEffect(
        instance,
        initialVNode,
        container,
        anchor,
        parentSuspense,
        namespace,
        optimized
      );
    }
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        updateComponentPreRender(instance, n2, optimized);
        return;
      } else {
        instance.next = n2;
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent, root, type: type2 } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            instance.subTree = renderComponentRoot(instance);
            hydrateNode(
              el,
              instance.subTree,
              instance,
              parentSuspense,
              null
            );
          };
          if (isAsyncWrapperVNode && type2.__asyncHydrate) {
            type2.__asyncHydrate(
              el,
              instance,
              hydrateSubTree
            );
          } else {
            hydrateSubTree();
          }
        } else {
          if (root.ce && root.ce._def.shadowRoot !== false) {
            root.ce._injectChildStyle(type2);
          }
          const subTree = instance.subTree = renderComponentRoot(instance);
          patch(
            null,
            subTree,
            container,
            anchor,
            instance,
            parentSuspense,
            namespace
          );
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
            parentSuspense
          );
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u: u2, parent, vnode } = instance;
        {
          const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
          if (nonHydratedAsyncRoot) {
            if (next) {
              next.el = vnode.el;
              updateComponentPreRender(instance, next, optimized);
            }
            nonHydratedAsyncRoot.asyncDep.then(() => {
              if (!instance.isUnmounted) {
                componentUpdateFn();
              }
            });
            return;
          }
        }
        let originNext = next;
        let vnodeHook;
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        const nextTree = renderComponentRoot(instance);
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        patch(
          prevTree,
          nextTree,
          hostParentNode(prevTree.el),
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          namespace
        );
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u2) {
          queuePostRenderEffect(u2, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, next, vnode),
            parentSuspense
          );
        }
      }
    };
    instance.scope.on();
    const effect = instance.effect = new ReactiveEffect(componentUpdateFn);
    instance.scope.off();
    const update = instance.update = effect.run.bind(effect);
    const job = instance.job = effect.runIfDirty.bind(effect);
    job.i = instance;
    job.id = instance.uid;
    effect.scheduler = () => queueJob(job);
    toggleRecurse(instance, true);
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(instance);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i2;
    for (i2 = 0; i2 < commonLength; i2++) {
      const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
      patch(
        c1[i2],
        nextChild,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
    if (oldLength > newLength) {
      unmountChildren(
        c1,
        parentComponent,
        parentSuspense,
        true,
        false,
        commonLength
      );
    } else {
      mountChildren(
        c2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized,
        commonLength
      );
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let i2 = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i2 <= e1 && i2 <= e2) {
      const n1 = c1[i2];
      const n2 = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      i2++;
    }
    while (i2 <= e1 && i2 <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i2 > e1) {
      if (i2 <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i2 <= e2) {
          patch(
            null,
            c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]),
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          i2++;
        }
      }
    } else if (i2 > e2) {
      while (i2 <= e1) {
        unmount(c1[i2], parentComponent, parentSuspense, true);
        i2++;
      }
    } else {
      const s1 = i2;
      const s2 = i2;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i2 = s2; i2 <= e2; i2++) {
        const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
        if (nextChild.key != null) {
          keyToNewIndexMap.set(nextChild.key, i2);
        }
      }
      let j2;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i2 = 0; i2 < toBePatched; i2++)
        newIndexToOldIndexMap[i2] = 0;
      for (i2 = s1; i2 <= e1; i2++) {
        const prevChild = c1[i2];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j2 = s2; j2 <= e2; j2++) {
            if (newIndexToOldIndexMap[j2 - s2] === 0 && isSameVNodeType(prevChild, c2[j2])) {
              newIndex = j2;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i2 + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(
            prevChild,
            c2[newIndex],
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j2 = increasingNewIndexSequence.length - 1;
      for (i2 = toBePatched - 1; i2 >= 0; i2--) {
        const nextIndex = s2 + i2;
        const nextChild = c2[nextIndex];
        const anchorVNode = c2[nextIndex + 1];
        const anchor = nextIndex + 1 < l2 ? anchorVNode.el || anchorVNode.placeholder : parentAnchor;
        if (newIndexToOldIndexMap[i2] === 0) {
          patch(
            null,
            nextChild,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (moved) {
          if (j2 < 0 || i2 !== increasingNewIndexSequence[j2]) {
            move(nextChild, container, anchor, 2);
          } else {
            j2--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type: type2, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type2.move(vnode, container, anchor, internals);
      return;
    }
    if (type2 === Fragment) {
      hostInsert(el, container, anchor);
      for (let i2 = 0; i2 < children.length; i2++) {
        move(children[i2], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type2 === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition2) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove22 = () => {
          if (vnode.ctx.isUnmounted) {
            hostRemove(el);
          } else {
            hostInsert(el, container, anchor);
          }
        };
        const performLeave = () => {
          if (el._isLeaving) {
            el[leaveCbKey](
              true
            );
          }
          leave(el, () => {
            remove22();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove22, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const {
      type: type2,
      props,
      ref: ref2,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs,
      cacheIndex
    } = vnode;
    if (patchFlag === -2) {
      optimized = false;
    }
    if (ref2 != null) {
      pauseTracking();
      setRef(ref2, null, parentSuspense, vnode, true);
      resetTracking();
    }
    if (cacheIndex != null) {
      parentComponent.renderCache[cacheIndex] = void 0;
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(
          vnode,
          parentComponent,
          parentSuspense,
          internals,
          doRemove
        );
      } else if (dynamicChildren && !dynamicChildren.hasOnce && (type2 !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(
          dynamicChildren,
          parentComponent,
          parentSuspense,
          false,
          true
        );
      } else if (type2 === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type: type2, el, anchor, transition } = vnode;
    if (type2 === Fragment) {
      {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type2 === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    const { bum, scope, job, subTree, um, m, a: a2 } = instance;
    invalidateMount(m);
    invalidateMount(a2);
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (job) {
      job.flags |= 8;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i2 = start; i2 < children.length; i2++) {
      unmount(children[i2], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    const el = hostNextSibling(vnode.anchor || vnode.el);
    const teleportEnd = el && el[TeleportEndKey];
    return teleportEnd ? hostNextSibling(teleportEnd) : el;
  };
  let isFlushing = false;
  const render2 = (vnode, container, namespace) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(
        container._vnode || null,
        vnode,
        container,
        null,
        null,
        null,
        namespace
      );
    }
    container._vnode = vnode;
    if (!isFlushing) {
      isFlushing = true;
      flushPreFlushCbs();
      flushPostFlushCbs();
      isFlushing = false;
    }
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(
      internals
    );
  }
  return {
    render: render2,
    hydrate,
    createApp: createAppAPI(render2, hydrate)
  };
}
function resolveChildrenNamespace({ type: type2, props }, currentNamespace) {
  return currentNamespace === "svg" && type2 === "foreignObject" || currentNamespace === "mathml" && type2 === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect, job }, allowed) {
  if (allowed) {
    effect.flags |= 32;
    job.flags |= 4;
  } else {
    effect.flags &= -33;
    job.flags &= -5;
  }
}
function needTransition(parentSuspense, transition) {
  return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray$1(ch1) && isArray$1(ch2)) {
    for (let i2 = 0; i2 < ch1.length; i2++) {
      const c1 = ch1[i2];
      let c2 = ch2[i2];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i2] = cloneIfMounted(ch2[i2]);
          c2.el = c1.el;
        }
        if (!shallow && c2.patchFlag !== -2)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text && c2.patchFlag !== -1) {
        c2.el = c1.el;
      }
      if (c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i2, j2, u2, v2, c;
  const len = arr.length;
  for (i2 = 0; i2 < len; i2++) {
    const arrI = arr[i2];
    if (arrI !== 0) {
      j2 = result[result.length - 1];
      if (arr[j2] < arrI) {
        p2[i2] = j2;
        result.push(i2);
        continue;
      }
      u2 = 0;
      v2 = result.length - 1;
      while (u2 < v2) {
        c = u2 + v2 >> 1;
        if (arr[result[c]] < arrI) {
          u2 = c + 1;
        } else {
          v2 = c;
        }
      }
      if (arrI < arr[result[u2]]) {
        if (u2 > 0) {
          p2[i2] = result[u2 - 1];
        }
        result[u2] = i2;
      }
    }
  }
  u2 = result.length;
  v2 = result[u2 - 1];
  while (u2-- > 0) {
    result[u2] = v2;
    v2 = p2[v2];
  }
  return result;
}
function locateNonHydratedAsyncRoot(instance) {
  const subComponent = instance.subTree.component;
  if (subComponent) {
    if (subComponent.asyncDep && !subComponent.asyncResolved) {
      return subComponent;
    } else {
      return locateNonHydratedAsyncRoot(subComponent);
    }
  }
}
function invalidateMount(hooks) {
  if (hooks) {
    for (let i2 = 0; i2 < hooks.length; i2++)
      hooks[i2].flags |= 8;
  }
}
const isSuspense = (type2) => type2.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray$1(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value, inVOnce = false) {
  isBlockTreeEnabled += value;
  if (value < 0 && currentBlock && inVOnce) {
    currentBlock.hasOnce = true;
  }
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type2, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(
    createBaseVNode(
      type2,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
    )
  );
}
function createBlock(type2, props, children, patchFlag, dynamicProps) {
  return setupBlock(
    createVNode(
      type2,
      props,
      children,
      patchFlag,
      dynamicProps,
      true
    )
  );
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({
  ref: ref2,
  ref_key,
  ref_for
}) => {
  if (typeof ref2 === "number") {
    ref2 = "" + ref2;
  }
  return ref2 != null ? isString$1(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
};
function createBaseVNode(type2, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type2 === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type: type2,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type2.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString$1(children) ? 8 : 16;
  }
  if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = _createVNode;
function _createVNode(type2, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type2 || type2 === NULL_DYNAMIC_COMPONENT) {
    type2 = Comment;
  }
  if (isVNode(type2)) {
    const cloned = cloneVNode(
      type2,
      props,
      true
    );
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type2)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag = -2;
    return cloned;
  }
  if (isClassComponent(type2)) {
    type2 = type2.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style: style2 } = props;
    if (klass && !isString$1(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject(style2)) {
      if (isProxy(style2) && !isArray$1(style2)) {
        style2 = extend({}, style2);
      }
      props.style = normalizeStyle(style2);
    }
  }
  const shapeFlag = isString$1(type2) ? 1 : isSuspense(type2) ? 128 : isTeleport(type2) ? 64 : isObject(type2) ? 4 : isFunction(type2) ? 2 : 0;
  return createBaseVNode(
    type2,
    props,
    children,
    patchFlag,
    dynamicProps,
    shapeFlag,
    isBlockNode,
    true
  );
}
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
  const { props, ref: ref2, patchFlag, children, transition } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? mergeRef && ref2 ? isArray$1(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children,
    target: vnode.target,
    targetStart: vnode.targetStart,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition,
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    placeholder: vnode.placeholder,
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  if (transition && cloneTransition) {
    setTransitionHooks(
      cloned,
      transition.clone(cloned)
    );
  }
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray$1(child)) {
    return createVNode(
      Fragment,
      null,
      child.slice()
    );
  } else if (isVNode(child)) {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type2 = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray$1(children)) {
    type2 = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type2 = 32;
      const slotFlag = children._;
      if (!slotFlag && !isInternalObject(children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type2 = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type2 = 16;
      children = [createTextVNode(children)];
    } else {
      type2 = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type2;
}
function mergeProps(...args) {
  const ret = {};
  for (let i2 = 0; i2 < args.length; i2++) {
    const toMerge = args[i2];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray$1(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type2 = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type: type2,
    parent,
    appContext,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    job: null,
    scope: new EffectScope(
      true
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    ids: parent ? parent.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: normalizePropsOptions(type2, appContext),
    emitsOptions: normalizeEmitsOptions(type2, appContext),
    emit: null,
    emitted: null,
    propsDefaults: EMPTY_OBJ,
    inheritAttrs: type2.inheritAttrs,
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = { _: instance };
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let setInSSRSetupState;
{
  const g = getGlobalThis$1();
  const registerGlobalSetter = (key, setter) => {
    let setters;
    if (!(setters = g[key]))
      setters = g[key] = [];
    setters.push(setter);
    return (v2) => {
      if (setters.length > 1)
        setters.forEach((set) => set(v2));
      else
        setters[0](v2);
    };
  };
  internalSetCurrentInstance = registerGlobalSetter(
    `__VUE_INSTANCE_SETTERS__`,
    (v2) => currentInstance = v2
  );
  setInSSRSetupState = registerGlobalSetter(
    `__VUE_SSR_SETTERS__`,
    (v2) => isInSSRComponentSetup = v2
  );
}
const setCurrentInstance = (instance) => {
  const prev = currentInstance;
  internalSetCurrentInstance(instance);
  instance.scope.on();
  return () => {
    instance.scope.off();
    internalSetCurrentInstance(prev);
  };
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false, optimized = false) {
  isSSR && setInSSRSetupState(isSSR);
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children, optimized || isSSR);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isSSR && setInSSRSetupState(false);
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
  const { setup } = Component;
  if (setup) {
    pauseTracking();
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    const reset = setCurrentInstance(instance);
    const setupResult = callWithErrorHandling(
      setup,
      instance,
      0,
      [
        instance.props,
        setupContext
      ]
    );
    const isAsyncSetup = isPromise(setupResult);
    resetTracking();
    reset();
    if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) {
      markAsyncBoundary(instance);
    }
    if (isAsyncSetup) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject(setupResult)) {
    instance.setupState = proxyRefs(setupResult);
  } else
    ;
  finishComponentSetup(instance, isSSR);
}
let compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template || resolveMergedOptions(instance).template;
      if (template) {
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend(
          extend(
            {
              isCustomElement,
              delimiters
            },
            compilerOptions
          ),
          componentCompilerOptions
        );
        Component.render = compile(template, finalCompilerOptions);
      }
    }
    instance.render = Component.render || NOOP;
  }
  {
    const reset = setCurrentInstance(instance);
    pauseTracking();
    try {
      applyOptions(instance);
    } finally {
      resetTracking();
      reset();
    }
  }
}
const attrsProxyHandlers = {
  get(target, key) {
    track(target, "get", "");
    return target[key];
  }
};
function createSetupContext(instance) {
  const expose = (exposed) => {
    instance.exposed = exposed || {};
  };
  {
    return {
      attrs: new Proxy(instance.attrs, attrsProxyHandlers),
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getComponentPublicInstance(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  } else {
    return instance.proxy;
  }
}
const classifyRE = /(?:^|[-_])\w/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(instance.components) || instance.parent && inferFromRegistry(
      instance.parent.type.components
    ) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  const c = computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
  return c;
};
function h(type2, propsOrChildren, children) {
  try {
    setBlockTracking(-1);
    const l = arguments.length;
    if (l === 2) {
      if (isObject(propsOrChildren) && !isArray$1(propsOrChildren)) {
        if (isVNode(propsOrChildren)) {
          return createVNode(type2, null, [propsOrChildren]);
        }
        return createVNode(type2, propsOrChildren);
      } else {
        return createVNode(type2, null, propsOrChildren);
      }
    } else {
      if (l > 3) {
        children = Array.prototype.slice.call(arguments, 2);
      } else if (l === 3 && isVNode(children)) {
        children = [children];
      }
      return createVNode(type2, propsOrChildren, children);
    }
  } finally {
    setBlockTracking(1);
  }
}
const version = "3.5.25";
NOOP;
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let policy = void 0;
const tt = typeof window !== "undefined" && window.trustedTypes;
if (tt) {
  try {
    policy = /* @__PURE__ */ tt.createPolicy("vue", {
      createHTML: (val) => val
    });
  } catch (e) {
  }
}
const unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
const svgNS = "http://www.w3.org/2000/svg";
const mathmlNS = "http://www.w3.org/1998/Math/MathML";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, namespace, is, props) => {
    const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, { is }) : doc.createElement(tag);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  insertStaticContent(content, parent, anchor, namespace, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling))
          break;
      }
    } else {
      templateContainer.innerHTML = unsafeToTrustedHTML(
        namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content
      );
      const template = templateContainer.content;
      if (namespace === "svg" || namespace === "mathml") {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      before ? before.nextSibling : parent.firstChild,
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
const TRANSITION = "transition";
const ANIMATION = "animation";
const vtcKey = Symbol("_vtc");
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
const TransitionPropsValidators = /* @__PURE__ */ extend(
  {},
  BaseTransitionPropsValidators,
  DOMTransitionPropsValidators
);
const decorate$1 = (t) => {
  t.displayName = "Transition";
  t.props = TransitionPropsValidators;
  return t;
};
const Transition = /* @__PURE__ */ decorate$1(
  (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots)
);
const callHook = (hook, args = []) => {
  if (isArray$1(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? isArray$1(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const {
    name = "v",
    type: type2,
    duration,
    enterFromClass = `${name}-enter-from`,
    enterActiveClass = `${name}-enter-active`,
    enterToClass = `${name}-enter-to`,
    appearFromClass = enterFromClass,
    appearActiveClass = enterActiveClass,
    appearToClass = enterToClass,
    leaveFromClass = `${name}-leave-from`,
    leaveActiveClass = `${name}-leave-active`,
    leaveToClass = `${name}-leave-to`
  } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const {
    onBeforeEnter,
    onEnter,
    onEnterCancelled,
    onLeave,
    onLeaveCancelled,
    onBeforeAppear = onBeforeEnter,
    onAppear = onEnter,
    onAppearCancelled = onEnterCancelled
  } = baseProps;
  const finishEnter = (el, isAppear, done, isCancelled) => {
    el._enterCancelled = isCancelled;
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve2]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type2, enterDuration, resolve2);
        }
      });
    };
  };
  return extend(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      el._isLeaving = true;
      const resolve2 = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      if (!el._enterCancelled) {
        forceReflow(el);
        addTransitionClass(el, leaveActiveClass);
      } else {
        addTransitionClass(el, leaveActiveClass);
        forceReflow(el);
      }
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type2, leaveDuration, resolve2);
        }
      });
      callHook(onLeave, [el, resolve2]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false, void 0, true);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true, void 0, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n2 = NumberOf(duration);
    return [n2, n2];
  }
}
function NumberOf(val) {
  const res = toNumber(val);
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
  (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const _vtc = el[vtcKey];
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el[vtcKey] = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve2();
    }
  };
  if (explicitTimeout != null) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type: type2, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type2) {
    return resolve2();
  }
  const endEvent = type2 + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e) => {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
  const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
  const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type2 = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type2 = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type2 = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type2 = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type2 ? type2 === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type2 === TRANSITION && /\b(?:transform|all)(?:,|$)/.test(
    getStyleProperties(`${TRANSITION}Property`).toString()
  );
  return {
    type: type2,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d2, i2) => toMs(d2) + toMs(delays[i2])));
}
function toMs(s2) {
  if (s2 === "auto")
    return 0;
  return Number(s2.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow(el) {
  const targetDocument = el ? el.ownerDocument : document;
  return targetDocument.body.offsetHeight;
}
function patchClass(el, value, isSVG) {
  const transitionClasses = el[vtcKey];
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
const vShowOriginalDisplay = Symbol("_vod");
const vShowHidden = Symbol("_vsh");
const CSS_VAR_TEXT = Symbol("");
const displayRE = /(?:^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
  const style2 = el.style;
  const isCssString = isString$1(next);
  let hasControlledDisplay = false;
  if (next && !isCssString) {
    if (prev) {
      if (!isString$1(prev)) {
        for (const key in prev) {
          if (next[key] == null) {
            setStyle(style2, key, "");
          }
        }
      } else {
        for (const prevStyle of prev.split(";")) {
          const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
          if (next[key] == null) {
            setStyle(style2, key, "");
          }
        }
      }
    }
    for (const key in next) {
      if (key === "display") {
        hasControlledDisplay = true;
      }
      setStyle(style2, key, next[key]);
    }
  } else {
    if (isCssString) {
      if (prev !== next) {
        const cssVarText = style2[CSS_VAR_TEXT];
        if (cssVarText) {
          next += ";" + cssVarText;
        }
        style2.cssText = next;
        hasControlledDisplay = displayRE.test(next);
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
  }
  if (vShowOriginalDisplay in el) {
    el[vShowOriginalDisplay] = hasControlledDisplay ? style2.display : "";
    if (el[vShowHidden]) {
      style2.display = "none";
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style2, name, val) {
  if (isArray$1(val)) {
    val.forEach((v2) => setStyle(style2, name, v2));
  } else {
    if (val == null)
      val = "";
    if (name.startsWith("--")) {
      style2.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style2, name);
      if (importantRE.test(val)) {
        style2.setProperty(
          hyphenate(prefixed),
          val.replace(importantRE, ""),
          "important"
        );
      } else {
        style2[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style2, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style2) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i2 = 0; i2 < prefixes.length; i2++) {
    const prefixed = prefixes[i2] + name;
    if (prefixed in style2) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance, isBoolean = isSpecialBooleanAttr(key)) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (value == null || isBoolean && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(
        key,
        isBoolean ? "" : isSymbol$1(value) ? String(value) : value
      );
    }
  }
}
function patchDOMProp(el, key, value, parentComponent, attrName) {
  if (key === "innerHTML" || key === "textContent") {
    if (value != null) {
      el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
    }
    return;
  }
  const tag = el.tagName;
  if (key === "value" && tag !== "PROGRESS" && !tag.includes("-")) {
    const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
    const newValue = value == null ? el.type === "checkbox" ? "on" : "" : String(value);
    if (oldValue !== newValue || !("_value" in el)) {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    el._value = value;
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type2 = typeof el[key];
    if (type2 === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type2 === "string") {
      value = "";
      needRemove = true;
    } else if (type2 === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
  }
  needRemove && el.removeAttribute(attrName || key);
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
const veiKey = Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el[veiKey] || (el[veiKey] = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(
        nextValue,
        instance
      );
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
  return [event, options];
}
let cachedNow = 0;
const p$2 = /* @__PURE__ */ Promise.resolve();
const getNow = () => cachedNow || (p$2.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    callWithAsyncErrorHandling(
      patchStopImmediatePropagation(e, invoker.value),
      instance,
      5,
      [e]
    );
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray$1(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map(
      (fn) => (e2) => !e2._stopped && fn && fn(e2)
    );
  } else {
    return value;
  }
}
const isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
const patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
  const isSVG = namespace === "svg";
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue);
    if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) {
      patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
    }
  } else if (el._isVueCE && (/[A-Z]/.test(key) || !isString$1(nextValue))) {
    patchDOMProp(el, camelize(key), nextValue, parentComponent, key);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && isNativeOn(key) && isFunction(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate" || key === "autocorrect") {
    return false;
  }
  if (key === "sandbox" && el.tagName === "IFRAME") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (key === "width" || key === "height") {
    const tag = el.tagName;
    if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
      return false;
    }
  }
  if (isNativeOn(key) && isString$1(value)) {
    return false;
  }
  return key in el;
}
const positionMap = /* @__PURE__ */ new WeakMap();
const newPositionMap = /* @__PURE__ */ new WeakMap();
const moveCbKey = Symbol("_moveCb");
const enterCbKey = Symbol("_enterCb");
const decorate = (t) => {
  delete t.props.mode;
  return t;
};
const TransitionGroupImpl = /* @__PURE__ */ decorate({
  name: "TransitionGroup",
  props: /* @__PURE__ */ extend({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    let prevChildren;
    let children;
    onUpdated(() => {
      if (!prevChildren.length) {
        return;
      }
      const moveClass = props.moveClass || `${props.name || "v"}-move`;
      if (!hasCSSTransform(
        prevChildren[0].el,
        instance.vnode.el,
        moveClass
      )) {
        prevChildren = [];
        return;
      }
      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      const movedChildren = prevChildren.filter(applyTranslation);
      forceReflow(instance.vnode.el);
      movedChildren.forEach((c) => {
        const el = c.el;
        const style2 = el.style;
        addTransitionClass(el, moveClass);
        style2.transform = style2.webkitTransform = style2.transitionDuration = "";
        const cb = el[moveCbKey] = (e) => {
          if (e && e.target !== el) {
            return;
          }
          if (!e || e.propertyName.endsWith("transform")) {
            el.removeEventListener("transitionend", cb);
            el[moveCbKey] = null;
            removeTransitionClass(el, moveClass);
          }
        };
        el.addEventListener("transitionend", cb);
      });
      prevChildren = [];
    });
    return () => {
      const rawProps = toRaw(props);
      const cssTransitionProps = resolveTransitionProps(rawProps);
      let tag = rawProps.tag || Fragment;
      prevChildren = [];
      if (children) {
        for (let i2 = 0; i2 < children.length; i2++) {
          const child = children[i2];
          if (child.el && child.el instanceof Element) {
            prevChildren.push(child);
            setTransitionHooks(
              child,
              resolveTransitionHooks(
                child,
                cssTransitionProps,
                state,
                instance
              )
            );
            positionMap.set(child, {
              left: child.el.offsetLeft,
              top: child.el.offsetTop
            });
          }
        }
      }
      children = slots.default ? getTransitionRawChildren(slots.default()) : [];
      for (let i2 = 0; i2 < children.length; i2++) {
        const child = children[i2];
        if (child.key != null) {
          setTransitionHooks(
            child,
            resolveTransitionHooks(child, cssTransitionProps, state, instance)
          );
        }
      }
      return createVNode(tag, null, children);
    };
  }
});
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
  const el = c.el;
  if (el[moveCbKey]) {
    el[moveCbKey]();
  }
  if (el[enterCbKey]) {
    el[enterCbKey]();
  }
}
function recordPosition(c) {
  newPositionMap.set(c, {
    left: c.el.offsetLeft,
    top: c.el.offsetTop
  });
}
function applyTranslation(c) {
  const oldPos = positionMap.get(c);
  const newPos = newPositionMap.get(c);
  const dx = oldPos.left - newPos.left;
  const dy = oldPos.top - newPos.top;
  if (dx || dy) {
    const s2 = c.el.style;
    s2.transform = s2.webkitTransform = `translate(${dx}px,${dy}px)`;
    s2.transitionDuration = "0s";
    return c;
  }
}
function hasCSSTransform(el, root, moveClass) {
  const clone = el.cloneNode();
  const _vtc = el[vtcKey];
  if (_vtc) {
    _vtc.forEach((cls) => {
      cls.split(/\s+/).forEach((c) => c && clone.classList.remove(c));
    });
  }
  moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c));
  clone.style.display = "none";
  const container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);
  const { hasTransform } = getTransitionInfo(clone);
  container.removeChild(clone);
  return hasTransform;
}
const getModelAssigner = (vnode) => {
  const fn = vnode.props["onUpdate:modelValue"] || false;
  return isArray$1(fn) ? (value) => invokeArrayFns(fn, value) : fn;
};
function onCompositionStart(e) {
  e.target.composing = true;
}
function onCompositionEnd(e) {
  const target = e.target;
  if (target.composing) {
    target.composing = false;
    target.dispatchEvent(new Event("input"));
  }
}
const assignKey = Symbol("_assign");
function castValue(value, trim, number) {
  if (trim)
    value = value.trim();
  if (number)
    value = looseToNumber(value);
  return value;
}
const vModelText = {
  created(el, { modifiers: { lazy, trim, number } }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    const castToNumber = number || vnode.props && vnode.props.type === "number";
    addEventListener(el, lazy ? "change" : "input", (e) => {
      if (e.target.composing)
        return;
      el[assignKey](castValue(el.value, trim, castToNumber));
    });
    if (trim || castToNumber) {
      addEventListener(el, "change", () => {
        el.value = castValue(el.value, trim, castToNumber);
      });
    }
    if (!lazy) {
      addEventListener(el, "compositionstart", onCompositionStart);
      addEventListener(el, "compositionend", onCompositionEnd);
      addEventListener(el, "change", onCompositionEnd);
    }
  },
  mounted(el, { value }) {
    el.value = value == null ? "" : value;
  },
  beforeUpdate(el, { value, oldValue, modifiers: { lazy, trim, number } }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (el.composing)
      return;
    const elValue = (number || el.type === "number") && !/^0\d/.test(el.value) ? looseToNumber(el.value) : el.value;
    const newValue = value == null ? "" : value;
    if (elValue === newValue) {
      return;
    }
    if (document.activeElement === el && el.type !== "range") {
      if (lazy && value === oldValue) {
        return;
      }
      if (trim && el.value.trim() === newValue) {
        return;
      }
    }
    el.value = newValue;
  }
};
const vModelCheckbox = {
  deep: true,
  created(el, _2, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      const modelValue = el._modelValue;
      const elementValue = getValue(el);
      const checked = el.checked;
      const assign2 = el[assignKey];
      if (isArray$1(modelValue)) {
        const index2 = looseIndexOf(modelValue, elementValue);
        const found = index2 !== -1;
        if (checked && !found) {
          assign2(modelValue.concat(elementValue));
        } else if (!checked && found) {
          const filtered = [...modelValue];
          filtered.splice(index2, 1);
          assign2(filtered);
        }
      } else if (isSet$1(modelValue)) {
        const cloned = new Set(modelValue);
        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned.delete(elementValue);
        }
        assign2(cloned);
      } else {
        assign2(getCheckboxValue(el, checked));
      }
    });
  },
  mounted: setChecked,
  beforeUpdate(el, binding, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};
function setChecked(el, { value, oldValue }, vnode) {
  el._modelValue = value;
  let checked;
  if (isArray$1(value)) {
    checked = looseIndexOf(value, vnode.props.value) > -1;
  } else if (isSet$1(value)) {
    checked = value.has(vnode.props.value);
  } else {
    if (value === oldValue)
      return;
    checked = looseEqual(value, getCheckboxValue(el, true));
  }
  if (el.checked !== checked) {
    el.checked = checked;
  }
}
const vModelRadio = {
  created(el, { value }, vnode) {
    el.checked = looseEqual(value, vnode.props.value);
    el[assignKey] = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      el[assignKey](getValue(el));
    });
  },
  beforeUpdate(el, { value, oldValue }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (value !== oldValue) {
      el.checked = looseEqual(value, vnode.props.value);
    }
  }
};
const vModelSelect = {
  deep: true,
  created(el, { value, modifiers: { number } }, vnode) {
    const isSetModel = isSet$1(value);
    addEventListener(el, "change", () => {
      const selectedVal = Array.prototype.filter.call(el.options, (o2) => o2.selected).map(
        (o2) => number ? looseToNumber(getValue(o2)) : getValue(o2)
      );
      el[assignKey](
        el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]
      );
      el._assigning = true;
      nextTick(() => {
        el._assigning = false;
      });
    });
    el[assignKey] = getModelAssigner(vnode);
  },
  mounted(el, { value }) {
    setSelected(el, value);
  },
  beforeUpdate(el, _binding, vnode) {
    el[assignKey] = getModelAssigner(vnode);
  },
  updated(el, { value }) {
    if (!el._assigning) {
      setSelected(el, value);
    }
  }
};
function setSelected(el, value) {
  const isMultiple = el.multiple;
  const isArrayValue = isArray$1(value);
  if (isMultiple && !isArrayValue && !isSet$1(value)) {
    return;
  }
  for (let i2 = 0, l = el.options.length; i2 < l; i2++) {
    const option = el.options[i2];
    const optionValue = getValue(option);
    if (isMultiple) {
      if (isArrayValue) {
        const optionType = typeof optionValue;
        if (optionType === "string" || optionType === "number") {
          option.selected = value.some((v2) => String(v2) === String(optionValue));
        } else {
          option.selected = looseIndexOf(value, optionValue) > -1;
        }
      } else {
        option.selected = value.has(optionValue);
      }
    } else if (looseEqual(getValue(option), value)) {
      if (el.selectedIndex !== i2)
        el.selectedIndex = i2;
      return;
    }
  }
  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
}
function getValue(el) {
  return "_value" in el ? el._value : el.value;
}
function getCheckboxValue(el, checked) {
  const key = checked ? "_trueValue" : "_falseValue";
  return key in el ? el[key] : checked;
}
const vModelDynamic = {
  created(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "created");
  },
  mounted(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "mounted");
  },
  beforeUpdate(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
  },
  updated(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "updated");
  }
};
function resolveDynamicModel(tagName, type2) {
  switch (tagName) {
    case "SELECT":
      return vModelSelect;
    case "TEXTAREA":
      return vModelText;
    default:
      switch (type2) {
        case "checkbox":
          return vModelCheckbox;
        case "radio":
          return vModelRadio;
        default:
          return vModelText;
      }
  }
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
  const modelToUse = resolveDynamicModel(
    el.tagName,
    vnode.props && vnode.props.type
  );
  const fn = modelToUse[hook];
  fn && fn(el, binding, vnode, prevVNode);
}
const systemModifiers = ["ctrl", "shift", "alt", "meta"];
const modifierGuards = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
};
const withModifiers = (fn, modifiers) => {
  const cache = fn._withMods || (fn._withMods = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = (event, ...args) => {
    for (let i2 = 0; i2 < modifiers.length; i2++) {
      const guard = modifierGuards[modifiers[i2]];
      if (guard && guard(event, modifiers))
        return;
    }
    return fn(event, ...args);
  });
};
const keyNames = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
};
const withKeys = (fn, modifiers) => {
  const cache = fn._withKeys || (fn._withKeys = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = (event) => {
    if (!("key" in event)) {
      return;
    }
    const eventKey = hyphenate(event.key);
    if (modifiers.some(
      (k2) => k2 === eventKey || keyNames[k2] === eventKey
    )) {
      return fn(event);
    }
  });
};
const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
let renderer;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
const createApp = (...args) => {
  const app = ensureRenderer().createApp(...args);
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container)
      return;
    const component = app._component;
    if (!isFunction(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    if (container.nodeType === 1) {
      container.textContent = "";
    }
    const proxy = mount(container, false, resolveRootNamespace(container));
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app;
};
function resolveRootNamespace(container) {
  if (container instanceof SVGElement) {
    return "svg";
  }
  if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
    return "mathml";
  }
}
function normalizeContainer(container) {
  if (isString$1(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}
const scheduler = "";
const style = "";
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep, importerUrl);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i2 = links.length - 1; i2 >= 0; i2--) {
        const link2 = links[i2];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const index$1 = "";
function render$h(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
    })
  ]);
}
function render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  ]);
}
function render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
    })
  ]);
}
function render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
    })
  ]);
}
function render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
    })
  ]);
}
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
    })
  ]);
}
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
    })
  ]);
}
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
    })
  ]);
}
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
    })
  ]);
}
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
    })
  ]);
}
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
    })
  ]);
}
const _hoisted_1$a = { role: "status" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "CustomLoadingSpinner",
  props: {
    baseColor: {},
    fillColor: {},
    width: {},
    height: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
        (openBlock(), createElementBlock("svg", {
          "aria-hidden": "true",
          class: normalizeClass(["inline", props.height, props.width, "mr-2", props.baseColor, "animate-spin", props.fillColor]),
          viewBox: "0 0 100 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [..._cache[0] || (_cache[0] = [
          createBaseVNode("path", {
            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
            fill: "currentColor"
          }, null, -1),
          createBaseVNode("path", {
            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
            fill: "currentFill"
          }, null, -1)
        ])], 2)),
        _cache[1] || (_cache[1] = createBaseVNode("span", { class: "sr-only" }, "Loading...", -1))
      ]);
    };
  }
});
function d$3(u2, e, r2) {
  let i2 = ref$1(r2 == null ? void 0 : r2.value), f2 = computed(() => u2.value !== void 0);
  return [computed(() => f2.value ? u2.value : i2.value), function(t) {
    return f2.value || (i2.value = t), e == null ? void 0 : e(t);
  }];
}
var r$3;
let n$1 = Symbol("headlessui.useid"), o$5 = 0;
const i$1 = (r$3 = useId) != null ? r$3 : function() {
  return inject(n$1, () => `${++o$5}`)();
};
function o$4(e) {
  var l;
  if (e == null || e.value == null)
    return null;
  let n2 = (l = e.value.$el) != null ? l : e.value;
  return n2 instanceof Node ? n2 : null;
}
function u$5(r2, n2, ...a2) {
  if (r2 in n2) {
    let e = n2[r2];
    return typeof e == "function" ? e(...a2) : e;
  }
  let t = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e) => `"${e}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t, u$5), t;
}
function r$2(t, e) {
  if (t)
    return t;
  let n2 = e != null ? e : "button";
  if (typeof n2 == "string" && n2.toLowerCase() === "button")
    return "button";
}
function s$1(t, e) {
  let n2 = ref$1(r$2(t.value.type, t.value.as));
  return onMounted(() => {
    n2.value = r$2(t.value.type, t.value.as);
  }), watchEffect(() => {
    var u2;
    n2.value || o$4(e) && o$4(e) instanceof HTMLButtonElement && !((u2 = o$4(e)) != null && u2.hasAttribute("type")) && (n2.value = "button");
  }), n2;
}
var N$1 = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N$1 || {}), S$1 = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(S$1 || {});
function A$1({ visible: r2 = true, features: t = 0, ourProps: e, theirProps: o2, ...i2 }) {
  var a2;
  let n2 = j$1(o2, e), l = Object.assign(i2, { props: n2 });
  if (r2 || t & 2 && n2.static)
    return y$1(l);
  if (t & 1) {
    let d2 = (a2 = n2.unmount) == null || a2 ? 0 : 1;
    return u$5(d2, { [0]() {
      return null;
    }, [1]() {
      return y$1({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y$1(l);
}
function y$1({ props: r2, attrs: t, slots: e, slot: o2, name: i2 }) {
  var m, h$1;
  let { as: n2, ...l } = T$1(r2, ["unmount", "static"]), a2 = (m = e.default) == null ? void 0 : m.call(e, o2), d2 = {};
  if (o2) {
    let u2 = false, c = [];
    for (let [p2, f2] of Object.entries(o2))
      typeof f2 == "boolean" && (u2 = true), f2 === true && c.push(p2);
    u2 && (d2["data-headlessui-state"] = c.join(" "));
  }
  if (n2 === "template") {
    if (a2 = b$1(a2 != null ? a2 : []), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
      let [u2, ...c] = a2 != null ? a2 : [];
      if (!v$1(u2) || c.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).map((s2) => s2.trim()).filter((s2, g, R) => R.indexOf(s2) === g).sort((s2, g) => s2.localeCompare(g)).map((s2) => `  - ${s2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s2) => `  - ${s2}`).join(`
`)].join(`
`));
      let p2 = j$1((h$1 = u2.props) != null ? h$1 : {}, l, d2), f2 = cloneVNode(u2, p2, true);
      for (let s2 in p2)
        s2.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s2] = p2[s2]);
      return f2;
    }
    return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
  }
  return h(n2, Object.assign({}, l, d2), { default: () => a2 });
}
function b$1(r2) {
  return r2.flatMap((t) => t.type === Fragment ? b$1(t.children) : [t]);
}
function j$1(...r2) {
  if (r2.length === 0)
    return {};
  if (r2.length === 1)
    return r2[0];
  let t = {}, e = {};
  for (let i2 of r2)
    for (let n2 in i2)
      n2.startsWith("on") && typeof i2[n2] == "function" ? (e[n2] != null || (e[n2] = []), e[n2].push(i2[n2])) : t[n2] = i2[n2];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(e).map((i2) => [i2, void 0])));
  for (let i2 in e)
    Object.assign(t, { [i2](n2, ...l) {
      let a2 = e[i2];
      for (let d2 of a2) {
        if (n2 instanceof Event && n2.defaultPrevented)
          return;
        d2(n2, ...l);
      }
    } });
  return t;
}
function E$3(r2) {
  let t = Object.assign({}, r2);
  for (let e in t)
    t[e] === void 0 && delete t[e];
  return t;
}
function T$1(r2, t = []) {
  let e = Object.assign({}, r2);
  for (let o2 of t)
    o2 in e && delete e[o2];
  return e;
}
function v$1(r2) {
  return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
}
var u$4 = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(u$4 || {});
let f$1 = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t, { slots: n2, attrs: i2 }) {
  return () => {
    var r2;
    let { features: e, ...d2 } = t, o2 = { "aria-hidden": (e & 2) === 2 ? true : (r2 = d2["aria-hidden"]) != null ? r2 : void 0, hidden: (e & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e & 4) === 4 && (e & 2) !== 2 && { display: "none" } } };
    return A$1({ ourProps: o2, theirProps: d2, slot: {}, attrs: i2, slots: n2, name: "Hidden" });
  };
} });
var o$3 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$3 || {});
function p$1(i2) {
  var t, r2;
  let s2 = (t = i2 == null ? void 0 : i2.form) != null ? t : i2.closest("form");
  if (s2) {
    for (let n2 of s2.elements)
      if (n2 !== i2 && (n2.tagName === "INPUT" && n2.type === "submit" || n2.tagName === "BUTTON" && n2.type === "submit" || n2.nodeName === "INPUT" && n2.type === "image")) {
        n2.click();
        return;
      }
    (r2 = s2.requestSubmit) == null || r2.call(s2);
  }
}
let u$3 = Symbol("DescriptionContext");
function w$1() {
  let t = inject(u$3, null);
  if (t === null)
    throw new Error("Missing parent");
  return t;
}
function k$1({ slot: t = ref$1({}), name: o2 = "Description", props: s2 = {} } = {}) {
  let e = ref$1([]);
  function r2(n2) {
    return e.value.push(n2), () => {
      let i2 = e.value.indexOf(n2);
      i2 !== -1 && e.value.splice(i2, 1);
    };
  }
  return provide(u$3, { register: r2, slot: t, name: o2, props: s2 }), computed(() => e.value.length > 0 ? e.value.join(" ") : void 0);
}
let K$1 = defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(t, { attrs: o2, slots: s2 }) {
  var n2;
  let e = (n2 = t.id) != null ? n2 : `headlessui-description-${i$1()}`, r2 = w$1();
  return onMounted(() => onUnmounted(r2.register(e))), () => {
    let { name: i2 = "Description", slot: l = ref$1({}), props: d2 = {} } = r2, { ...c } = t, f2 = { ...Object.entries(d2).reduce((a2, [g, m]) => Object.assign(a2, { [g]: unref(m) }), {}), id: e };
    return A$1({ ourProps: f2, theirProps: c, slot: l.value, attrs: o2, slots: s2, name: i2 });
  };
} });
let a$1 = Symbol("LabelContext");
function d$2() {
  let t = inject(a$1, null);
  if (t === null) {
    let n2 = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n2, d$2), n2;
  }
  return t;
}
function E$2({ slot: t = {}, name: n2 = "Label", props: i2 = {} } = {}) {
  let e = ref$1([]);
  function o2(r2) {
    return e.value.push(r2), () => {
      let l = e.value.indexOf(r2);
      l !== -1 && e.value.splice(l, 1);
    };
  }
  return provide(a$1, { register: o2, slot: t, name: n2, props: i2 }), computed(() => e.value.length > 0 ? e.value.join(" ") : void 0);
}
let K = defineComponent({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(t, { slots: n2, attrs: i2 }) {
  var r2;
  let e = (r2 = t.id) != null ? r2 : `headlessui-label-${i$1()}`, o2 = d$2();
  return onMounted(() => onUnmounted(o2.register(e))), () => {
    let { name: l = "Label", slot: p2 = {}, props: c = {} } = o2, { passive: f2, ...s2 } = t, u2 = { ...Object.entries(c).reduce((b2, [g, m]) => Object.assign(b2, { [g]: unref(m) }), {}), id: e };
    return f2 && (delete u2.onClick, delete u2.htmlFor, delete s2.onClick), A$1({ ourProps: u2, theirProps: s2, slot: p2, attrs: i2, slots: n2, name: l });
  };
} });
let C$1 = Symbol("GroupContext");
defineComponent({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(l, { slots: c, attrs: i2 }) {
  let r2 = ref$1(null), f2 = E$2({ name: "SwitchLabel", props: { htmlFor: computed(() => {
    var t;
    return (t = r2.value) == null ? void 0 : t.id;
  }), onClick(t) {
    r2.value && (t.currentTarget.tagName === "LABEL" && t.preventDefault(), r2.value.click(), r2.value.focus({ preventScroll: true }));
  } } }), p2 = k$1({ name: "SwitchDescription" });
  return provide(C$1, { switchRef: r2, labelledby: f2, describedby: p2 }), () => A$1({ theirProps: l, ourProps: {}, slot: {}, slots: c, attrs: i2, name: "SwitchGroup" });
} });
let ue = defineComponent({ name: "Switch", emits: { "update:modelValue": (l) => true }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: true }, form: { type: String, optional: true }, name: { type: String, optional: true }, value: { type: String, optional: true }, id: { type: String, default: null }, disabled: { type: Boolean, default: false }, tabIndex: { type: Number, default: 0 } }, inheritAttrs: false, setup(l, { emit: c, attrs: i2, slots: r2, expose: f2 }) {
  var h$1;
  let p2 = (h$1 = l.id) != null ? h$1 : `headlessui-switch-${i$1()}`, n2 = inject(C$1, null), [t, s2] = d$3(computed(() => l.modelValue), (e) => c("update:modelValue", e), computed(() => l.defaultChecked));
  function m() {
    s2(!t.value);
  }
  let E2 = ref$1(null), o2 = n2 === null ? E2 : n2.switchRef, L = s$1(computed(() => ({ as: l.as, type: i2.type })), o2);
  f2({ el: o2, $el: o2 });
  function D(e) {
    e.preventDefault(), m();
  }
  function R(e) {
    e.key === o$3.Space ? (e.preventDefault(), m()) : e.key === o$3.Enter && p$1(e.currentTarget);
  }
  function x(e) {
    e.preventDefault();
  }
  let d2 = computed(() => {
    var e, a2;
    return (a2 = (e = o$4(o2)) == null ? void 0 : e.closest) == null ? void 0 : a2.call(e, "form");
  });
  return onMounted(() => {
    watch([d2], () => {
      if (!d2.value || l.defaultChecked === void 0)
        return;
      function e() {
        s2(l.defaultChecked);
      }
      return d2.value.addEventListener("reset", e), () => {
        var a2;
        (a2 = d2.value) == null || a2.removeEventListener("reset", e);
      };
    }, { immediate: true });
  }), () => {
    let { name: e, value: a2, form: K2, tabIndex: y2, ...b2 } = l, T2 = { checked: t.value }, B = { id: p2, ref: o2, role: "switch", type: L.value, tabIndex: y2 === -1 ? 0 : y2, "aria-checked": t.value, "aria-labelledby": n2 == null ? void 0 : n2.labelledby.value, "aria-describedby": n2 == null ? void 0 : n2.describedby.value, onClick: D, onKeyup: R, onKeypress: x };
    return h(Fragment, [e != null && t.value != null ? h(f$1, E$3({ features: u$4.Hidden, as: "input", type: "checkbox", hidden: true, readOnly: true, checked: t.value, form: K2, disabled: b2.disabled, name: e, value: a2 })) : null, A$1({ ourProps: B, theirProps: { ...i2, ...T$1(b2, ["modelValue", "defaultChecked"]) }, slot: T2, attrs: i2, slots: r2, name: "Switch" })]);
  };
} });
K;
K$1;
var __defProp2 = Object.defineProperty;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField2 = (obj, key, value) => __defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
var monet$1$1 = { exports: {} };
/**
 * Monet.js 0.9.3
 *
 * (c) 2012-2021 Chris Myers
 * @license Monet.js may be freely distributed under the MIT license.
 * For all details and documentation:
 * https://monet.github.io/monet.js/
 */
var monet$2 = monet$1$1.exports;
var hasRequiredMonet$1;
function requireMonet$1() {
  if (hasRequiredMonet$1)
    return monet$1$1.exports;
  hasRequiredMonet$1 = 1;
  (function(module) {
    (function(root, factory2) {
      if (module.exports) {
        module.exports = factory2(root);
      } else {
        root.Monet = factory2(root);
      }
    })(typeof self !== "undefined" ? self : monet$2, function() {
      function assignImp(target, source) {
        for (var key in source) {
          if (source.hasOwnProperty(key) && source[key] !== void 0) {
            target[key] = source[key];
          }
        }
        return target;
      }
      var assign2 = isFunction2(Object.assign) ? Object.assign : assignImp;
      var Monet = {
        apply2,
        assign: assign2,
        compose,
        curry: curry(swap(curry), [])([]),
        idFunction,
        isFunction: isFunction2,
        noop: noop2,
        swap
      };
      var TYPE_KEY = "@@type";
      var LIB_NAME = "monet.js";
      var TYPES_NAMES = {
        Identity: "Identity",
        Maybe: "Maybe",
        Either: "Either",
        Validation: "Validation",
        List: "List",
        NEL: "NEL",
        IO: "IO",
        MonadT: "MonadT",
        Reader: "Reader",
        Free: "Free"
      };
      function setType(target, typeName) {
        target[TYPE_KEY] = LIB_NAME + "/" + typeName;
      }
      function isInstance(typeName) {
        return function(target) {
          return (target[TYPE_KEY] || target.constructor[TYPE_KEY]) === LIB_NAME + "/" + typeName;
        };
      }
      function isOfType(typeName) {
        return function(target) {
          var targetType = target[TYPE_KEY] || target.constructor && target.constructor[TYPE_KEY];
          return Boolean(targetType) && targetType.length >= typeName.length && targetType.indexOf(typeName) === targetType.length - typeName.length;
        };
      }
      function isNothing(value) {
        return value == null;
      }
      function isEmpty(value) {
        if (isNothing(value) || value === "") {
          return true;
        }
        if (Array.isArray(value) && value.length === 0) {
          return true;
        }
        if (typeof value === "object") {
          return Object.keys(value).length === 0;
        }
        return false;
      }
      function noop2() {
      }
      function getArgs(args) {
        return Array.prototype.slice.call(args);
      }
      function curry(fn, args) {
        return function() {
          var args1 = args.concat(getArgs(arguments));
          return args1.length >= fn.length ? fn.apply(null, args1.slice(0, args1.length)) : curry(fn, args1);
        };
      }
      function compose(f2, g) {
        return function(x) {
          return f2(g(x));
        };
      }
      function isFunction2(f2) {
        return Boolean(f2 && f2.constructor && f2.call && f2.apply);
      }
      function idFunction(value) {
        return value;
      }
      function trueFunction() {
        return true;
      }
      function areEqual(a2, b2) {
        if (a2 === b2 || a2 !== a2 && b2 !== b2) {
          return true;
        }
        if (!a2 || !b2) {
          return false;
        }
        if (isFunction2(a2.equals) && isFunction2(b2.equals)) {
          return a2.equals(b2);
        }
        return false;
      }
      function equals(a2) {
        return function(b2) {
          return areEqual(a2, b2);
        };
      }
      function falseFunction() {
        return false;
      }
      function swap(f2) {
        return function(a2, b2) {
          return f2(b2, a2);
        };
      }
      function apply2(a1, a2, f2) {
        return a2.ap(a1.map(curry(f2, [])));
      }
      function listEquals(list1, list2) {
        var a2 = list1;
        var b2 = list2;
        while (!a2.isNil && !b2.isNil) {
          if (!equals(a2.head())(b2.head())) {
            return false;
          }
          a2 = a2.tail();
          b2 = b2.tail();
        }
        return a2.isNil && b2.isNil;
      }
      function listMapC(fn, l) {
        return l.isNil ? Return(l) : Suspend(function() {
          return listMapC(fn, l.tail());
        }).map(curry(cons, [])(fn(l.head())));
      }
      function listMap(fn, l) {
        return listMapC(fn, l).run();
      }
      function listFilter(list, fn) {
        return list.foldRight(Nil)(function(a2, acc) {
          return fn(a2) ? cons(a2, acc) : acc;
        });
      }
      function listFindC(l, fn) {
        if (l.isNil) {
          return Return(None());
        }
        var h2 = l.head();
        return fn(h2) ? Return(Some(h2)) : Suspend(function() {
          return listFindC(l.tail(), fn);
        });
      }
      function listFind(l, fn) {
        return listFindC(l, fn).run();
      }
      function listContainsC(l, val) {
        if (l.isNil) {
          return Return(false);
        }
        var h2 = l.head();
        return areEqual(h2, val) ? Return(true) : Suspend(function() {
          return listContainsC(l.tail(), val);
        });
      }
      function listContains(l, val) {
        return listContainsC(l, val).run();
      }
      function cons(head, tail) {
        return tail.cons(head);
      }
      function List() {
        switch (arguments.length) {
          case 0:
            return new List.fn.init();
          case 1:
            return new List.fn.init(arguments[0]);
          default:
            return new List.fn.init(arguments[0], arguments[1]);
        }
      }
      Monet.List = List;
      var listForEach = function(effectFn, l) {
        if (!l.isNil) {
          effectFn(l.head());
          listForEach(effectFn, l.tail());
        }
      };
      var foldLeft = function(fn, acc, list) {
        function fL(innerAcc, innerList) {
          return innerList.isNil ? Return(innerAcc) : Suspend(function() {
            return fL(fn(innerAcc, innerList.head()), innerList.tail());
          });
        }
        return fL(acc, list).run();
      };
      var foldRight = function(fn, list, acc) {
        function fR(innerList, innerAcc) {
          return innerList.isNil ? Return(innerAcc) : Suspend(function() {
            return fR(innerList.tail(), innerAcc);
          }).map(function(accumulated) {
            return fn(innerList.head(), accumulated);
          });
        }
        return fR(list, acc).run();
      };
      var append = function(self2, other) {
        function appendFree(listA, listB) {
          return listA.isNil ? Return(listB) : Suspend(function() {
            return appendFree(listA.tail(), listB).map(function(list) {
              return list.cons(listA.head());
            });
          });
        }
        return appendFree(self2, other).run();
      };
      var sequence = function(list, type2) {
        return list.foldRight(type2.of(Nil))(type2.map2(cons));
      };
      var sequenceValidation = function(list) {
        return list.foldLeft(Success(Nil))(function(acc, a2) {
          return acc.ap(a2.map(function(v2) {
            return function(t) {
              return cons(v2, t);
            };
          }));
        }).map(listReverse);
      };
      var listReverse = function(list) {
        return list.foldLeft(Nil)(swap(cons));
      };
      var listAp = function(list1, list2) {
        return list1.bind(function(x) {
          return list2.map(function(f2) {
            return f2(x);
          });
        });
      };
      var Nil;
      List.fn = List.prototype = {
        init: function() {
          var head = arguments[0];
          var tail = arguments[1];
          if (arguments.length === 0) {
            this.isNil = true;
            this.size_ = 0;
          } else {
            this.isNil = false;
            this.head_ = head;
            this.tail_ = tail || Nil;
            this.size_ = this.tail_.size() + 1;
          }
          setType(this, TYPES_NAMES.List);
        },
        of: function(value) {
          return new List(value);
        },
        size: function() {
          return this.size_;
        },
        equals: function(other) {
          return (List.isOfType(other) || NEL.isOfType(other)) && listEquals(this, other);
        },
        cons: function(head) {
          return List(head, this);
        },
        snoc: function(element) {
          return this.concat(List(element));
        },
        map: function(fn) {
          return listMap(fn, this);
        },
        toArray: function() {
          return foldLeft(function(acc, e) {
            acc.push(e);
            return acc;
          }, [], this);
        },
        toSet: function() {
          return new Set(this);
        },
        foldLeft: function(initialValue) {
          var self2 = this;
          return function(fn) {
            return foldLeft(fn, initialValue, self2);
          };
        },
        foldRight: function(initialValue) {
          var self2 = this;
          return function(fn) {
            return foldRight(fn, self2, initialValue);
          };
        },
        append: function(list2) {
          return append(this, list2);
        },
        filter: function(fn) {
          return listFilter(this, fn);
        },
        find: function(fn) {
          return listFind(this, fn);
        },
        flatten: function() {
          return foldRight(append, this, Nil);
        },
        flattenMaybe: function() {
          return this.flatMap(Maybe.toList);
        },
        reverse: function() {
          return listReverse(this);
        },
        bind: function(fn) {
          return this.map(fn).flatten();
        },
        forEach: function(effectFn) {
          listForEach(effectFn, this);
        },
        contains: function(val) {
          return listContains(this, val);
        },
        sequenceMaybe: function() {
          return sequence(this, Maybe);
        },
        sequenceValidation: function() {
          return sequenceValidation(this);
        },
        sequenceEither: function() {
          return sequence(this, Either);
        },
        sequenceIO: function() {
          return sequence(this, IO);
        },
        sequenceReader: function() {
          return sequence(this, Reader);
        },
        sequence: function(monadType) {
          return sequence(this, monadType);
        },
        head: function() {
          return this.head_;
        },
        headMaybe: function() {
          return this.isNil ? None() : Some(this.head_);
        },
        lookup: function(i2) {
          return this.isNil || i2 >= this.size() ? None() : Maybe.fromNull(this.toArray()[i2]);
        },
        nth: function(i2) {
          return this.isNil || i2 >= this.size() ? void 0 : this.toArray()[i2];
        },
        tail: function() {
          return this.isNil ? Nil : this.tail_;
        },
        tails: function() {
          return this.isNil ? List(Nil, Nil) : this.tail().tails().cons(this);
        },
        ap: function(list) {
          return listAp(this, list);
        },
        apTo: function(listWithValues) {
          return listAp(listWithValues, this);
        },
        isNEL: falseFunction,
        toString: function() {
          return this.isNil ? "Nil" : "List(" + this.toArray().join(", ") + ")";
        },
        inspect: function() {
          return this.toString();
        }
      };
      List.fn.init.prototype = List.fn;
      setType(List, TYPES_NAMES.List);
      setType(List.fn.init, TYPES_NAMES.List);
      List.isInstance = isInstance(TYPES_NAMES.List);
      List.isOfType = isOfType(TYPES_NAMES.List);
      List.prototype.empty = function() {
        return Nil;
      };
      List.fromArray = function(array) {
        return array.reduceRight(function(acc, next) {
          return acc.cons(next);
        }, Nil);
      };
      List.from = function(iterable) {
        return List.fromArray(Array.from(iterable));
      };
      List.of = function(a2) {
        return new List(a2, Nil);
      };
      List.prototype.each = List.prototype.forEach;
      Nil = Monet.Nil = new List.fn.init();
      function emptyNELError(head) {
        return new Error("Cannot create an empty Non-Empty List. Passed head is " + head + ".");
      }
      function NEL(head, tail) {
        if (isNothing(head)) {
          throw emptyNELError(head);
        }
        return new NEL.fn.init(head, tail);
      }
      Monet.NEL = Monet.NonEmptyList = NEL;
      NEL.of = function(a2) {
        return NEL(a2, Nil);
      };
      NEL.fn = NEL.prototype = {
        init: function(head, tail) {
          if (isNothing(head)) {
            throw emptyNELError(head);
          } else {
            this.isNil = false;
            this.head_ = head;
            this.tail_ = isNothing(tail) ? Nil : tail;
            this.size_ = this.tail_.size() + 1;
          }
          setType(this, TYPES_NAMES.NEL);
        },
        equals: function(other) {
          return List.isOfType(other) || NEL.isOfType(other) && listEquals(this, other);
        },
        cons: function(head) {
          return NEL(head, this.toList());
        },
        snoc: function(element) {
          return this.concat(NEL(element));
        },
        map: function(fn) {
          return NEL(fn(this.head_), listMap(fn, this.tail_));
        },
        bind: function(fn) {
          var p2 = fn(this.head_);
          if (!p2.isNEL()) {
            throw new Error("NEL.fn.bind: Passed function must return a NonEmptyList.");
          }
          var list = this.tail().foldLeft(Nil.snoc(p2.head()).append(p2.tail()))(function(acc, e) {
            var list2 = fn(e).toList();
            return acc.snoc(list2.head()).append(list2.tail());
          });
          return new NEL(list.head(), list.tail());
        },
        head: function() {
          return this.head_;
        },
        lookup: function(i2) {
          return i2 >= this.size() ? None() : Maybe.fromNull(this.toArray()[i2]);
        },
        nth: function(i2) {
          return i2 >= this.size() ? void 0 : this.toArray()[i2];
        },
        tail: function() {
          return this.tail_;
        },
        tails: function() {
          var listsOfNels = this.toList().tails().map(NEL.fromList).flattenMaybe();
          return NEL(listsOfNels.head(), listsOfNels.tail());
        },
        toList: function() {
          return List(this.head_, this.tail_);
        },
        reverse: function() {
          if (this.tail().isNil) {
            return this;
          }
          var reversedTail = this.tail().reverse();
          return NEL(reversedTail.head(), reversedTail.tail().append(List(this.head())));
        },
        foldLeft: function(initialValue) {
          return this.toList().foldLeft(initialValue);
        },
        foldRight: function(initialValue) {
          return this.toList().foldRight(initialValue);
        },
        reduceLeft: function(fn) {
          return this.tail().foldLeft(this.head())(fn);
        },
        filter: function(fn) {
          return listFilter(this.toList(), fn);
        },
        find: function(fn) {
          return listFind(this.toList(), fn);
        },
        flatten: function() {
          return foldRight(append, this.toList().map(function(l) {
            return l.isNEL() ? l.toList() : l;
          }), Nil);
        },
        flattenMaybe: function() {
          return this.toList().flatMap(Maybe.toList);
        },
        contains: function(val) {
          return listContains(this.toList(), val);
        },
        append: function(list2) {
          return NEL.fromList(this.toList().append(list2.toList())).some();
        },
        cobind: function(fn) {
          return this.cojoin().map(fn);
        },
        size: function() {
          return this.size_;
        },
        forEach: function(fn) {
          return this.toList().forEach(fn);
        },
        isNEL: trueFunction,
        toString: function() {
          return "NEL(" + this.toArray().join(", ") + ")";
        },
        inspect: function() {
          return this.toString();
        }
      };
      NEL.fromList = function(list) {
        return list.isNil ? None() : Some(NEL(list.head(), list.tail()));
      };
      NEL.fromArray = function(array) {
        return NEL.fromList(List.fromArray(array));
      };
      NEL.from = function(iterable) {
        return NEL.fromList(List.from(iterable));
      };
      NEL.fn.init.prototype = NEL.fn;
      setType(NEL, TYPES_NAMES.NEL);
      setType(NEL.fn.init, TYPES_NAMES.NEL);
      NEL.isInstance = isInstance(TYPES_NAMES.NEL);
      NEL.isOfType = isOfType(TYPES_NAMES.NEL);
      NEL.prototype.toArray = List.prototype.toArray;
      NEL.prototype.toSet = List.prototype.toSet;
      NEL.prototype.extract = NEL.prototype.copure = NEL.prototype.head;
      NEL.prototype.cojoin = NEL.prototype.tails;
      NEL.prototype.coflatMap = NEL.prototype.mapTails = NEL.prototype.cobind;
      NEL.prototype.ap = List.prototype.ap;
      NEL.prototype.apTo = List.prototype.apTo;
      var Maybe = Monet.Maybe = {};
      Maybe.fromFalsy = function(val) {
        return !val ? Maybe.None() : Maybe.Some(val);
      };
      Maybe.fromNull = function(val) {
        return isNothing(val) ? Maybe.None() : Maybe.Some(val);
      };
      Maybe.fromUndefined = function(val) {
        return val === void 0 ? Maybe.None() : Maybe.Some(val);
      };
      Maybe.fromEmpty = function(val) {
        return isEmpty(val) ? Maybe.None() : Maybe.Some(val);
      };
      Maybe.of = function(a2) {
        return Some(a2);
      };
      var Some = Maybe.Just = Maybe.Some = Maybe.some = Monet.Some = Monet.Just = function(val) {
        return new Maybe.fn.init(true, val);
      };
      var None = Maybe.Nothing = Maybe.None = Maybe.none = Monet.None = Monet.Nothing = function() {
        return new Maybe.fn.init(false, null);
      };
      Maybe.toList = function(maybe) {
        return maybe.toList();
      };
      Maybe.fn = Maybe.prototype = {
        init: function(isValue, val) {
          this.isValue = isValue;
          if (isValue && isNothing(val)) {
            throw new Error("Can not create Some with illegal value: " + val + ".");
          }
          this.val = val;
          setType(this, TYPES_NAMES.Maybe);
        },
        isSome: function() {
          return this.isValue;
        },
        isNone: function() {
          return !this.isSome();
        },
        bind: function(bindFn) {
          return this.isValue ? bindFn(this.val) : this;
        },
        some: function() {
          if (this.isValue) {
            return this.val;
          }
          throw new Error("Cannot call .some() on a None.");
        },
        orSome: function(otherValue) {
          return this.isValue ? this.val : otherValue;
        },
        orLazy: function(getOtherValue) {
          return this.cata(getOtherValue, idFunction);
        },
        orNull: function() {
          return this.orSome(null);
        },
        orUndefined: function() {
          return this.orSome(void 0);
        },
        orElse: function(maybe) {
          return this.catchMap(function() {
            return maybe;
          });
        },
        ap: function(maybeWithFunction) {
          var value = this.val;
          return this.isValue ? maybeWithFunction.map(function(fn) {
            return fn(value);
          }) : this;
        },
        apTo: function(maybeWithValue) {
          return maybeWithValue.ap(this);
        },
        equals: function(other) {
          return Maybe.isOfType(other) && this.cata(function() {
            return other.isNone();
          }, function(val) {
            return other.fold(false)(equals(val));
          });
        },
        toArray: function() {
          return this.map(function(val) {
            return [val];
          }).orLazy(function() {
            return [];
          });
        },
        toSet: function() {
          return new Set(this);
        },
        toList: function() {
          return this.map(List).orLazy(function() {
            return Nil;
          });
        },
        toEither: function(failVal) {
          return this.isSome() ? Right(this.val) : Left(failVal);
        },
        toValidation: function(failVal) {
          return this.isSome() ? Success(this.val) : Fail(failVal);
        },
        fold: function(defaultValue) {
          var self2 = this;
          return function(fn) {
            return self2.isSome() ? fn(self2.val) : defaultValue;
          };
        },
        foldLeft: function(initialValue) {
          return this.toList().foldLeft(initialValue);
        },
        foldRight: function(initialValue) {
          return this.toList().foldRight(initialValue);
        },
        cata: function(none, some) {
          return this.isSome() ? some(this.val) : none();
        },
        catchMap: function(fn) {
          return this.isSome() ? this : fn();
        },
        filter: function(fn) {
          var self2 = this;
          return self2.flatMap(function(a2) {
            return fn(a2) ? self2 : None();
          });
        },
        orNoneIf: function(bool) {
          return bool ? None() : this;
        },
        contains: function(val) {
          return this.isSome() ? areEqual(this.val, val) : false;
        },
        forEach: function(fn) {
          this.cata(noop2, fn);
        },
        orElseRun: function(fn) {
          this.cata(fn, noop2);
        },
        toString: function() {
          return this.isSome() ? "Just(" + this.val + ")" : "Nothing";
        },
        inspect: function() {
          return this.toString();
        }
      };
      Maybe.prototype.orJust = Maybe.prototype.getOrElse = Maybe.prototype.orSome;
      Maybe.prototype.just = Maybe.prototype.some;
      Maybe.prototype.isJust = Maybe.prototype.isSome;
      Maybe.prototype.isNothing = Maybe.prototype.isNone;
      Maybe.prototype.orNothingIf = Maybe.prototype.orNoneIf;
      Maybe.fn.init.prototype = Maybe.fn;
      setType(Maybe, TYPES_NAMES.Maybe);
      setType(Maybe.fn.init, TYPES_NAMES.Maybe);
      Maybe.isInstance = isInstance(TYPES_NAMES.Maybe);
      Maybe.isOfType = isOfType(TYPES_NAMES.Maybe);
      var Validation = Monet.Validation = {};
      var Success = Validation.Success = Validation.success = Monet.Success = function(val) {
        return new Validation.fn.init(val, true);
      };
      var Fail = Validation.Fail = Validation.fail = Monet.Fail = function(error) {
        return new Validation.fn.init(error, false);
      };
      Validation.of = function(v2) {
        return Success(v2);
      };
      Validation.fn = Validation.prototype = {
        init: function(val, success) {
          this.val = val;
          this.isSuccessValue = success;
          setType(this, TYPES_NAMES.Validation);
        },
        success: function() {
          if (this.isSuccess()) {
            return this.val;
          }
          throw new Error("Cannot call success() on a Fail.");
        },
        isSuccess: function() {
          return this.isSuccessValue;
        },
        isFail: function() {
          return !this.isSuccessValue;
        },
        fail: function() {
          if (this.isSuccess()) {
            throw new Error("Cannot call fail() on a Success.");
          }
          return this.val;
        },
        bind: function(fn) {
          return this.isSuccess() ? fn(this.val) : this;
        },
        ap: function(validationWithFn) {
          var value = this.val;
          return this.isSuccess() ? validationWithFn.map(function(fn) {
            return fn(value);
          }) : validationWithFn.isFail() ? Validation.Fail(Semigroup.append(value, validationWithFn.fail())) : this;
        },
        apTo: function(validationWithValue) {
          return validationWithValue.ap(this);
        },
        acc: function() {
          var x = function() {
            return x;
          };
          return this.isSuccessValue ? Validation.success(x) : this;
        },
        foldLeft: function(initialValue) {
          return this.toMaybe().toList().foldLeft(initialValue);
        },
        foldRight: function(initialValue) {
          return this.toMaybe().toList().foldRight(initialValue);
        },
        cata: function(fail, success) {
          return this.isSuccessValue ? success(this.val) : fail(this.val);
        },
        catchMap: function(fn) {
          return this.isSuccess() ? this : fn(this.val);
        },
        swap: function() {
          return this.isSuccess() ? Fail(this.val) : Success(this.val);
        },
        failMap: function(fn) {
          return this.isFail() ? Fail(fn(this.val)) : this;
        },
        bimap: function(fail, success) {
          return this.isSuccessValue ? this.map(success) : this.failMap(fail);
        },
        forEach: function(fn) {
          this.cata(noop2, fn);
        },
        forEachFail: function(fn) {
          this.cata(fn, noop2);
        },
        equals: function(other) {
          return Validation.isOfType(other) && this.cata(function(fail) {
            return other.cata(equals(fail), falseFunction);
          }, function(success) {
            return other.cata(falseFunction, equals(success));
          });
        },
        toMaybe: function() {
          return this.isSuccess() ? Some(this.val) : None();
        },
        toEither: function() {
          return (this.isSuccess() ? Right : Left)(this.val);
        },
        toString: function() {
          return (this.isSuccess() ? "Success(" : "Fail(") + this.val + ")";
        },
        inspect: function() {
          return this.toString();
        }
      };
      Validation.prototype.fold = Validation.prototype.cata;
      Validation.fn.init.prototype = Validation.fn;
      setType(Validation, TYPES_NAMES.Validation);
      setType(Validation.fn.init, TYPES_NAMES.Validation);
      Validation.isInstance = isInstance(TYPES_NAMES.Validation);
      Validation.isOfType = isOfType(TYPES_NAMES.Validation);
      var Semigroup = Monet.Semigroup = {
        append: function(a2, b2) {
          if (isFunction2(a2.concat)) {
            return a2.concat(b2);
          }
          throw new Error("Couldn't find a semigroup appender in the environment, please specify your own append function");
        }
      };
      var MonadT = Monet.monadTransformer = Monet.MonadT = Monet.monadT = function(monad) {
        return new MonadT.fn.init(monad);
      };
      MonadT.of = function(m) {
        return MonadT(m);
      };
      MonadT.fn = MonadT.prototype = {
        init: function(monad) {
          this.monad = monad;
          setType(Validation, TYPES_NAMES.MonadT);
        },
        map: function(fn) {
          return MonadT(this.monad.map(function(v2) {
            return v2.map(fn);
          }));
        },
        bind: function(fn) {
          return MonadT(this.monad.map(function(v2) {
            return v2.flatMap(fn);
          }));
        },
        ap: function(monadWithFn) {
          return MonadT(this.monad.flatMap(function(v2) {
            return monadWithFn.perform().map(function(v22) {
              return v2.ap(v22);
            });
          }));
        },
        perform: function() {
          return this.monad;
        }
      };
      MonadT.fn.init.prototype = MonadT.fn;
      var IO = Monet.IO = Monet.io = function(effectFn) {
        return new IO.fn.init(effectFn);
      };
      IO.of = function(a2) {
        return IO(function() {
          return a2;
        });
      };
      IO.fn = IO.prototype = {
        init: function(effectFn) {
          if (!isFunction2(effectFn)) {
            throw new Error("IO requires a function.");
          }
          this.effectFn = effectFn;
          setType(this, TYPES_NAMES.IO);
        },
        map: function(fn) {
          var self2 = this;
          return IO(function() {
            return fn(self2.effectFn());
          });
        },
        bind: function(fn) {
          var self2 = this;
          return IO(function() {
            return fn(self2.effectFn()).run();
          });
        },
        ap: function(ioWithFn) {
          var self2 = this;
          return ioWithFn.map(function(fn) {
            return fn(self2.effectFn());
          });
        },
        apTo: function(ioWithValue) {
          return ioWithValue.ap(this);
        },
        run: function() {
          return this.effectFn();
        }
      };
      IO.fn.init.prototype = IO.fn;
      setType(IO, TYPES_NAMES.IO);
      setType(IO.fn.init, TYPES_NAMES.IO);
      IO.isInstance = isInstance(TYPES_NAMES.IO);
      IO.isOfType = isOfType(TYPES_NAMES.IO);
      IO.prototype.perform = IO.prototype.performUnsafeIO = IO.prototype.run;
      var Either = Monet.Either = {};
      Either.of = function(a2) {
        return Right(a2);
      };
      Either.fromTry = function(fn) {
        try {
          return Either.right(fn());
        } catch (e) {
          return Either.left(e);
        }
      };
      Either.fromPromise = function(promise) {
        return promise.then(Either.Right, Either.Left);
      };
      var Right = Either.Right = Either.right = Monet.Right = function(val) {
        return new Either.fn.init(val, true);
      };
      var Left = Either.Left = Either.left = Monet.Left = function(val) {
        return new Either.fn.init(val, false);
      };
      Either.fn = Either.prototype = {
        init: function(val, isRightValue) {
          this.isRightValue = isRightValue;
          this.value = val;
          setType(this, TYPES_NAMES.Either);
        },
        bind: function(fn) {
          return this.isRightValue ? fn(this.value) : this;
        },
        ap: function(eitherWithFn) {
          var self2 = this;
          return this.isRightValue ? eitherWithFn.map(function(fn) {
            return fn(self2.value);
          }) : this;
        },
        apTo: function(eitherWithValue) {
          return eitherWithValue.ap(this);
        },
        leftMap: function(fn) {
          return this.isLeft() ? Left(fn(this.value)) : this;
        },
        isRight: function() {
          return this.isRightValue;
        },
        isLeft: function() {
          return !this.isRight();
        },
        right: function() {
          if (this.isRightValue) {
            return this.value;
          }
          throw new Error("Cannot call right() on a Left.");
        },
        left: function() {
          if (this.isRightValue) {
            throw new Error("Cannot call left() on a Right.");
          }
          return this.value;
        },
        foldLeft: function(initialValue) {
          return this.toMaybe().toList().foldLeft(initialValue);
        },
        foldRight: function(initialValue) {
          return this.toMaybe().toList().foldRight(initialValue);
        },
        cata: function(leftFn, rightFn) {
          return this.isRightValue ? rightFn(this.value) : leftFn(this.value);
        },
        catchMap: function(fn) {
          return this.isRight() ? this : fn(this.value);
        },
        swap: function() {
          return this.isRight() ? Left(this.value) : Right(this.value);
        },
        forEach: function(fn) {
          this.cata(noop2, fn);
        },
        forEachLeft: function(fn) {
          this.cata(fn, noop2);
        },
        equals: function(other) {
          return Either.isOfType(other) && this.cata(function(left) {
            return other.cata(equals(left), falseFunction);
          }, function(right) {
            return other.cata(falseFunction, equals(right));
          });
        },
        bimap: function(leftFn, rightFn) {
          return this.isRightValue ? this.map(rightFn) : this.leftMap(leftFn);
        },
        toMaybe: function() {
          return this.isRight() ? Some(this.value) : None();
        },
        toValidation: function() {
          return this.isRight() ? Success(this.value) : Fail(this.value);
        },
        toString: function() {
          return this.cata(function(left) {
            return "Left(" + left + ")";
          }, function(right) {
            return "Right(" + right + ")";
          });
        },
        toPromise: function() {
          return this.cata(function(left) {
            return Promise.reject(left);
          }, function(right) {
            return Promise.resolve(right);
          });
        },
        inspect: function() {
          return this.toString();
        }
      };
      Either.prototype.fold = Either.prototype.cata;
      Either.fn.init.prototype = Either.fn;
      setType(Either, TYPES_NAMES.Either);
      setType(Either.fn.init, TYPES_NAMES.Either);
      Either.isInstance = isInstance(TYPES_NAMES.Either);
      Either.isOfType = isOfType(TYPES_NAMES.Either);
      var Reader = Monet.Reader = function(fn) {
        return new Reader.fn.init(fn);
      };
      Reader.of = function(x) {
        return Reader(function(_2) {
          return x;
        });
      };
      Reader.ask = function() {
        return Reader(idFunction);
      };
      Reader.fn = Reader.prototype = {
        init: function(fn) {
          this.f = fn;
          setType(this, TYPES_NAMES.Reader);
        },
        run: function(config) {
          return this.f(config);
        },
        bind: function(fn) {
          var self2 = this;
          return Reader(function(config) {
            return fn(self2.run(config)).run(config);
          });
        },
        ap: function(readerWithFn) {
          var self2 = this;
          return readerWithFn.bind(function(fn) {
            return Reader(function(config) {
              return fn(self2.run(config));
            });
          });
        },
        apTo: function(readerWithValue) {
          return readerWithValue.ap(this);
        },
        map: function(fn) {
          var self2 = this;
          return Reader(function(config) {
            return fn(self2.run(config));
          });
        },
        local: function(fn) {
          var self2 = this;
          return Reader(function(c) {
            return self2.run(fn(c));
          });
        }
      };
      Reader.fn.init.prototype = Reader.fn;
      setType(Reader, TYPES_NAMES.Reader);
      setType(Reader.fn.init, TYPES_NAMES.Reader);
      Reader.isInstance = isInstance(TYPES_NAMES.Reader);
      Reader.isOfType = isOfType(TYPES_NAMES.Reader);
      var Free = Monet.Free = {};
      var Suspend = Free.Suspend = Monet.Suspend = function(functor) {
        return new Free.fn.init(functor, true);
      };
      var Return = Free.Return = Monet.Return = function(val) {
        return new Free.fn.init(val, false);
      };
      Free.of = function(a2) {
        return Return(a2);
      };
      Free.liftF = function(functor) {
        return isFunction2(functor) ? Suspend(compose(Return, functor)) : Suspend(functor.map(Return));
      };
      Free.fn = Free.prototype = {
        init: function(val, isSuspend) {
          this.isSuspend = isSuspend;
          if (isSuspend) {
            this.functor = val;
          } else {
            this.val = val;
          }
          setType(this, TYPES_NAMES.Free);
        },
        run: function() {
          return this.go(function(f2) {
            return f2();
          });
        },
        bind: function(fn) {
          return this.isSuspend ? isFunction2(this.functor) ? Suspend(compose(function(free) {
            return free.bind(fn);
          }, this.functor)) : Suspend(this.functor.map(function(free) {
            return free.bind(fn);
          })) : fn(this.val);
        },
        ap: function(ff) {
          return this.bind(function(x) {
            return ff.map(function(f2) {
              return f2(x);
            });
          });
        },
        apTo: function(f2) {
          return f2.ap(this);
        },
        resume: function() {
          return this.isSuspend ? Left(this.functor) : Right(this.val);
        },
        go1: function(f2) {
          function go2(t) {
            return t.resume().cata(function(functor) {
              return go2(f2(functor));
            }, idFunction);
          }
          return go2(this);
        },
        go: function(f2) {
          var result = this.resume();
          while (result.isLeft()) {
            var next = f2(result.left());
            result = next.resume();
          }
          return result.right();
        }
      };
      Free.fn.init.prototype = Free.fn;
      setType(Free, TYPES_NAMES.Free);
      setType(Free.fn.init, TYPES_NAMES.Free);
      Free.isInstance = isInstance(TYPES_NAMES.Free);
      Free.isOfType = isOfType(TYPES_NAMES.Free);
      function Identity2(a2) {
        return new Identity2.fn.init(a2);
      }
      Monet.Identity = Identity2;
      Identity2.of = function(a2) {
        return new Identity2(a2);
      };
      Identity2.fn = Identity2.prototype = {
        init: function(val) {
          this.val = val;
          setType(this, TYPES_NAMES.Identity);
        },
        bind: function(fn) {
          return fn(this.val);
        },
        get: function() {
          return this.val;
        },
        forEach: function(fn) {
          fn(this.val);
        },
        equals: function(other) {
          return Identity2.isOfType(other) && equals(this.get())(other.get());
        },
        contains: function(val) {
          return areEqual(this.val, val);
        },
        toString: function() {
          return "Identity(" + this.val + ")";
        },
        inspect: function() {
          return this.toString();
        },
        ap: function(applyWithFunction) {
          var value = this.val;
          return applyWithFunction.map(function(fn) {
            return fn(value);
          });
        },
        apTo: function(identityWithValue) {
          return identityWithValue.ap(this);
        },
        toArray: function() {
          return [this.get()];
        },
        toList: function() {
          return List(this.get(), Nil);
        },
        toSet: function() {
          return new Set(this);
        }
      };
      Identity2.fn.init.prototype = Identity2.fn;
      setType(Identity2, TYPES_NAMES.Identity);
      setType(Identity2.fn.init, TYPES_NAMES.Identity);
      Identity2.isInstance = isInstance(TYPES_NAMES.Identity);
      Identity2.isOfType = isOfType(TYPES_NAMES.Identity);
      function addFantasyLandAliases(type2) {
        ["equals", "map", "ap", "chain"].filter(function(method) {
          return isFunction2(type2.prototype[method]);
        }).forEach(function(method) {
          type2.prototype["fantasy-land/" + method] = type2.prototype[method];
        });
      }
      function addAliases(type2) {
        type2.prototype.flatMap = type2.prototype.chain = type2.prototype.bind;
        type2.pure = type2.unit = type2.of;
        type2.prototype.of = type2.of;
        if (isFunction2(type2.prototype.append)) {
          type2.prototype.concat = type2.prototype.append;
        }
        type2.prototype.point = type2.prototype.pure = type2.prototype.unit = type2.prototype.of;
      }
      function addFilterNot(type2) {
        if (isFunction2(type2.prototype.filter)) {
          type2.prototype.filterNot = function(fn) {
            return this.filter(function(a2) {
              return !fn(a2);
            });
          };
        }
      }
      function addMonadOps(type2) {
        type2.prototype.join = function() {
          return this.flatMap(idFunction);
        };
        type2.map2 = function(fn) {
          return function(ma, mb) {
            return ma.flatMap(function(a2) {
              return mb.map(function(b2) {
                return fn(a2, b2);
              });
            });
          };
        };
      }
      function addFunctorOps(type2) {
        if (!isFunction2(type2.prototype.map)) {
          type2.prototype.map = function(fn) {
            return this.bind(compose(this.of, fn));
          };
        }
      }
      function addApplicativeOps(type2) {
        type2.prototype.takeLeft = function(m) {
          return apply2(this, m, function(a2, b2) {
            return a2;
          });
        };
        type2.prototype.takeRight = function(m) {
          return apply2(this, m, function(a2, b2) {
            return b2;
          });
        };
      }
      function addCollectionPredicates(type2) {
        if (isFunction2(type2.prototype.toArray)) {
          type2.prototype.every = type2.prototype.forall = function(fn) {
            return this.toArray().every(fn);
          };
          type2.prototype.exists = function(fn) {
            return this.toArray().some(fn);
          };
        }
      }
      function makeIterable(type2) {
        if (isFunction2(type2.prototype.toArray)) {
          type2.prototype[Symbol.iterator] = function() {
            return this.toArray()[Symbol.iterator]();
          };
        }
      }
      function addToOperator(type2) {
        if (isFunction2(type2.prototype.toArray)) {
          type2.prototype.to = function(ctor) {
            return ctor(this);
          };
        }
      }
      function decorate2(type2) {
        addAliases(type2);
        addFilterNot(type2);
        addMonadOps(type2);
        addFunctorOps(type2);
        addApplicativeOps(type2);
        addCollectionPredicates(type2);
        addFantasyLandAliases(type2);
        makeIterable(type2);
        addToOperator(type2);
      }
      decorate2(MonadT);
      decorate2(Either);
      decorate2(Maybe);
      decorate2(IO);
      decorate2(NEL);
      decorate2(List);
      decorate2(Validation);
      decorate2(Reader);
      decorate2(Free);
      decorate2(Identity2);
      return Monet;
    });
  })(monet$1$1);
  return monet$1$1.exports;
}
var monetExports = requireMonet$1();
const utf8Decoder$1 = new TextDecoder("utf-8", { fatal: false });
class ProcessBase {
  constructor(server2, command) {
    __publicField2(this, "server");
    __publicField2(this, "command");
    this.server = server2;
    this.command = command;
  }
  prefixMessage(message) {
    const arg0Prefix = `${this.getName()}: `;
    message = message.startsWith(arg0Prefix) ? message.replace(arg0Prefix, "") : message;
    return monetExports.Maybe.fromUndefined(this.server.host).fold("")((host) => `${host}: `).concat(arg0Prefix, message);
  }
  getName() {
    return this.command.getName();
  }
  toString() {
    return `Process(${this.server}, ${this.command})`;
  }
}
class ExitedProcess extends ProcessBase {
  constructor(server2, command, exitStatus, stdout, stderr, killedBy) {
    super(server2, command);
    __publicField2(this, "exitStatus");
    __publicField2(this, "stdout");
    __publicField2(this, "stderr");
    __publicField2(this, "killedBy");
    this.exitStatus = exitStatus;
    this.stdout = stdout;
    this.stderr = stderr;
    this.killedBy = killedBy;
  }
  getStdout(binary = false) {
    if (binary) {
      return this.stdout;
    }
    return utf8Decoder$1.decode(this.stdout);
  }
  getStderr() {
    return this.stderr;
  }
  succeeded() {
    return this.exitStatus === 0;
  }
  failed() {
    return !this.succeeded();
  }
  logDebug(logger = console.log) {
    logger(`${this}:
stdout:
${this.getStdout()}
stderr:
${this.getStderr()}`);
  }
  toString() {
    const str = `Exited${super.toString()} (exited ${this.exitStatus})`;
    if (!this.killedBy)
      return str;
    return str + ` (killed by ${this.killedBy})`;
  }
}
class ParsingError extends Error {
  constructor(...args) {
    super(...args);
    this.name = "ParsingError";
  }
}
class ProcessError extends Error {
  constructor(...args) {
    super(...args);
    this.name = "ProcessError";
  }
}
class NonZeroExit extends ProcessError {
  constructor(...args) {
    super(...args);
    this.name = "ProcessError (exited non-zero)";
  }
}
class UnknownHost extends ProcessError {
  constructor(...args) {
    super(...args);
    this.name = "ProcessError (unknown/untrusted host)";
  }
}
class NotFound extends ProcessError {
  constructor(...args) {
    super(...args);
    this.name = "ProcessError (not found)";
  }
}
class AuthenticationFailed extends ProcessError {
  constructor(...args) {
    super(...args);
    this.name = "ProcessError (authentication failed)";
  }
}
class ValueError extends Error {
  constructor(...args) {
    super(...args);
    this.name = "ValueError";
  }
}
class SilentError extends Error {
  constructor(...args) {
    super(...args);
    this.name = "SilentError";
  }
}
class CancelledByUser extends SilentError {
  constructor(...args) {
    super(...args);
    this.name = "CancelledByUser";
  }
}
const defaultErrorConfig$1 = {
  withStackTrace: false
};
const createNeverThrowError$1 = (message, result, config = defaultErrorConfig$1) => {
  const data = result.isOk() ? { type: "Ok", value: result.value } : { type: "Err", value: result.error };
  const maybeStack = config.withStackTrace ? new Error().stack : void 0;
  return {
    data,
    message,
    stack: maybeStack
  };
};
function __awaiter$1(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
}
function __values$1(o2) {
  var s2 = typeof Symbol === "function" && Symbol.iterator, m = s2 && o2[s2], i2 = 0;
  if (m)
    return m.call(o2);
  if (o2 && typeof o2.length === "number")
    return {
      next: function() {
        if (o2 && i2 >= o2.length)
          o2 = void 0;
        return { value: o2 && o2[i2++], done: !o2 };
      }
    };
  throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __await$1(v2) {
  return this instanceof __await$1 ? (this.v = v2, this) : new __await$1(v2);
}
function __asyncGenerator$1(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i2, q = [];
  return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2;
  function verb(n2) {
    if (g[n2])
      i2[n2] = function(v2) {
        return new Promise(function(a2, b2) {
          q.push([n2, v2, a2, b2]) > 1 || resume(n2, v2);
        });
      };
  }
  function resume(n2, v2) {
    try {
      step(g[n2](v2));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r2) {
    r2.value instanceof __await$1 ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q[0][2], r2);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f2, v2) {
    if (f2(v2), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator$1(o2) {
  var i2, p2;
  return i2 = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i2[Symbol.iterator] = function() {
    return this;
  }, i2;
  function verb(n2, f2) {
    i2[n2] = o2[n2] ? function(v2) {
      return (p2 = !p2) ? { value: __await$1(o2[n2](v2)), done: n2 === "return" } : f2 ? f2(v2) : v2;
    } : f2;
  }
}
function __asyncValues$1(o2) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o2[Symbol.asyncIterator], i2;
  return m ? m.call(o2) : (o2 = typeof __values$1 === "function" ? __values$1(o2) : o2[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2);
  function verb(n2) {
    i2[n2] = o2[n2] && function(v2) {
      return new Promise(function(resolve2, reject) {
        v2 = o2[n2](v2), settle(resolve2, reject, v2.done, v2.value);
      });
    };
  }
  function settle(resolve2, reject, d2, v2) {
    Promise.resolve(v2).then(function(v22) {
      resolve2({ value: v22, done: d2 });
    }, reject);
  }
}
class ResultAsync$1 {
  constructor(res) {
    this._promise = res;
  }
  static fromSafePromise(promise) {
    const newPromise = promise.then((value) => new Ok$1(value));
    return new ResultAsync$1(newPromise);
  }
  static fromPromise(promise, errorFn) {
    const newPromise = promise.then((value) => new Ok$1(value)).catch((e) => new Err$1(errorFn(e)));
    return new ResultAsync$1(newPromise);
  }
  static fromThrowable(fn, errorFn) {
    return (...args) => {
      return new ResultAsync$1((() => __awaiter$1(this, void 0, void 0, function* () {
        try {
          return new Ok$1(yield fn(...args));
        } catch (error) {
          return new Err$1(errorFn ? errorFn(error) : error);
        }
      }))());
    };
  }
  static combine(asyncResultList) {
    return combineResultAsyncList$1(asyncResultList);
  }
  static combineWithAllErrors(asyncResultList) {
    return combineResultAsyncListWithAllErrors$1(asyncResultList);
  }
  map(f2) {
    return new ResultAsync$1(this._promise.then((res) => __awaiter$1(this, void 0, void 0, function* () {
      if (res.isErr()) {
        return new Err$1(res.error);
      }
      return new Ok$1(yield f2(res.value));
    })));
  }
  mapErr(f2) {
    return new ResultAsync$1(this._promise.then((res) => __awaiter$1(this, void 0, void 0, function* () {
      if (res.isOk()) {
        return new Ok$1(res.value);
      }
      return new Err$1(yield f2(res.error));
    })));
  }
  andThen(f2) {
    return new ResultAsync$1(this._promise.then((res) => {
      if (res.isErr()) {
        return new Err$1(res.error);
      }
      const newValue = f2(res.value);
      return newValue instanceof ResultAsync$1 ? newValue._promise : newValue;
    }));
  }
  orElse(f2) {
    return new ResultAsync$1(this._promise.then((res) => __awaiter$1(this, void 0, void 0, function* () {
      if (res.isErr()) {
        return f2(res.error);
      }
      return new Ok$1(res.value);
    })));
  }
  match(ok2, _err) {
    return this._promise.then((res) => res.match(ok2, _err));
  }
  unwrapOr(t) {
    return this._promise.then((res) => res.unwrapOr(t));
  }
  safeUnwrap() {
    return __asyncGenerator$1(this, arguments, function* safeUnwrap_1() {
      return yield __await$1(yield __await$1(yield* __asyncDelegator$1(__asyncValues$1(yield __await$1(this._promise.then((res) => res.safeUnwrap()))))));
    });
  }
  then(successCallback, failureCallback) {
    return this._promise.then(successCallback, failureCallback);
  }
}
const okAsync$1 = (value) => new ResultAsync$1(Promise.resolve(new Ok$1(value)));
const errAsync$1 = (err2) => new ResultAsync$1(Promise.resolve(new Err$1(err2)));
const combineResultList$1 = (resultList) => {
  let acc = ok$1([]);
  for (const result of resultList) {
    if (result.isErr()) {
      acc = err$1(result.error);
      break;
    } else {
      acc.map((list) => list.push(result.value));
    }
  }
  return acc;
};
const combineResultAsyncList$1 = (asyncResultList) => ResultAsync$1.fromSafePromise(Promise.all(asyncResultList)).andThen(combineResultList$1);
const combineResultListWithAllErrors$1 = (resultList) => {
  let acc = ok$1([]);
  for (const result of resultList) {
    if (result.isErr() && acc.isErr()) {
      acc.error.push(result.error);
    } else if (result.isErr() && acc.isOk()) {
      acc = err$1([result.error]);
    } else if (result.isOk() && acc.isOk()) {
      acc.value.push(result.value);
    }
  }
  return acc;
};
const combineResultAsyncListWithAllErrors$1 = (asyncResultList) => ResultAsync$1.fromSafePromise(Promise.all(asyncResultList)).andThen(combineResultListWithAllErrors$1);
var Result$1;
(function(Result2) {
  function fromThrowable(fn, errorFn) {
    return (...args) => {
      try {
        const result = fn(...args);
        return ok$1(result);
      } catch (e) {
        return err$1(errorFn ? errorFn(e) : e);
      }
    };
  }
  Result2.fromThrowable = fromThrowable;
  function combine(resultList) {
    return combineResultList$1(resultList);
  }
  Result2.combine = combine;
  function combineWithAllErrors(resultList) {
    return combineResultListWithAllErrors$1(resultList);
  }
  Result2.combineWithAllErrors = combineWithAllErrors;
})(Result$1 || (Result$1 = {}));
const ok$1 = (value) => new Ok$1(value);
const err$1 = (err2) => new Err$1(err2);
function safeTry(body) {
  const n2 = body().next();
  if (n2 instanceof Promise) {
    return n2.then((r2) => r2.value);
  }
  return n2.value;
}
class Ok$1 {
  constructor(value) {
    this.value = value;
  }
  isOk() {
    return true;
  }
  isErr() {
    return !this.isOk();
  }
  map(f2) {
    return ok$1(f2(this.value));
  }
  mapErr(_f) {
    return ok$1(this.value);
  }
  andThen(f2) {
    return f2(this.value);
  }
  orElse(_f) {
    return ok$1(this.value);
  }
  asyncAndThen(f2) {
    return f2(this.value);
  }
  asyncMap(f2) {
    return ResultAsync$1.fromSafePromise(f2(this.value));
  }
  unwrapOr(_v) {
    return this.value;
  }
  match(ok2, _err) {
    return ok2(this.value);
  }
  safeUnwrap() {
    const value = this.value;
    return function* () {
      return value;
    }();
  }
  _unsafeUnwrap(_2) {
    return this.value;
  }
  _unsafeUnwrapErr(config) {
    throw createNeverThrowError$1("Called `_unsafeUnwrapErr` on an Ok", this, config);
  }
}
class Err$1 {
  constructor(error) {
    this.error = error;
  }
  isOk() {
    return false;
  }
  isErr() {
    return !this.isOk();
  }
  map(_f) {
    return err$1(this.error);
  }
  mapErr(f2) {
    return err$1(f2(this.error));
  }
  andThen(_f) {
    return err$1(this.error);
  }
  orElse(f2) {
    return f2(this.error);
  }
  asyncAndThen(_f) {
    return errAsync$1(this.error);
  }
  asyncMap(_f) {
    return errAsync$1(this.error);
  }
  unwrapOr(v2) {
    return v2;
  }
  match(_ok, err2) {
    return err2(this.error);
  }
  safeUnwrap() {
    const error = this.error;
    return function* () {
      yield err$1(error);
      throw new Error("Do not use this generator out of `safeTry`");
    }();
  }
  _unsafeUnwrap(config) {
    throw createNeverThrowError$1("Called `_unsafeUnwrap` on an Err", this, config);
  }
  _unsafeUnwrapErr(_2) {
    return this.error;
  }
}
Result$1.fromThrowable;
function factory$5() {
  class CockpitProcess extends ProcessBase {
    constructor(server2, command, defer) {
      super(server2, command);
      __publicField2(this, "spawnHandle");
      if (defer !== true) {
        this.execute();
      }
    }
    execute() {
      const { environ, ...rest } = this.command.options;
      const opts = rest;
      if (environ) {
        opts.environ = Object.entries(environ).map(([key, value]) => `${key}=${value}`);
      }
      this.spawnHandle = cockpit.spawn(this.command.argv, {
        ...opts,
        binary: true,
        err: "message",
        host: this.server.host
      });
      return this;
    }
    wait(failIfNonZero = true) {
      return ResultAsync$1.fromPromise(
        new Promise((resolve2, reject) => {
          if (this.spawnHandle === void 0) {
            return reject(new ProcessError(this.prefixMessage("Process never started!")));
          }
          this.spawnHandle.then((stdout, stderr) => {
            const exitStatus = 0;
            resolve2(new ExitedProcess(this.server, this.command, exitStatus, stdout, stderr));
          }).catch((ex, stdout) => {
            if (ex.problem !== null && ex.problem !== void 0 || ex.exit_status === null || ex.exit_status === void 0) {
              switch (ex.problem) {
                case "unknown-host":
                  return reject(new UnknownHost(`${this.server.host}: ${ex.message}`));
                case "not-found":
                  return reject(new NotFound(this.prefixMessage(ex.message)));
                case "authentication-failed":
                  return reject(new AuthenticationFailed(`${this.server.host}: ${ex.message}`));
                default:
                  return reject(
                    new ProcessError(`${this.prefixMessage(ex.message)} (${ex.problem})`)
                  );
              }
            }
            const exitedProcess = new ExitedProcess(
              this.server,
              this.command,
              ex.exit_status,
              stdout,
              ex.message
            );
            if (failIfNonZero && ex.exit_status !== 0) {
              exitedProcess.logDebug(console.error);
              return reject(
                new NonZeroExit(this.prefixMessage(`${ex.message} (${ex.exit_status})`))
              );
            }
            resolve2(exitedProcess);
          });
        }),
        (e) => {
          if (e instanceof ProcessError) {
            return e;
          }
          return new ProcessError(this.prefixMessage("Unknown error"), {
            cause: e
          });
        }
      );
    }
    write(data, stream = false) {
      if (this.spawnHandle === void 0) {
        return err$1(new ProcessError(this.prefixMessage("process not running!")));
      }
      this.spawnHandle.input(data, stream);
      return ok$1(null);
    }
    terminate() {
      if (this.spawnHandle) {
        this.spawnHandle.close("terminated");
      }
      return this;
    }
    close() {
      if (this.spawnHandle) {
        this.spawnHandle.close();
      }
      return this;
    }
    streamBinary(callback) {
      if (this.spawnHandle === void 0) {
        return err$1(new ProcessError(this.prefixMessage("process not running!")));
      }
      this.spawnHandle.stream(callback);
      return ok$1(null);
    }
  }
  const HoustonDriverCockpit = {
    Process: CockpitProcess,
    downloadCommandOutputURL(server2, command, filename) {
      const query = window.btoa(
        JSON.stringify({
          ...command.options,
          err: "message",
          host: server2.host,
          payload: "stream",
          binary: "raw",
          spawn: command.argv,
          external: {
            "content-disposition": 'attachment; filename="' + encodeURIComponent(filename) + '"',
            "content-type": "application/x-xz, application/octet-stream"
          }
        })
      );
      const prefix = new URL(cockpit.transport.uri("channel/" + cockpit.transport.csrf_token)).pathname;
      const url = prefix + "?" + query;
      return url;
    },
    gettext: cockpit.gettext,
    localStorage: cockpit.localStorage,
    sessionStorage: cockpit.sessionStorage
  };
  return HoustonDriverCockpit;
}
function factory$4() {
  const child_process = require("child_process");
  const { Buffer: Buffer2 } = require("node:buffer");
  class NodeProcessLinux extends ProcessBase {
    constructor(server2, command, defer) {
      super(server2, command);
      __publicField2(this, "child");
      __publicField2(this, "promise");
      __publicField2(this, "stdoutBuffer");
      __publicField2(this, "stderrBuffer");
      __publicField2(this, "streamCallback");
      this.stdoutBuffer = Buffer2.alloc(0);
      this.stderrBuffer = "";
      this.streamCallback = (data) => {
        this.stdoutBuffer = Buffer2.concat([this.stdoutBuffer, data]);
      };
      if (defer !== true) {
        this.execute();
      }
    }
    execute() {
      const argv = this.command.argv;
      if (argv.length < 1) {
        throw new ProcessError("Empty argv!");
      }
      const argv0 = argv[0];
      if (this.command.options.superuser) {
        argv.unshift("pkexec");
      }
      if (this.server.host && this.server.host !== "localhost") {
        throw new ProcessError("remote host execution not implemented");
      }
      const [command, ...args] = this.command.argv;
      const opts = {
        argv0,
        windowsHide: true
      };
      if (this.command.options.directory) {
        opts.cwd = this.command.options.directory;
      }
      if (this.command.options.environ) {
        opts.env = this.command.options.environ;
      }
      if (this.command.options.pty) {
        throw new ProcessError("pty not supported!");
      }
      this.stdoutBuffer = Buffer2.alloc(0);
      this.stderrBuffer = "";
      this.child = child_process.spawn(command, args, { ...opts, stdio: ["pipe", "pipe", "pipe"] });
      this.child.stderr.setEncoding("utf-8");
      this.child.stdout.on("data", (chunk) => {
        this.streamCallback(chunk);
      });
      this.child.stderr.on("data", (chunk) => {
        this.stderrBuffer += chunk;
      });
      this.promise = new Promise((resolve2, reject) => {
        if (this.child === void 0) {
          return reject(new ProcessError(this.prefixMessage("Process never started!")));
        }
        const child = this.child;
        child.on("close", async (code, signal) => {
          if (code === null) {
            return reject(
              new ProcessError(`${this.prefixMessage("terminated by signal")} (${signal})`)
            );
          }
          const exitedProcess = new ExitedProcess(
            this.server,
            this.command,
            code,
            Uint8Array.from(this.stdoutBuffer),
            this.stderrBuffer,
            signal != null ? signal : void 0
          );
          resolve2(exitedProcess);
        });
      });
      return this;
    }
    wait(failIfNonZero = true) {
      var _a2;
      if (this.promise === void 0) {
        return errAsync$1(new ProcessError(this.prefixMessage("Process never started!")));
      }
      return ResultAsync$1.fromPromise(
        (_a2 = this.promise) == null ? void 0 : _a2.then((exitedProcess) => {
          if (failIfNonZero && exitedProcess.exitStatus !== 0) {
            exitedProcess.logDebug(console.error);
            return Promise.reject(
              new NonZeroExit(
                this.prefixMessage(`${exitedProcess.getStderr()} (${exitedProcess.exitStatus})`)
              )
            );
          }
          return Promise.resolve(exitedProcess);
        }),
        (e) => {
          if (e instanceof ProcessError) {
            return e;
          }
          return new ProcessError(this.prefixMessage("Unknown error"), {
            cause: e
          });
        }
      );
    }
    write(data, stream = false) {
      if (this.child === void 0) {
        return err$1(new ProcessError(this.prefixMessage("process not running!")));
      }
      this.child.stdin.write(data);
      if (stream === false) {
        this.child.stdin.end();
      }
      return ok$1(null);
    }
    terminate() {
      var _a2;
      (_a2 = this.child) == null ? void 0 : _a2.kill();
      return this;
    }
    close() {
      var _a2, _b;
      if (((_a2 = this.child) == null ? void 0 : _a2.stdin.closed) === false) {
        this.child.stdin.end();
      }
      if (((_b = this.child) == null ? void 0 : _b.stdout.closed) === false) {
        this.child.stdout.destroy();
      }
      return this;
    }
    streamBinary(callback) {
      this.streamCallback = (data) => {
        callback(Uint8Array.from(data));
      };
      return ok$1(null);
    }
  }
  return NodeProcessLinux;
}
function factory$3() {
  const child_process = require("child_process");
  const { Buffer: Buffer2 } = require("node:buffer");
  class NodeProcessWindows extends ProcessBase {
    constructor(server2, command, defer) {
      super(server2, command);
      __publicField2(this, "child");
      __publicField2(this, "promise");
      __publicField2(this, "stdoutBuffer");
      __publicField2(this, "stderrBuffer");
      __publicField2(this, "streamCallback");
      this.stdoutBuffer = Buffer2.alloc(0);
      this.stderrBuffer = "";
      this.streamCallback = (data) => {
        this.stdoutBuffer = Buffer2.concat([this.stdoutBuffer, data]);
      };
      if (defer !== true) {
        this.execute();
      }
    }
    execute() {
      const argv = this.command.argv;
      if (argv.length < 1) {
        throw new ProcessError("Empty argv!");
      }
      const argv0 = argv[0];
      if (this.server.host && this.server.host !== "localhost") {
        throw new ProcessError("Remote host execution not implemented");
      }
      const [command, ...args] = this.command.argv;
      const opts = {
        argv0,
        windowsHide: true
      };
      if (this.command.options.directory) {
        opts.cwd = this.command.options.directory;
      }
      if (this.command.options.environ) {
        opts.env = this.command.options.environ;
      }
      this.stdoutBuffer = Buffer2.alloc(0);
      this.stderrBuffer = "";
      this.child = child_process.spawn(command, args, { ...opts, stdio: ["pipe", "pipe", "pipe"] });
      this.child.stderr.setEncoding("utf-8");
      this.child.stdout.on("data", (chunk) => {
        this.streamCallback(chunk);
      });
      this.child.stderr.on("data", (chunk) => {
        this.stderrBuffer += chunk;
      });
      this.promise = new Promise((resolve2, reject) => {
        if (this.child === void 0) {
          return reject(new ProcessError(this.prefixMessage("Process never started!")));
        }
        const child = this.child;
        child.on("close", async (code, signal) => {
          if (code === null) {
            return reject(
              new ProcessError(`${this.prefixMessage("terminated by signal")} (${signal})`)
            );
          }
          const exitedProcess = new ExitedProcess(
            this.server,
            this.command,
            code,
            Uint8Array.from(this.stdoutBuffer),
            this.stderrBuffer,
            signal != null ? signal : void 0
          );
          resolve2(exitedProcess);
        });
      });
      return this;
    }
    wait(failIfNonZero = true) {
      var _a2;
      if (this.promise === void 0) {
        return errAsync$1(new ProcessError(this.prefixMessage("Process never started!")));
      }
      return ResultAsync$1.fromPromise(
        (_a2 = this.promise) == null ? void 0 : _a2.then((exitedProcess) => {
          if (failIfNonZero && exitedProcess.exitStatus !== 0) {
            exitedProcess.logDebug(console.error);
            return Promise.reject(
              new NonZeroExit(
                this.prefixMessage(`${exitedProcess.getStderr()} (${exitedProcess.exitStatus})`)
              )
            );
          }
          return Promise.resolve(exitedProcess);
        }),
        (e) => {
          if (e instanceof ProcessError) {
            return e;
          }
          return new ProcessError(this.prefixMessage("Unknown error"), {
            cause: e
          });
        }
      );
    }
    write(data, stream = false) {
      if (this.child === void 0) {
        return err$1(new ProcessError(this.prefixMessage("process not running!")));
      }
      this.child.stdin.write(data);
      if (stream === false) {
        this.child.stdin.end();
      }
      return ok$1(null);
    }
    terminate() {
      var _a2;
      (_a2 = this.child) == null ? void 0 : _a2.kill();
      return this;
    }
    close() {
      var _a2, _b;
      if (((_a2 = this.child) == null ? void 0 : _a2.stdin.closed) === false) {
        this.child.stdin.end();
      }
      if (((_b = this.child) == null ? void 0 : _b.stdout.closed) === false) {
        this.child.stdout.destroy();
      }
      return this;
    }
    streamBinary(callback) {
      this.streamCallback = (data) => {
        callback(Uint8Array.from(data));
      };
      return ok$1(null);
    }
  }
  return NodeProcessWindows;
}
function factory$2() {
  const localstorage = require("node-localstorage");
  const fs = require("fs");
  const os = require("os");
  const path = require("path");
  let Process2;
  switch (process.platform) {
    case "linux":
      Process2 = factory$4();
      break;
    case "darwin":
      Process2 = factory$4();
      break;
    case "win32":
      Process2 = factory$3();
      break;
    default:
      throw new Error("No Process implementation for platform " + process.platform);
  }
  const datadir = path.join(os.homedir(), ".houston");
  if (!fs.existsSync(datadir)) {
    fs.mkdirSync(datadir, { mode: 448 });
  }
  const tmpdir = fs.mkdtempSync(path.join(os.tmpdir(), "houston"));
  const cleanup = () => {
    fs.rmSync(tmpdir, { recursive: true, force: true });
  };
  process.on("exit", cleanup);
  const gettext = (...args) => args.at(-1);
  const localStorage2 = new localstorage.LocalStorage(path.join(datadir, "localStorage"));
  const sessionStorage = new localstorage.LocalStorage(path.join(tmpdir, "sessionStorage"));
  return {
    Process: Process2,
    downloadCommandOutputURL(..._2) {
      throw new Error("not implemented");
    },
    localStorage: localStorage2,
    sessionStorage,
    gettext
  };
}
function factory$1() {
  class WebProcess extends ProcessBase {
    constructor(server2, command, defer) {
      super(server2, command);
      __publicField2(this, "fakeOutput", new Uint8Array());
      __publicField2(this, "stderr", "");
      if (defer !== true) {
        this.execute();
      }
    }
    execute() {
      console.warn("WebProcess.execute(): no-op in browser");
      return this;
    }
    wait(_failIfNonZero = true) {
      console.warn("WebProcess.wait(): returning dummy ExitedProcess");
      const fakeExited = new ExitedProcess(
        this.server,
        this.command,
        0,
        this.fakeOutput,
        this.stderr,
        void 0
      );
      return ResultAsync$1.fromPromise(
        Promise.resolve(fakeExited),
        () => new ProcessError("wait() failed in browser")
      );
    }
    write(_data, _stream = false) {
      console.warn("WebProcess.write(): not supported in browser");
      return err$1(new ProcessError("Cannot write to process in browser"));
    }
    terminate() {
      console.warn("WebProcess.terminate(): no-op in browser");
      return this;
    }
    close() {
      console.warn("WebProcess.close(): no-op in browser");
      return this;
    }
    streamBinary(_callback) {
      console.warn("WebProcess.streamBinary(): storing callback but no actual data will stream");
      return ok$1(null);
    }
  }
  return WebProcess;
}
function factory() {
  const Process2 = factory$1();
  const gettext = (...args) => args.at(-1);
  return {
    Process: Process2,
    downloadCommandOutputURL(..._2) {
      throw new Error("Not implemented in browser");
    },
    localStorage: window.localStorage,
    sessionStorage: window.sessionStorage,
    gettext
  };
}
function determineHoustonDriver() {
  var _a2;
  if (typeof window !== "undefined") {
    if ("cockpit" in window) {
      return factory$5();
    }
  }
  if (typeof process === "object" && ((_a2 = process.release) == null ? void 0 : _a2.name) === "node") {
    return factory$2();
  }
  return factory();
}
const HoustonDriver$1 = determineHoustonDriver();
class Command {
  constructor(argv, opts = {}) {
    __publicField2(this, "argv");
    __publicField2(this, "options");
    this.argv = argv;
    this.options = opts;
  }
  getName() {
    var _a2, _b;
    return (_b = (_a2 = this.options.arg0) != null ? _a2 : this.argv[0]) != null ? _b : "";
  }
  toString() {
    return `Command(${JSON.stringify(this.argv)}, ${JSON.stringify(this.options)})`;
  }
}
class BashCommand extends Command {
  constructor(script2, args = [], opts = {}) {
    var _a2;
    (_a2 = opts.arg0) != null ? _a2 : opts.arg0 = "HoustonBashCommand";
    super(["/usr/bin/env", "bash", "-c", script2, opts.arg0, ...args], opts);
  }
}
class PythonCommand extends Command {
  constructor(script2, args = [], opts = {}) {
    var _a2;
    (_a2 = opts.arg0) != null ? _a2 : opts.arg0 = "HoustonPythonCommand";
    super(["/usr/bin/env", "python3", "-c", script2, ...args], opts);
  }
}
const utf8Decoder = new TextDecoder("utf-8", { fatal: false });
const utf8Encoder = new TextEncoder();
const DriverProcess = HoustonDriver$1.Process;
class Process extends DriverProcess {
  write(data, stream = false) {
    if (typeof data === "string") {
      data = utf8Encoder.encode(data);
    }
    return super.write(data, stream);
  }
  stream(callback) {
    return this.streamBinary((output) => callback(utf8Decoder.decode(output)));
  }
}
function User(server2, login, uid2, gid, name, home, shell) {
  return {
    server: server2,
    login,
    uid: uid2,
    gid,
    name,
    home,
    shell
  };
}
function isLocalUser(user) {
  return [user.login, user.gid, user.name, user.home, user.shell].every(
    (prop) => prop !== void 0
  );
}
function Group(server2, name, gid, members) {
  return {
    server: server2,
    name,
    gid,
    members
  };
}
function isLocalGroup(group) {
  return [group.name, group.members].every((prop) => prop !== void 0);
}
const parseFileSystemType = (type2) => {
  switch (type2) {
    case "zfs":
      return "zfs";
    case "ceph":
      return "ceph";
    case "cifs":
      return "cifs";
    default:
      return "other";
  }
};
var RegexSnippets;
((RegexSnippets2) => {
  RegexSnippets2.newlineSplitter = /[\r\n]+/;
  RegexSnippets2.keyValueSplitter = /=(.*)/;
})(RegexSnippets || (RegexSnippets = {}));
function KeyValueSyntax(opts = {}) {
  let {
    indent = "",
    commentRegex = /^\s*[#;]/,
    trailingNewline = true,
    duplicateKey = "overwrite"
  } = opts;
  if (typeof indent === "number") {
    indent = " ".repeat(indent);
  }
  return {
    apply: (text) => Result$1.combine(
      text.split(RegexSnippets.newlineSplitter).map((line, lineIndex) => {
        if (commentRegex.test(line) || line.trim() === "") {
          return ok$1(null);
        }
        const [key, value] = line.split(RegexSnippets.keyValueSplitter).map((s2) => s2.trim());
        if (key === void 0 || value === void 0 || key === "") {
          return err$1(
            new ParsingError(`Invalid key = value format at line ${lineIndex}:
${line}`)
          );
        }
        return ok$1({ key, value });
      })
    ).andThen((keyValuePairs) => {
      const data = opts.duplicateKey === "append" ? {} : {};
      for (const [index2, { key, value }] of keyValuePairs.filter((kv) => kv !== null).entries()) {
        const currentValue = data[key];
        if (duplicateKey === "append") {
          if (currentValue === void 0) {
            data[key] = value;
          } else if (typeof currentValue === "string") {
            data[key] = [currentValue, value];
          } else if (Array.isArray(currentValue)) {
            data[key] = [...currentValue, value];
          }
        } else if (currentValue === void 0 || duplicateKey === "overwrite") {
          data[key] = value;
        } else if (duplicateKey === "error") {
          return err$1(new ParsingError(`Duplicate key '${key}' at line ${index2}`));
        }
      }
      return ok$1(data);
    }),
    unapply: (data) => ok$1(
      Object.entries(data).map(([key, values]) => [values].flat().map((value) => `${indent}${key} = ${value}`)).flat().join("\n") + (trailingNewline ? "\n" : "")
    )
  };
}
const Identity = (value) => ({
  flatten: () => value,
  flatMap: (func) => func(value),
  map: (func) => Identity.of(func(value))
});
Identity.of = Identity;
var StringUtils;
((StringUtils2) => {
  function trim(text) {
    if (Array.isArray(text)) {
      return text.map((s2) => s2.trim());
    }
    return text.trim();
  }
  StringUtils2.trim = trim;
  function joinEscapedNewlines(lines) {
    return lines.reduce((lines2, line) => {
      const previousLine = lines2[lines2.length - 1];
      if (previousLine == null ? void 0 : previousLine.endsWith("\\")) {
        lines2[lines2.length - 1] = `${previousLine.slice(0, -1)}${line.trimStart()}`;
      } else {
        lines2.push(line);
      }
      return lines2;
    }, []);
  }
  StringUtils2.joinEscapedNewlines = joinEscapedNewlines;
  function splitBy(splitter) {
    return (text) => text.split(splitter);
  }
  StringUtils2.splitBy = splitBy;
  function filter(...filters) {
    return (a2) => a2.filter((e) => filters.every((f2) => f2(e)));
  }
  StringUtils2.filter = filter;
  function commentFilter(delimiter = "#") {
    return (s2) => s2.trimStart().startsWith(delimiter);
  }
  StringUtils2.commentFilter = commentFilter;
  function nonEmptyFilter() {
    return (s2) => !!s2.trim();
  }
  StringUtils2.nonEmptyFilter = nonEmptyFilter;
  function regexFilter(re, negate = false) {
    return (s2) => re.test(s2) != negate;
  }
  StringUtils2.regexFilter = regexFilter;
})(StringUtils || (StringUtils = {}));
class ModeOctet {
  constructor(octet) {
    __publicField2(this, "r");
    __publicField2(this, "w");
    __publicField2(this, "x");
    this.r = (octet & 4) !== 0;
    this.w = (octet & 2) !== 0;
    this.x = (octet & 1) !== 0;
  }
  toNumber() {
    return (this.r ? 4 : 0) | (this.w ? 2 : 0) | (this.x ? 1 : 0);
  }
  toString() {
    return `${this.r ? "r" : "-"}${this.w ? "w" : "-"}${this.x ? "x" : "-"}`;
  }
  toOctal() {
    return this.toNumber().toString(8);
  }
}
class Mode {
  constructor(mode) {
    __publicField2(this, "owner");
    __publicField2(this, "group");
    __publicField2(this, "other");
    this.owner = new ModeOctet(mode >> 6 & 7);
    this.group = new ModeOctet(mode >> 3 & 7);
    this.other = new ModeOctet(mode >> 0 & 7);
  }
  toNumber() {
    return this.owner.toNumber() << 6 | this.group.toNumber() << 3 | this.other.toNumber();
  }
  toString() {
    return `${this.owner.toString()}${this.group.toString()}${this.other.toString()} (0${this.toOctal()})`;
  }
  toOctal() {
    return this.toNumber().toString(8);
  }
}
class Ownership {
  constructor(userOrGroup, group) {
    __publicField2(this, "user");
    __publicField2(this, "group");
    if ("uid" in userOrGroup) {
      this.user = userOrGroup;
      this.group = group;
    } else {
      this.group = userOrGroup;
    }
  }
  toChownString(human) {
    var _a2, _b, _c, _d;
    if (human) {
      return `${this.user ? (_a2 = this.user.login) != null ? _a2 : this.user.uid.toString() : ""}:${this.group ? (_b = this.group.name) != null ? _b : this.group.gid.toString() : ""}`;
    }
    return `${this.user ? (_c = this.user.uid.toString()) != null ? _c : this.user.login : ""}:${this.group ? (_d = this.group.gid.toString()) != null ? _d : this.group.name : ""}`;
  }
}
class Path {
  constructor(path) {
    __publicField2(this, "path");
    if (path instanceof Path) {
      this.path = path.path;
    } else if (typeof path === "string") {
      this.path = path.replace(/\/+/g, "/");
      if (this.path.length > 1) {
        this.path = this.path.replace(/\/$/, "");
      }
    } else {
      throw TypeError(`typeof path = ${typeof path} != Path|string`);
    }
  }
  isAbsolute() {
    return this.path[0] === "/";
  }
  isRelative() {
    return !this.isAbsolute();
  }
  parent() {
    const lastSeparatorIndex = this.path.lastIndexOf("/");
    if (lastSeparatorIndex === -1) {
      return new Path(this.path + "/..");
    }
    if (lastSeparatorIndex === 0) {
      return new Path("/");
    }
    return new Path(this.path.substring(0, lastSeparatorIndex));
  }
  basename() {
    return this.path.split("/").pop();
  }
  testOn(server2, testFlag, commandOptions) {
    return server2.execute(new Command(["test", testFlag, this.path], commandOptions), false).map((proc) => proc.exitStatus === 0);
  }
  isBlockOn(server2, commandOptions) {
    return this.testOn(server2, "-b", commandOptions);
  }
  isCharacterOn(server2, commandOptions) {
    return this.testOn(server2, "-c", commandOptions);
  }
  isDirectoryOn(server2, commandOptions) {
    return this.testOn(server2, "-d", commandOptions);
  }
  existsOn(server2, commandOptions) {
    return this.testOn(server2, "-e", commandOptions);
  }
  isFileOn(server2, commandOptions) {
    return this.testOn(server2, "-f", commandOptions);
  }
  isSymbolicLinkOn(server2, commandOptions) {
    return this.testOn(server2, "-L", commandOptions);
  }
  isPipeOn(server2, commandOptions) {
    return this.testOn(server2, "-p", commandOptions);
  }
  isSocketOn(server2, commandOptions) {
    return this.testOn(server2, "-S", commandOptions);
  }
  createOn(server2, type2, parents, commandOptions) {
    const createResult = (parents ? server2.execute(new Command(["mkdir", "-p", this.parent().path], commandOptions)).map(() => null) : okAsync$1(null)).map(() => new Command([type2 === "file" ? "touch" : "mkdir", this.path], commandOptions)).andThen((cmd) => server2.execute(cmd, true));
    return type2 === "file" ? createResult.map(() => new File(server2, this)) : createResult.map(() => new Directory(server2, this));
  }
  getFilesystemMountOn(server2, commandOptions) {
    return server2.execute(new Command(["df", "--output=source,target,fstype", this.path], commandOptions)).map((proc) => proc.getStdout().trim().split(RegexSnippets.newlineSplitter)[1]).andThen((tokens) => {
      var _a2;
      const [source, mountpoint, realType] = (_a2 = tokens == null ? void 0 : tokens.split(/\s+/g)) != null ? _a2 : [];
      if (source === void 0 || mountpoint === void 0 || realType === void 0) {
        return errAsync$1(new ParsingError(`Failed to parse filesystem mount:
${tokens}`));
      }
      return okAsync$1({
        filesystem: {
          source,
          type: parseFileSystemType(realType),
          realType
        },
        mountpoint
      });
    });
  }
  resolveOn(server2, mustExist = false, commandOptions) {
    return server2.execute(
      new Command(
        ["realpath", mustExist ? "--canonicalize-existing" : "--canonicalize-missing", this.path],
        commandOptions
      )
    ).map((proc) => new Path(proc.getStdout().trim()));
  }
  findLongestExistingStemOn(server2, commandOptions) {
    if (!this.isAbsolute()) {
      return errAsync$1(
        new ProcessError(`Path.findLongestExistingStemOn: Path not absolute: ${this.path}`)
      );
    }
    let path = this;
    return new ResultAsync$1(
      safeTry(async function* () {
        while (path.path !== "/") {
          if (yield* path.existsOn(server2, commandOptions).safeUnwrap()) {
            return ok$1(path);
          }
          path = path.parent();
        }
        return ok$1(path);
      })
    );
  }
  getModeOn(server2, commandOptions) {
    return server2.execute(new Command(["stat", "--printf", "%#a", "--", this.path], commandOptions)).map((proc) => parseInt(proc.getStdout().trim(), 8)).andThen((mode) => isNaN(mode) ? err$1(new ParsingError("Failed to parse mode")) : ok$1(mode)).map((mode) => new Mode(mode));
  }
  setModeOn(server2, mode, commandOptions) {
    mode = typeof mode === "number" ? new Mode(mode) : mode;
    return server2.execute(new Command(["chmod", "--", mode.toOctal(), this.path], commandOptions)).map(() => this);
  }
  getOwnershipOn(server2, commandOptions) {
    return server2.execute(new Command(["stat", "--printf", "%u:%g", "--", this.path], commandOptions)).andThen((proc) => {
      const ownershipString = proc.getStdout().trim();
      const [uid2, gid] = ownershipString.split(":").map((s2) => parseInt(s2));
      if (uid2 === void 0 || gid === void 0 || isNaN(uid2) || isNaN(gid)) {
        return err$1(new ParsingError(`Failed to parse ownership from ${ownershipString}`));
      }
      return ResultAsync$1.combine([server2.getUserByUid(uid2), server2.getGroupByGid(gid)]).map(
        ([user, group]) => new Ownership(user, group)
      );
    });
  }
  setOwnershipOn(server2, ownership, commandOptions) {
    return server2.execute(new Command(["chown", "--", ownership.toChownString(), this.path], commandOptions)).map(() => this);
  }
  getExtendedAttributesOn(server2, commandOptions) {
    const kvParser = KeyValueSyntax({ duplicateKey: "error" });
    return server2.execute(new Command(["getfattr", "--dump", "--match=-", "--", this.path], commandOptions)).map((proc) => proc.getStdout()).andThen(kvParser.apply);
  }
  setExtendedAttributesOn(server2, attributes, commandOptions) {
    return ResultAsync$1.combine(
      Object.entries(attributes).map(
        ([key, value]) => this.setExtendedAttributeOn(server2, key, value, commandOptions)
      )
    ).map(() => this);
  }
  getExtendedAttributeOn(server2, attributeName, commandOptions) {
    return server2.execute(
      new Command(
        [
          "getfattr",
          `--name=${attributeName}`,
          "--only-values",
          "--absolute-names",
          "--",
          this.path
        ],
        commandOptions
      ),
      false
    ).andThen(
      (proc) => proc.exitStatus === 0 ? ok$1(monetExports.Some(proc.getStdout().trim())) : proc.getStderr().trim().endsWith("No such attribute") ? ok$1(monetExports.None()) : err$1(new ProcessError(proc.getStderr().trim()))
    );
  }
  setExtendedAttributeOn(server2, attributeName, attributeValue, commandOptions) {
    return server2.execute(
      new Command(
        ["setfattr", `--name=${attributeName}`, `--value=${attributeValue}`, "--", this.path],
        commandOptions
      )
    ).map(() => this);
  }
  removeExtendedAttributeOn(server2, attributeName, commandOptions) {
    return server2.execute(
      new Command(["setfattr", `--remove=${attributeName}`, "--", this.path], commandOptions)
    ).map(() => this);
  }
}
class FileSystemNode extends Path {
  constructor(serverOrNode, path) {
    var __super = (...args) => {
      super(...args);
      __publicField2(this, "server");
      return this;
    };
    if (serverOrNode instanceof Server) {
      if (path === void 0) {
        throw TypeError("path undefined!");
      }
      __super(path);
      this.server = serverOrNode;
    } else {
      __super(serverOrNode.path);
      this.server = serverOrNode.server;
    }
  }
  parent() {
    return new FileSystemNode(this.server, super.parent());
  }
  isBlock(commandOptions) {
    return this.isBlockOn(this.server, commandOptions);
  }
  isCharacter(commandOptions) {
    return this.isCharacterOn(this.server, commandOptions);
  }
  isDirectory(commandOptions) {
    return this.isDirectoryOn(this.server, commandOptions);
  }
  exists(commandOptions) {
    return this.existsOn(this.server, commandOptions);
  }
  isFile(commandOptions) {
    return this.isFileOn(this.server, commandOptions);
  }
  isSymbolicLink(commandOptions) {
    return this.isSymbolicLinkOn(this.server, commandOptions);
  }
  isPipe(commandOptions) {
    return this.isPipeOn(this.server, commandOptions);
  }
  isSocket(commandOptions) {
    return this.isSocketOn(this.server, commandOptions);
  }
  getFilesystemMount(commandOptions) {
    return this.getFilesystemMountOn(this.server, commandOptions);
  }
  resolve(mustExist = false, commandOptions) {
    return this.resolveOn(this.server, mustExist, commandOptions).map(
      (path) => new FileSystemNode(this.server, path)
    );
  }
  findLongestExistingStem(commandOptions) {
    return this.findLongestExistingStemOn(this.server, commandOptions).map(
      (path) => new FileSystemNode(this.server, path)
    );
  }
  getMode(commandOptions) {
    return this.getModeOn(this.server, commandOptions);
  }
  setMode(mode, commandOptions) {
    return (mode instanceof FileSystemNode ? mode.getMode(commandOptions) : okAsync$1(mode)).andThen((mode2) => this.setModeOn(this.server, mode2, commandOptions));
  }
  getOwnership(commandOptions) {
    return this.getOwnershipOn(this.server, commandOptions);
  }
  setOwnership(ownership, commandOptions) {
    return (ownership instanceof FileSystemNode ? ownership.getOwnership(commandOptions) : okAsync$1(ownership)).andThen((ownership2) => this.setOwnershipOn(this.server, ownership2, commandOptions));
  }
  assertExists(expected = true, commandOptions) {
    return this.exists(commandOptions).andThen(
      (exists) => exists === expected ? ok$1(this) : err$1(new ProcessError(`assertExists(${expected}) failed: ${this.path}`))
    );
  }
  assertIsFile(commandOptions) {
    return this.isFile(commandOptions).andThen(
      (isFile) => isFile ? ok$1(new File(this)) : err$1(new ProcessError(`assertIsFile failed: ${this.path}`))
    );
  }
  assertIsDirectory(commandOptions) {
    return this.isDirectory(commandOptions).andThen(
      (isDirectory) => isDirectory ? ok$1(new Directory(this)) : err$1(new ProcessError(`assertIsDirectory failed: ${this.path}`))
    );
  }
  getExtendedAttributes(commandOptions) {
    return this.getExtendedAttributesOn(this.server, commandOptions);
  }
  setExtendedAttributes(attributes, commandOptions) {
    return this.setExtendedAttributesOn(this.server, attributes, commandOptions);
  }
  getExtendedAttribute(attributeName, commandOptions) {
    return this.getExtendedAttributeOn(this.server, attributeName, commandOptions);
  }
  setExtendedAttribute(attributeName, attributeValue, commandOptions) {
    return this.setExtendedAttributeOn(this.server, attributeName, attributeValue, commandOptions);
  }
  removeExtendedAttribute(attributeName, commandOptions) {
    return this.removeExtendedAttributeOn(this.server, attributeName, commandOptions);
  }
  move(newPath, commandOptions = {}) {
    const { existing, ...options } = {
      existing: "fail",
      ...commandOptions
    };
    const existingFlagsLUT = {
      fail: ["--no-clobber"],
      clobber: ["--force"],
      backup: ["--backup=numbered"]
    };
    return this.server.execute(
      new Command(
        ["mv", ...existingFlagsLUT[existing], "--no-target-directory", "--", this.path, newPath],
        options
      )
    ).map(() => new FileSystemNode(this.server, newPath));
  }
}
class File extends FileSystemNode {
  create(parents, commandOptions) {
    return this.createOn(this.server, "file", parents, commandOptions);
  }
  remove(commandOptions) {
    return this.server.execute(new Command(["rm", this.path], commandOptions), true).map(() => this);
  }
  read(commandOptions = {}) {
    const { binary, ...options } = commandOptions;
    const procResult = this.server.execute(new Command(["cat", this.path], options));
    if (binary) {
      return procResult.map((p2) => p2.getStdout(true));
    }
    return procResult.map((p2) => p2.getStdout(false));
  }
  write(content, commandOptions = {}) {
    const { append, ...options } = commandOptions;
    const proc = this.server.spawnProcess(
      new Command(
        [
          "dd",
          "status=none",
          `of=${this.path}`,
          ...append ? ["oflag=append", "conv=notrunc"] : []
        ],
        options
      )
    );
    proc.write(content, false);
    return proc.wait(true).map(() => this);
  }
  move(...args) {
    return super.move(...args).map((node) => new File(node));
  }
  replace(newContentOrReplacer, commandOptions = {}) {
    const { binary, backup, ...options } = commandOptions;
    return File.makeTemp(this.server, this.parent().path, options).andThen((tempFile) => {
      if (typeof newContentOrReplacer === "function") {
        if (binary) {
          return this.read({ ...options, binary: true }).map(newContentOrReplacer).andThen((newContent) => tempFile.write(newContent, options));
        }
        return this.read({ ...options, binary: false }).map(newContentOrReplacer).andThen((newContent) => tempFile.write(newContent, options));
      }
      return okAsync$1(newContentOrReplacer).andThen(
        (newContent) => tempFile.write(newContent, options)
      );
    }).andThen((tempFile) => tempFile.setOwnership(this, options)).andThen((tempFile) => tempFile.setMode(this, options)).andThen(
      (tempFile) => tempFile.move(this.path, {
        ...options,
        existing: backup ? "backup" : "clobber"
      })
    ).map(() => this);
  }
  static makeTemp(server2, directory, commandOptions) {
    return server2.execute(
      new Command(
        ["mktemp", ...directory === void 0 ? [] : [`--tmpdir=${directory}`]],
        commandOptions
      )
    ).map((proc) => new File(server2, proc.getStdout().trim()));
  }
}
class Directory extends FileSystemNode {
  create(parents, commandOptions) {
    return this.createOn(this.server, "directory", parents, commandOptions);
  }
  remove(commandOptions) {
    return this.server.execute(new Command(["rmdir", this.path], commandOptions), true).map(() => this);
  }
  getChildren(opts, commandOptions) {
    var _a2, _b, _c;
    (_a2 = opts.limit) != null ? _a2 : opts.limit = 50;
    return this.server.execute(
      new BashCommand(
        'find -H "$1" -mindepth 1 -maxdepth 1 -name "$2" -path "$3" -print0' + (opts.limit === "none" ? "" : ` | head -z -n ${opts.limit.toString()}`),
        [this.path, (_b = opts.nameFilter) != null ? _b : "*", (_c = opts.pathFilter) != null ? _c : "*"],
        commandOptions
      )
    ).map(
      (proc) => proc.getStdout().trim().split("\0").slice(0, -1).map((pathString) => new FileSystemNode(this.server, pathString))
    );
  }
  move(...args) {
    return super.move(...args).map((node) => new Directory(node));
  }
}
var Download;
((Download2) => {
  function url(url2, filename) {
    const a2 = document.createElement("a");
    a2.href = url2;
    a2.style.display = "none";
    a2.download = filename;
    a2.target = "_blank";
    document.body.appendChild(a2);
    const event = new MouseEvent("click", {
      view: window,
      bubbles: false,
      cancelable: true
    });
    a2.dispatchEvent(event);
    document.body.removeChild(a2);
  }
  Download2.url = url;
  function blobParts(content, filename, type2 = "application/octet-stream") {
    const f2 = new window.File(content, filename, {
      type: type2
    });
    file(f2);
  }
  Download2.blobParts = blobParts;
  function file(f2) {
    var _a2;
    const url2 = URL.createObjectURL(f2);
    if (Object.hasOwnProperty.call(window, "chrome")) {
      Download2.url(url2, f2.name);
    } else {
      (_a2 = window.open(url2, "_blank")) == null ? void 0 : _a2.focus();
    }
  }
  Download2.file = file;
  function text(content, filename) {
    return blobParts([content], filename, "text/plain");
  }
  Download2.text = text;
  function binary(content, filename) {
    return blobParts([content], filename, "application/octet-stream");
  }
  Download2.binary = binary;
})(Download || (Download = {}));
function MethodFunctor(_ctor, method, ...args) {
  return (obj) => obj[method](...args);
}
const IdentityFunctor = (o2) => o2;
function StringToBooleanCaster(opts = {}) {
  var _a2, _b, _c;
  const ignoreCase = (_a2 = opts.ignoreCase) != null ? _a2 : true;
  const truthyWords = ((_b = opts.truthyWords) != null ? _b : ["true", "yes", "1"]).map(
    ignoreCase ? MethodFunctor(String, "toLowerCase") : IdentityFunctor
  );
  const falsyWords = ((_c = opts.falsyWords) != null ? _c : ["false", "no", "0"]).map(
    ignoreCase ? MethodFunctor(String, "toLowerCase") : IdentityFunctor
  );
  const caster = (text) => monetExports.Maybe.fromNull(truthyWords.includes(text) ? true : falsyWords.includes(text) ? false : null);
  if (ignoreCase) {
    return (text) => caster(text.toLowerCase());
  }
  return caster;
}
const safeJsonParse = (...args) => Result$1.fromThrowable(
  (...args2) => JSON.parse(...args2),
  (e) => e instanceof SyntaxError ? e : new SyntaxError(`${e}`)
)(...args);
function formatBytes(bytes, units) {
  var _a2;
  if (units === "both") {
    return `${formatBytes(bytes, "si")} (${formatBytes(bytes, "binary")})`;
  }
  const lut = ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB"];
  const base = units === "si" ? 1e3 : 1024;
  const exp = Math.min(Math.max(0, Math.floor(Math.log(bytes) / Math.log(base))), lut.length - 1);
  const factor = Math.pow(base, exp);
  return `${(bytes / factor).toPrecision(4)} ${units === "si" ? (_a2 = lut[exp]) == null ? void 0 : _a2.replace("i", "") : lut[exp]}`;
}
function hasProp(obj, prop) {
  return obj[prop] !== void 0;
}
function assertProp(prop) {
  return (partial) => hasProp(partial, prop) ? ok$1(partial) : err$1(new TypeError(`missing property: ${String(prop)}`));
}
const getentBashScriptJsonOuptut = (db, domain) => {
  const [nameKey, idKey, wbinfoFlag] = {
    "passwd": ["login", "uid", "-u"],
    "group": ["name", "gid", "-g"]
  }[db];
  const getent = `wbinfo ${wbinfoFlag} | xargs -d'\\n' -r getent -s winbind`;
  return `set -o pipefail; ${getent} ${db} | awk -F: '
		BEGIN { printf "[" }
		{
			printf sep;
			printf "{";
			printf "\\"${nameKey}\\":\\"%s\\",",$1;
			printf "\\"${idKey}\\":%d,",$3;
			printf "\\"domain\\":${domain.toString()}";
			printf "}";
			sep = ",";
		}
		END { printf "]" }
		'`;
};
const DiskInfoPy = '#!/usr/bin/env python3\nimport os\nimport json\nimport sys\nimport re\n\n\ndef disk_type(sysfs_path: str) -> str:\n    with open(sysfs_path + "/queue/rotational", "r") as f:\n        return "HDD" if bool(int(f.read())) else "SSD"\n\n\n# export type DiskInfo = {\n#     "dev-by-path": string;\n#     "bay-id": `${number}-${number}`;\n#     occupied: boolean;\n#     dev: string;\n#     disk_type: "HDD" | "SSD";\n#   }[];\n\n\ndef populate_disk_information(disk: dict) -> dict:\n    disk["occupied"] = os.path.islink(disk["dev-by-path"])\n    if disk["occupied"]:\n        disk["dev"] = os.path.realpath(disk["dev-by-path"])\n        sysfs_path = "/sys/block/" + os.path.basename(disk["dev"])\n        disk["disk_type"] = disk_type(sysfs_path)\n    return disk\n\n\ndef get_disk_info():\n    disks = []\n    with open("/etc/vdev_id.conf", "r") as vdev_id:\n        for vdev_id_line in vdev_id:\n            regex = re.search("^alias\\s+(\\d+-\\d+)\\s+(\\S+)", vdev_id_line)\n            if regex == None:\n                continue\n            disks.append(\n                populate_disk_information(\n                    {"dev-by-path": regex.group(2), "bay-id": regex.group(1)}\n                )\n            )\n    return disks\n\n\ndef main():\n    print(json.dumps({"rows": get_disk_info()}))\n\n\nif __name__ == "__main__":\n    main()\n';
function formatTemperature(tempC) {
  return `${tempC}\xB0C / ${tempC * 9 / 5 + 32}\xB0F`;
}
var DriveSlot;
((DriveSlot2) => {
  function formatProperties(slot) {
    if (Array.isArray(slot)) {
      if (slot.length === 0) {
        return [];
      }
      if (slot.length === 1) {
        return formatProperties(slot[0]);
      }
      return [
        { label: "Drive Slot", value: "Multiple selected" },
        {
          label: "Capacity",
          value: formatBytes(
            slot.reduce((sum, s2) => {
              var _a3;
              var _a2;
              return sum + ((_a3 = (_a2 = s2.drive) == null ? void 0 : _a2.capacity) != null ? _a3 : 0);
            }, 0),
            "both"
          )
        }
      ];
    }
    const props = [{ label: "Drive Slot", value: slot.slotId }];
    if (slot.drive) {
      props.push(
        { label: "Device Path", value: slot.drive.path },
        { label: "Device Path (by-path)", value: slot.drive.pathByPath },
        { label: "Drive Type", value: slot.drive.rotationRate ? "HDD" : "SSD" },
        { label: "Model Name", value: slot.drive.model },
        { label: "Manufacturer", value: modelToManufacturer(slot.drive.model) },
        { label: "Serial", value: slot.drive.serial },
        { label: "Firmware Version", value: slot.drive.firmwareVersion },
        { label: "Capacity", value: formatBytes(slot.drive.capacity, "both") },
        { label: "Partition Count", value: slot.drive.partitionCount.toString() }
      );
      if (slot.drive.rotationRate) {
        props.push({ label: "Rotation Rate", value: slot.drive.rotationRate.toString() });
      }
      if (slot.drive.smartInfo) {
        props.push(
          {
            label: "Temperature",
            value: formatTemperature(slot.drive.smartInfo.temperature)
          },
          { label: "Power On Time", value: `${slot.drive.smartInfo.powerOnHours} h` },
          { label: "Power Cycle Count", value: slot.drive.smartInfo.powerCycleCount.toString() },
          { label: "Start Stop Count", value: slot.drive.smartInfo.startStopCount.toString() },
          { label: "Health", value: slot.drive.smartInfo.health }
        );
      }
    } else {
      props.push({ label: "Drive Type", value: "Empty" });
    }
    return props;
  }
  DriveSlot2.formatProperties = formatProperties;
  function modelToManufacturer(model) {
    const manufacturers = {
      "ST": "Seagate",
      "WD": "Western Digital",
      "HGST": "HGST",
      "SAMSUNG": "Samsung",
      "TOSHIBA": "Toshiba",
      "HITACHI": "Hitachi",
      "INTEL": "Intel",
      "CRUCIAL": "Crucial",
      "KINGSTON": "Kingston",
      "ADATA": "ADATA",
      "SAN": "SanDisk",
      "PLEXTOR": "Plextor",
      "MICRON": "Micron"
    };
    for (const prefix in manufacturers) {
      if (model.toUpperCase().startsWith(prefix)) {
        return manufacturers[prefix] || "";
      }
    }
    return "Unknown Manufacturer";
  }
})(DriveSlot || (DriveSlot = {}));
const script = '#!/usr/bin/env python3\n\nfrom functools import partial\nimport pyudev, json, re, subprocess, argparse\n\nAUTO_REFRESH_TIME = 30\n\n\ndef get_smart_info(device: pyudev.Device) -> dict:\n    smart_info = {}\n    child = subprocess.Popen(\n        ["smartctl", "-a", device.device_node, "--json"],\n        stdout=subprocess.PIPE,\n        stderr=subprocess.PIPE,\n        universal_newlines=True,\n    )\n    stdout, stderr = child.communicate(timeout=5)\n    ret = child.wait()\n    if ret & 2:  # failed to open\n        return None\n    smart_json = json.loads(stdout)\n\n    smart_info["modelFamily"] = (\n        smart_json["model_family"] if "model_family" in smart_json else "?"\n    )\n    if "temperature" in smart_json and "current" in smart_json["temperature"]:\n        smart_info["temperature"] = smart_json["temperature"]["current"]\n    if "power_on_time" in smart_json and "hours" in smart_json["power_on_time"]:\n        smart_info["powerOnHours"] = smart_json["power_on_time"]["hours"]\n    if "power_cycle_count" in smart_json:\n        smart_info["powerCycleCount"] = smart_json["power_cycle_count"]\n    if "ata_smart_attributes" in smart_json:\n        table = smart_json["ata_smart_attributes"]["table"]\n\n        def get_attr(name, fallback) -> str:\n            return next(\n                iter([attr["raw"]["string"] for attr in table if attr["name"] == name]),\n                fallback,\n            )\n\n        smart_info["startStopCount"] = int(get_attr("Start_Stop_Count", -1))\n        if "powerOnHours" not in smart_info:\n            smart_info["powerOnHours"] = int(get_attr("Power_On_Hours", -1))\n        if "powerCycleCount" not in smart_info:\n            smart_info["powerCycleCount"] = int(get_attr("Power_Cycle_Count", -1))\n        if "temperature" not in smart_info:\n            smart_info["temperature"] = int(get_attr("Temperature_Celsius", -1))\n    smart_info["health"] = (\n        "OK"\n        if "smart_status" in smart_json.keys() and smart_json["smart_status"]["passed"]\n        else "POOR"\n    )\n    return smart_info\n\n\ndef get_drive(device: pyudev.Device) -> dict:\n    drive = {}\n    drive["path"] = device.device_node\n    drive["pathByPath"] = next(\n        (link for link in device.device_links if link.startswith("/dev/disk/by-path/")),\n        None,\n    )\n    drive["capacity"] = int(device.attributes.get("size", 0)) * 512\n    drive["model"] = device.get("ID_MODEL", "unknown")\n    drive["serial"] = device.get("ID_SERIAL_SHORT", device.get("ID_SERIAL", "unknown"))\n    drive["firmwareVersion"] = device.get("ID_REVISION", "unknown")\n    drive["rotationRate"] = int(device.get("ID_ATA_ROTATION_RATE_RPM", 0))\n    drive["partitionCount"] = len(\n        [child for child in device.children if child.device_type == "partition"]\n    )\n    drive["smartInfo"] = get_smart_info(device)\n    return drive\n\n\ndef handle_remove(device: pyudev.Device, slot: dict):\n    slot["drive"] = None\n    message = {"type": "change", "slot": slot}\n    print(json.dumps(message, indent=None), flush=True)\n\n\ndef handle_add_or_change(device: pyudev.Device, slot: dict):\n    slot["drive"] = get_drive(device)\n    message = {"type": "change", "slot": slot}\n    print(json.dumps(message, indent=None), flush=True)\n\n\ndef monitor_changes(udev_ctx: pyudev.Context, args):\n    udev_monitor = pyudev.Monitor.from_netlink(udev_ctx)\n\n    udev_monitor.filter_by("block", "disk")\n\n    while True:\n        for device in iter(partial(udev_monitor.poll, AUTO_REFRESH_TIME), None):\n            if device.device_path.startswith("/devices/virtual"):\n                continue\n            slot = {}\n\n            if "SLOT_NAME" in device:\n                slot["slotId"] = device["SLOT_NAME"]\n            elif "ID_VDEV" in device:\n                slot["slotId"] = device["ID_VDEV"]\n            elif args.include_non_aliased:\n                slot["slotId"] = "unknown"\n            else:\n                continue\n\n            if device.action == "remove":\n                handle_remove(device, slot)\n            elif device.action in ["add", "change"]:\n                handle_add_or_change(device, slot)\n        report_initial(udev_ctx, args)\n\n\ndef get_slots(udev_ctx: pyudev.Context, args):\n    slotMap = {}\n    nonAliased = []\n\n    with open("/etc/vdev_id.conf", "r") as vdev_id:\n        for line in vdev_id:\n            if not line.startswith("alias"):\n                continue\n            [_, slotId, *_] = re.split(r"\\s+", line)\n            slotMap[slotId] = None\n\n    for device in udev_ctx.list_devices(subsystem="block", DEVTYPE="disk"):\n        if device.device_path.startswith("/devices/virtual"):\n            continue\n        slotId = None\n        if "SLOT_NAME" in device:\n            slotId = device["SLOT_NAME"]\n        elif "ID_VDEV" in device:\n            slotId = device["ID_VDEV"]\n\n        if slotId is not None:\n            slotMap[slotId] = get_drive(device)\n        elif args.include_non_aliased:\n            nonAliased.append(get_drive(device))\n\n    aliasedSlots = list(map(lambda x: {"slotId": x[0], "drive": x[1]}, slotMap.items()))\n\n    return aliasedSlots + list(\n        map(lambda drive: {"slotId": "unknown", "drive": drive}, nonAliased)\n    )\n\n\ndef report_initial(udev_ctx: pyudev.Context, args):\n    message = {\n        "type": "reportAll",\n        "slots": get_slots(udev_ctx, args),\n    }\n    print(json.dumps(message, indent=None), flush=True)\n\n\ndef main():\n    parser = argparse.ArgumentParser()\n    parser.add_argument("--live", action="store_true", default=False, required=False)\n    parser.add_argument(\n        "--include-non-aliased", action="store_true", default=False, required=False\n    )\n    args = parser.parse_args()\n\n    udev_ctx = pyudev.Context()\n\n    if args.live:\n        report_initial(udev_ctx, args)\n        monitor_changes(udev_ctx, args)\n    else:\n        print(json.dumps(get_slots(udev_ctx, args)))\n\n\nif __name__ == "__main__":\n    main()\n';
function slotsCommand(opts = {}) {
  const args = [];
  if (opts.includeNonAliased) {
    args.push("--include-non-aliased");
  }
  if (opts.live) {
    args.push("--live");
  }
  return new PythonCommand(script, args, { superuser: "try" });
}
function onStream(output, ctx, setter) {
  try {
    const message = JSON.parse(output);
    switch (message.type) {
      case "reportAll":
        ctx.slots = message.slots;
        setter([...ctx.slots]);
        break;
      case "change":
        const slot = message.slot;
        ctx.slots = ctx.slots.map((s2) => s2.slotId === slot.slotId ? slot : s2);
        setter([...ctx.slots]);
        break;
      default:
        throw new TypeError(`Unknown LiveDriveSlotsMessage type: ${message.type}`);
    }
  } catch (e) {
    if (e instanceof Error) {
      globalThis.reportHoustonError(e);
    }
  }
}
function startLiveDriveSlotsWatcher(server2, setter, opts) {
  const ctx = {
    proc: server2.spawnProcess(slotsCommand({ live: true, includeNonAliased: opts == null ? void 0 : opts.includeNonAliased }), true),
    slots: [],
    stop: false,
    retries: 3
  };
  const start = () => {
    if (ctx.stop) {
      return;
    }
    ctx.proc.execute();
    ctx.proc.stream((output) => onStream(output, ctx, setter));
    ctx.proc.wait().match(
      () => start(),
      (e) => {
        if (ctx.retries > 0) {
          console.error("Live drive slots watcher died, retrying:", e);
          ctx.retries -= 1;
          start();
        } else {
          globalThis.reportHoustonError(e, "Live drive slots watcher died.");
        }
      }
    );
  };
  start();
  return {
    stop: () => {
      ctx.stop = true;
      ctx.proc.terminate();
    }
  };
}
function getDriveSlots(server2, opts = {}) {
  return server2.execute(slotsCommand({ live: false, includeNonAliased: opts.includeNonAliased })).map((proc) => proc.getStdout()).andThen((output) => safeJsonParse(output)).map((slots) => slots).map((slots) => opts.excludeEmpty ? slots.filter((slot) => slot.drive !== null) : slots);
}
class Server {
  constructor(host) {
    __publicField2(this, "host");
    __publicField2(this, "hostname");
    __publicField2(this, "ipAddress");
    __publicField2(this, "localUsers");
    __publicField2(this, "localGroups");
    __publicField2(this, "domainUsers");
    __publicField2(this, "domainGroups");
    this.host = host;
  }
  isAccessible() {
    return this.execute(new Command(["true"]), true).map(() => true);
  }
  getServerInfo() {
    return new File(this, "/etc/45drives/server_info/server_info.json").read().andThen(safeJsonParse).andThen(assertProp("Alias Style")).andThen(assertProp("Chassis Size")).andThen(assertProp("Edit Mode")).andThen(assertProp("HBA")).andThen(assertProp("Hybrid")).andThen(assertProp("Model")).andThen(assertProp("Motherboard")).andThen(assertProp("OS NAME")).andThen(assertProp("OS VERSION_ID")).andThen(assertProp("Serial")).andThen(assertProp("VM"));
  }
  getDriveSlots(opts = {}) {
    if (opts.excludeEmpty) {
      return getDriveSlots(this, { ...opts, excludeEmpty: true });
    }
    return getDriveSlots(this, { ...opts, excludeEmpty: false });
  }
  setupLiveDriveSlotInfo(setter, opts) {
    return startLiveDriveSlotsWatcher(this, setter, opts);
  }
  getDiskInfo() {
    return this.execute(new PythonCommand(DiskInfoPy, [], { superuser: "try" })).map((proc) => proc.getStdout()).andThen(safeJsonParse).map((di) => di);
  }
  getLsDev() {
    return this.execute(new Command(["/opt/45drives/tools/lsdev", "--json"], { superuser: "try" })).map((proc) => proc.getStdout()).andThen(safeJsonParse).map((lsdev) => lsdev);
  }
  getServerModel() {
    return this.getServerInfo().map((serverInfo) => serverInfo.Model);
  }
  getHostname(cache = true) {
    if (this.hostname === void 0 || cache === false) {
      return this.execute(new Command(["hostname"]), true).map(
        (proc) => this.hostname = proc.getStdout().trim()
      );
    }
    return okAsync$1(this.hostname);
  }
  setHostname(hostname) {
    if (this.hostname === void 0 || this.hostname !== hostname) {
      return this.execute(
        new Command(["hostnamectl", "set-hostname", hostname], { superuser: "try" })
      ).orElse((err2) => {
        if (err2.message.includes("Could not set property: Access denied")) {
          return this.execute(
            new Command(["hostnamectl", "set-hostname", hostname], { superuser: "try" })
          );
        }
        return errAsync$1(err2);
      }).map(() => null).orElse(() => okAsync$1(null));
    }
    return okAsync$1(null);
  }
  writeHostnameFiles(hostname) {
    console.log(`Writing hostname files for: ${hostname}`);
    return this.execute(
      new Command(["sh", "-c", `echo '${hostname}' > /etc/hostname`], { superuser: "try" })
    ).map((result) => {
      console.log("Successfully wrote to /etc/hostname");
      return result;
    }).orElse((err2) => {
      console.log("Failed to write to /etc/hostname:", err2.message);
      return errAsync$1(err2);
    }).andThen(() => {
      console.log("Writing pretty hostname to /etc/machine-info");
      return this.execute(
        new Command(["sh", "-c", `echo 'PRETTY_HOSTNAME="${hostname}"' > /etc/machine-info`], {
          superuser: "try"
        })
      ).map((result) => {
        console.log("Successfully wrote to /etc/machine-info");
        return result;
      }).orElse((err2) => {
        console.log("Failed to write to /etc/machine-info:", err2.message);
        return errAsync$1(err2);
      });
    }).map(() => null).orElse(() => okAsync$1(null));
  }
  getIpAddress(cache = true) {
    if (this.ipAddress === void 0 || cache === false) {
      const target = "1.1.1.1";
      return this.execute(new Command(["ip", "route", "get", target]), true).andThen((proc) => {
        const stdout = proc.getStdout();
        const match = stdout.match(/\bsrc\s+(?<ipAddress>\d{1,3}(?:\.\d{1,3}){3})\b/);
        if (match === null || match.groups === void 0) {
          return err$1(new ParsingError(`Malformed output from ${proc}`, { cause: stdout }));
        }
        this.ipAddress = match.groups["ipAddress"];
        return ok$1(this.ipAddress);
      });
    }
    return okAsync$1(this.ipAddress);
  }
  spawnProcess(command, defer = false) {
    return new Process(this, command, defer);
  }
  execute(command, failIfNonZero = true) {
    return this.spawnProcess(command).wait(failIfNonZero);
  }
  downloadCommandOutput(command, filename) {
    const url = HoustonDriver$1.downloadCommandOutputURL(this, command, filename);
    Download.url(url, filename);
  }
  getLocalUsers(cache = true) {
    if (this.localUsers === void 0 || cache === false) {
      return this.execute(new Command(["getent", "-s", "files", "passwd"]), true).map((proc) => {
        this.localUsers = proc.getStdout().split("\n").map((line) => {
          const [login, _2, uidStr, gidStr, name, home, shell] = line.split(":");
          if (login === void 0 || uidStr === void 0 || gidStr === void 0 || name === void 0 || home === void 0 || shell === void 0) {
            return null;
          }
          const uid2 = parseInt(uidStr);
          const gid = parseInt(gidStr);
          if (isNaN(uid2) || isNaN(gid)) {
            return null;
          }
          return User(
            this,
            login,
            uid2,
            gid,
            name,
            new Directory(this, home),
            new File(this, shell)
          );
        }).filter((user) => user !== null);
        return this.localUsers;
      });
    }
    return okAsync$1(this.localUsers);
  }
  getLocalGroups(cache = true) {
    if (this.localGroups === void 0 || cache === false) {
      return this.execute(new Command(["getent", "-s", "files", "group"]), true).map((proc) => {
        this.localGroups = proc.getStdout().split("\n").map((line) => {
          const [name, _2, gidStr, membersStr] = line.split(":");
          if (name === void 0 || gidStr === void 0 || membersStr === void 0) {
            return null;
          }
          const gid = parseInt(gidStr);
          if (isNaN(gid)) {
            return null;
          }
          return Group(this, name, gid, membersStr.split(","));
        }).filter((group) => group !== null);
        return this.localGroups;
      });
    }
    return okAsync$1(this.localGroups);
  }
  getDomainUsers(cache = true) {
    if (this.domainUsers === void 0 || cache === false) {
      return this.execute(new BashCommand(getentBashScriptJsonOuptut("passwd", true))).map((proc) => proc.getStdout()).andThen(safeJsonParse).map((users) => this.domainUsers = users);
    }
    return okAsync$1(this.domainUsers);
  }
  getDomainGroups(cache = true) {
    if (this.domainGroups === void 0 || cache === false) {
      return this.execute(new BashCommand(getentBashScriptJsonOuptut("group", true))).map((proc) => proc.getStdout()).andThen(safeJsonParse).map((groups) => this.domainGroups = groups);
    }
    return okAsync$1(this.domainGroups);
  }
  getUserGroups(user) {
    if (!isLocalUser(user)) {
      return errAsync$1(new ValueError(`Can't get groups from non-local user ${user.uid}`));
    }
    return this.execute(new Command(["groups", user.login]), true).map(
      (proc) => proc.getStdout().replace(/^[^:]+:/, "").trim().split(/\s+/)
    ).andThen((userGroupNames) => {
      return this.getLocalGroups().map(
        (localGroups) => localGroups.filter((group) => group.name in userGroupNames)
      );
    });
  }
  getGroupMembers(group) {
    if (!isLocalGroup(group)) {
      return errAsync$1(new ValueError(`Can't get members of non-local group ${group.gid}`));
    }
    return this.getLocalUsers().map(
      (localUsers) => localUsers.filter((user) => user.login in group.members)
    );
  }
  getUserByLogin(login, cache) {
    return this.getLocalUsers(cache).map((localUsers) => localUsers.filter((user) => user.login === login)).andThen(
      (userMatches) => userMatches.length === 0 ? err$1(new ValueError(`User not found: ${login}`)) : ok$1(userMatches[0])
    );
  }
  getUserByName(name) {
    return this.getLocalUsers().map((localUsers) => localUsers.filter((user) => user.name === name)).andThen(
      (userMatches) => userMatches.length === 0 ? err$1(new ValueError(`User not found: ${name}`)) : ok$1(userMatches[0])
    );
  }
  getUserByUid(uid2) {
    return this.getLocalUsers().map((localUsers) => localUsers.filter((user) => user.uid === uid2)).andThen(
      (userMatches) => userMatches.length === 0 ? ok$1(User(this, void 0, uid2, void 0, void 0, void 0, void 0)) : ok$1(userMatches[0])
    );
  }
  getGroupByName(groupName) {
    return this.getLocalGroups().map((localGroups) => localGroups.filter((group) => group.name === groupName)).andThen(
      (groupMatches) => groupMatches.length === 0 ? err$1(new ValueError(`Group not found: ${groupName}`)) : ok$1(groupMatches[0])
    );
  }
  getGroupByGid(gid) {
    return this.getLocalGroups().map((localGroups) => localGroups.filter((group) => group.gid === gid)).andThen(
      (groupMatches) => groupMatches.length === 0 ? ok$1(Group(this, void 0, gid, void 0)) : ok$1(groupMatches[0])
    );
  }
  addUser(user) {
    const argv = ["useradd", "--create-home"];
    if (user.name) {
      argv.push("--comment", user.name);
    }
    if (user.home) {
      argv.push("--home", user.home);
    }
    if (user.shell) {
      argv.push("--shell", user.shell);
    }
    argv.push(user.login);
    return this.execute(new Command(argv, { superuser: "try" }), true).andThen(
      () => this.getUserByLogin(user.login)
    );
  }
  changePassword(user, password) {
    const proc = this.spawnProcess(new Command(["passwd", user.login], { superuser: "try" }));
    proc.write(`${password}
${password}
`);
    return proc.wait().map(() => user);
  }
  createGroup(group) {
    return this.execute(new Command(["groupadd", group], { superuser: "try" }), true).andThen(
      () => this.getGroupByName(group)
    );
  }
  addUserToGroups(user, ...groups) {
    if (groups.length === 0) {
      return okAsync$1(user);
    }
    return this.execute(
      new Command(
        ["usermod", "-aG", groups.join(","), user.login],
        { superuser: "try" }
      ),
      true
    ).map(() => user);
  }
  toString() {
    var _a2;
    return `Server(${(_a2 = this.host) != null ? _a2 : "localhost"})`;
  }
  isServerDomainJoined() {
    return this.execute(new Command(["net", "ads", "testjoin"], { superuser: "try" }), false).map(
      (proc) => {
        const output = (proc.getStdout() + proc.getStderr()).toLowerCase();
        if (output.includes("join is ok")) {
          return true;
        } else {
          return false;
        }
      }
    );
  }
  reboot() {
    return this.execute(new Command(["reboot", "now"], { superuser: "try" })).map(() => {
      console.log(`${this.toString()}: Reboot triggered.`);
      return null;
    }).orElse((err2) => {
      console.error(`${this.toString()}: Failed to trigger reboot`, err2);
      return errAsync$1(err2);
    });
  }
}
const server$1 = new Server();
var _internal$1;
((_internal2) => {
  _internal2.pcsNodesParseAddrs = (commandOutput) => safeJsonParse(commandOutput).andThen((clusterConfig) => {
    var _a3;
    var _a2;
    const addrs = (_a3 = (_a2 = clusterConfig.nodes) == null ? void 0 : _a2.map((node) => {
      var _a22;
      return (_a22 = node.addrs[0]) == null ? void 0 : _a22.addr;
    }).filter((addr) => addr !== void 0)) != null ? _a3 : [];
    if (addrs.length === 0) {
      console.warn("pcs cluster config output:", clusterConfig);
      return err$1(new ParsingError("no nodes found in output"));
    }
    return ok$1(addrs);
  });
  _internal2.parseCorosyncConfNodeIps = (corosyncConf) => corosyncConf.split(RegexSnippets.newlineSplitter).filter((line) => /^\s*ring0_addr\s*:\s*.+$/.test(line)).map((ring0Addr) => ring0Addr.split(":")[1].trim());
})(_internal$1 || (_internal$1 = {}));
function isIPCMessage(message) {
  const validTargets = ["cockpit", "renderer", "backend"];
  if (typeof message.type !== "string") {
    return false;
  }
  if (!validTargets.includes(message.source)) {
    return false;
  }
  if (!validTargets.includes(message.destination)) {
    return false;
  }
  return true;
}
class IPCMessageRouter {
  constructor(ownSource) {
    __publicField2(this, "callbacks");
    this.ownSource = ownSource;
    this.callbacks = {};
  }
  send(to, type2, data) {
    const message = {
      source: this.ownSource,
      destination: to,
      type: type2,
      data
    };
    this.routeMessage(message);
  }
  routeMessage(message) {
    var _a2;
    if (message.destination === this.ownSource) {
      return (_a2 = this.callbacks[message.type]) == null ? void 0 : _a2.forEach((cb) => cb(message.data));
    }
    switch (message.destination) {
      case "backend":
        return this.forwardToBackend(message);
      case "renderer":
        return this.forwardToRenderer(message);
      case "cockpit":
        return this.forwardToCockpit(message);
    }
  }
  addEventListener(type2, callback) {
    var _a3;
    var _a2;
    (_a3 = (_a2 = this.callbacks)[type2]) != null ? _a3 : _a2[type2] = [];
    this.callbacks[type2].push(callback);
  }
  removeEventListener(type2, callback) {
    var _a2;
    this.callbacks[type2] = (_a2 = this.callbacks[type2]) == null ? void 0 : _a2.filter((cb) => cb !== callback);
  }
}
class IPCMessageRouterBackend extends IPCMessageRouter {
  constructor(webcontents, ipcMain) {
    super("backend");
    __publicField2(this, "webcontents");
    this.webcontents = webcontents;
    ipcMain.on("IPCMessage", (_event, message) => {
      if (!isIPCMessage(message)) {
        return;
      }
      this.routeMessage(message);
    });
  }
  forwardToBackend(_message) {
    throw new Error("not implemented");
  }
  forwardToRenderer(message) {
    this.webcontents.send("IPCMessage", JSON.stringify(message));
  }
  forwardToCockpit(message) {
    this.webcontents.send("IPCMessage", JSON.stringify(message));
  }
}
class IPCMessageRouterCockpit extends IPCMessageRouter {
  constructor() {
    super("cockpit");
    window.addEventListener("console-message", (event) => {
      const message = JSON.parse(event.message);
      if (!isIPCMessage(message)) {
        return;
      }
      this.routeMessage(message);
    });
  }
  forwardToBackend(message) {
    console.log(JSON.stringify(message));
  }
  forwardToRenderer(message) {
    console.log(JSON.stringify(message));
  }
  forwardToCockpit(_message) {
    throw new Error("not implemented");
  }
}
class IPCMessageRouterRenderer extends IPCMessageRouter {
  constructor() {
    super("renderer");
    __publicField2(this, "webviewElement");
    window.electron.ipcRenderer.on("IPCMessage", (_event, message) => {
      try {
        message = JSON.parse(message);
      } catch (error) {
      }
      if (!isIPCMessage(message)) {
        return;
      }
      this.routeMessage(message);
    });
  }
  async invoke(channel, ...args) {
    return await window.electron.ipcRenderer.invoke(channel, ...args);
  }
  setCockpitWebView(webviewElement) {
    this.webviewElement = webviewElement;
    this.webviewElement.addEventListener("console-message", (event) => {
      let message = event.message;
      try {
        message = JSON.parse(message);
      } catch (error) {
      }
      if (!isIPCMessage(message)) {
        return;
      }
      this.routeMessage(message);
    });
  }
  forwardToBackend(message) {
    window.electron.ipcRenderer.send("IPCMessage", message);
  }
  forwardToRenderer(_message) {
    throw new Error("not implemented");
  }
  forwardToCockpit(message) {
    this.webviewElement.value.executeJavaScript(`
        console.log(${JSON.stringify(message)});
        `);
  }
}
const _IPCRouter = class _IPCRouter2 {
  constructor() {
  }
  static initRenderer() {
    _IPCRouter2.instance = new IPCMessageRouterRenderer();
  }
  static initBackend(webcontents, ipcMain) {
    _IPCRouter2.instance = new IPCMessageRouterBackend(webcontents, ipcMain);
  }
  static initCockpit() {
    _IPCRouter2.instance = new IPCMessageRouterCockpit();
  }
  static getInstance() {
    if (!_IPCRouter2.instance) {
      throw new Error("IPCRouter not initialized. Please call init before use.");
    }
    return _IPCRouter2.instance;
  }
};
__publicField2(_IPCRouter, "instance", null);
var Upload;
((Upload2) => {
  function file(accept) {
    return getUpload({ multiple: false, accept }).andThen((fileList) => {
      const file2 = fileList[0];
      return file2 === void 0 ? err$1(new Error("No file given")) : ok$1(file2);
    });
  }
  Upload2.file = file;
  function files(accept) {
    return getUpload({ multiple: true, accept });
  }
  Upload2.files = files;
  function text(accept) {
    return file(accept).andThen((file2) => ResultAsync$1.fromSafePromise(file2.text()));
  }
  Upload2.text = text;
  function binary(accept) {
    return file(accept).andThen((file2) => ResultAsync$1.fromSafePromise(file2.arrayBuffer()));
  }
  Upload2.binary = binary;
  function getUpload(options = {}) {
    const promise = new Promise((resolve2, reject) => {
      fakeUploadClick(resolve2, reject, options);
    });
    return ResultAsync$1.fromPromise(
      promise,
      (e) => e instanceof CancelledByUser ? e : e instanceof Error ? e : new Error(`Error while uploading: ${e}`)
    );
  }
  function fakeUploadClick(resolver, rejecter, options) {
    var _a2, _b;
    const input = document.createElement("input");
    input.type = "file";
    input.style.display = "none";
    input.hidden = true;
    input.multiple = (_a2 = options.multiple) != null ? _a2 : input.multiple;
    input.accept = (_b = options.accept) != null ? _b : input.accept;
    input.addEventListener("change", ({ target }) => {
      if (target instanceof HTMLInputElement && target.files && target.files.length > 0) {
        resolver(target.files);
        document.body.removeChild(input);
      }
    });
    input.addEventListener("cancel", () => {
      rejecter(new CancelledByUser());
      document.body.removeChild(input);
    });
    document.body.appendChild(input);
    const event = new MouseEvent("click", {
      view: window,
      bubbles: false,
      cancelable: true
    });
    input.dispatchEvent(event);
  }
})(Upload || (Upload = {}));
function unwrap(result) {
  return Promise.resolve(result).then(
    (result2) => result2.match(
      (okValue) => Promise.resolve(okValue),
      (errValue) => Promise.reject(errValue)
    )
  );
}
var SambaShareConfig;
((SambaShareConfig2) => {
  SambaShareConfig2.defaults = (name = "") => ({
    name,
    description: "",
    path: "",
    guestOk: false,
    browseable: true,
    readOnly: true,
    inheritPermissions: false,
    advancedOptions: {}
  });
  SambaShareConfig2.makeNew = () => ({
    ...(0, SambaShareConfig2.defaults)(""),
    readOnly: false
  });
})(SambaShareConfig || (SambaShareConfig = {}));
var SambaGlobalConfig;
((SambaGlobalConfig2) => {
  SambaGlobalConfig2.defaults = () => ({
    serverString: "Samba %v",
    logLevel: 0,
    workgroup: "WORKGROUP",
    advancedOptions: {}
  });
})(SambaGlobalConfig || (SambaGlobalConfig = {}));
var SambaConfig;
((SambaConfig2) => {
  SambaConfig2.defaults = () => ({
    global: SambaGlobalConfig.defaults(),
    shares: []
  });
})(SambaConfig || (SambaConfig = {}));
StringToBooleanCaster({
  truthyWords: ["yes", "1", "true"],
  falsyWords: ["no", "0", "false"],
  ignoreCase: true
});
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
getGlobalThis().requestIdleCallback || ((cb) => setTimeout(cb, 1));
getGlobalThis().cancelIdleCallback || ((id) => clearTimeout(id));
{
  const g = getGlobalThis();
  const registerGlobalSetter = (key, setter) => {
    let setters;
    if (!(setters = g[key]))
      setters = g[key] = [];
    setters.push(setter);
    return (v2) => {
      if (setters.length > 1)
        setters.forEach((set) => set(v2));
      else
        setters[0](v2);
    };
  };
  registerGlobalSetter(
    `__VUE_INSTANCE_SETTERS__`,
    (v2) => v2
  );
  registerGlobalSetter(
    `__VUE_SSR_SETTERS__`,
    (v2) => v2
  );
}
class CloudSyncProvider$1 {
  constructor(name, type2, providerParams) {
    __publicField2(this, "name");
    __publicField2(this, "type");
    __publicField2(this, "providerParams");
    this.name = name;
    this.type = type2;
    this.providerParams = providerParams;
  }
  getProviderParameters() {
    return Object.entries(this.providerParams.parameters).map(([key, param]) => ({ key, ...param }));
  }
}
({
  "dropbox": new CloudSyncProvider$1("Dropbox", "dropbox", {
    parameters: {
      token: { value: "", type: "object", defaultValue: "" },
      client_id: { value: "", type: "string", defaultValue: "" },
      client_secret: { value: "", type: "string", defaultValue: "" }
    },
    oAuthSupported: true
  }),
  "drive": new CloudSyncProvider$1("Google Drive", "drive", {
    parameters: {
      token: { value: "", type: "object", defaultValue: "" },
      scope: { value: "drive", type: "select", allowedValues: ["drive", "drive.readonly", "drive.file", "drive.appfolder", "drive.metadata.readonly"], defaultValue: "drive" },
      client_id: { value: "", type: "string", defaultValue: "" },
      client_secret: { value: "", type: "string", defaultValue: "" },
      root_folder_id: { value: "", type: "string", defaultValue: "" },
      service_account_file: { value: "", type: "string", defaultValue: "" }
    },
    oAuthSupported: true
  }),
  "google cloud storage": new CloudSyncProvider$1("Google Cloud", "google cloud storage", {
    parameters: {
      token: { value: "", type: "object", defaultValue: "" },
      client_id: { value: "", type: "string", defaultValue: "" },
      client_secret: { value: "", type: "string", defaultValue: "" },
      project_number: { value: "", type: "string", defaultValue: "" },
      service_account_file: { value: "", type: "string", defaultValue: "" },
      anonymous: { value: false, type: "bool", defaultValue: false },
      object_acl: { value: "private", type: "select", allowedValues: ["authenticatedRead", "bucketOwnerFullControl", "bucketOwnerRead", "private", "projectPrivate", "publicRead"], defaultValue: "private" },
      bucket_acl: { value: "private", type: "select", allowedValues: ["authenticatedRead", "private", "projectPrivate", "publicRead", "publicReadWrite"], defaultValue: "private" }
    },
    oAuthSupported: true
  }),
  "azureblob": new CloudSyncProvider$1("Microsoft Azure Blob", "azureblob", {
    parameters: {
      account: { value: "", type: "string", defaultValue: "" },
      service_principal_file: { value: "", type: "string", defaultValue: "" },
      key: { value: "", type: "string", defaultValue: "" },
      sas_url: { value: "", type: "string", defaultValue: "" },
      use_msi: { value: false, type: "bool", defaultValue: false },
      use_emulator: { value: false, type: "bool", defaultValue: false }
    }
  }),
  "b2": new CloudSyncProvider$1("Backblaze B2", "b2", {
    parameters: {
      account: { value: "", type: "string", defaultValue: "" },
      key: { value: "", type: "string", defaultValue: "" },
      hard_delete: { value: false, type: "bool", defaultValue: false }
    }
  }),
  "s3-Wasabi": new CloudSyncProvider$1("Wasabi", "s3", {
    parameters: {
      provider: { value: "Wasabi", type: "string", defaultValue: "Wasabi" },
      env_auth: { value: false, type: "bool", defaultValue: false },
      access_key_id: { value: "", type: "string", defaultValue: "" },
      secret_access_key: { value: "", type: "string", defaultValue: "" },
      endpoint: { value: "", type: "string", defaultValue: "" },
      region: { value: "", type: "string", allowedValues: ["", "other-v2-signature"], defaultValue: "" },
      location_constraint: { value: "", type: "string", defaultValue: "" },
      acl: { value: "private", type: "select", allowedValues: ["private", "public-read", "public-read-write", "authenticated-read", "bucket-owner-read", "bucket-owner-full-control"], defaultValue: "private" }
    }
  }),
  "s3-AWS": new CloudSyncProvider$1("Amazon S3", "s3", {
    parameters: {
      provider: { value: "AWS", type: "string", defaultValue: "AWS" },
      env_auth: { value: false, type: "bool", defaultValue: false },
      access_key_id: { value: "", type: "string", defaultValue: "" },
      secret_access_key: { value: "", type: "string", defaultValue: "" },
      endpoint: { value: "", type: "string", defaultValue: "" },
      region: { value: "", type: "string", allowedValues: ["", "other-v2-signature"], defaultValue: "" },
      location_constraint: { value: "", type: "string", defaultValue: "" },
      acl: { value: "private", type: "select", allowedValues: ["private", "public-read", "public-read-write", "authenticated-read", "bucket-owner-read", "bucket-owner-full-control"], defaultValue: "private" }
    }
  }),
  "s3-Ceph": new CloudSyncProvider$1("Ceph", "s3", {
    parameters: {
      provider: { value: "Ceph", type: "string", defaultValue: "Ceph" },
      env_auth: { value: false, type: "bool", defaultValue: false },
      access_key_id: { value: "", type: "string", defaultValue: "" },
      secret_access_key: { value: "", type: "string", defaultValue: "" },
      endpoint: { value: "", type: "string", defaultValue: "" },
      region: { value: "", type: "string", allowedValues: ["", "other-v2-signature"], defaultValue: "" },
      location_constraint: { value: "", type: "string", defaultValue: "" },
      acl: { value: "private", type: "select", allowedValues: ["private", "public-read", "public-read-write", "authenticated-read", "bucket-owner-read", "bucket-owner-full-control"], defaultValue: "private" }
    }
  }),
  "s3-IDrive": new CloudSyncProvider$1("IDrive e2", "s3", {
    parameters: {
      provider: { value: "IDrive", type: "string", defaultValue: "IDrive" },
      env_auth: { value: false, type: "bool", defaultValue: false },
      access_key_id: { value: "", type: "string", defaultValue: "" },
      secret_access_key: { value: "", type: "string", defaultValue: "" },
      endpoint: { value: "", type: "string", defaultValue: "" },
      acl: { value: "private", type: "select", allowedValues: ["private", "public-read", "public-read-write", "authenticated-read", "bucket-owner-read", "bucket-owner-full-control"], defaultValue: "private" }
    }
  }),
  "storj": new CloudSyncProvider$1("Storj", "storj", {
    parameters: {
      provider: { value: "existing", type: "select", allowedValues: ["existing", "new"], defaultValue: "existing" },
      access_grant: { value: "", type: "string", defaultValue: "" },
      satellite_address: { value: "us1.storj.io", type: "select", allowedValues: ["us1.storj.io", "eu1.storj.io", "ap1.storj.io"], defaultValue: "us1.storj.io" },
      api_key: { value: "", type: "string", defaultValue: "" },
      passphrase: { value: "", type: "string", defaultValue: "" },
      description: { value: "", type: "string", defaultValue: "" }
    }
  })
});
var VDev;
((VDev2) => {
  function diskType(vdev) {
    const allDisksAre = (type2) => vdev.disks.every((disk) => disk.type === type2);
    for (const type2 of ["HDD", "SSD", "NVMe"]) {
      if (allDisksAre(type2))
        return type2;
    }
    return "Hybrid";
  }
  VDev2.diskType = diskType;
})(VDev || (VDev = {}));
function parseTaskScheduleIntoString(schedule) {
  const elements = [];
  const startDay = schedule.startDate.getDate();
  const startMonth = schedule.startDate.toLocaleString("en-US", { month: "long" });
  const startHour = schedule.startDate.getHours().toString().padStart(2, "0");
  const startMinute = schedule.startDate.getMinutes().toString().padStart(2, "0");
  const startTimeString = `at ${startHour}:${startMinute}`;
  switch (schedule.repeatFrequency) {
    case "hour":
      elements.push(`starting on ${startMonth} ${startDay}${getOrdinalSuffix(startDay)} ${startTimeString}`);
      elements.push("every hour");
      break;
    case "day":
      elements.push(`starting on ${startMonth} ${startDay}${getOrdinalSuffix(startDay)} ${startTimeString}`);
      elements.push(`every day at ${startHour}:${startMinute}`);
      break;
    case "week":
      const dayOfWeek = schedule.startDate.toLocaleString("en-US", { weekday: "long" });
      elements.push(`starting on ${startMonth} ${startDay}${getOrdinalSuffix(startDay)} ${startTimeString}`);
      elements.push(`every week on ${dayOfWeek} at ${startHour}:${startMinute}`);
      break;
    case "month":
      elements.push(`starting on ${startMonth} ${startDay}${getOrdinalSuffix(startDay)} ${startTimeString}`);
      elements.push(`every month on the ${startDay}${getOrdinalSuffix(startDay)} at ${startHour}:${startMinute}`);
      break;
  }
  return elements.filter((e) => e).join(", ");
}
function getOrdinalSuffix(n2) {
  if (n2 >= 11 && n2 <= 13)
    return "th";
  switch (n2 % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
var Disks;
((Disks2) => {
  function runCommandJson(command, options = {}) {
    return server$1.execute(new Command(command, options)).map((proc) => proc.getStdout()).andThen(safeJsonParse);
  }
  Disks2.runCommandJson = runCommandJson;
  function fetchLsdev() {
    return runCommandJson(["/opt/45drives/tools/lsdev", "--json"]);
  }
  Disks2.fetchLsdev = fetchLsdev;
})(Disks || (Disks = {}));
const HoustonDriver = HoustonDriver$1;
(_a = globalThis.reportHoustonError) != null ? _a : globalThis.reportHoustonError = (e, ctx = "") => {
  console.error(ctx, e);
  return e;
};
const get_zfs_data_script = `import subprocess
import json
import argparse

def get_local_zfs_pools():
    try:
        result = subprocess.run(['zpool', 'list', '-H', '-o', 'name'], stdout=subprocess.PIPE, stderr=subprocess.PIPE, universal_newlines=True, check=True)
        pools = result.stdout.strip().split('\\n')
        return {"success": True, "data": pools, "error": None}
    except subprocess.CalledProcessError as e:
        print(f"Error {e}")
        return {"success": False, "data": [], "error": str(e)}

def get_remote_zfs_pools(host, port=22, user='root'):
    try:
        ssh_cmd = ['ssh']
        if port != '22':
            ssh_cmd.extend(['-p', port])
        ssh_cmd.append(f"{user}@{host}")
        ssh_cmd.extend(['zpool', 'list', '-H', '-o', 'name'])
        
        result = subprocess.check_output(ssh_cmd, stderr=subprocess.STDOUT, universal_newlines=True)
        pools = result.strip().split('\\n')
        return {"success": True, "data": pools, "error": None}
    except subprocess.CalledProcessError as e:
        print(f"Error {e}")
        return {"success": False, "data": [], "error": str(e)}

def get_remote_zfs_pools_netcat(host, port=22):
    try:
        command = "zpool list -H -o name\\n"  # Note: The newline character ensures the command is sent properly

        # Netcat command
        nc_cmd = ['nc', host, str(port)]
        
        process = subprocess.Popen(nc_cmd, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, universal_newlines=True)

        stdout, stderr = process.communicate(command)

        # Check for errors
        if process.returncode != 0:
            raise subprocess.CalledProcessError(process.returncode, ' '.join(nc_cmd), output=stdout, stderr=stderr)

        # Process the result
        pools = stdout.strip().split('\\n')
        return {"success": True, "data": pools, "error": None}
        
    except subprocess.CalledProcessError as e:
        print(f"Error {e}")
        return {"success": False, "data": [], "error": str(e)}

def get_local_zfs_datasets(pool):
    try:
        result = subprocess.run(['zfs', 'list', '-H', '-o', 'name', '-r', pool], stdout=subprocess.PIPE, stderr=subprocess.PIPE, universal_newlines=True, check=True)
        datasets = result.stdout.strip().split('\\n')
        return {"success": True, "data": datasets, "error": None}
    except subprocess.CalledProcessError as e:
        print(f"Error {e}")
        return {"success": False, "data": [], "error": str(e)}

def get_remote_zfs_datasets(pool, host, port=22, user='root'):
    try:
        ssh_cmd = ['ssh']
        if port != '22':
            ssh_cmd.extend(['-p', port])
        ssh_cmd.append(f"{user}@{host}")
        ssh_cmd.extend(['zfs', 'list', '-H', '-o', 'name', '-r', pool])
        
        result = subprocess.check_output(ssh_cmd, stderr=subprocess.STDOUT, universal_newlines=True)
        datasets = result.strip().split('\\n')
        return {"success": True, "data": datasets, "error": None}
    except subprocess.CalledProcessError as e:
        print(f"Error {e}")
        return {"success": False, "data": [], "error": str(e)}

def main():
    parser = argparse.ArgumentParser(description='Get Pools or Datasets from Local or Remote system')
    parser.add_argument('-t', '--type', type=str, choices=['pools', 'datasets'], required=True, help='Specify whether to get pools or datasets')
    parser.add_argument('-H', '--host', type=str, help='hostname of remote system')
    parser.add_argument('-p', '--port', type=str, default='22', help='port to connect via ssh (22 by default)')
    parser.add_argument('-u', '--user', type=str, default='root', help='user of remote system (root by default)')
    parser.add_argument('-P', '--pool', type=str, help='zfs pool to get datasets from (required if type is datasets)')

    args = parser.parse_args()
    
    if args.type == 'pools':
        if args.host:
            result = get_remote_zfs_pools(args.host, args.port, args.user)
        else:
            result = get_local_zfs_pools()
    elif args.type == 'datasets':
        if not args.pool:
            parser.error("the following arguments are required: -P/--pool")
        if args.host:
            result = get_remote_zfs_datasets(args.pool, args.host, args.port, args.user)
        else:
            result = get_local_zfs_datasets(args.pool)
    
    print(json.dumps(result))

if __name__ == "__main__":
    main()
`;
const test_ssh_script = `import subprocess
import argparse

def test_passwordless_ssh(target):
    try:
        # Attempt to run a command on the remote host without providing a password
        test_cmd = ['ssh', target, 'echo Success']

        process_test = subprocess.Popen(
            test_cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,  
        )

        stdout, stderr = process_test.communicate()

        if process_test.returncode != 0:
            # raise Exception(f"Error: {stderr.decode('utf-8')}")
            return False
        else:
            print(stdout)
            return True

    
    except subprocess.CalledProcessError as e:
        # If there is an error, notify the user and return False
        print(f"Error: {e.stderr}")
        print("Passwordless SSH connection failed.")
        return False

def main():
    parser = argparse.ArgumentParser(description='Test passwordless SSH connection')
  
    parser.add_argument('sshTarget', type=str, help='ssh target')
    
    args = parser.parse_args()

    ssh_target = args.sshTarget
    
    result = test_passwordless_ssh(ssh_target)
    print(result)

if __name__ == "__main__":
    main()`;
const test_netcat_script = `import subprocess
import argparse
import time

def test_netcat(user, target, port):
    try:
        # Start Netcat listener remotely
        listen_cmd = f'bash -c "nohup nc -lk {port} >/dev/null 2>&1 & disown"'
        ssh_cmd_listener = ['ssh', f'{user}@{target}', listen_cmd]

        print(f"Starting SSH listener command: {' '.join(ssh_cmd_listener)}")
        subprocess.run(ssh_cmd_listener, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

        # Allow listener to start
        time.sleep(3)

        # Test port connection
        test_cmd = ['nc', '-zv', target, str(port)]
        process_test = subprocess.run(
            test_cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            universal_newlines=True,
        )

        # Kill the listener remotely after test
        kill_cmd = ['ssh', f'{user}@{target}', f'fuser -k {port}/tcp']
        subprocess.run(kill_cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

        if process_test.returncode != 0:
            print(process_test.stderr.strip())
            return False
        else:
            print(process_test.stderr.strip())
            return True

    except Exception as e:
        print(f"Unexpected error: {str(e)}")
        return False

def main():
    parser = argparse.ArgumentParser(description='Test netcat connectivity')
    parser.add_argument('user', type=str, help='SSH user')
    parser.add_argument('ncTarget', type=str, help='Target hostname or IP address')
    parser.add_argument('port', type=int, help='Port to connect to')

    args = parser.parse_args()

    result = test_netcat(args.user, args.ncTarget, args.port)
    print(f"Netcat test result: {result}")

if __name__ == "__main__":
    main()
`;
const task_file_creation_script = `import re
import subprocess
import argparse
import json
import os
import logging

logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')

def read_template_file(template_file_path):
    logging.debug(f'Reading template file: {template_file_path}')
    with open(template_file_path, 'r') as file:
        content = file.read()
    logging.debug('Template file read successfully')
    return content

def parse_env_file(parameter_env_file_path):
    logging.debug(f'Parsing env file: {parameter_env_file_path}')
    parameters = {}
    with open(parameter_env_file_path, "r") as f:
        for raw in f:
            line = raw.strip()
            # skip empty lines and comments
            if not line or line.startswith('#'):
                continue

            if '=' not in line:
                logging.warning(f"Skipping malformed env line (no '='): {line!r}")
                continue

            key, value = line.split('=', 1)  # <-- only split once
            parameters[key] = value

    logging.debug('Env file parsed successfully')
    return parameters

def generate_exec_start(templateName, parameters, scriptPath):
    base_python_command = f"python3 {scriptPath}"
    
    # if templateName == 'ScrubTask':
    #     return('zpool scrub ' + parameters['scrubConfig_pool_pool'])   
    # elif(templateName=="CustomTask"):
    if(templateName=="CustomTask"):
        file_path = parameters.get('customTaskConfig_filePath', '')
        if not file_path:
            return parameters.get('customTaskConfig_command', 'No command provided')  # Return command or a message if not provided
        if file_path.endswith('.py'):
            return f"python3 {file_path}"  # For Python scripts
        elif file_path.endswith('.sh'):
            return f"bash {file_path}"  # For Bash scripts
        elif file_path.endswith('.bash'):
            return f"bash {file_path}"  # For Bash scripts (same command as .sh)
        else:
            raise ValueError("Unsupported file type: Only .py and .sh files are allowed.")
        
    return(base_python_command)

def read_schedule_json(file_path):
    logging.debug(f'Reading schedule JSON file: {file_path}')
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)
            logging.debug('Schedule JSON file read successfully')
            return data
    except (FileNotFoundError, json.JSONDecodeError) as e:
        logging.error(f"Error reading JSON from file {file_path}: {e}")
        return None

def interval_to_on_calendar(interval):
    logging.debug(f'Converting interval to OnCalendar format: {interval}')
    parts = []
    
    if 'dayOfWeek' in interval and interval['dayOfWeek']:
        DOW_NAMES = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        normalized = []
        for v in interval['dayOfWeek']:
            if isinstance(v, int):
                normalized.append(DOW_NAMES[max(0, min(6, v))])
            else:
                normalized.append(str(v)[:3].title())
        parts.append(','.join(normalized))
    
    year_part = interval.get('year', {}).get('value', '*')
    month_part = interval.get('month', {}).get('value', '*')
    day_part = interval.get('day', {}).get('value', '*')
    
    # Modify the parts if they contain a slash and the base is not an asterisk
    if '/' in day_part:
        base, step = day_part.split('/')
        if base == '*':
            base = '1'  # Default to starting from the 1st day if base is '*'
        day_part = f'{base}/{step}'
    
    date_part = f'{year_part}-{month_part}-{day_part}'
    parts.append(date_part)
    
    hour = interval.get('hour', {}).get('value', '*')
    minute = interval.get('minute', {}).get('value', '*')
    second = interval.get('second', {}).get('value', '0')
    
    # Modify the parts if they contain a slash
    if '/' in hour:
        base, step = hour.split('/')
        if base == '*':
            base = '0'  # Default to starting from 0 if base is '*'
        hour = f'{base}/{step}'
    
    if '/' in minute:
        base, step = minute.split('/')
        if base == '*':
            base = '0'  # Default to starting from 0 if base is '*'
        minute = f'{base}/{step}'
    
    time_part = f'{hour}:{minute}:{second}'
    parts.append(time_part)
    
    on_calendar_value = ' '.join(parts)
    
    return 'OnCalendar=' + on_calendar_value

def replace_placeholders(template_content, parameters):
    logging.debug('Replacing placeholders in the template')
    for key, value in parameters.items():
        placeholder = "{" + key + "}"
        template_content = template_content.replace(placeholder, value)
    return template_content

def generate_concrete_file(template_content, output_file_path):
    logging.debug(f'Generating concrete file at: {output_file_path}')
    with open(output_file_path, 'w') as file:
        file.write(template_content)
    logging.debug('Concrete file generated successfully')

def manage_service(unit_name, action):
    logging.debug(f'Managing service: {unit_name} with action: {action}')
    try:
        subprocess.run(['sudo', 'systemctl', 'daemon-reload'], check=True)
        subprocess.run(['sudo', 'systemctl', action, unit_name], check=True)
        logging.debug(f'{unit_name} has been {action}d')
    except subprocess.CalledProcessError as e:
        logging.error(f"Failed to {action} {unit_name}: {e}")

def start_timer(timer_name):
    logging.debug(f'Starting timer: {timer_name}')
    try:
        subprocess.run(['sudo', 'systemctl', 'daemon-reload'], check=True)

        result = subprocess.run(['sudo', 'systemctl', 'is-enabled', timer_name], universal_newlines=True, stdout=subprocess.PIPE)
        
        if result.stdout.strip() == 'enabled':
            logging.debug(f'Timer {timer_name} is active, restarting it')
            subprocess.run(['sudo', 'systemctl', 'restart', timer_name], check=True)
            logging.debug(f'{timer_name} has been restarted')
        else:
            logging.debug(f'Timer {timer_name} is inactive, starting it')
            subprocess.run(['sudo', 'systemctl', 'start', timer_name], check=True)
            logging.debug(f'{timer_name} has been started')
    except subprocess.CalledProcessError as e:
        logging.error(f"Failed to start {timer_name}: {e}")

def create_task(template_name, script_path, param_env_path):
    logging.debug(f'Creating task with service template: {template_name} and env file: {param_env_path}')
    param_env_filename = os.path.basename(param_env_path)
    parts = param_env_filename.split('_')
    task_instance_name = '_'.join(parts[2:]).split('.env')[0]
    service_file_name = f'houston_scheduler_{task_instance_name}.service'
    output_path_service = f'/etc/systemd/system/{service_file_name}'
    
    service_template_content = read_template_file('/opt/45drives/houston/scheduler/templates/Task.service')
    parameters = parse_env_file(param_env_path)
    exec_start_command = generate_exec_start(template_name, parameters, script_path)
    service_template_content = service_template_content.replace("{task_name}", task_instance_name)
    service_template_content = service_template_content.replace("{env_path}", param_env_path)
    # service_template_content = service_template_content.replace("{ExecStart}", exec_start_command)
    locked_exec = (
        "/bin/sh -c 'exec 9>/run/%n.lock && flock -n 9 || "
        "{ echo \\"Already running, skipping.\\"; exit 0; }; exec " + exec_start_command + "'"
    )
    service_template_content = service_template_content.replace("{ExecStart}", locked_exec)
    
    generate_concrete_file(service_template_content, output_path_service)
    logging.debug("Standalone concrete service file generated successfully.")

def create_schedule(schedule_json_path, timer_template_path, full_unit_name):
    logging.debug(f'Creating schedule with timer template: {timer_template_path} and schedule file: {schedule_json_path}')
    output_path_timer = f"/etc/systemd/system/{full_unit_name}.timer"
    schedule_data = read_schedule_json(schedule_json_path)
    
    if not schedule_data:
        logging.error("Invalid schedule data.")
        return

    timer_template_content = read_template_file(timer_template_path)
    on_calendar_lines = [interval_to_on_calendar(interval) for interval in schedule_data['intervals']]
    on_calendar_lines_str = "\\n".join(on_calendar_lines)
    timer_template_content = timer_template_content.replace("{description}", f"Timer for {full_unit_name}").replace("{on_calendar_lines}", on_calendar_lines_str)
    
    generate_concrete_file(timer_template_content, output_path_timer)
    logging.debug("Concrete timer file generated successfully.")
    
    manage_service(full_unit_name + '.timer', 'enable')
    start_timer(full_unit_name + '.timer')

def main():
    logging.debug('Starting main function')
    parser = argparse.ArgumentParser(description='Manage Service and Timer Files')
    parser.add_argument('-tN', '--templateName', type=str, help='Task Template Name')
    parser.add_argument('-t', '--type', type=str, choices=['create-task', 'create-schedule', 'create-task-schedule'], required=True, help='Type of operation to perform')
    parser.add_argument('-sP', '--scriptPath', type=str, help='Script Path')
    parser.add_argument('-e', '--env', type=str, help='Env file path')
    parser.add_argument('-tt', '--timerTemplate', type=str, help='Template timer file path')
    parser.add_argument('-s', '--schedule', type=str, help='Schedule JSON file path')
    parser.add_argument('-n', '--name', type=str, help='Full task/unit name (required for schedule)')
    
    args = parser.parse_args()

    if args.type == 'create-task':
        if not args.templateName or not args.scriptPath or not args.env:
            parser.error("the following arguments are required for create-task: -tN/--templateName, -sP/--scriptPath, -e/--env")
        create_task(args.templateName, args.scriptPath, args.env)
    elif args.type == 'create-schedule':
        if not args.timerTemplate or not args.schedule or not args.name:
            parser.error("the following arguments are required for create-schedule: -tt/--timerTemplate, -s/--schedule, -n/--name")
        create_schedule(args.schedule, args.timerTemplate, args.name)
    elif args.type == 'create-task-schedule':
        if not args.templateName or not args.scriptPath or not args.env or not args.timerTemplate or not args.schedule:
            parser.error("the following arguments are required for create-task-schedule: -tN/--templateName, -sP/--scriptPath, -e/--env, -tt/--timerTemplate, -s/--schedule")
        
        create_task(args.templateName, args.scriptPath, args.env)
        
        param_env_filename = os.path.basename(args.env)
        parts = param_env_filename.split('_')
        task_instance_name = '_'.join(parts[2:]).split('.env')[0]
        full_unit_name = f"houston_scheduler_{task_instance_name}"
        
        create_schedule(args.schedule, args.timerTemplate, full_unit_name)
    logging.debug('Main function execution completed')
        
if __name__ == "__main__":
    main()`;
const remove_task_script = `import os
import subprocess
import sys

def delete_task_files(unit_name):
    system_dir = '/etc/systemd/system/'
    
    prefix = "houston_scheduler_"
    suffixes = ['.env', '.json', '.service', '.timer','.txt']
    deleted_count = 0
    
    # Iterate through each file in the system directory
    for file in os.listdir(system_dir):
        # Check if the file matches the pattern for task files
        if file.startswith(prefix) and file.endswith(tuple(suffixes)):
            base_name = file[:file.rfind('.')]
            if base_name == unit_name:
                # If it matches the task name/unit, delete the file
                full_path = os.path.join(system_dir, file)
                os.remove(full_path)
                deleted_count += 1
                print(f"Deleted file: {full_path}")

def check_for_timer_file(unit_name):
    system_dir = '/etc/systemd/system/'
    prefix = "houston_scheduler_"
    suffix = '.timer'
    
    # Check for timer file presence
    for file in os.listdir(system_dir):
        print(f"Checking file: {file}")  # Debugging output
        if file.startswith(prefix) and file.endswith(suffix):
            base_name = file[:file.rfind('.')]
            print(f"Found timer file with base_name: {base_name}")  # Debugging output
            if base_name == unit_name:
                print(f"Timer file for unit {unit_name} exists.")  # Debugging output
                return True

    return False

def stop_systemd_timer(unit_name):
    # Stop the timer
    subprocess.run(['sudo', 'systemctl', 'stop', f'{unit_name}.timer'], check=True)
    # Disable the timer
    subprocess.run(['sudo', 'systemctl', 'disable', f'{unit_name}.timer'], check=True)
    # Reload systemd to recognize new or changed units
    subprocess.run(['sudo', 'systemctl', 'reset-failed'], check=True)
    subprocess.run(['sudo', 'systemctl', 'daemon-reload'], check=True)

def remove_systemd_service(unit_name):
    # Stop the service
    subprocess.run(['sudo', 'systemctl', 'stop', f'{unit_name}.service'], check=True)
    # Disable the service
    subprocess.run(['sudo', 'systemctl', 'disable', f'{unit_name}.service'], check=True)
    # Reload systemd to recognize new or changed units
    subprocess.run(['sudo', 'systemctl', 'daemon-reload'], check=True)

def main():
    unit_name = sys.argv[1]
    
    if check_for_timer_file(unit_name):
        stop_systemd_timer(unit_name)
    remove_systemd_service(unit_name)
    delete_task_files(unit_name)
    subprocess.run(['sudo', 'systemctl', 'daemon-reload'], check=True)
    
if __name__ == "__main__":
    main()
    
    
    `;
const run_task_script = `import subprocess
import sys
import os

def run_task_now(unit_name):
    try:
        # Reload systemd to recognize new or changed units
        # subprocess.run(['sudo', 'systemctl', 'daemon-reload'], check=True)
        
        # Start the service 
        # subprocess.run(['sudo', 'systemctl', 'start', f'{unit_name}.service'], check=True)
        
        # Start the service (do not queue a second run if one is already starting)
        subprocess.run(['sudo', 'systemctl', 'start', '--job-mode=fail', f'{unit_name}.service'], check=True)

    except subprocess.CalledProcessError as e:
        print(f"Failed to run task: {e}")
        sys.exit(1)
        
def check_for_service_file(unit_name):
    system_dir = '/etc/systemd/system/'
    prefix = "houston_scheduler_"
    suffix = '.service'
    
    # Check for service file presence
    for file in os.listdir(system_dir):
        if file.startswith(prefix) and file.endswith(suffix):
            base_name = file[:file.rfind('.')]
            if base_name == unit_name:
                return True
    return False

def main():
    unit_name = sys.argv[1]
    
    if check_for_service_file(unit_name):
        run_task_now(unit_name)
    else:
        print(f'error: could not find task service file')
    
if __name__ == "__main__":
    main()`;
const get_disks_script = `import subprocess
import json

def main():
    result = subprocess.run(['lsdev', '-jdHmtTsfcp'], stdout=subprocess.PIPE)

    json_data = json.loads(result.stdout)

    disks = []

    for row in json_data['rows']:
        for disk in row:
            if not disk['occupied']:
                continue

            device_path = disk['dev']

            disks.append({
                'name': disk['bay-id'],
                'capacity': disk['capacity'],
                'model': disk['model-name'],
                'type': disk['disk_type'],
                'health': disk['health'],
                'phy_path': disk['dev-by-path'],
                'sd_path': device_path,
                'vdev_path': f'/dev/disk/by-vdev/{disk["bay-id"]}',
                'serial': disk['serial'],
                'temp': disk['temp-c'],
            })

    print(json.dumps(disks, indent=4))

if __name__ == '__main__':
    main()
`;
const ensure_ssh_script = `#!/usr/bin/env python3
# ensure_passwordless_ssh.py
import argparse, json, os, shutil, subprocess, sys

def log(msg, quiet=False):
    if not quiet:
        sys.stderr.write(str(msg) + "\\n")
        sys.stderr.flush()

def run(cmd, check=False, quiet=False, env=None):
    if not quiet:
        log(f"$ {' '.join(cmd)}", quiet)
    return subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE,)

def have_cmd(name:str) -> bool:
    return shutil.which(name) is not None

def test_passwordless(user, host, port, quiet=False) -> bool:
    cp = run([
        "ssh", "-p", str(port),
        "-o", "BatchMode=yes",
        "-o", "ConnectTimeout=5",
        "-o", "StrictHostKeyChecking=accept-new",
        "-o", "NumberOfPasswordPrompts=0",
        f"{user}@{host}", "true"
    ], quiet=True)
    return cp.returncode == 0

def ensure_keypair(kind: str, key_dir: str, quiet=False) -> str:
    os.makedirs(key_dir, exist_ok=True)
    if kind == "ed25519":
        pk = os.path.join(key_dir, "id_ed25519")
        pub = pk + ".pub"
        if os.path.isfile(pk) and os.path.isfile(pub): return pk
        log(f"Generating ed25519 keypair at {pk}", quiet)
        run(["ssh-keygen", "-t", "ed25519", "-N", "", "-f", pk, "-C", "auto"], check=True, quiet=True)
        return pk
    elif kind == "rsa":
        pk = os.path.join(key_dir, "id_rsa")
        pub = pk + ".pub"
        if os.path.isfile(pk) and os.path.isfile(pub): return pk
        log(f"Generating rsa-4096 keypair at {pk}", quiet)
        run(["ssh-keygen", "-t", "rsa", "-b", "4096", "-N", "", "-f", pk, "-C", "auto"], check=True, quiet=True)
        return pk
    raise ValueError("unknown key type")

def ensure_sshpass(quiet=False) -> bool:
    if have_cmd("sshpass"): return True
    log("sshpass not found; attempting to install\u2026", quiet)
    pm = None
    for cand in ("apt-get","dnf","yum","zypper","pacman","apk"):
        if have_cmd(cand):
            pm = cand
            break
    if pm is None:
        log("Could not auto-install sshpass. Please install it manually and re-run.", quiet)
        return False

    def maybe_sudo(cmd):
        sudo = ["sudo"]
        # Attempt non-interactive test; if it fails we still try sudo (may prompt)
        run(["sudo","-n","true"], quiet=True)
        return sudo + cmd

    try:
        if pm == "apt-get":
            env = os.environ.copy()
            env["DEBIAN_FRONTEND"] = "noninteractive"
            run(maybe_sudo(["apt-get","update","-y"]), quiet=quiet)
            run(maybe_sudo(["apt-get","install","-y","sshpass"]), check=True, quiet=quiet, env=env)
        elif pm == "dnf":
            run(maybe_sudo(["dnf","-y","install","epel-release"]), quiet=True)
            run(maybe_sudo(["dnf","-y","install","sshpass"]), check=True, quiet=quiet)
        elif pm == "yum":
            run(maybe_sudo(["yum","-y","install","epel-release"]), quiet=True)
            run(maybe_sudo(["yum","-y","install","sshpass"]), check=True, quiet=quiet)
        elif pm == "zypper":
            run(maybe_sudo(["zypper","-n","install","sshpass"]), check=True, quiet=quiet)
        elif pm == "pacman":
            run(maybe_sudo(["pacman","-Sy","--noconfirm","sshpass"]), check=True, quiet=quiet)
        elif pm == "apk":
            run(maybe_sudo(["apk","add","--no-cache","sshpass"]), check=True, quiet=quiet)
    except subprocess.CalledProcessError as e:
        log(f"Failed to install sshpass: {e}", quiet)
        return False

    return have_cmd("sshpass")

def push_pubkey_with_password(user, host, port, password, pubkey_text, quiet=False) -> bool:
    if not have_cmd("sshpass"):
        log("sshpass is required locally to automate the password step. Install it and retry.", quiet)
        return False
    # Escape for remote double-quoted context
    esc = pubkey_text.replace("\\\\", "\\\\\\\\").replace('"', '\\\\"')
    env = os.environ.copy()
    env["SSHPASS"] = password
    cmd = [
        "sshpass","-e","ssh","-p",str(port),
        "-o","StrictHostKeyChecking=accept-new",
        "-o","PubkeyAuthentication=no",
        f"{user}@{host}",
        f'umask 077; mkdir -p ~/.ssh; touch ~/.ssh/authorized_keys; '
        f'grep -qxF "{esc}" ~/.ssh/authorized_keys || echo "{esc}" >> ~/.ssh/authorized_keys; '
        f'chmod 700 ~/.ssh; chmod 600 ~/.ssh/authorized_keys'
    ]
    cp = run(cmd, quiet=True, env=env)
    return cp.returncode == 0

def try_key_then_install(user, host, port, password, privkey_path, quiet=False) -> bool:
    pub = privkey_path + ".pub"
    if not os.path.isfile(pub):
        log(f"Missing {pub}", quiet)
        return False

    if test_passwordless(user, host, port, quiet=True):
        return True

    if not password:
        return False

    if not ensure_sshpass(quiet=quiet):
        return False

    with open(pub, "r", encoding="utf-8") as f:
        pubkey_text = f.read().strip()

    log("Passwordless not ready; attempting one-time key install via password\u2026", quiet)
    if not push_pubkey_with_password(user, host, port, password, pubkey_text, quiet):
        return False

    return test_passwordless(user, host, port, quiet=True)

def main():
    parser = argparse.ArgumentParser(description="Ensure passwordless SSH by installing a public key remotely if needed.")
    parser.add_argument("--host", required=True)
    parser.add_argument("--user", default="root")
    parser.add_argument("--port", default="22")
    parser.add_argument("--password", default="")
    parser.add_argument("--key-type", default="auto", choices=["auto","ed25519","rsa","both"])
    parser.add_argument("--key-dir", default=os.path.expanduser("~/.ssh"))
    parser.add_argument("--quiet", action="store_true")
    args = parser.parse_args()

    host = args.host.strip()
    user = args.user.strip() or "root"
    try:
        port = int(str(args.port).strip() or "22")
    except ValueError:
        port = 22
    password = args.password
    key_mode = args.key_type
    key_dir = args.key_dir
    quiet = args.quiet

    # Quick success if already passwordless
    if test_passwordless(user, host, port, quiet=True):
        msg = f"Passwordless SSH already works for {user}@{host}"
        log(msg, quiet)
        print(json.dumps({"success": True, "message": msg, "user": user, "host": host, "port": port}))
        sys.exit(0)

    ed_pk = rsa_pk = None
    if key_mode in ("ed25519","both","auto"):
        ed_pk = ensure_keypair("ed25519", key_dir, quiet=quiet)
    if key_mode in ("rsa","both"):
        rsa_pk = ensure_keypair("rsa", key_dir, quiet=quiet)

    # Try ed25519 first for auto
    if ed_pk:
        if try_key_then_install(user, host, port, password, ed_pk, quiet=quiet):
            msg = "Passwordless SSH ready (ed25519)."
            log(msg, quiet)
            print(json.dumps({"success": True, "message": msg, "user": user, "host": host, "port": port, "key_type": "ed25519"}))
            sys.exit(0)
        log("ed25519 attempt failed.", quiet)

    # Fallback to RSA if requested/auto/both
    if key_mode in ("auto","both") or rsa_pk:
        if not rsa_pk:
            rsa_pk = ensure_keypair("rsa", key_dir, quiet=quiet)
        if try_key_then_install(user, host, port, password, rsa_pk, quiet=quiet):
            msg = "Passwordless SSH ready (rsa)."
            log(msg, quiet)
            print(json.dumps({"success": True, "message": msg, "user": user, "host": host, "port": port, "key_type": "rsa"}))
            sys.exit(0)

    msg = f"Failed to establish passwordless SSH for {user}@{host}"
    log(msg, quiet)
    print(json.dumps({"success": False, "message": msg, "user": user, "host": host, "port": port}))
    sys.exit(1)

if __name__ == "__main__":
    main()
`;
const stop_task_script = `import subprocess
import sys
import os

def stop_task_now(unit_name):
    try:
        subprocess.run(['sudo', 'systemctl', 'stop', f'{unit_name}.service'], check=True)

    except subprocess.CalledProcessError as e:
        print(f"Failed to run task: {e}")
        sys.exit(1)
        
def check_for_service_file(unit_name):
    system_dir = '/etc/systemd/system/'
    prefix = "houston_scheduler_"
    suffix = '.service'
    
    for file in os.listdir(system_dir):
        if file.startswith(prefix) and file.endswith(suffix):
            base_name = file[:file.rfind('.')]
            if base_name == unit_name:
                return True
    return False

def main():
    unit_name = sys.argv[1]
    
    if check_for_service_file(unit_name):
        stop_task_now(unit_name)
    else:
        print(f'error: could not find task service file')
    
if __name__ == "__main__":
    main()`;
const errorString$2 = (e) => {
  var _a2;
  return (_a2 = e == null ? void 0 : e.message) != null ? _a2 : String(e);
};
const textDecoder$3 = new TextDecoder("utf-8");
async function runCommand$3(argv, opts = { superuser: "try" }) {
  var _a2;
  const proc = await unwrap(server$1.execute(new Command(argv, opts), false));
  const stdout = textDecoder$3.decode((_a2 = proc.stdout) != null ? _a2 : new Uint8Array());
  return { stdout, proc };
}
function safeParseJsonLoose(s2) {
  try {
    return JSON.parse(s2);
  } catch {
    const start = s2.indexOf("{");
    const end = s2.lastIndexOf("}");
    if (start !== -1 && end !== -1 && end > start) {
      try {
        return JSON.parse(s2.slice(start, end + 1));
      } catch {
      }
    }
    return null;
  }
}
function injectWithCheck(key, errorMessage) {
  const injectedValue = inject(key);
  if (!injectedValue) {
    throw new Error(errorMessage);
  }
  return injectedValue;
}
function findValue(obj, targetKey, valueKey) {
  var _a2;
  if (!obj || typeof obj !== "object")
    return null;
  if (obj.key === targetKey) {
    if (targetKey === valueKey && obj.value !== void 0) {
      return obj.value;
    }
    let foundChild = (_a2 = obj.children) == null ? void 0 : _a2.find((child) => child.key === valueKey);
    if (foundChild && foundChild.value !== void 0) {
      return foundChild.value;
    }
  }
  if (Array.isArray(obj.children)) {
    for (let child of obj.children) {
      const result = findValue(child, targetKey, valueKey);
      if (result !== null) {
        return result;
      }
    }
  }
  return null;
}
async function getPoolData(host, port, user) {
  try {
    const cmd = [
      "/usr/bin/env",
      "python3",
      "-c",
      get_zfs_data_script,
      "-t",
      "pools"
    ];
    if (host) {
      cmd.push("--host", host);
    }
    if (port) {
      cmd.push("--port", port);
    }
    if (user) {
      cmd.push("--user", user);
    }
    const { stdout } = await runCommand$3(cmd, { superuser: "try" });
    try {
      const parsedResult = JSON.parse(stdout);
      if (parsedResult.success) {
        return parsedResult.data;
      } else if (parsedResult.error) {
        console.error("Script error:", parsedResult.error);
      } else {
        console.log("Script executed but no pools found.");
      }
    } catch {
      return [];
    }
  } catch (err2) {
    console.error(err2);
    return null;
  }
}
async function getDatasetData(pool, host, port, user) {
  try {
    const cmd = [
      "/usr/bin/env",
      "python3",
      "-c",
      get_zfs_data_script,
      "-t",
      "datasets",
      "--pool",
      pool
    ];
    if (host) {
      cmd.push("--host", host);
    }
    if (port) {
      cmd.push("--port", port);
    }
    if (user) {
      cmd.push("--user", user);
    }
    const { stdout } = await runCommand$3(cmd, { superuser: "try" });
    try {
      const parsedResult = JSON.parse(stdout);
      if (parsedResult.success) {
        return parsedResult.data;
      } else if (parsedResult.error) {
        console.error("Script error:", parsedResult.error);
      } else {
        console.log("Script executed but no datasets found.");
      }
    } catch {
      return [];
    }
  } catch (err2) {
    console.error(err2);
    return null;
  }
}
async function testSSH(sshTarget) {
  try {
    const argv = ["/usr/bin/env", "python3", "-c", test_ssh_script, sshTarget];
    const { stdout } = await runCommand$3(argv, { superuser: "try" });
    return stdout.includes("True");
  } catch (err2) {
    console.error(err2);
    return false;
  }
}
async function testNetcat(user, netcatHost, port) {
  try {
    console.log(`target: ${netcatHost}, port: ${port}`);
    const argv = [
      "/usr/bin/env",
      "python3",
      "-c",
      test_netcat_script,
      user,
      netcatHost,
      port
    ];
    const { stdout } = await runCommand$3(argv, { superuser: "try" });
    console.log("testNetcat output:", stdout);
    return stdout.includes("True");
  } catch (err2) {
    console.error(err2);
    return false;
  }
}
async function executePythonScript(script2, args) {
  try {
    const argv = ["/usr/bin/env", "python3", "-c", script2, ...args];
    const { stdout } = await runCommand$3(argv, { superuser: "try" });
    return stdout;
  } catch (err2) {
    console.error(err2);
    return false;
  }
}
async function createTaskFiles(templateName, scriptPath, envFile, timerTemplate, scheduleFile) {
  console.log("createTaskFiles ", templateName);
  console.log(" createTaskFiles Script Path: ", scriptPath);
  return executePythonScript(task_file_creation_script, [
    "-tN",
    templateName,
    "-t",
    "create-task-schedule",
    "-sP",
    scriptPath,
    "-e",
    envFile,
    "-tt",
    timerTemplate,
    "-s",
    scheduleFile
  ]);
}
async function createStandaloneTask(templateName, scriptPath, envFile) {
  console.log(" createStandaloneTask Template Name: ", templateName);
  console.log(" createStandaloneTask Script Path: ", scriptPath);
  return executePythonScript(task_file_creation_script, [
    "-tN",
    templateName,
    "-t",
    "create-task",
    "-sP",
    scriptPath,
    "-e",
    envFile
  ]);
}
async function createScheduleForTask(taskName, timerTemplate, scheduleFile) {
  return executePythonScript(task_file_creation_script, [
    "-t",
    "create-schedule",
    "-n",
    taskName,
    "-tt",
    timerTemplate,
    "-s",
    scheduleFile
  ]);
}
async function removeTask(taskName) {
  return executePythonScript(remove_task_script, [taskName]);
}
async function runTask(taskName) {
  return executePythonScript(run_task_script, [taskName]);
}
async function stopTask(taskName) {
  return executePythonScript(stop_task_script, [taskName]);
}
const upperCaseWord = (word) => {
  let lowerCaseWord = word.toLowerCase();
  let firstLetter = lowerCaseWord.charAt(0);
  let remainingLetters = lowerCaseWord.substring(1);
  let firstLetterCap = firstLetter.toUpperCase();
  return firstLetterCap + remainingLetters;
};
function boolToYesNo(state) {
  if (state == true) {
    return "Yes";
  } else if (state == false) {
    return "No";
  }
}
function formatTemplateName(templateName) {
  let words = templateName.split(" ");
  let formattedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  let formattedTemplateName = formattedWords.join("");
  return formattedTemplateName;
}
async function getDisks(diskGroup) {
  try {
    const argv = ["/usr/bin/env", "python3", "-c", get_disks_script];
    const { stdout } = await runCommand$3(argv, { superuser: "try" });
    const parsedJSON = JSON.parse(stdout);
    for (let i2 = 0; i2 < parsedJSON.length; i2++) {
      const disk = {
        name: parsedJSON[i2].name,
        capacity: parsedJSON[i2].capacity,
        model: parsedJSON[i2].model,
        type: parsedJSON[i2].type,
        phy_path: parsedJSON[i2].phy_path,
        sd_path: parsedJSON[i2].sd_path,
        vdev_path: parsedJSON[i2].vdev_path,
        serial: parsedJSON[i2].serial,
        health: parsedJSON[i2].health,
        temp: parsedJSON[i2].temp
      };
      diskGroup.value.push(disk);
    }
  } catch (err2) {
    console.error(err2);
    return null;
  }
}
function getDiskIDName(disks, diskIdentifier, selectedDiskName) {
  const phyPathPrefix = "/dev/disk/by-path/";
  const sdPathPrefix = "/dev/";
  const newDisk = ref$1();
  const diskName = ref$1("");
  const diskPath = ref$1("");
  newDisk.value = disks.find((disk) => disk.name === selectedDiskName);
  switch (diskIdentifier) {
    case "vdev_path":
      diskPath.value = newDisk.value.vdev_path;
      diskName.value = selectedDiskName;
      break;
    case "phy_path":
      diskPath.value = newDisk.value.phy_path;
      diskName.value = diskPath.value.replace(phyPathPrefix, "");
      break;
    case "sd_path":
      diskPath.value = newDisk.value.sd_path;
      diskName.value = diskPath.value.replace(sdPathPrefix, "");
      break;
    default:
      console.log("error with selectedDiskNames/diskIdentifier");
      break;
  }
  return { diskName: diskName.value, diskPath: diskPath.value };
}
function truncateName(name, threshold) {
  return name.length > threshold ? name.slice(0, threshold) + "..." : name;
}
function splitAndClean(inputString, isDisk) {
  const cleanedString = inputString.trim().replace(/^['"]|['"]$/g, "");
  const parts = cleanedString.split(",");
  const cleanedParts = parts.map((part) => {
    let cleanedPart = part.trim();
    return cleanedPart;
  });
  return cleanedParts;
}
async function checkLocalPathExists(localPathStr) {
  var _a2;
  try {
    const { proc } = await runCommand$3(["test", "-e", localPathStr], { superuser: "try" });
    return proc.exitStatus === 0;
  } catch (err2) {
    console.error("Unexpected error:", err2);
    throw new Error(`Failed to check path existence: ${(_a2 = err2 == null ? void 0 : err2.message) != null ? _a2 : String(err2)}`);
  }
}
async function listSnapshots(dataset, user, host, port) {
  const base = ["zfs", "list", "-H", "-o", "name,guid,creation", "-t", "snapshot", "-r", dataset];
  const cmd = user && host ? port && port !== "22" ? ["ssh", "-p", String(port), `${user}@${host}`, ...base] : ["ssh", `${user}@${host}`, ...base] : base;
  try {
    const { stdout } = await runCommand$3(cmd, { superuser: "try" });
    const snaps = stdout.trim().split("\n").filter(Boolean).map((line) => {
      const [name, guid, cstr] = line.split(/\s+/, 3);
      const ms = Date.parse(cstr);
      const creation = Number.isFinite(ms) ? Math.floor(ms / 1e3) : 0;
      return { name, guid, creation };
    });
    snaps.sort((a2, b2) => a2.creation - b2.creation);
    return snaps;
  } catch (e) {
    console.error("listSnapshots error:", e);
    return [];
  }
}
function mostRecentCommonSnapshot(src, dst) {
  const srcByGuid = new Map(src.map((s2) => [s2.guid, s2]));
  let best = null;
  for (const d2 of dst) {
    const s2 = srcByGuid.get(d2.guid);
    if (s2 && (!best || s2.creation > best.creation))
      best = s2;
  }
  return best;
}
function destAheadOfCommon(src, dst, common) {
  const srcGuids = new Set(src.map((s2) => s2.guid));
  return dst.some((d2) => d2.creation > common.creation && !srcGuids.has(d2.guid));
}
async function ensurePasswordlessSSH(host, user = "root", port = 22, password, quiet = true) {
  var _a2;
  const args = ["--host", host, "--user", user, "--port", String(port), "--key-type", "auto"];
  if (password)
    args.push("--password", password);
  if (quiet)
    args.push("--quiet");
  const argv = ["/usr/bin/env", "python3", "-c", ensure_ssh_script, ...args];
  try {
    const { stdout, proc } = await runCommand$3(argv, { superuser: "try" });
    const parsed = safeParseJsonLoose(stdout);
    if (proc.exitStatus === 0) {
      return {
        success: true,
        message: (parsed == null ? void 0 : parsed.message) || stdout || "OK",
        data: parsed || void 0,
        raw: stdout,
        status: proc.exitStatus
      };
    }
    return {
      success: false,
      message: (parsed == null ? void 0 : parsed.message) || stdout || "Unknown error",
      data: parsed || void 0,
      raw: stdout,
      status: proc.exitStatus
    };
  } catch (err2) {
    const msg = (_a2 = err2 == null ? void 0 : err2.message) != null ? _a2 : String(err2);
    return {
      success: false,
      message: msg,
      raw: msg
    };
  }
}
async function testOrSetupSSH(opts) {
  var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
  const host = (opts.host || "").trim();
  const user = (opts.user || "root").trim();
  const port = (_a2 = opts.port) != null ? _a2 : 22;
  if (!host) {
    (_b = opts.onEvent) == null ? void 0 : _b.call(opts, { type: "success", title: "Local Transfer", message: "No remote host specified. SSH not required." });
    return { success: true, outcome: "ok-local", message: "Local transfer (no host)" };
  }
  try {
    const pre = await testSSH(`${user}@${host}`);
    if (pre) {
      (_c = opts.onEvent) == null ? void 0 : _c.call(opts, { type: "success", title: "Connection Successful!", message: "Passwordless SSH connection established." });
      return { success: true, outcome: "ok-already", message: "Passwordless already works" };
    }
  } catch {
  }
  (_d = opts.onEvent) == null ? void 0 : _d.call(opts, {
    type: "info",
    title: "Setting up SSH\u2026",
    message: `Passwordless SSH not detected for ${user}@${host}. Generating/installing a key\u2026`
  });
  try {
    const password = (_e = opts.passwordRef) == null ? void 0 : _e.value;
    const res = await ensurePasswordlessSSH(host, user, port, password, true);
    if (opts.passwordRef)
      opts.passwordRef.value = "";
    if (res.success) {
      (_f = opts.onEvent) == null ? void 0 : _f.call(opts, { type: "success", title: "SSH Ready", message: "Passwordless SSH is configured." });
      return { success: true, outcome: "ok-configured", message: res.message || "Configured", details: res.data };
    } else {
      (_h = opts.onEvent) == null ? void 0 : _h.call(opts, { type: "error", title: "SSH Setup Failed", message: ((_g = res.message) == null ? void 0 : _g.toString().slice(0, 800)) || "Unknown error" });
      return { success: false, outcome: "failed", message: res.message || "Failed", details: res.data };
    }
  } catch (err2) {
    if (opts.passwordRef)
      opts.passwordRef.value = "";
    const msg = ((err2 == null ? void 0 : err2.message) || errorString$2(err2) || "Unknown error").toString().slice(0, 800);
    (_i = opts.onEvent) == null ? void 0 : _i.call(opts, { type: "error", title: "SSH Setup Error", message: msg });
    return { success: false, outcome: "error", message: msg };
  }
}
async function currentUserIsPrivileged() {
  const u2 = await window.cockpit.user();
  const groups = (u2 == null ? void 0 : u2.groups) || [];
  return (u2 == null ? void 0 : u2.id) === 0 || groups.includes("wheel") || groups.includes("sudo");
}
function validateLocalPath(path) {
  const localPathRegex = /^(?:[a-zA-Z]:\\|\/)?(?:[\w\s\-().']+(?:\\|\/)?)*$/;
  return localPathRegex.test(path);
}
function validateRemotePath(path) {
  const rcloneRegex = /^[\w\-.]+:[\\/]*(?:[\w\s\-().']+[\\/]?)*$/;
  return rcloneRegex.test(path);
}
const loadingInjectionKey = Symbol("loading");
const schedulerInjectionKey = Symbol("scheduler");
const logInjectionKey = Symbol("log");
const taskInstancesInjectionKey = Symbol("task-instances");
const taskTemplatesInjectionKey = Symbol("task-templates");
const remoteManagerInjectionKey = Symbol("remote-manager");
const rcloneRemotesInjectionKey = Symbol("existing-remotes");
const truncateTextInjectionKey = Symbol("truncate-text");
const _hoisted_1$9 = {
  key: 0,
  class: "grid grid-cols-4 items-left text-left"
};
const _hoisted_2$9 = { class: "col-span-1" };
const _hoisted_3$8 = ["title"];
const _hoisted_4$c = ["title"];
const _hoisted_5$b = { key: 0 };
const _hoisted_6$b = { key: 1 };
const _hoisted_7$b = { key: 2 };
const _hoisted_8$9 = { key: 3 };
const _hoisted_9$8 = ["title"];
const _hoisted_10$7 = ["title"];
const _hoisted_11$6 = {
  key: 1,
  class: "my-2 truncate text-sm",
  title: `No Snapshot Retention Policy Configured`
};
const _hoisted_12$6 = {
  key: 2,
  class: "my-2"
};
const _hoisted_13$3 = ["title"];
const _hoisted_14$3 = ["title"];
const _hoisted_15$3 = { class: "col-span-1" };
const _hoisted_16$3 = ["title"];
const _hoisted_17$3 = ["title"];
const _hoisted_18$3 = ["title"];
const _hoisted_19$3 = ["title"];
const _hoisted_20$1 = {
  key: 1,
  class: "my-2 truncate text-sm",
  title: `No Snapshot Retention Policy Configured`
};
const _hoisted_21$1 = { class: "col-span-2 row-span-2" };
const _hoisted_22$1 = ["title"];
const _hoisted_23$1 = { key: 1 };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ZfsRepTaskDetails",
  props: {
    task: {}
  },
  setup(__props) {
    const props = __props;
    const taskInstance = ref$1(props.task);
    const myScheduler = injectWithCheck(schedulerInjectionKey, "scheduler not provided!");
    function findNestedValue(obj, path) {
      var _a2;
      const keys = path.split(".");
      let current = obj;
      for (const key of keys) {
        if (!current)
          return null;
        if (current.children) {
          current = current.children.find((child) => child.key === key);
        } else {
          return null;
        }
      }
      return (_a2 = current == null ? void 0 : current.value) != null ? _a2 : null;
    }
    function hasSnapshotRetentionPolicy(taskInstance2) {
      const sourceRetentionTime = findNestedValue(taskInstance2.parameters, "snapshotRetention.source.retentionTime");
      const destinationRetentionTime = findNestedValue(taskInstance2.parameters, "snapshotRetention.destination.retentionTime");
      return sourceRetentionTime > 0 || destinationRetentionTime > 0;
    }
    return (_ctx, _cache) => {
      return taskInstance.value.template.name === "ZFS Replication Task" ? (openBlock(), createElementBlock("div", _hoisted_1$9, [
        createBaseVNode("div", _hoisted_2$9, [
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Task Type: ${taskInstance.value.template.name}`
          }, [..._cache[0] || (_cache[0] = [
            createTextVNode(" Task Type: ", -1),
            createBaseVNode("b", null, "ZFS Replication Task", -1)
          ])], 8, _hoisted_3$8),
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Send Type: ${unref(findValue)(taskInstance.value.parameters, "destDataset", "host") !== "" ? "Remote" : "Local"}`
          }, [
            _cache[1] || (_cache[1] = createTextVNode(" Send Type: ", -1)),
            unref(findValue)(taskInstance.value.parameters, "destDataset", "host") !== "" && unref(findValue)(taskInstance.value.parameters, "sendOptions", "transferMethod") == "netcat" ? (openBlock(), createElementBlock("b", _hoisted_5$b, "Remote via Netcat")) : createCommentVNode("", true),
            unref(findValue)(taskInstance.value.parameters, "destDataset", "host") !== "" && unref(findValue)(taskInstance.value.parameters, "sendOptions", "transferMethod") == "ssh" ? (openBlock(), createElementBlock("b", _hoisted_6$b, "Remote via SSH")) : createCommentVNode("", true),
            unref(findValue)(taskInstance.value.parameters, "destDataset", "host") !== "" && unref(findValue)(taskInstance.value.parameters, "sendOptions", "transferMethod") == "" ? (openBlock(), createElementBlock("b", _hoisted_7$b, "Remote")) : createCommentVNode("", true),
            unref(findValue)(taskInstance.value.parameters, "destDataset", "host") === "" ? (openBlock(), createElementBlock("b", _hoisted_8$9, "Local")) : createCommentVNode("", true)
          ], 8, _hoisted_4$c),
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Source: ${unref(findValue)(taskInstance.value.parameters, "sourceDataset", "dataset")}`
          }, [
            _cache[2] || (_cache[2] = createTextVNode(" Source: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(findValue)(
              taskInstance.value.parameters,
              "sourceDataset",
              "dataset"
            )), 1)
          ], 8, _hoisted_9$8),
          hasSnapshotRetentionPolicy(taskInstance.value) ? (openBlock(), createElementBlock("p", {
            key: 0,
            class: "my-2 truncate",
            title: `Keep Src. Snapshots For: ${findNestedValue(taskInstance.value.parameters, "snapshotRetention.source.retentionTime")} ${findNestedValue(taskInstance.value.parameters, "snapshotRetention.source.retentionUnit")}`
          }, [
            _cache[3] || (_cache[3] = createTextVNode(" Keep Src. Snapshots For: ", -1)),
            createBaseVNode("b", null, toDisplayString(findNestedValue(taskInstance.value.parameters, "snapshotRetention.source.retentionTime")) + " " + toDisplayString(findNestedValue(taskInstance.value.parameters, "snapshotRetention.source.retentionUnit")), 1)
          ], 8, _hoisted_10$7)) : (openBlock(), createElementBlock("p", _hoisted_11$6, [..._cache[4] || (_cache[4] = [
            createBaseVNode("b", null, "No Snapshot Retention Policy Configured", -1)
          ])])),
          unref(findValue)(taskInstance.value.parameters, "destDataset", "host") !== "" ? (openBlock(), createElementBlock("p", _hoisted_12$6, [
            createBaseVNode("span", {
              class: "truncate",
              title: `Remote ${unref(findValue)(taskInstance.value.parameters, "sendOptions", "transferMethod") === "netcat" ? "Netcat" : "SSH"} Host: ${unref(findValue)(taskInstance.value.parameters, "destDataset", "host")}`
            }, [
              createTextVNode(" Remote " + toDisplayString(unref(findValue)(taskInstance.value.parameters, "sendOptions", "transferMethod") === "netcat" ? "Netcat" : "SSH") + " Host: ", 1),
              createBaseVNode("b", null, toDisplayString(unref(findValue)(taskInstance.value.parameters, "destDataset", "host")), 1)
            ], 8, _hoisted_13$3),
            createBaseVNode("span", {
              class: "truncate",
              title: `Remote ${unref(findValue)(taskInstance.value.parameters, "sendOptions", "transferMethod") === "netcat" ? "Netcat" : "SSH"} Port: ${unref(findValue)(taskInstance.value.parameters, "destDataset", "port")}`
            }, [
              createTextVNode(" Remote " + toDisplayString(unref(findValue)(taskInstance.value.parameters, "sendOptions", "transferMethod") === "netcat" ? "Netcat" : "SSH") + " Port: ", 1),
              createBaseVNode("b", null, toDisplayString(unref(findValue)(taskInstance.value.parameters, "destDataset", "port")), 1)
            ], 8, _hoisted_14$3)
          ])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_15$3, [
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Compression: ${unref(findValue)(taskInstance.value.parameters, "sendOptions", "raw_flag") ? "Raw" : unref(findValue)(taskInstance.value.parameters, "sendOptions", "compressed_flag") ? "Compressed" : "None"}`
          }, [
            _cache[5] || (_cache[5] = createTextVNode(" Compression: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(findValue)(
              taskInstance.value.parameters,
              "sendOptions",
              "raw_flag"
            ) ? "Raw" : unref(findValue)(
              taskInstance.value.parameters,
              "sendOptions",
              "compressed_flag"
            ) ? "Compressed" : "None"), 1)
          ], 8, _hoisted_16$3),
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Recursive Send: ${unref(boolToYesNo)(unref(findValue)(taskInstance.value.parameters, "sendOptions", "recursive_flag"))}`
          }, [
            _cache[6] || (_cache[6] = createTextVNode(" Recursive Send: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(boolToYesNo)(unref(findValue)(
              taskInstance.value.parameters,
              "sendOptions",
              "recursive_flag"
            ))), 1)
          ], 8, _hoisted_17$3),
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Destination: ${unref(findValue)(taskInstance.value.parameters, "destDataset", "dataset")}`
          }, [
            _cache[7] || (_cache[7] = createTextVNode(" Destination: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(findValue)(
              taskInstance.value.parameters,
              "destDataset",
              "dataset"
            )), 1)
          ], 8, _hoisted_18$3),
          hasSnapshotRetentionPolicy(taskInstance.value) ? (openBlock(), createElementBlock("p", {
            key: 0,
            class: "my-2 truncate",
            title: `Keep Dest. Snapshots For: ${findNestedValue(taskInstance.value.parameters, "snapshotRetention.destination.retentionTime")} ${findNestedValue(taskInstance.value.parameters, "snapshotRetention.destination.retentionUnit")}`
          }, [
            _cache[8] || (_cache[8] = createTextVNode(" Keep Dest. Snapshots For: ", -1)),
            createBaseVNode("b", null, toDisplayString(findNestedValue(taskInstance.value.parameters, "snapshotRetention.destination.retentionTime")) + " " + toDisplayString(findNestedValue(taskInstance.value.parameters, "snapshotRetention.destination.retentionUnit")), 1)
          ], 8, _hoisted_19$3)) : (openBlock(), createElementBlock("p", _hoisted_20$1, [..._cache[9] || (_cache[9] = [
            createBaseVNode("b", null, "No Snapshot Retention Policy Configured", -1)
          ])]))
        ]),
        createBaseVNode("div", _hoisted_21$1, [
          _cache[11] || (_cache[11] = createBaseVNode("p", { class: "my-2 font-bold" }, "Current Schedules:", -1)),
          taskInstance.value.schedule.intervals.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(taskInstance.value.schedule.intervals, (interval, idx) => {
            return openBlock(), createElementBlock("div", {
              key: idx,
              class: "flex flex-row col-span-2 divide divide-y divide-default p-1",
              title: `Run ${unref(myScheduler).parseIntervalIntoString(interval)}.`
            }, [
              createBaseVNode("p", null, "Run " + toDisplayString(unref(myScheduler).parseIntervalIntoString(interval)) + ".", 1)
            ], 8, _hoisted_22$1);
          }), 128)) : (openBlock(), createElementBlock("div", _hoisted_23$1, [..._cache[10] || (_cache[10] = [
            createBaseVNode("p", null, "No Intervals Currently Scheduled", -1)
          ])]))
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$8 = {
  key: 0,
  class: "grid grid-cols-4 items-left text-left"
};
const _hoisted_2$8 = { class: "col-span-1" };
const _hoisted_3$7 = ["title"];
const _hoisted_4$b = ["title"];
const _hoisted_5$a = ["title"];
const _hoisted_6$a = { class: "col-span-1" };
const _hoisted_7$a = ["title"];
const _hoisted_8$8 = ["title"];
const _hoisted_9$7 = {
  key: 1,
  class: "my-2 truncate",
  title: `No Retention Policy (Keep All Snapshots)`
};
const _hoisted_10$6 = { class: "col-span-2 row-span-2" };
const _hoisted_11$5 = ["title"];
const _hoisted_12$5 = { key: 1 };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "AutomatedSnapshotTaskDetails",
  props: {
    task: {}
  },
  setup(__props) {
    const props = __props;
    const taskInstance = ref$1(props.task);
    const myScheduler = injectWithCheck(schedulerInjectionKey, "scheduler not provided!");
    return (_ctx, _cache) => {
      return taskInstance.value.template.name === "Automated Snapshot Task" ? (openBlock(), createElementBlock("div", _hoisted_1$8, [
        createBaseVNode("div", _hoisted_2$8, [
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Task Type: ${taskInstance.value.template.name}`
          }, [..._cache[0] || (_cache[0] = [
            createTextVNode(" Task Type: ", -1),
            createBaseVNode("b", null, "Automated Snapshot Task", -1)
          ])], 8, _hoisted_3$7),
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Filesystem: ${unref(findValue)(taskInstance.value.parameters, "filesystem", "dataset")}`
          }, [
            _cache[1] || (_cache[1] = createTextVNode(" Filesystem: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(findValue)(
              taskInstance.value.parameters,
              "filesystem",
              "dataset"
            )), 1)
          ], 8, _hoisted_4$b),
          unref(findValue)(taskInstance.value.parameters, "customName_flag", "customName_flag") ? (openBlock(), createElementBlock("p", {
            key: 0,
            class: "my-2 truncate",
            title: `Custom Snapshot Name: ${unref(findValue)(taskInstance.value.parameters, "customName", "customName")}`
          }, [
            _cache[2] || (_cache[2] = createTextVNode(" Custom Snapshot Name: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(findValue)(
              taskInstance.value.parameters,
              "customName",
              "customName"
            )), 1)
          ], 8, _hoisted_5$a)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_6$a, [
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Recursive Snapshots: ${unref(boolToYesNo)(unref(findValue)(taskInstance.value.parameters, "recursive_flag", "recursive_flag"))}`
          }, [
            _cache[3] || (_cache[3] = createTextVNode(" Recursive Snapshots: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(boolToYesNo)(unref(findValue)(
              taskInstance.value.parameters,
              "recursive_flag",
              "recursive_flag"
            ))), 1)
          ], 8, _hoisted_7$a),
          unref(findValue)(taskInstance.value.parameters, "snapshotRetention", "retentionTime") > 0 ? (openBlock(), createElementBlock("p", {
            key: 0,
            class: "my-2 truncate",
            title: `Keep Snapshots For: ${unref(findValue)(taskInstance.value.parameters, "snapshotRetention", "retentionTime")} ${unref(findValue)(taskInstance.value.parameters, "snapshotRetention", "retentionUnit")}`
          }, [
            _cache[4] || (_cache[4] = createTextVNode(" Keep Snapshots For: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(findValue)(taskInstance.value.parameters, "snapshotRetention", "retentionTime")) + " " + toDisplayString(unref(findValue)(taskInstance.value.parameters, "snapshotRetention", "retentionUnit")), 1)
          ], 8, _hoisted_8$8)) : (openBlock(), createElementBlock("p", _hoisted_9$7, [..._cache[5] || (_cache[5] = [
            createBaseVNode("b", null, "No Retention Policy (Keep All Snapshots)", -1)
          ])]))
        ]),
        createBaseVNode("div", _hoisted_10$6, [
          _cache[7] || (_cache[7] = createBaseVNode("p", { class: "mt-2 font-bold" }, "Current Schedules:", -1)),
          taskInstance.value.schedule.intervals.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(taskInstance.value.schedule.intervals, (interval, idx) => {
            return openBlock(), createElementBlock("div", {
              key: idx,
              class: "flex flex-row col-span-2 divide divide-y divide-default p-1",
              title: `Run ${unref(myScheduler).parseIntervalIntoString(interval)}.`
            }, [
              createBaseVNode("p", null, "Run " + toDisplayString(unref(myScheduler).parseIntervalIntoString(interval)) + ".", 1)
            ], 8, _hoisted_11$5);
          }), 128)) : (openBlock(), createElementBlock("div", _hoisted_12$5, [..._cache[6] || (_cache[6] = [
            createBaseVNode("p", null, "No Intervals Currently Scheduled", -1)
          ])]))
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$7 = {
  key: 0,
  class: "grid grid-cols-4 items-left text-left"
};
const _hoisted_2$7 = { class: "col-span-1" };
const _hoisted_3$6 = ["title"];
const _hoisted_4$a = ["title"];
const _hoisted_5$9 = { key: 0 };
const _hoisted_6$9 = { key: 1 };
const _hoisted_7$9 = ["title"];
const _hoisted_8$7 = ["title"];
const _hoisted_9$6 = {
  key: 0,
  class: "my-2"
};
const _hoisted_10$3 = ["title"];
const _hoisted_11$4 = ["title"];
const _hoisted_12$4 = { class: "col-span-1" };
const _hoisted_13$2 = ["title"];
const _hoisted_14$2 = ["title"];
const _hoisted_15$2 = ["title"];
const _hoisted_16$2 = ["title"];
const _hoisted_17$2 = { class: "col-span-2 row-span-2" };
const _hoisted_18$2 = ["title"];
const _hoisted_19$2 = { key: 1 };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "RsyncTaskDetails",
  props: {
    task: {}
  },
  setup(__props) {
    const props = __props;
    const taskInstance = ref$1(props.task);
    const myScheduler = injectWithCheck(schedulerInjectionKey, "scheduler not provided!");
    return (_ctx, _cache) => {
      return taskInstance.value.template.name === "Rsync Task" ? (openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("div", _hoisted_2$7, [
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Task Type: ${taskInstance.value.template.name}`
          }, [..._cache[0] || (_cache[0] = [
            createTextVNode(" Task Type: ", -1),
            createBaseVNode("b", null, "Rsync Task", -1)
          ])], 8, _hoisted_3$6),
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Send Type: ${unref(findValue)(taskInstance.value.parameters, "target_info", "host") !== "" ? "Remote" : "Local"}`
          }, [
            _cache[1] || (_cache[1] = createTextVNode(" Transfer Type: ", -1)),
            unref(findValue)(taskInstance.value.parameters, "target_info", "host") !== "" ? (openBlock(), createElementBlock("b", _hoisted_5$9, "Remote (" + toDisplayString(unref(upperCaseWord)(unref(findValue)(taskInstance.value.parameters, "direction", "direction"))) + ")", 1)) : createCommentVNode("", true),
            unref(findValue)(taskInstance.value.parameters, "target_info", "host") === "" ? (openBlock(), createElementBlock("b", _hoisted_6$9, "Local (" + toDisplayString(unref(upperCaseWord)(unref(findValue)(taskInstance.value.parameters, "direction", "direction"))) + ")", 1)) : createCommentVNode("", true)
          ], 8, _hoisted_4$a),
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Local Path: ${unref(findValue)(taskInstance.value.parameters, "local_path", "local_path")}`
          }, [
            _cache[2] || (_cache[2] = createTextVNode(" Local Path: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(findValue)(taskInstance.value.parameters, "local_path", "local_path")), 1)
          ], 8, _hoisted_7$9),
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Target Path: ${unref(findValue)(taskInstance.value.parameters, "target_info", "path")}`
          }, [
            _cache[3] || (_cache[3] = createTextVNode(" Target Path: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(findValue)(taskInstance.value.parameters, "target_info", "path")), 1)
          ], 8, _hoisted_8$7),
          unref(findValue)(taskInstance.value.parameters, "target_info", "host") !== "" ? (openBlock(), createElementBlock("p", _hoisted_9$6, [
            createBaseVNode("span", {
              class: "truncate",
              title: `Remote SSH Host: ${unref(findValue)(taskInstance.value.parameters, "target_info", "host")}`
            }, [
              _cache[4] || (_cache[4] = createTextVNode(" Remote SSH Host: ", -1)),
              createBaseVNode("b", null, toDisplayString(unref(findValue)(taskInstance.value.parameters, "target_info", "host")), 1)
            ], 8, _hoisted_10$3),
            createBaseVNode("span", {
              class: "truncate",
              title: `Remote SSH Port: ${unref(findValue)(taskInstance.value.parameters, "target_info", "port")}`
            }, [
              _cache[5] || (_cache[5] = createTextVNode(" Remote SSH Port: : ", -1)),
              createBaseVNode("b", null, toDisplayString(unref(findValue)(taskInstance.value.parameters, "target_info", "port")), 1)
            ], 8, _hoisted_11$4)
          ])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_12$4, [
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Archive Mode: ${unref(boolToYesNo)(unref(findValue)(taskInstance.value.parameters, "rsyncOptions", "archive_flag"))}`
          }, [
            _cache[6] || (_cache[6] = createTextVNode(" Archive Mode: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(boolToYesNo)(unref(findValue)(taskInstance.value.parameters, "rsyncOptions", "archive_flag"))), 1)
          ], 8, _hoisted_13$2),
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Recursive: ${unref(boolToYesNo)(unref(findValue)(taskInstance.value.parameters, "rsyncOptions", "recursive_flag"))}`
          }, [
            _cache[7] || (_cache[7] = createTextVNode(" Recursive: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(boolToYesNo)(unref(findValue)(taskInstance.value.parameters, "rsyncOptions", "recursive_flag"))), 1)
          ], 8, _hoisted_14$2),
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Compressed: ${unref(boolToYesNo)(unref(findValue)(taskInstance.value.parameters, "rsyncOptions", "compressed_flag"))}`
          }, [
            _cache[8] || (_cache[8] = createTextVNode(" Compressed: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(boolToYesNo)(unref(findValue)(taskInstance.value.parameters, "rsyncOptions", "compressed_flag"))), 1)
          ], 8, _hoisted_15$2),
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Bandwidth Limit: ${unref(findValue)(taskInstance.value.parameters, "rsyncOptions", "bandwidth_limit_kbps") !== 0 ? `${unref(findValue)(taskInstance.value.parameters, "rsyncOptions", "bandwidth_limit_kbps")} kb/s` : "No"}`
          }, [
            _cache[9] || (_cache[9] = createTextVNode(" Bandwidth Limit: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(findValue)(taskInstance.value.parameters, "rsyncOptions", "bandwidth_limit_kbps") !== 0 ? `${unref(findValue)(taskInstance.value.parameters, "rsyncOptions", "bandwidth_limit_kbps")} kb/s` : "No"), 1)
          ], 8, _hoisted_16$2)
        ]),
        createBaseVNode("div", _hoisted_17$2, [
          _cache[11] || (_cache[11] = createBaseVNode("p", { class: "my-2 font-bold" }, "Current Schedules:", -1)),
          taskInstance.value.schedule.intervals.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(taskInstance.value.schedule.intervals, (interval, idx) => {
            return openBlock(), createElementBlock("div", {
              key: idx,
              class: "flex flex-row col-span-2 divide divide-y divide-default p-1",
              title: `Run ${unref(myScheduler).parseIntervalIntoString(interval)}.`
            }, [
              createBaseVNode("p", null, "Run " + toDisplayString(unref(myScheduler).parseIntervalIntoString(interval)) + ".", 1)
            ], 8, _hoisted_18$2);
          }), 128)) : (openBlock(), createElementBlock("div", _hoisted_19$2, [..._cache[10] || (_cache[10] = [
            createBaseVNode("p", null, "No Intervals Currently Scheduled", -1)
          ])]))
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$6 = {
  key: 0,
  class: "grid grid-cols-4 items-left text-left"
};
const _hoisted_2$6 = { class: "col-span-1" };
const _hoisted_3$5 = ["title"];
const _hoisted_4$5 = ["title"];
const _hoisted_5$5 = { class: "col-span-2 row-span-2" };
const _hoisted_6$8 = ["title"];
const _hoisted_7$8 = { key: 1 };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ScrubTaskDetails",
  props: {
    task: {}
  },
  setup(__props) {
    const props = __props;
    const taskInstance = ref$1(props.task);
    const myScheduler = injectWithCheck(schedulerInjectionKey, "scheduler not provided!");
    return (_ctx, _cache) => {
      return taskInstance.value.template.name === "Scrub Task" ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("div", _hoisted_2$6, [
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Task Type: ${taskInstance.value.template.name}`
          }, [..._cache[0] || (_cache[0] = [
            createTextVNode(" Task Type: ", -1),
            createBaseVNode("b", null, "Scrub Task", -1)
          ])], 8, _hoisted_3$5),
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Pool: ${unref(findValue)(taskInstance.value.parameters, "pool", "pool")}`
          }, [
            _cache[1] || (_cache[1] = createTextVNode(" Pool: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(findValue)(taskInstance.value.parameters, "pool", "pool")), 1)
          ], 8, _hoisted_4$5)
        ]),
        _cache[4] || (_cache[4] = createBaseVNode("div", { class: "col-span-1" }, null, -1)),
        createBaseVNode("div", _hoisted_5$5, [
          _cache[3] || (_cache[3] = createBaseVNode("p", { class: "my-2 font-bold" }, "Current Schedules:", -1)),
          taskInstance.value.schedule.intervals.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(taskInstance.value.schedule.intervals, (interval, idx) => {
            return openBlock(), createElementBlock("div", {
              key: idx,
              class: "flex flex-row col-span-2 divide divide-y divide-default p-1",
              title: `Run ${unref(myScheduler).parseIntervalIntoString(interval)}.`
            }, [
              createBaseVNode("p", null, "Run " + toDisplayString(unref(myScheduler).parseIntervalIntoString(interval)) + ".", 1)
            ], 8, _hoisted_6$8);
          }), 128)) : (openBlock(), createElementBlock("div", _hoisted_7$8, [..._cache[2] || (_cache[2] = [
            createBaseVNode("p", null, "No Intervals Currently Scheduled", -1)
          ])]))
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$5 = {
  key: 0,
  class: "grid grid-cols-4 items-left text-left"
};
const _hoisted_2$5 = { class: "col-span-2" };
const _hoisted_3$4 = ["title"];
const _hoisted_4$4 = ["title"];
const _hoisted_5$4 = ["title"];
const _hoisted_6$7 = { class: "p-1 mx-1 font-medium border border-default rounded-lg bg-accent" };
const _hoisted_7$7 = { class: "col-span-2 row-span-2" };
const _hoisted_8$3 = ["title"];
const _hoisted_9$3 = { key: 1 };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "SmartTestTaskDetails",
  props: {
    task: {}
  },
  setup(__props) {
    const props = __props;
    const taskInstance = ref$1(props.task);
    const myScheduler = injectWithCheck(schedulerInjectionKey, "scheduler not provided!");
    const disksArray = splitAndClean(findValue(taskInstance.value.parameters, "disks", "disks"));
    return (_ctx, _cache) => {
      return taskInstance.value.template.name === "SMART Test" ? (openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$5, [
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Task Type: ${taskInstance.value.template.name}`
          }, [..._cache[0] || (_cache[0] = [
            createTextVNode(" Task Type: ", -1),
            createBaseVNode("b", null, "SMART Test Task", -1)
          ])], 8, _hoisted_3$4),
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: ` Test Type: ${unref(upperCaseWord)(unref(findValue)(taskInstance.value.parameters, "testType", "testType"))}`
          }, [
            _cache[1] || (_cache[1] = createTextVNode(" Test Type: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(upperCaseWord)(unref(findValue)(taskInstance.value.parameters, "testType", "testType"))), 1)
          ], 8, _hoisted_4$4),
          createBaseVNode("p", {
            class: "my-2",
            title: `Disks: ${unref(findValue)(taskInstance.value.parameters, "disks", "disks")}`
          }, [
            _cache[2] || (_cache[2] = createTextVNode(" Disks: ", -1)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(disksArray), (disk, idx) => {
              return openBlock(), createElementBlock("span", _hoisted_6$7, toDisplayString(unref(disksArray)[idx]), 1);
            }), 256))
          ], 8, _hoisted_5$4)
        ]),
        createBaseVNode("div", _hoisted_7$7, [
          _cache[4] || (_cache[4] = createBaseVNode("p", { class: "my-2 font-bold" }, "Current Schedules:", -1)),
          taskInstance.value.schedule.intervals.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(taskInstance.value.schedule.intervals, (interval, idx) => {
            return openBlock(), createElementBlock("div", {
              key: idx,
              class: "flex flex-row col-span-2 divide divide-y divide-default p-1",
              title: `Run ${unref(myScheduler).parseIntervalIntoString(interval)}.`
            }, [
              createBaseVNode("p", null, "Run " + toDisplayString(unref(myScheduler).parseIntervalIntoString(interval)) + ".", 1)
            ], 8, _hoisted_8$3);
          }), 128)) : (openBlock(), createElementBlock("div", _hoisted_9$3, [..._cache[3] || (_cache[3] = [
            createBaseVNode("p", null, "No Intervals Currently Scheduled", -1)
          ])]))
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
class ParameterNode {
  constructor(label, key) {
    __publicField(this, "label");
    __publicField(this, "key");
    __publicField(this, "children");
    __publicField(this, "value");
    this.label = label;
    this.key = key;
    this.children = [];
  }
  addChild(child) {
    this.children.push(child);
    return this;
  }
  getChild(key) {
    return this.children.find((child) => child.key === key);
  }
  asEnvKeyValues() {
    return this.children.map((c) => c.asEnvKeyValues()).flat().map((kv) => `${this.key}_${kv}`);
  }
}
class StringParameter extends ParameterNode {
  constructor(label, key, value = "") {
    super(label, key);
    __publicField(this, "value");
    this.value = value;
  }
  asEnvKeyValues() {
    return [`${this.key}=${this.value}`];
  }
}
class IntParameter extends ParameterNode {
  constructor(label, key, value = 0) {
    super(label, key);
    __publicField(this, "value");
    this.value = value;
  }
  asEnvKeyValues() {
    return [`${this.key}=${this.value.toString()}`];
  }
}
class BoolParameter extends ParameterNode {
  constructor(label, key, value = false) {
    super(label, key);
    __publicField(this, "value");
    this.value = value;
  }
  asEnvKeyValues() {
    return [`${this.key}=${this.value ? "true" : "false"}`];
  }
}
class SelectionOption {
  constructor(value, label) {
    __publicField(this, "value");
    __publicField(this, "label");
    this.value = value;
    this.label = label;
  }
}
class SelectionParameter extends ParameterNode {
  constructor(label, key, value = "", options = []) {
    super(label, key);
    __publicField(this, "value");
    __publicField(this, "options");
    this.value = value;
    this.options = options;
  }
  addOption(option) {
    this.options.push(option);
  }
  asEnvKeyValues() {
    return [`${this.key}=${this.value}`];
  }
}
class SnapshotRetentionParameter extends ParameterNode {
  constructor(label, key, retentionTime, retentionUnit) {
    super(label, key);
    this.addChild(new IntParameter("Retention Time", "retentionTime", retentionTime));
    const retentionUnitParam = new SelectionParameter("Retention Unit", "retentionUnit", retentionUnit, [
      new SelectionOption("minutes", "Minutes"),
      new SelectionOption("hours", "Hours"),
      new SelectionOption("days", "Days"),
      new SelectionOption("weeks", "Weeks"),
      new SelectionOption("months", "Months"),
      new SelectionOption("years", "Years")
    ]);
    this.addChild(retentionUnitParam);
  }
}
class ZfsDatasetParameter extends ParameterNode {
  constructor(label, key, host = "", port = 0, user = "", pool = "", dataset = "") {
    super(label, key);
    this.addChild(new StringParameter("Host", "host", host));
    this.addChild(new IntParameter("Port", "port", port));
    this.addChild(new StringParameter("User", "user", user));
    const poolParam = new SelectionParameter("Pool", "pool", pool);
    this.addChild(poolParam);
    const datasetParam = new SelectionParameter("Dataset", "dataset", dataset);
    this.addChild(datasetParam);
  }
  async loadPools() {
    const pools = await getPoolData(this.children["host"], this.children["port"], this.children["user"]);
    const poolParam = this.getChild("pool");
    pools.forEach((pool) => {
      poolParam.addOption(new SelectionOption(pool, pool));
    });
  }
  async loadDatasets(pool) {
    const datasets = await getDatasetData(this.children["host"], this.children["port"], this.children["user"], pool);
    const datasetParam = this.getChild("dataset");
    datasets.forEach((dataset) => {
      datasetParam.addOption(new SelectionOption(dataset, dataset));
    });
  }
  getChild(key) {
    const child = this.children.find((child2) => child2.key === key);
    if (!child) {
      throw new Error(`Child with key ${key} not found`);
    }
    return child;
  }
  static fromLocation(label, key, location2) {
    const { host, port, user, root, path } = location2;
    return new ZfsDatasetParameter(label, key, host, port, user, root, path);
  }
  toLocation() {
    this.children[0].value;
    this.children[1].value;
    const host = this.children[3].value;
    const port = this.children[4].value;
    const user = this.children[5].value;
    const root = this.children[6].value;
    const path = this.children[7].value;
    return { host, port, user, root, path };
  }
}
class Location {
  constructor(host, port, user, root, path) {
    __publicField(this, "host");
    __publicField(this, "port");
    __publicField(this, "user");
    __publicField(this, "root");
    __publicField(this, "path");
    this.host = host;
    this.port = port;
    this.user = user;
    this.root = root;
    this.path = path;
  }
}
class LocationParameter extends ParameterNode {
  constructor(label, key, host = "", port = 22, user = "", root = "", path = "", pass = "") {
    super(label, key);
    this.addChild(new StringParameter("Host", "host", host));
    this.addChild(new IntParameter("Port", "port", port));
    this.addChild(new StringParameter("User", "user", user));
    this.addChild(new StringParameter("Root", "root", root));
    this.addChild(new StringParameter("Path", "path", path));
    this.addChild(new StringParameter("Password (optional)", "pass", pass));
  }
  static fromLocation(label, key, location2) {
    const { host, port, user, root, path } = location2;
    return new LocationParameter(label, key, host, port, user, root, path, "");
  }
  toLocation() {
    const host = this.children[0].value;
    const port = this.children[1].value;
    const user = this.children[2].value;
    const root = this.children[3].value;
    const path = this.children[4].value;
    return new Location(host, port, user, root, path);
  }
  getPassword() {
    var _a2, _b;
    const pass = (_b = (_a2 = this.children[5]) == null ? void 0 : _a2.value) == null ? void 0 : _b.trim();
    return pass ? pass : void 0;
  }
}
const providerLogos = {
  "s3-AWS": {
    logo: "./img/s3-amazon.svg",
    mainColor: "#252F3E",
    hoverColor: "#13152D"
  },
  "s3-Wasabi": {
    logo: "./img/s3-wasabi.svg",
    mainColor: "#01CE3F",
    hoverColor: "#005B1C"
  },
  "s3-Ceph": {
    logo: "./img/s3-ceph.svg",
    mainColor: "#F05C56",
    hoverColor: "#9D2E1E"
  },
  "b2": {
    logo: "./img/backblaze.svg",
    mainColor: "#D2202F",
    hoverColor: "#610F16"
  },
  "dropbox": {
    logo: "./img/dropbox.svg",
    mainColor: "#0061FF",
    hoverColor: "#00235C"
  },
  "drive": {
    logo: "./img/google-drive.svg",
    mainColor: "#FF4329",
    hoverColor: "#DB1B00"
  },
  "google cloud storage": {
    logo: "./img/google-cloud.svg",
    mainColor: "#FA3B00",
    hoverColor: "#9E2500"
  },
  "azureblob": {
    logo: "./img/azure.svg",
    mainColor: "#00BCF2",
    hoverColor: "#004357"
  },
  "storj": {
    logo: "./img/Storj.svg",
    mainColor: "#00BCF2",
    hoverColor: "#1E90FF"
  },
  "s3-IDrive": {
    logo: "./img/IDrive.png",
    mainColor: "#00BCF2",
    hoverColor: "#1E90FF"
  }
};
class CloudSyncProvider {
  constructor(name, type2, providerParams) {
    __publicField(this, "name");
    __publicField(this, "type");
    __publicField(this, "providerParams");
    this.name = name;
    this.type = type2;
    this.providerParams = providerParams;
  }
  getProviderParameters() {
    return Object.entries(this.providerParams.parameters).map(([key, param]) => ({ key, ...param }));
  }
}
const cloudSyncProviders = {
  "dropbox": new CloudSyncProvider("Dropbox", "dropbox", {
    parameters: {
      token: { value: "", type: "object", defaultValue: "" },
      client_id: { value: "", type: "string", defaultValue: "Leave blank to use the built-in OAuth client ID." },
      client_secret: { value: "", type: "string", defaultValue: "Leave blank to use the built-in OAuth client secret." }
    },
    oAuthSupported: true
  }),
  "drive": new CloudSyncProvider("Google Drive", "drive", {
    parameters: {
      token: { value: "", type: "object", defaultValue: "" },
      scope: { value: "drive", type: "select", allowedValues: ["drive", "drive.readonly", "drive.file", "drive.appfolder", "drive.metadata.readonly"], defaultValue: "drive" },
      client_id: { value: "", type: "string", defaultValue: "Leave blank to use the built-in OAuth client ID." },
      client_secret: { value: "", type: "string", defaultValue: "Leave blank to use the built-in OAuth client secret." },
      root_folder_id: { value: "", type: "string", defaultValue: "" },
      service_account_file: { value: "", type: "string", defaultValue: "" }
    },
    oAuthSupported: true
  }),
  "google cloud storage": new CloudSyncProvider("Google Cloud", "google cloud storage", {
    parameters: {
      token: { value: "", type: "object", defaultValue: "" },
      client_id: { value: "", type: "string", defaultValue: "Leave blank to use the built-in OAuth client ID." },
      client_secret: { value: "", type: "string", defaultValue: "Leave blank to use the built-in OAuth client secret." },
      project_number: { value: "", type: "string", defaultValue: "" },
      service_account_file: { value: "", type: "string", defaultValue: "" },
      anonymous: { value: false, type: "bool", defaultValue: false },
      object_acl: { value: "private", type: "select", allowedValues: ["authenticatedRead", "bucketOwnerFullControl", "bucketOwnerRead", "private", "projectPrivate", "publicRead"], defaultValue: "private" },
      bucket_acl: { value: "private", type: "select", allowedValues: ["authenticatedRead", "private", "projectPrivate", "publicRead", "publicReadWrite"], defaultValue: "private" }
    },
    oAuthSupported: true
  }),
  "azureblob": new CloudSyncProvider("Microsoft Azure Blob", "azureblob", {
    parameters: {
      account: { value: "", type: "string", defaultValue: "" },
      service_principal_file: { value: "", type: "string", defaultValue: "" },
      key: { value: "", type: "string", defaultValue: "" },
      sas_url: { value: "", type: "string", defaultValue: "" },
      use_msi: { value: false, type: "bool", defaultValue: false },
      use_emulator: { value: false, type: "bool", defaultValue: false }
    }
  }),
  "b2": new CloudSyncProvider("Backblaze B2", "b2", {
    parameters: {
      account: { value: "", type: "string", defaultValue: "" },
      key: { value: "", type: "string", defaultValue: "" },
      hard_delete: { value: false, type: "bool", defaultValue: false }
    }
  }),
  "s3-Wasabi": new CloudSyncProvider("Wasabi", "s3", {
    parameters: {
      provider: { value: "Wasabi", type: "string", defaultValue: "Wasabi" },
      env_auth: { value: false, type: "bool", defaultValue: false },
      access_key_id: { value: "", type: "string", defaultValue: "" },
      secret_access_key: { value: "", type: "string", defaultValue: "" },
      endpoint: { value: "", type: "string", defaultValue: "" },
      region: { value: "", type: "string", allowedValues: ["", "other-v2-signature"], defaultValue: "" },
      location_constraint: { value: "", type: "string", defaultValue: "" },
      acl: { value: "private", type: "select", allowedValues: ["private", "public-read", "public-read-write", "authenticated-read", "bucket-owner-read", "bucket-owner-full-control"], defaultValue: "private" }
    }
  }),
  "s3-AWS": new CloudSyncProvider("Amazon S3", "s3", {
    parameters: {
      provider: { value: "AWS", type: "string", defaultValue: "AWS" },
      env_auth: { value: false, type: "bool", defaultValue: false },
      access_key_id: { value: "", type: "string", defaultValue: "" },
      secret_access_key: { value: "", type: "string", defaultValue: "" },
      endpoint: { value: "", type: "string", defaultValue: "" },
      region: { value: "", type: "string", allowedValues: ["", "other-v2-signature"], defaultValue: "" },
      location_constraint: { value: "", type: "string", defaultValue: "" },
      acl: { value: "private", type: "select", allowedValues: ["private", "public-read", "public-read-write", "authenticated-read", "bucket-owner-read", "bucket-owner-full-control"], defaultValue: "private" }
    }
  }),
  "s3-Ceph": new CloudSyncProvider("Ceph", "s3", {
    parameters: {
      provider: { value: "Ceph", type: "string", defaultValue: "Ceph" },
      env_auth: { value: false, type: "bool", defaultValue: false },
      access_key_id: { value: "", type: "string", defaultValue: "" },
      secret_access_key: { value: "", type: "string", defaultValue: "" },
      endpoint: { value: "", type: "string", defaultValue: "" },
      region: { value: "", type: "string", allowedValues: ["", "other-v2-signature"], defaultValue: "" },
      location_constraint: { value: "", type: "string", defaultValue: "" },
      acl: { value: "private", type: "select", allowedValues: ["private", "public-read", "public-read-write", "authenticated-read", "bucket-owner-read", "bucket-owner-full-control"], defaultValue: "private" }
    }
  }),
  "s3-IDrive": new CloudSyncProvider("IDrive e2", "s3", {
    parameters: {
      provider: { value: "IDrive", type: "string", defaultValue: "IDrive" },
      env_auth: { value: false, type: "bool", defaultValue: false },
      access_key_id: { value: "", type: "string", defaultValue: "" },
      secret_access_key: { value: "", type: "string", defaultValue: "" },
      endpoint: { value: "", type: "string", defaultValue: "" },
      acl: { value: "private", type: "select", allowedValues: ["private", "public-read", "public-read-write", "authenticated-read", "bucket-owner-read", "bucket-owner-full-control"], defaultValue: "private" }
    }
  }),
  "storj": new CloudSyncProvider("Storj", "storj", {
    parameters: {
      provider: { value: "existing", type: "select", allowedValues: ["existing", "new"], defaultValue: "existing" },
      access_grant: { value: "", type: "string", defaultValue: "" },
      satellite_address: { value: "us1.storj.io", type: "select", allowedValues: ["us1.storj.io", "eu1.storj.io", "ap1.storj.io"], defaultValue: "us1.storj.io" },
      api_key: { value: "", type: "string", defaultValue: "" },
      passphrase: { value: "", type: "string", defaultValue: "" },
      description: { value: "", type: "string", defaultValue: "" }
    }
  })
};
class CloudSyncRemote extends ParameterNode {
  constructor(name, type2, authParams, provider) {
    super(`Rclone Remote`, `remoteType-${type2}`);
    __publicField(this, "key");
    __publicField(this, "name");
    __publicField(this, "type");
    __publicField(this, "provider");
    __publicField(this, "authParams");
    this.key = "cloud_sync_remote";
    this.name = name;
    this.type = type2;
    this.authParams = authParams;
    this.provider = provider;
  }
  getAuthParameter(paramKey) {
    var _a2;
    return (_a2 = this.authParams.parameters[paramKey]) == null ? void 0 : _a2.value;
  }
  getProviderType() {
    if (this.provider.type == "s3") {
      return `${this.provider.type}-${this.provider.providerParams.parameters.provider.value}`;
    } else {
      return this.provider.type;
    }
  }
  getProviderName() {
    return this.provider.name;
  }
  asEnvKeyValues() {
    return [`${this.key}=${this.name}`];
  }
}
function getProviderLogo(selectedProvider, selectedRemote) {
  var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
  const type2 = selectedProvider ? selectedProvider.type : selectedRemote == null ? void 0 : selectedRemote.type;
  const provider = ((_c = (_b = (_a2 = selectedProvider == null ? void 0 : selectedProvider.providerParams) == null ? void 0 : _a2.parameters) == null ? void 0 : _b.provider) == null ? void 0 : _c.value) || ((_g = (_f = (_e = (_d = selectedRemote == null ? void 0 : selectedRemote.provider) == null ? void 0 : _d.providerParams) == null ? void 0 : _e.parameters) == null ? void 0 : _f.provider) == null ? void 0 : _g.value);
  if (type2 === "s3" && provider) {
    return ((_h = providerLogos[`${type2}-${provider}`]) == null ? void 0 : _h.logo) || "";
  } else if (type2) {
    return ((_i = providerLogos[type2]) == null ? void 0 : _i.logo) || "";
  }
  return "";
}
function getProviderColor(selectedProvider, selectedRemote) {
  var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
  const type2 = selectedProvider ? selectedProvider.type : selectedRemote == null ? void 0 : selectedRemote.type;
  const provider = ((_c = (_b = (_a2 = selectedProvider == null ? void 0 : selectedProvider.providerParams) == null ? void 0 : _a2.parameters) == null ? void 0 : _b.provider) == null ? void 0 : _c.value) || ((_g = (_f = (_e = (_d = selectedRemote == null ? void 0 : selectedRemote.provider) == null ? void 0 : _d.providerParams) == null ? void 0 : _e.parameters) == null ? void 0 : _f.provider) == null ? void 0 : _g.value);
  if (type2 === "s3" && provider) {
    return (_h = providerLogos[`${type2}-${provider}`]) == null ? void 0 : _h.mainColor;
  } else if (type2) {
    return (_i = providerLogos[type2]) == null ? void 0 : _i.mainColor;
  }
  return "#000000";
}
function getProviderHoverColor(selectedProvider, selectedRemote) {
  var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
  const type2 = selectedProvider ? selectedProvider.type : selectedRemote == null ? void 0 : selectedRemote.type;
  const provider = ((_c = (_b = (_a2 = selectedProvider == null ? void 0 : selectedProvider.providerParams) == null ? void 0 : _a2.parameters) == null ? void 0 : _b.provider) == null ? void 0 : _c.value) || ((_g = (_f = (_e = (_d = selectedRemote == null ? void 0 : selectedRemote.provider) == null ? void 0 : _d.providerParams) == null ? void 0 : _e.parameters) == null ? void 0 : _f.provider) == null ? void 0 : _g.value);
  if (type2 === "s3" && provider) {
    return (_h = providerLogos[`${type2}-${provider}`]) == null ? void 0 : _h.hoverColor;
  } else if (type2) {
    return (_i = providerLogos[type2]) == null ? void 0 : _i.hoverColor;
  }
  return "#000000";
}
function getButtonStyles(hovered, selectedProvider, selectedRemote) {
  const mainColor = getProviderColor(selectedProvider, selectedRemote);
  const hoverColor = getProviderHoverColor(selectedProvider, selectedRemote);
  return {
    backgroundColor: hovered ? hoverColor : mainColor,
    transition: "background-color 0.01s ease"
  };
}
const _hoisted_1$4 = {
  key: 0,
  class: "grid grid-cols-4 items-left text-left"
};
const _hoisted_2$4 = { class: "col-span-1" };
const _hoisted_3$3 = ["title"];
const _hoisted_4$3 = ["title"];
const _hoisted_5$3 = ["title"];
const _hoisted_6$3 = ["title"];
const _hoisted_7$3 = ["src", "title"];
const _hoisted_8$2 = { key: 1 };
const _hoisted_9$2 = ["title"];
const _hoisted_10$2 = ["title"];
const _hoisted_11$2 = { class: "col-span-1" };
const _hoisted_12$2 = ["title"];
const _hoisted_13$1 = ["title"];
const _hoisted_14$1 = ["title"];
const _hoisted_15$1 = ["title"];
const _hoisted_16$1 = ["title"];
const _hoisted_17$1 = { class: "col-span-2 row-span-2" };
const _hoisted_18$1 = ["title"];
const _hoisted_19$1 = { key: 1 };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CloudSyncTaskDetails",
  props: {
    task: {}
  },
  setup(__props) {
    const props = __props;
    const taskInstance = ref$1(props.task);
    const myScheduler = injectWithCheck(schedulerInjectionKey, "scheduler not provided!");
    const myRemoteManager = injectWithCheck(remoteManagerInjectionKey, "remotes not found!");
    const cloudRemote = ref$1();
    onMounted(async () => {
      cloudRemote.value = await myRemoteManager.getRemoteByName(findValue(taskInstance.value.parameters, "rclone_remote", "rclone_remote"));
    });
    return (_ctx, _cache) => {
      return taskInstance.value.template.name === "Cloud Sync Task" ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$4, [
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Task Type: ${taskInstance.value.template.name}`
          }, [..._cache[0] || (_cache[0] = [
            createTextVNode(" Task Type: ", -1),
            createBaseVNode("b", null, "Cloud Sync Task", -1)
          ])], 8, _hoisted_3$3),
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Direction: ${unref(upperCaseWord)(unref(findValue)(taskInstance.value.parameters, "type", "type"))}`
          }, [
            _cache[1] || (_cache[1] = createTextVNode(" Transfer Type: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(upperCaseWord)(unref(findValue)(taskInstance.value.parameters, "type", "type"))) + " (" + toDisplayString(unref(upperCaseWord)(unref(findValue)(taskInstance.value.parameters, "direction", "direction"))) + ")", 1)
          ], 8, _hoisted_4$3),
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Local Path: ${unref(findValue)(taskInstance.value.parameters, "local_path", "local_path")}`
          }, [
            _cache[2] || (_cache[2] = createTextVNode(" Local Path: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(findValue)(taskInstance.value.parameters, "local_path", "local_path")), 1)
          ], 8, _hoisted_5$3),
          cloudRemote.value ? (openBlock(), createElementBlock("p", {
            key: 0,
            class: "my-2 truncate",
            title: `Target Remote: ${cloudRemote.value.name}`
          }, [
            _cache[3] || (_cache[3] = createTextVNode(" Rclone Remote: ", -1)),
            createBaseVNode("b", null, toDisplayString(cloudRemote.value.name), 1),
            cloudRemote.value ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: unref(getProviderLogo)(void 0, cloudRemote.value),
              alt: "provider-logo",
              class: "inline-block w-5 h-5 ml-2 -mt-1",
              title: `Provider: ${cloudRemote.value.getProviderName()}`
            }, null, 8, _hoisted_7$3)) : createCommentVNode("", true)
          ], 8, _hoisted_6$3)) : (openBlock(), createElementBlock("p", _hoisted_8$2, " Loading Rclone Remote... ")),
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Target Path: ${unref(findValue)(taskInstance.value.parameters, "target_path", "target_path")}`
          }, [
            _cache[4] || (_cache[4] = createTextVNode(" Target Path: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(findValue)(taskInstance.value.parameters, "target_path", "target_path")), 1)
          ], 8, _hoisted_9$2),
          unref(findValue)(taskInstance.value.parameters, "rcloneOptions", "include_pattern") !== "" ? (openBlock(), createElementBlock("p", {
            key: 2,
            class: "my-2 truncate",
            title: `Include Pattern: ${unref(findValue)(taskInstance.value.parameters, "rcloneOptions", "include_pattern")}`
          }, [
            _cache[5] || (_cache[5] = createTextVNode(" Include Pattern: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(findValue)(taskInstance.value.parameters, "rcloneOptions", "include_pattern")), 1)
          ], 8, _hoisted_10$2)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_11$2, [
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Dry Run: ${unref(boolToYesNo)(unref(findValue)(taskInstance.value.parameters, "rcloneOptions", "dry_run_flag"))}`
          }, [
            _cache[6] || (_cache[6] = createTextVNode(" Dry Run: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(boolToYesNo)(unref(findValue)(taskInstance.value.parameters, "rcloneOptions", "dry_run_flag"))), 1)
          ], 8, _hoisted_12$2),
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Check First: ${unref(boolToYesNo)(unref(findValue)(taskInstance.value.parameters, "rcloneOptions", "check_first_flag"))}`
          }, [
            _cache[7] || (_cache[7] = createTextVNode(" Check First: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(boolToYesNo)(unref(findValue)(
              taskInstance.value.parameters,
              "rcloneOptions",
              "check_first_flag"
            ))), 1)
          ], 8, _hoisted_13$1),
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Bandwidth Limit: ${unref(findValue)(taskInstance.value.parameters, "rcloneOptions", "bandwidth_limit_kbps") !== 0 ? `${unref(findValue)(taskInstance.value.parameters, "rcloneOptions", "bandwidth_limit_kbps")} kb/s` : "No"}`
          }, [
            _cache[8] || (_cache[8] = createTextVNode(" Bandwidth Limit: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(findValue)(taskInstance.value.parameters, "rcloneOptions", "bandwidth_limit_kbps") !== 0 ? `${unref(findValue)(taskInstance.value.parameters, "rcloneOptions", "bandwidth_limit_kbps")} kb/s` : "No"), 1)
          ], 8, _hoisted_14$1),
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Number of Transfers: ${unref(findValue)(taskInstance.value.parameters, "rcloneOptions", "transfers") !== 0 ? `${unref(findValue)(taskInstance.value.parameters, "rcloneOptions", "transfers")}` : "4 (Default)"}`
          }, [
            _cache[9] || (_cache[9] = createTextVNode(" Number of Transfers: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(findValue)(taskInstance.value.parameters, "rcloneOptions", "transfers") !== 0 ? `${unref(findValue)(taskInstance.value.parameters, "rcloneOptions", "transfers")}` : "4 (Default)"), 1)
          ], 8, _hoisted_15$1),
          unref(findValue)(taskInstance.value.parameters, "rcloneOptions", "exclude_pattern") !== "" ? (openBlock(), createElementBlock("p", {
            key: 0,
            class: "my-2 truncate",
            title: `Exclude Pattern: ${unref(findValue)(taskInstance.value.parameters, "rcloneOptions", "exclude_pattern")}`
          }, [
            _cache[10] || (_cache[10] = createTextVNode(" Exclude Pattern: ", -1)),
            createBaseVNode("b", null, toDisplayString(unref(findValue)(taskInstance.value.parameters, "rcloneOptions", "exclude_pattern")), 1)
          ], 8, _hoisted_16$1)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_17$1, [
          _cache[12] || (_cache[12] = createBaseVNode("p", { class: "my-2 font-bold" }, "Current Schedules:", -1)),
          taskInstance.value.schedule.intervals.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(taskInstance.value.schedule.intervals, (interval, idx) => {
            return openBlock(), createElementBlock("div", {
              key: idx,
              class: "flex flex-row col-span-2 divide divide-y divide-default p-1",
              title: `Run ${unref(myScheduler).parseIntervalIntoString(interval)}.`
            }, [
              createBaseVNode("p", null, "Run " + toDisplayString(unref(myScheduler).parseIntervalIntoString(interval)) + ".", 1)
            ], 8, _hoisted_18$1);
          }), 128)) : (openBlock(), createElementBlock("div", _hoisted_19$1, [..._cache[11] || (_cache[11] = [
            createBaseVNode("p", null, "No Intervals Currently Scheduled", -1)
          ])]))
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$3 = {
  key: 0,
  class: "grid grid-cols-4 items-left text-left"
};
const _hoisted_2$3 = { class: "col-span-1" };
const _hoisted_3$2 = ["title"];
const _hoisted_4$2 = ["title"];
const _hoisted_5$2 = { class: "col-span-2 row-span-2" };
const _hoisted_6$2 = ["title"];
const _hoisted_7$2 = { key: 1 };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CustomTaskDetails",
  props: {
    task: {}
  },
  setup(__props) {
    const props = __props;
    const taskInstance = ref$1(props.task);
    const myScheduler = injectWithCheck(schedulerInjectionKey, "scheduler not provided!");
    return (_ctx, _cache) => {
      var _a2;
      return taskInstance.value.template.name === "Custom Task" ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$3, [
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Task Type: ${taskInstance.value.template.name}`
          }, [..._cache[0] || (_cache[0] = [
            createTextVNode(" Task Type: ", -1),
            createBaseVNode("b", null, "Custom Task", -1)
          ])], 8, _hoisted_3$2),
          createBaseVNode("p", {
            class: "my-2 truncate",
            title: `Pool: ${unref(findValue)(taskInstance.value.parameters, "pool", "pool")}`
          }, [
            _cache[1] || (_cache[1] = createTextVNode(" Execution Type: ", -1)),
            createBaseVNode("b", null, toDisplayString(((_a2 = taskInstance.value.parameters.children.find((child) => child.key === "filePath_flag")) == null ? void 0 : _a2.value) ? "Script File" : "Custom Command"), 1)
          ], 8, _hoisted_4$2)
        ]),
        _cache[4] || (_cache[4] = createBaseVNode("div", { class: "col-span-1" }, null, -1)),
        createBaseVNode("div", _hoisted_5$2, [
          _cache[3] || (_cache[3] = createBaseVNode("p", { class: "my-2 font-bold" }, "Current Schedules:", -1)),
          taskInstance.value.schedule.intervals.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(taskInstance.value.schedule.intervals, (interval, idx) => {
            return openBlock(), createElementBlock("div", {
              key: idx,
              class: "flex flex-row col-span-2 divide divide-y divide-default p-1",
              title: `Run ${unref(myScheduler).parseIntervalIntoString(interval)}.`
            }, [
              createBaseVNode("p", null, "Run " + toDisplayString(unref(myScheduler).parseIntervalIntoString(interval)) + ".", 1)
            ], 8, _hoisted_6$2);
          }), 128)) : (openBlock(), createElementBlock("div", _hoisted_7$2, [..._cache[2] || (_cache[2] = [
            createBaseVNode("p", null, "No Intervals Currently Scheduled", -1)
          ])]))
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$2 = {
  key: 0,
  class: "text-left border-2 border-default mt-1 p-2 text-medium w-full bg-well"
};
const _hoisted_2$2 = { class: "mt-1 p-2 bg-default rounded-md" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TaskInstanceDetails",
  props: {
    task: {}
  },
  setup(__props) {
    const props = __props;
    const template = computed(() => props.task.template);
    const activeComponent = ref$1(null);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", null, [
          template.value.name == "ZFS Replication Task" ? (openBlock(), createBlock(_sfc_main$a, {
            key: 0,
            ref_key: "activeComponent",
            ref: activeComponent,
            task: props.task
          }, null, 8, ["task"])) : template.value.name == "Automated Snapshot Task" ? (openBlock(), createBlock(_sfc_main$9, {
            key: 1,
            ref_key: "activeComponent",
            ref: activeComponent,
            task: props.task
          }, null, 8, ["task"])) : template.value.name == "Rsync Task" ? (openBlock(), createBlock(_sfc_main$8, {
            key: 2,
            ref_key: "activeComponent",
            ref: activeComponent,
            task: props.task
          }, null, 8, ["task"])) : template.value.name == "Scrub Task" ? (openBlock(), createBlock(_sfc_main$7, {
            key: 3,
            ref_key: "activeComponent",
            ref: activeComponent,
            task: props.task
          }, null, 8, ["task"])) : template.value.name == "SMART Test" ? (openBlock(), createBlock(_sfc_main$6, {
            key: 4,
            ref_key: "activeComponent",
            ref: activeComponent,
            task: props.task
          }, null, 8, ["task"])) : template.value.name == "Cloud Sync Task" ? (openBlock(), createBlock(_sfc_main$5, {
            key: 5,
            ref_key: "activeComponent",
            ref: activeComponent,
            task: props.task
          }, null, 8, ["task"])) : template.value.name == "Custom Task" ? (openBlock(), createBlock(_sfc_main$4, {
            key: 6,
            ref_key: "activeComponent",
            ref: activeComponent,
            task: props.task
          }, null, 8, ["task"])) : createCommentVNode("", true)
        ]),
        __props.task.notes !== "" ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
          _cache[0] || (_cache[0] = createBaseVNode("p", null, [
            createBaseVNode("b", null, "Notes:")
          ], -1)),
          createBaseVNode("p", _hoisted_2$2, toDisplayString(__props.task.notes), 1)
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
function taskId(t) {
  var _a2, _b;
  return (_b = (_a2 = t == null ? void 0 : t.id) != null ? _a2 : t == null ? void 0 : t.uuid) != null ? _b : t == null ? void 0 : t.name;
}
function useLiveTaskStatus(tasksRef, scheduler2, log, opts) {
  const statusMap = ref$1({});
  const lastRunMap = ref$1({});
  const lastCompletedAtMap = ref$1({});
  const polling = ref$1(false);
  let intervalId;
  async function refreshOne(t) {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const id = taskId(t);
    const completedWindowMs = (_a2 = opts == null ? void 0 : opts.completedWindowMs) != null ? _a2 : 15e3;
    const fmtMs = (ms) => {
      if (!ms)
        return "Task hasn't run yet.";
      if (opts == null ? void 0 : opts.formatMs)
        return opts.formatMs(ms);
      if (typeof (scheduler2 == null ? void 0 : scheduler2.formatLocal) === "function")
        return scheduler2.formatLocal(ms);
      return new Date(ms).toLocaleString();
    };
    const buildLastRunLabel = (statusText, ms) => {
      if (!ms)
        return "";
      const lower = statusText.toLowerCase();
      const ts = fmtMs(ms);
      if (lower.includes("failed"))
        return `Failed at ${ts}`;
      if (lower.includes("completed"))
        return `Completed at ${ts}`;
      if (lower.includes("inactive") || lower.includes("disabled"))
        return `${ts}`;
      return `${ts}`;
    };
    try {
      const meta = await scheduler2.getDisplayMeta(t);
      let schedulerStatusText = meta == null ? void 0 : meta.statusText;
      if (!schedulerStatusText) {
        const enabled = !!((_b = t == null ? void 0 : t.schedule) == null ? void 0 : _b.enabled);
        schedulerStatusText = enabled ? "Active (pending)" : "Inactive (Disabled)";
      }
      const lowerScheduler = schedulerStatusText.toLowerCase();
      if (lowerScheduler.includes("active (running)") || lowerScheduler.includes("starting") || lowerScheduler.includes("running")) {
        statusMap.value[id] = schedulerStatusText;
        lastRunMap.value[id] = "Running now...";
        return;
      }
      let label = "";
      let lastCompletedMs = 0;
      const lastRunMs = (meta == null ? void 0 : meta.lastRunMs) || 0;
      if (lastRunMs) {
        label = buildLastRunLabel(schedulerStatusText, lastRunMs);
      }
      if (log == null ? void 0 : log.getLatestEntryFor) {
        try {
          const latest = await log.getLatestEntryFor(t);
          const raw = (_c = latest == null ? void 0 : latest.finishDate) != null ? _c : latest == null ? void 0 : latest.startDate;
          if (raw) {
            let ms = 0;
            if (typeof raw === "number") {
              ms = raw.toString().length === 10 ? raw * 1e3 : raw;
            } else {
              const parsed = Date.parse(String(raw));
              if (Number.isFinite(parsed))
                ms = parsed;
            }
            if (ms) {
              if (typeof (latest == null ? void 0 : latest.exitCode) === "number") {
                const tsLabel = fmtMs(ms);
                if (latest.exitCode === 0) {
                  lastCompletedMs = ms;
                  lastCompletedAtMap.value[id] = ms;
                  label = `Completed at ${tsLabel}`;
                } else {
                  label = `Failed at ${tsLabel}`;
                }
              } else {
                label = buildLastRunLabel(schedulerStatusText, ms) || `${fmtMs(ms)}`;
              }
            }
          }
        } catch {
        }
      }
      if (!label && lastRunMap.value[id] === "Running now...") {
        label = `Stopped at ${fmtMs(Date.now())}`;
      }
      let finalStatusText = schedulerStatusText;
      const now = Date.now();
      const latestCompleted = lastCompletedMs || lastCompletedAtMap.value[id] || 0;
      if (latestCompleted && now - latestCompleted < completedWindowMs && !lowerScheduler.includes("failed") && !lowerScheduler.includes("inactive")) {
        finalStatusText = "Completed";
      }
      statusMap.value[id] = finalStatusText;
      lastRunMap.value[id] = label || lastRunMap.value[id] || "Task hasn't run yet.";
      return;
    } catch (e) {
      console.debug("[useLiveTaskStatus] getDisplayMeta failed; falling back:", e);
    }
    try {
      const enabled = !!((_d = t == null ? void 0 : t.schedule) == null ? void 0 : _d.enabled);
      let status;
      try {
        status = enabled ? await scheduler2.getTimerStatus(t) : await scheduler2.getServiceStatus(t);
      } catch {
      }
      if (!status) {
        try {
          status = await scheduler2.getServiceStatus(t);
        } catch {
        }
      }
      if (!status) {
        try {
          status = await scheduler2.getTimerStatus(t);
        } catch {
        }
      }
      if (status == null || status === "") {
        statusMap.value[id] = enabled ? "Active (pending)" : "Inactive (Disabled)";
      } else {
        statusMap.value[id] = String(status);
      }
    } catch {
      const enabled = !!((_e = t == null ? void 0 : t.schedule) == null ? void 0 : _e.enabled);
      statusMap.value[id] = enabled ? "Active (pending)" : "Inactive (Disabled)";
    }
    try {
      let schedulerStatusText = statusMap.value[id];
      if (!schedulerStatusText) {
        const enabled = !!((_f = t == null ? void 0 : t.schedule) == null ? void 0 : _f.enabled);
        schedulerStatusText = enabled ? "Active (pending)" : "Inactive (Disabled)";
      }
      const lower = schedulerStatusText.toLowerCase();
      const latest = await ((_g = log == null ? void 0 : log.getLatestEntryFor) == null ? void 0 : _g.call(log, t));
      const raw = (_h = latest == null ? void 0 : latest.finishDate) != null ? _h : latest == null ? void 0 : latest.startDate;
      let lastCompletedMs = 0;
      if (raw) {
        let ms = 0;
        if (typeof raw === "number") {
          ms = raw.toString().length === 10 ? raw * 1e3 : raw;
        } else {
          const parsed = Date.parse(String(raw));
          if (Number.isFinite(parsed))
            ms = parsed;
        }
        if (ms) {
          const label = (() => {
            if (typeof (latest == null ? void 0 : latest.exitCode) === "number") {
              const tsLabel = fmtMs(ms);
              if (latest.exitCode === 0) {
                lastCompletedMs = ms;
                lastCompletedAtMap.value[id] = ms;
                return `Completed at ${tsLabel}`;
              }
              return `Failed at ${tsLabel}`;
            }
            if (lower.includes("failed"))
              return `Failed at ${fmtMs(ms)}`;
            if (lower.includes("completed"))
              return `Completed at ${fmtMs(ms)}`;
            if (lower.includes("inactive") || lower.includes("disabled"))
              return `${fmtMs(ms)}`;
            return `${fmtMs(ms)}`;
          })();
          let finalStatusText = schedulerStatusText;
          const now = Date.now();
          const latestCompleted = lastCompletedMs || lastCompletedAtMap.value[id] || 0;
          if (latestCompleted && now - latestCompleted < completedWindowMs && !lower.includes("failed") && !lower.includes("inactive")) {
            finalStatusText = "Completed";
          }
          statusMap.value[id] = finalStatusText;
          lastRunMap.value[id] = label;
          return;
        }
      }
      if (lastRunMap.value[id] === "Running now...") {
        lastRunMap.value[id] = `Stopped at ${fmtMs(Date.now())}`;
      } else {
        lastRunMap.value[id] = (_i = lastRunMap.value[id]) != null ? _i : "Task hasn't run yet.";
      }
    } catch {
      if (lastRunMap.value[id] === "Running now...") {
        lastRunMap.value[id] = `Stopped at ${fmtMs(Date.now())}`;
      } else {
        lastRunMap.value[id] = (_j = lastRunMap.value[id]) != null ? _j : "Task hasn't run yet.";
      }
    }
  }
  async function refreshAll() {
    var _a2;
    const tasks = (_a2 = tasksRef.value) != null ? _a2 : [];
    await Promise.all(tasks.map(refreshOne));
  }
  function start() {
    var _a2;
    if (polling.value)
      return;
    polling.value = true;
    refreshAll();
    intervalId = window.setInterval(refreshAll, (_a2 = opts == null ? void 0 : opts.intervalMs) != null ? _a2 : 1500);
  }
  function stop() {
    polling.value = false;
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = void 0;
    }
  }
  async function toggleSchedule(t) {
    var _a2;
    const enabled = !!((_a2 = t == null ? void 0 : t.schedule) == null ? void 0 : _a2.enabled);
    if (enabled) {
      await scheduler2.disableSchedule(t);
      t.schedule.enabled = false;
    } else {
      await scheduler2.enableSchedule(t);
      t.schedule.enabled = true;
    }
    await refreshOne(t);
  }
  function statusFor(t) {
    return statusMap.value[taskId(t)];
  }
  function lastRunFor(t) {
    return lastRunMap.value[taskId(t)];
  }
  function isCompleted(t) {
    const s2 = statusFor(t);
    return !!s2 && s2.toLowerCase().includes("completed");
  }
  function isRunningNow(t) {
    const s2 = statusFor(t);
    if (!s2)
      return false;
    const lower = s2.toLowerCase();
    return lower.includes("active (running)") || lower.includes("starting") || lower.includes("running");
  }
  function isFailed(t) {
    const s2 = statusFor(t);
    return !!s2 && s2.toLowerCase().includes("failed");
  }
  function isInactive(t) {
    const s2 = statusFor(t);
    if (!s2)
      return false;
    const lower = s2.toLowerCase();
    return lower.includes("inactive") || lower.includes("disabled");
  }
  onUnmounted(stop);
  watch(tasksRef, () => {
    if (polling.value)
      refreshAll();
  }, { deep: true });
  return {
    start,
    stop,
    refreshAll,
    toggleSchedule,
    statusFor,
    lastRunFor,
    statusMap,
    lastRunMap,
    isCompleted,
    isRunningNow,
    isFailed,
    isInactive
  };
}
function taskStatusClass(status) {
  if (status) {
    const s2 = status.toLowerCase();
    if (s2.includes("failed"))
      return "text-danger";
    if (s2.includes("inactive") || s2.includes("disabled"))
      return "text-warning";
    if (s2.includes("active") || s2.includes("starting") || s2.includes("completed"))
      return "text-success";
    if (s2.includes("no schedule found") || s2.includes("not scheduled"))
      return "text-muted";
  }
  return "";
}
function taskStatusBadgeClass(status) {
  const base = "inline-flex items-center justify-center px-2 w-full py-0.5 rounded-full text-xs font-semibold whitespace-nowrap";
  if (!status) {
    return `${base} bg-slate-200 text-muted dark:bg-slate-700`;
  }
  const s2 = status.toLowerCase();
  if (s2.includes("failed") || s2.includes("error")) {
    return `${base} bg-red-100 text-danger dark:bg-red-900/40`;
  }
  if (s2.includes("inactive") || s2.includes("disabled")) {
    return `${base} bg-amber-100 text-warning dark:bg-amber-900/40`;
  }
  if (s2.includes("active") || s2.includes("starting") || s2.includes("running") || s2.includes("completed")) {
    return `${base} bg-emerald-100 text-success dark:bg-emerald-900/40`;
  }
  if (s2.includes("no schedule found") || s2.includes("not scheduled")) {
    return `${base} bg-slate-200 text-muted dark:bg-slate-700`;
  }
  return `${base} bg-slate-200 text-muted dark:bg-slate-700`;
}
const _hoisted_1$1 = ["title"];
const _hoisted_2$1 = ["title"];
const _hoisted_3$1 = ["title"];
const _hoisted_4$1 = { class: "truncate text-base font-medium text-default border-r border-default text-left col-span-1" };
const _hoisted_5$1 = { class: "text-base font-medium text-default border-default m-1 col-span-2" };
const _hoisted_6$1 = {
  key: 0,
  class: "col-span-10 h-full px-2 mx-2 py-1 border-t border-default"
};
const _hoisted_7$1 = { class: "w-full bg-slate-200 dark:bg-slate-700 h-2 rounded" };
const _hoisted_8$1 = { class: "text-xs mt-1" };
const _hoisted_9$1 = {
  key: 1,
  class: "col-span-10 h-full px-2 mx-2 py-1 border-t border-default"
};
const _hoisted_10$1 = { class: "button-group-row justify-center mt-2" };
const _hoisted_11$1 = { key: 0 };
const _hoisted_12$1 = { key: 1 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TaskInstanceTableRow",
  props: {
    task: {},
    isExpanded: { type: Boolean }
  },
  emits: [
    "runTask",
    "manageSchedule",
    "removeTask",
    "editTask",
    "viewLogs",
    "toggleDetails",
    "viewNotes",
    "stopTask"
  ],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const taskInstance = ref$1(props.task);
    const myScheduler = injectWithCheck(schedulerInjectionKey, "scheduler not provided!");
    const myTaskLog = injectWithCheck(logInjectionKey, "log not provided!");
    watch(
      () => props.task,
      (newTask) => {
        taskInstance.value = newTask;
      },
      { deep: true }
    );
    const isExpanded = computed(() => props.isExpanded);
    const tasksRef = ref$1([taskInstance.value]);
    const live = useLiveTaskStatus(tasksRef, myScheduler, myTaskLog, {
      intervalMs: 1500,
      completedWindowMs: 3e4
    });
    const {
      start,
      stop,
      refreshAll,
      statusFor,
      lastRunFor,
      isCompleted: liveIsCompleted,
      isRunningNow: liveIsRunning,
      isFailed: liveIsFailed,
      isInactive: liveIsInactive
    } = live;
    watch(
      taskInstance,
      (t) => {
        tasksRef.value = t ? [t] : [];
      },
      { deep: true }
    );
    const manualRunUntil = ref$1(0);
    function markManualRun(windowMs = 6e4) {
      manualRunUntil.value = Date.now() + windowMs;
    }
    const statusText = computed(() => {
      var _a2, _b, _c;
      const baseRaw = statusFor(taskInstance.value);
      const enabled = (_c = (_b = (_a2 = taskInstance.value) == null ? void 0 : _a2.schedule) == null ? void 0 : _b.enabled) != null ? _c : false;
      const now = Date.now();
      const manualWindowActive = !enabled && now < manualRunUntil.value;
      const base = baseRaw || (enabled ? "Checking..." : "Disabled");
      if (!enabled) {
        const running = liveIsRunning(taskInstance.value);
        const completed = liveIsCompleted(taskInstance.value);
        if (manualWindowActive) {
          if (running)
            return "Running (manual)";
          if (completed)
            return "Completed (manual)";
        }
        if (completed)
          return "Completed (manual)";
      }
      return base;
    });
    const lastRunText = computed(() => {
      var _a2;
      return (_a2 = lastRunFor(taskInstance.value)) != null ? _a2 : "Task hasn't run yet.";
    });
    const isRunning = computed(() => {
      var _a2, _b, _c;
      const enabled = (_c = (_b = (_a2 = taskInstance.value) == null ? void 0 : _a2.schedule) == null ? void 0 : _b.enabled) != null ? _c : false;
      const now = Date.now();
      const manualWindowActive = !enabled && now < manualRunUntil.value;
      if (liveIsRunning(taskInstance.value))
        return true;
      if (manualWindowActive && !liveIsCompleted(taskInstance.value)) {
        return true;
      }
      return false;
    });
    const isCompleted = computed(() => liveIsCompleted(taskInstance.value));
    const isFailed = computed(() => liveIsFailed(taskInstance.value));
    const isInactive = computed(() => liveIsInactive(taskInstance.value));
    const progress = ref$1(null);
    async function updateProgress(task) {
      try {
        const p2 = await myScheduler.getTaskProgress(task);
        if (typeof p2 === "number" && Number.isFinite(p2)) {
          progress.value = p2;
        } else {
          progress.value = null;
        }
      } catch (e) {
        console.error("Failed to get progress:", e);
        progress.value = null;
      }
    }
    const progressBarClass = computed(() => {
      const s2 = (statusText.value || "").toLowerCase();
      if (s2.includes("failed") || s2.includes("error")) {
        return "bg-red-600";
      }
      if (s2.includes("completed")) {
        return "bg-green-600";
      }
      if (s2.includes("active (running)") || s2.includes("running now") || s2.includes("starting") || s2.includes("activating")) {
        return "bg-green-600";
      }
      if (s2.includes("inactive (disabled)") || s2.includes("disabled")) {
        return "bg-slate-400";
      }
      return "bg-slate-400";
    });
    const emit2 = __emit;
    async function runTaskBtn() {
      markManualRun();
      emit2("runTask", taskInstance.value);
      refreshAll();
      updateProgress(taskInstance.value);
    }
    async function stopTaskBtn() {
      emit2("stopTask", taskInstance.value);
      refreshAll();
      updateProgress(taskInstance.value);
    }
    function manageScheduleBtn() {
      emit2("manageSchedule", taskInstance.value);
    }
    function removeTaskBtn() {
      emit2("removeTask", taskInstance.value);
    }
    function editTaskBtn() {
      emit2("editTask", taskInstance.value);
    }
    function viewLogsBtn() {
      emit2("viewLogs", taskInstance.value);
    }
    function viewNotesBtn() {
      emit2("viewNotes", taskInstance.value);
    }
    function toggleTaskDetails() {
      emit2("toggleDetails", taskInstance.value.name);
    }
    async function loadConfirmationDialog(dialogRef) {
      const module = await __vitePreload(() => import("./ConfirmationDialog.88b6780e.js"), true ? ["./ConfirmationDialog.88b6780e.js","./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js","./open-closed.8a6c3d9d.js"] : void 0, import.meta.url);
      dialogRef.value = module.default;
    }
    const showEnablePrompt = ref$1(false);
    const enableDialog = ref$1();
    const enabling = ref$1(false);
    const showDisablePrompt = ref$1(false);
    const disableDialog = ref$1();
    const disabling = ref$1(false);
    const enableYes = async () => {
      enabling.value = true;
      await myScheduler.enableSchedule(taskInstance.value);
      await refreshAll();
      enabling.value = false;
      showEnablePrompt.value = false;
    };
    const enableNo = () => {
      showEnablePrompt.value = false;
    };
    const updateShowEnablePrompt = (v2) => {
      showEnablePrompt.value = v2;
    };
    const disableYes = async () => {
      disabling.value = true;
      await myScheduler.disableSchedule(taskInstance.value);
      await refreshAll();
      disabling.value = false;
      showDisablePrompt.value = false;
    };
    const disableNo = () => {
      showDisablePrompt.value = false;
    };
    const updateShowDisablePrompt = (v2) => {
      showDisablePrompt.value = v2;
    };
    const scheduleEnabledModel = computed({
      get: () => taskInstance.value.schedule.enabled,
      set: (intendedValue) => {
        toggleTaskSchedule(intendedValue);
      }
    });
    async function toggleTaskSchedule(intendedValue) {
      if (taskInstance.value.schedule.intervals.length === 0)
        return;
      if (intendedValue) {
        await loadConfirmationDialog(enableDialog);
        showEnablePrompt.value = true;
      } else {
        await loadConfirmationDialog(disableDialog);
        showDisablePrompt.value = true;
      }
    }
    let progressIntervalId;
    onMounted(async () => {
      start();
      await updateProgress(taskInstance.value);
      progressIntervalId = window.setInterval(() => {
        updateProgress(taskInstance.value);
      }, 5e3);
    });
    onUnmounted(() => {
      stop();
      if (progressIntervalId) {
        clearInterval(progressIntervalId);
        progressIntervalId = void 0;
      }
    });
    async function updateTaskStatus() {
      await refreshAll();
    }
    async function fetchLatestLog() {
      await refreshAll();
    }
    __expose({
      updateTaskStatus,
      fetchLatestLog,
      updateProgress,
      markManualRun,
      isCompleted,
      isFailed,
      isInactive,
      isRunning
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("tr", {
          class: normalizeClass([isExpanded.value ? "border-2 border-red-700 dark:border-red-800 bg-default" : "border border-default border-collapse ", "grid grid-cols-9 grid-flow-cols w-full text-center items-center rounded-sm p-1"])
        }, [
          createBaseVNode("td", {
            title: taskInstance.value.name,
            class: "truncate text-base font-medium text-default border-r border-default text-left ml-2 col-span-2"
          }, toDisplayString(taskInstance.value.name), 9, _hoisted_1$1),
          createBaseVNode("td", {
            title: taskInstance.value.schedule.enabled ? statusText.value : "Disabled",
            class: "truncate text-xs font-medium text-default border-r border-default col-span-1"
          }, [
            createBaseVNode("span", {
              class: normalizeClass(unref(taskStatusBadgeClass)(statusText.value))
            }, toDisplayString(statusText.value || "N/A"), 3)
          ], 8, _hoisted_2$1),
          createBaseVNode("td", {
            title: lastRunText.value,
            class: "truncate text-sm font-medium border-r border-default text-left ml-2 col-span-3"
          }, [
            createBaseVNode("span", null, toDisplayString(lastRunText.value), 1)
          ], 8, _hoisted_3$1),
          createBaseVNode("td", _hoisted_4$1, [
            createVNode(unref(ue), {
              modelValue: scheduleEnabledModel.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => scheduleEnabledModel.value = $event),
              disabled: taskInstance.value.schedule.intervals.length === 0,
              title: taskInstance.value.schedule.intervals.length > 0 ? `Schedule is ${taskInstance.value.schedule.enabled ? "Enabled" : "Disabled"}` : "No Schedule Found, Manage Schedule + add intervals to Enable",
              class: normalizeClass([
                taskInstance.value.schedule.intervals.length === 0 ? "bg-gray-300 dark:bg-gray-400 cursor-not-allowed" : taskInstance.value.schedule.enabled ? "bg-success" : "bg-well",
                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 ml-2"
              ])
            }, {
              default: withCtx(() => [
                _cache[10] || (_cache[10] = createBaseVNode("span", { class: "sr-only" }, "Toggle schedule", -1)),
                createBaseVNode("span", {
                  "aria-hidden": "true",
                  class: normalizeClass([
                    taskInstance.value.schedule.enabled ? "translate-x-5" : "translate-x-0",
                    "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-default shadow ring-0 transition duration-200 ease-in-out"
                  ])
                }, null, 2)
              ]),
              _: 1
            }, 8, ["modelValue", "disabled", "title", "class"])
          ]),
          createBaseVNode("td", _hoisted_5$1, [
            isExpanded.value ? (openBlock(), createElementBlock("button", {
              key: 0,
              onClick: _cache[1] || (_cache[1] = ($event) => toggleTaskDetails()),
              class: "btn w-full text-gray-50 bg-red-700 hover:bg-red-800 dark:hover:bg-red-900 dark:bg-red-800"
            }, " Close Details ")) : (openBlock(), createElementBlock("button", {
              key: 1,
              onClick: _cache[2] || (_cache[2] = ($event) => toggleTaskDetails()),
              class: "btn w-full btn-secondary"
            }, " View Details "))
          ]),
          progress.value !== null && isRunning.value ? (openBlock(), createElementBlock("td", _hoisted_6$1, [
            createBaseVNode("div", null, [
              createBaseVNode("div", _hoisted_7$1, [
                createBaseVNode("div", {
                  class: normalizeClass(["h-2 rounded", progressBarClass.value]),
                  style: normalizeStyle({ width: Math.min(progress.value, 100) + "%" })
                }, null, 6)
              ]),
              createBaseVNode("div", _hoisted_8$1, toDisplayString(Math.round(progress.value)) + "% ", 1)
            ])
          ])) : createCommentVNode("", true),
          isExpanded.value ? (openBlock(), createElementBlock("td", _hoisted_9$1, [
            createBaseVNode("div", null, [
              createVNode(_sfc_main$3, { task: taskInstance.value }, null, 8, ["task"])
            ]),
            createBaseVNode("div", _hoisted_10$1, [
              !isRunning.value ? (openBlock(), createElementBlock("button", {
                key: 0,
                onClick: _cache[3] || (_cache[3] = ($event) => runTaskBtn()),
                class: "flex flex-row min-h-fit flex-nowrap btn btn-success"
              }, [
                _cache[11] || (_cache[11] = createTextVNode(" Run Now ", -1)),
                createVNode(unref(render$6), { class: "h-5 ml-2 mt-0.5" })
              ])) : (openBlock(), createElementBlock("button", {
                key: 1,
                onClick: _cache[4] || (_cache[4] = ($event) => stopTaskBtn()),
                class: "flex flex-row min-h-fit flex-nowrap btn btn-danger"
              }, [
                _cache[12] || (_cache[12] = createTextVNode(" Stop Now ", -1)),
                createVNode(unref(render$5), { class: "h-5 ml-2 mt-0.5" })
              ])),
              createBaseVNode("button", {
                onClick: _cache[5] || (_cache[5] = ($event) => editTaskBtn()),
                class: "flex flex-row min-h-fit flex-nowrap btn btn-secondary"
              }, [
                _cache[13] || (_cache[13] = createTextVNode(" Edit Task ", -1)),
                createVNode(unref(render$7), { class: "h-5 ml-2 mt-0.5" })
              ]),
              createBaseVNode("button", {
                onClick: _cache[6] || (_cache[6] = ($event) => manageScheduleBtn()),
                class: "flex flex-row min-h-fit flex-nowrap btn btn-primary"
              }, [
                _cache[14] || (_cache[14] = createTextVNode(" Manage Schedule ", -1)),
                createVNode(unref(render$d), { class: "h-5 ml-2 mt-0.5" })
              ]),
              createBaseVNode("button", {
                onClick: _cache[7] || (_cache[7] = ($event) => viewLogsBtn()),
                class: "flex flex-row min-h-fit flex-nowrap btn btn-secondary"
              }, [
                _cache[15] || (_cache[15] = createTextVNode(" View Logs ", -1)),
                createVNode(unref(render$3), { class: "h-5 ml-2 mt-0.5" })
              ]),
              createBaseVNode("button", {
                onClick: _cache[8] || (_cache[8] = ($event) => viewNotesBtn()),
                class: "flex flex-row min-h-fit flex-nowrap btn btn-secondary"
              }, [
                _cache[16] || (_cache[16] = createTextVNode(" Notes ", -1)),
                createVNode(unref(render$c), { class: "h-5 ml-2 mt-0.5" })
              ]),
              createBaseVNode("button", {
                onClick: _cache[9] || (_cache[9] = ($event) => removeTaskBtn()),
                class: "flex flex-row min-h-fit flex-nowrap btn btn-danger"
              }, [
                _cache[17] || (_cache[17] = createTextVNode(" Remove ", -1)),
                createVNode(unref(render$2), { class: "h-5 ml-2 mt-0.5" })
              ])
            ])
          ])) : createCommentVNode("", true)
        ], 2),
        showEnablePrompt.value ? (openBlock(), createElementBlock("div", _hoisted_11$1, [
          (openBlock(), createBlock(resolveDynamicComponent(enableDialog.value), {
            onClose: updateShowEnablePrompt,
            showFlag: showEnablePrompt.value,
            title: "Enable Schedule",
            message: "Do you wish to enable the schedule for this task?",
            confirmYes: enableYes,
            confirmNo: enableNo,
            operating: enabling.value,
            operation: "enabling"
          }, null, 40, ["showFlag", "operating"]))
        ])) : createCommentVNode("", true),
        showDisablePrompt.value ? (openBlock(), createElementBlock("div", _hoisted_12$1, [
          (openBlock(), createBlock(resolveDynamicComponent(disableDialog.value), {
            onClose: updateShowDisablePrompt,
            showFlag: showDisablePrompt.value,
            title: "Disable Schedule",
            message: "Do you wish to disable the schedule for this task?",
            confirmYes: disableYes,
            confirmNo: disableNo,
            operating: disabling.value,
            operation: "disabling"
          }, null, 40, ["showFlag", "operating"]))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _sfc_main$C = defineComponent({});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$u = { class: "size-icon aspect-square animate-spin border-2 border-neutral-300 border-t-neutral-500 dark:border-neutral-500 dark:border-t-neutral-200 rounded-full" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$u);
}
const LoadingSpinner = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$4], ["__scopeId", "data-v-7754b6ec"]]);
const defaultErrorConfig = {
  withStackTrace: false
};
const createNeverThrowError = (message, result, config = defaultErrorConfig) => {
  const data = result.isOk() ? { type: "Ok", value: result.value } : { type: "Err", value: result.error };
  const maybeStack = config.withStackTrace ? new Error().stack : void 0;
  return {
    data,
    message,
    stack: maybeStack
  };
};
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
}
function __values(o2) {
  var s2 = typeof Symbol === "function" && Symbol.iterator, m = s2 && o2[s2], i2 = 0;
  if (m)
    return m.call(o2);
  if (o2 && typeof o2.length === "number")
    return {
      next: function() {
        if (o2 && i2 >= o2.length)
          o2 = void 0;
        return { value: o2 && o2[i2++], done: !o2 };
      }
    };
  throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __await(v2) {
  return this instanceof __await ? (this.v = v2, this) : new __await(v2);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i2, q = [];
  return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2;
  function verb(n2) {
    if (g[n2])
      i2[n2] = function(v2) {
        return new Promise(function(a2, b2) {
          q.push([n2, v2, a2, b2]) > 1 || resume(n2, v2);
        });
      };
  }
  function resume(n2, v2) {
    try {
      step(g[n2](v2));
    } catch (e2) {
      settle(q[0][3], e2);
    }
  }
  function step(r2) {
    r2.value instanceof __await ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q[0][2], r2);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f2, v2) {
    if (f2(v2), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o2) {
  var i2, p2;
  return i2 = {}, verb("next"), verb("throw", function(e2) {
    throw e2;
  }), verb("return"), i2[Symbol.iterator] = function() {
    return this;
  }, i2;
  function verb(n2, f2) {
    i2[n2] = o2[n2] ? function(v2) {
      return (p2 = !p2) ? { value: __await(o2[n2](v2)), done: n2 === "return" } : f2 ? f2(v2) : v2;
    } : f2;
  }
}
function __asyncValues(o2) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o2[Symbol.asyncIterator], i2;
  return m ? m.call(o2) : (o2 = typeof __values === "function" ? __values(o2) : o2[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2);
  function verb(n2) {
    i2[n2] = o2[n2] && function(v2) {
      return new Promise(function(resolve2, reject) {
        v2 = o2[n2](v2), settle(resolve2, reject, v2.done, v2.value);
      });
    };
  }
  function settle(resolve2, reject, d2, v2) {
    Promise.resolve(v2).then(function(v3) {
      resolve2({ value: v3, done: d2 });
    }, reject);
  }
}
class ResultAsync {
  constructor(res) {
    this._promise = res;
  }
  static fromSafePromise(promise) {
    const newPromise = promise.then((value) => new Ok(value));
    return new ResultAsync(newPromise);
  }
  static fromPromise(promise, errorFn) {
    const newPromise = promise.then((value) => new Ok(value)).catch((e2) => new Err(errorFn(e2)));
    return new ResultAsync(newPromise);
  }
  static fromThrowable(fn, errorFn) {
    return (...args) => {
      return new ResultAsync((() => __awaiter(this, void 0, void 0, function* () {
        try {
          return new Ok(yield fn(...args));
        } catch (error) {
          return new Err(errorFn ? errorFn(error) : error);
        }
      }))());
    };
  }
  static combine(asyncResultList) {
    return combineResultAsyncList(asyncResultList);
  }
  static combineWithAllErrors(asyncResultList) {
    return combineResultAsyncListWithAllErrors(asyncResultList);
  }
  map(f2) {
    return new ResultAsync(this._promise.then((res) => __awaiter(this, void 0, void 0, function* () {
      if (res.isErr()) {
        return new Err(res.error);
      }
      return new Ok(yield f2(res.value));
    })));
  }
  mapErr(f2) {
    return new ResultAsync(this._promise.then((res) => __awaiter(this, void 0, void 0, function* () {
      if (res.isOk()) {
        return new Ok(res.value);
      }
      return new Err(yield f2(res.error));
    })));
  }
  andThen(f2) {
    return new ResultAsync(this._promise.then((res) => {
      if (res.isErr()) {
        return new Err(res.error);
      }
      const newValue = f2(res.value);
      return newValue instanceof ResultAsync ? newValue._promise : newValue;
    }));
  }
  orElse(f2) {
    return new ResultAsync(this._promise.then((res) => __awaiter(this, void 0, void 0, function* () {
      if (res.isErr()) {
        return f2(res.error);
      }
      return new Ok(res.value);
    })));
  }
  match(ok2, _err) {
    return this._promise.then((res) => res.match(ok2, _err));
  }
  unwrapOr(t) {
    return this._promise.then((res) => res.unwrapOr(t));
  }
  safeUnwrap() {
    return __asyncGenerator(this, arguments, function* safeUnwrap_1() {
      return yield __await(yield __await(yield* __asyncDelegator(__asyncValues(yield __await(this._promise.then((res) => res.safeUnwrap()))))));
    });
  }
  then(successCallback, failureCallback) {
    return this._promise.then(successCallback, failureCallback);
  }
}
const okAsync = (value) => new ResultAsync(Promise.resolve(new Ok(value)));
const errAsync = (err2) => new ResultAsync(Promise.resolve(new Err(err2)));
const combineResultList = (resultList) => {
  let acc = ok([]);
  for (const result of resultList) {
    if (result.isErr()) {
      acc = err(result.error);
      break;
    } else {
      acc.map((list) => list.push(result.value));
    }
  }
  return acc;
};
const combineResultAsyncList = (asyncResultList) => ResultAsync.fromSafePromise(Promise.all(asyncResultList)).andThen(combineResultList);
const combineResultListWithAllErrors = (resultList) => {
  let acc = ok([]);
  for (const result of resultList) {
    if (result.isErr() && acc.isErr()) {
      acc.error.push(result.error);
    } else if (result.isErr() && acc.isOk()) {
      acc = err([result.error]);
    } else if (result.isOk() && acc.isOk()) {
      acc.value.push(result.value);
    }
  }
  return acc;
};
const combineResultAsyncListWithAllErrors = (asyncResultList) => ResultAsync.fromSafePromise(Promise.all(asyncResultList)).andThen(combineResultListWithAllErrors);
var Result;
(function(Result2) {
  function fromThrowable(fn, errorFn) {
    return (...args) => {
      try {
        const result = fn(...args);
        return ok(result);
      } catch (e2) {
        return err(errorFn ? errorFn(e2) : e2);
      }
    };
  }
  Result2.fromThrowable = fromThrowable;
  function combine(resultList) {
    return combineResultList(resultList);
  }
  Result2.combine = combine;
  function combineWithAllErrors(resultList) {
    return combineResultListWithAllErrors(resultList);
  }
  Result2.combineWithAllErrors = combineWithAllErrors;
})(Result || (Result = {}));
const ok = (value) => new Ok(value);
const err = (err2) => new Err(err2);
class Ok {
  constructor(value) {
    this.value = value;
  }
  isOk() {
    return true;
  }
  isErr() {
    return !this.isOk();
  }
  map(f2) {
    return ok(f2(this.value));
  }
  mapErr(_f) {
    return ok(this.value);
  }
  andThen(f2) {
    return f2(this.value);
  }
  orElse(_f) {
    return ok(this.value);
  }
  asyncAndThen(f2) {
    return f2(this.value);
  }
  asyncMap(f2) {
    return ResultAsync.fromSafePromise(f2(this.value));
  }
  unwrapOr(_v) {
    return this.value;
  }
  match(ok2, _err) {
    return ok2(this.value);
  }
  safeUnwrap() {
    const value = this.value;
    return function* () {
      return value;
    }();
  }
  _unsafeUnwrap(_2) {
    return this.value;
  }
  _unsafeUnwrapErr(config) {
    throw createNeverThrowError("Called `_unsafeUnwrapErr` on an Ok", this, config);
  }
}
class Err {
  constructor(error) {
    this.error = error;
  }
  isOk() {
    return false;
  }
  isErr() {
    return !this.isOk();
  }
  map(_f) {
    return err(this.error);
  }
  mapErr(f2) {
    return err(f2(this.error));
  }
  andThen(_f) {
    return err(this.error);
  }
  orElse(f2) {
    return f2(this.error);
  }
  asyncAndThen(_f) {
    return errAsync(this.error);
  }
  asyncMap(_f) {
    return errAsync(this.error);
  }
  unwrapOr(v2) {
    return v2;
  }
  match(_ok, err2) {
    return err2(this.error);
  }
  safeUnwrap() {
    const error = this.error;
    return function* () {
      yield err(error);
      throw new Error("Do not use this generator out of `safeTry`");
    }();
  }
  _unsafeUnwrap(config) {
    throw createNeverThrowError("Called `_unsafeUnwrap` on an Err", this, config);
  }
  _unsafeUnwrapErr(_2) {
    return this.error;
  }
}
Result.fromThrowable;
const globalProcessingState = ref$1(0);
function useGlobalProcessingState() {
  return globalProcessingState;
}
const darkModeState = ref$1(false);
function isCockpitStyleValue(value) {
  return value !== null && ["auto", "dark", "light"].includes(value);
}
const setDarkMode = (style2) => {
  var _a3;
  var _a2;
  style2 = (_a3 = style2 != null ? style2 : localStorage.getItem("shell:style")) != null ? _a3 : "auto";
  if (((_a2 = window.matchMedia) == null ? void 0 : _a2.call(window, "(prefers-color-scheme: dark)").matches) && style2 === "auto" || style2 === "dark") {
    darkModeState.value = true;
    document.documentElement.classList.add("dark");
  } else {
    darkModeState.value = false;
    document.documentElement.classList.remove("dark");
  }
};
window.addEventListener("storage", (event) => {
  if (event.key === "shell:style" && isCockpitStyleValue(event.newValue)) {
    setDarkMode(event.newValue);
  }
});
window.addEventListener("cockpit-style", (event) => {
  var _a2;
  const styleEvent = event;
  const style2 = (_a2 = styleEvent.detail) == null ? void 0 : _a2.style;
  if (style2 === void 0 || !isCockpitStyleValue(style2)) {
    return;
  }
  setDarkMode(style2);
});
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  setDarkMode();
});
setDarkMode();
function useDarkModeState() {
  return darkModeState;
}
const _hoisted_1$t = {
  viewBox: "0 0 927.2956 162.9455",
  version: "1.1"
};
const _hoisted_2$l = ["fill"];
const _hoisted_3$f = ["fill"];
const _hoisted_4$9 = ["fill"];
const _hoisted_5$8 = ["fill"];
const _hoisted_6$6 = ["fill"];
const _hoisted_7$6 = ["fill"];
const _hoisted_8$6 = ["fill"];
const _hoisted_9$5 = ["fill"];
const _hoisted_10$5 = ["fill"];
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "Logo45Drives",
  setup(__props) {
    const darkMode = useDarkModeState();
    const colorFanAnd45 = computed(() => darkMode.value ? "#FFFFFF" : "#333333");
    const colorDrives = computed(() => darkMode.value ? "#DC2626" : "#981c20");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", _hoisted_1$t, [
        createBaseVNode("path", {
          "fill-rule": "nonzero",
          fill: colorFanAnd45.value,
          "fill-opacity": "1",
          d: "m 84.980446,60.092653 c -8.78957,-1.65104 -17.43357,2.98987 -21.35048,9.44463 0.16472,0.046 0.3218,0.10348 0.48267,0.13023 3.7407,0.64932 7.44883,1.4461 11.0995,2.49763 0.34284,0.0995 0.62631,0.0709 0.93853,-0.12258 1.1109,-0.68761 2.31567,-1.15112 3.61235,-1.33691 0.35626,-0.0498 0.54205,-0.20686 0.69911,-0.51716 1.59357,-3.12394 3.0684,-6.30344 4.34785,-9.57104 0.0652,-0.16855 0.11301,-0.34668 0.17047,-0.5248 m -15.11406,39.15754 c 0.0575,-0.27389 0.11108,-0.49607 0.1513,-0.72209 0.61675,-3.57787 1.38481,-7.12512 2.38844,-10.61491 0.15707,-0.54779 0.1111,-0.98831 -0.17621,-1.4729 -0.79295,-1.32734 -1.24881,-2.77152 -1.3235,-4.32296 -0.0173,-0.37733 -0.15898,-0.58418 -0.52099,-0.74315 -3.07606,-1.34842 -6.18852,-2.60298 -9.36992,-3.68132 -0.18962,-0.0632 -0.38306,-0.113 -0.57843,-0.17047 -1.7219,9.07304 2.82323,17.59447 9.42931,21.7278 m 32.947954,-14.54713 c 0.73932,-4.91289 0.0134,-9.50974 -2.36164,-13.76375 -1.980484,-3.54915 -4.706034,-6.43942 -8.421824,-8.44288 -0.0881,0.64354 -0.16856,1.19326 -0.24134,1.74297 -0.43286,3.29057 -0.99981,6.55818 -1.7085,9.79896 -0.0823,0.37541 -0.0478,0.67421 0.18388,0.99024 0.97684,1.335 1.63572,2.80982 1.87514,4.45512 0.0478,0.32369 0.20302,0.49991 0.49415,0.64929 3.14694,1.59551 6.33218,3.10098 9.626594,4.37085 0.15131,0.0593 0.30645,0.11109 0.55354,0.1992 M 77.843826,102.34732 c 2.11456,0.76615 8.17091,0.4616 11.91543,-1.15304 4.56813,-1.970887 8.06558,-5.091007 10.630234,-9.456117 -0.551614,-0.0843 -0.997904,-0.1628 -1.444184,-0.21834 -3.33463,-0.4233 -6.64054,-0.99408 -9.92346,-1.70276 -0.53246,-0.11492 -0.94236,-0.0556 -1.40394,0.249 -1.31394,0.86575 -2.69875,1.58591 -4.30382,1.7583 -0.47308,0.0497 -0.94235,0.13215 -1.42119,0.20111 -1.51887,3.39593 -2.9056,6.80908 -4.04907,10.321847 m 10.57085,-53.235397 c -5.29405,-1.1588 -10.5019,-0.91363 -15.61973,0.45584 -6.94124,1.85982 -12.5609,5.80545 -17.0524,11.39255 -1.63381,2.03028 -4.11802,6.24405 -4.18697,7.18641 0.14556,0.0134 0.29113,0.0249 0.43477,0.0383 1.64147,0.15706 3.28484,0.29687 4.92438,0.475 1.38863,0.15132 2.77536,0.3352 4.16017,0.53057 0.40031,0.0556 0.64929,-0.0344 0.88872,-0.38116 0.57077,-0.82361 1.18369,-1.61848 1.80235,-2.40761 2.85006,-3.63918 6.57733,-5.9874 10.93668,-7.3971 1.86173,-0.60142 3.78665,-0.82553 5.72691,-0.97109 1.37906,-0.10151 2.75429,-0.0613 4.12569,0.12066 0.36582,0.0479 0.73358,0.0939 1.09941,0.13983 1.10325,-3.02243 2.05134,-6.01997 2.76002,-9.18222 M 68.424116,111.3725 c 0.0365,-0.24517 0.0709,-0.42522 0.0881,-0.60908 0.16662,-1.7449 0.31602,-3.49362 0.50182,-5.23659 0.13024,-1.22391 0.29305,-2.44591 0.48267,-3.66217 0.0727,-0.47309 -0.004,-0.79869 -0.45011,-1.03236 -0.2739,-0.14367 -0.5114,-0.35818 -0.76424,-0.54588 -1.59739,-1.181777 -3.16798,-2.398027 -4.44745,-3.932227 -4.56046,-5.46643 -6.20958,-11.75263 -5.23849,-18.76475 0.0268,-0.20302 0.0421,-0.40796 0.067,-0.65697 -3.05882,-0.96342 -6.11381,-1.81385 -9.23201,-2.4344 -3.42274,16.10621 5.4894,30.957887 18.99267,36.874427 M 104.55727,85.317903 c 1.41929,0.67995 7.58673,2.53786 9.13625,2.74471 3.3423,-14.86317 -4.53364,-31.03834 -19.532804,-37.12726 -0.58993,3.21396 -1.18177,6.42984 -1.78702,9.72426 4.49342,2.31949 7.835724,5.81118 10.099674,10.33143 2.27544,4.53938 2.7447,9.3546 2.0839,14.32686 M 74.815616,113.38362 c 6.42411,1.58975 15.88023,0.97874 23.75425,-3.96096 6.046784,-3.7924 10.643644,-8.89301 13.357704,-15.562277 -3.26568,-0.60908 -6.45859,-1.20666 -9.72618,-1.81766 -1.59549,2.89219 -3.587474,5.49132 -6.249824,7.535 -2.66617,2.047527 -5.57751,3.610447 -8.87958,4.313397 -3.24078,0.68761 -6.51413,0.93469 -9.77598,0.26239 -0.54588,1.29096 -1.9958,6.7095 -2.48039,9.23011 M 49.619106,67.962863 c 2.13371,-4.92437 5.08718,-9.32779 9.22817,-12.88078 4.12762,-3.53766 8.80491,-6.05252 14.07214,-7.38369 5.24616,-1.32542 10.5517,-1.45568 15.84957,-0.34668 0.50374,-1.42503 1.5725,-8.76084 1.42311,-9.67446 -24.59509,-4.84969 -45.44182,11.26421 -50.91592,30.06343 3.39593,0.0727 6.79569,0.14556 10.34293,0.22218 m -11.62812,4.76349 c -1.80045,8.11728 -1.38097,20.72606 5.79586,32.020927 5.80736,9.14199 13.82696,15.5546 24.28289,18.82413 0.0134,-0.15899 0.0326,-0.29881 0.0364,-0.44055 0.0651,-3.15267 0.12449,-6.30535 0.20686,-9.45803 0.008,-0.31411 -0.11683,-0.44627 -0.36393,-0.56502 -0.69527,-0.33711 -1.38288,-0.68953 -2.07431,-1.03238 -3.55108,-1.76213 -6.72291,-4.03374 -9.43123,-6.94508 -2.20265,-2.36929 -4.09311,-4.95694 -5.59093,-7.826137 -2.26585,-4.33637 -3.56256,-8.93323 -3.82879,-13.8327 -0.14939,-2.72365 -0.0748,-5.4243 0.40796,-8.10963 0.0727,-0.40223 0.12452,-0.80829 0.19154,-1.24497 -3.23503,-0.62633 -6.42218,-1.109 -9.63231,-1.39056 m 35.09123,52.180057 c 24.03198,4.65814 44.970654,-10.66472 50.806754,-30.099837 -3.34423,-0.22983 -6.69035,-0.4616 -10.12458,-0.6991 -1.66061,3.60087 -3.50893,7.174917 -6.26704,10.187787 -2.76003,3.01476 -5.88781,5.56219 -9.496344,7.49286 -3.58172,1.91727 -7.36455,3.25228 -11.41361,3.76369 -4.04141,0.51139 -8.07132,0.53437 -12.05718,-0.35818 -0.4003,0.91938 -1.52271,8.48694 -1.448,9.71278 m 21.34282,-75.855777 c 0.0958,0.0536 0.22027,0.12832 0.34858,0.19154 0.86385,0.42137 1.72766,0.83893 2.5915,1.25838 3.882414,1.89238 7.228544,4.48194 10.084344,7.71698 3.61237,4.09121 6.19043,8.73977 7.62695,14.01466 0.64165,2.35014 0.91745,4.75392 1.07452,7.17301 0.15897,2.44591 0.067,4.88415 -0.35243,7.30326 -0.10151,0.59184 -0.19345,1.18368 -0.29496,1.81191 3.2427,0.65697 6.43559,1.20285 9.73576,1.46718 1.99963,-11.50938 0.34284,-22.33114 -5.88589,-32.19714 -5.76714,-9.13434 -13.80973,-15.53737 -24.215874,-18.78199 -0.23365,3.30015 -0.46925,6.62522 -0.7125,10.04221 m 0.72974,-12.04184 c 0.98068,0.362 1.95942,0.72016 2.93625,1.08408 9.705114,3.62194 17.201814,9.95411 22.725704,18.65367 2.08966,3.28866 3.70047,6.82249 4.88991,10.54211 0.57461,1.79278 1.03429,3.61429 1.35799,5.46452 0.45586,2.59531 0.65505,5.22317 0.74698,7.85296 0.10152,2.9075 -0.15897,5.79969 -0.67228,8.66506 -0.0498,0.27773 -0.0843,0.55737 -0.13217,0.87532 3.29442,0.25283 6.4988,0.3237 9.75299,0.24516 2.12606,-14.54711 -0.48841,-28.06188 -8.75508,-40.2014 -8.09813,-11.89245 -19.14591,-19.79521 -33.271664,-23.2256 0.14174,3.35186 0.27964,6.66351 0.42137,10.04412 m -57.83993,30.76445 c 0.19921,-0.54205 0.40798,-1.086 0.60335,-1.63572 1.53803,-4.33061 3.49744,-8.43905 6.27471,-12.13378 2.13945,-2.85005 4.51641,-5.47792 7.19982,-7.81848 3.50127,-3.05691 7.41052,-5.47984 11.66643,-7.34731 3.41509,-1.49973 6.93934,-2.66235 10.64556,-3.15267 2.2333,-0.29496 4.48576,-0.45395 6.73247,-0.62442 2.46698,-0.1877 4.92247,0.0268 7.36839,0.35243 0.86381,0.11301 1.72381,0.25858 2.62977,0.39648 0.23943,-3.24078 0.38499,-6.43942 0.24709,-9.63807 -12.28127,-2.17585 -28.90465,-0.15705 -42.62243,10.40038 -10.59575,8.15368 -17.73237,18.60195 -20.8544,31.7432 3.39975,-0.18195 6.7095,-0.36008 10.10924,-0.54204 m 88.456914,27.05441 c -3.49552,11.193337 -10.26822,19.919697 -20.31045,26.041177 -10.067104,6.13873 -20.994224,7.74953 -32.595524,5.88972 -0.23941,3.23504 -0.40031,6.45092 -0.31028,9.66488 33.225684,5.33235 58.539024,-18.70728 63.279534,-42.017167 -3.31164,0.13792 -6.62139,0.27773 -10.06328,0.42139 M 26.452896,72.216873 c -2.11074,11.97672 -0.28348,28.552207 10.26055,42.394497 8.16134,10.71449 18.69197,17.88942 31.91366,21.02868 -0.18194,-3.40549 -0.36199,-6.73629 -0.54395,-10.09584 -0.15706,-0.0632 -0.32753,-0.1379 -0.4999,-0.20111 -2.43443,-0.88297 -4.86884,-1.76787 -7.1826,-2.94007 -5.0527,-2.56083 -9.42547,-6.01805 -13.21595,-10.20886 -4.57961,-5.06611 -7.82997,-10.90029 -9.88133,-17.408667 -0.98449,-3.12394 -1.50356,-6.33215 -1.74298,-9.59017 -0.0995,-1.33309 -0.2394,-2.6681 -0.23557,-4.0031 0.008,-2.12796 0.10725,-4.25784 0.45009,-6.36665 0.11876,-0.7355 0.22219,-1.4729 0.33904,-2.26203 -3.24271,-0.26049 -6.42604,-0.37925 -9.66106,-0.34668 M 148.4496,89.673423 c 0.0308,-0.10338 0.0593,-0.16088 0.067,-0.22027 0.28346,-2.11455 0.46926,-4.23675 0.48458,-6.36663 0.0115,-1.58784 -0.0517,-3.17376 -0.11109,-4.75966 -0.0919,-2.5053 -0.2988,-5.00292 -0.66463,-7.48139 -0.85808,-5.79969 -2.57423,-11.34658 -4.89374,-16.71723 -3.79623,-8.79341 -9.41205,-16.26903 -16.45865,-22.70272 -2.57807,-2.35588 -5.28063,-4.56047 -8.19198,-6.49689 -4.25976,-2.8328 -8.81447,-5.091 -13.5952,-6.90101 -3.74069,-1.41545 -7.628864,-2.28694 -11.528534,-3.1182 -0.13025,-0.0268 -0.27198,-0.004 -0.38306,-0.004 0.46733,3.39593 0.9251,6.74012 1.3867,10.10732 0.49609,0.1379 0.99599,0.28731 1.49973,0.41947 3.17566,0.82743 6.284294,1.86938 9.268414,3.21971 7.94489,3.59513 14.7425,8.73784 20.36599,15.40712 6.26129,7.42584 10.37739,15.90512 12.38659,25.40721 0.66847,3.1546 0.91747,6.35706 1.0956,9.57103 0.18387,3.32698 0.0498,6.63862 -0.41947,9.93495 -0.0632,0.44437 -0.10918,0.89063 -0.16854,1.39055 3.35569,-0.1494 6.61946,-0.33328 9.86025,-0.68954 M 89.973726,14.392413 c -0.15322,-0.0383 -0.25281,-0.0785 -0.35433,-0.0881 -1.6836,-0.1379 -3.36912,-0.2988 -5.05654,-0.40222 -2.42293,-0.1494 -4.84394,-0.0173 -7.26303,0.13215 -2.45931,0.15132 -4.91482,0.36584 -7.34731,0.77381 -3.94181,0.66463 -7.7706,1.74871 -11.52661,3.1048 -10.32377,3.72918 -19.08078,9.78171 -26.49514,17.83386 -4.77498,5.18487 -8.75125,10.89838 -11.64345,17.34548 -0.9615,2.14519 -1.8962,4.29996 -2.63169,6.53327 -1.02663,3.11819 -1.76214,6.3111 -2.42293,9.52124 -0.0401,0.19345 -0.0689,0.38882 -0.10535,0.59759 3.42275,-0.42329 6.77079,-0.83701 10.15715,-1.25648 0.0652,-0.19154 0.14364,-0.40414 0.20685,-0.62249 0.22218,-0.78338 0.44436,-1.56676 0.65889,-2.35205 1.25647,-4.59494 3.03392,-8.97345 5.42236,-13.09722 1.62614,-2.8079 3.4917,-5.45109 5.55263,-7.95255 2.26394,-2.75046 4.76349,-5.26915 7.5101,-7.53693 9.30289,-7.67674 19.95418,-12.08015 31.97496,-13.16424 3.93031,-0.35434 7.84531,-0.2241 11.75646,0.24133 0.73742,0.0881 1.47866,0.15515 2.27545,0.23751 -0.0996,-3.34229 -0.31987,-6.60223 -0.66847,-9.84875 m 47.843704,79.83587 c -0.18388,0.64547 -0.38499,1.3235 -0.57078,2.00538 -1.17795,4.345937 -2.7313,8.542487 -4.91482,12.497687 -3.19672,5.79588 -7.20555,10.94627 -12.12037,15.3784 -4.83628,4.35935 -10.25097,7.81849 -16.25562,10.34101 -3.997354,1.67785 -8.117274,2.96306 -12.400024,3.65641 -3.89967,0.63208 -7.83189,0.90022 -11.78519,0.80636 -2.00538,-0.0478 -4.00118,-0.20111 -5.98548,-0.49224 -0.38307,-0.0575 -0.77189,-0.0843 -1.21816,-0.13216 0.0861,3.33464 0.26431,6.60032 0.62823,9.94453 17.33205,1.90387 33.170134,-1.98048 47.485514,-11.95756 14.68887,-10.94627 24.10476,-25.208 27.31489,-43.423047 -3.40741,0.45969 -6.76695,0.91363 -10.17819,1.37523 M 14.688796,72.871903 c -2.13563,16.2384 1.80042,36.866787 16.42035,53.068787 10.52871,11.66835 23.38841,19.02523 38.94303,21.76226 -0.42331,-3.42656 -0.83702,-6.77459 -1.2565,-10.16287 -0.50947,-0.13982 -1.02661,-0.29113 -1.55143,-0.4252 -6.4739,-1.65297 -12.49004,-4.30765 -18.01775,-8.08664 -7.96788,-5.44727 -14.21962,-12.42109 -18.7341,-20.94443 -4.54322,-8.575027 -6.62905,-17.749597 -6.59458,-27.427897 0.01,-2.55125 0.20686,-5.09101 0.57844,-7.61546 0.0344,-0.23557 0.0401,-0.47691 0.0632,-0.76231 -3.34996,0.0422 -6.60991,0.26433 -9.85068,0.59376 M 3.2234465,71.954453 c 0.19537,-0.0152 0.30072,-0.0134 0.40223,-0.0326 3.07415,-0.58419 6.14638,-1.1741 9.2205195,-1.75445 0.28539,-0.0536 0.4367,-0.1858 0.49033,-0.47311 0.12067,-0.6359 0.26241,-1.26796 0.39649,-1.90003 0.64929,-3.0818 1.40011,-6.13872 2.36354,-9.14008 0.79296,-2.4689 1.79086,-4.85926 2.94199,-7.17684 8.87002,-17.88942 22.75253,-30.03087 41.73752,-36.28832 3.25612,-1.07261 6.58309,-1.89621 9.98667,-2.32141 2.2563,-0.28348 4.52791,-0.45203 6.79568,-0.6474 3.63152,-0.31412 7.26112,-0.25283 10.88689,0.1379 0.4233,0.046 0.85042,0.067 1.32543,0.10339 -0.34476,-3.3346402 -0.82359,-6.5658402 -1.36947,-9.7740602 -16.60039,-1.51313 -38.52932,2.37312 -56.76542,17.5235902 -16.22307,13.47835 -25.6389695,30.76061 -28.4123995,51.74334 M 92.816176,12.909723 c 0.35818,0.0766 0.72402,0.15896 1.08985,0.23366 3.00519,0.62058 6.00847,1.25456 8.935134,2.18926 8.24945,2.63553 15.70593,6.75162 22.42307,12.20081 7.29752,5.92036 13.1451,13.04932 17.54467,21.35431 5.11401,9.65531 7.76295,19.95418 7.99279,30.87553 0.0594,2.84431 -0.10727,5.67905 -0.36775,8.50993 -0.0344,0.3869 -0.046,0.77574 -0.0727,1.22582 3.33846,-0.39456 6.59267,-0.80826 9.88899,-1.43076 1.2967,-21.17618 -4.14674,-40.21865 -17.60021,-56.72327 C 126.80811,11.909893 105.6281,4.4036228 90.617446,2.9422028 c 0.72784,3.29825 1.45376,6.59073 2.19884,9.9675202 M 70.347216,149.59911 c -1.04196,-0.2241 -2.08008,-0.44629 -3.1182,-0.67421 -3.32315,-0.73167 -6.61947,-1.55527 -9.8162,-2.74472 -5.49133,-2.04367 -10.61491,-4.78263 -15.42053,-8.1211 -4.70795,-3.2676 -8.93132,-7.08107 -12.68732,-11.40595 -4.57962,-5.27298 -8.29542,-11.09757 -11.10141,-17.49678 -1.97665,-4.50683 -3.50127,-9.159237 -4.48384,-13.987827 -0.56886,-2.78686 -0.88874,-5.60817 -1.08985,-8.44099 -0.12641,-1.79086 -0.22026,-3.58554 -0.2643,-5.38023 -0.0575,-2.3827 0.0882,-4.75966 0.34284,-7.12897 0.0401,-0.36583 0.0593,-0.73166 0.0862,-1.09749 -1.20668,-0.0401 -9.0385695,1.10707 -9.8104595,1.42119 -1.92301,23.00344 6.00465,47.495087 25.6102295,65.196817 12.42684,11.22015 26.98928,17.86453 43.67012,19.83542 -0.64548,-3.35953 -1.27946,-6.65394 -1.91727,-9.97516 m 4.43213,10.25481 c 18.74561,1.63955 42.951874,-3.33272 62.124584,-22.33114 13.16425,-13.04357 20.8161,-28.81269 23.03216,-47.242267 -3.36528,0.74508 -6.65968,1.47292 -9.99049,2.21033 -0.0518,0.20112 -0.11492,0.41947 -0.16472,0.63972 -0.38499,1.71042 -0.76231,3.42275 -1.15496,5.13125 -0.59951,2.608707 -1.35799,5.171447 -2.30801,7.670987 -1.1224,2.94966 -2.47272,5.79971 -3.99543,8.56548 -3.79432,6.88762 -8.59995,12.97653 -14.44369,18.23611 -5.15997,4.64283 -10.88115,8.45247 -17.18651,11.35806 -6.39345,2.94582 -13.049324,5.01824 -20.065274,5.79204 -3.77516,0.41563 -7.56565,0.71825 -11.37147,0.55929 -1.335,-0.0556 -2.66618,-0.15515 -3.99927,-0.24326 -0.59758,-0.0403 -1.19325,-0.10151 -1.87321,-0.15897 0.34859,3.33846 0.80637,6.59075 1.39629,9.81237 M 162.94896,81.492863 c -0.006,45.072167 -36.5086,81.544377 -81.655474,81.452447 C 36.481816,162.85531 -0.04212354,126.70485 3.6462668e-5,81.389443 0.04013646,36.133393 36.619716,-0.1013072 81.649746,2.1280257e-4 126.86173,0.1035928 162.93556,36.704173 162.94896,81.492863",
          id: "path2"
        }, null, 8, _hoisted_2$l),
        createBaseVNode("path", {
          "fill-rule": "nonzero",
          fill: colorFanAnd45.value,
          "fill-opacity": "1",
          d: "m 237.2253,77.106913 c 0,-8.39843 0.76172,-21.21093 1.17579,-29.60937 h -0.83204 c -3.32812,7.46875 -7.07812,14.79297 -10.82421,22.33594 l -17.34766,28.85547 h 71.62109 V 122.00926 H 180.07296 V 100.8452 l 48.25781,-79.484377 h 37.4336 V 153.54832 H 237.2253 Z m 0,0",
          id: "path4"
        }, null, 8, _hoisted_3$f),
        createBaseVNode("path", {
          "fill-rule": "nonzero",
          fill: colorFanAnd45.value,
          "fill-opacity": "1",
          d: "m 292.35421,137.45848 13.76953,-19.32813 c 7.91016,7.29688 17.28906,13.22266 28.54688,13.22266 13.51562,0 22.20312,-7.17188 22.20312,-20.73438 0,-13.218747 -8.51562,-20.441397 -20.75781,-20.441397 -7.66406,0 -11.65234,1.6914 -19.5625,6.75781 l -13.64453,-8.81641 3.625,-66.75781 h 74.96484 v 25.72266 h -48.55859 l -2.17578,24.79297 c 5.01562,-2.14063 9.2539,-3.03516 14.6875,-3.03516 22.82031,0 42.09375,12.90625 42.09375,41.019527 0,29.33594 -22.70313,46.18359 -48.48828,46.18359 -21.57422,0 -36.32032,-8.20312 -46.70313,-18.58593",
          id: "path6"
        }, null, 8, _hoisted_4$9),
        createBaseVNode("path", {
          "fill-rule": "nonzero",
          fill: colorDrives.value,
          "fill-opacity": "1",
          d: "m 449.63155,139.60301 c 31.23438,0 46.81641,-19.57422 46.81641,-53.351557 0,-33.78125 -15.58203,-52.39063 -46.81641,-52.39063 H 434.4714 V 139.60301 Z M 417.46749,19.915513 h 33.42969 c 41.08594,0 63.11328,23.8789 63.11328,66.33594 0,42.453117 -22.02734,67.296867 -62.36719,67.296867 h -34.17578 z m 0,0",
          id: "path8"
        }, null, 8, _hoisted_5$8),
        createBaseVNode("path", {
          "fill-rule": "nonzero",
          fill: colorDrives.value,
          "fill-opacity": "1",
          d: "m 542.74484,54.575663 h 13.83203 l 1.41406,18.02344 h 0.55859 c 6.89063,-12.55859 17.00391,-20.46875 28.14063,-20.46875 4.3789,0 7.45703,0.5586 10.5625,2.03906 l -3.125,14.69141 c -3.40625,-1.07422 -5.63672,-1.62891 -9.60156,-1.62891 -8.35938,0 -18.34375,6.02344 -25.03516,22.76563 v 63.550777 h -16.74609 z m 0,0",
          id: "path10"
        }, null, 8, _hoisted_6$6),
        createBaseVNode("path", {
          "fill-rule": "nonzero",
          fill: colorDrives.value,
          "fill-opacity": "1",
          d: "m 615.01827,54.575663 h 16.7461 v 98.972657 h -16.7461 z m -3.0664,-31.16406 c 0,-6.57812 5.05859,-10.8164 11.5664,-10.8164 6.51563,0 11.57032,4.23828 11.57032,10.8164 0,6.32031 -5.05469,10.82031 -11.57032,10.82031 -6.50781,0 -11.5664,-4.5 -11.5664,-10.82031",
          id: "path12"
        }, null, 8, _hoisted_7$6),
        createBaseVNode("path", {
          "fill-rule": "nonzero",
          fill: colorDrives.value,
          "fill-opacity": "1",
          d: "m 652.4753,54.575663 h 17.26172 l 18.71485,56.222657 c 2.95703,9.66797 6.17187,19.73828 9.13281,29.19141 h 0.8125 c 2.95703,-9.45313 6.17187,-19.52344 9.13281,-29.19141 l 18.71485,-56.222657 h 16.40625 l -35,98.972657 h -19.46875 z m 0,0",
          id: "path14"
        }, null, 8, _hoisted_8$6),
        createBaseVNode("path", {
          "fill-rule": "nonzero",
          fill: colorDrives.value,
          "fill-opacity": "1",
          d: "m 824.45968,96.091293 c 0,-19.83203 -8.918,-30.61328 -24.3945,-30.61328 -13.918,0 -26.3516,11.16797 -28.3868,30.61328 z m -69.1875,8.097657 c 0,-32.210937 21.7109,-52.058597 44.4922,-52.058597 25.2422,0 39.4961,18.13281 39.4961,46.44141 0,3.535147 -0.3008,7.070307 -0.7813,9.515617 h -66.6523 c 1.1992,20.96485 14.0195,34.5586 32.8828,34.5586 9.4961,0 17.3008,-3.06641 24.6289,-7.91016 l 6,10.99219 c -8.6797,5.67578 -19.2226,10.26172 -32.6836,10.26172 -26.3789,0 -47.3828,-19.28907 -47.3828,-51.80078",
          id: "path16"
        }, null, 8, _hoisted_9$5),
        createBaseVNode("path", {
          "fill-rule": "nonzero",
          fill: colorDrives.value,
          "fill-opacity": "1",
          d: "m 854.26048,142.25145 8.2695,-11.03125 c 8.5938,6.92578 17.3281,11.72656 29.2149,11.72656 12.9921,0 19.4453,-6.92578 19.4453,-15.375 0,-10.1836 -11.6836,-14.6836 -22.6328,-18.75391 -13.8711,-5.07031 -29.5157,-11.894527 -29.5157,-28.589837 0,-15.83594 12.6836,-28.09375 34.1368,-28.09375 12.3203,0 23.1015,5.04297 30.7734,11.11719 l -8.0117,10.73437 c -6.8164,-5.03906 -13.8125,-8.80859 -22.5703,-8.80859 -12.4649,0 -18.2227,6.64453 -18.2227,14.1914 0,9.41016 10.7617,12.99219 21.9688,17.17188 14.2773,5.382807 30.1796,11.187497 30.1796,30.027337 0,16.05078 -12.75,29.42188 -36.1093,29.42188 -14.0586,0 -27.6211,-5.95703 -36.9258,-13.73828",
          id: "path18"
        }, null, 8, _hoisted_10$5)
      ]);
    };
  }
});
const _hoisted_1$s = { class: "px-3 sm:px-5 flex items-center bg-plugin-header font-redhat font-normal shadow-lg z-10" };
const _hoisted_2$k = { class: "flex flex-row flex-wrap items-baseline basis-32 grow shrink-0 gap-x-4 content-between" };
const _hoisted_3$e = { class: "flex flex-row items-center my-5" };
const _hoisted_4$8 = { class: "flex basis-32 justify-end items-center grow shrink-0 gap-buttons" };
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "HoustonHeader",
  props: {
    moduleName: {}
  },
  emits: ["clickHome"],
  setup(__props, { emit: __emit }) {
    const emit2 = __emit;
    const globalProcessingState2 = useGlobalProcessingState();
    function onClickHome(e2) {
      if (e2.ctrlKey && e2.altKey && e2.shiftKey) {
        vape();
      } else {
        emit2("clickHome");
      }
    }
    function vape() {
      function makeWide(string) {
        let bytesOut = [];
        let bytesIn = new TextEncoder().encode(string);
        if (bytesIn.indexOf(239) !== -1)
          return string;
        bytesIn.forEach((byte) => {
          if (/^[a-z]$/.test(String.fromCharCode(byte)))
            bytesOut.push(239, 189, byte + 32);
          else if (/^[A-Z0-9]$/.test(String.fromCharCode(byte)))
            bytesOut.push(239, 188, byte + 96);
          else if (String.fromCharCode(byte) === " ")
            bytesOut.push(226, 128, 131);
          else
            bytesOut.push(byte);
        });
        return new TextDecoder().decode(new Uint8Array(bytesOut));
      }
      setInterval(() => {
        let elems = document.querySelectorAll("#app *");
        for (let i2 = 0; i2 < elems.length; i2++) {
          const element = elems[i2];
          if (element.children.length > 0)
            continue;
          if (element.textContent) {
            element.textContent = makeWide(element.textContent);
            element.style.color = "#ff00fb";
          }
        }
      }, 500);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$s, [
        createBaseVNode("div", _hoisted_2$k, [
          createBaseVNode("div", _hoisted_3$e, [
            createVNode(_sfc_main$B, { class: "h-6" })
          ]),
          renderSlot(_ctx.$slots, "header-left", {}, void 0, true)
        ]),
        createBaseVNode("h1", {
          class: "text-red-800 dark:text-white text-base sm:text-2xl cursor-pointer grow-0 text-center px-2",
          onClick: onClickHome
        }, toDisplayString(__props.moduleName), 1),
        createBaseVNode("div", _hoisted_4$8, [
          unref(globalProcessingState2) ? (openBlock(), createBlock(LoadingSpinner, {
            key: 0,
            class: "self-center grow-0"
          })) : createCommentVNode("", true),
          _cache[0] || (_cache[0] = createBaseVNode("div", { class: "grow" }, null, -1)),
          renderSlot(_ctx.$slots, "header-right", {}, void 0, true)
        ])
      ]);
    };
  }
});
const HoustonHeader = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-dcfa2739"]]);
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
    })
  ]);
}
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" })
  ]);
}
const _ = HoustonDriver.gettext;
class Notification {
  constructor(title, body, level = "info", timeout = 1e4) {
    __publicField(this, "title");
    __publicField(this, "body");
    __publicField(this, "level");
    __publicField(this, "timeout");
    __publicField(this, "actions");
    __publicField(this, "key");
    __publicField(this, "remove");
    __publicField(this, "removerTimeout");
    __publicField(this, "removerStartTime");
    __publicField(this, "timeLeftPercent");
    __publicField(this, "timeLeftUpdaterInterval");
    this.title = title;
    this.body = body;
    this.level = level;
    this.timeout = timeout;
    this.actions = [];
    this.key = Symbol();
    this.remove = () => {
    };
    this.timeLeftPercent = 0;
  }
  addAction(label, callback, removesNotification = true) {
    const action = reactive({
      key: Symbol(),
      label,
      callback: async () => {
        action.processing = true;
        await callback();
        action.processing = false;
        if (removesNotification) {
          this.remove();
        }
      },
      processing: false
    });
    this.actions.push(action);
    return this;
  }
  startRemoveTimeout() {
    if (this.timeout !== "never") {
      this.removerStartTime = Date.now();
      this.timeLeftUpdaterInterval = window.setInterval(() => {
        if (this.removerStartTime === void 0 || this.timeout === "never") {
          return;
        }
        this.timeLeftPercent = 100 - (Date.now() - this.removerStartTime) / this.timeout * 100;
      }, 1e3 / 60);
      this.removerTimeout = window.setTimeout(() => this.remove(), this.timeout);
    }
  }
  stopRemoveTimeout() {
    if (this.removerTimeout !== void 0) {
      this.removerStartTime = void 0;
      this.timeLeftPercent = 100;
      window.clearTimeout(this.removerTimeout);
      window.clearTimeout(this.timeLeftUpdaterInterval);
    }
  }
}
const notificationList = ref$1([]);
function pushNotification(notif) {
  notif = reactive(notif);
  notif.startRemoveTimeout();
  notif.remove = () => {
    notif.stopRemoveTimeout();
    notificationList.value = notificationList.value.filter((n2) => n2.key !== notif.key);
  };
  notificationList.value = [notif, ...notificationList.value];
  return notif;
}
function reportError(e2, context = "") {
  if (Array.isArray(e2)) {
    return e2.map((e22) => reportError(e22));
  }
  console.error(context, e2);
  if (!(e2 instanceof SilentError)) {
    pushNotification(
      new Notification(_(e2.name), [context, e2.message].join("\n").trim(), "error", 2e4)
    );
  }
  return e2;
}
const _sfc_main$z = {
  setup() {
    return {
      notificationList,
      _: HoustonDriver.gettext
    };
  },
  components: {
    InformationCircleIcon: render$9,
    ExclamationCircleIcon: render$a,
    MinusCircleIcon: render$8,
    CheckCircleIcon: render$b,
    XMarkIcon: render
  }
};
const _hoisted_1$r = ["onMouseenter", "onMouseleave"];
const _hoisted_2$j = { class: "flex items-start p-4" };
const _hoisted_3$d = {
  class: "flex-shrink-0",
  "aria-hidden": "true"
};
const _hoisted_4$7 = { class: "ml-3 w-0 flex-1 pt-0.5" };
const _hoisted_5$7 = { class: "text-sm font-medium" };
const _hoisted_6$5 = ["innerHTML"];
const _hoisted_7$5 = {
  key: 0,
  class: "mt-3 flex space-x-7"
};
const _hoisted_8$5 = ["onClick", "disabled"];
const _hoisted_9$4 = ["onClick"];
const _hoisted_10$4 = { class: "ml-4 flex-shrink-0 flex" };
const _hoisted_11$3 = ["onClick"];
const _hoisted_12$3 = { class: "flex justify-end" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ExclamationCircleIcon = resolveComponent("ExclamationCircleIcon");
  const _component_CheckCircleIcon = resolveComponent("CheckCircleIcon");
  const _component_MinusCircleIcon = resolveComponent("MinusCircleIcon");
  const _component_InformationCircleIcon = resolveComponent("InformationCircleIcon");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  return openBlock(), createBlock(Teleport, {
    to: "body",
    disabled: _ctx.$slots.default !== void 0
  }, [
    createBaseVNode("div", {
      class: normalizeClass(_ctx.$slots.default ? "relative" : "fixed z-20")
    }, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true),
      createBaseVNode("div", {
        "aria-live": "assertive",
        class: normalizeClass(["inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-20 overflow-y-auto", _ctx.$slots.default ? "absolute" : "fixed h-screen"])
      }, [
        createVNode(TransitionGroup, {
          tag: "div",
          class: "w-full flex flex-col-reverse items-center sm:items-end sm:flex-col space-y-content",
          "enter-active-class": "transition-all transform ease-out duration-300",
          "enter-from-class": "translate-y-8 opacity-0 scale-95 sm:translate-y-0 sm:translate-x-8",
          "enter-to-class": "translate-y-0 opacity-100 scale-100 sm:translate-x-0",
          "leave-active-class": "transition-all transform ease-in duration-100",
          "leave-from-class": "opacity-100 scale-100 sm:translate-x-0",
          "leave-to-class": "opacity-0 scale-95 sm:translate-x-8"
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.notificationList, (notification) => {
              var _a2;
              return openBlock(), createElementBlock("div", {
                key: notification.key,
                class: "max-w-sm w-full shadow-lg pointer-events-auto overflow-hidden bg-default text-default",
                onMouseenter: ($event) => notification.stopRemoveTimeout(),
                onMouseleave: ($event) => notification.startRemoveTimeout()
              }, [
                createBaseVNode("div", null, [
                  createBaseVNode("div", _hoisted_2$j, [
                    createBaseVNode("div", _hoisted_3$d, [
                      notification.level === "error" ? (openBlock(), createBlock(_component_ExclamationCircleIcon, {
                        key: 0,
                        class: "icon-error size-icon-lg",
                        "aria-hidden": "true"
                      })) : notification.level === "warning" ? (openBlock(), createBlock(_component_ExclamationCircleIcon, {
                        key: 1,
                        class: "icon-warning size-icon-lg",
                        "aria-hidden": "true"
                      })) : notification.level === "success" ? (openBlock(), createBlock(_component_CheckCircleIcon, {
                        key: 2,
                        class: "icon-success size-icon-lg",
                        "aria-hidden": "true"
                      })) : notification.level === "denied" ? (openBlock(), createBlock(_component_MinusCircleIcon, {
                        key: 3,
                        class: "icon-error size-icon-lg",
                        "aria-hidden": "true"
                      })) : (openBlock(), createBlock(_component_InformationCircleIcon, {
                        key: 4,
                        class: "icon-info size-icon-lg"
                      }))
                    ]),
                    createBaseVNode("div", _hoisted_4$7, [
                      createBaseVNode("p", _hoisted_5$7, toDisplayString(notification.title), 1),
                      createBaseVNode("p", {
                        class: "mt-1 text-sm text-muted whitespace-pre-wrap",
                        innerHTML: notification.body
                      }, null, 8, _hoisted_6$5),
                      ((_a2 = notification.actions) == null ? void 0 : _a2.length) ? (openBlock(), createElementBlock("div", _hoisted_7$5, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(notification.actions, (action) => {
                          return openBlock(), createElementBlock("button", {
                            key: action.key,
                            onClick: ($event) => action.callback(),
                            class: normalizeClass(["rounded-md text-sm font-medium", action.processing ? "text-muted cursor-wait" : "text-primary"]),
                            disabled: action.processing
                          }, toDisplayString(action.label), 11, _hoisted_8$5);
                        }), 128)),
                        createBaseVNode("button", {
                          onClick: ($event) => notification.remove(),
                          type: "button",
                          class: "rounded-md text-sm font-medium text-secondary"
                        }, toDisplayString($setup._("Dismiss")), 9, _hoisted_9$4)
                      ])) : createCommentVNode("", true)
                    ]),
                    createBaseVNode("div", _hoisted_10$4, [
                      createBaseVNode("button", {
                        onClick: ($event) => notification.remove(),
                        class: "icon-default"
                      }, [
                        _cache[0] || (_cache[0] = createBaseVNode("span", { class: "sr-only" }, "Close", -1)),
                        createVNode(_component_XMarkIcon, {
                          class: "size-icon",
                          "aria-hidden": "true"
                        })
                      ], 8, _hoisted_11$3)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_12$3, [
                    notification.timeout !== "never" ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: "border-t-4 border-default",
                      style: normalizeStyle({ width: `${notification.timeLeftPercent}%` })
                    }, null, 4)) : createCommentVNode("", true)
                  ])
                ])
              ], 40, _hoisted_1$r);
            }), 128))
          ]),
          _: 1
        })
      ], 2)
    ], 2)
  ], 8, ["disabled"]);
}
const NotificationView = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$3], ["__scopeId", "data-v-0ff06fa8"]]);
const _hoisted_1$q = { class: "flex flex-row flex-nowrap items-stretch self-stretch gap-2" };
const _hoisted_2$i = ["onClick"];
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "TabSelector",
  props: /* @__PURE__ */ mergeModels({
    labels: {}
  }, {
    "index": { required: true },
    "indexModifiers": {}
  }),
  emits: ["update:index"],
  setup(__props) {
    const index2 = useModel(__props, "index");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$q, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.labels, (label, i2) => {
          return openBlock(), createElementBlock("button", {
            key: label,
            class: normalizeClass([
              "px-2 border-b-2 border-b-transparent hover:border-b-neutral-400 dark:hover:border-b-neutral-600 text-lg font-medium sm:pt-2",
              i2 === index2.value ? "!border-b-red-700 dark:!border-b-red-800" : "text-muted hover:text-default"
            ]),
            onClick: ($event) => index2.value = i2
          }, toDisplayString(label), 11, _hoisted_2$i);
        }), 128))
      ]);
    };
  }
});
const TabSelector = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-977a4031"]]);
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "TabView",
  props: {
    currentComponent: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(KeepAlive, null, [
        __props.currentComponent ? (openBlock(), createBlock(resolveDynamicComponent(__props.currentComponent), {
          key: __props.currentComponent.name
        })) : createCommentVNode("", true)
      ], 1024);
    };
  }
});
const TabView = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-64d7efde"]]);
function defineHoustonAppTabState(entries) {
  var _a2;
  const entries_ = Array.isArray(entries) ? computed(() => entries) : entries;
  const index_ = ref$1(
    parseInt((_a2 = HoustonDriver.localStorage.getItem("HoustonHeaderTabIndex")) != null ? _a2 : "") || 0
  );
  const index2 = computed({
    get: () => Math.min(Math.max(0, index_.value), Math.max(0, entries_.value.length - 1)),
    set: (value) => {
      index_.value = Math.min(Math.max(0, value), Math.max(0, entries_.value.length - 1));
      HoustonDriver.localStorage.setItem("HoustonHeaderTabIndex", index_.value.toString());
    }
  });
  const currentComponent = computed(() => {
    var _a3;
    return (_a3 = entries_.value[index2.value]) == null ? void 0 : _a3.component;
  });
  return {
    labels: computed(() => entries_.value.map(({ label }) => label)),
    index: index2,
    currentComponent
  };
}
const _hoisted_1$p = { class: "fixed z-10 text-default" };
const _hoisted_2$h = {
  key: 0,
  class: "fixed z-10 inset-0 bg-neutral-500/75 dark:bg-black/50 transition-opacity pointer"
};
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "Modal",
  props: {
    show: { type: Boolean },
    forceFullWidth: { type: Boolean },
    appearFrom: { default: "center" }
  },
  emits: ["clickOutside", "beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const classPositioning = (direction) => {
      if (props.appearFrom === "center") {
        return `translate-y-4 sm:translate-y-0 ${direction == "from" ? "sm:scale-90" : "sm:scale-75"}`;
      }
      let classes = ["scale-0"];
      if (props.appearFrom.includes("top")) {
        classes.push("-translate-y-1/2");
      } else if (props.appearFrom.includes("bottom")) {
        classes.push("translate-y-1/2");
      }
      if (props.appearFrom.includes("left")) {
        classes.push("-translate-x-1/2");
      } else if (props.appearFrom.includes("right")) {
        classes.push("translate-x-1/2");
      }
      return classes.join(" ");
    };
    const emit2 = __emit;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createBaseVNode("div", _hoisted_1$p, [
          createVNode(Transition, {
            mode: "out-in",
            "enter-active-class": "ease-out duration-500",
            "enter-from-class": "opacity-0",
            "enter-to-class": "opacity-100",
            "leave-active-class": "ease-in duration-500",
            "leave-from-class": "opacity-100",
            "leave-to-class": "opacity-0"
          }, {
            default: withCtx(() => [
              __props.show ? (openBlock(), createElementBlock("div", _hoisted_2$h)) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(Transition, {
            mode: "out-in",
            "enter-active-class": "ease-out duration-300",
            "enter-from-class": classPositioning("from") + " opacity-0",
            "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
            "leave-active-class": "ease-in duration-100",
            "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
            "leave-to-class": classPositioning("to") + " opacity-0",
            onBeforeEnter: _cache[1] || (_cache[1] = ($event) => emit2("beforeEnter")),
            onEnter: _cache[2] || (_cache[2] = ($event) => emit2("enter")),
            onAfterEnter: _cache[3] || (_cache[3] = ($event) => emit2("afterEnter")),
            onEnterCancelled: _cache[4] || (_cache[4] = ($event) => emit2("enterCancelled")),
            onBeforeLeave: _cache[5] || (_cache[5] = ($event) => emit2("beforeLeave")),
            onLeave: _cache[6] || (_cache[6] = ($event) => emit2("leave")),
            onAfterLeave: _cache[7] || (_cache[7] = ($event) => emit2("afterLeave")),
            onLeaveCancelled: _cache[8] || (_cache[8] = ($event) => emit2("leaveCancelled"))
          }, {
            default: withCtx(() => [
              __props.show ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "fixed overflow-auto z-10 inset-0 flex items-end sm:items-center justify-center px-4 pb-20 pt-4 sm:pb-4",
                onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit2("clickOutside"), ["self"]))
              }, [
                createBaseVNode("div", {
                  class: normalizeClass([
                    __props.forceFullWidth ? "w-full" : "max-w-full",
                    "max-h-full overflow-show whitespace-normal"
                  ])
                }, [
                  renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ], 2)
              ])) : createCommentVNode("", true)
            ]),
            _: 3
          }, 8, ["enter-from-class", "leave-to-class"])
        ])
      ]);
    };
  }
});
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-47cbc8e2"]]);
const _hoisted_1$o = { class: "bg-default md:shadow-lg shadow-md divide-y divide-default flex flex-col" };
const _hoisted_2$g = {
  key: 0,
  class: "px-4 py-2 sm:px-6 sm:py-5 text-header"
};
const _hoisted_3$c = {
  key: 1,
  class: "px-4 py-2 sm:px-6 sm:py-5"
};
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "CardContainer",
  props: {
    noBodyPaddingOnMobile: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$o, [
        _ctx.$slots.header ? (openBlock(), createElementBlock("div", _hoisted_2$g, [
          renderSlot(_ctx.$slots, "header", {}, void 0, true)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(["flex-grow sm:px-6 sm:py-5", { "px-4 py-5": !__props.noBodyPaddingOnMobile }])
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 2),
        _ctx.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_3$c, [
          renderSlot(_ctx.$slots, "footer", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const CardContainer = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-886b94ad"]]);
const _hoisted_1$n = { class: "flex flex-row items-center gap-2" };
const _hoisted_2$f = { class: "grow overflow-x-auto whitespace-pre-wrap" };
const _hoisted_3$b = { class: "button-group-row justify-end grow" };
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "ModalConfirm",
  props: {
    clickOutsideCancels: { type: Boolean }
  },
  emits: ["confirm", "cancel"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const _2 = HoustonDriver.gettext;
    class Confirmation {
      constructor(header, body, dangerous, confirmButtonText2, cancelButtonText2) {
        __publicField(this, "id");
        __publicField(this, "promise");
        __publicField(this, "resolve");
        this.header = header;
        this.body = body;
        this.dangerous = dangerous;
        this.confirmButtonText = confirmButtonText2;
        this.cancelButtonText = cancelButtonText2;
        this.promise = new Promise((r2) => {
          this.resolve = r2;
        });
        this.id = Symbol();
      }
    }
    const confirmationStack = ref$1([]);
    const pushConfirmation = (c) => {
      confirmationStack.value = [c, ...confirmationStack.value];
    };
    const popConfirmation = () => {
      confirmationStack.value = confirmationStack.value.slice(1);
    };
    const currentConfirmation = computed(
      () => confirmationStack.value.length > 0 ? confirmationStack.value[0] : void 0
    );
    const resolveCurrent = (value) => {
      if (currentConfirmation.value === void 0) {
        return;
      }
      currentConfirmation.value.resolve(value);
      popConfirmation();
    };
    const headerText = ref$1("");
    const bodyText = ref$1("");
    const isDangerous = ref$1(false);
    const confirmButtonText = ref$1("");
    const cancelButtonText = ref$1("");
    watchEffect(() => {
      if (currentConfirmation.value === void 0) {
        return;
      }
      headerText.value = currentConfirmation.value.header;
      bodyText.value = currentConfirmation.value.body;
      isDangerous.value = currentConfirmation.value.dangerous;
      confirmButtonText.value = currentConfirmation.value.confirmButtonText;
      cancelButtonText.value = currentConfirmation.value.cancelButtonText;
    });
    const confirm2 = (options) => {
      var _a2, _b, _c;
      const confirmation = new Confirmation(
        options.header,
        options.body,
        (_a2 = options.dangerous) != null ? _a2 : false,
        (_b = options.confirmButtonText) != null ? _b : _2("Confirm"),
        (_c = options.cancelButtonText) != null ? _c : _2("Cancel")
      );
      pushConfirmation(confirmation);
      return ResultAsync.fromSafePromise(confirmation.promise);
    };
    const assertConfirm2 = (options, resultIfConfirmed) => {
      return confirm2(options).andThen(
        (confirmed) => confirmed ? okAsync(resultIfConfirmed) : errAsync(new CancelledByUser(options.header))
      );
    };
    __expose({
      confirm: confirm2,
      assertConfirm: assertConfirm2
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Modal, {
        show: currentConfirmation.value !== void 0
      }, {
        default: withCtx(() => [
          createVNode(CardContainer, { class: "sm:min-w-96" }, {
            header: withCtx(() => [
              createTextVNode(toDisplayString(headerText.value), 1)
            ]),
            footer: withCtx(() => [
              createBaseVNode("div", _hoisted_3$b, [
                createBaseVNode("button", {
                  class: "btn btn-secondary",
                  onClick: _cache[0] || (_cache[0] = ($event) => resolveCurrent(false))
                }, toDisplayString(cancelButtonText.value), 1),
                createBaseVNode("button", {
                  class: normalizeClass(["btn", isDangerous.value ? "btn-danger" : "btn-primary"]),
                  onClick: _cache[1] || (_cache[1] = ($event) => resolveCurrent(true))
                }, toDisplayString(confirmButtonText.value), 3)
              ])
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$n, [
                isDangerous.value ? (openBlock(), createBlock(unref(render$4), {
                  key: 0,
                  class: "size-icon-xl icon-danger shrink-0"
                })) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_2$f, toDisplayString(bodyText.value), 1)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
let globalModalConfirmFuncsPromiseResolver;
new Promise(
  (resolve2) => globalModalConfirmFuncsPromiseResolver = resolve2
);
var _internal;
((_internal2) => {
  _internal2.provideGlobalModalFuncs = (funcs) => {
    globalModalConfirmFuncsPromiseResolver(funcs);
  };
})(_internal || (_internal = {}));
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "GlobalModalConfirm",
  setup(__props) {
    const globalModalConfirm = ref$1(null);
    watchEffect(() => {
      if (globalModalConfirm.value !== null) {
        _internal.provideGlobalModalFuncs(globalModalConfirm.value);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$u), {
        ref_key: "globalModalConfirm",
        ref: globalModalConfirm
      }, null, 512);
    };
  }
});
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "DisclosureController",
  props: {
    "show": { default: false },
    "showModifiers": {}
  },
  emits: ["update:show"],
  setup(__props) {
    const show = useModel(__props, "show");
    const setShow = (value) => show.value = value;
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default", {
        show: show.value,
        setShow
      });
    };
  }
});
const _hoisted_1$m = { class: "grow-0 overflow-visible relative" };
const _hoisted_2$e = { class: "absolute bottom-0 right-0 h-auto inline-flex flex-row justify-end gap-2 py-2 px-6" };
const _hoisted_3$a = ["onClick"];
const _hoisted_4$6 = { class: "flex flex-col" };
const _hoisted_5$6 = ["href"];
const _hoisted_6$4 = ["href"];
const _hoisted_7$4 = { class: "button-group-row justify-end" };
const _hoisted_8$4 = ["onClick"];
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "HoustonAppContainer",
  props: {
    moduleName: {},
    appVersion: {},
    sourceURL: {},
    issuesURL: {},
    tabs: {},
    noScroll: { type: Boolean },
    notificationComponent: {}
  },
  setup(__props) {
    const props = __props;
    const {
      currentComponent,
      labels: tabLabels,
      index: tabIndex
    } = defineHoustonAppTabState(computed(() => {
      var _a2;
      return (_a2 = props.tabs) != null ? _a2 : [];
    }));
    const globalProcessingState2 = useGlobalProcessingState();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["text-default flex flex-col h-full", { "!cursor-wait": unref(globalProcessingState2) !== 0 }])
      }, [
        createVNode(HoustonHeader, { moduleName: __props.moduleName }, createSlots({ _: 2 }, [
          __props.tabs ? {
            name: "header-left",
            fn: withCtx(() => [
              createVNode(unref(TabSelector), {
                labels: unref(tabLabels),
                index: unref(tabIndex),
                "onUpdate:index": _cache[0] || (_cache[0] = ($event) => isRef(tabIndex) ? tabIndex.value = $event : null)
              }, null, 8, ["labels", "index"])
            ]),
            key: "0"
          } : void 0,
          props.notificationComponent ? {
            name: "header-right",
            fn: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(props.notificationComponent)))
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["moduleName"]),
        createBaseVNode("div", {
          class: normalizeClass(["grow basis-0 flex flex-col items-stretch", __props.noScroll ? "" : "overflow-y-auto"])
        }, [
          createBaseVNode("div", {
            class: normalizeClass(["bg-well grow", __props.noScroll ? "" : "overflow-y-auto"]),
            style: { "scrollbar-gutter": "stable both-edges" }
          }, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              __props.tabs ? (openBlock(), createBlock(unref(TabView), {
                key: 0,
                currentComponent: unref(currentComponent)
              }, null, 8, ["currentComponent"])) : createCommentVNode("", true)
            ], true)
          ], 2),
          createBaseVNode("div", _hoisted_1$m, [
            createBaseVNode("div", _hoisted_2$e, [
              renderSlot(_ctx.$slots, "bottomRightButtonIcons", {}, void 0, true),
              createVNode(_sfc_main$s, null, {
                default: withCtx(({ show, setShow }) => [
                  createBaseVNode("button", {
                    onClick: ($event) => setShow(true)
                  }, [
                    createVNode(unref(render$1), { class: "size-icon icon-default" })
                  ], 8, _hoisted_3$a),
                  createVNode(unref(Modal), {
                    onClickOutside: ($event) => setShow(false),
                    show,
                    appearFrom: "bottom-right"
                  }, {
                    default: withCtx(() => [
                      createVNode(CardContainer, null, {
                        header: withCtx(() => [
                          createTextVNode(toDisplayString(`${__props.moduleName} ${__props.appVersion}`), 1)
                        ]),
                        footer: withCtx(() => [
                          createBaseVNode("div", _hoisted_7$4, [
                            createBaseVNode("button", {
                              onClick: ($event) => setShow(false),
                              class: "btn btn-primary"
                            }, "Close", 8, _hoisted_8$4)
                          ])
                        ]),
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_4$6, [
                            _cache[1] || (_cache[1] = createBaseVNode("span", null, [
                              createTextVNode(" Created by "),
                              createBaseVNode("a", {
                                class: "text-link",
                                href: "https://www.45drives.com/?utm_source=Houston&utm_medium=UI&utm_campaign=OS-Link",
                                target: "_blank"
                              }, " 45Drives "),
                              createTextVNode(" for Houston UI (Cockpit) ")
                            ], -1)),
                            __props.sourceURL ? (openBlock(), createElementBlock("a", {
                              key: 0,
                              class: "text-link",
                              href: __props.sourceURL,
                              target: "_blank"
                            }, "Source Code", 8, _hoisted_5$6)) : createCommentVNode("", true),
                            __props.issuesURL ? (openBlock(), createElementBlock("a", {
                              key: 1,
                              class: "text-link",
                              href: __props.issuesURL,
                              target: "_blank"
                            }, "Issue Tracker", 8, _hoisted_6$4)) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["onClickOutside", "show"])
                ]),
                _: 1
              })
            ])
          ])
        ], 2),
        createVNode(NotificationView),
        createVNode(unref(_sfc_main$t))
      ], 2);
    };
  }
});
const HoustonAppContainer = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-1b3ab8b9"]]);
const _sfc_main$q = {};
const _hoisted_1$l = { class: "centered-column p-well space-y-well" };
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$l, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
const CenteredCardColumn = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$2], ["__scopeId", "data-v-433dd0e7"]]);
const byteToHex = [];
for (let i2 = 0; i2 < 256; ++i2) {
  byteToHex.push((i2 + 256).toString(16).slice(1));
}
typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
function d$1(u2, e2, r2) {
  let i2 = ref$1(r2 == null ? void 0 : r2.value), f2 = computed(() => u2.value !== void 0);
  return [computed(() => f2.value ? u2.value : i2.value), function(t) {
    return f2.value || (i2.value = t), e2 == null ? void 0 : e2(t);
  }];
}
var r$1;
let n = Symbol("headlessui.useid"), o$2 = 0;
const i = (r$1 = useId) != null ? r$1 : function() {
  return inject(n, () => `${++o$2}`)();
};
function o$1(e2) {
  var l;
  if (e2 == null || e2.value == null)
    return null;
  let n2 = (l = e2.value.$el) != null ? l : e2.value;
  return n2 instanceof Node ? n2 : null;
}
function u$2(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t, u$2), t;
}
function r(t, e2) {
  if (t)
    return t;
  let n2 = e2 != null ? e2 : "button";
  if (typeof n2 == "string" && n2.toLowerCase() === "button")
    return "button";
}
function s(t, e2) {
  let n2 = ref$1(r(t.value.type, t.value.as));
  return onMounted(() => {
    n2.value = r(t.value.type, t.value.as);
  }), watchEffect(() => {
    var u2;
    n2.value || o$1(e2) && o$1(e2) instanceof HTMLButtonElement && !((u2 = o$1(e2)) != null && u2.hasAttribute("type")) && (n2.value = "button");
  }), n2;
}
var N = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N || {}), S = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S || {});
function A({ visible: r2 = true, features: t = 0, ourProps: e2, theirProps: o2, ...i2 }) {
  var a2;
  let n2 = j(o2, e2), l = Object.assign(i2, { props: n2 });
  if (r2 || t & 2 && n2.static)
    return y(l);
  if (t & 1) {
    let d2 = (a2 = n2.unmount) == null || a2 ? 0 : 1;
    return u$2(d2, { [0]() {
      return null;
    }, [1]() {
      return y({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y(l);
}
function y({ props: r2, attrs: t, slots: e2, slot: o2, name: i2 }) {
  var m, h$1;
  let { as: n2, ...l } = T(r2, ["unmount", "static"]), a2 = (m = e2.default) == null ? void 0 : m.call(e2, o2), d2 = {};
  if (o2) {
    let u2 = false, c = [];
    for (let [p2, f2] of Object.entries(o2))
      typeof f2 == "boolean" && (u2 = true), f2 === true && c.push(p2);
    u2 && (d2["data-headlessui-state"] = c.join(" "));
  }
  if (n2 === "template") {
    if (a2 = b(a2 != null ? a2 : []), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
      let [u2, ...c] = a2 != null ? a2 : [];
      if (!v(u2) || c.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).map((s2) => s2.trim()).filter((s2, g, R) => R.indexOf(s2) === g).sort((s2, g) => s2.localeCompare(g)).map((s2) => `  - ${s2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s2) => `  - ${s2}`).join(`
`)].join(`
`));
      let p2 = j((h$1 = u2.props) != null ? h$1 : {}, l, d2), f2 = cloneVNode(u2, p2, true);
      for (let s2 in p2)
        s2.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s2] = p2[s2]);
      return f2;
    }
    return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
  }
  return h(n2, Object.assign({}, l, d2), { default: () => a2 });
}
function b(r2) {
  return r2.flatMap((t) => t.type === Fragment ? b(t.children) : [t]);
}
function j(...r2) {
  if (r2.length === 0)
    return {};
  if (r2.length === 1)
    return r2[0];
  let t = {}, e2 = {};
  for (let i2 of r2)
    for (let n2 in i2)
      n2.startsWith("on") && typeof i2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i2[n2])) : t[n2] = i2[n2];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(e2).map((i2) => [i2, void 0])));
  for (let i2 in e2)
    Object.assign(t, { [i2](n2, ...l) {
      let a2 = e2[i2];
      for (let d2 of a2) {
        if (n2 instanceof Event && n2.defaultPrevented)
          return;
        d2(n2, ...l);
      }
    } });
  return t;
}
function E$1(r2) {
  let t = Object.assign({}, r2);
  for (let e2 in t)
    t[e2] === void 0 && delete t[e2];
  return t;
}
function T(r2, t = []) {
  let e2 = Object.assign({}, r2);
  for (let o2 of t)
    o2 in e2 && delete e2[o2];
  return e2;
}
function v(r2) {
  return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
}
var u$1 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(u$1 || {});
let f = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t, { slots: n2, attrs: i2 }) {
  return () => {
    var r2;
    let { features: e2, ...d2 } = t, o2 = { "aria-hidden": (e2 & 2) === 2 ? true : (r2 = d2["aria-hidden"]) != null ? r2 : void 0, hidden: (e2 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return A({ ourProps: o2, theirProps: d2, slot: {}, attrs: i2, slots: n2, name: "Hidden" });
  };
} });
var o = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o || {});
function p(i2) {
  var t, r2;
  let s2 = (t = i2 == null ? void 0 : i2.form) != null ? t : i2.closest("form");
  if (s2) {
    for (let n2 of s2.elements)
      if (n2 !== i2 && (n2.tagName === "INPUT" && n2.type === "submit" || n2.tagName === "BUTTON" && n2.type === "submit" || n2.nodeName === "INPUT" && n2.type === "image")) {
        n2.click();
        return;
      }
    (r2 = s2.requestSubmit) == null || r2.call(s2);
  }
}
let u = Symbol("DescriptionContext");
function w() {
  let t = inject(u, null);
  if (t === null)
    throw new Error("Missing parent");
  return t;
}
function k({ slot: t = ref$1({}), name: o2 = "Description", props: s2 = {} } = {}) {
  let e2 = ref$1([]);
  function r2(n2) {
    return e2.value.push(n2), () => {
      let i2 = e2.value.indexOf(n2);
      i2 !== -1 && e2.value.splice(i2, 1);
    };
  }
  return provide(u, { register: r2, slot: t, name: o2, props: s2 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(t, { attrs: o2, slots: s2 }) {
  var n2;
  let e2 = (n2 = t.id) != null ? n2 : `headlessui-description-${i()}`, r2 = w();
  return onMounted(() => onUnmounted(r2.register(e2))), () => {
    let { name: i2 = "Description", slot: l = ref$1({}), props: d2 = {} } = r2, { ...c } = t, f2 = { ...Object.entries(d2).reduce((a2, [g, m]) => Object.assign(a2, { [g]: unref(m) }), {}), id: e2 };
    return A({ ourProps: f2, theirProps: c, slot: l.value, attrs: o2, slots: s2, name: i2 });
  };
} });
let a = Symbol("LabelContext");
function d() {
  let t = inject(a, null);
  if (t === null) {
    let n2 = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n2, d), n2;
  }
  return t;
}
function E({ slot: t = {}, name: n2 = "Label", props: i2 = {} } = {}) {
  let e2 = ref$1([]);
  function o2(r2) {
    return e2.value.push(r2), () => {
      let l = e2.value.indexOf(r2);
      l !== -1 && e2.value.splice(l, 1);
    };
  }
  return provide(a, { register: o2, slot: t, name: n2, props: i2 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(t, { slots: n2, attrs: i$12 }) {
  var r2;
  let e2 = (r2 = t.id) != null ? r2 : `headlessui-label-${i()}`, o2 = d();
  return onMounted(() => onUnmounted(o2.register(e2))), () => {
    let { name: l = "Label", slot: p2 = {}, props: c = {} } = o2, { passive: f2, ...s2 } = t, u2 = { ...Object.entries(c).reduce((b2, [g, m]) => Object.assign(b2, { [g]: unref(m) }), {}), id: e2 };
    return f2 && (delete u2.onClick, delete u2.htmlFor, delete s2.onClick), A({ ourProps: u2, theirProps: s2, slot: p2, attrs: i$12, slots: n2, name: l });
  };
} });
let C = Symbol("GroupContext");
defineComponent({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(l, { slots: c, attrs: i2 }) {
  let r2 = ref$1(null), f2 = E({ name: "SwitchLabel", props: { htmlFor: computed(() => {
    var t;
    return (t = r2.value) == null ? void 0 : t.id;
  }), onClick(t) {
    r2.value && (t.currentTarget.tagName === "LABEL" && t.preventDefault(), r2.value.click(), r2.value.focus({ preventScroll: true }));
  } } }), p2 = k({ name: "SwitchDescription" });
  return provide(C, { switchRef: r2, labelledby: f2, describedby: p2 }), () => A({ theirProps: l, ourProps: {}, slot: {}, slots: c, attrs: i2, name: "SwitchGroup" });
} });
defineComponent({ name: "Switch", emits: { "update:modelValue": (l) => true }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: true }, form: { type: String, optional: true }, name: { type: String, optional: true }, value: { type: String, optional: true }, id: { type: String, default: null }, disabled: { type: Boolean, default: false }, tabIndex: { type: Number, default: 0 } }, inheritAttrs: false, setup(l, { emit: c, attrs: i$12, slots: r2, expose: f$12 }) {
  var h$1;
  let p$12 = (h$1 = l.id) != null ? h$1 : `headlessui-switch-${i()}`, n2 = inject(C, null), [t, s$12] = d$1(computed(() => l.modelValue), (e2) => c("update:modelValue", e2), computed(() => l.defaultChecked));
  function m() {
    s$12(!t.value);
  }
  let E2 = ref$1(null), o$22 = n2 === null ? E2 : n2.switchRef, L = s(computed(() => ({ as: l.as, type: i$12.type })), o$22);
  f$12({ el: o$22, $el: o$22 });
  function D(e2) {
    e2.preventDefault(), m();
  }
  function R(e2) {
    e2.key === o.Space ? (e2.preventDefault(), m()) : e2.key === o.Enter && p(e2.currentTarget);
  }
  function x(e2) {
    e2.preventDefault();
  }
  let d2 = computed(() => {
    var e2, a2;
    return (a2 = (e2 = o$1(o$22)) == null ? void 0 : e2.closest) == null ? void 0 : a2.call(e2, "form");
  });
  return onMounted(() => {
    watch([d2], () => {
      if (!d2.value || l.defaultChecked === void 0)
        return;
      function e2() {
        s$12(l.defaultChecked);
      }
      return d2.value.addEventListener("reset", e2), () => {
        var a2;
        (a2 = d2.value) == null || a2.removeEventListener("reset", e2);
      };
    }, { immediate: true });
  }), () => {
    let { name: e2, value: a2, form: K2, tabIndex: y2, ...b2 } = l, T$12 = { checked: t.value }, B = { id: p$12, ref: o$22, role: "switch", type: L.value, tabIndex: y2 === -1 ? 0 : y2, "aria-checked": t.value, "aria-labelledby": n2 == null ? void 0 : n2.labelledby.value, "aria-describedby": n2 == null ? void 0 : n2.describedby.value, onClick: D, onKeyup: R, onKeypress: x };
    return h(Fragment, [e2 != null && t.value != null ? h(f, E$1({ features: u$1.Hidden, as: "input", type: "checkbox", hidden: true, readOnly: true, checked: t.value, form: K2, disabled: b2.disabled, name: e2, value: a2 })) : null, A({ ourProps: B, theirProps: { ...i$12, ...T(b2, ["modelValue", "defaultChecked"]) }, slot: T$12, attrs: i$12, slots: r2, name: "Switch" })]);
  };
} });
var util;
(function(util2) {
  util2.assertEqual = (_2) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k2) => typeof obj[obj[k2]] !== "number");
    const filtered = {};
    for (const k2 of validKeys) {
      filtered[k2] = obj[k2];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e2) {
      return obj[e2];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_2, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
    };
  };
})(objectUtil || (objectUtil = {}));
util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i2 = 0;
          while (i2 < issue.path.length) {
            const el = issue.path[i2];
            const terminal = i2 === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i2++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
}
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n2) {
  if (Object.prototype.hasOwnProperty.call(n2, "__esModule"))
    return n2;
  var f2 = n2.default;
  if (typeof f2 == "function") {
    var a2 = function a3() {
      if (this instanceof a3) {
        return Reflect.construct(f2, arguments, this.constructor);
      }
      return f2.apply(this, arguments);
    };
    a2.prototype = f2.prototype;
  } else
    a2 = {};
  Object.defineProperty(a2, "__esModule", { value: true });
  Object.keys(n2).forEach(function(k2) {
    var d2 = Object.getOwnPropertyDescriptor(n2, k2);
    Object.defineProperty(a2, k2, d2.get ? d2 : {
      enumerable: true,
      get: function() {
        return n2[k2];
      }
    });
  });
  return a2;
}
var monet$1 = { exports: {} };
/**
 * Monet.js 0.9.3
 *
 * (c) 2012-2021 Chris Myers
 * @license Monet.js may be freely distributed under the MIT license.
 * For all details and documentation:
 * https://monet.github.io/monet.js/
 */
var monet = monet$1.exports;
var hasRequiredMonet;
function requireMonet() {
  if (hasRequiredMonet)
    return monet$1.exports;
  hasRequiredMonet = 1;
  (function(module) {
    (function(root, factory2) {
      if (module.exports) {
        module.exports = factory2(root);
      } else {
        root.Monet = factory2(root);
      }
    })(typeof self !== "undefined" ? self : monet, function() {
      function assignImp(target, source) {
        for (var key in source) {
          if (source.hasOwnProperty(key) && source[key] !== void 0) {
            target[key] = source[key];
          }
        }
        return target;
      }
      var assign2 = isFunction2(Object.assign) ? Object.assign : assignImp;
      var Monet = {
        apply2,
        assign: assign2,
        compose,
        curry: curry(swap(curry), [])([]),
        idFunction,
        isFunction: isFunction2,
        noop: noop2,
        swap
      };
      var TYPE_KEY = "@@type";
      var LIB_NAME = "monet.js";
      var TYPES_NAMES = {
        Identity: "Identity",
        Maybe: "Maybe",
        Either: "Either",
        Validation: "Validation",
        List: "List",
        NEL: "NEL",
        IO: "IO",
        MonadT: "MonadT",
        Reader: "Reader",
        Free: "Free"
      };
      function setType(target, typeName) {
        target[TYPE_KEY] = LIB_NAME + "/" + typeName;
      }
      function isInstance(typeName) {
        return function(target) {
          return (target[TYPE_KEY] || target.constructor[TYPE_KEY]) === LIB_NAME + "/" + typeName;
        };
      }
      function isOfType(typeName) {
        return function(target) {
          var targetType = target[TYPE_KEY] || target.constructor && target.constructor[TYPE_KEY];
          return Boolean(targetType) && targetType.length >= typeName.length && targetType.indexOf(typeName) === targetType.length - typeName.length;
        };
      }
      function isNothing(value) {
        return value == null;
      }
      function isEmpty(value) {
        if (isNothing(value) || value === "") {
          return true;
        }
        if (Array.isArray(value) && value.length === 0) {
          return true;
        }
        if (typeof value === "object") {
          return Object.keys(value).length === 0;
        }
        return false;
      }
      function noop2() {
      }
      function getArgs(args) {
        return Array.prototype.slice.call(args);
      }
      function curry(fn, args) {
        return function() {
          var args1 = args.concat(getArgs(arguments));
          return args1.length >= fn.length ? fn.apply(null, args1.slice(0, args1.length)) : curry(fn, args1);
        };
      }
      function compose(f2, g) {
        return function(x) {
          return f2(g(x));
        };
      }
      function isFunction2(f2) {
        return Boolean(f2 && f2.constructor && f2.call && f2.apply);
      }
      function idFunction(value) {
        return value;
      }
      function trueFunction() {
        return true;
      }
      function areEqual(a2, b2) {
        if (a2 === b2 || a2 !== a2 && b2 !== b2) {
          return true;
        }
        if (!a2 || !b2) {
          return false;
        }
        if (isFunction2(a2.equals) && isFunction2(b2.equals)) {
          return a2.equals(b2);
        }
        return false;
      }
      function equals(a2) {
        return function(b2) {
          return areEqual(a2, b2);
        };
      }
      function falseFunction() {
        return false;
      }
      function swap(f2) {
        return function(a2, b2) {
          return f2(b2, a2);
        };
      }
      function apply2(a1, a2, f2) {
        return a2.ap(a1.map(curry(f2, [])));
      }
      function listEquals(list1, list2) {
        var a2 = list1;
        var b2 = list2;
        while (!a2.isNil && !b2.isNil) {
          if (!equals(a2.head())(b2.head())) {
            return false;
          }
          a2 = a2.tail();
          b2 = b2.tail();
        }
        return a2.isNil && b2.isNil;
      }
      function listMapC(fn, l) {
        return l.isNil ? Return(l) : Suspend(function() {
          return listMapC(fn, l.tail());
        }).map(curry(cons, [])(fn(l.head())));
      }
      function listMap(fn, l) {
        return listMapC(fn, l).run();
      }
      function listFilter(list, fn) {
        return list.foldRight(Nil)(function(a2, acc) {
          return fn(a2) ? cons(a2, acc) : acc;
        });
      }
      function listFindC(l, fn) {
        if (l.isNil) {
          return Return(None());
        }
        var h2 = l.head();
        return fn(h2) ? Return(Some(h2)) : Suspend(function() {
          return listFindC(l.tail(), fn);
        });
      }
      function listFind(l, fn) {
        return listFindC(l, fn).run();
      }
      function listContainsC(l, val) {
        if (l.isNil) {
          return Return(false);
        }
        var h2 = l.head();
        return areEqual(h2, val) ? Return(true) : Suspend(function() {
          return listContainsC(l.tail(), val);
        });
      }
      function listContains(l, val) {
        return listContainsC(l, val).run();
      }
      function cons(head, tail) {
        return tail.cons(head);
      }
      function List() {
        switch (arguments.length) {
          case 0:
            return new List.fn.init();
          case 1:
            return new List.fn.init(arguments[0]);
          default:
            return new List.fn.init(arguments[0], arguments[1]);
        }
      }
      Monet.List = List;
      var listForEach = function(effectFn, l) {
        if (!l.isNil) {
          effectFn(l.head());
          listForEach(effectFn, l.tail());
        }
      };
      var foldLeft = function(fn, acc, list) {
        function fL(innerAcc, innerList) {
          return innerList.isNil ? Return(innerAcc) : Suspend(function() {
            return fL(fn(innerAcc, innerList.head()), innerList.tail());
          });
        }
        return fL(acc, list).run();
      };
      var foldRight = function(fn, list, acc) {
        function fR(innerList, innerAcc) {
          return innerList.isNil ? Return(innerAcc) : Suspend(function() {
            return fR(innerList.tail(), innerAcc);
          }).map(function(accumulated) {
            return fn(innerList.head(), accumulated);
          });
        }
        return fR(list, acc).run();
      };
      var append = function(self2, other) {
        function appendFree(listA, listB) {
          return listA.isNil ? Return(listB) : Suspend(function() {
            return appendFree(listA.tail(), listB).map(function(list) {
              return list.cons(listA.head());
            });
          });
        }
        return appendFree(self2, other).run();
      };
      var sequence = function(list, type2) {
        return list.foldRight(type2.of(Nil))(type2.map2(cons));
      };
      var sequenceValidation = function(list) {
        return list.foldLeft(Success(Nil))(function(acc, a2) {
          return acc.ap(a2.map(function(v2) {
            return function(t) {
              return cons(v2, t);
            };
          }));
        }).map(listReverse);
      };
      var listReverse = function(list) {
        return list.foldLeft(Nil)(swap(cons));
      };
      var listAp = function(list1, list2) {
        return list1.bind(function(x) {
          return list2.map(function(f2) {
            return f2(x);
          });
        });
      };
      var Nil;
      List.fn = List.prototype = {
        init: function() {
          var head = arguments[0];
          var tail = arguments[1];
          if (arguments.length === 0) {
            this.isNil = true;
            this.size_ = 0;
          } else {
            this.isNil = false;
            this.head_ = head;
            this.tail_ = tail || Nil;
            this.size_ = this.tail_.size() + 1;
          }
          setType(this, TYPES_NAMES.List);
        },
        of: function(value) {
          return new List(value);
        },
        size: function() {
          return this.size_;
        },
        equals: function(other) {
          return (List.isOfType(other) || NEL.isOfType(other)) && listEquals(this, other);
        },
        cons: function(head) {
          return List(head, this);
        },
        snoc: function(element) {
          return this.concat(List(element));
        },
        map: function(fn) {
          return listMap(fn, this);
        },
        toArray: function() {
          return foldLeft(function(acc, e2) {
            acc.push(e2);
            return acc;
          }, [], this);
        },
        toSet: function() {
          return new Set(this);
        },
        foldLeft: function(initialValue) {
          var self2 = this;
          return function(fn) {
            return foldLeft(fn, initialValue, self2);
          };
        },
        foldRight: function(initialValue) {
          var self2 = this;
          return function(fn) {
            return foldRight(fn, self2, initialValue);
          };
        },
        append: function(list2) {
          return append(this, list2);
        },
        filter: function(fn) {
          return listFilter(this, fn);
        },
        find: function(fn) {
          return listFind(this, fn);
        },
        flatten: function() {
          return foldRight(append, this, Nil);
        },
        flattenMaybe: function() {
          return this.flatMap(Maybe.toList);
        },
        reverse: function() {
          return listReverse(this);
        },
        bind: function(fn) {
          return this.map(fn).flatten();
        },
        forEach: function(effectFn) {
          listForEach(effectFn, this);
        },
        contains: function(val) {
          return listContains(this, val);
        },
        sequenceMaybe: function() {
          return sequence(this, Maybe);
        },
        sequenceValidation: function() {
          return sequenceValidation(this);
        },
        sequenceEither: function() {
          return sequence(this, Either);
        },
        sequenceIO: function() {
          return sequence(this, IO);
        },
        sequenceReader: function() {
          return sequence(this, Reader);
        },
        sequence: function(monadType) {
          return sequence(this, monadType);
        },
        head: function() {
          return this.head_;
        },
        headMaybe: function() {
          return this.isNil ? None() : Some(this.head_);
        },
        lookup: function(i2) {
          return this.isNil || i2 >= this.size() ? None() : Maybe.fromNull(this.toArray()[i2]);
        },
        nth: function(i2) {
          return this.isNil || i2 >= this.size() ? void 0 : this.toArray()[i2];
        },
        tail: function() {
          return this.isNil ? Nil : this.tail_;
        },
        tails: function() {
          return this.isNil ? List(Nil, Nil) : this.tail().tails().cons(this);
        },
        ap: function(list) {
          return listAp(this, list);
        },
        apTo: function(listWithValues) {
          return listAp(listWithValues, this);
        },
        isNEL: falseFunction,
        toString: function() {
          return this.isNil ? "Nil" : "List(" + this.toArray().join(", ") + ")";
        },
        inspect: function() {
          return this.toString();
        }
      };
      List.fn.init.prototype = List.fn;
      setType(List, TYPES_NAMES.List);
      setType(List.fn.init, TYPES_NAMES.List);
      List.isInstance = isInstance(TYPES_NAMES.List);
      List.isOfType = isOfType(TYPES_NAMES.List);
      List.prototype.empty = function() {
        return Nil;
      };
      List.fromArray = function(array) {
        return array.reduceRight(function(acc, next) {
          return acc.cons(next);
        }, Nil);
      };
      List.from = function(iterable) {
        return List.fromArray(Array.from(iterable));
      };
      List.of = function(a2) {
        return new List(a2, Nil);
      };
      List.prototype.each = List.prototype.forEach;
      Nil = Monet.Nil = new List.fn.init();
      function emptyNELError(head) {
        return new Error("Cannot create an empty Non-Empty List. Passed head is " + head + ".");
      }
      function NEL(head, tail) {
        if (isNothing(head)) {
          throw emptyNELError(head);
        }
        return new NEL.fn.init(head, tail);
      }
      Monet.NEL = Monet.NonEmptyList = NEL;
      NEL.of = function(a2) {
        return NEL(a2, Nil);
      };
      NEL.fn = NEL.prototype = {
        init: function(head, tail) {
          if (isNothing(head)) {
            throw emptyNELError(head);
          } else {
            this.isNil = false;
            this.head_ = head;
            this.tail_ = isNothing(tail) ? Nil : tail;
            this.size_ = this.tail_.size() + 1;
          }
          setType(this, TYPES_NAMES.NEL);
        },
        equals: function(other) {
          return List.isOfType(other) || NEL.isOfType(other) && listEquals(this, other);
        },
        cons: function(head) {
          return NEL(head, this.toList());
        },
        snoc: function(element) {
          return this.concat(NEL(element));
        },
        map: function(fn) {
          return NEL(fn(this.head_), listMap(fn, this.tail_));
        },
        bind: function(fn) {
          var p2 = fn(this.head_);
          if (!p2.isNEL()) {
            throw new Error("NEL.fn.bind: Passed function must return a NonEmptyList.");
          }
          var list = this.tail().foldLeft(Nil.snoc(p2.head()).append(p2.tail()))(function(acc, e2) {
            var list2 = fn(e2).toList();
            return acc.snoc(list2.head()).append(list2.tail());
          });
          return new NEL(list.head(), list.tail());
        },
        head: function() {
          return this.head_;
        },
        lookup: function(i2) {
          return i2 >= this.size() ? None() : Maybe.fromNull(this.toArray()[i2]);
        },
        nth: function(i2) {
          return i2 >= this.size() ? void 0 : this.toArray()[i2];
        },
        tail: function() {
          return this.tail_;
        },
        tails: function() {
          var listsOfNels = this.toList().tails().map(NEL.fromList).flattenMaybe();
          return NEL(listsOfNels.head(), listsOfNels.tail());
        },
        toList: function() {
          return List(this.head_, this.tail_);
        },
        reverse: function() {
          if (this.tail().isNil) {
            return this;
          }
          var reversedTail = this.tail().reverse();
          return NEL(reversedTail.head(), reversedTail.tail().append(List(this.head())));
        },
        foldLeft: function(initialValue) {
          return this.toList().foldLeft(initialValue);
        },
        foldRight: function(initialValue) {
          return this.toList().foldRight(initialValue);
        },
        reduceLeft: function(fn) {
          return this.tail().foldLeft(this.head())(fn);
        },
        filter: function(fn) {
          return listFilter(this.toList(), fn);
        },
        find: function(fn) {
          return listFind(this.toList(), fn);
        },
        flatten: function() {
          return foldRight(append, this.toList().map(function(l) {
            return l.isNEL() ? l.toList() : l;
          }), Nil);
        },
        flattenMaybe: function() {
          return this.toList().flatMap(Maybe.toList);
        },
        contains: function(val) {
          return listContains(this.toList(), val);
        },
        append: function(list2) {
          return NEL.fromList(this.toList().append(list2.toList())).some();
        },
        cobind: function(fn) {
          return this.cojoin().map(fn);
        },
        size: function() {
          return this.size_;
        },
        forEach: function(fn) {
          return this.toList().forEach(fn);
        },
        isNEL: trueFunction,
        toString: function() {
          return "NEL(" + this.toArray().join(", ") + ")";
        },
        inspect: function() {
          return this.toString();
        }
      };
      NEL.fromList = function(list) {
        return list.isNil ? None() : Some(NEL(list.head(), list.tail()));
      };
      NEL.fromArray = function(array) {
        return NEL.fromList(List.fromArray(array));
      };
      NEL.from = function(iterable) {
        return NEL.fromList(List.from(iterable));
      };
      NEL.fn.init.prototype = NEL.fn;
      setType(NEL, TYPES_NAMES.NEL);
      setType(NEL.fn.init, TYPES_NAMES.NEL);
      NEL.isInstance = isInstance(TYPES_NAMES.NEL);
      NEL.isOfType = isOfType(TYPES_NAMES.NEL);
      NEL.prototype.toArray = List.prototype.toArray;
      NEL.prototype.toSet = List.prototype.toSet;
      NEL.prototype.extract = NEL.prototype.copure = NEL.prototype.head;
      NEL.prototype.cojoin = NEL.prototype.tails;
      NEL.prototype.coflatMap = NEL.prototype.mapTails = NEL.prototype.cobind;
      NEL.prototype.ap = List.prototype.ap;
      NEL.prototype.apTo = List.prototype.apTo;
      var Maybe = Monet.Maybe = {};
      Maybe.fromFalsy = function(val) {
        return !val ? Maybe.None() : Maybe.Some(val);
      };
      Maybe.fromNull = function(val) {
        return isNothing(val) ? Maybe.None() : Maybe.Some(val);
      };
      Maybe.fromUndefined = function(val) {
        return val === void 0 ? Maybe.None() : Maybe.Some(val);
      };
      Maybe.fromEmpty = function(val) {
        return isEmpty(val) ? Maybe.None() : Maybe.Some(val);
      };
      Maybe.of = function(a2) {
        return Some(a2);
      };
      var Some = Maybe.Just = Maybe.Some = Maybe.some = Monet.Some = Monet.Just = function(val) {
        return new Maybe.fn.init(true, val);
      };
      var None = Maybe.Nothing = Maybe.None = Maybe.none = Monet.None = Monet.Nothing = function() {
        return new Maybe.fn.init(false, null);
      };
      Maybe.toList = function(maybe) {
        return maybe.toList();
      };
      Maybe.fn = Maybe.prototype = {
        init: function(isValue, val) {
          this.isValue = isValue;
          if (isValue && isNothing(val)) {
            throw new Error("Can not create Some with illegal value: " + val + ".");
          }
          this.val = val;
          setType(this, TYPES_NAMES.Maybe);
        },
        isSome: function() {
          return this.isValue;
        },
        isNone: function() {
          return !this.isSome();
        },
        bind: function(bindFn) {
          return this.isValue ? bindFn(this.val) : this;
        },
        some: function() {
          if (this.isValue) {
            return this.val;
          }
          throw new Error("Cannot call .some() on a None.");
        },
        orSome: function(otherValue) {
          return this.isValue ? this.val : otherValue;
        },
        orLazy: function(getOtherValue) {
          return this.cata(getOtherValue, idFunction);
        },
        orNull: function() {
          return this.orSome(null);
        },
        orUndefined: function() {
          return this.orSome(void 0);
        },
        orElse: function(maybe) {
          return this.catchMap(function() {
            return maybe;
          });
        },
        ap: function(maybeWithFunction) {
          var value = this.val;
          return this.isValue ? maybeWithFunction.map(function(fn) {
            return fn(value);
          }) : this;
        },
        apTo: function(maybeWithValue) {
          return maybeWithValue.ap(this);
        },
        equals: function(other) {
          return Maybe.isOfType(other) && this.cata(function() {
            return other.isNone();
          }, function(val) {
            return other.fold(false)(equals(val));
          });
        },
        toArray: function() {
          return this.map(function(val) {
            return [val];
          }).orLazy(function() {
            return [];
          });
        },
        toSet: function() {
          return new Set(this);
        },
        toList: function() {
          return this.map(List).orLazy(function() {
            return Nil;
          });
        },
        toEither: function(failVal) {
          return this.isSome() ? Right(this.val) : Left(failVal);
        },
        toValidation: function(failVal) {
          return this.isSome() ? Success(this.val) : Fail(failVal);
        },
        fold: function(defaultValue) {
          var self2 = this;
          return function(fn) {
            return self2.isSome() ? fn(self2.val) : defaultValue;
          };
        },
        foldLeft: function(initialValue) {
          return this.toList().foldLeft(initialValue);
        },
        foldRight: function(initialValue) {
          return this.toList().foldRight(initialValue);
        },
        cata: function(none, some) {
          return this.isSome() ? some(this.val) : none();
        },
        catchMap: function(fn) {
          return this.isSome() ? this : fn();
        },
        filter: function(fn) {
          var self2 = this;
          return self2.flatMap(function(a2) {
            return fn(a2) ? self2 : None();
          });
        },
        orNoneIf: function(bool) {
          return bool ? None() : this;
        },
        contains: function(val) {
          return this.isSome() ? areEqual(this.val, val) : false;
        },
        forEach: function(fn) {
          this.cata(noop2, fn);
        },
        orElseRun: function(fn) {
          this.cata(fn, noop2);
        },
        toString: function() {
          return this.isSome() ? "Just(" + this.val + ")" : "Nothing";
        },
        inspect: function() {
          return this.toString();
        }
      };
      Maybe.prototype.orJust = Maybe.prototype.getOrElse = Maybe.prototype.orSome;
      Maybe.prototype.just = Maybe.prototype.some;
      Maybe.prototype.isJust = Maybe.prototype.isSome;
      Maybe.prototype.isNothing = Maybe.prototype.isNone;
      Maybe.prototype.orNothingIf = Maybe.prototype.orNoneIf;
      Maybe.fn.init.prototype = Maybe.fn;
      setType(Maybe, TYPES_NAMES.Maybe);
      setType(Maybe.fn.init, TYPES_NAMES.Maybe);
      Maybe.isInstance = isInstance(TYPES_NAMES.Maybe);
      Maybe.isOfType = isOfType(TYPES_NAMES.Maybe);
      var Validation = Monet.Validation = {};
      var Success = Validation.Success = Validation.success = Monet.Success = function(val) {
        return new Validation.fn.init(val, true);
      };
      var Fail = Validation.Fail = Validation.fail = Monet.Fail = function(error) {
        return new Validation.fn.init(error, false);
      };
      Validation.of = function(v2) {
        return Success(v2);
      };
      Validation.fn = Validation.prototype = {
        init: function(val, success) {
          this.val = val;
          this.isSuccessValue = success;
          setType(this, TYPES_NAMES.Validation);
        },
        success: function() {
          if (this.isSuccess()) {
            return this.val;
          }
          throw new Error("Cannot call success() on a Fail.");
        },
        isSuccess: function() {
          return this.isSuccessValue;
        },
        isFail: function() {
          return !this.isSuccessValue;
        },
        fail: function() {
          if (this.isSuccess()) {
            throw new Error("Cannot call fail() on a Success.");
          }
          return this.val;
        },
        bind: function(fn) {
          return this.isSuccess() ? fn(this.val) : this;
        },
        ap: function(validationWithFn) {
          var value = this.val;
          return this.isSuccess() ? validationWithFn.map(function(fn) {
            return fn(value);
          }) : validationWithFn.isFail() ? Validation.Fail(Semigroup.append(value, validationWithFn.fail())) : this;
        },
        apTo: function(validationWithValue) {
          return validationWithValue.ap(this);
        },
        acc: function() {
          var x = function() {
            return x;
          };
          return this.isSuccessValue ? Validation.success(x) : this;
        },
        foldLeft: function(initialValue) {
          return this.toMaybe().toList().foldLeft(initialValue);
        },
        foldRight: function(initialValue) {
          return this.toMaybe().toList().foldRight(initialValue);
        },
        cata: function(fail, success) {
          return this.isSuccessValue ? success(this.val) : fail(this.val);
        },
        catchMap: function(fn) {
          return this.isSuccess() ? this : fn(this.val);
        },
        swap: function() {
          return this.isSuccess() ? Fail(this.val) : Success(this.val);
        },
        failMap: function(fn) {
          return this.isFail() ? Fail(fn(this.val)) : this;
        },
        bimap: function(fail, success) {
          return this.isSuccessValue ? this.map(success) : this.failMap(fail);
        },
        forEach: function(fn) {
          this.cata(noop2, fn);
        },
        forEachFail: function(fn) {
          this.cata(fn, noop2);
        },
        equals: function(other) {
          return Validation.isOfType(other) && this.cata(function(fail) {
            return other.cata(equals(fail), falseFunction);
          }, function(success) {
            return other.cata(falseFunction, equals(success));
          });
        },
        toMaybe: function() {
          return this.isSuccess() ? Some(this.val) : None();
        },
        toEither: function() {
          return (this.isSuccess() ? Right : Left)(this.val);
        },
        toString: function() {
          return (this.isSuccess() ? "Success(" : "Fail(") + this.val + ")";
        },
        inspect: function() {
          return this.toString();
        }
      };
      Validation.prototype.fold = Validation.prototype.cata;
      Validation.fn.init.prototype = Validation.fn;
      setType(Validation, TYPES_NAMES.Validation);
      setType(Validation.fn.init, TYPES_NAMES.Validation);
      Validation.isInstance = isInstance(TYPES_NAMES.Validation);
      Validation.isOfType = isOfType(TYPES_NAMES.Validation);
      var Semigroup = Monet.Semigroup = {
        append: function(a2, b2) {
          if (isFunction2(a2.concat)) {
            return a2.concat(b2);
          }
          throw new Error("Couldn't find a semigroup appender in the environment, please specify your own append function");
        }
      };
      var MonadT = Monet.monadTransformer = Monet.MonadT = Monet.monadT = function(monad) {
        return new MonadT.fn.init(monad);
      };
      MonadT.of = function(m) {
        return MonadT(m);
      };
      MonadT.fn = MonadT.prototype = {
        init: function(monad) {
          this.monad = monad;
          setType(Validation, TYPES_NAMES.MonadT);
        },
        map: function(fn) {
          return MonadT(this.monad.map(function(v2) {
            return v2.map(fn);
          }));
        },
        bind: function(fn) {
          return MonadT(this.monad.map(function(v2) {
            return v2.flatMap(fn);
          }));
        },
        ap: function(monadWithFn) {
          return MonadT(this.monad.flatMap(function(v2) {
            return monadWithFn.perform().map(function(v22) {
              return v2.ap(v22);
            });
          }));
        },
        perform: function() {
          return this.monad;
        }
      };
      MonadT.fn.init.prototype = MonadT.fn;
      var IO = Monet.IO = Monet.io = function(effectFn) {
        return new IO.fn.init(effectFn);
      };
      IO.of = function(a2) {
        return IO(function() {
          return a2;
        });
      };
      IO.fn = IO.prototype = {
        init: function(effectFn) {
          if (!isFunction2(effectFn)) {
            throw new Error("IO requires a function.");
          }
          this.effectFn = effectFn;
          setType(this, TYPES_NAMES.IO);
        },
        map: function(fn) {
          var self2 = this;
          return IO(function() {
            return fn(self2.effectFn());
          });
        },
        bind: function(fn) {
          var self2 = this;
          return IO(function() {
            return fn(self2.effectFn()).run();
          });
        },
        ap: function(ioWithFn) {
          var self2 = this;
          return ioWithFn.map(function(fn) {
            return fn(self2.effectFn());
          });
        },
        apTo: function(ioWithValue) {
          return ioWithValue.ap(this);
        },
        run: function() {
          return this.effectFn();
        }
      };
      IO.fn.init.prototype = IO.fn;
      setType(IO, TYPES_NAMES.IO);
      setType(IO.fn.init, TYPES_NAMES.IO);
      IO.isInstance = isInstance(TYPES_NAMES.IO);
      IO.isOfType = isOfType(TYPES_NAMES.IO);
      IO.prototype.perform = IO.prototype.performUnsafeIO = IO.prototype.run;
      var Either = Monet.Either = {};
      Either.of = function(a2) {
        return Right(a2);
      };
      Either.fromTry = function(fn) {
        try {
          return Either.right(fn());
        } catch (e2) {
          return Either.left(e2);
        }
      };
      Either.fromPromise = function(promise) {
        return promise.then(Either.Right, Either.Left);
      };
      var Right = Either.Right = Either.right = Monet.Right = function(val) {
        return new Either.fn.init(val, true);
      };
      var Left = Either.Left = Either.left = Monet.Left = function(val) {
        return new Either.fn.init(val, false);
      };
      Either.fn = Either.prototype = {
        init: function(val, isRightValue) {
          this.isRightValue = isRightValue;
          this.value = val;
          setType(this, TYPES_NAMES.Either);
        },
        bind: function(fn) {
          return this.isRightValue ? fn(this.value) : this;
        },
        ap: function(eitherWithFn) {
          var self2 = this;
          return this.isRightValue ? eitherWithFn.map(function(fn) {
            return fn(self2.value);
          }) : this;
        },
        apTo: function(eitherWithValue) {
          return eitherWithValue.ap(this);
        },
        leftMap: function(fn) {
          return this.isLeft() ? Left(fn(this.value)) : this;
        },
        isRight: function() {
          return this.isRightValue;
        },
        isLeft: function() {
          return !this.isRight();
        },
        right: function() {
          if (this.isRightValue) {
            return this.value;
          }
          throw new Error("Cannot call right() on a Left.");
        },
        left: function() {
          if (this.isRightValue) {
            throw new Error("Cannot call left() on a Right.");
          }
          return this.value;
        },
        foldLeft: function(initialValue) {
          return this.toMaybe().toList().foldLeft(initialValue);
        },
        foldRight: function(initialValue) {
          return this.toMaybe().toList().foldRight(initialValue);
        },
        cata: function(leftFn, rightFn) {
          return this.isRightValue ? rightFn(this.value) : leftFn(this.value);
        },
        catchMap: function(fn) {
          return this.isRight() ? this : fn(this.value);
        },
        swap: function() {
          return this.isRight() ? Left(this.value) : Right(this.value);
        },
        forEach: function(fn) {
          this.cata(noop2, fn);
        },
        forEachLeft: function(fn) {
          this.cata(fn, noop2);
        },
        equals: function(other) {
          return Either.isOfType(other) && this.cata(function(left) {
            return other.cata(equals(left), falseFunction);
          }, function(right) {
            return other.cata(falseFunction, equals(right));
          });
        },
        bimap: function(leftFn, rightFn) {
          return this.isRightValue ? this.map(rightFn) : this.leftMap(leftFn);
        },
        toMaybe: function() {
          return this.isRight() ? Some(this.value) : None();
        },
        toValidation: function() {
          return this.isRight() ? Success(this.value) : Fail(this.value);
        },
        toString: function() {
          return this.cata(function(left) {
            return "Left(" + left + ")";
          }, function(right) {
            return "Right(" + right + ")";
          });
        },
        toPromise: function() {
          return this.cata(function(left) {
            return Promise.reject(left);
          }, function(right) {
            return Promise.resolve(right);
          });
        },
        inspect: function() {
          return this.toString();
        }
      };
      Either.prototype.fold = Either.prototype.cata;
      Either.fn.init.prototype = Either.fn;
      setType(Either, TYPES_NAMES.Either);
      setType(Either.fn.init, TYPES_NAMES.Either);
      Either.isInstance = isInstance(TYPES_NAMES.Either);
      Either.isOfType = isOfType(TYPES_NAMES.Either);
      var Reader = Monet.Reader = function(fn) {
        return new Reader.fn.init(fn);
      };
      Reader.of = function(x) {
        return Reader(function(_2) {
          return x;
        });
      };
      Reader.ask = function() {
        return Reader(idFunction);
      };
      Reader.fn = Reader.prototype = {
        init: function(fn) {
          this.f = fn;
          setType(this, TYPES_NAMES.Reader);
        },
        run: function(config) {
          return this.f(config);
        },
        bind: function(fn) {
          var self2 = this;
          return Reader(function(config) {
            return fn(self2.run(config)).run(config);
          });
        },
        ap: function(readerWithFn) {
          var self2 = this;
          return readerWithFn.bind(function(fn) {
            return Reader(function(config) {
              return fn(self2.run(config));
            });
          });
        },
        apTo: function(readerWithValue) {
          return readerWithValue.ap(this);
        },
        map: function(fn) {
          var self2 = this;
          return Reader(function(config) {
            return fn(self2.run(config));
          });
        },
        local: function(fn) {
          var self2 = this;
          return Reader(function(c) {
            return self2.run(fn(c));
          });
        }
      };
      Reader.fn.init.prototype = Reader.fn;
      setType(Reader, TYPES_NAMES.Reader);
      setType(Reader.fn.init, TYPES_NAMES.Reader);
      Reader.isInstance = isInstance(TYPES_NAMES.Reader);
      Reader.isOfType = isOfType(TYPES_NAMES.Reader);
      var Free = Monet.Free = {};
      var Suspend = Free.Suspend = Monet.Suspend = function(functor) {
        return new Free.fn.init(functor, true);
      };
      var Return = Free.Return = Monet.Return = function(val) {
        return new Free.fn.init(val, false);
      };
      Free.of = function(a2) {
        return Return(a2);
      };
      Free.liftF = function(functor) {
        return isFunction2(functor) ? Suspend(compose(Return, functor)) : Suspend(functor.map(Return));
      };
      Free.fn = Free.prototype = {
        init: function(val, isSuspend) {
          this.isSuspend = isSuspend;
          if (isSuspend) {
            this.functor = val;
          } else {
            this.val = val;
          }
          setType(this, TYPES_NAMES.Free);
        },
        run: function() {
          return this.go(function(f2) {
            return f2();
          });
        },
        bind: function(fn) {
          return this.isSuspend ? isFunction2(this.functor) ? Suspend(compose(function(free) {
            return free.bind(fn);
          }, this.functor)) : Suspend(this.functor.map(function(free) {
            return free.bind(fn);
          })) : fn(this.val);
        },
        ap: function(ff) {
          return this.bind(function(x) {
            return ff.map(function(f2) {
              return f2(x);
            });
          });
        },
        apTo: function(f2) {
          return f2.ap(this);
        },
        resume: function() {
          return this.isSuspend ? Left(this.functor) : Right(this.val);
        },
        go1: function(f2) {
          function go2(t) {
            return t.resume().cata(function(functor) {
              return go2(f2(functor));
            }, idFunction);
          }
          return go2(this);
        },
        go: function(f2) {
          var result = this.resume();
          while (result.isLeft()) {
            var next = f2(result.left());
            result = next.resume();
          }
          return result.right();
        }
      };
      Free.fn.init.prototype = Free.fn;
      setType(Free, TYPES_NAMES.Free);
      setType(Free.fn.init, TYPES_NAMES.Free);
      Free.isInstance = isInstance(TYPES_NAMES.Free);
      Free.isOfType = isOfType(TYPES_NAMES.Free);
      function Identity2(a2) {
        return new Identity2.fn.init(a2);
      }
      Monet.Identity = Identity2;
      Identity2.of = function(a2) {
        return new Identity2(a2);
      };
      Identity2.fn = Identity2.prototype = {
        init: function(val) {
          this.val = val;
          setType(this, TYPES_NAMES.Identity);
        },
        bind: function(fn) {
          return fn(this.val);
        },
        get: function() {
          return this.val;
        },
        forEach: function(fn) {
          fn(this.val);
        },
        equals: function(other) {
          return Identity2.isOfType(other) && equals(this.get())(other.get());
        },
        contains: function(val) {
          return areEqual(this.val, val);
        },
        toString: function() {
          return "Identity(" + this.val + ")";
        },
        inspect: function() {
          return this.toString();
        },
        ap: function(applyWithFunction) {
          var value = this.val;
          return applyWithFunction.map(function(fn) {
            return fn(value);
          });
        },
        apTo: function(identityWithValue) {
          return identityWithValue.ap(this);
        },
        toArray: function() {
          return [this.get()];
        },
        toList: function() {
          return List(this.get(), Nil);
        },
        toSet: function() {
          return new Set(this);
        }
      };
      Identity2.fn.init.prototype = Identity2.fn;
      setType(Identity2, TYPES_NAMES.Identity);
      setType(Identity2.fn.init, TYPES_NAMES.Identity);
      Identity2.isInstance = isInstance(TYPES_NAMES.Identity);
      Identity2.isOfType = isOfType(TYPES_NAMES.Identity);
      function addFantasyLandAliases(type2) {
        ["equals", "map", "ap", "chain"].filter(function(method) {
          return isFunction2(type2.prototype[method]);
        }).forEach(function(method) {
          type2.prototype["fantasy-land/" + method] = type2.prototype[method];
        });
      }
      function addAliases(type2) {
        type2.prototype.flatMap = type2.prototype.chain = type2.prototype.bind;
        type2.pure = type2.unit = type2.of;
        type2.prototype.of = type2.of;
        if (isFunction2(type2.prototype.append)) {
          type2.prototype.concat = type2.prototype.append;
        }
        type2.prototype.point = type2.prototype.pure = type2.prototype.unit = type2.prototype.of;
      }
      function addFilterNot(type2) {
        if (isFunction2(type2.prototype.filter)) {
          type2.prototype.filterNot = function(fn) {
            return this.filter(function(a2) {
              return !fn(a2);
            });
          };
        }
      }
      function addMonadOps(type2) {
        type2.prototype.join = function() {
          return this.flatMap(idFunction);
        };
        type2.map2 = function(fn) {
          return function(ma, mb) {
            return ma.flatMap(function(a2) {
              return mb.map(function(b2) {
                return fn(a2, b2);
              });
            });
          };
        };
      }
      function addFunctorOps(type2) {
        if (!isFunction2(type2.prototype.map)) {
          type2.prototype.map = function(fn) {
            return this.bind(compose(this.of, fn));
          };
        }
      }
      function addApplicativeOps(type2) {
        type2.prototype.takeLeft = function(m) {
          return apply2(this, m, function(a2, b2) {
            return a2;
          });
        };
        type2.prototype.takeRight = function(m) {
          return apply2(this, m, function(a2, b2) {
            return b2;
          });
        };
      }
      function addCollectionPredicates(type2) {
        if (isFunction2(type2.prototype.toArray)) {
          type2.prototype.every = type2.prototype.forall = function(fn) {
            return this.toArray().every(fn);
          };
          type2.prototype.exists = function(fn) {
            return this.toArray().some(fn);
          };
        }
      }
      function makeIterable(type2) {
        if (isFunction2(type2.prototype.toArray)) {
          type2.prototype[Symbol.iterator] = function() {
            return this.toArray()[Symbol.iterator]();
          };
        }
      }
      function addToOperator(type2) {
        if (isFunction2(type2.prototype.toArray)) {
          type2.prototype.to = function(ctor) {
            return ctor(this);
          };
        }
      }
      function decorate2(type2) {
        addAliases(type2);
        addFilterNot(type2);
        addMonadOps(type2);
        addFunctorOps(type2);
        addApplicativeOps(type2);
        addCollectionPredicates(type2);
        addFantasyLandAliases(type2);
        makeIterable(type2);
        addToOperator(type2);
      }
      decorate2(MonadT);
      decorate2(Either);
      decorate2(Maybe);
      decorate2(IO);
      decorate2(NEL);
      decorate2(List);
      decorate2(Validation);
      decorate2(Reader);
      decorate2(Free);
      decorate2(Identity2);
      return Monet;
    });
  })(monet$1);
  return monet$1.exports;
}
requireMonet();
var isArguments$1;
var hasRequiredIsArguments$1;
function requireIsArguments$1() {
  if (hasRequiredIsArguments$1)
    return isArguments$1;
  hasRequiredIsArguments$1 = 1;
  var toStr = Object.prototype.toString;
  isArguments$1 = function isArguments2(value) {
    var str = toStr.call(value);
    var isArgs = str === "[object Arguments]";
    if (!isArgs) {
      isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr.call(value.callee) === "[object Function]";
    }
    return isArgs;
  };
  return isArguments$1;
}
var implementation$4;
var hasRequiredImplementation$4;
function requireImplementation$4() {
  if (hasRequiredImplementation$4)
    return implementation$4;
  hasRequiredImplementation$4 = 1;
  var keysShim;
  if (!Object.keys) {
    var has = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var isArgs = requireIsArguments$1();
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var hasDontEnumBug = !isEnumerable.call({ toString: null }, "toString");
    var hasProtoEnumBug = isEnumerable.call(function() {
    }, "prototype");
    var dontEnums = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ];
    var equalsConstructorPrototype = function(o2) {
      var ctor = o2.constructor;
      return ctor && ctor.prototype === o2;
    };
    var excludedKeys = {
      $applicationCache: true,
      $console: true,
      $external: true,
      $frame: true,
      $frameElement: true,
      $frames: true,
      $innerHeight: true,
      $innerWidth: true,
      $onmozfullscreenchange: true,
      $onmozfullscreenerror: true,
      $outerHeight: true,
      $outerWidth: true,
      $pageXOffset: true,
      $pageYOffset: true,
      $parent: true,
      $scrollLeft: true,
      $scrollTop: true,
      $scrollX: true,
      $scrollY: true,
      $self: true,
      $webkitIndexedDB: true,
      $webkitStorageInfo: true,
      $window: true
    };
    var hasAutomationEqualityBug = function() {
      if (typeof window === "undefined") {
        return false;
      }
      for (var k2 in window) {
        try {
          if (!excludedKeys["$" + k2] && has.call(window, k2) && window[k2] !== null && typeof window[k2] === "object") {
            try {
              equalsConstructorPrototype(window[k2]);
            } catch (e2) {
              return true;
            }
          }
        } catch (e2) {
          return true;
        }
      }
      return false;
    }();
    var equalsConstructorPrototypeIfNotBuggy = function(o2) {
      if (typeof window === "undefined" || !hasAutomationEqualityBug) {
        return equalsConstructorPrototype(o2);
      }
      try {
        return equalsConstructorPrototype(o2);
      } catch (e2) {
        return false;
      }
    };
    keysShim = function keys(object) {
      var isObject2 = object !== null && typeof object === "object";
      var isFunction2 = toStr.call(object) === "[object Function]";
      var isArguments2 = isArgs(object);
      var isString2 = isObject2 && toStr.call(object) === "[object String]";
      var theKeys = [];
      if (!isObject2 && !isFunction2 && !isArguments2) {
        throw new TypeError("Object.keys called on a non-object");
      }
      var skipProto = hasProtoEnumBug && isFunction2;
      if (isString2 && object.length > 0 && !has.call(object, 0)) {
        for (var i2 = 0; i2 < object.length; ++i2) {
          theKeys.push(String(i2));
        }
      }
      if (isArguments2 && object.length > 0) {
        for (var j2 = 0; j2 < object.length; ++j2) {
          theKeys.push(String(j2));
        }
      } else {
        for (var name in object) {
          if (!(skipProto && name === "prototype") && has.call(object, name)) {
            theKeys.push(String(name));
          }
        }
      }
      if (hasDontEnumBug) {
        var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
        for (var k2 = 0; k2 < dontEnums.length; ++k2) {
          if (!(skipConstructor && dontEnums[k2] === "constructor") && has.call(object, dontEnums[k2])) {
            theKeys.push(dontEnums[k2]);
          }
        }
      }
      return theKeys;
    };
  }
  implementation$4 = keysShim;
  return implementation$4;
}
var objectKeys;
var hasRequiredObjectKeys;
function requireObjectKeys() {
  if (hasRequiredObjectKeys)
    return objectKeys;
  hasRequiredObjectKeys = 1;
  var slice = Array.prototype.slice;
  var isArgs = requireIsArguments$1();
  var origKeys = Object.keys;
  var keysShim = origKeys ? function keys(o2) {
    return origKeys(o2);
  } : requireImplementation$4();
  var originalKeys = Object.keys;
  keysShim.shim = function shimObjectKeys() {
    if (Object.keys) {
      var keysWorksWithArguments = function() {
        var args = Object.keys(arguments);
        return args && args.length === arguments.length;
      }(1, 2);
      if (!keysWorksWithArguments) {
        Object.keys = function keys(object) {
          if (isArgs(object)) {
            return originalKeys(slice.call(object));
          }
          return originalKeys(object);
        };
      }
    } else {
      Object.keys = keysShim;
    }
    return Object.keys || keysShim;
  };
  objectKeys = keysShim;
  return objectKeys;
}
var esDefineProperty;
var hasRequiredEsDefineProperty;
function requireEsDefineProperty() {
  if (hasRequiredEsDefineProperty)
    return esDefineProperty;
  hasRequiredEsDefineProperty = 1;
  var $defineProperty = Object.defineProperty || false;
  if ($defineProperty) {
    try {
      $defineProperty({}, "a", { value: 1 });
    } catch (e2) {
      $defineProperty = false;
    }
  }
  esDefineProperty = $defineProperty;
  return esDefineProperty;
}
var syntax;
var hasRequiredSyntax;
function requireSyntax() {
  if (hasRequiredSyntax)
    return syntax;
  hasRequiredSyntax = 1;
  syntax = SyntaxError;
  return syntax;
}
var type;
var hasRequiredType;
function requireType() {
  if (hasRequiredType)
    return type;
  hasRequiredType = 1;
  type = TypeError;
  return type;
}
var gOPD;
var hasRequiredGOPD;
function requireGOPD() {
  if (hasRequiredGOPD)
    return gOPD;
  hasRequiredGOPD = 1;
  gOPD = Object.getOwnPropertyDescriptor;
  return gOPD;
}
var gopd;
var hasRequiredGopd;
function requireGopd() {
  if (hasRequiredGopd)
    return gopd;
  hasRequiredGopd = 1;
  var $gOPD = /* @__PURE__ */ requireGOPD();
  if ($gOPD) {
    try {
      $gOPD([], "length");
    } catch (e2) {
      $gOPD = null;
    }
  }
  gopd = $gOPD;
  return gopd;
}
var defineDataProperty;
var hasRequiredDefineDataProperty;
function requireDefineDataProperty() {
  if (hasRequiredDefineDataProperty)
    return defineDataProperty;
  hasRequiredDefineDataProperty = 1;
  var $defineProperty = /* @__PURE__ */ requireEsDefineProperty();
  var $SyntaxError = /* @__PURE__ */ requireSyntax();
  var $TypeError = /* @__PURE__ */ requireType();
  var gopd2 = /* @__PURE__ */ requireGopd();
  defineDataProperty = function defineDataProperty2(obj, property, value) {
    if (!obj || typeof obj !== "object" && typeof obj !== "function") {
      throw new $TypeError("`obj` must be an object or a function`");
    }
    if (typeof property !== "string" && typeof property !== "symbol") {
      throw new $TypeError("`property` must be a string or a symbol`");
    }
    if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
      throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
    }
    if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
      throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
    }
    if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
      throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
    }
    if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
      throw new $TypeError("`loose`, if provided, must be a boolean");
    }
    var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
    var nonWritable = arguments.length > 4 ? arguments[4] : null;
    var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
    var loose = arguments.length > 6 ? arguments[6] : false;
    var desc = !!gopd2 && gopd2(obj, property);
    if ($defineProperty) {
      $defineProperty(obj, property, {
        configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
        enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
        value,
        writable: nonWritable === null && desc ? desc.writable : !nonWritable
      });
    } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
      obj[property] = value;
    } else {
      throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
    }
  };
  return defineDataProperty;
}
var hasPropertyDescriptors_1;
var hasRequiredHasPropertyDescriptors;
function requireHasPropertyDescriptors() {
  if (hasRequiredHasPropertyDescriptors)
    return hasPropertyDescriptors_1;
  hasRequiredHasPropertyDescriptors = 1;
  var $defineProperty = /* @__PURE__ */ requireEsDefineProperty();
  var hasPropertyDescriptors = function hasPropertyDescriptors2() {
    return !!$defineProperty;
  };
  hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    if (!$defineProperty) {
      return null;
    }
    try {
      return $defineProperty([], "length", { value: 1 }).length !== 1;
    } catch (e2) {
      return true;
    }
  };
  hasPropertyDescriptors_1 = hasPropertyDescriptors;
  return hasPropertyDescriptors_1;
}
var defineProperties_1;
var hasRequiredDefineProperties;
function requireDefineProperties() {
  if (hasRequiredDefineProperties)
    return defineProperties_1;
  hasRequiredDefineProperties = 1;
  var keys = requireObjectKeys();
  var hasSymbols2 = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
  var toStr = Object.prototype.toString;
  var concat = Array.prototype.concat;
  var defineDataProperty2 = /* @__PURE__ */ requireDefineDataProperty();
  var isFunction2 = function(fn) {
    return typeof fn === "function" && toStr.call(fn) === "[object Function]";
  };
  var supportsDescriptors = /* @__PURE__ */ requireHasPropertyDescriptors()();
  var defineProperty = function(object, name, value, predicate) {
    if (name in object) {
      if (predicate === true) {
        if (object[name] === value) {
          return;
        }
      } else if (!isFunction2(predicate) || !predicate()) {
        return;
      }
    }
    if (supportsDescriptors) {
      defineDataProperty2(object, name, value, true);
    } else {
      defineDataProperty2(object, name, value);
    }
  };
  var defineProperties = function(object, map) {
    var predicates = arguments.length > 2 ? arguments[2] : {};
    var props = keys(map);
    if (hasSymbols2) {
      props = concat.call(props, Object.getOwnPropertySymbols(map));
    }
    for (var i2 = 0; i2 < props.length; i2 += 1) {
      defineProperty(object, props[i2], map[props[i2]], predicates[props[i2]]);
    }
  };
  defineProperties.supportsDescriptors = !!supportsDescriptors;
  defineProperties_1 = defineProperties;
  return defineProperties_1;
}
var callBind = { exports: {} };
var esObjectAtoms;
var hasRequiredEsObjectAtoms;
function requireEsObjectAtoms() {
  if (hasRequiredEsObjectAtoms)
    return esObjectAtoms;
  hasRequiredEsObjectAtoms = 1;
  esObjectAtoms = Object;
  return esObjectAtoms;
}
var esErrors;
var hasRequiredEsErrors;
function requireEsErrors() {
  if (hasRequiredEsErrors)
    return esErrors;
  hasRequiredEsErrors = 1;
  esErrors = Error;
  return esErrors;
}
var _eval;
var hasRequired_eval;
function require_eval() {
  if (hasRequired_eval)
    return _eval;
  hasRequired_eval = 1;
  _eval = EvalError;
  return _eval;
}
var range;
var hasRequiredRange;
function requireRange() {
  if (hasRequiredRange)
    return range;
  hasRequiredRange = 1;
  range = RangeError;
  return range;
}
var ref;
var hasRequiredRef;
function requireRef() {
  if (hasRequiredRef)
    return ref;
  hasRequiredRef = 1;
  ref = ReferenceError;
  return ref;
}
var uri;
var hasRequiredUri;
function requireUri() {
  if (hasRequiredUri)
    return uri;
  hasRequiredUri = 1;
  uri = URIError;
  return uri;
}
var abs;
var hasRequiredAbs;
function requireAbs() {
  if (hasRequiredAbs)
    return abs;
  hasRequiredAbs = 1;
  abs = Math.abs;
  return abs;
}
var floor;
var hasRequiredFloor;
function requireFloor() {
  if (hasRequiredFloor)
    return floor;
  hasRequiredFloor = 1;
  floor = Math.floor;
  return floor;
}
var max$1;
var hasRequiredMax;
function requireMax() {
  if (hasRequiredMax)
    return max$1;
  hasRequiredMax = 1;
  max$1 = Math.max;
  return max$1;
}
var min$1;
var hasRequiredMin;
function requireMin() {
  if (hasRequiredMin)
    return min$1;
  hasRequiredMin = 1;
  min$1 = Math.min;
  return min$1;
}
var pow;
var hasRequiredPow;
function requirePow() {
  if (hasRequiredPow)
    return pow;
  hasRequiredPow = 1;
  pow = Math.pow;
  return pow;
}
var round$1;
var hasRequiredRound;
function requireRound() {
  if (hasRequiredRound)
    return round$1;
  hasRequiredRound = 1;
  round$1 = Math.round;
  return round$1;
}
var _isNaN;
var hasRequired_isNaN;
function require_isNaN() {
  if (hasRequired_isNaN)
    return _isNaN;
  hasRequired_isNaN = 1;
  _isNaN = Number.isNaN || function isNaN2(a2) {
    return a2 !== a2;
  };
  return _isNaN;
}
var sign;
var hasRequiredSign;
function requireSign() {
  if (hasRequiredSign)
    return sign;
  hasRequiredSign = 1;
  var $isNaN = /* @__PURE__ */ require_isNaN();
  sign = function sign2(number) {
    if ($isNaN(number) || number === 0) {
      return number;
    }
    return number < 0 ? -1 : 1;
  };
  return sign;
}
var shams$1;
var hasRequiredShams$1;
function requireShams$1() {
  if (hasRequiredShams$1)
    return shams$1;
  hasRequiredShams$1 = 1;
  shams$1 = function hasSymbols2() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
      return false;
    }
    if (typeof Symbol.iterator === "symbol") {
      return true;
    }
    var obj = {};
    var sym = Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") {
      return false;
    }
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
      return false;
    }
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
      return false;
    }
    var symVal = 42;
    obj[sym] = symVal;
    for (var _2 in obj) {
      return false;
    }
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
      return false;
    }
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
      return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
      return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
      return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === "function") {
      var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
      if (descriptor.value !== symVal || descriptor.enumerable !== true) {
        return false;
      }
    }
    return true;
  };
  return shams$1;
}
var hasSymbols;
var hasRequiredHasSymbols;
function requireHasSymbols() {
  if (hasRequiredHasSymbols)
    return hasSymbols;
  hasRequiredHasSymbols = 1;
  var origSymbol = typeof Symbol !== "undefined" && Symbol;
  var hasSymbolSham = requireShams$1();
  hasSymbols = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") {
      return false;
    }
    if (typeof Symbol !== "function") {
      return false;
    }
    if (typeof origSymbol("foo") !== "symbol") {
      return false;
    }
    if (typeof Symbol("bar") !== "symbol") {
      return false;
    }
    return hasSymbolSham();
  };
  return hasSymbols;
}
var Reflect_getPrototypeOf;
var hasRequiredReflect_getPrototypeOf;
function requireReflect_getPrototypeOf() {
  if (hasRequiredReflect_getPrototypeOf)
    return Reflect_getPrototypeOf;
  hasRequiredReflect_getPrototypeOf = 1;
  Reflect_getPrototypeOf = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
  return Reflect_getPrototypeOf;
}
var Object_getPrototypeOf;
var hasRequiredObject_getPrototypeOf;
function requireObject_getPrototypeOf() {
  if (hasRequiredObject_getPrototypeOf)
    return Object_getPrototypeOf;
  hasRequiredObject_getPrototypeOf = 1;
  var $Object = /* @__PURE__ */ requireEsObjectAtoms();
  Object_getPrototypeOf = $Object.getPrototypeOf || null;
  return Object_getPrototypeOf;
}
var implementation$3;
var hasRequiredImplementation$3;
function requireImplementation$3() {
  if (hasRequiredImplementation$3)
    return implementation$3;
  hasRequiredImplementation$3 = 1;
  var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
  var toStr = Object.prototype.toString;
  var max2 = Math.max;
  var funcType = "[object Function]";
  var concatty = function concatty2(a2, b2) {
    var arr = [];
    for (var i2 = 0; i2 < a2.length; i2 += 1) {
      arr[i2] = a2[i2];
    }
    for (var j2 = 0; j2 < b2.length; j2 += 1) {
      arr[j2 + a2.length] = b2[j2];
    }
    return arr;
  };
  var slicy = function slicy2(arrLike, offset2) {
    var arr = [];
    for (var i2 = offset2, j2 = 0; i2 < arrLike.length; i2 += 1, j2 += 1) {
      arr[j2] = arrLike[i2];
    }
    return arr;
  };
  var joiny = function(arr, joiner) {
    var str = "";
    for (var i2 = 0; i2 < arr.length; i2 += 1) {
      str += arr[i2];
      if (i2 + 1 < arr.length) {
        str += joiner;
      }
    }
    return str;
  };
  implementation$3 = function bind(that) {
    var target = this;
    if (typeof target !== "function" || toStr.apply(target) !== funcType) {
      throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
      if (this instanceof bound) {
        var result = target.apply(
          this,
          concatty(args, arguments)
        );
        if (Object(result) === result) {
          return result;
        }
        return this;
      }
      return target.apply(
        that,
        concatty(args, arguments)
      );
    };
    var boundLength = max2(0, target.length - args.length);
    var boundArgs = [];
    for (var i2 = 0; i2 < boundLength; i2++) {
      boundArgs[i2] = "$" + i2;
    }
    bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
      var Empty = function Empty2() {
      };
      Empty.prototype = target.prototype;
      bound.prototype = new Empty();
      Empty.prototype = null;
    }
    return bound;
  };
  return implementation$3;
}
var functionBind;
var hasRequiredFunctionBind;
function requireFunctionBind() {
  if (hasRequiredFunctionBind)
    return functionBind;
  hasRequiredFunctionBind = 1;
  var implementation2 = requireImplementation$3();
  functionBind = Function.prototype.bind || implementation2;
  return functionBind;
}
var functionCall;
var hasRequiredFunctionCall;
function requireFunctionCall() {
  if (hasRequiredFunctionCall)
    return functionCall;
  hasRequiredFunctionCall = 1;
  functionCall = Function.prototype.call;
  return functionCall;
}
var functionApply;
var hasRequiredFunctionApply;
function requireFunctionApply() {
  if (hasRequiredFunctionApply)
    return functionApply;
  hasRequiredFunctionApply = 1;
  functionApply = Function.prototype.apply;
  return functionApply;
}
var reflectApply;
var hasRequiredReflectApply;
function requireReflectApply() {
  if (hasRequiredReflectApply)
    return reflectApply;
  hasRequiredReflectApply = 1;
  reflectApply = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
  return reflectApply;
}
var actualApply;
var hasRequiredActualApply;
function requireActualApply() {
  if (hasRequiredActualApply)
    return actualApply;
  hasRequiredActualApply = 1;
  var bind = requireFunctionBind();
  var $apply = requireFunctionApply();
  var $call = requireFunctionCall();
  var $reflectApply = requireReflectApply();
  actualApply = $reflectApply || bind.call($call, $apply);
  return actualApply;
}
var callBindApplyHelpers;
var hasRequiredCallBindApplyHelpers;
function requireCallBindApplyHelpers() {
  if (hasRequiredCallBindApplyHelpers)
    return callBindApplyHelpers;
  hasRequiredCallBindApplyHelpers = 1;
  var bind = requireFunctionBind();
  var $TypeError = /* @__PURE__ */ requireType();
  var $call = requireFunctionCall();
  var $actualApply = requireActualApply();
  callBindApplyHelpers = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== "function") {
      throw new $TypeError("a function is required");
    }
    return $actualApply(bind, $call, args);
  };
  return callBindApplyHelpers;
}
var get;
var hasRequiredGet;
function requireGet() {
  if (hasRequiredGet)
    return get;
  hasRequiredGet = 1;
  var callBind2 = requireCallBindApplyHelpers();
  var gOPD2 = /* @__PURE__ */ requireGopd();
  var hasProtoAccessor;
  try {
    hasProtoAccessor = [].__proto__ === Array.prototype;
  } catch (e2) {
    if (!e2 || typeof e2 !== "object" || !("code" in e2) || e2.code !== "ERR_PROTO_ACCESS") {
      throw e2;
    }
  }
  var desc = !!hasProtoAccessor && gOPD2 && gOPD2(
    Object.prototype,
    "__proto__"
  );
  var $Object = Object;
  var $getPrototypeOf = $Object.getPrototypeOf;
  get = desc && typeof desc.get === "function" ? callBind2([desc.get]) : typeof $getPrototypeOf === "function" ? function getDunder(value) {
    return $getPrototypeOf(value == null ? value : $Object(value));
  } : false;
  return get;
}
var getProto;
var hasRequiredGetProto;
function requireGetProto() {
  if (hasRequiredGetProto)
    return getProto;
  hasRequiredGetProto = 1;
  var reflectGetProto = requireReflect_getPrototypeOf();
  var originalGetProto = requireObject_getPrototypeOf();
  var getDunderProto = /* @__PURE__ */ requireGet();
  getProto = reflectGetProto ? function getProto2(O) {
    return reflectGetProto(O);
  } : originalGetProto ? function getProto2(O) {
    if (!O || typeof O !== "object" && typeof O !== "function") {
      throw new TypeError("getProto: not an object");
    }
    return originalGetProto(O);
  } : getDunderProto ? function getProto2(O) {
    return getDunderProto(O);
  } : null;
  return getProto;
}
var asyncFunction;
var hasRequiredAsyncFunction;
function requireAsyncFunction() {
  if (hasRequiredAsyncFunction)
    return asyncFunction;
  hasRequiredAsyncFunction = 1;
  const cached = async function() {
  }.constructor;
  asyncFunction = () => cached;
  return asyncFunction;
}
var generatorFunction;
var hasRequiredGeneratorFunction;
function requireGeneratorFunction() {
  if (hasRequiredGeneratorFunction)
    return generatorFunction;
  hasRequiredGeneratorFunction = 1;
  const cached = function* () {
  }.constructor;
  generatorFunction = () => cached;
  return generatorFunction;
}
var asyncGeneratorFunction;
var hasRequiredAsyncGeneratorFunction;
function requireAsyncGeneratorFunction() {
  if (hasRequiredAsyncGeneratorFunction)
    return asyncGeneratorFunction;
  hasRequiredAsyncGeneratorFunction = 1;
  const cached = async function* () {
  }.constructor;
  asyncGeneratorFunction = () => cached;
  return asyncGeneratorFunction;
}
var hasown;
var hasRequiredHasown;
function requireHasown() {
  if (hasRequiredHasown)
    return hasown;
  hasRequiredHasown = 1;
  var call = Function.prototype.call;
  var $hasOwn = Object.prototype.hasOwnProperty;
  var bind = requireFunctionBind();
  hasown = bind.call(call, $hasOwn);
  return hasown;
}
var getIntrinsic;
var hasRequiredGetIntrinsic;
function requireGetIntrinsic() {
  if (hasRequiredGetIntrinsic)
    return getIntrinsic;
  hasRequiredGetIntrinsic = 1;
  var undefined$1;
  var $Object = /* @__PURE__ */ requireEsObjectAtoms();
  var $Error = /* @__PURE__ */ requireEsErrors();
  var $EvalError = /* @__PURE__ */ require_eval();
  var $RangeError = /* @__PURE__ */ requireRange();
  var $ReferenceError = /* @__PURE__ */ requireRef();
  var $SyntaxError = /* @__PURE__ */ requireSyntax();
  var $TypeError = /* @__PURE__ */ requireType();
  var $URIError = /* @__PURE__ */ requireUri();
  var abs2 = /* @__PURE__ */ requireAbs();
  var floor2 = /* @__PURE__ */ requireFloor();
  var max2 = /* @__PURE__ */ requireMax();
  var min2 = /* @__PURE__ */ requireMin();
  var pow2 = /* @__PURE__ */ requirePow();
  var round2 = /* @__PURE__ */ requireRound();
  var sign2 = /* @__PURE__ */ requireSign();
  var $gOPD = /* @__PURE__ */ requireGopd();
  var $defineProperty = /* @__PURE__ */ requireEsDefineProperty();
  var throwTypeError = function() {
    throw new $TypeError();
  };
  var ThrowTypeError = $gOPD ? function() {
    try {
      arguments.callee;
      return throwTypeError;
    } catch (calleeThrows) {
      try {
        return $gOPD(arguments, "callee").get;
      } catch (gOPDthrows) {
        return throwTypeError;
      }
    }
  }() : throwTypeError;
  var hasSymbols2 = requireHasSymbols()();
  var getProto2 = requireGetProto();
  var $ObjectGPO = requireObject_getPrototypeOf();
  var $ReflectGPO = requireReflect_getPrototypeOf();
  var $apply = requireFunctionApply();
  var $call = requireFunctionCall();
  var needsEval = {};
  var TypedArray = typeof Uint8Array === "undefined" || !getProto2 ? undefined$1 : getProto2(Uint8Array);
  var INTRINSICS = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols2 && getProto2 ? getProto2([][Symbol.iterator]()) : undefined$1,
    "%AsyncFromSyncIteratorPrototype%": undefined$1,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
    "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined$1 : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined$1 : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": $Error,
    "%eval%": eval,
    "%EvalError%": $EvalError,
    "%Float16Array%": typeof Float16Array === "undefined" ? undefined$1 : Float16Array,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
    "%Function%": Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols2 && getProto2 ? getProto2(getProto2([][Symbol.iterator]())) : undefined$1,
    "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
    "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols2 || !getProto2 ? undefined$1 : getProto2((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": $Object,
    "%Object.getOwnPropertyDescriptor%": $gOPD,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
    "%RangeError%": $RangeError,
    "%ReferenceError%": $ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols2 || !getProto2 ? undefined$1 : getProto2((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols2 && getProto2 ? getProto2(""[Symbol.iterator]()) : undefined$1,
    "%Symbol%": hasSymbols2 ? Symbol : undefined$1,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray,
    "%TypeError%": $TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
    "%URIError%": $URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet,
    "%Function.prototype.call%": $call,
    "%Function.prototype.apply%": $apply,
    "%Object.defineProperty%": $defineProperty,
    "%Object.getPrototypeOf%": $ObjectGPO,
    "%Math.abs%": abs2,
    "%Math.floor%": floor2,
    "%Math.max%": max2,
    "%Math.min%": min2,
    "%Math.pow%": pow2,
    "%Math.round%": round2,
    "%Math.sign%": sign2,
    "%Reflect.getPrototypeOf%": $ReflectGPO
  };
  if (getProto2) {
    try {
      null.error;
    } catch (e2) {
      var errorProto = getProto2(getProto2(e2));
      INTRINSICS["%Error.prototype%"] = errorProto;
    }
  }
  var getAsyncFunction = requireAsyncFunction();
  var getGeneratorFunction = /* @__PURE__ */ requireGeneratorFunction();
  var getAsyncGeneratorFunction = requireAsyncGeneratorFunction();
  var doEval = function doEval2(name) {
    var value;
    if (name === "%AsyncFunction%") {
      value = getAsyncFunction() || void 0;
    } else if (name === "%GeneratorFunction%") {
      value = getGeneratorFunction() || void 0;
    } else if (name === "%AsyncGeneratorFunction%") {
      value = getAsyncGeneratorFunction() || void 0;
    } else if (name === "%AsyncGenerator%") {
      var fn = doEval2("%AsyncGeneratorFunction%");
      if (fn) {
        value = fn.prototype;
      }
    } else if (name === "%AsyncIteratorPrototype%") {
      var gen = doEval2("%AsyncGenerator%");
      if (gen && getProto2) {
        value = getProto2(gen.prototype);
      }
    }
    INTRINSICS[name] = value;
    return value;
  };
  var LEGACY_ALIASES = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  };
  var bind = requireFunctionBind();
  var hasOwn2 = /* @__PURE__ */ requireHasown();
  var $concat = bind.call($call, Array.prototype.concat);
  var $spliceApply = bind.call($apply, Array.prototype.splice);
  var $replace = bind.call($call, String.prototype.replace);
  var $strSlice = bind.call($call, String.prototype.slice);
  var $exec = bind.call($call, RegExp.prototype.exec);
  var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = function stringToPath2(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === "%" && last !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    } else if (last === "%" && first !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
      result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
    });
    return result;
  };
  var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn2(LEGACY_ALIASES, intrinsicName)) {
      alias = LEGACY_ALIASES[intrinsicName];
      intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn2(INTRINSICS, intrinsicName)) {
      var value = INTRINSICS[intrinsicName];
      if (value === needsEval) {
        value = doEval(intrinsicName);
      }
      if (typeof value === "undefined" && !allowMissing) {
        throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
      }
      return {
        alias,
        name: intrinsicName,
        value
      };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
  };
  getIntrinsic = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) {
      throw new $TypeError("intrinsic name must be a non-empty string");
    }
    if (arguments.length > 1 && typeof allowMissing !== "boolean") {
      throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
      throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
      intrinsicBaseName = alias[0];
      $spliceApply(parts, $concat([0, 1], alias));
    }
    for (var i2 = 1, isOwn = true; i2 < parts.length; i2 += 1) {
      var part = parts[i2];
      var first = $strSlice(part, 0, 1);
      var last = $strSlice(part, -1);
      if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
        throw new $SyntaxError("property names with quotes must have matching quotes");
      }
      if (part === "constructor" || !isOwn) {
        skipFurtherCaching = true;
      }
      intrinsicBaseName += "." + part;
      intrinsicRealName = "%" + intrinsicBaseName + "%";
      if (hasOwn2(INTRINSICS, intrinsicRealName)) {
        value = INTRINSICS[intrinsicRealName];
      } else if (value != null) {
        if (!(part in value)) {
          if (!allowMissing) {
            throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
          }
          return void 0;
        }
        if ($gOPD && i2 + 1 >= parts.length) {
          var desc = $gOPD(value, part);
          isOwn = !!desc;
          if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
            value = desc.get;
          } else {
            value = value[part];
          }
        } else {
          isOwn = hasOwn2(value, part);
          value = value[part];
        }
        if (isOwn && !skipFurtherCaching) {
          INTRINSICS[intrinsicRealName] = value;
        }
      }
    }
    return value;
  };
  return getIntrinsic;
}
var setFunctionLength;
var hasRequiredSetFunctionLength;
function requireSetFunctionLength() {
  if (hasRequiredSetFunctionLength)
    return setFunctionLength;
  hasRequiredSetFunctionLength = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var define = /* @__PURE__ */ requireDefineDataProperty();
  var hasDescriptors = /* @__PURE__ */ requireHasPropertyDescriptors()();
  var gOPD2 = /* @__PURE__ */ requireGopd();
  var $TypeError = /* @__PURE__ */ requireType();
  var $floor = GetIntrinsic("%Math.floor%");
  setFunctionLength = function setFunctionLength2(fn, length) {
    if (typeof fn !== "function") {
      throw new $TypeError("`fn` is not a function");
    }
    if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
      throw new $TypeError("`length` must be a positive 32-bit integer");
    }
    var loose = arguments.length > 2 && !!arguments[2];
    var functionLengthIsConfigurable = true;
    var functionLengthIsWritable = true;
    if ("length" in fn && gOPD2) {
      var desc = gOPD2(fn, "length");
      if (desc && !desc.configurable) {
        functionLengthIsConfigurable = false;
      }
      if (desc && !desc.writable) {
        functionLengthIsWritable = false;
      }
    }
    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
      if (hasDescriptors) {
        define(
          fn,
          "length",
          length,
          true,
          true
        );
      } else {
        define(
          fn,
          "length",
          length
        );
      }
    }
    return fn;
  };
  return setFunctionLength;
}
var applyBind;
var hasRequiredApplyBind;
function requireApplyBind() {
  if (hasRequiredApplyBind)
    return applyBind;
  hasRequiredApplyBind = 1;
  var bind = requireFunctionBind();
  var $apply = requireFunctionApply();
  var actualApply2 = requireActualApply();
  applyBind = function applyBind2() {
    return actualApply2(bind, $apply, arguments);
  };
  return applyBind;
}
var hasRequiredCallBind;
function requireCallBind() {
  if (hasRequiredCallBind)
    return callBind.exports;
  hasRequiredCallBind = 1;
  (function(module) {
    var setFunctionLength2 = /* @__PURE__ */ requireSetFunctionLength();
    var $defineProperty = /* @__PURE__ */ requireEsDefineProperty();
    var callBindBasic = requireCallBindApplyHelpers();
    var applyBind2 = requireApplyBind();
    module.exports = function callBind2(originalFunction) {
      var func = callBindBasic(arguments);
      var adjustedLength = originalFunction.length - (arguments.length - 1);
      return setFunctionLength2(
        func,
        1 + (adjustedLength > 0 ? adjustedLength : 0),
        true
      );
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind2 });
    } else {
      module.exports.apply = applyBind2;
    }
  })(callBind);
  return callBind.exports;
}
var callBound$1;
var hasRequiredCallBound$1;
function requireCallBound$1() {
  if (hasRequiredCallBound$1)
    return callBound$1;
  hasRequiredCallBound$1 = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var callBindBasic = requireCallBindApplyHelpers();
  var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
  callBound$1 = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
      return callBindBasic(
        [intrinsic]
      );
    }
    return intrinsic;
  };
  return callBound$1;
}
var implementation$2;
var hasRequiredImplementation$2;
function requireImplementation$2() {
  if (hasRequiredImplementation$2)
    return implementation$2;
  hasRequiredImplementation$2 = 1;
  var objectKeys2 = requireObjectKeys();
  var hasSymbols2 = requireShams$1()();
  var callBound2 = /* @__PURE__ */ requireCallBound$1();
  var $Object = /* @__PURE__ */ requireEsObjectAtoms();
  var $push = callBound2("Array.prototype.push");
  var $propIsEnumerable = callBound2("Object.prototype.propertyIsEnumerable");
  var originalGetSymbols = hasSymbols2 ? $Object.getOwnPropertySymbols : null;
  implementation$2 = function assign2(target, source1) {
    if (target == null) {
      throw new TypeError("target must be an object");
    }
    var to = $Object(target);
    if (arguments.length === 1) {
      return to;
    }
    for (var s2 = 1; s2 < arguments.length; ++s2) {
      var from = $Object(arguments[s2]);
      var keys = objectKeys2(from);
      var getSymbols = hasSymbols2 && ($Object.getOwnPropertySymbols || originalGetSymbols);
      if (getSymbols) {
        var syms = getSymbols(from);
        for (var j2 = 0; j2 < syms.length; ++j2) {
          var key = syms[j2];
          if ($propIsEnumerable(from, key)) {
            $push(keys, key);
          }
        }
      }
      for (var i2 = 0; i2 < keys.length; ++i2) {
        var nextKey = keys[i2];
        if ($propIsEnumerable(from, nextKey)) {
          var propValue = from[nextKey];
          to[nextKey] = propValue;
        }
      }
    }
    return to;
  };
  return implementation$2;
}
var polyfill$2;
var hasRequiredPolyfill$2;
function requirePolyfill$2() {
  if (hasRequiredPolyfill$2)
    return polyfill$2;
  hasRequiredPolyfill$2 = 1;
  var implementation2 = requireImplementation$2();
  var lacksProperEnumerationOrder = function() {
    if (!Object.assign) {
      return false;
    }
    var str = "abcdefghijklmnopqrst";
    var letters = str.split("");
    var map = {};
    for (var i2 = 0; i2 < letters.length; ++i2) {
      map[letters[i2]] = letters[i2];
    }
    var obj = Object.assign({}, map);
    var actual = "";
    for (var k2 in obj) {
      actual += k2;
    }
    return str !== actual;
  };
  var assignHasPendingExceptions = function() {
    if (!Object.assign || !Object.preventExtensions) {
      return false;
    }
    var thrower = Object.preventExtensions({ 1: 2 });
    try {
      Object.assign(thrower, "xy");
    } catch (e2) {
      return thrower[1] === "y";
    }
    return false;
  };
  polyfill$2 = function getPolyfill() {
    if (!Object.assign) {
      return implementation2;
    }
    if (lacksProperEnumerationOrder()) {
      return implementation2;
    }
    if (assignHasPendingExceptions()) {
      return implementation2;
    }
    return Object.assign;
  };
  return polyfill$2;
}
var shim$2;
var hasRequiredShim$2;
function requireShim$2() {
  if (hasRequiredShim$2)
    return shim$2;
  hasRequiredShim$2 = 1;
  var define = requireDefineProperties();
  var getPolyfill = requirePolyfill$2();
  shim$2 = function shimAssign() {
    var polyfill22 = getPolyfill();
    define(
      Object,
      { assign: polyfill22 },
      { assign: function() {
        return Object.assign !== polyfill22;
      } }
    );
    return polyfill22;
  };
  return shim$2;
}
var object_assign;
var hasRequiredObject_assign;
function requireObject_assign() {
  if (hasRequiredObject_assign)
    return object_assign;
  hasRequiredObject_assign = 1;
  var defineProperties = requireDefineProperties();
  var callBind2 = requireCallBind();
  var implementation2 = requireImplementation$2();
  var getPolyfill = requirePolyfill$2();
  var shim2 = requireShim$2();
  var polyfill22 = callBind2.apply(getPolyfill());
  var bound = function assign2(target, source1) {
    return polyfill22(Object, arguments);
  };
  defineProperties(bound, {
    getPolyfill,
    implementation: implementation2,
    shim: shim2
  });
  object_assign = bound;
  return object_assign;
}
var callBound;
var hasRequiredCallBound;
function requireCallBound() {
  if (hasRequiredCallBound)
    return callBound;
  hasRequiredCallBound = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var callBind2 = requireCallBind();
  var $indexOf = callBind2(GetIntrinsic("String.prototype.indexOf"));
  callBound = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
      return callBind2(intrinsic);
    }
    return intrinsic;
  };
  return callBound;
}
var functionsHaveNames_1;
var hasRequiredFunctionsHaveNames;
function requireFunctionsHaveNames() {
  if (hasRequiredFunctionsHaveNames)
    return functionsHaveNames_1;
  hasRequiredFunctionsHaveNames = 1;
  var functionsHaveNames = function functionsHaveNames2() {
    return typeof function f2() {
    }.name === "string";
  };
  var gOPD2 = Object.getOwnPropertyDescriptor;
  if (gOPD2) {
    try {
      gOPD2([], "length");
    } catch (e2) {
      gOPD2 = null;
    }
  }
  functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
    if (!functionsHaveNames() || !gOPD2) {
      return false;
    }
    var desc = gOPD2(function() {
    }, "name");
    return !!desc && !!desc.configurable;
  };
  var $bind = Function.prototype.bind;
  functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
    return functionsHaveNames() && typeof $bind === "function" && function f2() {
    }.bind().name !== "";
  };
  functionsHaveNames_1 = functionsHaveNames;
  return functionsHaveNames_1;
}
var setFunctionName;
var hasRequiredSetFunctionName;
function requireSetFunctionName() {
  if (hasRequiredSetFunctionName)
    return setFunctionName;
  hasRequiredSetFunctionName = 1;
  var define = /* @__PURE__ */ requireDefineDataProperty();
  var hasDescriptors = /* @__PURE__ */ requireHasPropertyDescriptors()();
  var functionsHaveConfigurableNames = requireFunctionsHaveNames().functionsHaveConfigurableNames();
  var $TypeError = /* @__PURE__ */ requireType();
  setFunctionName = function setFunctionName2(fn, name) {
    if (typeof fn !== "function") {
      throw new $TypeError("`fn` is not a function");
    }
    var loose = arguments.length > 2 && !!arguments[2];
    if (!loose || functionsHaveConfigurableNames) {
      if (hasDescriptors) {
        define(
          fn,
          "name",
          name,
          true,
          true
        );
      } else {
        define(
          fn,
          "name",
          name
        );
      }
    }
    return fn;
  };
  return setFunctionName;
}
var implementation$1;
var hasRequiredImplementation$1;
function requireImplementation$1() {
  if (hasRequiredImplementation$1)
    return implementation$1;
  hasRequiredImplementation$1 = 1;
  var setFunctionName2 = requireSetFunctionName();
  var $TypeError = /* @__PURE__ */ requireType();
  var $Object = Object;
  implementation$1 = setFunctionName2(function flags() {
    if (this == null || this !== $Object(this)) {
      throw new $TypeError("RegExp.prototype.flags getter called on non-object");
    }
    var result = "";
    if (this.hasIndices) {
      result += "d";
    }
    if (this.global) {
      result += "g";
    }
    if (this.ignoreCase) {
      result += "i";
    }
    if (this.multiline) {
      result += "m";
    }
    if (this.dotAll) {
      result += "s";
    }
    if (this.unicode) {
      result += "u";
    }
    if (this.unicodeSets) {
      result += "v";
    }
    if (this.sticky) {
      result += "y";
    }
    return result;
  }, "get flags", true);
  return implementation$1;
}
var polyfill$1;
var hasRequiredPolyfill$1;
function requirePolyfill$1() {
  if (hasRequiredPolyfill$1)
    return polyfill$1;
  hasRequiredPolyfill$1 = 1;
  var implementation2 = requireImplementation$1();
  var supportsDescriptors = requireDefineProperties().supportsDescriptors;
  var $gOPD = Object.getOwnPropertyDescriptor;
  polyfill$1 = function getPolyfill() {
    if (supportsDescriptors && /a/mig.flags === "gim") {
      var descriptor = $gOPD(RegExp.prototype, "flags");
      if (descriptor && typeof descriptor.get === "function" && "dotAll" in RegExp.prototype && "hasIndices" in RegExp.prototype) {
        var calls = "";
        var o2 = {};
        Object.defineProperty(o2, "hasIndices", {
          get: function() {
            calls += "d";
          }
        });
        Object.defineProperty(o2, "sticky", {
          get: function() {
            calls += "y";
          }
        });
        descriptor.get.call(o2);
        if (calls === "dy") {
          return descriptor.get;
        }
      }
    }
    return implementation2;
  };
  return polyfill$1;
}
var shim$1;
var hasRequiredShim$1;
function requireShim$1() {
  if (hasRequiredShim$1)
    return shim$1;
  hasRequiredShim$1 = 1;
  var supportsDescriptors = requireDefineProperties().supportsDescriptors;
  var getPolyfill = requirePolyfill$1();
  var gOPD2 = /* @__PURE__ */ requireGopd();
  var defineProperty = Object.defineProperty;
  var $TypeError = /* @__PURE__ */ requireEsErrors();
  var getProto2 = requireGetProto();
  var regex = /a/;
  shim$1 = function shimFlags() {
    if (!supportsDescriptors || !getProto2) {
      throw new $TypeError("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
    }
    var polyfill22 = getPolyfill();
    var proto = getProto2(regex);
    var descriptor = gOPD2(proto, "flags");
    if (!descriptor || descriptor.get !== polyfill22) {
      defineProperty(proto, "flags", {
        configurable: true,
        enumerable: false,
        get: polyfill22
      });
    }
    return polyfill22;
  };
  return shim$1;
}
var regexp_prototype_flags;
var hasRequiredRegexp_prototype_flags;
function requireRegexp_prototype_flags() {
  if (hasRequiredRegexp_prototype_flags)
    return regexp_prototype_flags;
  hasRequiredRegexp_prototype_flags = 1;
  var define = requireDefineProperties();
  var callBind2 = requireCallBind();
  var implementation2 = requireImplementation$1();
  var getPolyfill = requirePolyfill$1();
  var shim2 = requireShim$1();
  var flagsBound = callBind2(getPolyfill());
  define(flagsBound, {
    getPolyfill,
    implementation: implementation2,
    shim: shim2
  });
  regexp_prototype_flags = flagsBound;
  return regexp_prototype_flags;
}
var esGetIterator = { exports: {} };
var shams;
var hasRequiredShams;
function requireShams() {
  if (hasRequiredShams)
    return shams;
  hasRequiredShams = 1;
  var hasSymbols2 = requireShams$1();
  shams = function hasToStringTagShams() {
    return hasSymbols2() && !!Symbol.toStringTag;
  };
  return shams;
}
var isArguments;
var hasRequiredIsArguments;
function requireIsArguments() {
  if (hasRequiredIsArguments)
    return isArguments;
  hasRequiredIsArguments = 1;
  var hasToStringTag = requireShams()();
  var callBound2 = /* @__PURE__ */ requireCallBound$1();
  var $toString = callBound2("Object.prototype.toString");
  var isStandardArguments = function isArguments2(value) {
    if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) {
      return false;
    }
    return $toString(value) === "[object Arguments]";
  };
  var isLegacyArguments = function isArguments2(value) {
    if (isStandardArguments(value)) {
      return true;
    }
    return value !== null && typeof value === "object" && "length" in value && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && "callee" in value && $toString(value.callee) === "[object Function]";
  };
  var supportsStandardArguments = function() {
    return isStandardArguments(arguments);
  }();
  isStandardArguments.isLegacyArguments = isLegacyArguments;
  isArguments = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
  return isArguments;
}
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var objectInspect;
var hasRequiredObjectInspect;
function requireObjectInspect() {
  if (hasRequiredObjectInspect)
    return objectInspect;
  hasRequiredObjectInspect = 1;
  var hasMap = typeof Map === "function" && Map.prototype;
  var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
  var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
  var mapForEach = hasMap && Map.prototype.forEach;
  var hasSet = typeof Set === "function" && Set.prototype;
  var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
  var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
  var setForEach = hasSet && Set.prototype.forEach;
  var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
  var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
  var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
  var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
  var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
  var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
  var booleanValueOf = Boolean.prototype.valueOf;
  var objectToString2 = Object.prototype.toString;
  var functionToString = Function.prototype.toString;
  var $match = String.prototype.match;
  var $slice = String.prototype.slice;
  var $replace = String.prototype.replace;
  var $toUpperCase = String.prototype.toUpperCase;
  var $toLowerCase = String.prototype.toLowerCase;
  var $test = RegExp.prototype.test;
  var $concat = Array.prototype.concat;
  var $join = Array.prototype.join;
  var $arrSlice = Array.prototype.slice;
  var $floor = Math.floor;
  var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
  var gOPS = Object.getOwnPropertySymbols;
  var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
  var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
  var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
  var isEnumerable = Object.prototype.propertyIsEnumerable;
  var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
    return O.__proto__;
  } : null);
  function addNumericSeparator(num, str) {
    if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
      return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === "number") {
      var int = num < 0 ? -$floor(-num) : $floor(num);
      if (int !== num) {
        var intStr = String(int);
        var dec = $slice.call(str, intStr.length + 1);
        return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return $replace.call(str, sepRegex, "$&_");
  }
  var utilInspect = require$$0;
  var inspectCustom = utilInspect.custom;
  var inspectSymbol = isSymbol2(inspectCustom) ? inspectCustom : null;
  var quotes = {
    __proto__: null,
    "double": '"',
    single: "'"
  };
  var quoteREs = {
    __proto__: null,
    "double": /(["\\])/g,
    single: /(['\\])/g
  };
  objectInspect = function inspect_(obj, options, depth, seen2) {
    var opts = options || {};
    if (has(opts, "quoteStyle") && !has(quotes, opts.quoteStyle)) {
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
    if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    }
    if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;
    if (typeof obj === "undefined") {
      return "undefined";
    }
    if (obj === null) {
      return "null";
    }
    if (typeof obj === "boolean") {
      return obj ? "true" : "false";
    }
    if (typeof obj === "string") {
      return inspectString(obj, opts);
    }
    if (typeof obj === "number") {
      if (obj === 0) {
        return Infinity / obj > 0 ? "0" : "-0";
      }
      var str = String(obj);
      return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === "bigint") {
      var bigIntStr = String(obj) + "n";
      return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }
    var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
    if (typeof depth === "undefined") {
      depth = 0;
    }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
      return isArray2(obj) ? "[Array]" : "[Object]";
    }
    var indent = getIndent(opts, depth);
    if (typeof seen2 === "undefined") {
      seen2 = [];
    } else if (indexOf(seen2, obj) >= 0) {
      return "[Circular]";
    }
    function inspect(value, from, noIndent) {
      if (from) {
        seen2 = $arrSlice.call(seen2);
        seen2.push(from);
      }
      if (noIndent) {
        var newOpts = {
          depth: opts.depth
        };
        if (has(opts, "quoteStyle")) {
          newOpts.quoteStyle = opts.quoteStyle;
        }
        return inspect_(value, newOpts, depth + 1, seen2);
      }
      return inspect_(value, opts, depth + 1, seen2);
    }
    if (typeof obj === "function" && !isRegExp2(obj)) {
      var name = nameOf(obj);
      var keys = arrObjKeys(obj, inspect);
      return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
    }
    if (isSymbol2(obj)) {
      var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
      return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement2(obj)) {
      var s2 = "<" + $toLowerCase.call(String(obj.nodeName));
      var attrs = obj.attributes || [];
      for (var i2 = 0; i2 < attrs.length; i2++) {
        s2 += " " + attrs[i2].name + "=" + wrapQuotes(quote(attrs[i2].value), "double", opts);
      }
      s2 += ">";
      if (obj.childNodes && obj.childNodes.length) {
        s2 += "...";
      }
      s2 += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
      return s2;
    }
    if (isArray2(obj)) {
      if (obj.length === 0) {
        return "[]";
      }
      var xs = arrObjKeys(obj, inspect);
      if (indent && !singleLineValues(xs)) {
        return "[" + indentedJoin(xs, indent) + "]";
      }
      return "[ " + $join.call(xs, ", ") + " ]";
    }
    if (isError(obj)) {
      var parts = arrObjKeys(obj, inspect);
      if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
        return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
      }
      if (parts.length === 0) {
        return "[" + String(obj) + "]";
      }
      return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
    }
    if (typeof obj === "object" && customInspect) {
      if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
        return utilInspect(obj, { depth: maxDepth - depth });
      } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
        return obj.inspect();
      }
    }
    if (isMap2(obj)) {
      var mapParts = [];
      if (mapForEach) {
        mapForEach.call(obj, function(value, key) {
          mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
        });
      }
      return collectionOf("Map", mapSize.call(obj), mapParts, indent);
    }
    if (isSet2(obj)) {
      var setParts = [];
      if (setForEach) {
        setForEach.call(obj, function(value) {
          setParts.push(inspect(value, obj));
        });
      }
      return collectionOf("Set", setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
      return weakCollectionOf("WeakMap");
    }
    if (isWeakSet(obj)) {
      return weakCollectionOf("WeakSet");
    }
    if (isWeakRef(obj)) {
      return weakCollectionOf("WeakRef");
    }
    if (isNumber(obj)) {
      return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
      return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
      return markBoxed(booleanValueOf.call(obj));
    }
    if (isString2(obj)) {
      return markBoxed(inspect(String(obj)));
    }
    if (typeof window !== "undefined" && obj === window) {
      return "{ [object Window] }";
    }
    if (typeof globalThis !== "undefined" && obj === globalThis || typeof commonjsGlobal !== "undefined" && obj === commonjsGlobal) {
      return "{ [object globalThis] }";
    }
    if (!isDate2(obj) && !isRegExp2(obj)) {
      var ys = arrObjKeys(obj, inspect);
      var isPlainObject2 = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
      var protoTag = obj instanceof Object ? "" : "null prototype";
      var stringTag = !isPlainObject2 && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
      var constructorTag = isPlainObject2 || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
      var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
      if (ys.length === 0) {
        return tag + "{}";
      }
      if (indent) {
        return tag + "{" + indentedJoin(ys, indent) + "}";
      }
      return tag + "{ " + $join.call(ys, ", ") + " }";
    }
    return String(obj);
  };
  function wrapQuotes(s2, defaultStyle, opts) {
    var style2 = opts.quoteStyle || defaultStyle;
    var quoteChar = quotes[style2];
    return quoteChar + s2 + quoteChar;
  }
  function quote(s2) {
    return $replace.call(String(s2), /"/g, "&quot;");
  }
  function canTrustToString(obj) {
    return !toStringTag || !(typeof obj === "object" && (toStringTag in obj || typeof obj[toStringTag] !== "undefined"));
  }
  function isArray2(obj) {
    return toStr(obj) === "[object Array]" && canTrustToString(obj);
  }
  function isDate2(obj) {
    return toStr(obj) === "[object Date]" && canTrustToString(obj);
  }
  function isRegExp2(obj) {
    return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
  }
  function isError(obj) {
    return toStr(obj) === "[object Error]" && canTrustToString(obj);
  }
  function isString2(obj) {
    return toStr(obj) === "[object String]" && canTrustToString(obj);
  }
  function isNumber(obj) {
    return toStr(obj) === "[object Number]" && canTrustToString(obj);
  }
  function isBoolean(obj) {
    return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
  }
  function isSymbol2(obj) {
    if (hasShammedSymbols) {
      return obj && typeof obj === "object" && obj instanceof Symbol;
    }
    if (typeof obj === "symbol") {
      return true;
    }
    if (!obj || typeof obj !== "object" || !symToString) {
      return false;
    }
    try {
      symToString.call(obj);
      return true;
    } catch (e2) {
    }
    return false;
  }
  function isBigInt(obj) {
    if (!obj || typeof obj !== "object" || !bigIntValueOf) {
      return false;
    }
    try {
      bigIntValueOf.call(obj);
      return true;
    } catch (e2) {
    }
    return false;
  }
  var hasOwn2 = Object.prototype.hasOwnProperty || function(key) {
    return key in this;
  };
  function has(obj, key) {
    return hasOwn2.call(obj, key);
  }
  function toStr(obj) {
    return objectToString2.call(obj);
  }
  function nameOf(f2) {
    if (f2.name) {
      return f2.name;
    }
    var m = $match.call(functionToString.call(f2), /^function\s*([\w$]+)/);
    if (m) {
      return m[1];
    }
    return null;
  }
  function indexOf(xs, x) {
    if (xs.indexOf) {
      return xs.indexOf(x);
    }
    for (var i2 = 0, l = xs.length; i2 < l; i2++) {
      if (xs[i2] === x) {
        return i2;
      }
    }
    return -1;
  }
  function isMap2(x) {
    if (!mapSize || !x || typeof x !== "object") {
      return false;
    }
    try {
      mapSize.call(x);
      try {
        setSize.call(x);
      } catch (s2) {
        return true;
      }
      return x instanceof Map;
    } catch (e2) {
    }
    return false;
  }
  function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== "object") {
      return false;
    }
    try {
      weakMapHas.call(x, weakMapHas);
      try {
        weakSetHas.call(x, weakSetHas);
      } catch (s2) {
        return true;
      }
      return x instanceof WeakMap;
    } catch (e2) {
    }
    return false;
  }
  function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== "object") {
      return false;
    }
    try {
      weakRefDeref.call(x);
      return true;
    } catch (e2) {
    }
    return false;
  }
  function isSet2(x) {
    if (!setSize || !x || typeof x !== "object") {
      return false;
    }
    try {
      setSize.call(x);
      try {
        mapSize.call(x);
      } catch (m) {
        return true;
      }
      return x instanceof Set;
    } catch (e2) {
    }
    return false;
  }
  function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== "object") {
      return false;
    }
    try {
      weakSetHas.call(x, weakSetHas);
      try {
        weakMapHas.call(x, weakMapHas);
      } catch (s2) {
        return true;
      }
      return x instanceof WeakSet;
    } catch (e2) {
    }
    return false;
  }
  function isElement2(x) {
    if (!x || typeof x !== "object") {
      return false;
    }
    if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
      return true;
    }
    return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
  }
  function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
      var remaining = str.length - opts.maxStringLength;
      var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
      return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    var quoteRE = quoteREs[opts.quoteStyle || "single"];
    quoteRE.lastIndex = 0;
    var s2 = $replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s2, "single", opts);
  }
  function lowbyte(c) {
    var n2 = c.charCodeAt(0);
    var x = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[n2];
    if (x) {
      return "\\" + x;
    }
    return "\\x" + (n2 < 16 ? "0" : "") + $toUpperCase.call(n2.toString(16));
  }
  function markBoxed(str) {
    return "Object(" + str + ")";
  }
  function weakCollectionOf(type2) {
    return type2 + " { ? }";
  }
  function collectionOf(type2, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
    return type2 + " (" + size + ") {" + joinedEntries + "}";
  }
  function singleLineValues(xs) {
    for (var i2 = 0; i2 < xs.length; i2++) {
      if (indexOf(xs[i2], "\n") >= 0) {
        return false;
      }
    }
    return true;
  }
  function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === "	") {
      baseIndent = "	";
    } else if (typeof opts.indent === "number" && opts.indent > 0) {
      baseIndent = $join.call(Array(opts.indent + 1), " ");
    } else {
      return null;
    }
    return {
      base: baseIndent,
      prev: $join.call(Array(depth + 1), baseIndent)
    };
  }
  function indentedJoin(xs, indent) {
    if (xs.length === 0) {
      return "";
    }
    var lineJoiner = "\n" + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
  }
  function arrObjKeys(obj, inspect) {
    var isArr = isArray2(obj);
    var xs = [];
    if (isArr) {
      xs.length = obj.length;
      for (var i2 = 0; i2 < obj.length; i2++) {
        xs[i2] = has(obj, i2) ? inspect(obj[i2], obj) : "";
      }
    }
    var syms = typeof gOPS === "function" ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
      symMap = {};
      for (var k2 = 0; k2 < syms.length; k2++) {
        symMap["$" + syms[k2]] = syms[k2];
      }
    }
    for (var key in obj) {
      if (!has(obj, key)) {
        continue;
      }
      if (isArr && String(Number(key)) === key && key < obj.length) {
        continue;
      }
      if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
        continue;
      } else if ($test.call(/[^\w$]/, key)) {
        xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
      } else {
        xs.push(key + ": " + inspect(obj[key], obj));
      }
    }
    if (typeof gOPS === "function") {
      for (var j2 = 0; j2 < syms.length; j2++) {
        if (isEnumerable.call(obj, syms[j2])) {
          xs.push("[" + inspect(syms[j2]) + "]: " + inspect(obj[syms[j2]], obj));
        }
      }
    }
    return xs;
  }
  return objectInspect;
}
var sideChannelList;
var hasRequiredSideChannelList;
function requireSideChannelList() {
  if (hasRequiredSideChannelList)
    return sideChannelList;
  hasRequiredSideChannelList = 1;
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var $TypeError = /* @__PURE__ */ requireType();
  var listGetNode = function(list, key, isDelete) {
    var prev = list;
    var curr;
    for (; (curr = prev.next) != null; prev = curr) {
      if (curr.key === key) {
        prev.next = curr.next;
        if (!isDelete) {
          curr.next = list.next;
          list.next = curr;
        }
        return curr;
      }
    }
  };
  var listGet = function(objects, key) {
    if (!objects) {
      return void 0;
    }
    var node = listGetNode(objects, key);
    return node && node.value;
  };
  var listSet = function(objects, key, value) {
    var node = listGetNode(objects, key);
    if (node) {
      node.value = value;
    } else {
      objects.next = {
        key,
        next: objects.next,
        value
      };
    }
  };
  var listHas = function(objects, key) {
    if (!objects) {
      return false;
    }
    return !!listGetNode(objects, key);
  };
  var listDelete = function(objects, key) {
    if (objects) {
      return listGetNode(objects, key, true);
    }
  };
  sideChannelList = function getSideChannelList() {
    var $o;
    var channel = {
      assert: function(key) {
        if (!channel.has(key)) {
          throw new $TypeError("Side channel does not contain " + inspect(key));
        }
      },
      "delete": function(key) {
        var root = $o && $o.next;
        var deletedNode = listDelete($o, key);
        if (deletedNode && root && root === deletedNode) {
          $o = void 0;
        }
        return !!deletedNode;
      },
      get: function(key) {
        return listGet($o, key);
      },
      has: function(key) {
        return listHas($o, key);
      },
      set: function(key, value) {
        if (!$o) {
          $o = {
            next: void 0
          };
        }
        listSet(
          $o,
          key,
          value
        );
      }
    };
    return channel;
  };
  return sideChannelList;
}
var sideChannelMap;
var hasRequiredSideChannelMap;
function requireSideChannelMap() {
  if (hasRequiredSideChannelMap)
    return sideChannelMap;
  hasRequiredSideChannelMap = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var callBound2 = /* @__PURE__ */ requireCallBound$1();
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var $TypeError = /* @__PURE__ */ requireType();
  var $Map = GetIntrinsic("%Map%", true);
  var $mapGet = callBound2("Map.prototype.get", true);
  var $mapSet = callBound2("Map.prototype.set", true);
  var $mapHas = callBound2("Map.prototype.has", true);
  var $mapDelete = callBound2("Map.prototype.delete", true);
  var $mapSize = callBound2("Map.prototype.size", true);
  sideChannelMap = !!$Map && function getSideChannelMap() {
    var $m;
    var channel = {
      assert: function(key) {
        if (!channel.has(key)) {
          throw new $TypeError("Side channel does not contain " + inspect(key));
        }
      },
      "delete": function(key) {
        if ($m) {
          var result = $mapDelete($m, key);
          if ($mapSize($m) === 0) {
            $m = void 0;
          }
          return result;
        }
        return false;
      },
      get: function(key) {
        if ($m) {
          return $mapGet($m, key);
        }
      },
      has: function(key) {
        if ($m) {
          return $mapHas($m, key);
        }
        return false;
      },
      set: function(key, value) {
        if (!$m) {
          $m = new $Map();
        }
        $mapSet($m, key, value);
      }
    };
    return channel;
  };
  return sideChannelMap;
}
var sideChannelWeakmap;
var hasRequiredSideChannelWeakmap;
function requireSideChannelWeakmap() {
  if (hasRequiredSideChannelWeakmap)
    return sideChannelWeakmap;
  hasRequiredSideChannelWeakmap = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var callBound2 = /* @__PURE__ */ requireCallBound$1();
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var getSideChannelMap = requireSideChannelMap();
  var $TypeError = /* @__PURE__ */ requireType();
  var $WeakMap = GetIntrinsic("%WeakMap%", true);
  var $weakMapGet = callBound2("WeakMap.prototype.get", true);
  var $weakMapSet = callBound2("WeakMap.prototype.set", true);
  var $weakMapHas = callBound2("WeakMap.prototype.has", true);
  var $weakMapDelete = callBound2("WeakMap.prototype.delete", true);
  sideChannelWeakmap = $WeakMap ? function getSideChannelWeakMap() {
    var $wm;
    var $m;
    var channel = {
      assert: function(key) {
        if (!channel.has(key)) {
          throw new $TypeError("Side channel does not contain " + inspect(key));
        }
      },
      "delete": function(key) {
        if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
          if ($wm) {
            return $weakMapDelete($wm, key);
          }
        } else if (getSideChannelMap) {
          if ($m) {
            return $m["delete"](key);
          }
        }
        return false;
      },
      get: function(key) {
        if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
          if ($wm) {
            return $weakMapGet($wm, key);
          }
        }
        return $m && $m.get(key);
      },
      has: function(key) {
        if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
          if ($wm) {
            return $weakMapHas($wm, key);
          }
        }
        return !!$m && $m.has(key);
      },
      set: function(key, value) {
        if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
          if (!$wm) {
            $wm = new $WeakMap();
          }
          $weakMapSet($wm, key, value);
        } else if (getSideChannelMap) {
          if (!$m) {
            $m = getSideChannelMap();
          }
          $m.set(key, value);
        }
      }
    };
    return channel;
  } : getSideChannelMap;
  return sideChannelWeakmap;
}
var sideChannel;
var hasRequiredSideChannel;
function requireSideChannel() {
  if (hasRequiredSideChannel)
    return sideChannel;
  hasRequiredSideChannel = 1;
  var $TypeError = /* @__PURE__ */ requireType();
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var getSideChannelList = requireSideChannelList();
  var getSideChannelMap = requireSideChannelMap();
  var getSideChannelWeakMap = requireSideChannelWeakmap();
  var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
  sideChannel = function getSideChannel() {
    var $channelData;
    var channel = {
      assert: function(key) {
        if (!channel.has(key)) {
          throw new $TypeError("Side channel does not contain " + inspect(key));
        }
      },
      "delete": function(key) {
        return !!$channelData && $channelData["delete"](key);
      },
      get: function(key) {
        return $channelData && $channelData.get(key);
      },
      has: function(key) {
        return !!$channelData && $channelData.has(key);
      },
      set: function(key, value) {
        if (!$channelData) {
          $channelData = makeChannel();
        }
        $channelData.set(key, value);
      }
    };
    return channel;
  };
  return sideChannel;
}
var internalSlot;
var hasRequiredInternalSlot;
function requireInternalSlot() {
  if (hasRequiredInternalSlot)
    return internalSlot;
  hasRequiredInternalSlot = 1;
  var hasOwn2 = /* @__PURE__ */ requireHasown();
  var channel = requireSideChannel()();
  var $TypeError = /* @__PURE__ */ requireType();
  var SLOT = {
    assert: function(O, slot) {
      if (!O || typeof O !== "object" && typeof O !== "function") {
        throw new $TypeError("`O` is not an object");
      }
      if (typeof slot !== "string") {
        throw new $TypeError("`slot` must be a string");
      }
      channel.assert(O);
      if (!SLOT.has(O, slot)) {
        throw new $TypeError("`" + slot + "` is not present on `O`");
      }
    },
    get: function(O, slot) {
      if (!O || typeof O !== "object" && typeof O !== "function") {
        throw new $TypeError("`O` is not an object");
      }
      if (typeof slot !== "string") {
        throw new $TypeError("`slot` must be a string");
      }
      var slots = channel.get(O);
      return slots && slots["$" + slot];
    },
    has: function(O, slot) {
      if (!O || typeof O !== "object" && typeof O !== "function") {
        throw new $TypeError("`O` is not an object");
      }
      if (typeof slot !== "string") {
        throw new $TypeError("`slot` must be a string");
      }
      var slots = channel.get(O);
      return !!slots && hasOwn2(
        slots,
        "$" + slot
      );
    },
    set: function(O, slot, V) {
      if (!O || typeof O !== "object" && typeof O !== "function") {
        throw new $TypeError("`O` is not an object");
      }
      if (typeof slot !== "string") {
        throw new $TypeError("`slot` must be a string");
      }
      var slots = channel.get(O);
      if (!slots) {
        slots = {};
        channel.set(O, slots);
      }
      slots["$" + slot] = V;
    }
  };
  if (Object.freeze) {
    Object.freeze(SLOT);
  }
  internalSlot = SLOT;
  return internalSlot;
}
var stopIterationIterator;
var hasRequiredStopIterationIterator;
function requireStopIterationIterator() {
  if (hasRequiredStopIterationIterator)
    return stopIterationIterator;
  hasRequiredStopIterationIterator = 1;
  var SLOT = requireInternalSlot();
  var $SyntaxError = /* @__PURE__ */ requireSyntax();
  var $StopIteration = typeof StopIteration === "object" ? StopIteration : null;
  stopIterationIterator = function getStopIterationIterator(origIterator) {
    if (!$StopIteration) {
      throw new $SyntaxError("this environment lacks StopIteration");
    }
    SLOT.set(origIterator, "[[Done]]", false);
    var siIterator = {
      next: function next() {
        var iterator2 = SLOT.get(this, "[[Iterator]]");
        var done = !!SLOT.get(iterator2, "[[Done]]");
        try {
          return {
            done,
            value: done ? void 0 : iterator2.next()
          };
        } catch (e2) {
          SLOT.set(iterator2, "[[Done]]", true);
          if (e2 !== $StopIteration) {
            throw e2;
          }
          return {
            done: true,
            value: void 0
          };
        }
      }
    };
    SLOT.set(siIterator, "[[Iterator]]", origIterator);
    return siIterator;
  };
  return stopIterationIterator;
}
var isarray;
var hasRequiredIsarray;
function requireIsarray() {
  if (hasRequiredIsarray)
    return isarray;
  hasRequiredIsarray = 1;
  var toString = {}.toString;
  isarray = Array.isArray || function(arr) {
    return toString.call(arr) == "[object Array]";
  };
  return isarray;
}
var isString;
var hasRequiredIsString;
function requireIsString() {
  if (hasRequiredIsString)
    return isString;
  hasRequiredIsString = 1;
  var callBound2 = /* @__PURE__ */ requireCallBound$1();
  var $strValueOf = callBound2("String.prototype.valueOf");
  var tryStringObject = function tryStringObject2(value) {
    try {
      $strValueOf(value);
      return true;
    } catch (e2) {
      return false;
    }
  };
  var $toString = callBound2("Object.prototype.toString");
  var strClass = "[object String]";
  var hasToStringTag = requireShams()();
  isString = function isString2(value) {
    if (typeof value === "string") {
      return true;
    }
    if (!value || typeof value !== "object") {
      return false;
    }
    return hasToStringTag ? tryStringObject(value) : $toString(value) === strClass;
  };
  return isString;
}
var isMap;
var hasRequiredIsMap;
function requireIsMap() {
  if (hasRequiredIsMap)
    return isMap;
  hasRequiredIsMap = 1;
  var $Map = typeof Map === "function" && Map.prototype ? Map : null;
  var $Set = typeof Set === "function" && Set.prototype ? Set : null;
  var exported;
  if (!$Map) {
    exported = function isMap2(x) {
      return false;
    };
  }
  var $mapHas = $Map ? Map.prototype.has : null;
  var $setHas = $Set ? Set.prototype.has : null;
  if (!exported && !$mapHas) {
    exported = function isMap2(x) {
      return false;
    };
  }
  isMap = exported || function isMap2(x) {
    if (!x || typeof x !== "object") {
      return false;
    }
    try {
      $mapHas.call(x);
      if ($setHas) {
        try {
          $setHas.call(x);
        } catch (e2) {
          return true;
        }
      }
      return x instanceof $Map;
    } catch (e2) {
    }
    return false;
  };
  return isMap;
}
var isSet;
var hasRequiredIsSet;
function requireIsSet() {
  if (hasRequiredIsSet)
    return isSet;
  hasRequiredIsSet = 1;
  var $Map = typeof Map === "function" && Map.prototype ? Map : null;
  var $Set = typeof Set === "function" && Set.prototype ? Set : null;
  var exported;
  if (!$Set) {
    exported = function isSet2(x) {
      return false;
    };
  }
  var $mapHas = $Map ? Map.prototype.has : null;
  var $setHas = $Set ? Set.prototype.has : null;
  if (!exported && !$setHas) {
    exported = function isSet2(x) {
      return false;
    };
  }
  isSet = exported || function isSet2(x) {
    if (!x || typeof x !== "object") {
      return false;
    }
    try {
      $setHas.call(x);
      if ($mapHas) {
        try {
          $mapHas.call(x);
        } catch (e2) {
          return true;
        }
      }
      return x instanceof $Set;
    } catch (e2) {
    }
    return false;
  };
  return isSet;
}
var hasRequiredEsGetIterator;
function requireEsGetIterator() {
  if (hasRequiredEsGetIterator)
    return esGetIterator.exports;
  hasRequiredEsGetIterator = 1;
  var isArguments2 = /* @__PURE__ */ requireIsArguments();
  var getStopIterationIterator = /* @__PURE__ */ requireStopIterationIterator();
  if (requireHasSymbols()() || requireShams$1()()) {
    var $iterator = Symbol.iterator;
    esGetIterator.exports = function getIterator(iterable) {
      if (iterable != null && typeof iterable[$iterator] !== "undefined") {
        return iterable[$iterator]();
      }
      if (isArguments2(iterable)) {
        return Array.prototype[$iterator].call(iterable);
      }
    };
  } else {
    var isArray2 = requireIsarray();
    var isString2 = requireIsString();
    var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
    var $Map = GetIntrinsic("%Map%", true);
    var $Set = GetIntrinsic("%Set%", true);
    var callBound2 = requireCallBound();
    var $arrayPush = callBound2("Array.prototype.push");
    var $charCodeAt = callBound2("String.prototype.charCodeAt");
    var $stringSlice = callBound2("String.prototype.slice");
    var advanceStringIndex = function advanceStringIndex2(S2, index2) {
      var length = S2.length;
      if (index2 + 1 >= length) {
        return index2 + 1;
      }
      var first = $charCodeAt(S2, index2);
      if (first < 55296 || first > 56319) {
        return index2 + 1;
      }
      var second = $charCodeAt(S2, index2 + 1);
      if (second < 56320 || second > 57343) {
        return index2 + 1;
      }
      return index2 + 2;
    };
    var getArrayIterator = function getArrayIterator2(arraylike) {
      var i2 = 0;
      return {
        next: function next() {
          var done = i2 >= arraylike.length;
          var value;
          if (!done) {
            value = arraylike[i2];
            i2 += 1;
          }
          return {
            done,
            value
          };
        }
      };
    };
    var getNonCollectionIterator = function getNonCollectionIterator2(iterable, noPrimordialCollections) {
      if (isArray2(iterable) || isArguments2(iterable)) {
        return getArrayIterator(iterable);
      }
      if (isString2(iterable)) {
        var i2 = 0;
        return {
          next: function next() {
            var nextIndex = advanceStringIndex(iterable, i2);
            var value = $stringSlice(iterable, i2, nextIndex);
            i2 = nextIndex;
            return {
              done: nextIndex > iterable.length,
              value
            };
          }
        };
      }
      if (noPrimordialCollections && typeof iterable["_es6-shim iterator_"] !== "undefined") {
        return iterable["_es6-shim iterator_"]();
      }
    };
    if (!$Map && !$Set) {
      esGetIterator.exports = function getIterator(iterable) {
        if (iterable != null) {
          return getNonCollectionIterator(iterable, true);
        }
      };
    } else {
      var isMap2 = /* @__PURE__ */ requireIsMap();
      var isSet2 = /* @__PURE__ */ requireIsSet();
      var $mapForEach = callBound2("Map.prototype.forEach", true);
      var $setForEach = callBound2("Set.prototype.forEach", true);
      if (typeof process === "undefined" || !process.versions || !process.versions.node) {
        var $mapIterator = callBound2("Map.prototype.iterator", true);
        var $setIterator = callBound2("Set.prototype.iterator", true);
      }
      var $mapAtAtIterator = callBound2("Map.prototype.@@iterator", true) || callBound2("Map.prototype._es6-shim iterator_", true);
      var $setAtAtIterator = callBound2("Set.prototype.@@iterator", true) || callBound2("Set.prototype._es6-shim iterator_", true);
      var getCollectionIterator = function getCollectionIterator2(iterable) {
        if (isMap2(iterable)) {
          if ($mapIterator) {
            return getStopIterationIterator($mapIterator(iterable));
          }
          if ($mapAtAtIterator) {
            return $mapAtAtIterator(iterable);
          }
          if ($mapForEach) {
            var entries = [];
            $mapForEach(iterable, function(v2, k2) {
              $arrayPush(entries, [k2, v2]);
            });
            return getArrayIterator(entries);
          }
        }
        if (isSet2(iterable)) {
          if ($setIterator) {
            return getStopIterationIterator($setIterator(iterable));
          }
          if ($setAtAtIterator) {
            return $setAtAtIterator(iterable);
          }
          if ($setForEach) {
            var values = [];
            $setForEach(iterable, function(v2) {
              $arrayPush(values, v2);
            });
            return getArrayIterator(values);
          }
        }
      };
      esGetIterator.exports = function getIterator(iterable) {
        return getCollectionIterator(iterable) || getNonCollectionIterator(iterable);
      };
    }
  }
  return esGetIterator.exports;
}
var implementation;
var hasRequiredImplementation;
function requireImplementation() {
  if (hasRequiredImplementation)
    return implementation;
  hasRequiredImplementation = 1;
  var numberIsNaN = function(value) {
    return value !== value;
  };
  implementation = function is(a2, b2) {
    if (a2 === 0 && b2 === 0) {
      return 1 / a2 === 1 / b2;
    }
    if (a2 === b2) {
      return true;
    }
    if (numberIsNaN(a2) && numberIsNaN(b2)) {
      return true;
    }
    return false;
  };
  return implementation;
}
var polyfill2;
var hasRequiredPolyfill;
function requirePolyfill() {
  if (hasRequiredPolyfill)
    return polyfill2;
  hasRequiredPolyfill = 1;
  var implementation2 = requireImplementation();
  polyfill2 = function getPolyfill() {
    return typeof Object.is === "function" ? Object.is : implementation2;
  };
  return polyfill2;
}
var shim;
var hasRequiredShim;
function requireShim() {
  if (hasRequiredShim)
    return shim;
  hasRequiredShim = 1;
  var getPolyfill = requirePolyfill();
  var define = requireDefineProperties();
  shim = function shimObjectIs() {
    var polyfill22 = getPolyfill();
    define(Object, { is: polyfill22 }, {
      is: function testObjectIs() {
        return Object.is !== polyfill22;
      }
    });
    return polyfill22;
  };
  return shim;
}
var objectIs;
var hasRequiredObjectIs;
function requireObjectIs() {
  if (hasRequiredObjectIs)
    return objectIs;
  hasRequiredObjectIs = 1;
  var define = requireDefineProperties();
  var callBind2 = requireCallBind();
  var implementation2 = requireImplementation();
  var getPolyfill = requirePolyfill();
  var shim2 = requireShim();
  var polyfill22 = callBind2(getPolyfill(), Object);
  define(polyfill22, {
    getPolyfill,
    implementation: implementation2,
    shim: shim2
  });
  objectIs = polyfill22;
  return objectIs;
}
var isArrayBuffer;
var hasRequiredIsArrayBuffer;
function requireIsArrayBuffer() {
  if (hasRequiredIsArrayBuffer)
    return isArrayBuffer;
  hasRequiredIsArrayBuffer = 1;
  var callBind2 = requireCallBind();
  var callBound2 = /* @__PURE__ */ requireCallBound$1();
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var $ArrayBuffer = GetIntrinsic("%ArrayBuffer%", true);
  var $byteLength = callBound2("ArrayBuffer.prototype.byteLength", true);
  var $toString = callBound2("Object.prototype.toString");
  var abSlice = !!$ArrayBuffer && !$byteLength && new $ArrayBuffer(0).slice;
  var $abSlice = !!abSlice && callBind2(abSlice);
  isArrayBuffer = $byteLength || $abSlice ? function isArrayBuffer2(obj) {
    if (!obj || typeof obj !== "object") {
      return false;
    }
    try {
      if ($byteLength) {
        $byteLength(obj);
      } else {
        $abSlice(obj, 0);
      }
      return true;
    } catch (e2) {
      return false;
    }
  } : $ArrayBuffer ? function isArrayBuffer2(obj) {
    return $toString(obj) === "[object ArrayBuffer]";
  } : function isArrayBuffer2(obj) {
    return false;
  };
  return isArrayBuffer;
}
var isDateObject;
var hasRequiredIsDateObject;
function requireIsDateObject() {
  if (hasRequiredIsDateObject)
    return isDateObject;
  hasRequiredIsDateObject = 1;
  var callBound2 = /* @__PURE__ */ requireCallBound$1();
  var getDay = callBound2("Date.prototype.getDay");
  var tryDateObject = function tryDateGetDayCall(value) {
    try {
      getDay(value);
      return true;
    } catch (e2) {
      return false;
    }
  };
  var toStr = callBound2("Object.prototype.toString");
  var dateClass = "[object Date]";
  var hasToStringTag = requireShams()();
  isDateObject = function isDateObject2(value) {
    if (typeof value !== "object" || value === null) {
      return false;
    }
    return hasToStringTag ? tryDateObject(value) : toStr(value) === dateClass;
  };
  return isDateObject;
}
var isRegex;
var hasRequiredIsRegex;
function requireIsRegex() {
  if (hasRequiredIsRegex)
    return isRegex;
  hasRequiredIsRegex = 1;
  var callBound2 = /* @__PURE__ */ requireCallBound$1();
  var hasToStringTag = requireShams()();
  var hasOwn2 = /* @__PURE__ */ requireHasown();
  var gOPD2 = /* @__PURE__ */ requireGopd();
  var fn;
  if (hasToStringTag) {
    var $exec = callBound2("RegExp.prototype.exec");
    var isRegexMarker = {};
    var throwRegexMarker = function() {
      throw isRegexMarker;
    };
    var badStringifier = {
      toString: throwRegexMarker,
      valueOf: throwRegexMarker
    };
    if (typeof Symbol.toPrimitive === "symbol") {
      badStringifier[Symbol.toPrimitive] = throwRegexMarker;
    }
    fn = function isRegex2(value) {
      if (!value || typeof value !== "object") {
        return false;
      }
      var descriptor = gOPD2(
        value,
        "lastIndex"
      );
      var hasLastIndexDataProperty = descriptor && hasOwn2(descriptor, "value");
      if (!hasLastIndexDataProperty) {
        return false;
      }
      try {
        $exec(
          value,
          badStringifier
        );
      } catch (e2) {
        return e2 === isRegexMarker;
      }
    };
  } else {
    var $toString = callBound2("Object.prototype.toString");
    var regexClass = "[object RegExp]";
    fn = function isRegex2(value) {
      if (!value || typeof value !== "object" && typeof value !== "function") {
        return false;
      }
      return $toString(value) === regexClass;
    };
  }
  isRegex = fn;
  return isRegex;
}
var isSharedArrayBuffer;
var hasRequiredIsSharedArrayBuffer;
function requireIsSharedArrayBuffer() {
  if (hasRequiredIsSharedArrayBuffer)
    return isSharedArrayBuffer;
  hasRequiredIsSharedArrayBuffer = 1;
  var callBound2 = /* @__PURE__ */ requireCallBound$1();
  var $byteLength = callBound2("SharedArrayBuffer.prototype.byteLength", true);
  isSharedArrayBuffer = $byteLength ? function isSharedArrayBuffer2(obj) {
    if (!obj || typeof obj !== "object") {
      return false;
    }
    try {
      $byteLength(obj);
      return true;
    } catch (e2) {
      return false;
    }
  } : function isSharedArrayBuffer2(_obj) {
    return false;
  };
  return isSharedArrayBuffer;
}
var isNumberObject;
var hasRequiredIsNumberObject;
function requireIsNumberObject() {
  if (hasRequiredIsNumberObject)
    return isNumberObject;
  hasRequiredIsNumberObject = 1;
  var callBound2 = /* @__PURE__ */ requireCallBound$1();
  var $numToStr = callBound2("Number.prototype.toString");
  var tryNumberObject = function tryNumberObject2(value) {
    try {
      $numToStr(value);
      return true;
    } catch (e2) {
      return false;
    }
  };
  var $toString = callBound2("Object.prototype.toString");
  var numClass = "[object Number]";
  var hasToStringTag = requireShams()();
  isNumberObject = function isNumberObject2(value) {
    if (typeof value === "number") {
      return true;
    }
    if (!value || typeof value !== "object") {
      return false;
    }
    return hasToStringTag ? tryNumberObject(value) : $toString(value) === numClass;
  };
  return isNumberObject;
}
var isBooleanObject;
var hasRequiredIsBooleanObject;
function requireIsBooleanObject() {
  if (hasRequiredIsBooleanObject)
    return isBooleanObject;
  hasRequiredIsBooleanObject = 1;
  var callBound2 = /* @__PURE__ */ requireCallBound$1();
  var $boolToStr = callBound2("Boolean.prototype.toString");
  var $toString = callBound2("Object.prototype.toString");
  var tryBooleanObject = function booleanBrandCheck(value) {
    try {
      $boolToStr(value);
      return true;
    } catch (e2) {
      return false;
    }
  };
  var boolClass = "[object Boolean]";
  var hasToStringTag = requireShams()();
  isBooleanObject = function isBoolean(value) {
    if (typeof value === "boolean") {
      return true;
    }
    if (value === null || typeof value !== "object") {
      return false;
    }
    return hasToStringTag ? tryBooleanObject(value) : $toString(value) === boolClass;
  };
  return isBooleanObject;
}
var isSymbol = { exports: {} };
var safeRegexTest;
var hasRequiredSafeRegexTest;
function requireSafeRegexTest() {
  if (hasRequiredSafeRegexTest)
    return safeRegexTest;
  hasRequiredSafeRegexTest = 1;
  var callBound2 = /* @__PURE__ */ requireCallBound$1();
  var isRegex2 = requireIsRegex();
  var $exec = callBound2("RegExp.prototype.exec");
  var $TypeError = /* @__PURE__ */ requireType();
  safeRegexTest = function regexTester(regex) {
    if (!isRegex2(regex)) {
      throw new $TypeError("`regex` must be a RegExp");
    }
    return function test(s2) {
      return $exec(regex, s2) !== null;
    };
  };
  return safeRegexTest;
}
var hasRequiredIsSymbol;
function requireIsSymbol() {
  if (hasRequiredIsSymbol)
    return isSymbol.exports;
  hasRequiredIsSymbol = 1;
  var callBound2 = /* @__PURE__ */ requireCallBound$1();
  var $toString = callBound2("Object.prototype.toString");
  var hasSymbols2 = requireHasSymbols()();
  var safeRegexTest2 = /* @__PURE__ */ requireSafeRegexTest();
  if (hasSymbols2) {
    var $symToStr = callBound2("Symbol.prototype.toString");
    var isSymString = safeRegexTest2(/^Symbol\(.*\)$/);
    var isSymbolObject = function isRealSymbolObject(value) {
      if (typeof value.valueOf() !== "symbol") {
        return false;
      }
      return isSymString($symToStr(value));
    };
    isSymbol.exports = function isSymbol2(value) {
      if (typeof value === "symbol") {
        return true;
      }
      if (!value || typeof value !== "object" || $toString(value) !== "[object Symbol]") {
        return false;
      }
      try {
        return isSymbolObject(value);
      } catch (e2) {
        return false;
      }
    };
  } else {
    isSymbol.exports = function isSymbol2(value) {
      return false;
    };
  }
  return isSymbol.exports;
}
var isBigint = { exports: {} };
var hasBigints;
var hasRequiredHasBigints;
function requireHasBigints() {
  if (hasRequiredHasBigints)
    return hasBigints;
  hasRequiredHasBigints = 1;
  var $BigInt = typeof BigInt !== "undefined" && BigInt;
  hasBigints = function hasNativeBigInts() {
    return typeof $BigInt === "function" && typeof BigInt === "function" && typeof $BigInt(42) === "bigint" && typeof BigInt(42) === "bigint";
  };
  return hasBigints;
}
var hasRequiredIsBigint;
function requireIsBigint() {
  if (hasRequiredIsBigint)
    return isBigint.exports;
  hasRequiredIsBigint = 1;
  var hasBigInts = requireHasBigints()();
  if (hasBigInts) {
    var bigIntValueOf = BigInt.prototype.valueOf;
    var tryBigInt = function tryBigIntObject(value) {
      try {
        bigIntValueOf.call(value);
        return true;
      } catch (e2) {
      }
      return false;
    };
    isBigint.exports = function isBigInt(value) {
      if (value === null || typeof value === "undefined" || typeof value === "boolean" || typeof value === "string" || typeof value === "number" || typeof value === "symbol" || typeof value === "function") {
        return false;
      }
      if (typeof value === "bigint") {
        return true;
      }
      return tryBigInt(value);
    };
  } else {
    isBigint.exports = function isBigInt(value) {
      return false;
    };
  }
  return isBigint.exports;
}
var whichBoxedPrimitive;
var hasRequiredWhichBoxedPrimitive;
function requireWhichBoxedPrimitive() {
  if (hasRequiredWhichBoxedPrimitive)
    return whichBoxedPrimitive;
  hasRequiredWhichBoxedPrimitive = 1;
  var isString2 = requireIsString();
  var isNumber = requireIsNumberObject();
  var isBoolean = requireIsBooleanObject();
  var isSymbol2 = requireIsSymbol();
  var isBigInt = requireIsBigint();
  whichBoxedPrimitive = function whichBoxedPrimitive2(value) {
    if (value == null || typeof value !== "object" && typeof value !== "function") {
      return null;
    }
    if (isString2(value)) {
      return "String";
    }
    if (isNumber(value)) {
      return "Number";
    }
    if (isBoolean(value)) {
      return "Boolean";
    }
    if (isSymbol2(value)) {
      return "Symbol";
    }
    if (isBigInt(value)) {
      return "BigInt";
    }
  };
  return whichBoxedPrimitive;
}
var isWeakmap;
var hasRequiredIsWeakmap;
function requireIsWeakmap() {
  if (hasRequiredIsWeakmap)
    return isWeakmap;
  hasRequiredIsWeakmap = 1;
  var $WeakMap = typeof WeakMap === "function" && WeakMap.prototype ? WeakMap : null;
  var $WeakSet = typeof WeakSet === "function" && WeakSet.prototype ? WeakSet : null;
  var exported;
  if (!$WeakMap) {
    exported = function isWeakMap(x) {
      return false;
    };
  }
  var $mapHas = $WeakMap ? $WeakMap.prototype.has : null;
  var $setHas = $WeakSet ? $WeakSet.prototype.has : null;
  if (!exported && !$mapHas) {
    exported = function isWeakMap(x) {
      return false;
    };
  }
  isWeakmap = exported || function isWeakMap(x) {
    if (!x || typeof x !== "object") {
      return false;
    }
    try {
      $mapHas.call(x, $mapHas);
      if ($setHas) {
        try {
          $setHas.call(x, $setHas);
        } catch (e2) {
          return true;
        }
      }
      return x instanceof $WeakMap;
    } catch (e2) {
    }
    return false;
  };
  return isWeakmap;
}
var isWeakset = { exports: {} };
var hasRequiredIsWeakset;
function requireIsWeakset() {
  if (hasRequiredIsWeakset)
    return isWeakset.exports;
  hasRequiredIsWeakset = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var callBound2 = /* @__PURE__ */ requireCallBound$1();
  var $WeakSet = GetIntrinsic("%WeakSet%", true);
  var $setHas = callBound2("WeakSet.prototype.has", true);
  if ($setHas) {
    var $mapHas = callBound2("WeakMap.prototype.has", true);
    isWeakset.exports = function isWeakSet(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      try {
        $setHas(x, $setHas);
        if ($mapHas) {
          try {
            $mapHas(x, $mapHas);
          } catch (e2) {
            return true;
          }
        }
        return x instanceof $WeakSet;
      } catch (e2) {
      }
      return false;
    };
  } else {
    isWeakset.exports = function isWeakSet(x) {
      return false;
    };
  }
  return isWeakset.exports;
}
var whichCollection;
var hasRequiredWhichCollection;
function requireWhichCollection() {
  if (hasRequiredWhichCollection)
    return whichCollection;
  hasRequiredWhichCollection = 1;
  var isMap2 = /* @__PURE__ */ requireIsMap();
  var isSet2 = /* @__PURE__ */ requireIsSet();
  var isWeakMap = requireIsWeakmap();
  var isWeakSet = /* @__PURE__ */ requireIsWeakset();
  whichCollection = function whichCollection2(value) {
    if (value && typeof value === "object") {
      if (isMap2(value)) {
        return "Map";
      }
      if (isSet2(value)) {
        return "Set";
      }
      if (isWeakMap(value)) {
        return "WeakMap";
      }
      if (isWeakSet(value)) {
        return "WeakSet";
      }
    }
    return false;
  };
  return whichCollection;
}
var isCallable;
var hasRequiredIsCallable;
function requireIsCallable() {
  if (hasRequiredIsCallable)
    return isCallable;
  hasRequiredIsCallable = 1;
  var fnToStr = Function.prototype.toString;
  var reflectApply2 = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
  var badArrayLike;
  var isCallableMarker;
  if (typeof reflectApply2 === "function" && typeof Object.defineProperty === "function") {
    try {
      badArrayLike = Object.defineProperty({}, "length", {
        get: function() {
          throw isCallableMarker;
        }
      });
      isCallableMarker = {};
      reflectApply2(function() {
        throw 42;
      }, null, badArrayLike);
    } catch (_2) {
      if (_2 !== isCallableMarker) {
        reflectApply2 = null;
      }
    }
  } else {
    reflectApply2 = null;
  }
  var constructorRegex = /^\s*class\b/;
  var isES6ClassFn = function isES6ClassFunction(value) {
    try {
      var fnStr = fnToStr.call(value);
      return constructorRegex.test(fnStr);
    } catch (e2) {
      return false;
    }
  };
  var tryFunctionObject = function tryFunctionToStr(value) {
    try {
      if (isES6ClassFn(value)) {
        return false;
      }
      fnToStr.call(value);
      return true;
    } catch (e2) {
      return false;
    }
  };
  var toStr = Object.prototype.toString;
  var objectClass = "[object Object]";
  var fnClass = "[object Function]";
  var genClass = "[object GeneratorFunction]";
  var ddaClass = "[object HTMLAllCollection]";
  var ddaClass2 = "[object HTML document.all class]";
  var ddaClass3 = "[object HTMLCollection]";
  var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
  var isIE68 = !(0 in [,]);
  var isDDA = function isDocumentDotAll() {
    return false;
  };
  if (typeof document === "object") {
    var all = document.all;
    if (toStr.call(all) === toStr.call(document.all)) {
      isDDA = function isDocumentDotAll(value) {
        if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
          try {
            var str = toStr.call(value);
            return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
          } catch (e2) {
          }
        }
        return false;
      };
    }
  }
  isCallable = reflectApply2 ? function isCallable2(value) {
    if (isDDA(value)) {
      return true;
    }
    if (!value) {
      return false;
    }
    if (typeof value !== "function" && typeof value !== "object") {
      return false;
    }
    try {
      reflectApply2(value, null, badArrayLike);
    } catch (e2) {
      if (e2 !== isCallableMarker) {
        return false;
      }
    }
    return !isES6ClassFn(value) && tryFunctionObject(value);
  } : function isCallable2(value) {
    if (isDDA(value)) {
      return true;
    }
    if (!value) {
      return false;
    }
    if (typeof value !== "function" && typeof value !== "object") {
      return false;
    }
    if (hasToStringTag) {
      return tryFunctionObject(value);
    }
    if (isES6ClassFn(value)) {
      return false;
    }
    var strClass = toStr.call(value);
    if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
      return false;
    }
    return tryFunctionObject(value);
  };
  return isCallable;
}
var forEach;
var hasRequiredForEach;
function requireForEach() {
  if (hasRequiredForEach)
    return forEach;
  hasRequiredForEach = 1;
  var isCallable2 = requireIsCallable();
  var toStr = Object.prototype.toString;
  var hasOwnProperty2 = Object.prototype.hasOwnProperty;
  var forEachArray = function forEachArray2(array, iterator2, receiver) {
    for (var i2 = 0, len = array.length; i2 < len; i2++) {
      if (hasOwnProperty2.call(array, i2)) {
        if (receiver == null) {
          iterator2(array[i2], i2, array);
        } else {
          iterator2.call(receiver, array[i2], i2, array);
        }
      }
    }
  };
  var forEachString = function forEachString2(string, iterator2, receiver) {
    for (var i2 = 0, len = string.length; i2 < len; i2++) {
      if (receiver == null) {
        iterator2(string.charAt(i2), i2, string);
      } else {
        iterator2.call(receiver, string.charAt(i2), i2, string);
      }
    }
  };
  var forEachObject = function forEachObject2(object, iterator2, receiver) {
    for (var k2 in object) {
      if (hasOwnProperty2.call(object, k2)) {
        if (receiver == null) {
          iterator2(object[k2], k2, object);
        } else {
          iterator2.call(receiver, object[k2], k2, object);
        }
      }
    }
  };
  function isArray2(x) {
    return toStr.call(x) === "[object Array]";
  }
  forEach = function forEach2(list, iterator2, thisArg) {
    if (!isCallable2(iterator2)) {
      throw new TypeError("iterator must be a function");
    }
    var receiver;
    if (arguments.length >= 3) {
      receiver = thisArg;
    }
    if (isArray2(list)) {
      forEachArray(list, iterator2, receiver);
    } else if (typeof list === "string") {
      forEachString(list, iterator2, receiver);
    } else {
      forEachObject(list, iterator2, receiver);
    }
  };
  return forEach;
}
var possibleTypedArrayNames;
var hasRequiredPossibleTypedArrayNames;
function requirePossibleTypedArrayNames() {
  if (hasRequiredPossibleTypedArrayNames)
    return possibleTypedArrayNames;
  hasRequiredPossibleTypedArrayNames = 1;
  possibleTypedArrayNames = [
    "Float16Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array"
  ];
  return possibleTypedArrayNames;
}
var availableTypedArrays;
var hasRequiredAvailableTypedArrays;
function requireAvailableTypedArrays() {
  if (hasRequiredAvailableTypedArrays)
    return availableTypedArrays;
  hasRequiredAvailableTypedArrays = 1;
  var possibleNames = /* @__PURE__ */ requirePossibleTypedArrayNames();
  var g = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
  availableTypedArrays = function availableTypedArrays2() {
    var out = [];
    for (var i2 = 0; i2 < possibleNames.length; i2++) {
      if (typeof g[possibleNames[i2]] === "function") {
        out[out.length] = possibleNames[i2];
      }
    }
    return out;
  };
  return availableTypedArrays;
}
var whichTypedArray;
var hasRequiredWhichTypedArray;
function requireWhichTypedArray() {
  if (hasRequiredWhichTypedArray)
    return whichTypedArray;
  hasRequiredWhichTypedArray = 1;
  var forEach2 = requireForEach();
  var availableTypedArrays2 = /* @__PURE__ */ requireAvailableTypedArrays();
  var callBind2 = requireCallBind();
  var callBound2 = /* @__PURE__ */ requireCallBound$1();
  var gOPD2 = /* @__PURE__ */ requireGopd();
  var getProto2 = requireGetProto();
  var $toString = callBound2("Object.prototype.toString");
  var hasToStringTag = requireShams()();
  var g = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
  var typedArrays = availableTypedArrays2();
  var $slice = callBound2("String.prototype.slice");
  var $indexOf = callBound2("Array.prototype.indexOf", true) || function indexOf(array, value) {
    for (var i2 = 0; i2 < array.length; i2 += 1) {
      if (array[i2] === value) {
        return i2;
      }
    }
    return -1;
  };
  var cache = { __proto__: null };
  if (hasToStringTag && gOPD2 && getProto2) {
    forEach2(typedArrays, function(typedArray) {
      var arr = new g[typedArray]();
      if (Symbol.toStringTag in arr && getProto2) {
        var proto = getProto2(arr);
        var descriptor = gOPD2(proto, Symbol.toStringTag);
        if (!descriptor && proto) {
          var superProto = getProto2(proto);
          descriptor = gOPD2(superProto, Symbol.toStringTag);
        }
        cache["$" + typedArray] = callBind2(descriptor.get);
      }
    });
  } else {
    forEach2(typedArrays, function(typedArray) {
      var arr = new g[typedArray]();
      var fn = arr.slice || arr.set;
      if (fn) {
        cache["$" + typedArray] = callBind2(fn);
      }
    });
  }
  var tryTypedArrays = function tryAllTypedArrays(value) {
    var found = false;
    forEach2(
      cache,
      function(getter, typedArray) {
        if (!found) {
          try {
            if ("$" + getter(value) === typedArray) {
              found = $slice(typedArray, 1);
            }
          } catch (e2) {
          }
        }
      }
    );
    return found;
  };
  var trySlices = function tryAllSlices(value) {
    var found = false;
    forEach2(
      cache,
      function(getter, name) {
        if (!found) {
          try {
            getter(value);
            found = $slice(name, 1);
          } catch (e2) {
          }
        }
      }
    );
    return found;
  };
  whichTypedArray = function whichTypedArray2(value) {
    if (!value || typeof value !== "object") {
      return false;
    }
    if (!hasToStringTag) {
      var tag = $slice($toString(value), 8, -1);
      if ($indexOf(typedArrays, tag) > -1) {
        return tag;
      }
      if (tag !== "Object") {
        return false;
      }
      return trySlices(value);
    }
    if (!gOPD2) {
      return null;
    }
    return tryTypedArrays(value);
  };
  return whichTypedArray;
}
var arrayBufferByteLength;
var hasRequiredArrayBufferByteLength;
function requireArrayBufferByteLength() {
  if (hasRequiredArrayBufferByteLength)
    return arrayBufferByteLength;
  hasRequiredArrayBufferByteLength = 1;
  var callBound2 = /* @__PURE__ */ requireCallBound$1();
  var $byteLength = callBound2("ArrayBuffer.prototype.byteLength", true);
  var isArrayBuffer2 = /* @__PURE__ */ requireIsArrayBuffer();
  arrayBufferByteLength = function byteLength(ab) {
    if (!isArrayBuffer2(ab)) {
      return NaN;
    }
    return $byteLength ? $byteLength(ab) : ab.byteLength;
  };
  return arrayBufferByteLength;
}
var deepEqual$1;
var hasRequiredDeepEqual;
function requireDeepEqual() {
  if (hasRequiredDeepEqual)
    return deepEqual$1;
  hasRequiredDeepEqual = 1;
  var assign2 = requireObject_assign();
  var callBound2 = requireCallBound();
  var flags = requireRegexp_prototype_flags();
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var getIterator = requireEsGetIterator();
  var getSideChannel = requireSideChannel();
  var is = requireObjectIs();
  var isArguments2 = /* @__PURE__ */ requireIsArguments();
  var isArray2 = requireIsarray();
  var isArrayBuffer2 = /* @__PURE__ */ requireIsArrayBuffer();
  var isDate2 = /* @__PURE__ */ requireIsDateObject();
  var isRegex2 = requireIsRegex();
  var isSharedArrayBuffer2 = /* @__PURE__ */ requireIsSharedArrayBuffer();
  var objectKeys2 = requireObjectKeys();
  var whichBoxedPrimitive2 = requireWhichBoxedPrimitive();
  var whichCollection2 = /* @__PURE__ */ requireWhichCollection();
  var whichTypedArray2 = /* @__PURE__ */ requireWhichTypedArray();
  var byteLength = /* @__PURE__ */ requireArrayBufferByteLength();
  var sabByteLength = callBound2("SharedArrayBuffer.prototype.byteLength", true);
  var $getTime = callBound2("Date.prototype.getTime");
  var gPO = Object.getPrototypeOf;
  var $objToString = callBound2("Object.prototype.toString");
  var $Set = GetIntrinsic("%Set%", true);
  var $mapHas = callBound2("Map.prototype.has", true);
  var $mapGet = callBound2("Map.prototype.get", true);
  var $mapSize = callBound2("Map.prototype.size", true);
  var $setAdd = callBound2("Set.prototype.add", true);
  var $setDelete = callBound2("Set.prototype.delete", true);
  var $setHas = callBound2("Set.prototype.has", true);
  var $setSize = callBound2("Set.prototype.size", true);
  function setHasEqualElement(set, val1, opts, channel) {
    var i2 = getIterator(set);
    var result;
    while ((result = i2.next()) && !result.done) {
      if (internalDeepEqual(val1, result.value, opts, channel)) {
        $setDelete(set, result.value);
        return true;
      }
    }
    return false;
  }
  function findLooseMatchingPrimitives(prim) {
    if (typeof prim === "undefined") {
      return null;
    }
    if (typeof prim === "object") {
      return void 0;
    }
    if (typeof prim === "symbol") {
      return false;
    }
    if (typeof prim === "string" || typeof prim === "number") {
      return +prim === +prim;
    }
    return true;
  }
  function mapMightHaveLoosePrim(a2, b2, prim, item, opts, channel) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) {
      return altValue;
    }
    var curB = $mapGet(b2, altValue);
    var looseOpts = assign2({}, opts, { strict: false });
    if (typeof curB === "undefined" && !$mapHas(b2, altValue) || !internalDeepEqual(item, curB, looseOpts, channel)) {
      return false;
    }
    return !$mapHas(a2, altValue) && internalDeepEqual(item, curB, looseOpts, channel);
  }
  function setMightHaveLoosePrim(a2, b2, prim) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) {
      return altValue;
    }
    return $setHas(b2, altValue) && !$setHas(a2, altValue);
  }
  function mapHasEqualEntry(set, map, key1, item1, opts, channel) {
    var i2 = getIterator(set);
    var result;
    var key2;
    while ((result = i2.next()) && !result.done) {
      key2 = result.value;
      if (internalDeepEqual(key1, key2, opts, channel) && internalDeepEqual(item1, $mapGet(map, key2), opts, channel)) {
        $setDelete(set, key2);
        return true;
      }
    }
    return false;
  }
  function internalDeepEqual(actual, expected, options, channel) {
    var opts = options || {};
    if (opts.strict ? is(actual, expected) : actual === expected) {
      return true;
    }
    var actualBoxed = whichBoxedPrimitive2(actual);
    var expectedBoxed = whichBoxedPrimitive2(expected);
    if (actualBoxed !== expectedBoxed) {
      return false;
    }
    if (!actual || !expected || typeof actual !== "object" && typeof expected !== "object") {
      return opts.strict ? is(actual, expected) : actual == expected;
    }
    var hasActual = channel.has(actual);
    var hasExpected = channel.has(expected);
    var sentinel;
    if (hasActual && hasExpected) {
      if (channel.get(actual) === channel.get(expected)) {
        return true;
      }
    } else {
      sentinel = {};
    }
    if (!hasActual) {
      channel.set(actual, sentinel);
    }
    if (!hasExpected) {
      channel.set(expected, sentinel);
    }
    return objEquiv(actual, expected, opts, channel);
  }
  function isBuffer(x) {
    if (!x || typeof x !== "object" || typeof x.length !== "number") {
      return false;
    }
    if (typeof x.copy !== "function" || typeof x.slice !== "function") {
      return false;
    }
    if (x.length > 0 && typeof x[0] !== "number") {
      return false;
    }
    return !!(x.constructor && x.constructor.isBuffer && x.constructor.isBuffer(x));
  }
  function setEquiv(a2, b2, opts, channel) {
    if ($setSize(a2) !== $setSize(b2)) {
      return false;
    }
    var iA = getIterator(a2);
    var iB = getIterator(b2);
    var resultA;
    var resultB;
    var set;
    while ((resultA = iA.next()) && !resultA.done) {
      if (resultA.value && typeof resultA.value === "object") {
        if (!set) {
          set = new $Set();
        }
        $setAdd(set, resultA.value);
      } else if (!$setHas(b2, resultA.value)) {
        if (opts.strict) {
          return false;
        }
        if (!setMightHaveLoosePrim(a2, b2, resultA.value)) {
          return false;
        }
        if (!set) {
          set = new $Set();
        }
        $setAdd(set, resultA.value);
      }
    }
    if (set) {
      while ((resultB = iB.next()) && !resultB.done) {
        if (resultB.value && typeof resultB.value === "object") {
          if (!setHasEqualElement(set, resultB.value, opts.strict, channel)) {
            return false;
          }
        } else if (!opts.strict && !$setHas(a2, resultB.value) && !setHasEqualElement(set, resultB.value, opts.strict, channel)) {
          return false;
        }
      }
      return $setSize(set) === 0;
    }
    return true;
  }
  function mapEquiv(a2, b2, opts, channel) {
    if ($mapSize(a2) !== $mapSize(b2)) {
      return false;
    }
    var iA = getIterator(a2);
    var iB = getIterator(b2);
    var resultA;
    var resultB;
    var set;
    var key;
    var item1;
    var item2;
    while ((resultA = iA.next()) && !resultA.done) {
      key = resultA.value[0];
      item1 = resultA.value[1];
      if (key && typeof key === "object") {
        if (!set) {
          set = new $Set();
        }
        $setAdd(set, key);
      } else {
        item2 = $mapGet(b2, key);
        if (typeof item2 === "undefined" && !$mapHas(b2, key) || !internalDeepEqual(item1, item2, opts, channel)) {
          if (opts.strict) {
            return false;
          }
          if (!mapMightHaveLoosePrim(a2, b2, key, item1, opts, channel)) {
            return false;
          }
          if (!set) {
            set = new $Set();
          }
          $setAdd(set, key);
        }
      }
    }
    if (set) {
      while ((resultB = iB.next()) && !resultB.done) {
        key = resultB.value[0];
        item2 = resultB.value[1];
        if (key && typeof key === "object") {
          if (!mapHasEqualEntry(set, a2, key, item2, opts, channel)) {
            return false;
          }
        } else if (!opts.strict && (!a2.has(key) || !internalDeepEqual($mapGet(a2, key), item2, opts, channel)) && !mapHasEqualEntry(set, a2, key, item2, assign2({}, opts, { strict: false }), channel)) {
          return false;
        }
      }
      return $setSize(set) === 0;
    }
    return true;
  }
  function objEquiv(a2, b2, opts, channel) {
    var i2, key;
    if (typeof a2 !== typeof b2) {
      return false;
    }
    if (a2 == null || b2 == null) {
      return false;
    }
    if ($objToString(a2) !== $objToString(b2)) {
      return false;
    }
    if (isArguments2(a2) !== isArguments2(b2)) {
      return false;
    }
    var aIsArray = isArray2(a2);
    var bIsArray = isArray2(b2);
    if (aIsArray !== bIsArray) {
      return false;
    }
    var aIsError = a2 instanceof Error;
    var bIsError = b2 instanceof Error;
    if (aIsError !== bIsError) {
      return false;
    }
    if (aIsError || bIsError) {
      if (a2.name !== b2.name || a2.message !== b2.message) {
        return false;
      }
    }
    var aIsRegex = isRegex2(a2);
    var bIsRegex = isRegex2(b2);
    if (aIsRegex !== bIsRegex) {
      return false;
    }
    if ((aIsRegex || bIsRegex) && (a2.source !== b2.source || flags(a2) !== flags(b2))) {
      return false;
    }
    var aIsDate = isDate2(a2);
    var bIsDate = isDate2(b2);
    if (aIsDate !== bIsDate) {
      return false;
    }
    if (aIsDate || bIsDate) {
      if ($getTime(a2) !== $getTime(b2)) {
        return false;
      }
    }
    if (opts.strict && gPO && gPO(a2) !== gPO(b2)) {
      return false;
    }
    var aWhich = whichTypedArray2(a2);
    var bWhich = whichTypedArray2(b2);
    if (aWhich !== bWhich) {
      return false;
    }
    if (aWhich || bWhich) {
      if (a2.length !== b2.length) {
        return false;
      }
      for (i2 = 0; i2 < a2.length; i2++) {
        if (a2[i2] !== b2[i2]) {
          return false;
        }
      }
      return true;
    }
    var aIsBuffer = isBuffer(a2);
    var bIsBuffer = isBuffer(b2);
    if (aIsBuffer !== bIsBuffer) {
      return false;
    }
    if (aIsBuffer || bIsBuffer) {
      if (a2.length !== b2.length) {
        return false;
      }
      for (i2 = 0; i2 < a2.length; i2++) {
        if (a2[i2] !== b2[i2]) {
          return false;
        }
      }
      return true;
    }
    var aIsArrayBuffer = isArrayBuffer2(a2);
    var bIsArrayBuffer = isArrayBuffer2(b2);
    if (aIsArrayBuffer !== bIsArrayBuffer) {
      return false;
    }
    if (aIsArrayBuffer || bIsArrayBuffer) {
      if (byteLength(a2) !== byteLength(b2)) {
        return false;
      }
      return typeof Uint8Array === "function" && internalDeepEqual(new Uint8Array(a2), new Uint8Array(b2), opts, channel);
    }
    var aIsSAB = isSharedArrayBuffer2(a2);
    var bIsSAB = isSharedArrayBuffer2(b2);
    if (aIsSAB !== bIsSAB) {
      return false;
    }
    if (aIsSAB || bIsSAB) {
      if (sabByteLength(a2) !== sabByteLength(b2)) {
        return false;
      }
      return typeof Uint8Array === "function" && internalDeepEqual(new Uint8Array(a2), new Uint8Array(b2), opts, channel);
    }
    if (typeof a2 !== typeof b2) {
      return false;
    }
    var ka = objectKeys2(a2);
    var kb = objectKeys2(b2);
    if (ka.length !== kb.length) {
      return false;
    }
    ka.sort();
    kb.sort();
    for (i2 = ka.length - 1; i2 >= 0; i2--) {
      if (ka[i2] != kb[i2]) {
        return false;
      }
    }
    for (i2 = ka.length - 1; i2 >= 0; i2--) {
      key = ka[i2];
      if (!internalDeepEqual(a2[key], b2[key], opts, channel)) {
        return false;
      }
    }
    var aCollection = whichCollection2(a2);
    var bCollection = whichCollection2(b2);
    if (aCollection !== bCollection) {
      return false;
    }
    if (aCollection === "Set" || bCollection === "Set") {
      return setEquiv(a2, b2, opts, channel);
    }
    if (aCollection === "Map") {
      return mapEquiv(a2, b2, opts, channel);
    }
    return true;
  }
  deepEqual$1 = function deepEqual2(a2, b2, opts) {
    return internalDeepEqual(a2, b2, opts, getSideChannel());
  };
  return deepEqual$1;
}
requireDeepEqual();
globalThis.onerror = (event) => {
  if (typeof event === "string") {
    reportError(new Error(event));
  } else {
    const errorEvent = event;
    reportError(
      new Error(
        `${errorEvent.filename}:${errorEvent.lineno}:${errorEvent.colno}: ${errorEvent.message}`
      )
    );
  }
  return false;
};
globalThis.reportHoustonError = reportError;
const _hoisted_1 = { class: "flex flex-row justify-between sm:flex sm:items-center" };
const _hoisted_2 = { class: "flex flex-row justify-between" };
const _hoisted_3 = { class: "px-3" };
const _hoisted_4 = { class: "mt-5 py-0.5 px-3" };
const _hoisted_5 = { class: "mt-5 py-0.5 px-3" };
const _hoisted_6 = { class: "my-4 flow-root" };
const _hoisted_7 = { class: "-mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8" };
const _hoisted_8 = { class: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 overflow-x-auto" };
const _hoisted_9 = {
  key: 0,
  class: "flex items-center justify-center"
};
const _hoisted_10 = {
  key: 1,
  class: "min-w-full min-h-full items-center text-center bg-well"
};
const _hoisted_11 = {
  key: 2,
  class: "relative"
};
const _hoisted_12 = { class: "overflow-x-auto" };
const _hoisted_13 = { class: "min-w-full divide-y divide-default" };
const _hoisted_14 = { class: "bg-well" };
const _hoisted_15 = { class: "border border-default border-collapse grid grid-cols-9 w-full" };
const _hoisted_16 = {
  scope: "col",
  class: "px-3 py-3.5 text-left text-sm font-semibold text-default border border-default border-collapse col-span-2"
};
const _hoisted_17 = { class: "bg-accent" };
const _hoisted_18 = { key: 0 };
const _hoisted_19 = { key: 1 };
const _hoisted_20 = { key: 2 };
const _hoisted_21 = { key: 3 };
const _hoisted_22 = { key: 4 };
const _hoisted_23 = { key: 5 };
const _hoisted_24 = { key: 6 };
const _hoisted_25 = { key: 7 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SchedulerView",
  setup(__props) {
    const taskInstances = injectWithCheck(taskInstancesInjectionKey, "taskInstances not provided!");
    const loading = injectWithCheck(loadingInjectionKey, "loading not provided!");
    const myScheduler = injectWithCheck(schedulerInjectionKey, "scheduler not provided!");
    const selectedTask = ref$1();
    const selectedRowIndex = ref$1(null);
    const taskTableRow = ref$1([]);
    async function updateStatusAndTime(task, rowIndex) {
      const target = taskTableRow.value[rowIndex];
      await target.updateTaskStatus(task);
      await target.fetchLatestLog(task);
    }
    async function refreshBtn() {
      loading.value = true;
      await myScheduler.loadTaskInstances();
      loading.value = false;
    }
    const expandedTaskName = ref$1(null);
    function toggleDetails(taskName) {
      expandedTaskName.value = expandedTaskName.value === taskName ? null : taskName;
    }
    const showTaskWizard = ref$1(false);
    async function addTaskBtn() {
      await loadAddTaskComponent();
      showTaskWizard.value = true;
    }
    const addTaskComponent = ref$1();
    async function loadAddTaskComponent() {
      const module = await __vitePreload(() => import("./AddTask.a4bc22d6.js"), true ? ["./AddTask.a4bc22d6.js","./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js","./open-closed.8a6c3d9d.js","./ParameterInput.vue_vue_type_script_setup_true_lang.3058bac2.js","./InfoTile.vue_vue_type_script_setup_true_lang.495d7301.js","./SimpleFormCard.vue_vue_type_script_setup_true_lang.9e11206d.js","./ParameterInput.751c6b04.css"] : void 0, import.meta.url);
      addTaskComponent.value = module.default;
    }
    const showEditTaskWizard = ref$1(false);
    async function editTaskBtn(task) {
      selectedTask.value = task;
      await loadEditTaskComponent();
      showEditTaskWizard.value = true;
    }
    const editTaskComponent = ref$1();
    async function loadEditTaskComponent() {
      const module = await __vitePreload(() => import("./EditTask.f26328dc.js"), true ? ["./EditTask.f26328dc.js","./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js","./open-closed.8a6c3d9d.js","./ParameterInput.vue_vue_type_script_setup_true_lang.3058bac2.js","./InfoTile.vue_vue_type_script_setup_true_lang.495d7301.js","./SimpleFormCard.vue_vue_type_script_setup_true_lang.9e11206d.js","./ParameterInput.751c6b04.css"] : void 0, import.meta.url);
      editTaskComponent.value = module.default;
    }
    async function loadConfirmationDialog(dialogRef) {
      const module = await __vitePreload(() => import("./ConfirmationDialog.88b6780e.js"), true ? ["./ConfirmationDialog.88b6780e.js","./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js","./open-closed.8a6c3d9d.js"] : void 0, import.meta.url);
      dialogRef.value = module.default;
    }
    const showNotesPrompt = ref$1(false);
    async function viewNotesBtn(task) {
      selectedTask.value = task;
      console.log("viewNotesBtn triggered with task:", task);
      await loadViewNotesComponent();
      showNotesPrompt.value = true;
    }
    const viewNotesComponent = ref$1();
    async function loadViewNotesComponent() {
      console.log("load ViewNotes Component triggered in scheduler view");
      const module = await __vitePreload(() => import("./Notes.b9f0e004.js"), true ? ["./Notes.b9f0e004.js","./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js","./open-closed.8a6c3d9d.js"] : void 0, import.meta.url);
      viewNotesComponent.value = module.default;
    }
    const showRunNowPrompt = ref$1(false);
    const runNowDialog = ref$1();
    const running = ref$1(false);
    function runTaskBtn(task, rowIndex) {
      selectedTask.value = task;
      selectedRowIndex.value = rowIndex;
      showRunNowDialog();
    }
    async function showRunNowDialog() {
      await loadConfirmationDialog(runNowDialog);
      showRunNowPrompt.value = true;
    }
    const updateShowRunNowPrompt = (newVal) => {
      showRunNowPrompt.value = newVal;
      if (!newVal) {
        running.value = false;
      }
    };
    const runNowNo = async () => {
      updateShowRunNowPrompt(false);
    };
    const runNowYes = async () => {
      if (selectedTask.value == null || selectedRowIndex.value == null) {
        updateShowRunNowPrompt(false);
        return;
      }
      running.value = true;
      const task = selectedTask.value;
      const rowIndex = selectedRowIndex.value;
      pushNotification(
        new Notification("Task Started", `Task ${task.name} has started running.`, "info", 6e3)
      );
      const row = taskTableRow.value[rowIndex];
      row == null ? void 0 : row.markManualRun(6e4);
      await updateStatusAndTime(task, rowIndex);
      updateShowRunNowPrompt(false);
      try {
        const finalStatus = await myScheduler.runTaskNow(task);
        const lower = (finalStatus || "").toLowerCase();
        if (lower.includes("failed")) {
          pushNotification(
            new Notification(
              "Task Failed",
              `Task ${task.name} failed to complete.`,
              "error",
              6e3
            )
          );
        } else if (lower.includes("inactive") || lower.includes("disabled") || lower.includes("stopped")) {
          pushNotification(
            new Notification(
              "Task Stopped",
              `Task ${task.name} was stopped before completion.`,
              "error",
              6e3
            )
          );
        } else {
          pushNotification(
            new Notification(
              "Task Successful",
              `Task ${task.name} has successfully completed.`,
              "success",
              6e3
            )
          );
        }
      } catch (error) {
        pushNotification(
          new Notification(
            "Task Failed",
            `Task ${task.name} failed to complete.`,
            "error",
            6e3
          )
        );
      } finally {
        running.value = false;
      }
    };
    const showStopNowPrompt = ref$1(false);
    const stopNowDialog = ref$1();
    const stopping = ref$1(false);
    function stopTaskBtn(task, rowIndex) {
      selectedTask.value = task;
      selectedRowIndex.value = rowIndex;
      showStopNowDialog();
    }
    async function showStopNowDialog() {
      await loadConfirmationDialog(stopNowDialog);
      showStopNowPrompt.value = true;
    }
    const updateShowStopNowPrompt = (newVal) => {
      showStopNowPrompt.value = newVal;
      if (!newVal) {
        stopping.value = false;
      }
    };
    const stopNowNo = async () => {
      updateShowStopNowPrompt(false);
    };
    const stopNowYes = async () => {
      if (selectedTask.value == null || selectedRowIndex.value == null) {
        updateShowStopNowPrompt(false);
        return;
      }
      stopping.value = true;
      const task = selectedTask.value;
      const rowIndex = selectedRowIndex.value;
      pushNotification(
        new Notification("Task Stopping", `Task ${task.name} is stopping.`, "info", 6e3)
      );
      const row = taskTableRow.value[rowIndex];
      row == null ? void 0 : row.markManualRun(0);
      await updateStatusAndTime(task, rowIndex);
      updateShowStopNowPrompt(false);
      try {
        await myScheduler.stopTaskNow(task);
        pushNotification(
          new Notification(
            "Task Stopped",
            `Task ${task.name} has successfully been stopped.`,
            "success",
            6e3
          )
        );
      } catch (error) {
        pushNotification(
          new Notification(
            "Task Stop Failed",
            `Task ${task.name} failed to stop.`,
            "error",
            6e3
          )
        );
      } finally {
        stopping.value = false;
      }
    };
    const showRemoveTaskPrompt = ref$1(false);
    const removeTaskDialog = ref$1();
    const removing = ref$1(false);
    function removeTaskBtn(task) {
      console.log("removeTaskBtn triggered");
      selectedTask.value = task;
      showRemoveTaskDialog();
    }
    async function showRemoveTaskDialog() {
      await loadConfirmationDialog(removeTaskDialog);
      showRemoveTaskPrompt.value = true;
    }
    const removeTaskYes = async () => {
      removing.value = true;
      await myScheduler.unregisterTaskInstance(selectedTask.value);
      removing.value = false;
      updateShowRemoveTaskPrompt(false);
      loading.value = true;
      await myScheduler.loadTaskInstances();
      loading.value = false;
    };
    const removeTaskNo = async () => {
      updateShowRemoveTaskPrompt(false);
    };
    const updateShowRemoveTaskPrompt = (newVal) => {
      showRemoveTaskPrompt.value = newVal;
      if (!newVal) {
        removing.value = false;
      }
    };
    const scheduleMode = ref$1("");
    const showThisScheduleWizard = ref$1(false);
    function manageScheduleBtn(task) {
      selectedTask.value = task;
      if (selectedTask.value.schedule && selectedTask.value.schedule.intervals.length >= 1) {
        scheduleMode.value = "edit";
      } else {
        scheduleMode.value = "new";
      }
      showThisScheduleWizardComponent();
    }
    const scheduleWizardComponent = ref$1();
    const loadScheduleWizardComponent = async () => {
      console.log("loadScheduleWizard triggered");
      const module = await __vitePreload(() => import("./ManageSchedule.74ec8872.js"), true ? ["./ManageSchedule.74ec8872.js","./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js","./open-closed.8a6c3d9d.js","./InfoTile.vue_vue_type_script_setup_true_lang.495d7301.js"] : void 0, import.meta.url);
      scheduleWizardComponent.value = module.default;
    };
    async function showThisScheduleWizardComponent() {
      try {
        await loadScheduleWizardComponent();
        showThisScheduleWizard.value = true;
      } catch (error) {
        console.error("Failed to load Schedule Wizard Component:", error);
      }
    }
    const updateShowThisScheduleWizardComponent = (newVal) => {
      showThisScheduleWizard.value = newVal;
    };
    const addScheduleHandler = async (task) => {
      selectedTask.value = task;
      scheduleMode.value = "new";
      await loadScheduleWizardComponent();
      showThisScheduleWizard.value = true;
    };
    const showLogView = ref$1(false);
    async function viewLogsBtn(task) {
      selectedTask.value = task;
      await loadLogViewComponent();
      showLogView.value = true;
    }
    const logViewComponent = ref$1();
    async function loadLogViewComponent() {
      const module = await __vitePreload(() => import("./LogView.5a8a1f68.js"), true ? ["./LogView.5a8a1f68.js","./Modal.vue_vue_type_script_setup_true_lang.d137a95a.js","./open-closed.8a6c3d9d.js"] : void 0, import.meta.url);
      logViewComponent.value = module.default;
    }
    const updateShowLogViewComponent = (newVal) => {
      showLogView.value = newVal;
    };
    const searchItem = ref$1("");
    ref$1("no_filter");
    const sortMode = ref$1(null);
    const sort = ref$1({
      field: null,
      order: 1
    });
    const filteredAndSortedTasks = computed(() => {
      let filteredTasks = taskInstances.value;
      if (searchItem.value) {
        const searchQuery = searchItem.value.toLowerCase();
        filteredTasks = filteredTasks.filter((task) => {
          for (const key in task) {
            const value = task[key];
            if (value && value.toString().toLowerCase().includes(searchQuery)) {
              return true;
            }
          }
          return false;
        });
      }
      return sortTasks(filteredTasks);
    });
    const sortTasks = (tasksToSort) => {
      if (!sort.value.field)
        return tasksToSort;
      const field = sort.value.field;
      return [...tasksToSort].sort((a2, b2) => {
        const factor = sort.value.order === 1 ? 1 : -1;
        const valueA = a2[field];
        const valueB = b2[field];
        if (valueA === null || valueB === null) {
          return valueA === null ? 1 : -1;
        }
        if (typeof valueA === "string" && typeof valueB === "string") {
          return factor * valueA.localeCompare(valueB);
        }
        return factor * (valueA - valueB);
      });
    };
    const sortBy = (field) => {
      if (sort.value.field === field) {
        sort.value.order = -sort.value.order;
      } else {
        sort.value.field = field;
        sort.value.order = 1;
      }
      sortIconFlip();
    };
    function sortIconFlip() {
      if (sort.value.order == 1) {
        sortMode.value = "asc";
      } else if (sort.value.order == -1) {
        sortMode.value = "desc";
      } else {
        sortMode.value = null;
      }
    }
    provide("show-task-wizard", showTaskWizard);
    provide("show-schedule-wizard", showThisScheduleWizard);
    provide("show-edit-task-wizard", showEditTaskWizard);
    provide("show-log-view", showLogView);
    provide("show-notes-view", showNotesPrompt);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_1, [
            _cache[11] || (_cache[11] = createBaseVNode("div", { class: "text-left" }, [
              createBaseVNode("p", { class: "mt-4 text-medium text-default" }, " All tasks currently configured on the system are listed here. ")
            ], -1)),
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                _cache[10] || (_cache[10] = createBaseVNode("label", { class: "block text-medium font-medium leading-6 text-default" }, "Filter By Name", -1)),
                withDirectives(createBaseVNode("input", {
                  type: "text",
                  onKeydown: _cache[0] || (_cache[0] = withKeys(() => {
                  }, ["enter"])),
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchItem.value = $event),
                  class: "text-default bg-default block w-fit input-textlike sm:text-sm",
                  placeholder: "Search..."
                }, null, 544), [
                  [vModelText, searchItem.value]
                ])
              ]),
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("button", {
                  onClick: _cache[2] || (_cache[2] = ($event) => refreshBtn()),
                  class: "btn btn-secondary"
                }, [
                  createVNode(unref(render$h), { class: "w-5 h-5 m-0.5" })
                ])
              ]),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("button", {
                  onClick: _cache[3] || (_cache[3] = ($event) => addTaskBtn()),
                  class: "btn btn-primary"
                }, "Add New Task")
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, [
                unref(loading) ? (openBlock(), createElementBlock("div", _hoisted_9, [
                  createVNode(_sfc_main$b, {
                    width: "w-32",
                    height: "h-32",
                    baseColor: "text-gray-200",
                    fillColor: "fill-gray-500"
                  })
                ])) : unref(taskInstances).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_10, [..._cache[12] || (_cache[12] = [
                  createBaseVNode("h2", null, "No Tasks Found", -1)
                ])])) : (openBlock(), createElementBlock("div", _hoisted_11, [
                  createBaseVNode("div", _hoisted_12, [
                    createBaseVNode("table", _hoisted_13, [
                      createBaseVNode("thead", _hoisted_14, [
                        createBaseVNode("tr", _hoisted_15, [
                          createBaseVNode("th", _hoisted_16, [
                            createBaseVNode("button", {
                              onClick: _cache[4] || (_cache[4] = ($event) => sortBy("name")),
                              class: "flex w-full justify-between whitespace-nowrap"
                            }, [
                              _cache[13] || (_cache[13] = createTextVNode(" Task Name ", -1)),
                              sort.value.field === "name" && sortMode.value == "desc" ? (openBlock(), createBlock(unref(render$f), {
                                key: 0,
                                class: "ml-1 aspect-square w-5 h-5 text-muted"
                              })) : sort.value.field === "name" && sortMode.value == "asc" ? (openBlock(), createBlock(unref(render$e), {
                                key: 1,
                                class: "ml-1 aspect-square w-5 h-5 text-muted"
                              })) : (openBlock(), createBlock(unref(render$g), {
                                key: 2,
                                class: "ml-1 aspect-square w-5 h-5 text-muted"
                              }))
                            ])
                          ]),
                          _cache[14] || (_cache[14] = createBaseVNode("th", {
                            scope: "col",
                            class: "px-3 py-3.5 text-left text-sm font-semibold text-default border border-default border-collapse col-span-1"
                          }, " Status ", -1)),
                          _cache[15] || (_cache[15] = createBaseVNode("th", {
                            scope: "col",
                            class: "px-3 py-3.5 text-left text-sm font-semibold text-default border border-default border-collapse col-span-3"
                          }, " Last Run ", -1)),
                          _cache[16] || (_cache[16] = createBaseVNode("th", {
                            scope: "col",
                            class: "px-3 py-3.5 text-left text-sm font-semibold text-default border border-default border-collapse col-span-1"
                          }, " Scheduled ", -1)),
                          _cache[17] || (_cache[17] = createBaseVNode("th", {
                            scope: "col",
                            class: "px-3 py-3.5 text-left text-sm font-semibold text-default border border-default border-collapse col-span-2"
                          }, " Details ", -1))
                        ])
                      ]),
                      createBaseVNode("tbody", _hoisted_17, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(filteredAndSortedTasks.value, (taskInstance, index2) => {
                          return openBlock(), createBlock(_sfc_main$2, {
                            key: taskInstance.name,
                            task: taskInstance,
                            isExpanded: expandedTaskName.value === taskInstance.name,
                            onRunTask: (task) => runTaskBtn(taskInstance, index2),
                            onStopTask: (task) => stopTaskBtn(taskInstance, index2),
                            onEditTask: _cache[5] || (_cache[5] = (task) => editTaskBtn(task)),
                            onManageSchedule: _cache[6] || (_cache[6] = (task) => manageScheduleBtn(task)),
                            onRemoveTask: _cache[7] || (_cache[7] = (task) => removeTaskBtn(task)),
                            onViewLogs: _cache[8] || (_cache[8] = (task) => viewLogsBtn(task)),
                            onToggleDetails: toggleDetails,
                            onViewNotes: _cache[9] || (_cache[9] = (task) => viewNotesBtn(task)),
                            ref_for: true,
                            ref_key: "taskTableRow",
                            ref: taskTableRow,
                            attr: taskInstance
                          }, null, 8, ["task", "isExpanded", "onRunTask", "onStopTask", "attr"]);
                        }), 128))
                      ])
                    ])
                  ])
                ]))
              ])
            ])
          ])
        ]),
        showTaskWizard.value ? (openBlock(), createElementBlock("div", _hoisted_18, [
          (openBlock(), createBlock(resolveDynamicComponent(addTaskComponent.value), {
            "id-key": "add-task-modal",
            onManageSchedule: addScheduleHandler
          }, null, 32))
        ])) : createCommentVNode("", true),
        showEditTaskWizard.value ? (openBlock(), createElementBlock("div", _hoisted_19, [
          (openBlock(), createBlock(resolveDynamicComponent(editTaskComponent.value), {
            "id-key": "edit-task-modal",
            task: selectedTask.value
          }, null, 8, ["task"]))
        ])) : createCommentVNode("", true),
        showThisScheduleWizard.value ? (openBlock(), createElementBlock("div", _hoisted_20, [
          (openBlock(), createBlock(resolveDynamicComponent(scheduleWizardComponent.value), {
            onClose: updateShowThisScheduleWizardComponent,
            task: selectedTask.value,
            mode: scheduleMode.value
          }, null, 40, ["task", "mode"]))
        ])) : createCommentVNode("", true),
        showRunNowPrompt.value ? (openBlock(), createElementBlock("div", _hoisted_21, [
          (openBlock(), createBlock(resolveDynamicComponent(runNowDialog.value), {
            onClose: updateShowRunNowPrompt,
            showFlag: showRunNowPrompt.value,
            title: "Run Task",
            message: "Do you wish to run this task now?",
            confirmYes: runNowYes,
            confirmNo: runNowNo,
            operating: running.value,
            operation: "starting"
          }, null, 40, ["showFlag", "operating"]))
        ])) : createCommentVNode("", true),
        showStopNowPrompt.value ? (openBlock(), createElementBlock("div", _hoisted_22, [
          (openBlock(), createBlock(resolveDynamicComponent(stopNowDialog.value), {
            onClose: updateShowStopNowPrompt,
            showFlag: showStopNowPrompt.value,
            title: "Stop Task",
            message: "Do you wish to stop this task now?",
            confirmYes: stopNowYes,
            confirmNo: stopNowNo,
            operating: stopping.value,
            operation: "stopping"
          }, null, 40, ["showFlag", "operating"]))
        ])) : createCommentVNode("", true),
        showRemoveTaskPrompt.value ? (openBlock(), createElementBlock("div", _hoisted_23, [
          (openBlock(), createBlock(resolveDynamicComponent(removeTaskDialog.value), {
            onClose: updateShowRemoveTaskPrompt,
            showFlag: showRemoveTaskPrompt.value,
            title: "Remove Task",
            message: "Are you sure you want to remove this task?",
            confirmYes: removeTaskYes,
            confirmNo: removeTaskNo,
            operating: removing.value,
            operation: "removing"
          }, null, 40, ["showFlag", "operating"]))
        ])) : createCommentVNode("", true),
        showNotesPrompt.value ? (openBlock(), createElementBlock("div", _hoisted_24, [
          (openBlock(), createBlock(resolveDynamicComponent(viewNotesComponent.value), {
            "id-key": "view-notes-task-modal",
            task: selectedTask.value
          }, null, 8, ["task"]))
        ])) : createCommentVNode("", true),
        showLogView.value ? (openBlock(), createElementBlock("div", _hoisted_25, [
          (openBlock(), createBlock(resolveDynamicComponent(logViewComponent.value), {
            onClose: updateShowLogViewComponent,
            task: selectedTask.value
          }, null, 40, ["task"]))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
class TaskInstance {
  constructor(name, template, parameters, schedule, notes) {
    __publicField(this, "name");
    __publicField(this, "template");
    __publicField(this, "parameters");
    __publicField(this, "schedule");
    __publicField(this, "notes");
    this.name = name;
    this.template = template;
    this.parameters = parameters;
    this.schedule = schedule;
    this.notes = notes;
  }
}
class TaskSchedule {
  constructor(enabled, intervals) {
    __publicField(this, "enabled");
    __publicField(this, "intervals");
    this.enabled = enabled;
    this.intervals = intervals;
  }
}
class TaskScheduleInterval {
  constructor(intervalData) {
    __publicField(this, "dayOfWeek");
    Object.keys(intervalData).forEach((key) => {
      this[key] = intervalData[key];
    });
  }
}
class TaskTemplate {
  constructor(name, parameterSchema) {
    __publicField(this, "name");
    __publicField(this, "parameterSchema");
    this.name = name;
    this.parameterSchema = parameterSchema;
  }
  createTaskInstance(parameters) {
    return TaskInstance;
  }
}
class ZFSReplicationTaskTemplate extends TaskTemplate {
  constructor() {
    const name = "ZFS Replication Task";
    const parameterSchema = new ParameterNode("ZFS Replication Task Config", "zfsRepConfig").addChild(new ZfsDatasetParameter("Source Dataset", "sourceDataset", "", 0, "", "", "")).addChild(new ZfsDatasetParameter("Destination Dataset", "destDataset", "", 22, "", "", "")).addChild(
      new ParameterNode("Send Options", "sendOptions").addChild(new BoolParameter("Compressed", "compressed_flag", false)).addChild(new BoolParameter("Raw", "raw_flag", false)).addChild(new BoolParameter("Recursive", "recursive_flag", false)).addChild(new IntParameter("MBuffer Size", "mbufferSize", 1)).addChild(new StringParameter("MBuffer Unit", "mbufferUnit", "G")).addChild(new BoolParameter("Custom Name Flag", "customName_flag", false)).addChild(new StringParameter("Custom Name", "customName", "")).addChild(new StringParameter("Transfer Method", "transferMethod", "")).addChild(new BoolParameter("Allow Overwrite", "allowOverwrite", false)).addChild(new BoolParameter("Use Existing Destination", "useExistingDest", false))
    ).addChild(
      new ParameterNode("Snapshot Retention", "snapshotRetention").addChild(new SnapshotRetentionParameter("Source", "source", 0, "minutes")).addChild(new SnapshotRetentionParameter("Destination", "destination", 0, "minutes"))
    );
    super(name, parameterSchema);
  }
  createTaskInstance(parameters, schedule) {
    return TaskInstance;
  }
}
class AutomatedSnapshotTaskTemplate extends TaskTemplate {
  constructor() {
    const name = "Automated Snapshot Task";
    const parameterSchema = new ParameterNode("Automated Snapshot Task Config", "autoSnapConfig").addChild(new ZfsDatasetParameter("Filesystem", "filesystem", "", 0, "", "", "")).addChild(new BoolParameter("Recursive", "recursive_flag", false)).addChild(new BoolParameter("Custom Name Flag", "customName_flag", false)).addChild(new StringParameter("Custom Name", "customName", "")).addChild(
      new SnapshotRetentionParameter("Snapshot Retention", "snapshotRetention", 0, "minutes")
    );
    super(name, parameterSchema);
  }
  createTaskInstance(parameters, schedule) {
    return TaskInstance;
  }
}
class RsyncTaskTemplate extends TaskTemplate {
  constructor() {
    const name = "Rsync Task";
    const directionSelection = [
      new SelectionOption("push", "Push"),
      new SelectionOption("pull", "Pull")
    ];
    const parameterSchema = new ParameterNode("Rsync Task Config", "rsyncConfig").addChild(new StringParameter("Local Path", "local_path", "")).addChild(new LocationParameter("Target Information", "target_info", "", 22, "", "", "")).addChild(new SelectionParameter("Direction", "direction", "push", directionSelection)).addChild(
      new ParameterNode("Rsync Options", "rsyncOptions").addChild(new StringParameter("Log File Path", "log_file_path", "")).addChild(new BoolParameter("Archive", "archive_flag", true)).addChild(new BoolParameter("Recursive", "recursive_flag", false)).addChild(new BoolParameter("Compressed", "compressed_flag", false)).addChild(new BoolParameter("Delete", "delete_flag", false)).addChild(new BoolParameter("Quiet", "quiet_flag", false)).addChild(new BoolParameter("Preserve Times", "times_flag", false)).addChild(new BoolParameter("Preserve Hard Links", "hardLinks_flag", false)).addChild(new BoolParameter("Preserve Permissions", "permissions_flag", false)).addChild(new BoolParameter("Preserve Extended Attributes", "xattr_flag", false)).addChild(new IntParameter("Limit Bandwidth", "bandwidth_limit_kbps", 0)).addChild(new StringParameter("Include", "include_pattern", "")).addChild(new StringParameter("Exclude", "exclude_pattern", "")).addChild(new StringParameter("Additional Custom Arguments", "custom_args", "")).addChild(new BoolParameter("Parallel Transfer", "parallel_flag", false)).addChild(new IntParameter("Threads", "parallel_threads", 0))
    );
    super(name, parameterSchema);
  }
  createTaskInstance(parameters, schedule) {
    return TaskInstance;
  }
}
class ScrubTaskTemplate extends TaskTemplate {
  constructor() {
    const name = "Scrub Task";
    const parameterSchema = new ParameterNode("Scrub Task Config", "scrubConfig").addChild(new ZfsDatasetParameter("Pool", "pool", "", 0, "", "", ""));
    super(name, parameterSchema);
  }
  createTaskInstance(parameters, schedule) {
    return TaskInstance;
  }
}
class CustomTaskTemplate extends TaskTemplate {
  constructor() {
    const name = "Custom Task";
    const parameterSchema = new ParameterNode("Custom Task Config", "customTaskConfig").addChild(new BoolParameter("FilePath_flag", "filePath_flag", false)).addChild(new BoolParameter("Command_flag", "command_flag", false)).addChild(new StringParameter("FilePath", "filePath", "")).addChild(new StringParameter("Command", "command", ""));
    super(name, parameterSchema);
  }
  createTaskInstance(parameters, schedule) {
    return TaskInstance;
  }
}
class SmartTestTemplate extends TaskTemplate {
  constructor() {
    const name = "SMART Test";
    const parameterSchema = new ParameterNode("SMART Test Config", "smartTestConfig").addChild(new StringParameter("Disks", "disks", "")).addChild(new StringParameter("Test Type", "testType", ""));
    super(name, parameterSchema);
  }
  createTaskInstance(parameters, schedule) {
    return TaskInstance;
  }
}
class CloudSyncTaskTemplate extends TaskTemplate {
  constructor() {
    const name = "Cloud Sync Task";
    const providerSelectionOptions = Object.keys(cloudSyncProviders).map((providerKey) => {
      const provider = cloudSyncProviders[providerKey];
      return new SelectionOption(providerKey, provider.name);
    });
    const directionSelection = [
      new SelectionOption("push", "Push"),
      new SelectionOption("pull", "Pull")
    ];
    const transferModeSelection = [
      new SelectionOption("copy", "Copy"),
      new SelectionOption("move", "Move"),
      new SelectionOption("sync", "Sync")
    ];
    const cutoffModeSelection = [
      new SelectionOption("hard", "Hard"),
      new SelectionOption("soft", "Soft"),
      new SelectionOption("cautious", "Cautious")
    ];
    const initialProviderKey = providerSelectionOptions[0].value;
    cloudSyncProviders[initialProviderKey];
    const parameterSchema = new ParameterNode("Cloud Sync Task Config", "cloudSyncConfig").addChild(new StringParameter("Local Path", "local_path", "")).addChild(new StringParameter("Target Path", "target_path", "")).addChild(new SelectionParameter("Direction", "direction", "push", directionSelection)).addChild(new SelectionParameter("Transfer Type", "type", "copy", transferModeSelection)).addChild(new SelectionParameter("Provider", "provider", initialProviderKey, providerSelectionOptions)).addChild(new StringParameter("Rclone Remote", "rclone_remote", "")).addChild(
      new ParameterNode("Rclone Options", "rcloneOptions").addChild(new StringParameter("Log File Path", "log_file_path", "")).addChild(new BoolParameter("Check First", "check_first_flag", false)).addChild(new BoolParameter("Checksum", "checksum_flag", false)).addChild(new BoolParameter("Update", "update_flag", false)).addChild(new BoolParameter("Ignore Existing", "ignore_existing_flag", false)).addChild(new BoolParameter("Dry Run", "dry_run_flag", false)).addChild(new IntParameter("Number of Transfers", "transfers", 4)).addChild(new StringParameter("Include Pattern", "include_pattern", "")).addChild(new StringParameter("Exclude Pattern", "exclude_pattern", "")).addChild(new StringParameter("Additional Custom Arguments", "custom_args", "")).addChild(new IntParameter("Limit Bandwidth", "bandwidth_limit_kbps", 0)).addChild(new BoolParameter("Ignore Size", "ignore_size_flag", false)).addChild(new BoolParameter("Inplace", "inplace_flag", false)).addChild(new IntParameter("Multi-Thread Chunk Size", "multithread_chunk_size", 0)).addChild(new StringParameter("Multi-Thread Chunk Size Unit", "multithread_chunk_size_unit", "MiB")).addChild(new IntParameter("Multi-Thread Cutoff", "multithread_cutoff", 0)).addChild(new StringParameter("Multi-Thread Cutoff Unit", "multithread_cutoff_unit", "MiB")).addChild(new IntParameter("Multi-Thread Streams", "multithread_streams", 0)).addChild(new IntParameter("Multi-Thread Write Buffer Size", "multithread_write_buffer_size", 0)).addChild(new StringParameter("Multi-Thread Write Buffer Size Unit", "multithread_write_buffer_size_unit", "KiB")).addChild(new StringParameter("Files From", "include_from_path", "")).addChild(new StringParameter("Exclude From", "exclude_from_path", "")).addChild(new IntParameter("Max Transfer Size", "max_transfer_size", 0)).addChild(new IntParameter("Max Transfer Size Unit", "max_transfer_size_unit", 0)).addChild(new SelectionParameter("Cutoff Mode", "cutoff_mode", "HARD", cutoffModeSelection)).addChild(new BoolParameter("No Traverse", "no_traverse_flag", false))
    );
    super(name, parameterSchema);
  }
  createTaskInstance(parameters, schedule) {
    return TaskInstance;
  }
}
const daemon = {
  call(method, args = []) {
    const bus = cockpit.dbus("org.houston.Scheduler", { bus: "system" });
    return bus.call("/org/houston/Scheduler", "org.houston.Scheduler1", method, args);
  },
  createTask: (tpl, env, script2, schedule, notes = "", run_as = "auto") => daemon.call("CreateTask", [tpl, env, script2, JSON.stringify(schedule || {}), notes, run_as]),
  updateTask: (tpl, oldName, env, script2, schedule, notes = "", run_as = "auto") => daemon.call("UpdateTask", [tpl, oldName, env, script2, JSON.stringify(schedule || {}), notes, run_as]),
  runNow: (tpl, name) => daemon.call("RunNow", [tpl, name]),
  enableSchedule: (tpl, name, enabled) => daemon.call("EnableSchedule", [tpl, name, enabled ? "true" : "false"]),
  deleteTask: (tpl, name) => daemon.call("DeleteTask", [tpl, name]),
  listTasks: (scope) => daemon.call("ListTasks", [scope]),
  listClientBackupFolders: () => daemon.call("ListClientBackupFolders", []),
  getStatus: (tpl, name) => daemon.call("GetStatus", [tpl, name]),
  stopTask: (tpl, name) => daemon.call("StopTask", [tpl, name]),
  clearSchedule: (tpl, name) => daemon.call("ClearSchedule", [tpl, name])
};
const textDecoder$2 = new TextDecoder("utf-8");
async function runCommand$2(argv, opts = { superuser: "try" }) {
  const proc = await unwrap(
    server$1.execute(new Command(argv, opts))
  );
  const rawStdout = proc.stdout;
  const rawStderr = proc.stderr;
  const stdout = rawStdout instanceof Uint8Array ? textDecoder$2.decode(rawStdout) : String(rawStdout != null ? rawStdout : "");
  const stderr = rawStderr instanceof Uint8Array ? textDecoder$2.decode(rawStderr) : String(rawStderr != null ? rawStderr : "");
  return { stdout, stderr, exitStatus: proc.exitStatus };
}
const errorString$1 = (e) => {
  var _a2;
  return (_a2 = e == null ? void 0 : e.message) != null ? _a2 : String(e);
};
class TaskExecutionLog {
  constructor(entries) {
    __publicField(this, "entries");
    this.entries = entries;
  }
  async fullUnitNameForLogs(ti) {
    const templateName = formatTemplateName(ti.template.name);
    const base = `houston_scheduler_${templateName}_${ti.name}`;
    const scope = ti.scope;
    if (scope === "user") {
      const cockpitUser = await window.cockpit.user();
      const uid2 = cockpitUser == null ? void 0 : cockpitUser.id;
      return `${base}_u${uid2}`;
    }
    return base;
  }
  async getEntriesFor(taskInstance, untilTime) {
    const houstonSchedulerPrefix = "houston_scheduler_";
    const templateName = formatTemplateName(taskInstance.template.name);
    const taskName = taskInstance.name;
    const fullTaskName = `${houstonSchedulerPrefix}${templateName}_${taskName}`;
    const serviceUnit = `${fullTaskName}.service`;
    try {
      if (!untilTime) {
        const logCommand = [
          "journalctl",
          "-u",
          serviceUnit,
          "--no-pager",
          "--all"
        ];
        const { stdout: stdout2 } = await runCommand$2(logCommand, { superuser: "try" });
        return (stdout2 || "").trim();
      }
      const command = [
        "journalctl",
        "-u",
        serviceUnit,
        "--until",
        untilTime,
        "--no-pager",
        "--all"
      ];
      const { stdout } = await runCommand$2(command, { superuser: "try" });
      const taskLogData = (stdout || "").trim();
      return taskLogData;
    } catch (error) {
      console.error(errorString$1(error));
      return "";
    }
  }
  async getLatestEntryFor(taskInstance) {
    try {
      const unit = await this.fullUnitNameForLogs(taskInstance);
      const isUserScope = taskInstance.scope === "user";
      if (isUserScope) {
        const templateName = formatTemplateName(taskInstance.template.name);
        const st = await daemon.getStatus(templateName, taskInstance.name);
        const show = String((st == null ? void 0 : st.service) || "");
        const props = new Map(
          (show || "").split(/\r?\n/).map((line) => {
            const i2 = line.indexOf("=");
            return i2 > 0 ? [line.slice(0, i2), line.slice(i2 + 1)] : [line, ""];
          })
        );
        const rawResult = (props.get("Result") || "").toString().toLowerCase();
        const exitCode2 = rawResult === "success" ? 0 : 1;
        const startTime2 = props.get("ActiveEnterTimestamp") || "";
        const finishTime2 = props.get("InactiveEnterTimestamp") || props.get("ExecMainExitTimestamp") || "";
        const output2 = "";
        return new TaskExecutionResult(exitCode2, output2, startTime2, finishTime2);
      }
      const showCmd = [
        "systemctl",
        "show",
        `${unit}.service`,
        "-p",
        "ExecMainStatus,ExecMainStartTimestamp,ExecMainExitTimestamp,ActiveEnterTimestamp,InactiveEnterTimestamp",
        "--no-pager"
      ];
      const showRes = await runCommand$2(showCmd, { superuser: "try" });
      const kv = Object.fromEntries(
        (showRes.stdout || "").split("\n").filter((l) => l.includes("=")).map((l) => l.split("=", 2))
      );
      const rawStatus = kv["ExecMainStatus"];
      const exitCode = Number.isFinite(Number(rawStatus)) ? Number(rawStatus) : 0;
      const startTime = kv["ExecMainStartTimestamp"] || kv["ActiveEnterTimestamp"] || "";
      const finishTime = kv["ExecMainExitTimestamp"] || kv["InactiveEnterTimestamp"] || "";
      let output = "";
      const baseLogCmd = [
        "journalctl",
        "-q",
        "--output=cat",
        "-u",
        `${unit}.service`,
        "--no-pager",
        "--all"
      ];
      if (startTime) {
        const logCmd = [...baseLogCmd, "--since", startTime];
        try {
          const logRes = await runCommand$2(logCmd, { superuser: "try" });
          output = (logRes.stdout || "").replace(/^-- Logs begin at.*\n?/m, "");
        } catch (e) {
          const msg = errorString$1(e);
          if (!/No journal files were opened|not seeing messages/i.test(msg)) {
            console.warn("journalctl (since) failed:", msg);
          }
        }
      }
      if (!output) {
        try {
          const fallbackCmd = [...baseLogCmd, "-n", "200"];
          const logRes = await runCommand$2(fallbackCmd, { superuser: "try" });
          output = (logRes.stdout || "").replace(/^-- Logs begin at.*\n?/m, "");
        } catch (e) {
          const msg = errorString$1(e);
          if (!/No journal files were opened|not seeing messages/i.test(msg)) {
            console.warn("journalctl (fallback) failed:", msg);
          }
        }
      }
      return new TaskExecutionResult(exitCode, output, startTime, finishTime);
    } catch (e) {
      console.warn("getLatestEntryFor failed:", errorString$1(e));
      return false;
    }
  }
  async wasTaskRecentlyCompleted(taskInstance) {
    const latestEntry = await this.getLatestEntryFor(taskInstance);
    if (!latestEntry)
      return false;
    if (typeof latestEntry.exitCode === "number" && latestEntry.exitCode !== 0) {
      return false;
    }
    const tsSource = latestEntry.finishDate || latestEntry.startDate;
    if (!tsSource) {
      return false;
    }
    const finishDate = new Date(tsSource).getTime();
    if (!Number.isFinite(finishDate)) {
      return false;
    }
    const currentTime = Date.now();
    const threshold = 10 * 60 * 1e3;
    return currentTime - finishDate <= threshold;
  }
}
class TaskExecutionResult {
  constructor(exitCode, output, startDate, finishDate) {
    __publicField(this, "exitCode");
    __publicField(this, "output");
    __publicField(this, "startDate");
    __publicField(this, "finishDate");
    this.exitCode = exitCode;
    this.output = output;
    this.startDate = startDate;
    this.finishDate = finishDate;
  }
}
const get_tasks_script = `import os
import re
import json
import subprocess

currentTaskTemplates = ['ZfsReplicationTask', 'AutomatedSnapshotTask', 'ScrubTask', 'RsyncTask', 'SmartTest', 'CustomTask', 'CloudSyncTask']


class TaskScheduleInterval:
    def __init__(self, interval_data):
        self.__dict__ = interval_data

class TaskSchedule:
    def __init__(self, enabled, intervals):
        self.enabled = enabled
        self.intervals = [TaskScheduleInterval(interval).__dict__ for interval in intervals]

class TaskInstance:
    def __init__(self, name, template, parameters, schedule, notes):
        self.name = name
        self.template = template
        self.parameters = parameters
        self.schedule = schedule.__dict__
        self.notes = notes
        

def check_task_status(full_unit_name):
    # check the status of the timer
    subprocess.run(['sudo', 'systemctl', 'status', f'{full_unit_name}.timer'], check=True)


def read_env_parameters(env_path):
    parameters = {}
    with open(env_path, 'r') as env_file:
        for line in env_file:
            match = re.match(r'^([^=]+)=(.*)$', line.strip())
            if match:
                key, value = match.groups()
                parameters[key.strip()] = value.strip()
    return parameters

def read_json_schedule(json_path):
    with open(json_path, 'r') as json_file:
        return json.load(json_file)

def read_txt_notes(txt_path):
    with open(txt_path, 'r') as txt_file:
        return txt_file.read() 

def find_template_basenames(template_dir):
    base_names = {}
    for file in os.listdir(template_dir):
        if file.endswith('.service'):
            base_name = os.path.splitext(file)[0]
            base_names[base_name] = None  # Using None as a placeholder
            
            # print(f"Loaded template basename: {base_name}")  # Debug: Check loaded template names
            
    return base_names


def find_valid_task_data_files(system_dir, template_basenames):
    valid_files = {}
    # Adjusted regex to match up to the last dot before extension
    file_regex = re.compile(r"^houston_scheduler_([^_]+)_(.*)\\.(env|json|txt)$")

    for file in os.listdir(system_dir):
        match = file_regex.match(file)
        if match:
            template_name, task_name_with_suffix, suffix = match.groups()
            # Extract the task name correctly before appending the file to the list
            if template_name in template_basenames:
                if template_name not in valid_files:
                    valid_files[template_name] = []
                # Include the correct file format with the suffix
                valid_files[template_name].append(file)

    return valid_files

def create_task_instances(system_dir, valid_files):
    task_instances = []

    for template, files in valid_files.items():
        paired_files = {}

        for file in files:
            full_base_name, ext = os.path.splitext(file)
            # Remove the prefix and then split properly
            task_name = full_base_name[len("houston_scheduler_" + template + "_"):]  # This strips the prefix and template

            if task_name not in paired_files:
                paired_files[task_name] = {}
            paired_files[task_name][ext] = file

        for task_name, file_dict in paired_files.items():
            if '.env' in file_dict:
                env_file_name = file_dict['.env']
                parameters = read_env_parameters(os.path.join(system_dir, env_file_name))
                
                if '.json' in file_dict:
                    json_file_name = file_dict['.json']
                    schedule_data = read_json_schedule(os.path.join(system_dir, json_file_name))
                    schedule = TaskSchedule(schedule_data['enabled'], schedule_data['intervals'])
                else:
                    schedule = TaskSchedule(False, [])
                
                if '.txt' in file_dict:
                    notes_file_name = file_dict['.txt']
                    notes_file_path = os.path.join(system_dir, notes_file_name)
                    notes = read_txt_notes(notes_file_path)  # Read the notes from the .txt file
                else:
                    # notes = json.dumps(file_dict, indent=4)  # Convert dict to JSON string for readability
                    notes = "" 

                task_instance = TaskInstance(task_name, template, parameters, schedule, notes)
                task_instances.append(task_instance)

    return json.dumps([instance.__dict__ for instance in task_instances], indent=4)

def main():
    system_dir = '/etc/systemd/system/'

    # Check files in the system directory for those containing any of the task template names
    valid_task_data_files = find_valid_task_data_files(system_dir, currentTaskTemplates)
    
    task_instances = create_task_instances(system_dir, valid_task_data_files)
    print(task_instances)   
    
if __name__ == "__main__":
	main()`;
const textDecoder$1 = new TextDecoder("utf-8");
const errorString = (e) => {
  var _a2;
  return (_a2 = e == null ? void 0 : e.message) != null ? _a2 : String(e);
};
async function runCommand$1(argv, opts = { superuser: "try" }) {
  const proc = await unwrap(
    server$1.execute(new Command(argv, opts))
  );
  const rawStdout = proc.stdout;
  const rawStderr = proc.stderr;
  const stdout = rawStdout instanceof Uint8Array ? textDecoder$1.decode(rawStdout) : String(rawStdout != null ? rawStdout : "");
  let stderr;
  if (typeof rawStderr === "string") {
    stderr = rawStderr;
  } else if (rawStderr instanceof Uint8Array) {
    stderr = textDecoder$1.decode(rawStderr);
  } else {
    stderr = "";
  }
  return { stdout, stderr, exitStatus: proc.exitStatus };
}
class Scheduler {
  constructor(taskTemplates, taskInstances) {
    __publicField(this, "taskTemplates");
    __publicField(this, "taskInstances");
    __publicField(this, "backend", "legacy");
    __publicField(this, "backendInitialized", false);
    __publicField(this, "statusCache", /* @__PURE__ */ new Map());
    this.taskTemplates = taskTemplates;
    this.taskInstances = taskInstances;
  }
  async init() {
    if (this.backendInitialized)
      return;
    this.backend = "legacy";
    this.backendInitialized = true;
  }
  async ensureBackend() {
    if (!this.backendInitialized) {
      try {
        await this.init();
      } catch (e) {
        console.warn("ensureBackend: falling back to legacy:", e);
        this.backend = "legacy";
        this.backendInitialized = true;
      }
    }
  }
  async fetchStatus(ti) {
    const tplKey = this.templateKey(ti, this.normalizeTemplateKey(ti.template.name));
    const key = `${tplKey}:${ti.name}`;
    const now = Date.now();
    const hit = this.statusCache.get(key);
    if (hit && now - hit.ts < 1e3) {
      return hit.st;
    }
    const st = await daemon.getStatus(tplKey, ti.name);
    this.statusCache.set(key, { ts: now, st });
    return st;
  }
  async readTextRoot(path) {
    const file = new File(server$1, path);
    const content = await unwrap(file.read({ superuser: "try" }));
    return content != null ? content : "";
  }
  isDaemon() {
    return false;
  }
  templateKey(ti, hint) {
    return ti._templateKey || (hint ? this.normalizeTemplateKey(hint) : "") || this.normalizeTemplateKey(ti.template.name);
  }
  async unitNameFor(ti) {
    var _a2;
    const key = this.templateKey(ti);
    const scope = ti.scope;
    if (scope === "system" || !this.isDaemon()) {
      return `houston_scheduler_${key}_${ti.name}`;
    }
    const uid2 = (_a2 = await window.cockpit.user()) == null ? void 0 : _a2.id;
    return `houston_scheduler_${key}_${ti.name}_u${uid2}`;
  }
  async unitNameFromParts(templateKey, taskName, scope) {
    var _a2;
    if (scope === "system" || !this.isDaemon())
      return `houston_scheduler_${templateKey}_${taskName}`;
    const uid2 = (_a2 = await window.cockpit.user()) == null ? void 0 : _a2.id;
    return `houston_scheduler_${templateKey}_${taskName}_u${uid2}`;
  }
  usToMs(us) {
    return us && Number.isFinite(us) ? Math.floor(us / 1e3) : 0;
  }
  parseListTasks(raw) {
    try {
      if (Array.isArray(raw)) {
        if (raw.length === 1 && typeof raw[0] === "string") {
          return JSON.parse(raw[0] || "[]");
        }
        return raw;
      }
      const s2 = typeof raw === "string" ? raw : raw && typeof raw === "object" && typeof raw.value === "string" ? raw.value : raw && typeof raw.toString === "function" ? raw.toString() : "";
      return JSON.parse(s2 || "[]");
    } catch (e) {
      console.warn("ListTasks parse failed:", e, raw);
      return [];
    }
  }
  async getDisplayMeta(ti) {
    var _a2;
    await this.ensureBackend();
    const log = new TaskExecutionLog([]);
    this.templateKey(ti, this.normalizeTemplateKey(ti.template.name));
    const unit = await this.unitNameFor(ti);
    let timerOut = "", serviceOut = "";
    const preferTimer = !!((_a2 = ti == null ? void 0 : ti.schedule) == null ? void 0 : _a2.enabled);
    const pickStatusSource = (t, s2) => {
      if (s2.active === "active" && s2.sub === "running")
        return serviceOut;
      if (s2.active === "failed" || s2.sub === "failed")
        return serviceOut;
      return preferTimer ? timerOut : serviceOut;
    };
    if (this.isDaemon()) {
      try {
        const st = await this.fetchStatus(ti);
        const u2 = String((st == null ? void 0 : st.unit) || unit);
        timerOut = String((st == null ? void 0 : st.timer) || "");
        serviceOut = String((st == null ? void 0 : st.service) || "");
        const t = this.parseShow(timerOut);
        const s2 = this.parseShow(serviceOut);
        const source = pickStatusSource(t, s2);
        const statusText = await this.parseTaskStatus(source, u2, log, ti);
        const lastRunUs = t.lastTriggerUSec || s2.serviceStartUSec || 0;
        const nextRunUs = t.nextElapseUSec || 0;
        return {
          unit: u2,
          statusText: String(statusText || "\u2014"),
          lastRunMs: this.usToMs(Number(lastRunUs)),
          nextRunMs: this.usToMs(Number(nextRunUs))
        };
      } catch {
      }
    }
    try {
      try {
        const { stdout: stdout2, stderr: stderr2, exitStatus: exitStatus2 } = await runCommand$1(
          [
            "systemctl",
            "show",
            `${unit}.timer`,
            "--no-pager",
            "--property",
            "LoadState,ActiveState,SubState,Result,LastTriggerUSec,NextElapseUSecRealtime,MergedUnit"
          ],
          { superuser: "try" }
        );
        if (exitStatus2 === 0) {
          timerOut = stdout2;
        } else if (!/not found/i.test(stdout2) && !/not found/i.test(stderr2)) {
          console.warn(`getDisplayMeta(timer ${unit}):`, stderr2 || stdout2);
        }
      } catch (e) {
        console.warn(`getDisplayMeta(timer ${unit}) error:`, errorString(e));
      }
      const { stdout, stderr, exitStatus } = await runCommand$1(
        [
          "systemctl",
          "show",
          `${unit}.service`,
          "--no-pager",
          "--property",
          "LoadState,ActiveState,SubState,Result,ActiveEnterTimestampUSec,ActiveEnterTimestamp,ExecMainStartTimestampUSec,ExecMainStartTimestamp,MergedUnit"
        ],
        { superuser: "try" }
      );
      if (exitStatus !== 0) {
        throw new Error(stderr || stdout || `systemctl show ${unit}.service failed with ${exitStatus}`);
      }
      serviceOut = stdout;
      const t = this.parseShow(timerOut);
      const s2 = this.parseShow(serviceOut);
      const source = pickStatusSource(t, s2);
      const statusText = await this.parseTaskStatus(source, unit, log, ti);
      const lastRunUs = t.lastTriggerUSec || s2.serviceStartUSec || 0;
      const nextRunUs = t.nextElapseUSec || 0;
      return {
        unit,
        statusText: String(statusText || "\u2014"),
        lastRunMs: this.usToMs(Number(lastRunUs)),
        nextRunMs: this.usToMs(nextRunUs)
      };
    } catch (e) {
      console.warn(`getDisplayMeta(service ${unit}) failed:`, errorString(e));
      return { unit, statusText: "\u2014", lastRunMs: 0 };
    }
  }
  formatLocal(ms) {
    if (!ms)
      return "\u2014";
    const d2 = new Date(ms);
    const weekday = new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(d2);
    const tzShort = (() => {
      var _a2, _b;
      const parts = new Intl.DateTimeFormat("en-US", { timeZoneName: "short" }).formatToParts(d2);
      let v2 = (_b = (_a2 = parts.find((p2) => p2.type === "timeZoneName")) == null ? void 0 : _a2.value) != null ? _b : "";
      if (/^GMT[+-]/i.test(v2) || v2 === "") {
        const m = d2.toString().match(/\(([^)]+)\)$/);
        if (m && m[1]) {
          const abbr = m[1].split(/\s+/).map((w2) => w2[0]).join("");
          if (abbr && abbr.length <= 5)
            v2 = abbr;
        }
      }
      return v2;
    })();
    const y2 = d2.getFullYear();
    const mo = String(d2.getMonth() + 1).padStart(2, "0");
    const da = String(d2.getDate()).padStart(2, "0");
    const hh = String(d2.getHours()).padStart(2, "0");
    const mm = String(d2.getMinutes()).padStart(2, "0");
    const ss = String(d2.getSeconds()).padStart(2, "0");
    return `${weekday} ${y2}-${mo}-${da} ${hh}:${mm}:${ss}${tzShort ? " " + tzShort : ""}`;
  }
  normalizeTemplateKey(x) {
    var _a2;
    const s2 = String(x != null ? x : "").trim();
    if (!s2)
      return s2;
    const known = /* @__PURE__ */ new Set([
      "ZfsReplicationTask",
      "AutomatedSnapshotTask",
      "RsyncTask",
      "ScrubTask",
      "SmartTest",
      "CloudSyncTask",
      "CustomTask"
    ]);
    if (known.has(s2))
      return s2;
    const key = s2.replace(/[\s_-]+/g, "").toLowerCase();
    const map = {
      zfsreplicationtask: "ZfsReplicationTask",
      automatedsnapshottask: "AutomatedSnapshotTask",
      rsynctask: "RsyncTask",
      scrubtask: "ScrubTask",
      smarttest: "SmartTest",
      cloudsynctask: "CloudSyncTask",
      customtask: "CustomTask"
    };
    return (_a2 = map[key]) != null ? _a2 : s2;
  }
  resolveTemplate(templateName) {
    switch (templateName) {
      case "ZfsReplicationTask":
        return new ZFSReplicationTaskTemplate();
      case "AutomatedSnapshotTask":
        return new AutomatedSnapshotTaskTemplate();
      case "RsyncTask":
        return new RsyncTaskTemplate();
      case "ScrubTask":
        return new ScrubTaskTemplate();
      case "SmartTest":
        return new SmartTestTemplate();
      case "CloudSyncTask":
        return new CloudSyncTaskTemplate();
      case "CustomTask":
        return new CustomTaskTemplate();
      default:
        throw new Error(`Unknown template: ${templateName}`);
    }
  }
  toPlain(x) {
    return JSON.parse(JSON.stringify(x));
  }
  async isAdminUser() {
    const u2 = await window.cockpit.user();
    return (u2 == null ? void 0 : u2.id) === 0 || ((u2 == null ? void 0 : u2.groups) || []).some((g) => g === "wheel" || g === "sudo" || g === "admin" || g === "adm");
  }
  setScope(inst, scope) {
    inst.scope = scope;
  }
  safeBuildParamNode(schema, params) {
    try {
      return this.createParameterNodeFromSchema(schema, params);
    } catch (e) {
      console.warn("Parameter schema hydration failed, falling back to loose node:", e);
      return this.createLooseNodeFromFlatParams(params);
    }
  }
  createLooseNodeFromFlatParams(params) {
    const root = new ParameterNode("Parameters", "root");
    const boolRe = /^(true|false)$/i;
    for (const [k2, v2] of Object.entries(params)) {
      const s2 = String(v2 != null ? v2 : "");
      if (boolRe.test(s2)) {
        const p2 = new BoolParameter(k2, k2);
        p2.value = /^true$/i.test(s2);
        root.addChild(p2);
      } else if (/^-?\d+$/.test(s2)) {
        const p2 = new IntParameter(k2, k2);
        p2.value = parseInt(s2, 10);
        root.addChild(p2);
      } else {
        const p2 = new StringParameter(k2, k2);
        p2.value = s2;
        root.addChild(p2);
      }
    }
    return root;
  }
  async desiredScopeFor(inst, forCreate = false) {
    const explicit = inst.scope;
    if (explicit === "user" || explicit === "system")
      return explicit;
    if (forCreate)
      return await this.isAdminUser() ? "auto" : "user";
    try {
      const st = await daemon.getStatus(this.normalizeTemplateKey(inst.template.name), inst.name);
      const s2 = String((st == null ? void 0 : st.scope) || "");
      if (s2 === "user" || s2 === "system")
        return s2;
    } catch {
    }
    return await this.isAdminUser() ? "auto" : "user";
  }
  async readMaybe(path) {
    try {
      return await this.readTextRoot(path);
    } catch {
      return "";
    }
  }
  async readFirst(paths) {
    for (const p2 of paths) {
      const txt = await this.readMaybe(p2);
      if (txt)
        return txt;
    }
    return "";
  }
  async loadTaskInstances() {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    await this.ensureBackend();
    this.taskInstances.splice(0, this.taskInstances.length);
    const coerceTemplateName = (tpl) => {
      if (typeof tpl === "string")
        return tpl;
      if (tpl && typeof tpl === "object")
        return String(tpl.name || tpl.type || "");
      const output = String(tpl != null ? tpl : "");
      return output;
    };
    const safeParseItems = (raw) => {
      if (Array.isArray(raw))
        return raw;
      let result = [];
      try {
        result = JSON.parse(String(raw || "[]"));
      } catch {
        result = [];
      }
      return result;
    };
    if (this.isDaemon()) {
      try {
        const { id: uid2, name: username } = await window.cockpit.user();
        const items = this.parseListTasks(await daemon.listTasks("user"));
        console.log("[sched] daemon user items:", items.length, items);
        for (const t of items) {
          try {
            if (!(t == null ? void 0 : t.name) || !(t == null ? void 0 : t.template))
              continue;
            const templateKey = this.normalizeTemplateKey(
              typeof t.template === "string" ? t.template : String(((_a2 = t.template) == null ? void 0 : _a2.name) || ((_b = t.template) == null ? void 0 : _b.type) || "")
            );
            console.log("[Scheduler -> loadTaskInstances]: templateKey", templateKey);
            const tpl = this.resolveTemplate(templateKey);
            console.log("[Scheduler -> loadTaskInstances]: tpl", tpl);
            const unit = String(t.unit || await this.unitNameFromParts(templateKey, t.name, "user"));
            console.log("[Scheduler -> loadTaskInstances]: unit", unit);
            const paramsObj = (_d = (_c = t.params) != null ? _c : t.parameters) != null ? _d : {};
            const schedObj = (_e = t.schedule) != null ? _e : { enabled: false, intervals: [] };
            const notes = (_f = t.notes) != null ? _f : "";
            const intervals = Array.isArray(schedObj.intervals) ? schedObj.intervals.map((i2) => new TaskScheduleInterval(i2)) : [];
            const schedule = new TaskSchedule(!!schedObj.enabled, intervals);
            const paramNode = this.safeBuildParamNode(tpl.parameterSchema, paramsObj);
            const inst = new TaskInstance(t.name, tpl, paramNode, schedule, notes);
            inst._templateKey = templateKey;
            this.setScope(inst, t.scope === "system" ? "system" : "user");
            console.log("[sched] backend =", this.backend);
            console.log("[sched] pushing TaskInstance:", t.name, templateKey, schedObj == null ? void 0 : schedObj.enabled);
            this.taskInstances.push(inst);
          } catch (e) {
            console.warn("skip bad daemon task record:", e, t);
          }
        }
      } catch (e) {
        console.warn("ListTasks(user) failed:", e);
      }
      try {
        if (await this.isAdminUser()) {
          const seenSys = /* @__PURE__ */ new Set();
          const keyOf = (tpl, name) => `${this.normalizeTemplateKey(tpl)}:${name}`;
          try {
            const rawSys = await daemon.listTasks("system");
            const dItems = this.parseListTasks(rawSys);
            for (const t of dItems) {
              try {
                if (!(t == null ? void 0 : t.name) || !(t == null ? void 0 : t.template))
                  continue;
                const templateKey = this.normalizeTemplateKey(String(t.template));
                const tpl = this.resolveTemplate(templateKey);
                const intervals = (((_g = t.schedule) == null ? void 0 : _g.intervals) || []).map((i2) => new TaskScheduleInterval(i2));
                const schedule = new TaskSchedule(!!((_h = t.schedule) == null ? void 0 : _h.enabled), intervals);
                const params = (_j = (_i = t.params) != null ? _i : t.parameters) != null ? _j : {};
                const paramNode = this.safeBuildParamNode(tpl.parameterSchema, params);
                const inst = new TaskInstance(t.name, tpl, paramNode, schedule, t.notes || "");
                inst._templateKey = templateKey;
                this.setScope(inst, "system");
                this.taskInstances.push(inst);
                seenSys.add(keyOf(templateKey, t.name));
              } catch (e) {
                console.warn("skip bad daemon system record:", e);
              }
            }
          } catch (e) {
            console.warn("daemon.listTasks(system) failed:", e);
          }
        }
      } catch (e) {
        console.warn("system task discovery (admin gate) failed:", e);
      }
      return;
    }
    try {
      const { stdout } = await runCommand$1(
        ["/usr/bin/env", "python3", "-c", get_tasks_script],
        { superuser: "try" }
      );
      const systemTasksData = safeParseItems(stdout);
      for (const task of systemTasksData) {
        try {
          if (!(task == null ? void 0 : task.name) || !(task == null ? void 0 : task.template))
            continue;
          const templateKey = this.normalizeTemplateKey(coerceTemplateName(task.template));
          const tpl = this.resolveTemplate(templateKey);
          const paramNode = this.createParameterNodeFromSchema(tpl.parameterSchema, task.parameters || {});
          const intervals = (((_k = task.schedule) == null ? void 0 : _k.intervals) || []).map((i2) => new TaskScheduleInterval(i2));
          const schedule = new TaskSchedule(!!((_l = task.schedule) == null ? void 0 : _l.enabled), intervals);
          const inst = new TaskInstance(task.name, tpl, paramNode, schedule, task.notes || "");
          inst._templateKey = templateKey;
          this.setScope(inst, "system");
          this.taskInstances.push(inst);
        } catch (e) {
          console.warn("skip bad legacy task record:", e);
        }
      }
    } catch (e) {
      console.error(errorString(e));
    }
  }
  createParameterNodeFromSchema(schema, parameters) {
    function cloneSchema(node) {
      let newNode;
      if (node instanceof StringParameter) {
        newNode = new StringParameter(node.label, node.key);
      } else if (node instanceof IntParameter) {
        newNode = new IntParameter(node.label, node.key);
      } else if (node instanceof BoolParameter) {
        newNode = new BoolParameter(node.label, node.key);
      } else if (node instanceof SelectionParameter) {
        newNode = new SelectionParameter(node.label, node.key);
      } else {
        newNode = new ParameterNode(node.label, node.key);
      }
      node.children.forEach((child) => {
        newNode.addChild(cloneSchema(child));
      });
      return newNode;
    }
    const parameterRoot = cloneSchema(schema);
    function assignValues(node, prefix = "") {
      const currentPrefix = prefix ? prefix + "_" : "";
      const fullKey = currentPrefix + node.key;
      if (parameters.hasOwnProperty(fullKey)) {
        let value = parameters[fullKey];
        if (node instanceof StringParameter || node instanceof SelectionParameter) {
          node.value = value;
        } else if (node instanceof IntParameter) {
          node.value = parseInt(value);
        } else if (node instanceof BoolParameter) {
          node.value = value === "true";
        }
      }
      node.children.forEach((child) => assignValues(child, fullKey));
    }
    assignValues(parameterRoot);
    return parameterRoot;
  }
  parseEnvKeyValues(envKeyValues, templateName) {
    let envObject = envKeyValues.reduce((acc, curr) => {
      const [key, ...rest] = curr.split("=");
      const value = rest.join("=");
      acc[key] = value;
      return acc;
    }, {});
    function formatEnvOption(envObject2, key, emptyValue = "", excludeValues = [0, "0", "''"], resetKeys = []) {
      if (envObject2[key] && !excludeValues.includes(envObject2[key])) {
        envObject2[key] = `${envObject2[key]}`;
      } else {
        envObject2[key] = emptyValue;
        resetKeys.forEach((resetKey) => envObject2[resetKey] = emptyValue);
      }
    }
    switch (templateName) {
      case "ZfsReplicationTask":
        if (envObject["zfsRepConfig_sendOptions_raw_flag"] === "true") {
          envObject["zfsRepConfig_sendOptions_compressed_flag"] = "";
        } else if (envObject["zfsRepConfig_sendOptions_compressed_flag"] === "true") {
          envObject["zfsRepConfig_sendOptions_raw_flag"] = "";
        }
        break;
      case "RsyncTask":
        if (!envObject["rsyncConfig_target_info_host"]) {
          envObject["rsyncConfig_target_info_host"] = "";
          envObject["rsyncConfig_target_info_port"] = "";
          envObject["rsyncConfig_target_info_user"] = "";
        }
        formatEnvOption(envObject, "rsyncConfig_rsyncOptions_log_file_path");
        formatEnvOption(envObject, "rsyncConfig_rsyncOptions_bandwidth_limit_kbps");
        formatEnvOption(envObject, "rsyncConfig_rsyncOptions_include_pattern");
        formatEnvOption(envObject, "rsyncConfig_rsyncOptions_exclude_pattern");
        formatEnvOption(envObject, "rsyncConfig_rsyncOptions_custom_args");
        break;
      case "CloudSyncTask":
        formatEnvOption(envObject, "cloudSyncConfig_rcloneOptions_log_file_path");
        formatEnvOption(envObject, "cloudSyncConfig_rcloneOptions_bandwidth_limit_kbps");
        formatEnvOption(envObject, "cloudSyncConfig_rcloneOptions_include_pattern");
        formatEnvOption(envObject, "cloudSyncConfig_rcloneOptions_exclude_pattern");
        formatEnvOption(envObject, "cloudSyncConfig_rcloneOptions_custom_args");
        formatEnvOption(envObject, "cloudSyncConfig_rcloneOptions_transfers");
        formatEnvOption(envObject, "cloudSyncConfig_rcloneOptions_max_transfer_size", "", [0, "0", "''"], ["cloudSyncConfig_rcloneOptions_max_transfer_size_unit"]);
        formatEnvOption(envObject, "cloudSyncConfig_rcloneOptions_include_from_path");
        formatEnvOption(envObject, "cloudSyncConfig_rcloneOptions_exclude_from_path");
        formatEnvOption(envObject, "cloudSyncConfig_rcloneOptions_multithread_chunk_size", "", [0, "0", "''"], ["cloudSyncConfig_rcloneOptions_multithread_chunk_size_unit"]);
        formatEnvOption(envObject, "cloudSyncConfig_rcloneOptions_multithread_cutoff", "", [0, "0", "''"], ["cloudSyncConfig_rcloneOptions_multithread_cutoff_unit"]);
        formatEnvOption(envObject, "cloudSyncConfig_rcloneOptions_multithread_streams");
        formatEnvOption(envObject, "cloudSyncConfig_rcloneOptions_multithread_write_buffer_size", "", [0, "0", "''"], ["cloudSyncConfig_rcloneOptions_multithread_write_buffer_size_unit"]);
        break;
    }
    return envObject;
  }
  getScriptFromTemplateName(templateName) {
    switch (templateName) {
      case "ZfsReplicationTask":
        return "replication-script";
      case "AutomatedSnapshotTask":
        return "autosnap-script";
      case "RsyncTask":
        return "rsync-script";
      case "SmartTest":
        return "smart-test-script";
      case "ScrubTask":
        return "scrub-script";
      case "CloudSyncTask":
        return "cloudsync-script";
      default:
        console.error("no script provided");
        break;
    }
  }
  async registerTaskInstance(taskInstance) {
    var _a2, _b, _c;
    await this.ensureBackend();
    const envKeyValues = taskInstance.parameters.asEnvKeyValues();
    const templateName = this.normalizeTemplateKey(taskInstance.template.name);
    let scriptPath = "";
    const envObject = this.parseEnvKeyValues(envKeyValues, templateName);
    envObject["taskName"] = taskInstance.name;
    if (templateName === "CustomTask") {
      const children = (_a2 = taskInstance.parameters) == null ? void 0 : _a2.children;
      const pathParam = children == null ? void 0 : children.find((child) => child.key === "filePath");
      scriptPath = (pathParam == null ? void 0 : pathParam.value) || "/opt/45drives/houston/scheduler/scripts/undefined.py";
    } else {
      const scriptFileName = this.getScriptFromTemplateName(templateName);
      scriptPath = `/opt/45drives/houston/scheduler/scripts/${scriptFileName}.py`;
    }
    if (this.isDaemon()) {
      const scope = await this.desiredScopeFor(taskInstance, true);
      const scheduleForDbus = this.toPlain(taskInstance.schedule);
      await daemon.createTask(
        templateName,
        envObject,
        scriptPath,
        scheduleForDbus,
        (_b = taskInstance.notes) != null ? _b : "",
        scope
      );
      return;
    }
    if (templateName === "CloudSyncTask") {
      envObject["RCLONE_CONFIG"] = "/root/.config/rclone/rclone.conf";
      envObject["cloudSyncConfig_rclone_config_path"] = "/root/.config/rclone/rclone.conf";
    }
    const filteredEnvObject = Object.fromEntries(
      Object.entries(envObject).filter(([_2, value]) => value !== "" && value !== 0)
    );
    const envKeyValuesString = Object.entries(filteredEnvObject).map(([key, value]) => `${key}=${value}`).join("\n");
    const templateTimerPath = `/opt/45drives/houston/scheduler/templates/Schedule.timer`;
    const houstonSchedulerPrefix = "houston_scheduler_";
    const baseName = `${houstonSchedulerPrefix}${templateName}_${taskInstance.name}`;
    const envFilePath = `/etc/systemd/system/${baseName}.env`;
    const jsonFilePath = `/etc/systemd/system/${baseName}.json`;
    const notesFilePath = `/etc/systemd/system/${baseName}.txt`;
    const envFile = new File(server$1, envFilePath);
    await unwrap(envFile.write(envKeyValuesString, { superuser: "try" }));
    console.log("env file created and content written successfully");
    if (taskInstance.notes !== "") {
      const notesFile = new File(server$1, notesFilePath);
      await unwrap(notesFile.write((_c = taskInstance.notes) != null ? _c : "", { superuser: "try" }));
      console.log("notes file created and content written successfully");
    }
    if (taskInstance.schedule.intervals.length < 1) {
      console.log("No schedules found, parameter file generated.");
      await createStandaloneTask(templateName, scriptPath, envFilePath);
    } else {
      const jsonFile = new File(server$1, jsonFilePath);
      const jsonString = JSON.stringify(taskInstance.schedule, null, 2);
      await unwrap(jsonFile.write(jsonString, { superuser: "try" }));
      console.log("json file created and content written successfully");
      await createTaskFiles(templateName, scriptPath, envFilePath, templateTimerPath, jsonFilePath);
    }
  }
  async updateTaskInstance(taskInstance, opts) {
    var _a2, _b, _c, _d;
    await this.ensureBackend();
    const envKeyValues = taskInstance.parameters.asEnvKeyValues();
    const templateName = this.normalizeTemplateKey(taskInstance.template.name);
    const envObject = this.parseEnvKeyValues(envKeyValues, templateName);
    envObject["taskName"] = taskInstance.name;
    let scriptPath;
    if (templateName === "CustomTask") {
      const pathParam = (_b = (_a2 = taskInstance.parameters) == null ? void 0 : _a2.children) == null ? void 0 : _b.find((c) => c.key === "path");
      scriptPath = (pathParam == null ? void 0 : pathParam.value) || "/opt/45drives/houston/scheduler/scripts/undefined.py";
    } else {
      const scriptFileName = this.getScriptFromTemplateName(templateName);
      scriptPath = `/opt/45drives/houston/scheduler/scripts/${scriptFileName}.py`;
    }
    if (this.isDaemon()) {
      const scope = await this.desiredScopeFor(taskInstance);
      const oldName = (_c = opts == null ? void 0 : opts.oldName) != null ? _c : taskInstance.name;
      await daemon.updateTask(
        templateName,
        oldName,
        envObject,
        scriptPath,
        taskInstance.schedule,
        (_d = taskInstance.notes) != null ? _d : "",
        scope
      );
      return;
    }
    if (templateName === "CloudSyncTask") {
      envObject["RCLONE_CONFIG"] = "/root/.config/rclone/rclone.conf";
      envObject["cloudSyncConfig_rclone_config_path"] = "/root/.config/rclone/rclone.conf";
    }
    const filteredEnvObject = Object.fromEntries(
      Object.entries(envObject).filter(([_2, value]) => value !== "" && value !== 0)
    );
    const envKeyValuesString = Object.entries(filteredEnvObject).map(([key, value]) => `${key}=${value}`).join("\n");
    const houstonSchedulerPrefix = "houston_scheduler_";
    const baseName = `${houstonSchedulerPrefix}${templateName}_${taskInstance.name}`;
    const envFilePath = `/etc/systemd/system/${baseName}.env`;
    const envFile = new File(server$1, envFilePath);
    await unwrap(envFile.replace(envKeyValuesString, { superuser: "try" }));
    console.log("env file updated successfully");
    await createStandaloneTask(templateName, scriptPath, envFilePath);
    await runCommand$1(["systemctl", "daemon-reload"], { superuser: "try" });
  }
  async updateTaskNotes(taskInstance) {
    var _a2, _b, _c, _d;
    await this.ensureBackend();
    const templateName = this.normalizeTemplateKey(taskInstance.template.name);
    if (this.isDaemon()) {
      const scope = await this.desiredScopeFor(taskInstance);
      const envKeyValues = taskInstance.parameters.asEnvKeyValues();
      const envObject = this.parseEnvKeyValues(envKeyValues, templateName);
      envObject["taskName"] = taskInstance.name;
      let scriptPath = "";
      if (templateName === "CustomTask") {
        const pathParam = (_b = (_a2 = taskInstance.parameters) == null ? void 0 : _a2.children) == null ? void 0 : _b.find((c) => c.key === "path");
        scriptPath = (pathParam == null ? void 0 : pathParam.value) || "/opt/45drives/houston/scheduler/scripts/undefined.py";
      } else {
        const scriptFileName = this.getScriptFromTemplateName(templateName);
        scriptPath = `/opt/45drives/houston/scheduler/scripts/${scriptFileName}.py`;
      }
      await daemon.createTask(
        templateName,
        envObject,
        scriptPath,
        taskInstance.schedule,
        (_c = taskInstance.notes) != null ? _c : "",
        scope
      );
      return;
    }
    const houstonSchedulerPrefix = "houston_scheduler_";
    const notesFilePath = `/etc/systemd/system/${houstonSchedulerPrefix}${templateName}_${taskInstance.name}.txt`;
    console.log("notesFilePath:", notesFilePath);
    const notesFile = new File(server$1, notesFilePath);
    await unwrap(notesFile.replace((_d = taskInstance.notes) != null ? _d : "", { superuser: "try" }));
    console.log("notes file updated successfully");
  }
  async unregisterTaskInstance(taskInstance) {
    await this.ensureBackend();
    const houstonSchedulerPrefix = "houston_scheduler_";
    const templateName = this.normalizeTemplateKey(taskInstance.template.name);
    if (this.isDaemon()) {
      await daemon.deleteTask(templateName, taskInstance.name);
      return;
    }
    const fullTaskName = `${houstonSchedulerPrefix}${templateName}_${taskInstance.name}`;
    if (taskInstance.schedule.enabled) {
      await this.disableSchedule(taskInstance);
    }
    await removeTask(fullTaskName);
    console.log(`${fullTaskName} removed`);
  }
  async runTaskNow(taskInstance) {
    await this.ensureBackend();
    const houstonSchedulerPrefix = "houston_scheduler_";
    const templateName = this.normalizeTemplateKey(taskInstance.template.name);
    const waitForFinalStatus = async () => {
      let finalStatus2 = "Unknown";
      while (true) {
        const status = await this.getServiceStatus(taskInstance);
        if (status) {
          finalStatus2 = status;
        }
        if (status === "Completed" || status === "Inactive (Disabled)" || status === "Failed") {
          break;
        }
        await new Promise((r2) => setTimeout(r2, 1e3));
      }
      return finalStatus2;
    };
    if (this.isDaemon()) {
      await daemon.runNow(templateName, taskInstance.name);
      const finalStatus2 = await waitForFinalStatus();
      console.log(
        `Task ${templateName}_${taskInstance.name} finished with status: ${finalStatus2}`
      );
      return finalStatus2;
    }
    const fullTaskName = `${houstonSchedulerPrefix}${templateName}_${taskInstance.name}`;
    console.log(`Running ${fullTaskName}...`);
    await runTask(fullTaskName);
    const finalStatus = await waitForFinalStatus();
    console.log(`Task ${fullTaskName} completed with status: ${finalStatus}`);
    return finalStatus;
  }
  async stopTaskNow(taskInstance) {
    await this.ensureBackend();
    const templateName = this.normalizeTemplateKey(taskInstance.template.name);
    if (this.isDaemon()) {
      await daemon.stopTask(templateName, taskInstance.name);
      return;
    }
    const houstonSchedulerPrefix = "houston_scheduler_";
    const fullTaskName = `${houstonSchedulerPrefix}${templateName}_${taskInstance.name}`;
    console.log(`Stopping ${fullTaskName}...`);
    await stopTask(fullTaskName);
    console.log(`Task ${fullTaskName} stopped.`);
  }
  async getTimerStatus(ti) {
    await this.ensureBackend();
    const log = new TaskExecutionLog([]);
    this.templateKey(ti, this.normalizeTemplateKey(ti.template.name));
    if (this.isDaemon()) {
      try {
        const st = await this.fetchStatus(ti);
        const unit2 = String((st == null ? void 0 : st.unit) || await this.unitNameFor(ti));
        const output = String((st == null ? void 0 : st.timer) || "");
        return this.parseTaskStatus(output, unit2, log, ti);
      } catch (e) {
        console.warn("GetStatus(timer) failed:", e);
        return false;
      }
    }
    const unit = await this.unitNameFor(ti);
    try {
      const { stdout, stderr, exitStatus } = await runCommand$1(
        [
          "systemctl",
          "show",
          `${unit}.timer`,
          "--no-pager",
          "--property",
          "LoadState,ActiveState,SubState,Result,LastTriggerUSec,LastTrigger,NextElapseUSecRealtime,MergedUnit"
        ],
        { superuser: "try" }
      );
      if (exitStatus !== 0) {
        if (/not found/i.test(stdout) || /not found/i.test(stderr)) {
          return this.parseTaskStatus("", unit, log, ti);
        }
        console.warn(`getTimerStatus(${unit}):`, stderr || stdout);
        return false;
      }
      return this.parseTaskStatus(stdout || "", unit, log, ti);
    } catch (e) {
      console.warn(`getTimerStatus(${unit}) error:`, errorString(e));
      return false;
    }
  }
  async getServiceStatus(ti) {
    await this.ensureBackend();
    const log = new TaskExecutionLog([]);
    this.templateKey(ti, this.normalizeTemplateKey(ti.template.name));
    if (this.isDaemon()) {
      try {
        const st = await this.fetchStatus(ti);
        const unit2 = String((st == null ? void 0 : st.unit) || await this.unitNameFor(ti));
        const output = String((st == null ? void 0 : st.service) || "");
        return this.parseTaskStatus(output, unit2, log, ti);
      } catch {
        const unit2 = await this.unitNameFor(ti);
        return this.parseTaskStatus("", unit2, log, ti);
      }
    }
    const unit = await this.unitNameFor(ti);
    try {
      const { stdout, stderr, exitStatus } = await runCommand$1(
        [
          "systemctl",
          "show",
          `${unit}.service`,
          "--no-pager",
          "--property",
          "LoadState,ActiveState,SubState,Result,ActiveEnterTimestampUSec,ActiveEnterTimestamp,ExecMainStartTimestampUSec,ExecMainStartTimestamp,MergedUnit"
        ],
        { superuser: "try" }
      );
      if (exitStatus !== 0) {
        if (/not found/i.test(stdout) || /LoadState=not-found/.test(stdout)) {
          return this.parseTaskStatus("", unit, log, ti);
        }
        console.warn(`getServiceStatus(${unit}):`, stderr || stdout);
        return false;
      }
      return this.parseTaskStatus(stdout || "", unit, log, ti);
    } catch (e) {
      console.warn(`getServiceStatus(${unit}) error:`, errorString(e));
      return false;
    }
  }
  parseShow(output) {
    const m = /* @__PURE__ */ new Map();
    for (const line of (output || "").split(/\r?\n/)) {
      const i2 = line.indexOf("=");
      if (i2 > 0)
        m.set(line.slice(0, i2), line.slice(i2 + 1));
    }
    const num = (k2) => {
      const v2 = m.get(k2);
      const n2 = v2 ? Number(v2) : NaN;
      return Number.isFinite(n2) && n2 > 0 ? n2 : 0;
    };
    const ts = (numKey, strKey) => {
      const u2 = num(numKey);
      if (u2)
        return u2;
      const s2 = m.get(strKey);
      if (s2) {
        const ms = Date.parse(s2);
        if (Number.isFinite(ms))
          return ms * 1e3;
      }
      return 0;
    };
    return {
      load: m.get("LoadState") || "",
      active: m.get("ActiveState") || "",
      sub: m.get("SubState") || "",
      result: m.get("Result") || "",
      lastTriggerUSec: ts("LastTriggerUSec", "LastTrigger"),
      nextElapseUSec: num("NextElapseUSecRealtime"),
      serviceStartUSec: ts("ExecMainStartTimestampUSec", "ExecMainStartTimestamp") || ts("ActiveEnterTimestampUSec", "ActiveEnterTimestamp")
    };
  }
  async parseTaskStatus(output, unit, log, ti) {
    try {
      if (output.includes("ActiveState=")) {
        const s2 = this.parseShow(output);
        if (s2.active === "active" && s2.sub === "waiting")
          return "Active (Pending)";
        if (s2.active === "active" && s2.sub === "running")
          return "Active (Running)";
        if (s2.active === "inactive" && s2.sub === "dead") {
          const hasRun = !!s2.serviceStartUSec;
          if (!hasRun) {
            return "Inactive (Disabled)";
          }
          if (s2.result === "success") {
            return "Completed";
          }
          let recentlyCompleted = false;
          try {
            recentlyCompleted = await log.wasTaskRecentlyCompleted(ti);
          } catch (_2) {
          }
          return recentlyCompleted ? "Completed" : "Inactive (Disabled)";
        }
        if (s2.active === "failed" || s2.sub === "failed")
          return "Failed";
        const base = s2.active || "unknown";
        return s2.sub ? `${base} (${s2.sub})` : base;
      }
      const m = output.match(/^\s*Active:\s*([a-z]+)\s*\(([^)]*)\)/im);
      if (!m)
        return "Unit inactive or not found.";
      const stateText = `${m[1]} (${m[2]})`;
      switch (stateText) {
        case "activating (start)":
          return "Starting...";
        case "active (waiting)":
          return "Active (Pending)";
        case "active (running)":
          return "Active (Running)";
        case "inactive (dead)": {
          const unitEsc = unit.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          const succeededRegex = new RegExp(`${unitEsc}\\.service: Succeeded`, "m");
          const noJournal = /No journal files were opened|You are currently not seeing messages/.test(output);
          if (succeededRegex.test(output))
            return "Completed";
          let recentlyCompleted = false;
          try {
            if (!noJournal) {
              recentlyCompleted = await log.wasTaskRecentlyCompleted(ti);
            }
          } catch (_2) {
          }
          return recentlyCompleted ? "Completed" : "Inactive (Disabled)";
        }
        default:
          return stateText;
      }
    } catch (e) {
      console.error(`Error parsing status for ${unit}:`, e);
      return false;
    }
  }
  async getTaskProgress(taskInstance) {
    await this.ensureBackend();
    const templateName = this.normalizeTemplateKey(taskInstance.template.name);
    if (this.isDaemon()) {
      try {
        const st = await daemon.getStatus(templateName, taskInstance.name);
        const txt = String((st == null ? void 0 : st.service) || "");
        const match = txt.match(/(\d+)%/);
        return match ? parseInt(match[1], 10) : null;
      } catch {
        return null;
      }
    }
    const houstonSchedulerPrefix = "houston_scheduler_";
    const fullTaskName = `${houstonSchedulerPrefix}${templateName}_${taskInstance.name}`;
    try {
      const { stdout } = await runCommand$1(
        ["systemctl", "show", `${fullTaskName}.service`, "--property=StatusText", "--value"],
        { superuser: "try" }
      );
      const txt = (stdout || "").trim();
      const match = txt.match(/(\d+)%/);
      return match ? parseInt(match[1], 10) : null;
    } catch {
      return null;
    }
  }
  async enableSchedule(taskInstance) {
    await this.ensureBackend();
    if (this.isDaemon()) {
      await daemon.enableSchedule(this.normalizeTemplateKey(taskInstance.template.name), taskInstance.name, true);
      taskInstance.schedule.enabled = true;
      return;
    }
    const houstonSchedulerPrefix = "houston_scheduler_";
    const templateName = this.normalizeTemplateKey(taskInstance.template.name);
    const fullTaskName = `${houstonSchedulerPrefix}${templateName}_${taskInstance.name}`;
    try {
      const timerName = `${fullTaskName}.timer`;
      await runCommand$1(["systemctl", "enable", timerName], { superuser: "try" });
      console.log(`${timerName} has been enabled and started`);
      taskInstance.schedule.enabled = true;
      await this.updateSchedule(taskInstance);
    } catch (error) {
      console.error(errorString(error));
      return false;
    }
  }
  async disableSchedule(taskInstance) {
    await this.ensureBackend();
    if (this.isDaemon()) {
      await daemon.enableSchedule(this.normalizeTemplateKey(taskInstance.template.name), taskInstance.name, false);
      taskInstance.schedule.enabled = false;
      return;
    }
    const houstonSchedulerPrefix = "houston_scheduler_";
    const templateName = this.normalizeTemplateKey(taskInstance.template.name);
    const fullTaskName = `${houstonSchedulerPrefix}${templateName}_${taskInstance.name}`;
    try {
      const timerName = `${fullTaskName}.timer`;
      const serviceName = `${fullTaskName}.service`;
      await runCommand$1(["systemctl", "stop", timerName], { superuser: "try" });
      await runCommand$1(["systemctl", "disable", timerName], { superuser: "try" });
      console.log(`${timerName} has been stopped and disabled`);
      taskInstance.schedule.enabled = false;
      try {
        await runCommand$1(["systemctl", "stop", serviceName], { superuser: "try" });
        await runCommand$1(["systemctl", "disable", serviceName], { superuser: "try" });
        await runCommand$1(["systemctl", "reset-failed", serviceName], { superuser: "try" });
      } catch (e) {
        console.warn(`Stopping/cleaning ${serviceName} returned:`, errorString(e));
      }
      await this.updateSchedule(taskInstance);
    } catch (error) {
      console.error(errorString(error));
      return false;
    }
  }
  async updateSchedule(taskInstance) {
    var _a2;
    await this.ensureBackend();
    const templateName = this.normalizeTemplateKey(taskInstance.template.name);
    if (this.isDaemon()) {
      const scope = await this.desiredScopeFor(taskInstance);
      const envKeyValues = taskInstance.parameters.asEnvKeyValues();
      const envObject = this.parseEnvKeyValues(envKeyValues, templateName);
      envObject["taskName"] = taskInstance.name;
      const scriptFileName = this.getScriptFromTemplateName(templateName);
      const scriptPath = `/opt/45drives/houston/scheduler/scripts/${scriptFileName}.py`;
      const scheduleForDbus = this.toPlain(taskInstance.schedule);
      await daemon.createTask(
        templateName,
        envObject,
        scriptPath,
        scheduleForDbus,
        (_a2 = taskInstance.notes) != null ? _a2 : "",
        scope
      );
      await daemon.enableSchedule(templateName, taskInstance.name, !!taskInstance.schedule.enabled);
      return;
    }
    const templateTimerPath = `/opt/45drives/houston/scheduler/templates/Schedule.timer`;
    const houstonSchedulerPrefix = "houston_scheduler_";
    const fullTaskName = `${houstonSchedulerPrefix}${templateName}_${taskInstance.name}`;
    const jsonFilePath = `/etc/systemd/system/${fullTaskName}.json`;
    const jsonFile = new File(server$1, jsonFilePath);
    const jsonString = JSON.stringify(taskInstance.schedule, null, 2);
    await unwrap(jsonFile.replace(jsonString, { superuser: "try" }));
    console.log("json file created and content written successfully");
    await createScheduleForTask(fullTaskName, templateTimerPath, jsonFilePath);
    await runCommand$1(["systemctl", "daemon-reload"], { superuser: "try" });
    await runCommand$1(["systemctl", "restart", `${fullTaskName}.timer`], { superuser: "try" });
  }
  async deleteSchedule(taskInstance) {
    await this.ensureBackend();
    const templateName = this.normalizeTemplateKey(taskInstance.template.name);
    if (this.isDaemon()) {
      await daemon.clearSchedule(templateName, taskInstance.name);
      taskInstance.schedule.enabled = false;
      taskInstance.schedule.intervals = [];
      return true;
    }
    const houstonSchedulerPrefix = "houston_scheduler_";
    const fullTaskName = `${houstonSchedulerPrefix}${templateName}_${taskInstance.name}`;
    const timerUnit = `${fullTaskName}.timer`;
    const jsonPath = `/etc/systemd/system/${fullTaskName}.json`;
    const timerPath = `/etc/systemd/system/${timerUnit}`;
    try {
      const stateful = [];
      await runCommand$1(["systemctl", "stop", timerUnit], { superuser: "try" }).catch(() => {
      });
      await runCommand$1(["systemctl", "disable", timerUnit], { superuser: "try" }).catch(() => {
      });
      await runCommand$1(["rm", "-f", timerPath], { superuser: "try" });
      await runCommand$1(["rm", "-f", jsonPath], { superuser: "try" });
      await runCommand$1(["systemctl", "reset-failed"], { superuser: "try" }).catch(() => {
      });
      await runCommand$1(["systemctl", "daemon-reload"], { superuser: "try" });
      taskInstance.schedule.enabled = false;
      taskInstance.schedule.intervals = [];
      console.log(`Schedule removed for ${fullTaskName}`);
      return true;
    } catch (e) {
      console.error(errorString(e));
      return false;
    }
  }
  parseIntervalIntoString(interval) {
    const elements = [];
    function getMonthName(number) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      return months[number - 1] || "undefined";
    }
    function getDaySuffix(day2) {
      if (day2 > 3 && day2 < 21)
        return "th";
      switch (day2 % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    }
    function formatUnit(value, type2) {
      if (value === "*") {
        return type2 === "minute" ? "every minute" : type2 === "hour" ? "every hour" : `every ${type2}`;
      } else if (value.startsWith("*/")) {
        const interval2 = value.slice(2);
        return `every ${interval2} ${type2}${interval2 > 1 ? "s" : ""}`;
      } else if (value.includes("/")) {
        const [base, step] = value.split("/");
        if (type2 === "day") {
          return `every ${step} days starting on the ${base}${getDaySuffix(parseInt(base))}`;
        }
        return `every ${step} ${type2}${step > 1 ? "s" : ""} starting from ${base}`;
      } else if (value === "0" && type2 === "minute") {
        return "at the start of the hour";
      } else if (value === "0" && type2 === "hour") {
        return "at midnight";
      } else if (type2 === "day") {
        return `on the ${value}${getDaySuffix(parseInt(value))} of the month`;
      } else if (type2 === "month") {
        return `in ${getMonthName(parseInt(value))}`;
      }
      return `at ${value} ${type2}`;
    }
    const formattedMinute = interval.minute ? formatUnit(interval.minute.value.toString(), "minute") : null;
    const formattedHour = interval.hour ? formatUnit(interval.hour.value.toString(), "hour") : null;
    if (formattedMinute === null && formattedHour === "at midnight") {
      elements.push("at midnight");
    } else {
      if (formattedMinute)
        elements.push(formattedMinute);
      if (formattedHour)
        elements.push(formattedHour);
    }
    const day = interval.day ? formatUnit(interval.day.value.toString(), "day") : "every day";
    const month = interval.month ? formatUnit(interval.month.value.toString(), "month") : "every month";
    const year = interval.year ? formatUnit(interval.year.value.toString(), "year") : "every year";
    if (day)
      elements.push(day);
    if (month)
      elements.push(month);
    if (year)
      elements.push(year);
    if (interval.dayOfWeek && interval.dayOfWeek.length > 0) {
      elements.push(`on ${interval.dayOfWeek.join(", ")}`);
    }
    return elements.filter((e) => e).join(", ");
  }
  describeInterval(interval) {
    const v2 = (k2) => {
      var _a2, _b, _c, _d;
      return (_d = (_c = (_b = (_a2 = interval == null ? void 0 : interval[k2]) == null ? void 0 : _a2.value) == null ? void 0 : _b.toString) == null ? void 0 : _c.call(_b)) != null ? _d : "*";
    };
    const pad2 = (n2) => String(n2).padStart(2, "0");
    const minute = v2("minute"), hour = v2("hour"), day = v2("day"), month = v2("month"), year = v2("year");
    const rawDows = Array.isArray(interval == null ? void 0 : interval.dayOfWeek) ? interval.dayOfWeek : [];
    const toDowIndex = (x) => {
      var _a2;
      if (typeof x === "number")
        return x;
      const s2 = String(x).trim();
      if (/^\d+$/.test(s2)) {
        const n2 = Number(s2);
        return n2 >= 0 && n2 <= 6 ? n2 : NaN;
      }
      const short = s2.slice(0, 3).toLowerCase();
      const map = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 };
      return (_a2 = map[short]) != null ? _a2 : NaN;
    };
    const dows = rawDows.map(toDowIndex).filter((n2) => Number.isFinite(n2));
    const dowName = (n2) => {
      var _a2;
      return (_a2 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][n2]) != null ? _a2 : String(n2);
    };
    const monthName = (m) => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][m - 1];
    const isStar = (s2) => s2 === "*";
    const isStep = (s2) => typeof s2 === "string" && s2.includes("/");
    const stepN = (s2) => {
      var _a2;
      return ((_a2 = s2.split("/")[1]) != null ? _a2 : "").trim();
    };
    const isFixed = (s2) => !isStar(s2) && !isStep(s2);
    const hhmm = () => hour !== "*" && minute !== "*" ? `${pad2(hour)}:${pad2(minute)}` : hour !== "*" && minute === "*" ? `${pad2(hour)}:00` : "";
    if (dows.length) {
      const when2 = hhmm();
      return `Weekly \u2014 ${dows.map((d2) => dowName(d2)).join(", ")}${when2 ? ` @ ${when2}` : ""}`;
    }
    if (isStar(hour) && /^\*\/\d+$/.test(minute) && isStar(day) && isStar(month)) {
      return `Hourly \u2014 every ${minute.slice(2)} min`;
    }
    if (isStep(hour) && isStar(day) && isStar(month)) {
      const n2 = stepN(hour);
      return `Hourly \u2014 every ${n2} hours${minute !== "*" && !isStep(minute) ? ` @ :${pad2(minute)}` : ""}`;
    }
    if (isStar(hour) && minute !== "*" && !isStep(minute) && isStar(day) && isStar(month)) {
      return `Hourly \u2014 at :${pad2(minute)}`;
    }
    if (isFixed(year) && isFixed(month) && isFixed(day)) {
      const when2 = hhmm();
      const start = `${monthName(Number(month))} ${day}, ${year}`;
      return `Daily \u2014 ${when2 ? `@ ${when2} ` : ""}(starts ${start})`;
    }
    if (!isStar(day) && !isStep(day) && isStar(year)) {
      const when2 = hhmm();
      if (isStep(month)) {
        return `Monthly \u2014 on ${day} every ${stepN(month)} months${when2 ? ` @ ${when2}` : ""}`;
      }
      if (!isStar(month)) {
        return `Monthly \u2014 on ${day} in ${monthName(Number(month))}${when2 ? ` @ ${when2}` : ""}`;
      }
      return `Monthly \u2014 on ${day}${when2 ? ` @ ${when2}` : ""}`;
    }
    const when = hhmm();
    if (isStep(day) && isStar(month)) {
      return `Daily \u2014 every ${stepN(day)} days${when ? ` @ ${when}` : ""}`;
    }
    if (isStar(day) && isStar(month)) {
      return `Daily \u2014 ${when ? `@ ${when}` : "any time"}`;
    }
    if (!isStar(month)) {
      if (isStep(month))
        return `Monthly \u2014 every ${stepN(month)} months${when ? ` @ ${when}` : ""}`;
      return `Monthly \u2014 in ${monthName(Number(month))}${when ? ` @ ${when}` : ""}`;
    }
    return `Daily \u2014 ${when ? `@ ${when}` : "any time"}`;
  }
}
const get_cloud_sync_remotes_script = `#!/usr/bin/env python3
import argparse
import configparser
import json
import os
import pwd
from typing import Optional, Tuple

def _expand_user_config(
    user_arg: Optional[str],
    config_arg: Optional[str],
) -> Tuple[str, Optional[int], Optional[int]]:
    """
    Decide rclone.conf path, and return (path, uid, gid) for optional chown.
    If config_arg is given, use that and do not chown.
    If user_arg is given, use that user's XDG config dir and chown to that user (if run as root).
    Otherwise, use current euid's home / XDG without chown.
    """
    if config_arg:
        return (config_arg, None, None)

    if user_arg:
        p = pwd.getpwnam(user_arg)
        home = p.pw_dir
        xdg = os.environ.get("XDG_CONFIG_HOME") or os.path.join(home, ".config")
        return (os.path.join(xdg, "rclone", "rclone.conf"), p.pw_uid, p.pw_gid)

    # Default: current euid's home / XDG
    home = os.path.expanduser("~")
    xdg = os.environ.get("XDG_CONFIG_HOME") or os.path.join(home, ".config")
    return (os.path.join(xdg, "rclone", "rclone.conf"), None, None)


def _ensure_parent(conf_path: str, uid: Optional[int], gid: Optional[int]) -> None:
    """
    Ensure parent directory exists with restrictive permissions and optionally chown it.
    """
    d = os.path.dirname(conf_path)
    os.makedirs(d, mode=0o700, exist_ok=True)
    try:
        if uid is not None and os.geteuid() == 0:
            # gid may be None; os.chown requires int, so default to uid if gid is None
            os.chown(d, uid, gid if gid is not None else uid)
    except PermissionError:
        # best-effort; ignore if we can't chown
        pass


def load_remotes_from_conf(conf_path: str) -> str:
    cfg = configparser.ConfigParser()
    cfg.read(conf_path)
    remotes = []
    for section in cfg.sections():
        rtype = cfg.get(section, "type", fallback="unknown")
        params = {k: v for k, v in cfg.items(section) if k != "type"}
        remotes.append(
            {
                "name": section,
                "type": rtype,
                "parameters": params,
            }
        )
    return json.dumps(remotes, indent=2)


def main() -> None:
    parser = argparse.ArgumentParser(description="List rclone remotes")
    parser.add_argument("--user")
    parser.add_argument("--config")
    args = parser.parse_args()

    path, _, _ = _expand_user_config(args.user, args.config)
    print(load_remotes_from_conf(path))


if __name__ == "__main__":
    main()
`;
const create_cloud_sync_remote_script = `#!/usr/bin/env python3
import argparse
import configparser
import json
import sys
from typing import Optional, Tuple, Dict, Any
import os
import pwd

CLIENT_CREDS_PATH = "/etc/45drives/houston/scheduler/cloud-sync-client-creds.json"


def load_client_creds() -> Dict[str, Any]:
    """
    Load packaged OAuth client credentials from JSON.
    Returns {} if the file is missing or invalid.
    """
    try:
        with open(CLIENT_CREDS_PATH, "r") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        # If the file isn't there or is bad, just behave as before
        return {}


def _normalize_param_value(v: Any) -> Any:
    """
    Normalize how auth param values are represented:
    - If v is a dict with a 'value' key, return that.
    - Otherwise return v unchanged.
    """
    if isinstance(v, dict) and "value" in v:
        return v.get("value")
    return v


def _is_blank(v: Any) -> bool:
    """
    Return True if the value should be treated as 'not provided' by the user.
    """
    v = _normalize_param_value(v)

    if v is None:
        return True
    if isinstance(v, str):
        return v.strip() == ""
    if isinstance(v, (list, dict)):
        return len(v) == 0
    return False


def _merge_default_client_creds(
    auth_params: Dict[str, Any],
    remote_type: str,
) -> None:
    """
    Merge in default client_id/client_secret from packaged creds
    if the user did not supply a non-blank value.
    """
    client_creds = load_client_creds()
    backend_key = str(remote_type).lower()
    defaults = client_creds.get(backend_key) or {}

    for field in ("client_id", "client_secret"):
        if _is_blank(auth_params.get(field)):
            default_value = defaults.get(field)
            if not _is_blank(default_value):
                auth_params[field] = default_value


def _expand_user_config(
    user_arg: Optional[str],
    config_arg: Optional[str],
) -> Tuple[str, Optional[int], Optional[int]]:
    """
    Decide rclone.conf path, and return (path, uid, gid) for optional chown.
    If config_arg is given, use that and do not chown.
    If user_arg is given, use that user's XDG config dir and chown to that user (if run as root).
    Otherwise, use current euid's home / XDG without chown.
    """
    if config_arg:
        return (config_arg, None, None)

    if user_arg:
        p = pwd.getpwnam(user_arg)
        home = p.pw_dir
        xdg = os.environ.get("XDG_CONFIG_HOME") or os.path.join(home, ".config")
        return (os.path.join(xdg, "rclone", "rclone.conf"), p.pw_uid, p.pw_gid)

    # Default: current euid's home / XDG
    home = os.path.expanduser("~")
    xdg = os.environ.get("XDG_CONFIG_HOME") or os.path.join(home, ".config")
    return (os.path.join(xdg, "rclone", "rclone.conf"), None, None)


def _ensure_parent(conf_path: str, uid: Optional[int], gid: Optional[int]) -> None:
    """
    Ensure parent directory exists with restrictive permissions and optionally chown it.
    """
    d = os.path.dirname(conf_path)
    os.makedirs(d, mode=0o700, exist_ok=True)
    try:
        if uid is not None and os.geteuid() == 0:
            os.chown(d, uid, gid if gid is not None else uid)
    except PermissionError:
        # best-effort; ignore if we can't chown
        pass


def _write_config_atomic(
    conf_path: str,
    cfg: configparser.ConfigParser,
    uid: Optional[int],
    gid: Optional[int],
) -> None:
    """
    Write config to a temp file then atomically replace the target.
    Optionally chown the file when running as root.
    """
    _ensure_parent(conf_path, uid, gid)
    tmp = conf_path + ".tmp"
    with open(tmp, "w") as f:
        cfg.write(f)
    os.chmod(tmp, 0o600)
    try:
        if uid is not None and os.geteuid() == 0:
            os.chown(tmp, uid, gid if gid is not None else uid)
    except PermissionError:
        # best-effort; ignore if we can't chown
        pass
    os.replace(tmp, conf_path)


def save_remote_to_conf(
    remote: Dict[str, Any],
    conf_path: str,
    uid: Optional[int],
    gid: Optional[int],
) -> None:
    cfg = configparser.ConfigParser()
    cfg.read(conf_path)

    name = remote["name"]
    remote_type = remote["type"]
    auth_params = remote["authParams"]

    if cfg.has_section(name):
        raise ValueError(f"Remote '{name}' already exists")

    # Merge in default client_id/client_secret from packaged creds,
    # but only if user did not supply their own (after normalization).
    _merge_default_client_creds(auth_params, remote_type)

    cfg.add_section(name)
    cfg.set(name, "type", remote_type)
    for k, v in auth_params.items():
        v = _normalize_param_value(v)
        if isinstance(v, (dict, list)):
            v = json.dumps(v)
        if v not in (None, "", []):
            cfg.set(name, k, str(v))

    _write_config_atomic(conf_path, cfg, uid, gid)
    print(f"Remote '{name}' saved to {conf_path}")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Save a CloudSyncRemote to rclone.conf"
    )
    parser.add_argument(
        "--data",
        required=True,
        help="JSON string of CloudSyncRemote data",
    )
    parser.add_argument(
        "--user",
        help="Target username for ~user/.config/rclone/rclone.conf",
    )
    parser.add_argument(
        "--config",
        help="Explicit rclone.conf path (overrides --user)",
    )
    args = parser.parse_args()

    conf_path, uid, gid = _expand_user_config(args.user, args.config)
    remote = json.loads(args.data)
    save_remote_to_conf(remote, conf_path, uid, gid)


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(str(e))
        sys.exit(1)
`;
const delete_cloud_sync_remote_script = `#!/usr/bin/env python3
import argparse
import sys
import os
import pwd
import configparser
from typing import Optional, Tuple


def _expand_user_config(
    user_arg: Optional[str],
    config_arg: Optional[str],
) -> Tuple[str, Optional[int], Optional[int]]:
    """
    Decide rclone.conf path, and return (path, uid, gid) for optional chown.
    If config_arg is given, use that and do not chown.
    If user_arg is given, use that user's XDG config dir and chown to that user (if run as root).
    Otherwise, use current euid's home / XDG without chown.
    """
    if config_arg:
        return (config_arg, None, None)

    if user_arg:
        p = pwd.getpwnam(user_arg)
        home = p.pw_dir
        xdg = os.environ.get("XDG_CONFIG_HOME") or os.path.join(home, ".config")
        return (os.path.join(xdg, "rclone", "rclone.conf"), p.pw_uid, p.pw_gid)

    # Default: current euid's home / XDG
    home = os.path.expanduser("~")
    xdg = os.environ.get("XDG_CONFIG_HOME") or os.path.join(home, ".config")
    return (os.path.join(xdg, "rclone", "rclone.conf"), None, None)


def _ensure_parent(conf_path: str, uid: Optional[int], gid: Optional[int]) -> None:
    """
    Ensure parent directory exists with restrictive permissions and optionally chown it.
    """
    d = os.path.dirname(conf_path)
    os.makedirs(d, mode=0o700, exist_ok=True)
    try:
        if uid is not None and os.geteuid() == 0:
            # gid may be None; os.chown requires int, so default to uid if gid is None
            os.chown(d, uid, gid if gid is not None else uid)
    except PermissionError:
        # best-effort; ignore if we can't chown
        pass


def _write_config_atomic(
    conf_path: str,
    cfg: configparser.ConfigParser,
    uid: Optional[int],
    gid: Optional[int],
) -> None:
    """
    Write config to a temp file then atomically replace the target.
    Optionally chown the file when running as root.
    """
    _ensure_parent(conf_path, uid, gid)
    tmp = conf_path + ".tmp"
    with open(tmp, "w") as f:
        cfg.write(f)
    os.chmod(tmp, 0o600)
    try:
        if uid is not None and os.geteuid() == 0:
            os.chown(tmp, uid, gid if gid is not None else uid)
    except PermissionError:
        # best-effort; ignore if we can't chown
        pass
    os.replace(tmp, conf_path)



def delete_remote(
    remote_name: str,
    conf_path: str,
    uid: Optional[int],
    gid: Optional[int],
) -> None:
    cfg = configparser.ConfigParser()
    cfg.read(conf_path)

    if remote_name not in cfg.sections():
        print(f"Remote '{remote_name}' not found.")
        return

    cfg.remove_section(remote_name)
    _write_config_atomic(conf_path, cfg, uid, gid)
    print(f"Remote '{remote_name}' deleted.")


def main() -> None:
    parser = argparse.ArgumentParser(description="Delete rclone remote")
    parser.add_argument("remote_name")
    parser.add_argument("--user")
    parser.add_argument("--config")
    args = parser.parse_args()

    path, uid, gid = _expand_user_config(args.user, args.config)
    delete_remote(args.remote_name, path, uid, gid)


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(str(e))
        sys.exit(1)
`;
const update_cloud_sync_remote_script = `#!/usr/bin/env python3
import argparse
import configparser
import json
import sys
from typing import Optional, Tuple, Dict, Any
import os
import pwd

CLIENT_CREDS_PATH = "/etc/45drives/houston/scheduler/cloud-sync-client-creds.json"


def load_client_creds() -> Dict[str, Any]:
    """
    Load packaged OAuth client credentials from JSON.
    Returns {} if the file is missing or invalid.
    """
    try:
        with open(CLIENT_CREDS_PATH, "r") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return {}


def _normalize_param_value(v: Any) -> Any:
    """
    Normalize how auth param values are represented:
    - If v is a dict with a 'value' key, return that.
    - Otherwise return v unchanged.
    """
    if isinstance(v, dict) and "value" in v:
        return v.get("value")
    return v


def _is_blank(v: Any) -> bool:
    """
    Return True if the value should be treated as 'not provided' by the user.
    """
    v = _normalize_param_value(v)

    if v is None:
        return True
    if isinstance(v, str):
        return v.strip() == ""
    if isinstance(v, (list, dict)):
        return len(v) == 0
    return False


def _merge_default_client_creds(
    auth_params: Dict[str, Any],
    remote_type: str,
) -> None:
    """
    Merge in default client_id/client_secret from packaged creds
    if the user did not supply a non-blank value.
    """
    client_creds = load_client_creds()
    backend_key = str(remote_type).lower()
    defaults = client_creds.get(backend_key) or {}

    for field in ("client_id", "client_secret"):
        if _is_blank(auth_params.get(field)):
            default_value = defaults.get(field)
            if not _is_blank(default_value):
                auth_params[field] = default_value


def _expand_user_config(
    user_arg: Optional[str],
    config_arg: Optional[str],
) -> Tuple[str, Optional[int], Optional[int]]:
    """
    Decide rclone.conf path, and return (path, uid, gid) for optional chown.
    If config_arg is given, use that and do not chown.
    If user_arg is given, use that user's XDG config dir and chown to that user (if run as root).
    Otherwise, use current euid's home / XDG without chown.
    """
    if config_arg:
        return (config_arg, None, None)

    if user_arg:
        p = pwd.getpwnam(user_arg)
        home = p.pw_dir
        xdg = os.environ.get("XDG_CONFIG_HOME") or os.path.join(home, ".config")
        return (os.path.join(xdg, "rclone", "rclone.conf"), p.pw_uid, p.pw_gid)

    # Default: current euid's home / XDG
    home = os.path.expanduser("~")
    xdg = os.environ.get("XDG_CONFIG_HOME") or os.path.join(home, ".config")
    return (os.path.join(xdg, "rclone", "rclone.conf"), None, None)


def _ensure_parent(conf_path: str, uid: Optional[int], gid: Optional[int]) -> None:
    """
    Ensure parent directory exists with restrictive permissions and optionally chown it.
    """
    d = os.path.dirname(conf_path)
    os.makedirs(d, mode=0o700, exist_ok=True)
    try:
        if uid is not None and os.geteuid() == 0:
            os.chown(d, uid, gid if gid is not None else uid)
    except PermissionError:
        # best-effort; ignore if we can't chown
        pass


def _write_config_atomic(
    conf_path: str,
    cfg: configparser.ConfigParser,
    uid: Optional[int],
    gid: Optional[int],
) -> None:
    """
    Write config to a temp file then atomically replace the target.
    Optionally chown the file when running as root.
    """
    _ensure_parent(conf_path, uid, gid)
    tmp = conf_path + ".tmp"
    with open(tmp, "w") as f:
        cfg.write(f)
    os.chmod(tmp, 0o600)
    try:
        if uid is not None and os.geteuid() == 0:
            os.chown(tmp, uid, gid if gid is not None else uid)
    except PermissionError:
        # best-effort; ignore if we can't chown
        pass
    os.replace(tmp, conf_path)


def edit_remote_in_conf(
    old_name: str,
    updated_remote: Dict[str, Any],
    conf_path: str,
    uid: Optional[int],
    gid: Optional[int],
) -> None:
    cfg = configparser.ConfigParser()
    cfg.read(conf_path)

    new_name = updated_remote["name"]
    remote_type = updated_remote["type"]
    auth_params = updated_remote["authParams"]

    if not cfg.has_section(old_name):
        raise ValueError(f"Remote '{old_name}' not found")

    if old_name != new_name:
        cfg[new_name] = cfg[old_name]
        cfg.remove_section(old_name)

    cfg.set(new_name, "type", remote_type)

    # wipe old keys (except type) so removed fields don't linger
    for k in list(cfg[new_name].keys()):
        if k != "type":
            cfg.remove_option(new_name, k)

    # Merge in default client_id/client_secret if user did not provide values
    # (handles dict-with-value and whitespace-only strings correctly)
    _merge_default_client_creds(auth_params, remote_type)

    for k, v in auth_params.items():
        v = _normalize_param_value(v)
        if isinstance(v, (dict, list)):
            v = json.dumps(v)
        if v not in (None, "", []):
            cfg.set(new_name, k, str(v))

    _write_config_atomic(conf_path, cfg, uid, gid)
    print(f"Remote '{old_name}' updated as '{new_name}' in {conf_path}")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Edit CloudSyncRemote in rclone.conf"
    )
    parser.add_argument("--old_name", required=True)
    parser.add_argument("--data", required=True)
    parser.add_argument("--user")
    parser.add_argument("--config")
    args = parser.parse_args()

    path, uid, gid = _expand_user_config(args.user, args.config)
    updated = json.loads(args.data)
    edit_remote_in_conf(args.old_name, updated, path, uid, gid)


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(str(e))
        sys.exit(1)
`;
const textDecoder = new TextDecoder("utf-8");
async function runCommand(argv, opts = { superuser: "try" }) {
  const proc = await unwrap(
    server$1.execute(new Command(argv, opts))
  );
  const rawStdout = proc.stdout;
  const rawStderr = proc.stderr;
  const stdout = rawStdout instanceof Uint8Array ? textDecoder.decode(rawStdout) : String(rawStdout != null ? rawStdout : "");
  const stderr = rawStderr instanceof Uint8Array ? textDecoder.decode(rawStderr) : String(rawStderr != null ? rawStderr : "");
  return { stdout, stderr, exitStatus: proc.exitStatus };
}
class RemoteManager {
  constructor(cloudSyncRemotes) {
    __publicField(this, "cloudSyncRemotes");
    this.cloudSyncRemotes = cloudSyncRemotes;
  }
  async getRemotes() {
    this.cloudSyncRemotes.splice(0, this.cloudSyncRemotes.length);
    try {
      const cockpitUser = await window.cockpit.user();
      const username = cockpitUser == null ? void 0 : cockpitUser.name;
      const args = ["/usr/bin/env", "python3", "-c", get_cloud_sync_remotes_script];
      if (username) {
        args.push("--user", username);
      }
      const { stdout: remotesOutput } = await runCommand(args, { superuser: "try" });
      const remotesData = JSON.parse(remotesOutput);
      if (!Array.isArray(remotesData)) {
        console.error("Unexpected remotes data format:", remotesData);
        return;
      }
      remotesData.forEach((remote) => {
        if (!remote || !remote.type || !remote.parameters) {
          console.error("Malformed remote object:", remote);
          return;
        }
        let provider = cloudSyncProviders[remote.type];
        if (remote.type === "s3" && remote.parameters.provider) {
          const providerKey = `s3-${remote.parameters.provider}`;
          provider = cloudSyncProviders[providerKey];
        }
        if (!provider) {
          console.error(`Unsupported remote type or provider: ${remote.type}`);
          return;
        }
        const authParams = JSON.parse(JSON.stringify(provider.providerParams));
        for (const [key, value] of Object.entries(remote.parameters)) {
          const param = authParams.parameters[key];
          if (param) {
            param.value = value;
          } else {
            authParams.parameters[key] = { value, type: typeof value };
          }
        }
        const newRemote = new CloudSyncRemote(
          remote.name,
          remote.type,
          authParams,
          provider
        );
        this.cloudSyncRemotes.push(newRemote);
      });
    } catch (e) {
      console.error("Error fetching remotes:", e);
    }
  }
  async getRemoteByName(remoteName) {
    const remote = this.cloudSyncRemotes.find((remote2) => remote2.name === remoteName);
    if (remote) {
      return remote;
    } else {
      console.error(`Remote with name "${remoteName}" not found`);
      return null;
    }
  }
  async createRemote(name, type2, parameters) {
    let provider;
    if (type2 === "s3") {
      provider = cloudSyncProviders[`s3-${parameters.provider}`];
      if (!provider) {
        throw new Error(`Unsupported S3 provider: ${parameters.provider}`);
      }
    } else {
      provider = cloudSyncProviders[type2];
      if (!provider) {
        throw new Error(`Unsupported remote type: ${type2}`);
      }
    }
    const authParams = parameters;
    const remote = new CloudSyncRemote(name, type2, authParams, provider);
    const remoteJsonString = JSON.stringify(remote);
    const cockpitUser = await window.cockpit.user();
    const username = cockpitUser == null ? void 0 : cockpitUser.name;
    const args = [
      "/usr/bin/env",
      "python3",
      "-c",
      create_cloud_sync_remote_script,
      "--data",
      remoteJsonString
    ];
    if (username) {
      args.push("--user", username);
    }
    await runCommand(args, { superuser: "try" });
    this.cloudSyncRemotes.push(remote);
    return remote;
  }
  async editRemote(oldName, newName, newType, newParams) {
    let provider;
    if (newType === "s3") {
      provider = cloudSyncProviders[`s3-${newParams.parameters.provider.value}`];
      if (!provider) {
        throw new Error(`Unsupported S3 provider: ${newParams.parameters.provider.value}`);
      }
    } else {
      provider = cloudSyncProviders[newType];
      if (!provider) {
        throw new Error(`Unsupported remote type: ${newType}`);
      }
    }
    const authParams = newParams.parameters;
    const remote = new CloudSyncRemote(newName, newType, authParams, provider);
    const remoteJson = JSON.stringify(remote);
    const cockpitUser = await window.cockpit.user();
    const username = cockpitUser == null ? void 0 : cockpitUser.name;
    const args = [
      "/usr/bin/env",
      "python3",
      "-c",
      update_cloud_sync_remote_script,
      "--old_name",
      oldName,
      "--data",
      remoteJson
    ];
    if (username) {
      args.push("--user", username);
    }
    await runCommand(args, { superuser: "try" });
    const i2 = this.cloudSyncRemotes.findIndex((r2) => r2.name === oldName);
    if (i2 !== -1)
      this.cloudSyncRemotes.splice(i2, 1, remote);
    else
      this.cloudSyncRemotes.push(remote);
    return remote;
  }
  async deleteRemote(remoteName) {
    const i2 = this.cloudSyncRemotes.findIndex((r2) => r2.name === remoteName);
    if (i2 !== -1)
      this.cloudSyncRemotes.splice(i2, 1);
    const cockpitUser = await window.cockpit.user();
    const username = cockpitUser == null ? void 0 : cockpitUser.name;
    const args = ["/usr/bin/env", "python3", "-c", delete_cloud_sync_remote_script, remoteName];
    if (username) {
      args.push("--user", username);
    }
    await runCommand(args, { superuser: "try" });
    return true;
  }
}
/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const isBrowser = typeof document !== "undefined";
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function isESModule(obj) {
  return obj.__esModule || obj[Symbol.toStringTag] === "Module" || obj.default && isRouteComponent(obj.default);
}
const assign$1 = Object.assign;
function applyToParams(fn, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = isArray(value) ? value.map(fn) : fn(value);
  }
  return newParams;
}
const noop$1 = () => {
};
const isArray = Array.isArray;
function mergeOptions(defaults, partialOptions) {
  const options = {};
  for (const key in defaults)
    options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
  return options;
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return text == null ? "" : encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  if (text == null)
    return null;
  try {
    return decodeURIComponent("" + text);
  } catch (err2) {
  }
  return "" + text;
}
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery$1, location2, currentLocation = "/") {
  let path, query = {}, searchString = "", hash = "";
  const hashPos = location2.indexOf("#");
  let searchPos = location2.indexOf("?");
  searchPos = hashPos >= 0 && searchPos > hashPos ? -1 : searchPos;
  if (searchPos >= 0) {
    path = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos, hashPos > 0 ? hashPos : location2.length);
    query = parseQuery$1(searchString.slice(1));
  }
  if (hashPos >= 0) {
    path = path || location2.slice(0, hashPos);
    hash = location2.slice(hashPos, location2.length);
  }
  path = resolveRelativePath(path != null ? path : location2, currentLocation);
  return {
    fullPath: path + searchString + hash,
    path,
    query,
    hash: decode(hash)
  };
}
function stringifyURL(stringifyQuery$1, location2) {
  const query = location2.query ? stringifyQuery$1(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function stripBase(pathname, base) {
  if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
    return pathname;
  return pathname.slice(base.length) || "/";
}
function isSameRouteLocation(stringifyQuery$1, a2, b2) {
  const aLastIndex = a2.matched.length - 1;
  const bLastIndex = b2.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a2.matched[aLastIndex], b2.matched[bLastIndex]) && isSameRouteLocationParams(a2.params, b2.params) && stringifyQuery$1(a2.query) === stringifyQuery$1(b2.query) && a2.hash === b2.hash;
}
function isSameRouteRecord(a2, b2) {
  return (a2.aliasOf || a2) === (b2.aliasOf || b2);
}
function isSameRouteLocationParams(a2, b2) {
  if (Object.keys(a2).length !== Object.keys(b2).length)
    return false;
  for (const key in a2)
    if (!isSameRouteLocationParamsValue(a2[key], b2[key]))
      return false;
  return true;
}
function isSameRouteLocationParamsValue(a2, b2) {
  return isArray(a2) ? isEquivalentArray(a2, b2) : isArray(b2) ? isEquivalentArray(b2, a2) : a2 === b2;
}
function isEquivalentArray(a2, b2) {
  return isArray(b2) ? a2.length === b2.length && a2.every((value, i2) => value === b2[i2]) : a2.length === 1 && a2[0] === b2;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  const lastToSegment = toSegments[toSegments.length - 1];
  if (lastToSegment === ".." || lastToSegment === ".")
    toSegments.push("");
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (segment === ".")
      continue;
    if (segment === "..") {
      if (position > 1)
        position--;
    } else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition).join("/");
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
let NavigationType = /* @__PURE__ */ function(NavigationType$1) {
  NavigationType$1["pop"] = "pop";
  NavigationType$1["push"] = "push";
  return NavigationType$1;
}({});
let NavigationDirection = /* @__PURE__ */ function(NavigationDirection$1) {
  NavigationDirection$1["back"] = "back";
  NavigationDirection$1["forward"] = "forward";
  NavigationDirection$1["unknown"] = "";
  return NavigationDirection$1;
}({});
function normalizeBase(base) {
  if (!base)
    if (isBrowser) {
      const baseEl = document.querySelector("base");
      base = baseEl && baseEl.getAttribute("href") || "/";
      base = base.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      base = "/";
  if (base[0] !== "/" && base[0] !== "#")
    base = "/" + base;
  return removeTrailingSlash(base);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location2) {
  return base.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else
    scrollToOptions = position;
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.scrollX, scrollToOptions.top != null ? scrollToOptions.top : window.scrollY);
}
function getScrollKey(path, delta) {
  return (history.state ? history.state.position - delta : -1) + path;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
let ErrorTypes = /* @__PURE__ */ function(ErrorTypes$1) {
  ErrorTypes$1[ErrorTypes$1["MATCHER_NOT_FOUND"] = 1] = "MATCHER_NOT_FOUND";
  ErrorTypes$1[ErrorTypes$1["NAVIGATION_GUARD_REDIRECT"] = 2] = "NAVIGATION_GUARD_REDIRECT";
  ErrorTypes$1[ErrorTypes$1["NAVIGATION_ABORTED"] = 4] = "NAVIGATION_ABORTED";
  ErrorTypes$1[ErrorTypes$1["NAVIGATION_CANCELLED"] = 8] = "NAVIGATION_CANCELLED";
  ErrorTypes$1[ErrorTypes$1["NAVIGATION_DUPLICATED"] = 16] = "NAVIGATION_DUPLICATED";
  return ErrorTypes$1;
}({});
const NavigationFailureSymbol = Symbol("");
({
  [ErrorTypes.MATCHER_NOT_FOUND]({ location: location2, currentLocation }) {
    return `No match for
 ${JSON.stringify(location2)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
  },
  [ErrorTypes.NAVIGATION_GUARD_REDIRECT]({ from, to }) {
    return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
  },
  [ErrorTypes.NAVIGATION_ABORTED]({ from, to }) {
    return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
  },
  [ErrorTypes.NAVIGATION_CANCELLED]({ from, to }) {
    return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
  },
  [ErrorTypes.NAVIGATION_DUPLICATED]({ from, to }) {
    return `Avoided redundant navigation to current location: "${from.fullPath}".`;
  }
});
function createRouterError(type2, params) {
  return assign$1(/* @__PURE__ */ new Error(), {
    type: type2,
    [NavigationFailureSymbol]: true
  }, params);
}
function isNavigationFailure(error, type2) {
  return error instanceof Error && NavigationFailureSymbol in error && (type2 == null || !!(error.type & type2));
}
const propertiesToLog = [
  "params",
  "query",
  "hash"
];
function stringifyRoute(to) {
  if (typeof to === "string")
    return to;
  if (to.path != null)
    return to.path;
  const location2 = {};
  for (const key of propertiesToLog)
    if (key in to)
      location2[key] = to[key];
  return JSON.stringify(location2, null, 2);
}
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const searchParams = (search[0] === "?" ? search.slice(1) : search).split("&");
  for (let i2 = 0; i2 < searchParams.length; ++i2) {
    const searchParam = searchParams[i2].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!isArray(currentValue))
        currentValue = query[key] = [currentValue];
      currentValue.push(value);
    } else
      query[key] = value;
  }
  return query;
}
function stringifyQuery(query) {
  let search = "";
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0)
        search += (search.length ? "&" : "") + key;
      continue;
    }
    (isArray(value) ? value.map((v2) => v2 && encodeQueryValue(v2)) : [value && encodeQueryValue(value)]).forEach((value$1) => {
      if (value$1 !== void 0) {
        search += (search.length ? "&" : "") + key;
        if (value$1 != null)
          search += "=" + value$1;
      }
    });
  }
  return search;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value = query[key];
    if (value !== void 0)
      normalizedQuery[key] = isArray(value) ? value.map((v2) => v2 == null ? null : "" + v2) : value == null ? value : "" + value;
  }
  return normalizedQuery;
}
const matchedRouteKey = Symbol("");
const viewDepthKey = Symbol("");
const routerKey = Symbol("");
const routeLocationKey = Symbol("");
const routerViewLocationKey = Symbol("");
function useCallbacks() {
  let handlers = [];
  function add(handler) {
    handlers.push(handler);
    return () => {
      const i2 = handlers.indexOf(handler);
      if (i2 > -1)
        handlers.splice(i2, 1);
    };
  }
  function reset() {
    handlers = [];
  }
  return {
    add,
    list: () => handlers.slice(),
    reset
  };
}
function guardToPromiseFn(guard, to, from, record, name, runWithContext = (fn) => fn()) {
  const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve2, reject) => {
    const next = (valid) => {
      if (valid === false)
        reject(createRouterError(ErrorTypes.NAVIGATION_ABORTED, {
          from,
          to
        }));
      else if (valid instanceof Error)
        reject(valid);
      else if (isRouteLocation(valid))
        reject(createRouterError(ErrorTypes.NAVIGATION_GUARD_REDIRECT, {
          from: to,
          to: valid
        }));
      else {
        if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function")
          enterCallbackArray.push(valid);
        resolve2();
      }
    };
    const guardReturn = runWithContext(() => guard.call(record && record.instances[name], to, from, next));
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    guardCall.catch((err2) => reject(err2));
  });
}
function extractComponentsGuards(matched, guardType, to, from, runWithContext = (fn) => fn()) {
  const guards = [];
  for (const record of matched) {
    for (const name in record.components) {
      let rawComponent = record.components[name];
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        const guard = (rawComponent.__vccOpts || rawComponent)[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name, runWithContext));
      } else {
        let componentPromise = rawComponent();
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            throw new Error(`Couldn't resolve component "${name}" at "${record.path}"`);
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.mods[name] = resolved;
          record.components[name] = resolvedComponent;
          const guard = (resolvedComponent.__vccOpts || resolvedComponent)[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name, runWithContext)();
        }));
      }
    }
  }
  return guards;
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i2 = 0; i2 < len; i2++) {
    const recordFrom = from.matched[i2];
    if (recordFrom)
      if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    const recordTo = to.matched[i2];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord(record, recordTo)))
        enteringRecords.push(recordTo);
    }
  }
  return [
    leavingRecords,
    updatingRecords,
    enteringRecords
  ];
}
/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base, location$1) {
  const { pathname, search, hash } = location$1;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/")
      pathFromHash = "/" + pathFromHash;
    return stripBase(pathFromHash, "");
  }
  return stripBase(pathname, base) + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
  let listeners = [];
  let teardowns = [];
  let pauseState = null;
  const popStateHandler = ({ state }) => {
    const to = createCurrentLocation(base, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state) {
      currentLocation.value = to;
      historyState.value = state;
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state.position - fromState.position : 0;
    } else
      replace(to);
    listeners.forEach((listener) => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };
  function pauseListeners() {
    pauseState = currentLocation.value;
  }
  function listen(callback) {
    listeners.push(callback);
    const teardown = () => {
      const index2 = listeners.indexOf(callback);
      if (index2 > -1)
        listeners.splice(index2, 1);
    };
    teardowns.push(teardown);
    return teardown;
  }
  function beforeUnloadListener() {
    if (document.visibilityState === "hidden") {
      const { history: history$1 } = window;
      if (!history$1.state)
        return;
      history$1.replaceState(assign$1({}, history$1.state, { scroll: computeScrollPosition() }), "");
    }
  }
  function destroy() {
    for (const teardown of teardowns)
      teardown();
    teardowns = [];
    window.removeEventListener("popstate", popStateHandler);
    window.removeEventListener("pagehide", beforeUnloadListener);
    document.removeEventListener("visibilitychange", beforeUnloadListener);
  }
  window.addEventListener("popstate", popStateHandler);
  window.addEventListener("pagehide", beforeUnloadListener);
  document.addEventListener("visibilitychange", beforeUnloadListener);
  return {
    pauseListeners,
    listen,
    destroy
  };
}
function buildState(back, current, forward, replaced = false, computeScroll = false) {
  return {
    back,
    current,
    forward,
    replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}
function useHistoryStateNavigation(base) {
  const { history: history$1, location: location$1 } = window;
  const currentLocation = { value: createCurrentLocation(base, location$1) };
  const historyState = { value: history$1.state };
  if (!historyState.value)
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      position: history$1.length - 1,
      replaced: true,
      scroll: null
    }, true);
  function changeLocation(to, state, replace$1) {
    const hashIndex = base.indexOf("#");
    const url = hashIndex > -1 ? (location$1.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
    try {
      history$1[replace$1 ? "replaceState" : "pushState"](state, "", url);
      historyState.value = state;
    } catch (err2) {
      console.error(err2);
      location$1[replace$1 ? "replace" : "assign"](url);
    }
  }
  function replace(to, data) {
    changeLocation(to, assign$1({}, history$1.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position }), true);
    currentLocation.value = to;
  }
  function push(to, data) {
    const currentState = assign$1({}, historyState.value, history$1.state, {
      forward: to,
      scroll: computeScrollPosition()
    });
    changeLocation(currentState.current, currentState, true);
    changeLocation(to, assign$1({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data), false);
    currentLocation.value = to;
  }
  return {
    location: currentLocation,
    state: historyState,
    push,
    replace
  };
}
function createWebHistory(base) {
  base = normalizeBase(base);
  const historyNavigation = useHistoryStateNavigation(base);
  const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
  function go(delta, triggerListeners = true) {
    if (!triggerListeners)
      historyListeners.pauseListeners();
    history.go(delta);
  }
  const routerHistory = assign$1({
    location: "",
    base,
    go,
    createHref: createHref.bind(null, base)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => historyNavigation.location.value
  });
  Object.defineProperty(routerHistory, "state", {
    enumerable: true,
    get: () => historyNavigation.state.value
  });
  return routerHistory;
}
function createWebHashHistory(base) {
  base = location.host ? base || location.pathname + location.search : "";
  if (!base.includes("#"))
    base += "#";
  return createWebHistory(base);
}
let TokenType = /* @__PURE__ */ function(TokenType$1) {
  TokenType$1[TokenType$1["Static"] = 0] = "Static";
  TokenType$1[TokenType$1["Param"] = 1] = "Param";
  TokenType$1[TokenType$1["Group"] = 2] = "Group";
  return TokenType$1;
}({});
var TokenizerState = /* @__PURE__ */ function(TokenizerState$1) {
  TokenizerState$1[TokenizerState$1["Static"] = 0] = "Static";
  TokenizerState$1[TokenizerState$1["Param"] = 1] = "Param";
  TokenizerState$1[TokenizerState$1["ParamRegExp"] = 2] = "ParamRegExp";
  TokenizerState$1[TokenizerState$1["ParamRegExpEnd"] = 3] = "ParamRegExpEnd";
  TokenizerState$1[TokenizerState$1["EscapeNext"] = 4] = "EscapeNext";
  return TokenizerState$1;
}(TokenizerState || {});
const ROOT_TOKEN = {
  type: TokenType.Static,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/"))
    throw new Error(`Invalid path "${path}"`);
  function crash(message) {
    throw new Error(`ERR (${state})/"${buffer}": ${message}`);
  }
  let state = TokenizerState.Static;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i2 = 0;
  let char;
  let buffer = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer)
      return;
    if (state === TokenizerState.Static)
      segment.push({
        type: TokenType.Static,
        value: buffer
      });
    else if (state === TokenizerState.Param || state === TokenizerState.ParamRegExp || state === TokenizerState.ParamRegExpEnd) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: TokenType.Param,
        value: buffer,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else
      crash("Invalid state to consume buffer");
    buffer = "";
  }
  function addCharToBuffer() {
    buffer += char;
  }
  while (i2 < path.length) {
    char = path[i2++];
    if (char === "\\" && state !== TokenizerState.ParamRegExp) {
      previousState = state;
      state = TokenizerState.EscapeNext;
      continue;
    }
    switch (state) {
      case TokenizerState.Static:
        if (char === "/") {
          if (buffer)
            consumeBuffer();
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = TokenizerState.Param;
        } else
          addCharToBuffer();
        break;
      case TokenizerState.EscapeNext:
        addCharToBuffer();
        state = previousState;
        break;
      case TokenizerState.Param:
        if (char === "(")
          state = TokenizerState.ParamRegExp;
        else if (VALID_PARAM_RE.test(char))
          addCharToBuffer();
        else {
          consumeBuffer();
          state = TokenizerState.Static;
          if (char !== "*" && char !== "?" && char !== "+")
            i2--;
        }
        break;
      case TokenizerState.ParamRegExp:
        if (char === ")")
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = TokenizerState.ParamRegExpEnd;
        else
          customRe += char;
        break;
      case TokenizerState.ParamRegExpEnd:
        consumeBuffer();
        state = TokenizerState.Static;
        if (char !== "*" && char !== "?" && char !== "+")
          i2--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === TokenizerState.ParamRegExp)
    crash(`Unfinished custom RegExp for param "${buffer}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
var PathScore = /* @__PURE__ */ function(PathScore$1) {
  PathScore$1[PathScore$1["_multiplier"] = 10] = "_multiplier";
  PathScore$1[PathScore$1["Root"] = 90] = "Root";
  PathScore$1[PathScore$1["Segment"] = 40] = "Segment";
  PathScore$1[PathScore$1["SubSegment"] = 30] = "SubSegment";
  PathScore$1[PathScore$1["Static"] = 40] = "Static";
  PathScore$1[PathScore$1["Dynamic"] = 20] = "Dynamic";
  PathScore$1[PathScore$1["BonusCustomRegExp"] = 10] = "BonusCustomRegExp";
  PathScore$1[PathScore$1["BonusWildcard"] = -50] = "BonusWildcard";
  PathScore$1[PathScore$1["BonusRepeatable"] = -20] = "BonusRepeatable";
  PathScore$1[PathScore$1["BonusOptional"] = -8] = "BonusOptional";
  PathScore$1[PathScore$1["BonusStrict"] = 0.7000000000000001] = "BonusStrict";
  PathScore$1[PathScore$1["BonusCaseSensitive"] = 0.25] = "BonusCaseSensitive";
  return PathScore$1;
}(PathScore || {});
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign$1({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern = options.start ? "^" : "";
  const keys = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [PathScore.Root];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = PathScore.Segment + (options.sensitive ? PathScore.BonusCaseSensitive : 0);
      if (token.type === TokenType.Static) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += PathScore.Static;
      } else if (token.type === TokenType.Param) {
        const { value, repeatable, optional, regexp } = token;
        keys.push({
          name: value,
          repeatable,
          optional
        });
        const re$1 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re$1 !== BASE_PARAM_PATTERN) {
          subSegmentScore += PathScore.BonusCustomRegExp;
          try {
            `${re$1}`;
          } catch (err2) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re$1}): ` + err2.message);
          }
        }
        let subPattern = repeatable ? `((?:${re$1})(?:/(?:${re$1}))*)` : `(${re$1})`;
        if (!tokenIndex)
          subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += PathScore.Dynamic;
        if (optional)
          subSegmentScore += PathScore.BonusOptional;
        if (repeatable)
          subSegmentScore += PathScore.BonusRepeatable;
        if (re$1 === ".*")
          subSegmentScore += PathScore.BonusWildcard;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i2 = score.length - 1;
    score[i2][score[i2].length - 1] += PathScore.BonusStrict;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict && !pattern.endsWith("/"))
    pattern += "(?:/|$)";
  const re = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse(path) {
    const match = path.match(re);
    const params = {};
    if (!match)
      return null;
    for (let i2 = 1; i2 < match.length; i2++) {
      const value = match[i2] || "";
      const key = keys[i2 - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment)
        if (token.type === TokenType.Static)
          path += token.value;
        else if (token.type === TokenType.Param) {
          const { value, repeatable, optional } = token;
          const param = value in params ? params[value] : "";
          if (isArray(param) && !repeatable)
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          const text = isArray(param) ? param.join("/") : param;
          if (!text)
            if (optional) {
              if (segment.length < 2)
                if (path.endsWith("/"))
                  path = path.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
            } else
              throw new Error(`Missing required param "${value}"`);
          path += text;
        }
    }
    return path || "/";
  }
  return {
    re,
    score,
    keys,
    parse,
    stringify
  };
}
function compareScoreArray(a2, b2) {
  let i2 = 0;
  while (i2 < a2.length && i2 < b2.length) {
    const diff = b2[i2] - a2[i2];
    if (diff)
      return diff;
    i2++;
  }
  if (a2.length < b2.length)
    return a2.length === 1 && a2[0] === PathScore.Static + PathScore.Segment ? -1 : 1;
  else if (a2.length > b2.length)
    return b2.length === 1 && b2[0] === PathScore.Static + PathScore.Segment ? 1 : -1;
  return 0;
}
function comparePathParserScore(a2, b2) {
  let i2 = 0;
  const aScore = a2.score;
  const bScore = b2.score;
  while (i2 < aScore.length && i2 < bScore.length) {
    const comp = compareScoreArray(aScore[i2], bScore[i2]);
    if (comp)
      return comp;
    i2++;
  }
  if (Math.abs(bScore.length - aScore.length) === 1) {
    if (isLastScoreNegative(aScore))
      return 1;
    if (isLastScoreNegative(bScore))
      return -1;
  }
  return bScore.length - aScore.length;
}
function isLastScoreNegative(score) {
  const last = score[score.length - 1];
  return score.length > 0 && last[last.length - 1] < 0;
}
const PATH_PARSER_OPTIONS_DEFAULTS = {
  strict: false,
  end: true,
  sensitive: false
};
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  const matcher = assign$1(parser, {
    record,
    parent,
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes2, globalOptions) {
  const matchers = [];
  const matcherMap = /* @__PURE__ */ new Map();
  globalOptions = mergeOptions(PATH_PARSER_OPTIONS_DEFAULTS, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [mainNormalizedRecord];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases)
        normalizedRecords.push(normalizeRouteRecord(assign$1({}, mainNormalizedRecord, {
          components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
          path: alias,
          aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
        })));
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord;
      if (parent && path[0] !== "/") {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher)) {
          removeRoute(record.name);
        }
      }
      if (isMatchable(matcher))
        insertMatcher(matcher);
      if (mainNormalizedRecord.children) {
        const children = mainNormalizedRecord.children;
        for (let i2 = 0; i2 < children.length; i2++)
          addRoute(children[i2], matcher, originalRecord && originalRecord.children[i2]);
      }
      originalRecord = originalRecord || matcher;
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop$1;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index2 = matchers.indexOf(matcherRef);
      if (index2 > -1) {
        matchers.splice(index2, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    const index2 = findInsertionIndex(matcher, matchers);
    matchers.splice(index2, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve2(location$1, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location$1 && location$1.name) {
      matcher = matcherMap.get(location$1.name);
      if (!matcher)
        throw createRouterError(ErrorTypes.MATCHER_NOT_FOUND, { location: location$1 });
      name = matcher.record.name;
      params = assign$1(pickParams(currentLocation.params, matcher.keys.filter((k2) => !k2.optional).concat(matcher.parent ? matcher.parent.keys.filter((k2) => k2.optional) : []).map((k2) => k2.name)), location$1.params && pickParams(location$1.params, matcher.keys.map((k2) => k2.name)));
      path = matcher.stringify(params);
    } else if (location$1.path != null) {
      path = location$1.path;
      matcher = matchers.find((m) => m.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(ErrorTypes.MATCHER_NOT_FOUND, {
          location: location$1,
          currentLocation
        });
      name = matcher.record.name;
      params = assign$1({}, currentLocation.params, location$1.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes2.forEach((route) => addRoute(route));
  function clearRoutes() {
    matchers.length = 0;
    matcherMap.clear();
  }
  return {
    addRoute,
    resolve: resolve2,
    removeRoute,
    clearRoutes,
    getRoutes,
    getRecordMatcher
  };
}
function pickParams(params, keys) {
  const newParams = {};
  for (const key of keys)
    if (key in params)
      newParams[key] = params[key];
  return newParams;
}
function normalizeRouteRecord(record) {
  const normalized = {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: record.aliasOf,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in record ? record.components || null : record.component && { default: record.component }
  };
  Object.defineProperty(normalized, "mods", { value: {} });
  return normalized;
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record)
    propsObject.default = props;
  else
    for (const name in record.components)
      propsObject[name] = typeof props === "object" ? props[name] : props;
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign$1(meta, record.meta), {});
}
function findInsertionIndex(matcher, matchers) {
  let lower = 0;
  let upper = matchers.length;
  while (lower !== upper) {
    const mid = lower + upper >> 1;
    if (comparePathParserScore(matcher, matchers[mid]) < 0)
      upper = mid;
    else
      lower = mid + 1;
  }
  const insertionAncestor = getInsertionAncestor(matcher);
  if (insertionAncestor) {
    upper = matchers.lastIndexOf(insertionAncestor, upper - 1);
  }
  return upper;
}
function getInsertionAncestor(matcher) {
  let ancestor = matcher;
  while (ancestor = ancestor.parent)
    if (isMatchable(ancestor) && comparePathParserScore(matcher, ancestor) === 0)
      return ancestor;
}
function isMatchable({ record }) {
  return !!(record.name || record.components && Object.keys(record.components).length || record.redirect);
}
function useLink(props) {
  const router2 = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => {
    const to = unref(props.to);
    return router2.resolve(to);
  });
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index2 = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index2 > -1)
      return index2;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index2;
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e = {}) {
    if (guardEvent(e)) {
      const p2 = router2[unref(props.replace) ? "replace" : "push"](unref(props.to)).catch(noop$1);
      if (props.viewTransition && typeof document !== "undefined" && "startViewTransition" in document)
        document.startViewTransition(() => p2);
      return p2;
    }
    return Promise.resolve();
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
function preferSingleVNode(vnodes) {
  return vnodes.length === 1 ? vnodes[0] : vnodes;
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    },
    viewTransition: Boolean
  },
  useLink,
  setup(props, { slots }) {
    const link = reactive(useLink(props));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && preferSingleVNode(slots.default(link));
      return props.custom ? children : h("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e) {
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
    return;
  if (e.defaultPrevented)
    return;
  if (e.button !== void 0 && e.button !== 0)
    return;
  if (e.currentTarget && e.currentTarget.getAttribute) {
    const target = e.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e.preventDefault)
    e.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else if (!isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i2) => value !== outerValue[i2]))
      return false;
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  compatConfig: { MODE: 3 },
  setup(props, { attrs, slots }) {
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props.route || injectedRoute.value);
    const injectedDepth = inject(viewDepthKey, 0);
    const depth = computed(() => {
      let initialDepth = unref(injectedDepth);
      const { matched } = routeToDisplay.value;
      let matchedRoute;
      while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components)
        initialDepth++;
      return initialDepth;
    });
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
    provide(viewDepthKey, computed(() => depth.value + 1));
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref$1();
    watch(() => [
      viewRef.value,
      matchedRouteRef.value,
      props.name
    ], ([instance, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance;
        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size)
            to.leaveGuards = from.leaveGuards;
          if (!to.updateGuards.size)
            to.updateGuards = from.updateGuards;
        }
      }
      if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance))
        (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const currentName = props.name;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[currentName];
      if (!ViewComponent)
        return normalizeSlot(slots.default, {
          Component: ViewComponent,
          route
        });
      const routePropsOption = matchedRoute.props[currentName];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted)
          matchedRoute.instances[currentName] = null;
      };
      const component = h(ViewComponent, assign$1({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      return normalizeSlot(slots.default, {
        Component: component,
        route
      }) || component;
    };
  }
});
function normalizeSlot(slot, data) {
  if (!slot)
    return null;
  const slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && options.scrollBehavior && "scrollRestoration" in history)
    history.scrollRestoration = "manual";
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = applyToParams.bind(null, decode);
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else
      record = parentOrRoute;
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher)
      matcher.removeRoute(recordMatcher);
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve2(rawLocation, currentLocation) {
    currentLocation = assign$1({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute$1 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href$1 = routerHistory.createHref(locationNormalized.fullPath);
      return assign$1(locationNormalized, matchedRoute$1, {
        params: decodeParams(matchedRoute$1.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href$1
      });
    }
    let matcherLocation;
    if (rawLocation.path != null) {
      matcherLocation = assign$1({}, rawLocation, { path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path });
    } else {
      const targetParams = assign$1({}, rawLocation.params);
      for (const key in targetParams)
        if (targetParams[key] == null)
          delete targetParams[key];
      matcherLocation = assign$1({}, rawLocation, { params: encodeParams(targetParams) });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign$1({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    return assign$1({
      fullPath,
      hash,
      query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign$1({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to)
      return createRouterError(ErrorTypes.NAVIGATION_CANCELLED, {
        from,
        to
      });
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign$1(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to, from) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to, from) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
        newTargetLocation.params = {};
      }
      return assign$1({
        query: to.query,
        hash: to.hash,
        params: newTargetLocation.path != null ? {} : to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve2(to);
    const from = currentRoute.value;
    const data = to.state;
    const force = to.force;
    const replace$1 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation, from);
    if (shouldRedirect)
      return pushWithRedirect(assign$1(locationAsObject(shouldRedirect), {
        state: typeof shouldRedirect === "object" ? assign$1({}, data, shouldRedirect.state) : data,
        force,
        replace: replace$1
      }), redirectedFrom || targetLocation);
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(ErrorTypes.NAVIGATION_DUPLICATED, {
        to: toLocation,
        from
      });
      handleScroll(from, from, true, false);
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, ErrorTypes.NAVIGATION_GUARD_REDIRECT) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure$1) => {
      if (failure$1) {
        if (isNavigationFailure(failure$1, ErrorTypes.NAVIGATION_GUARD_REDIRECT)) {
          return pushWithRedirect(assign$1({ replace: replace$1 }, locationAsObject(failure$1.to), {
            state: typeof failure$1.to === "object" ? assign$1({}, data, failure$1.to.state) : data,
            force
          }), redirectedFrom || toLocation);
        }
      } else
        failure$1 = finalizeNavigation(toLocation, from, true, replace$1, data);
      triggerAfterEach(toLocation, from, failure$1);
      return failure$1;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function runWithContext(fn) {
    const app = installedApps.values().next().value;
    return app && typeof app.runWithContext === "function" ? app.runWithContext(fn) : fn();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords)
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list())
        guards.push(guardToPromiseFn(guard, to, from));
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords)
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of enteringRecords)
        if (record.beforeEnter)
          if (isArray(record.beforeEnter))
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          else
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from, runWithContext);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list())
        guards.push(guardToPromiseFn(guard, to, from));
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err2) => isNavigationFailure(err2, ErrorTypes.NAVIGATION_CANCELLED) ? err2 : Promise.reject(err2));
  }
  function triggerAfterEach(to, from, failure) {
    afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from, failure)));
  }
  function finalizeNavigation(toLocation, from, isPush, replace$1, data) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    if (isPush)
      if (replace$1 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign$1({ scroll: isFirstNavigation && state && state.scroll }, data));
      else
        routerHistory.push(toLocation.fullPath, data);
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    if (removeHistoryListener)
      return;
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      if (!router2.listening)
        return;
      const toLocation = resolve2(to);
      const shouldRedirect = handleRedirectRecord(toLocation, router2.currentRoute.value);
      if (shouldRedirect) {
        pushWithRedirect(assign$1(shouldRedirect, {
          replace: true,
          force: true
        }), toLocation).catch(noop$1);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser)
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(error, ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_CANCELLED))
          return error;
        if (isNavigationFailure(error, ErrorTypes.NAVIGATION_GUARD_REDIRECT)) {
          pushWithRedirect(assign$1(locationAsObject(error.to), { force: true }), toLocation).then((failure) => {
            if (isNavigationFailure(failure, ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_DUPLICATED) && !info.delta && info.type === NavigationType.pop)
              routerHistory.go(-1, false);
          }).catch(noop$1);
          return Promise.reject();
        }
        if (info.delta)
          routerHistory.go(-info.delta, false);
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(toLocation, from, false);
        if (failure) {
          if (info.delta && !isNavigationFailure(failure, ErrorTypes.NAVIGATION_CANCELLED))
            routerHistory.go(-info.delta, false);
          else if (info.type === NavigationType.pop && isNavigationFailure(failure, ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_DUPLICATED))
            routerHistory.go(-1, false);
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop$1);
    });
  }
  let readyHandlers = useCallbacks();
  let errorListeners = useCallbacks();
  let ready;
  function triggerError(error, to, from) {
    markAsReady(error);
    const list = errorListeners.list();
    if (list.length)
      list.forEach((handler) => handler(error, to, from));
    else {
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve$1, reject) => {
      readyHandlers.add([resolve$1, reject]);
    });
  }
  function markAsReady(err2) {
    if (!ready) {
      ready = !err2;
      setupListeners();
      readyHandlers.list().forEach(([resolve$1, reject]) => err2 ? reject(err2) : resolve$1());
      readyHandlers.reset();
    }
    return err2;
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser || !scrollBehavior)
      return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err2) => triggerError(err2, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = /* @__PURE__ */ new Set();
  const router2 = {
    currentRoute,
    listening: true,
    addRoute,
    removeRoute,
    clearRoutes: matcher.clearRoutes,
    hasRoute,
    getRoutes,
    resolve: resolve2,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorListeners.add,
    isReady,
    install(app) {
      app.component("RouterLink", RouterLink);
      app.component("RouterView", RouterView);
      app.config.globalProperties.$router = router2;
      Object.defineProperty(app.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err2) => {
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED)
        Object.defineProperty(reactiveRoute, key, {
          get: () => currentRoute.value[key],
          enumerable: true
        });
      app.provide(routerKey, router2);
      app.provide(routeLocationKey, shallowReactive(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app.unmount;
      installedApps.add(app);
      app.unmount = function() {
        installedApps.delete(app);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          removeHistoryListener = null;
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
    }
  };
  function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), Promise.resolve());
  }
  return router2;
}
function useRouter() {
  return inject(routerKey);
}
function useRoute(_name) {
  return inject(routeLocationKey);
}
/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = Symbol();
function isPlainObject(o2) {
  return o2 && typeof o2 === "object" && Object.prototype.toString.call(o2) === "[object Object]" && typeof o2.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref$1({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      pinia._a = app;
      app.provide(piniaSymbol, pinia);
      app.config.globalProperties.$pinia = pinia;
      toBeInstalled.forEach((plugin) => _p.push(plugin));
      toBeInstalled = [];
    },
    use(plugin) {
      if (!this._a) {
        toBeInstalled.push(plugin);
      } else {
        _p.push(plugin);
      }
      return this;
    },
    _p,
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.add(callback);
  const removeSubscription = () => {
    const isDel = subscriptions.delete(callback);
    isDel && onCleanup();
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext = (fn) => fn();
const ACTION_MARKER = Symbol();
const ACTION_NAME = Symbol();
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  } else if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = Symbol();
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !Object.prototype.hasOwnProperty.call(obj, skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o2) {
  return !!(isRef(o2) && o2.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && true) {
      pinia.state.value[id] = state ? state() : {};
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  const $subscribeOptions = { deep: true };
  let isListening;
  let isSyncListening;
  let subscriptions = /* @__PURE__ */ new Set();
  let actionSubscriptions = /* @__PURE__ */ new Set();
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && true) {
    pinia.state.value[$id] = {};
  }
  ref$1({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  } : noop;
  function $dispose() {
    scope.stop();
    subscriptions.clear();
    actionSubscriptions.clear();
    pinia._s.delete($id);
  }
  const action = (fn, name = "") => {
    if (ACTION_MARKER in fn) {
      fn[ACTION_NAME] = name;
      return fn;
    }
    const wrappedAction = function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackSet = /* @__PURE__ */ new Set();
      const onErrorCallbackSet = /* @__PURE__ */ new Set();
      function after(callback) {
        afterCallbackSet.add(callback);
      }
      function onError(callback) {
        onErrorCallbackSet.add(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name: wrappedAction[ACTION_NAME],
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = fn.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackSet, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackSet, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackSet, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackSet, ret);
      return ret;
    };
    wrappedAction[ACTION_MARKER] = true;
    wrappedAction[ACTION_NAME] = name;
    return wrappedAction;
  };
  const partialStore = {
    _p: pinia,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(partialStore);
  pinia._s.set($id, store);
  const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
  const setupStore = runWithContext(() => pinia._e.run(() => (scope = effectScope()).run(() => setup({ action }))));
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        pinia.state.value[$id][key] = prop;
      }
    } else if (typeof prop === "function") {
      const actionValue = action(prop, key);
      setupStore[key] = actionValue;
      optionsForPlugin.actions[key] = prop;
    } else
      ;
  }
  assign(store, setupStore);
  assign(toRaw(store), setupStore);
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
/*! #__NO_SIDE_EFFECTS__ */
function defineStore(id, setup, setupOptions) {
  let options;
  const isSetupStore = typeof setup === "function";
  options = isSetupStore ? setupOptions : setup;
  function useStore(pinia, hot) {
    const hasContext = hasInjectionContext();
    pinia = pinia || (hasContext ? inject(piniaSymbol, null) : null);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
const useTaskDraftStore = defineStore("taskDraft", {
  state: () => ({ draft: null, mode: "create" }),
  actions: {
    setDraft(task, mode) {
      this.draft = task;
      this.mode = mode;
    },
    clear() {
      this.draft = null;
      this.mode = "create";
    }
  }
});
const SimplifiedView = () => __vitePreload(() => import("./SimplifiedView.dd7bce3e.js"), true ? [] : void 0, import.meta.url);
const AddTaskView = () => __vitePreload(() => import("./SimpleAddTask.39c68e2a.js"), true ? ["./SimpleAddTask.39c68e2a.js","./ParameterInput.vue_vue_type_script_setup_true_lang.3058bac2.js","./InfoTile.vue_vue_type_script_setup_true_lang.495d7301.js","./SimpleFormCard.vue_vue_type_script_setup_true_lang.9e11206d.js","./open-closed.8a6c3d9d.js","./ParameterInput.751c6b04.css","./SimpleAddTask.a283e341.css"] : void 0, import.meta.url);
const ManageRemotesView = () => __vitePreload(() => import("./SimpleManageRemotes.ac60f2b0.js"), true ? ["./SimpleManageRemotes.ac60f2b0.js","./SimpleFormCard.vue_vue_type_script_setup_true_lang.9e11206d.js"] : void 0, import.meta.url);
const routes = [
  { path: "/simple", name: "SimpleTasks", component: SimplifiedView },
  { path: "/simple/new", name: "SimpleAddTask", component: AddTaskView, props: { mode: "create" } },
  {
    path: "/simple/edit",
    name: "SimpleEditTask",
    component: AddTaskView,
    props: () => {
      const store = useTaskDraftStore();
      return { mode: "edit", existingTask: store.draft };
    }
  },
  { path: "/simple/accounts", name: "SimpleManageRemotes", component: ManageRemotesView }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
router.beforeEach((to, from) => {
  var _a2;
  const store = useTaskDraftStore();
  const comingBackFromRemotes = from.name === "SimpleManageRemotes";
  if (to.name === "SimpleAddTask" && !comingBackFromRemotes)
    (_a2 = store.clear) == null ? void 0 : _a2.call(store);
  if (to.name === "SimpleEditTask") {
    if (!store.draft && !comingBackFromRemotes)
      return { name: "SimpleTasks" };
  }
  return true;
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    const appVersion = "1.4.2-undefinedbuilt_from_source";
    const isSimple = ref$1(false);
    const updateFlag = () => {
      const qs = new URLSearchParams(window.location.search);
      const simpleQ = qs.get("simple") === "1";
      const simpleHash = location.hash.startsWith("#/simple") || location.hash === "#simple";
      isSimple.value = simpleQ || simpleHash;
      if (simpleQ && !location.hash.startsWith("#/simple")) {
        router.replace("/simple");
      }
    };
    function initializeTaskTemplates() {
      const zfsRepTaskTemplate = new ZFSReplicationTaskTemplate();
      const autoSnapTaskTemplate = new AutomatedSnapshotTaskTemplate();
      const rsyncTaskTemplate = new RsyncTaskTemplate();
      const scrubTaskTemplate = new ScrubTaskTemplate();
      const smartTestTemplate = new SmartTestTemplate();
      const cloudSyncTaskTemplate = new CloudSyncTaskTemplate();
      const customTaskTemplate = new CustomTaskTemplate();
      return [
        zfsRepTaskTemplate,
        autoSnapTaskTemplate,
        rsyncTaskTemplate,
        scrubTaskTemplate,
        smartTestTemplate,
        cloudSyncTaskTemplate,
        customTaskTemplate
      ];
    }
    function filterTemplatesForPrivilege(templates, isAdmin) {
      if (isAdmin)
        return templates;
      return templates.filter((t) => t instanceof RsyncTaskTemplate || t instanceof CloudSyncTaskTemplate);
    }
    const taskTemplates = initializeTaskTemplates();
    const taskInstances = ref$1([]);
    const cloudSyncRemotes = ref$1([]);
    const myScheduler = new Scheduler(taskTemplates, taskInstances.value);
    const myRemoteManager = new RemoteManager(cloudSyncRemotes.value);
    const loading = ref$1(false);
    const truncateText = ref$1("overflow-hidden whitespace-nowrap text-ellipsis");
    const entries = ref$1([]);
    const myTaskLog = new TaskExecutionLog(entries.value);
    const syncSimpleModeClass = () => {
      const root = document.documentElement;
      if (isSimple.value) {
        root.classList.add("simple-mode");
      } else {
        root.classList.remove("simple-mode");
      }
    };
    onMounted(async () => {
      updateFlag();
      syncSimpleModeClass();
      window.addEventListener("popstate", updateFlag);
      window.addEventListener("hashchange", updateFlag);
      watch(isSimple, () => syncSimpleModeClass(), { immediate: true });
      loading.value = true;
      const isAdmin = await currentUserIsPrivileged();
      const filtered = filterTemplatesForPrivilege([...taskTemplates], isAdmin);
      taskTemplates.splice(0, taskTemplates.length, ...filtered);
      await myScheduler.init();
      await Promise.all([
        myScheduler.loadTaskInstances(),
        myRemoteManager.getRemotes()
      ]);
      loading.value = false;
    });
    onUnmounted(() => {
      window.removeEventListener("popstate", updateFlag);
      window.removeEventListener("hashchange", updateFlag);
    });
    provide(loadingInjectionKey, loading);
    provide(schedulerInjectionKey, myScheduler);
    provide(remoteManagerInjectionKey, myRemoteManager);
    provide(rcloneRemotesInjectionKey, cloudSyncRemotes);
    provide(logInjectionKey, myTaskLog);
    provide(taskInstancesInjectionKey, taskInstances);
    provide(taskTemplatesInjectionKey, taskTemplates);
    provide(truncateTextInjectionKey, truncateText);
    provide(truncateTextInjectionKey, truncateText);
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock(Fragment, null, [
        isSimple.value ? (openBlock(), createBlock(_component_router_view, { key: 0 }, {
          default: withCtx(({ Component, route }) => [
            (openBlock(), createBlock(KeepAlive, { include: "SimpleTaskForm" }, [
              (openBlock(), createBlock(resolveDynamicComponent(Component), {
                key: route.query.session || route.name
              }))
            ], 1024))
          ]),
          _: 1
        })) : createCommentVNode("", true),
        isSimple.value ? (openBlock(), createBlock(unref(NotificationView), { key: 1 })) : (openBlock(), createBlock(unref(HoustonAppContainer), {
          key: 2,
          moduleName: "Task Scheduler",
          appVersion: unref(appVersion)
        }, {
          default: withCtx(() => [
            createVNode(unref(CenteredCardColumn), null, {
              default: withCtx(() => [
                createVNode(unref(CardContainer), null, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["appVersion"]))
      ], 64);
    };
  }
});
const index = "";
const aliasStyleToTheme = {
  homelab: "theme-homelab",
  professional: "theme-professional",
  studio: "theme-studio"
};
const ALL_THEMES = ["theme-default", "theme-homelab", "theme-professional", "theme-studio"];
function applyThemeFromAliasStyle(aliasStyle) {
  const normalized = (aliasStyle || "").toLowerCase();
  const themeClass = aliasStyleToTheme[normalized] || "theme-default";
  const root = document.documentElement;
  ALL_THEMES.forEach((c) => root.classList.remove(c));
  root.classList.add(themeClass);
  return themeClass;
}
const useClientContextStore = defineStore("clientCtx", {
  state: () => ({ clientId: "" }),
  actions: {
    hydrateFromUrl() {
      try {
        const url = new URL(window.location.href);
        const fromSearch = url.searchParams.get("client_id");
        if (fromSearch) {
          this.clientId = fromSearch;
          return;
        }
        const hash = url.hash || "";
        const i2 = hash.indexOf("?");
        if (i2 !== -1) {
          const hp = new URLSearchParams(hash.slice(i2 + 1));
          const fromHash = hp.get("client_id");
          if (fromHash) {
            this.clientId = fromHash;
            return;
          }
        }
      } catch {
      }
    }
  }
});
async function bootstrapApp() {
  try {
    const serverInfoResult = await server.getServerInfo();
    if (serverInfoResult && typeof serverInfoResult.match === "function") {
      serverInfoResult.match(
        (info) => applyThemeFromAliasStyle(info["Alias Style"]),
        () => applyThemeFromAliasStyle()
      );
    } else {
      const info = serverInfoResult || {};
      applyThemeFromAliasStyle(info["Alias Style"]);
    }
  } catch {
    const hashParams = new URLSearchParams((location.hash || "").replace(/^#/, ""));
    const aliasFromHash = hashParams.get("aliasStyle");
    const aliasFromStorage = localStorage.getItem("aliasStyle");
    applyThemeFromAliasStyle(aliasFromHash || aliasFromStorage || void 0);
  }
  const app = createApp(_sfc_main);
  const pinia = createPinia();
  app.use(pinia);
  const clientCtx = useClientContextStore(pinia);
  clientCtx.hydrateFromUrl();
  router.beforeEach((to, _from, next) => {
    if (!clientCtx.clientId)
      clientCtx.hydrateFromUrl();
    const id = clientCtx.clientId;
    if (id) {
      const q = to.query.client_id;
      const current = Array.isArray(q) ? q[0] : q;
      if (current !== id) {
        next({ ...to, query: { ...to.query, client_id: id } });
        return;
      }
    }
    next();
  });
  app.use(router);
  await router.isReady();
  app.mount("#app");
}
bootstrapApp();
export {
  A$1 as $,
  taskStatusClass as A,
  pushNotification as B,
  mergeModels as C,
  useModel as D,
  withDirectives as E,
  Fragment as F,
  vModelSelect as G,
  vModelText as H,
  parseTaskScheduleIntoString as I,
  nextTick as J,
  provide as K,
  createBlock as L,
  CloudSyncTaskTemplate as M,
  Notification as N,
  AutomatedSnapshotTaskTemplate as O,
  SmartTestTemplate as P,
  CustomTaskTemplate as Q,
  RsyncTaskTemplate as R,
  ScrubTaskTemplate as S,
  taskTemplatesInjectionKey as T,
  TaskInstance as U,
  TaskSchedule as V,
  i$1 as W,
  u$5 as X,
  o$4 as Y,
  ZFSReplicationTaskTemplate as Z,
  _sfc_main$b as _,
  createBaseVNode as a,
  watchEffect as a0,
  s$1 as a1,
  N$1 as a2,
  inject as a3,
  o$3 as a4,
  vModelCheckbox as a5,
  testSSH as a6,
  getPoolData as a7,
  getDatasetData as a8,
  ParameterNode as a9,
  getProviderLogo as aA,
  withModifiers as aB,
  resolveDynamicComponent as aC,
  truncateTextInjectionKey as aD,
  remoteManagerInjectionKey as aE,
  rcloneRemotesInjectionKey as aF,
  checkLocalPathExists as aG,
  validateRemotePath as aH,
  vModelRadio as aI,
  __vitePreload as aJ,
  renderSlot as aK,
  cloudSyncProviders as aL,
  reactive as aM,
  CardContainer as aN,
  normalizeStyle as aO,
  getButtonStyles as aP,
  h as aQ,
  f$1 as aR,
  u$4 as aS,
  shallowRef as aT,
  Teleport as aU,
  getCurrentInstance as aV,
  k$1 as aW,
  S$1 as aX,
  T$1 as aY,
  upperCaseWord as aZ,
  ZfsDatasetParameter as aa,
  BoolParameter as ab,
  IntParameter as ac,
  StringParameter as ad,
  SnapshotRetentionParameter as ae,
  testNetcat as af,
  listSnapshots as ag,
  mostRecentCommonSnapshot as ah,
  destAheadOfCommon as ai,
  withCtx as aj,
  unwrap as ak,
  server$1 as al,
  Command as am,
  useClientContextStore as an,
  ue as ao,
  LocationParameter as ap,
  SelectionParameter as aq,
  SelectionOption as ar,
  vModelDynamic as as,
  testOrSetupSSH as at,
  validateLocalPath as au,
  createStaticVNode as av,
  getDisks as aw,
  getDiskIDName as ax,
  truncateName as ay,
  useRoute as az,
  useTaskDraftStore as b,
  createElementBlock as c,
  defineComponent as d,
  computed as e,
  onMounted as f,
  onActivated as g,
  onUnmounted as h,
  injectWithCheck as i,
  useLiveTaskStatus as j,
  unref as k,
  createVNode as l,
  createTextVNode as m,
  render$h as n,
  openBlock as o,
  createCommentVNode as p,
  renderList as q,
  ref$1 as r,
  loadingInjectionKey as s,
  schedulerInjectionKey as t,
  useRouter as u,
  taskInstancesInjectionKey as v,
  watch as w,
  logInjectionKey as x,
  toDisplayString as y,
  normalizeClass as z
};
