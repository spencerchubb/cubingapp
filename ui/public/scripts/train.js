(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../node_modules/@firebase/auth/node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "../node_modules/@firebase/auth/node_modules/tslib/tslib.js"(exports, module) {
      var __extends2;
      var __assign2;
      var __rest2;
      var __decorate2;
      var __param2;
      var __metadata2;
      var __awaiter2;
      var __generator2;
      var __exportStar2;
      var __values2;
      var __read2;
      var __spread2;
      var __spreadArrays2;
      var __spreadArray2;
      var __await2;
      var __asyncGenerator2;
      var __asyncDelegator2;
      var __asyncValues2;
      var __makeTemplateObject2;
      var __importStar2;
      var __importDefault2;
      var __classPrivateFieldGet2;
      var __classPrivateFieldSet2;
      var __classPrivateFieldIn2;
      var __createBinding2;
      (function(factory) {
        var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root, createExporter(module.exports)));
        } else {
          factory(createExporter(root));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v) {
            return exports2[id] = previous ? previous(id, v) : v;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p))
              d[p] = b[p];
        };
        __extends2 = function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
        __assign2 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        __rest2 = function(s, e) {
          var t = {};
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
            }
          return t;
        };
        __decorate2 = function(decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        __param2 = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __metadata2 = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter2 = function(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
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
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator2 = function(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f2, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f2)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f2 = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __exportStar2 = function(m, o) {
          for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
              __createBinding2(o, m, p);
        };
        __createBinding2 = Object.create ? function(o, m, k2, k22) {
          if (k22 === void 0)
            k22 = k2;
          var desc = Object.getOwnPropertyDescriptor(m, k2);
          if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() {
              return m[k2];
            } };
          }
          Object.defineProperty(o, k22, desc);
        } : function(o, m, k2, k22) {
          if (k22 === void 0)
            k22 = k2;
          o[k22] = m[k2];
        };
        __values2 = function(o) {
          var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
          if (m)
            return m.call(o);
          if (o && typeof o.length === "number")
            return {
              next: function() {
                if (o && i >= o.length)
                  o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read2 = function(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m)
            return o;
          var i = m.call(o), r, ar = [], e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = { error };
          } finally {
            try {
              if (r && !r.done && (m = i["return"]))
                m.call(i);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        };
        __spread2 = function() {
          for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read2(arguments[i]));
          return ar;
        };
        __spreadArrays2 = function() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
          for (var r = Array(s), k2 = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k2++)
              r[k2] = a[j];
          return r;
        };
        __spreadArray2 = function(to, from, pack) {
          if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar)
                  ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from));
        };
        __await2 = function(v) {
          return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
        };
        __asyncGenerator2 = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []), i, q = [];
          return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function verb(n) {
            if (g[n])
              i[n] = function(v) {
                return new Promise(function(a, b) {
                  q.push([n, v, a, b]) > 1 || resume(n, v);
                });
              };
          }
          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f2, v) {
            if (f2(v), q.shift(), q.length)
              resume(q[0][0], q[0][1]);
          }
        };
        __asyncDelegator2 = function(o) {
          var i, p;
          return i = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i[Symbol.iterator] = function() {
            return this;
          }, i;
          function verb(n, f2) {
            i[n] = o[n] ? function(v) {
              return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f2 ? f2(v) : v;
            } : f2;
          }
        };
        __asyncValues2 = function(o) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator], i;
          return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i);
          function verb(n) {
            i[n] = o[n] && function(v) {
              return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
              });
            };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v2) {
              resolve({ value: v2, done: d });
            }, reject);
          }
        };
        __makeTemplateObject2 = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        var __setModuleDefault = Object.create ? function(o, v) {
          Object.defineProperty(o, "default", { enumerable: true, value: v });
        } : function(o, v) {
          o["default"] = v;
        };
        __importStar2 = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k2 in mod)
              if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
                __createBinding2(result, mod, k2);
          }
          __setModuleDefault(result, mod);
          return result;
        };
        __importDefault2 = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet2 = function(receiver, state2, kind, f2) {
          if (kind === "a" && !f2)
            throw new TypeError("Private accessor was defined without a getter");
          if (typeof state2 === "function" ? receiver !== state2 || !f2 : !state2.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state2.get(receiver);
        };
        __classPrivateFieldSet2 = function(receiver, state2, value, kind, f2) {
          if (kind === "m")
            throw new TypeError("Private method is not writable");
          if (kind === "a" && !f2)
            throw new TypeError("Private accessor was defined without a setter");
          if (typeof state2 === "function" ? receiver !== state2 || !f2 : !state2.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state2.set(receiver, value), value;
        };
        __classPrivateFieldIn2 = function(state2, receiver) {
          if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
            throw new TypeError("Cannot use 'in' operator on non-object");
          return typeof state2 === "function" ? receiver === state2 : state2.has(receiver);
        };
        exporter("__extends", __extends2);
        exporter("__assign", __assign2);
        exporter("__rest", __rest2);
        exporter("__decorate", __decorate2);
        exporter("__param", __param2);
        exporter("__metadata", __metadata2);
        exporter("__awaiter", __awaiter2);
        exporter("__generator", __generator2);
        exporter("__exportStar", __exportStar2);
        exporter("__createBinding", __createBinding2);
        exporter("__values", __values2);
        exporter("__read", __read2);
        exporter("__spread", __spread2);
        exporter("__spreadArrays", __spreadArrays2);
        exporter("__spreadArray", __spreadArray2);
        exporter("__await", __await2);
        exporter("__asyncGenerator", __asyncGenerator2);
        exporter("__asyncDelegator", __asyncDelegator2);
        exporter("__asyncValues", __asyncValues2);
        exporter("__makeTemplateObject", __makeTemplateObject2);
        exporter("__importStar", __importStar2);
        exporter("__importDefault", __importDefault2);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
        exporter("__classPrivateFieldIn", __classPrivateFieldIn2);
      });
    }
  });

  // src/scripts/alg-data.json
  var require_alg_data = __commonJS({
    "src/scripts/alg-data.json"(exports, module) {
      module.exports = [
        {
          cube: "3x3",
          name: "CMLL",
          inactive: [1, 3, 4, 5, 7, 12, 13, 14, 21, 22, 23, 30, 31, 32, 39, 48],
          algs: [
            "R U R' U R U2 R'",
            "R U R' U R' F R F' R U2 R'",
            "F R' F' R U2 R U2 R'",
            "R U' L' U R' U' L",
            "R U R' U R U' R D R' U' R D' R2",
            "L' U2 L U2 L F' L' F",
            "L' U' L U' L' U2 L",
            "R' U' R U' R' U R' F R F' U R",
            "F' L F L' U2 L' U2 L",
            "L' U R U' L U R'",
            "R2 D R' U R D' R' U R' U' R U' R'",
            "R U2 R' U2 R' F R F'",
            "F R U R' U' R U R' U' F'",
            "R' U' R' F R F' R U' R' U2 R",
            "r U' r2' D' r U r' D r2 U r'",
            "R' F R U F U' R U R' U' F'",
            "R U2 R' U' R U R' U2 R' F R F'",
            "F R' F' R U2 R U' R' U R U2 R'",
            "F R U R' U' F'",
            "R' U' R U' R' U2 R2 U R' U R U2 R'",
            "F R2 D R' U R D' R2 U' F'",
            "r U' r' U r' D' r U' r' D r",
            "R2 D' R U2 R' D R U2 R",
            "R2 D R' U2 R D' R' U2 R'",
            "F' L F L' U' L' U L",
            "F R' F' R U R U' R'",
            "R U2 R2' F R F' R U2 R'",
            "R U R' U R U' R' U R U' R' U R U2 R'",
            "R' U2 R' D' R U2 R' D R2",
            "R U2 R D R' U2 R D' R2",
            "R U R' U' R' F R F'",
            "L' U' L U L F' L' F",
            "r U' r2' D' r U2 r' D r2 U r'",
            "R U2 R' U' R U' R2 U2 R U R' U R",
            "r' D' r U r' D r U' r U r'",
            "r' U r U2 R2 F R F' R",
            "R U R' U R U' R' U R U2 R'",
            "F R U R' U' R U R' U' R U R' U' F'",
            "r U' r2' D' r U' r' D r2 U r'",
            "R U2 R2 F R F' U2 R' F R F'",
            "R U R' F' R U R' U' R' F R2 U' R'",
            "F R U' R' U' R U R' F' R U R' U' R' F R F'"
          ]
        },
        {
          cube: "3x3",
          name: "F2L",
          inactive: [0, 1, 2, 3, 5, 6, 7, 8, 9, 12, 15, 29, 32, 35, 36, 39, 42, 45, 48, 51],
          algs: [
            "R U' R'",
            "R' U R",
            "L' U L",
            "L U' L'",
            "R U R'",
            "R' U' R",
            "L' U' L",
            "L U L'",
            "R U R' U R U R'",
            "R' U' R U' R' U' R",
            "L' U' L U' L' U' L",
            "L U L' U L U L'",
            "R' U2' R2 U R2' U R",
            "R U2 R2' U' R2 U' R'",
            "L U2 L2' U' L2 U' L'",
            "L' U2' L2 U L2' U L",
            "R U' R' U R U R'",
            "R' U R U' R' U' R",
            "L' U L U' L' U L",
            "L U' L' U L U' L'",
            "R U R' U2 R U' R'",
            "R' U' R U2' R' U R",
            "L' U' L U2' L' U L",
            "L U L' U2 L U' L'",
            "R U2 R' U2 R U' R'",
            "R' U2' R U2' R' U R",
            "L' U2' L U2' L' U L",
            "L U2 L' U2 L U' L'",
            "R U2 R' U R U' R'",
            "R' U2' R U' R' U R",
            "L' U2' L U' L' U L",
            "L U2 L' U L U' L'",
            "R U R' U R U' R'",
            "R' U' R U' R' U R",
            "L' U' L U' L' U L",
            "L U L' U L U' L'",
            "F' U F U2 R U R'",
            "R' U' R U2' R' U R U' R' U R",
            "F U' F' U2' L' U' L",
            "L U L' U2 L U' L' U L U' L'",
            "R U2 R' U' R U R'",
            "R' U2' R U R' U' R",
            "L' U2' L U L' U' L",
            "L U2 L' U L U' L'",
            "R U' R' U' R U' R' U R U' R'",
            "R' U R U R' U R U' R' U R",
            "L' U L U L' U L U' L' U L",
            "L U' L' U' L U' L' U' L U' L'",
            "F' R U R' U' R' F R",
            "R U' R' F R' F' R",
            "R U' R' U R U' R'",
            "L' U L U' L' U L",
            "R U R' U' R U R'",
            "L' U' L U L' U' L",
            "R U' R' U2 R U' R'",
            "L' U L U2' L' U L",
            "R U' R' U R U' R' U R U' R'",
            "R' U R U' R' U R U' R' U R",
            "L' U L U' L' U L U' L' U L",
            "L U' L' U L U' L' U L U' L'",
            "R' F R F' R U' R'",
            "L F' L' F L' U L",
            "R U R' U F' U' F",
            "L' U' L U' F U F'",
            "R U' R' U' R U R' U2 R U' R'",
            "L' U L U L' U' L U2' L' U L",
            "F' U F U2 R U R' U R U' R'",
            "R U R' U' R U' R' U2 F' U' F",
            "R U R' U2 R U2 R' U F' U' F"
          ]
        },
        {
          cube: "3x3",
          name: "OLL",
          inactive: [9, 12, 15, 29, 32, 35, 36, 39, 42, 45, 48, 51],
          algs: [
            "R U2 R2 F R F' U2 R' F R F'",
            "L F L' U2 L F2 R' F2 R F' L'",
            "M R U R' U L F2 L' U M'",
            "M U' L F2 L' U' R U' R' M'",
            "R' F2 L F L' F R",
            "L F2 R' F' R F' L'",
            "L F R' F R F2 L'",
            "R' F' L F' L' F2 R",
            "R U R' U' R' F R2 U R' U' F'",
            "R U R' U R' F R F' R U2 R'",
            "M R U R' U R U2 R' U M'",
            "M' R' U' R U' R' U2 R U' M",
            "F U R U' R2 F' R U R U' R'",
            "R' F R U R' F' R F U' F'",
            "R' F' R L' U' L U R' F R",
            "L F L' R U R' U' L F' L'",
            "F R' F' R U S' R U' R' S",
            "R U2 R2 F R F' U2 M' U R U' r'",
            "S' R U R' S U' R' F R F'",
            "S R' U' R U R U R U' R' S'",
            "R U R' U R U' R' U R U2 R'",
            "R U2 R2 U' R2 U' R2 U2 R",
            "R2 D' R U2 R' D R U2 R",
            "L F R' F' L' F R F'",
            "F' L F R' F' L' F R",
            "R U2 R' U' R U' R'",
            "R U R' U R U2 R'",
            "r U R' U' r' R U R U' R'",
            "R U R' U' R U' R' F' U' F R U R'",
            "F R' F R2 U' R' U' R U R' F2",
            "R' U' F U R U' R' F' R",
            "L U F' U' L' U L F L'",
            "R U R' U' R' F R F'",
            "R U R2 U' R' F R U R U' F'",
            "R U2 R2 F R F' R U2 R'",
            "L' U' L U' L' U L U L F' L' F",
            "F R' F' R U R U' R'",
            "R U R' U R U' R' U' R' F R F'",
            "L F' L' U' L U F U' L'",
            "R' F R U R' U' F' U R",
            "R U R' U R U2 R' F R U R' U' F'",
            "R' U' R U' R' U2 R F R U R' U' F'",
            "F' U' L' U L F",
            "F U R U' R' F'",
            "F R U R' U' F'",
            "R' U' R' F R F' U R",
            "R' U' R' F R F' R' F R F' U R",
            "F R U R' U' R U R' U' F'",
            "L F' L2 B L2 F L2 B' L",
            "R' F R2 B' R2 F' R2 B R'",
            "F U R U' R' U R U' R' F'",
            "R U R' U R U' B U' B' R'",
            "R' F' L F' L' F L F' L' F2 R",
            "L F R' F R F' R' F R F2 L'",
            "R' F R U R U' R2 F' R2 U' R' U R U R'",
            "R' F' R U' L' U L U' L' U L R' F R",
            "S R' F R S' R' F' R"
          ]
        },
        {
          cube: "3x3",
          name: "PLL",
          inactive: [],
          algs: [
            "R' F R' B2 R F' R' B2 R2",
            "R2 B2 R F R' B2 R F' R",
            "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
            "R2 U R' U R' U' R U' R2 U' D R' U R D'",
            "R' U' R U D' R2 U R' U R U' R U' R2 D",
            "R2 U' R U' R U R' U R2 U D' R U' R' D",
            "R U R' U' D R2 U' R U' R' U R' U R2 D'",
            "x R2 F R F' R U2 L' B L U2 x'",
            "R U R' F' R U R' U' R' F R2 U' R'",
            "R U' R' U' R U R D R' U' R D' R' U2 R'",
            "R2 F R U R U' R' F' R U2 R' U2 R",
            "R U R' U' R' F R2 U' R' U' R U R' F'",
            "x' R U' R' D R U R' D' R U R' D R U' R' D' x",
            "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
            "R' U R U' R' F' U' F R U R' F R' F' R U' R",
            "R' U R' U' y R' F' R2 U' R' U R' F R F",
            "F R U' R' U' R U R' F' R U R' U' R' F R F'",
            "M2 U M2 U2 M2 U M2",
            "M2 U M U2 M' U M2",
            "M2 U' M U2 M' U' M2",
            "M' U M2 U M2 U M' U2 M2"
          ]
        },
        {
          cube: "3x3",
          name: "ZBLL",
          inactive: [],
          algs: [
            "R' D R D' R' D R U R' D' R D R' D' R",
            "R' U R U2 R' U' R U' R U R' U' R' U' R U R U' R'",
            "R' U2 R U R' U R2 U2 R' U' R U' R'",
            "R U2 R' U' R U' R2 U2 R U R' U R",
            "R' U R U2 R' U' R U2 R' U' R U' R' U R",
            "R U' R' U2 R U R' U2 R U R' U R U' R'",
            "R' U R2 U R' U R' U' R U' R' U' R U R U' R'",
            "R U R' U R U' R' U R' U' R2 U' R2 U2 R",
            "R' U2 R U R' U R U' R' U' R U' R' U2 R",
            "R U2 R' U' R U' R' U R U R' U R U2 R'",
            "R' U' R2 U R2 U R2 U2 R' U R' U R",
            "R U R2 U' R2 U' R2 U2 R U' R U' R'",
            "R U R' F' R U R' U' R' F R U' R' F R U R U' R' F'",
            "R' U' R U' R' U' R2 D r' U2 r D' R2 U' R",
            "R U' R2 D' r U2 r' D R2 U R'",
            "R' U R2 D r' U2 r D' R2 U' R",
            "R' U2 R U2 R2 D' R U2 R' D R2 U' R' U R",
            "R U R' U2 R' D' R U R' D R2 U' R' U R U' R'",
            "R' U' R U R2 D' R U2 R' D R2 U2 R' U2 R",
            "R U R' U' R U R2 D' R U' R' D R U2 R U' R'",
            "R' D' R U' R' D R U' R U' R' U R U' R' U' R U R'",
            "R U' R' U R U R' U' R U R' U R' D' R U R' D R",
            "R U R D R' U R D' R' U L' U R' U' L",
            "r U r' R U R' U' R U R' U' r U' r' F R U R' U' F'",
            "R' U R U2 R' L' U R U' L",
            "R U' R' U2 R L U' R' U L'",
            "R' U' R2 U R' F' R U R' U' R' F R2 U' R' U' R' U R",
            "r U' r U2 R' F R U2 r2 F",
            "R' U' R' D' R U R' D R U2 R U R' U R",
            "R U R D R' U' R D' R' U2 R' U' R U' R'",
            "R D R' U' R D' R' U' R' U R U' R' U R U R' U' R",
            "R' D' R U R U' R' U R U' R' U' R U R'",
            "R' U' R U' R' U R F U' R' U2 R U F'",
            "R U R' U R U' R' U' L' U2 R U2 R' U2 L",
            "R' U2 R U R' U R F U R U2 R' U R U R' F'",
            "r' U' R' F2 R F' R' F2 R2 U' R' U2 r",
            "R' F2 R' B2 R F2 R' B2 R2",
            "R' U2 R U' R' F R U R' U' R' F' R U' R",
            "R' U2 R' D' R U2 R' D R' U R' U R U2 R'",
            "R U2 R D R' U2 R D' R U' R U' R' U2 R",
            "R U R D R' U' R D' R' U R' U R U2 R'",
            "R' U' R' D' R U R' D R U' R U' R' U2 R",
            "R' U R2 D R' U R D' R' U R' U' R U' R' U' R",
            "R U' R2 D' R U' R' D R U' R U R' U R U R'",
            "R' U' R U' F U' R' U R U F' R' U R",
            "R' D' R U R' D R2 U R' U2 R U' R' U' R U' R'",
            "F R U R' U' R U' R' U' R U R' F'",
            "R U R' U2 R U' R' U2 R U' R2 F' R U R U' R' F",
            "R U R D R' U' R D' R2",
            "R U2 R' U2 R' F R U R U' R' F'",
            "R2 B2 R' U2 R' U2 R B2 R' U R U' R'",
            "R' D' R U R' D R2 U' R' U R U R' U' R U R'",
            "F' U' r' F2 r U' r' F' r F",
            "R U R' U' R U' R' L U' R U R' L'",
            "R U R' U R U R' U2 L R U' R' U L'",
            "R' U' R U' R2' F' R U R U' R' F U R U' R' U2 R",
            "R' U' R U R' U' R2 D R' U2 R D' R' U R' U R",
            "R U R D R' U2 R D' R' U' R' U R U' R' U' R U' R'",
            "F R U R' U' R' F' U2 R U R U' R2 U2 R",
            "R U' R' U' R U R D R' U2 R D' R' U' R'",
            "x' U' R' D R U R' D' R x",
            "R U R' U' R' F' R U2 R U2 R' F",
            "R2 F2 R U2 R U2 R' F2 R U' R' U R",
            "R D R' U' R D' R2 U R U' R' U' R U R' U' R",
            "F U R U2 R' U R U R' F'",
            "R U R' U' R U' R'  U' F R U R' U' R' F' R",
            "R' U' R U' R' U R' U' R U R' F' R U R' U' R' F R'",
            "F R U R' U' R U R' U' F' R U R' U' R' F R F'",
            "R U R' U' R U R2 D' R U2 R' D R U' R U' R'",
            "R' U2 R F U' R' U R U F' R' U R",
            "R' U2 R2 U R' U' R' U2 F' R U2 R U2 R' F",
            "R' U R U R' U' R' D' R U2 R' D R U R",
            "R U2 R' U' R U' R' U2 R' U2 R U R' U R",
            "R U R' U' R U' R U2 R2 U' R U R' U' R2 U' R2",
            "R' U' R U' R' U2 R2 U R' U R U2 R'",
            "R U R' U R U2 R2 U' R U' R' U2 R",
            "R U R' U' R U' R' U2 R U' R' U2 R U R'",
            "R' U' R U R' U R U2 R' U R U2 R' U' R",
            "R U2 R2 U' R2 U' R' U R' U' R U R' U R",
            "R' U2 R2 U R2 U R U' R U R' U' R U' R'",
            "R' U2 R U R' U R U R' U' R U' R' U2 R",
            "R U2 R' U' R U' R' U' R U R' U R U2 R'",
            "R' U' R U' R U2 R2 U' R2 U' R2 U R",
            "R U R' U R' U2 R2 U R2 U R2 U' R'",
            "R' U' R U' F U' R' U R U R' U R U' F'",
            "R U R' U L' U R U' M' x' U' R U' R'",
            "R U2 R2 F R F' M' U' R U' R' U M",
            "R' U2 R F U' R' U R U R' U R U' F'",
            "R2 D R' U' R D' R' U' R' U R U R'",
            "R2 D' R U R' D R U R U' R' U' R",
            "R U' R' U' R U R D R' U R D' R2",
            "R' U R U R' U' R' D' R U' R' D R2",
            "M' U R' U' F' U F R2 U R' U R U2 r'",
            "F R U R' U' R U R' U' F' U' R' F' U' F U R",
            "F R U' R' U' R U2 R' U' R U' R' U' R U2 R' U' F'",
            "r' U' R' F R U r F R U' R' F'",
            "R' F R U' R' U' R U R' F' R U R' U' R' F R F' R",
            "F2 R U' R' U' R U R' F' R U R' U' R' F R F2",
            "R U' R' U R U' L U r' F U2 R U2 R2 x",
            "R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R' U2 R",
            "R U' L U L' U R' U' l U2 R U2 R2 x",
            "R' U L' U' L U' R U l' U2 R' U2 R2 x'",
            "F R U R U2 R' U' R U' R' U2 R' U2 R U' R' U' F'",
            "r U R' U' r' F R2 U' R' U' R U2 R' U' F'",
            "F U R U2 R' U R U R2 F' r U R U' r'",
            "R U2 R' U2 R' F R U R U2 R' U' R U2 R' U' F'",
            "R' U' R F R2 D' R U R' D R2 U' F'",
            "r U R' U' r' F R U R' U' R F' R' U R",
            "x R2 U2 R' D2 R U2 R' D2 R' x'",
            "x R2 D2 R U2 R' D2 R U2 l",
            "R U R' U R U' R' U2 R' D' R U2 R' D R2 U' R'",
            "R' U2 R U R' U R' D R' U2 R D' R' U2 R'",
            "R U' R' U' R U' R' U R' D' R U R' D R2 U R'",
            "R' U R U R' U R U' R D R' U' R D' R2 U' R",
            "R' U2 R U R' U R' D' R U' R' D R U R",
            "R U' R' U' R U2 R' U2 R' D' R U' R' D R",
            "R' U' R U2 R' F' R U R' U' R' F R2 U2 R' U R",
            "R U R' U R U R' U2 R U' R2 D' R U' R' D R",
            "F R U' R' U R U R' U R U' R' F'",
            "F' R U R' U' R' F R2 U R' U2 R U R' U2 R U' R'",
            "R2 D' r U2 r' D R U2 R",
            "R2 D' R U2 R' D R U2 R",
            "R U' R' D R' U' R D' R2 U R' U' R' U2 R'",
            "R U R' U R U2 R2 U z U R' D R U' z'",
            "R2 D' R U' R' D R2 U' R' U2 R",
            "R' U R U R' U2 R U2 y R U' R' U2 R U' R'",
            "R2 D R' U R D' R2 U' R U' R' U2 R U' R' U2 R U R'",
            "R2' F' R U2 R U2' R' F U' R U R' U' R",
            "R' U2 R2 D R' U2 R D' R2 U R U2 R' U2 R",
            "R U R' U2 F2 R U2 R' U2 R' F2 R2 U R'",
            "R' U2 R' D' R U2 R' D R U2 R U R' U R",
            "R' U R U' R' U' R U2 R D R' U' R D' R2 U' R",
            "R' U2 R U R2 F' R U R U' R' F R",
            "R2 D R' U2 R D' R' U2 R'",
            "R' U' R U R U R' U' R' U F R U R U' R' F'",
            "R U' R' U' R U2 R' U' R' D' R U2 R' D R",
            "R U R2 D' R U R' D R2 U2 R'",
            "R U' R' U' R U2 R' U2 y' R' U R U2 R' U R",
            "R' U R' U' D' R U' R' U2 R U' R' D R U' R",
            "R U R' U R U' R' U F' R U2 R' U2 R' F R",
            "R' U' R U R' U R U2 F R' U R U' F' R' U2 R",
            "R U R' U R U' R' U R U' R' U' L' U R U' R' L",
            "R U2 R D R' U2 R D' R' U2 R' U' R U' R'",
            "R U' R' U R U R' U2 R' D' R U R' D R2 U R'",
            "R U2 R' U2 R' U' R U R U' R' U2 R' U2 R",
            "R U R' U R U' R' U R U' R' U R U2 R'",
            "R U2 R' U' R U' R' U2 R U R' U R U2 R'",
            "R U R' U R U2 R' U2 R U2 R' U' R U' R'",
            "R2 U R' U R' U' R U' R' U' R U R U' R2",
            "R2 U' R U' R U R' U R U R' U' R' U R2",
            "R' U2 R U R' U R U' R U2 R' U' R U' R'",
            "R U2 R' U' R U' R' U R' U2 R U R' U R",
            "R2 U R' U' R' U R U R' U R U' R U' R2",
            "r U r' U R U' R' U R U' R' M' U R U2' r'",
            "R U R' U R U2 R' U R' U' R U' R' U2 R",
            "R' U' R U' R' U2 R U' R U R' U R U2 R'",
            "F R U' R' U' R U R D R' U' R D' R' U2 R' U' F'",
            "F R U R2' F R F' R U' R' F'",
            "L' U2 R U' R' U2 L R U' R'",
            "R' U' R U R' F' R U R' U' R' F R2",
            "R' U F' R U R' U' R' F R2 U' R' U' R U R' U' R",
            "R U' R' U R U R' U R U' R2' D' R U R' D R",
            "r U2 R r2 F R' F' r2 U2 r'",
            "r U2 r2 F R F' r2 R' U2 r'",
            "F R U R' U' F' r U r' U R U' R' r U' r'",
            "r U r' R U R' U' r U' r' F U R U' R' F'",
            "R U R' U R U' R' F2 R U2 R' U2 R' F2 R2 U' R'",
            "R U R2 F2 R U2 R U2 R' F2 R U R' U' R U' R'",
            "F' r U R' U' r' F R",
            "R' U' R U R' F2 R U2 R' U2 R' F2 R2",
            "F' R U2 R' U2 R' F R U R U' R'",
            "R' U R U' R' U R U R' U' R2 D R' U R D' R'",
            "F R U' R' U' R U2 R' U' F'",
            "R' U' R U2 R' F' R U R' U' R' F R2 U R' U2 R",
            "R' F R U R U' R' F' U R U R' U R U' R'",
            "R2 D' R U' R' D R U R' U' R' U' R U R U R U' R",
            "F R' F' R U R U' R' F U R U' R' U R U' R' F'",
            "F' R U2 R' U2 R' F U2 R U R U' R2 U2 R",
            "R U R' U R' D' R U2 R' D R2 U' R' U R U' R'",
            "R' U' R' D' R U2 R' D R U R U' R' U' R",
            "F R' F' r U R U' r'",
            "R U R' U' R B2 R' U2 R U2 R B2 R2",
            "F R U R' U' R' F' R U2 R U2 R'",
            "R U' R' U R U' R' U' R U R2 D' R U' R' D R",
            "R' F' R U R' U' R' F R U' R U R' U R",
            "R U R' U R U R' U' R U R D R' U2 R D' R' U' R'",
            "L R U' R' U R L' U R' U R U' R'",
            "L U' R U R' L' U2 R U' R' U' R U' R'",
            "R' U2 R U R' U' F' R U R' U' R' F R2 U R' U R",
            "R' U2 R2 U R' U' R' U2 F R U R U' R' F'",
            "R U R' U R U' R' U' L' U R U' M' x'",
            "R U R D R' U2 R D' R' U' R' U R U R'",
            "R' U2 R' D' R U2 R' D R2",
            "R' U2 R' D' r U2 r' D R2",
            "R D R' U2 R D' R' U' R' U2 R U' R' U' R",
            "R U2 R U R U' R2 D R' U R D' R U R'",
            "R U R' U2 R U R' U2 y' R' U2 R U' R' U' R",
            "R' U2 R U R2 D' R U R' D R2",
            "R U R' U' R U' R' U L' U R U' L U' R'",
            "R U' R' U2 R U R' U2 R U R' U R2 D R' U' R D' R2",
            "R' U2 R U2 R' U' R2 D R' U2 R D' R2 U2 R",
            "F' R U R' U' R' F R2 U' R' U' R U' R' U R U R'",
            "R U' R2 F2 R U2 R U2 R' F2 U2 R U' R'",
            "R' U R2 D R' U R D' R' U2 R' U R U R' U' R",
            "R U2 R D R' U2 R D' R2",
            "R' F' R U R' U' R' F R2 U' R' U2 R",
            "L' U R U' L U R2 U2 R U R' U R",
            "F R U R' U' R' F' U' R U R U' R' U' R' U R",
            "R' U' R U2 R' U' R y U2 R U2 R' U R U R'",
            "R U2 R' U' R2 D R' U' R D' R2",
            "R' U' R U R' U R U' L U' R' U L' U R",
            "R' U R' D' R U R' U2 R U R' D U R U' R",
            "R U2 R' U2 R U R2 D' R U2 R' D R2 U2 R'",
            "R U R' U R U2 R D R' U2 R D' R' U2 R'",
            "R' U R2 B2 R' U2 R' U2 R B2 U2 R' U R",
            "R U' R2 D' R U' R' D R U2 R U' R' U' R U R'",
            "R' U' R U R U2 R' U' R U' R2 U2 R",
            "R U R' U' R' U2 R U R' U R2 U2 R'",
            "R' U2 R U R' U R2 U R' U R U2 R'",
            "R U2 R' U' R U' R2 U' R U' R' U2 R",
            "R U2 R' U2 R U' R' U2 R U' R' U2 R U R'",
            "R' U2 R U2 R' U R U2 R' U R U2 R' U' R",
            "R U' R' U2 R U R' U2 R U R' U2 R U2 R'",
            "R' U R U2 R' U' R U2 R' U' R U2 R' U2 R",
            "R' U2 R2 U R2 U R2 U2 R'",
            "R U2 R2 U' R2 U' R2 U2 R",
            "R U R' U' R' U' R U R U R' U' R' U R U' R U' R'",
            "R U2 R' U' R U' R' U' R U2 R' U' R U' R'",
            "R2 U R' U2 R' U' R U R D R' U R D' R' U R U' R2'",
            "F R2 U' R U2 R U R' U R' U R2 F'",
            "F U R' U' R2 U' R2 U2 R U2 R U R' F'",
            "r' U' R U' R' U R U' R' U R' F R F' U r",
            "R U2 R' U' F' R U2 R' U' R U' R' F R U' R'",
            "R U R' U r' F R F' r U' R' U R U2' R'",
            "r U R' U R' F R F' R U' R' U R U2' r'",
            "R U R' U' R U R2 D' R U' R' D R U' R U2 R'",
            "R U2 R' U R' D' R U R' D R2 U' R' U R U' R'",
            "R' U2 R U' R D R' U' R D' R2 U R U' R' U R",
            "R2 D R' U' R D' R' U' R' U R U' R' U' R U' R'",
            "R2 D' R U R' D R U R U' R' U R U R' U R",
            "F U R U2 R' U R U R' F' R U2 R' U' R U' R'",
            "r U' r' U' r U r' U' l R U' R' U l'",
            "r' U r U r' U' r U R2 F R F' R",
            "r' U' R U' R' U2 r U' R U2 R' U2 R' F R F'",
            "R' U' R U R2 F' R U R U' R' F U' R U R' U R",
            "R U2 R D' R U' R' D R' U' R2 U2 R",
            "R' U' R U' R2 D' R U R' D R2 U' R' U2 R",
            "L' U R U' L U' R' U' R U' R'",
            "R U' L' U R' U L U L' U L",
            "R2 D' R U2 R' D R2 U R2 D' R U R' D R2",
            "R2 D R' U2 R D' R2 U' R2 D R' U' R D' R2",
            "R U2 R2 F R U R U2 R' U' R U2 R' U' F' R U R'",
            "R U2 R2 U' R U' R' U2 F R U R U' R' F'",
            "R U R' U R U2 R2 F' r U R U' r' F",
            "r' F' r U' r' F2 r2 U R' U' r' F R F'",
            "F R U R' U' R' F' R U2 R' U' R2 U' R2 U2 R",
            "R' U' R L U2 R' U2 R U2 L' U R' U2 R",
            "F U' R U' R' U R U R' U2 R U2 R' U F'",
            "R2 D' R U' R' D R U R' D' R U R' D R U R U' R' U' R",
            "R' U' F' R U R' U' R' F R2 U2' R' U2 R",
            "R U R' U R U' R' U' R' F' R U2 R U2' R' F",
            "R' U' R' D' R U R' D R' U R' U R U2 R'",
            "R U R D R' U' R D' R U' R U' R' U2 R",
            "F U R U' R' U R U2 R' U' R U R' F'",
            "r' F' r U r U2 r' F2 U' R U R' U' R U' R'",
            "R U2 R' U2 R' F R2 U' R' U2 R U2 R' U' F'",
            "R' F R U R' U' R' F' R2 U' R' U R U' R' U2 R",
            "R' L U2 R2 U R2 U R U L' U' R U2 R'",
            "l U2 l' U2 R' U2 R B2 U R' U R",
            "R U R' U F2 R U2 R' U2 R' F2 R",
            "R' U2 R U R' U R2 U' L' U R' U' L",
            "R U R' U R U' R' U R U' R D R' U' R D' R2",
            "R U R' U' R' F R2 U R' U' R U R' U' F'",
            "R2 D R' U2' R D' R2' U' R U' R' U R U2' R' U' R U' R'",
            "R U2 R' U' R U R' U2 L' U R U' M' x'",
            "L R' U' R U L' U2 R' U R U' R' U2 R",
            "R U R' U R U' R2' F R F' R U' R' F' U F",
            "F U R U2 R' U2 R U R2 F' R U2 R U2 R'",
            "R U' R' U' R U' R' U R U R' U R' F' R U R U' R' F",
            "R' U2 R U R' U' R U R2 F R U R U' R' F' R",
            "R' F2 R U2 R U2 R' F2 U' R U' R'",
            "R' U' R U' B2 R' U2 R U2 l U2 l'",
            "R U2 R' U' R U' R2 U L U' R U L'",
            "R' U' R U' R' U R U' R' U R' D' R U R' D R2",
            "F U R U' R' U R U' R2 F' R U R U' R'",
            "R U R' U R U2' R' U' R U R' U R2 D R' U2 R D' R2'",
            "R' U2 R U R' U' R U2 L U' R' U R L'",
            "R L' U R' U' L U2 R U' R' U R U2 R'",
            "R U2 R' U' R U' R' U' R' U' R U' R' U2 R",
            "R' U2 R U R' U R U R U R' U R U2 R'",
            "R' U' R U' R' U R U' R' U2 R",
            "R U R' U R U' R' U R U2 R'",
            "R' U2 R U R' U' R U R' U R",
            "R U2 R' U' R U R' U' R U' R'",
            "R U R' U R U' R' U R U' R' U R' U' R2 U' R' U R' U R",
            "R U R' U R U2 R' U' R' U2 R U R' U R",
            "R U2 R D R' U' R D' R2 U' R' F R U R U' R' F'",
            "F U R U' R' U R U' R' U R U' R' F'",
            "R U R' y' U R' U R U' R2 F R F' R",
            "R' U' R y U' R U' R' U R l U' R' U l'",
            "F R U R' U' R U R' U' F' U R' F' U' F U R",
            "R' U' R U' R' U2 R U R' U' R U R' F' R U R' U' R' F R2",
            "L' U L U' L' U' L U R' U' R U L' U' L U2 R' U' R",
            "R U' R' U R U R' U' L U L' U' R U R' U2 L U L'",
            "R U R' U R U2 R' F R U' R' U' R U2 R' U' F'",
            "R U R2 F R F' r U' r' U r U r' U2",
            "R' F R' F' R2 U' r' U r U' r' U' r",
            "R' U' R U' R' U' L U' R U L'",
            "R U R' U R U L' U R' U' L",
            "R' U' R U' R' U F' R U R' U' R' F R2 U' R' U R",
            "R U R' U R' U' R2 U' R2 U' L U' R U L'",
            "R' U2' R U R2' D' R U' R' D R2 U R' U R",
            "R U2 R' U' R2 D R' U R D' R2' U' R U' R'",
            "F R U' R' U' R U2 R' U' F' U R U R' U R U2 R'",
            "R2 D' R U' R' D R2 U' R2 D' R U2 R' D R2",
            "R2 D R' U R D' R2' U R2 D R' U2 R D' R2'",
            "F R' F' r U R U' r2 F2 r U r' F r",
            "R U R' U' R' F R U R U' R' F' R U R' U R U2 R'",
            "R' U2 R U' L U2 R' U2 R U2 L' R' U R",
            "R U2 R' U L' U2 R U2 R' U2 L R U' R'",
            "F U' R U2 R' U2 R U' R' U' R U R' U F'",
            "R' F R U R' U' F' R U' R' U R' F R F' U R",
            "R U2 R' U' R U' R D' R U' R' D R U R",
            "R U2 R2 F U' R2 U' R2 U F' U R",
            "R' U2 R U2' R2 F' R U R U' R' F U R",
            "F B' R2 B R2 U' R2 U' R2 U R2 F'",
            "R' U' R U' R' U R U R' F R U R' U' R' F' R2",
            "F R U' R' U R U2 R' U' R U R' U' F'",
            "R' U R2 U R' U R U2 R U2 R U R' U R2",
            "R' U2 R2 U R  U' R' U R U R2 U' R'",
            "R U R' U R U2 R'",
            "R' U2 R U R' U R",
            "R U R2 U' R2 U' R2 U2 R2 U2 R'",
            "R' U' R U' R U R2 U R2 U2 R'",
            "R U R' U' R' U2 R U R U' R' U R' U R",
            "R' U' R U R U R' U' R' U R U R U' R'",
            "R U R' U R U' R' U R' U' R2 U' R' U R' U R",
            "R U R' U R U R U R U R U' R' U' R2",
            "R U R' U R' U' R2 U' R' U R' U' R U R' U R",
            "R U R' U R U' R' U R' U' R' U R U' R' U' R2 U R",
            "F U' R' U R U F' R U R2 U R2 U2 R'",
            "R' D' R U' R' D R U2 R U R' U2 R U R'",
            "R' U2 R U R' U' R F U' R' U' R U F'",
            "R' U R U2 R' U R U2 R D R' U' R D' R'",
            "L' U2 R U' R' U2 L U R U' R' U R U2 R'",
            "F R U R' U' R U R2 U' F' U R U R U' R'",
            "R U R' F' R U R' U R U2 R' F R U' R'",
            "R U2 L' R' U2 R U2 R' U2 L U' R U' R'",
            "R U' R2 U2 D' R U R' U D R2 U R'",
            "F U R' F R F' R U' R' U R U' R' F'",
            "R U R' U' L' U R U' L U' L' U R' U' L",
            "F R U' R U2 R' U2 R' U' R U2 R' U' R2 U' R2 F'",
            "R U' L' U R' U' L",
            "R' U2 R U R' U' R' D' R U2 R' D R2",
            "R' D U' R' U R U2 D' R2 U R' U' R'",
            "R' U' R' U R2 D' U2 R U R' U' D R'",
            "R2 D R' U2 R D' R' U' R' U R U2 R'",
            "D' R U R' U R U' R' U' D R2 U' R U' R' U R' U R2",
            "R U R' U R U R' U' R U R D R' U' R D' R' U2 R'",
            "R' U2 R U R' U' R' D' R U' R' D R U R U' R' U' R",
            "R' U2 F' R U R' U' R' F R U2 R",
            "R2 U R U R' U' R' U' R' L' U R' U' L",
            "R U2 R' U2 R' F R2 U R' U' R U R' U' F'",
            "R U R' U R U' R' U' R' F R2 U' R' U' R U R' F'",
            "R2 U R' U R D R' U2 R D' R' U R U' R2'",
            "R U R' U R U' R D R' U' R D' R2",
            "R U' R' U' R U' R' U2 R U R2 D' R U2 R' D R",
            "F U R U' R' U R U' l U' R2 D' R U R' x",
            "R2 D' R U' R' D R U' R U R' U R",
            "R U2 R' L' U2 R U R' U2 L R U2 R'",
            "R' D' R U R' D R2 U' R' U R U R' U' R U2 R' U R U2 R'",
            "R U' R' U' R U R D R' U2 R D' R2 U R U2 R'",
            "R' U2 R' D' R U R' D R U' R U R' U R",
            "R' U' R U' R2 F' R U R U' R' F U2 R",
            "R U R' U R' D' R U R' D R U' R U2 R'",
            "R U2 R' U' R U R' U' R U R D R' U2 R D' R2",
            "f R' F' R U2 R U2 R' U2 S'",
            "R' D' R U R' D R2 U R' U2 R U R'",
            "R' D R' U R D' U R U' R' U' R2 U R U' R'",
            "R' U2 R U R2 D' R U' R' D R U2 R",
            "R2 D' r U2 r' D R2 U R' U R",
            "R' U2 R U R' U R' D' R U2 R' D R U2 R",
            "R L' U R' U' L U2 R U2 R'",
            "R2 D' R U2 R' D R2 U R' U R",
            "R2 F R U R U' R' F' R U' R' U R",
            "R U R' U R' U' R' D' R U R' D R' U2 R'",
            "R' U' F U' R2 U R2 U F' R U' R U' R'",
            "R2 D' R U2 R D2 R' U' R D2 R' U R' D R U2 R",
            "R U R' U' R U R2 D' R U2 R' D R2 U2 R'",
            "R U R' U R U' R2 F' R U R U' R' F R U' R'",
            "R U R' U R2 D r' U2 r D' R2",
            "R' U R U2 R' U R2 D R' U R D' R'",
            "R' U' R U R2 U' R' U' R U D' R U R' D R'",
            "R U R' U R2 D R' U2 R D' R2",
            "R' U2 R U2 L U' R' U L' R",
            "R U2 R D R' U2 R D' R' U R' U R U2 R'",
            "R U R2 F' R U2 R U2 R' F R U' R'",
            "R U R' U' R U R2 D' R U R' D R U R U2 R'",
            "F' R U R' U R U2 R' F U R U' R' U2 R U' R'",
            "R' F R U R' U' R' F' D' R U R' D R2",
            "R2' D' R U2 R' D R U R' F R U R U' R' F' R",
            "R U2 R2 U' R' U R U' R' U' R2 U R",
            "R' U' R U' R' U2 R",
            "R U2 R' U' R U' R'",
            "R' U' R2 U R2 U R2 U2 R2 U2 R",
            "R U R' U R' U' R2 U' R2 U2 R",
            "R' U' R U R U2 R' U' R' U R U' R U' R'",
            "R U R' U' R' U' R U R U' R' U' R' U R",
            "R U R' U R' U' R U R' U' R2 U' R2 U R U' R' U R",
            "R' U' R U' R' U' R' U' R' U' R' U R U R2",
            "R U R' U' R U R2 U' R2 U' R' U R U' R' U R' U R",
            "R U R' U R' U' R' U R U' R' U' R' U' R' U2 R",
            "R U2 R2 U' R2 U' R' F U' R' U' R U F'",
            "R D R' U R D' R' U2 R' U' R U2 R' U' R",
            "R U2 R' U' R U R' L' U R U' L U2 R'",
            "R U' R' U2 R U' R' U2 R' D' R U R' D R",
            "F U' R' U R U F' R' U R U' R' U2 R",
            "R U R' U L' U2 R U2 R' U2 R L U2 R'",
            "R U R' F' R U2 R' U' R U' R' F R U' R'",
            "R U  R' U' R' U' F U R2 U' R' U R U' R' F'",
            "R' U R2 U2 D R' U' R U' D' R2 U' R",
            "R' U R U R' U r U' R' U R U r' R' F R F' U R",
            "z D' R' D R U R' D' R U' R U R' D R U' z'",
            "R U2 R' U' R U r' F r U2 R' U' r' F2 r",
            "R' U L U' R U L'",
            "R U2 R' U' R U R D R' U2 R D' R2",
            "R D' U R U' R' U2 D R2 U' R U R",
            "R U R U' R2 D U2 R' U' R U D' R",
            "R2 D' R U2 R' D R U R U' R' U2 R",
            "D R' U' R U' R' U R U D' R2 U R' U R U' R U' R2",
            "R' U' R U' R' U' R U R' U' R' D' R U R' D R U2 R",
            "R U2 R' U' R U R D  R' U R D' R' U' R' U R U R'",
            "F U R U' R' U R U' R2 F' R U2 R U2 R'",
            "F R U' R' U R U R2 F' R U R U R' U' R U' R'",
            "R' U2 R' F' R U R U' R' F U2 R",
            "L' U R U' L R U R U R U' R' U' R2",
            "R D' R2 D R2 U' R2 D' R2 D R2 U R",
            "R' U' R U' R' U R' D' R U R' D R2",
            "l U' R' D R2 U l' U R' U' R U R' U' F'",
            "R' D' R U2 R' D R2 U' R' U2 R U R' U R U R'",
            "R2 D R' U R D' R' U R' U' R U' R'",
            "R U2 R' L' U2 R U' R' U2 L R U2 R'",
            "R U R' U' R' U' R U R U' R' U' R2 D' R U' R' D R U2 R",
            "R U2 R' U' R2 D R' U2 R D' R' U' R' U R U R'",
            "R U2 R' U R' D' R U' R' D R U' R U' R'",
            "R2 D R' U2 R D' R' U' R' U R U' R' U  R U2 R'",
            "R' U' R U' R D R' U' R D' R' U R' U2 R",
            "R' U2 F' R U R' U' R' F R2 U R' U R",
            "R U2 R2 D' R U2 R' D R2 U' R' U R U' R'",
            "R D R' U' R D' R2 U' R U2 R' U' R",
            "R D' R U' R' D U' R' U R U R2 U' R' U R",
            "R U R' F' R U R' U' R' F R2 U R' U' R U' R'",
            "R2 D r' U2 r D' R2 U' R U' R'",
            "R U2 R' U' R U' R D R' U2 R D' R' U2 R'",
            "L R' U' R U L' U2 R' U2 R",
            "R2 D R' U2 R D' R2 U' R U' R'",
            "R U R' F' R U2 R' U2 R' F R2 U' R'",
            "R U2' R' U' R' D' R U' R' D R2 U' R' U R U' R'",
            "R U R' U2 R U R' U' F' R U2 R' U' R U' R' F",
            "R2 D' R U' R' D F R U R U' R' F' R",
            "R U2 R' U' F' R U R' U' R' F R2 U' R'",
            "R' U2 R' D' R U R' D R2 U' R' U2 R",
            "R' U' R U' R2 D' r U2 r' D R2",
            "R U' R' U2 R U' R2 D' R U' R' D R",
            "R U R' U' R2 U R U R' U' D R' U' R D' R",
            "R' U' R U' R2 D' R U2 R' D R2",
            "R U2 R' U2 L' U R U' R' L",
            "R' U2 R' D' R U2 R' D R U' R U' R' U2 R",
            "R' U' R U R' F R U R' U' R' F' R2",
            "R U2 R D' R U' R' D R U R U' R U' R'",
            "R U R' U R' F U' R2 U' R2 U F' U R",
            "R U R' U R' U' R2 U' R D' R U R' D R U R"
          ]
        },
        {
          cube: "2x2",
          name: "2x2 CLL",
          inactive: [],
          algs: [
            "R U R' U R U2 R'",
            "R U R' U R' F R F' R U2 R'",
            "F R' F' R U2 R U2 R'",
            "R U' L' U R' U' L",
            "R U' R U' R' U R' U' F R' F'",
            "L' U2 L U2 L F' L' F",
            "L' U' L U' L' U2 L",
            "R' U' R U' R' U R' F R F' U R",
            "F' L F L' U2 L' U2 L",
            "L' U R U' L U R'",
            "R2 F R U2 R U' R' U2 F' R",
            "R U2 R' U2 R' F R F'",
            "F R U R' U' R U R' U' F'",
            "R' U' R' F R F' R U' R' U2 R",
            "R' F R F' R U' R' U' R U' R'",
            "F R2 U' R2 U R2 U R2 F'",
            "R U2 R' U' R U R' U2 R' F R F'",
            "F R' F' R U2 R U' R' U R U2 R'",
            "F R U R' U' F'",
            "R U R2' U' R U2 R' U2' R U' R",
            "F R U R' U2 F' R U' R' F",
            "x R U' R U' R' U R' F' R x2",
            "R U' R2 F R F' R U R' U' R U R'",
            "R' U R' F R F' R U2 R' U R",
            "F' L F L' U' L' U L",
            "F R' F' R U R U' R'",
            "R U2 R2' F R F' R U2 R'",
            "R' U R' U2 R U' R' U R U' R2",
            "R U' R' U R U' R' F R' F' R2 U R'",
            "R' F' R U R' U' R' F R2 U' R' U2 R",
            "R U R' U' R' F R F'",
            "L' U' L U L F' L' F",
            "F U' R U2 R' U' F2 R U R'",
            "R' U R' U2 R U2 R' U R2 U' R'",
            "R' U2 R' F2 R F2 R' F2 R2",
            "R' U R U2 R2 F R F' R",
            "R2 U2 R U2' R2'",
            "x' U2 R U2 R2 F2 R U2 x",
            "R U R' U R U R' F R' F' R",
            "F R2 U' R2' U' R2 U R2' F'",
            "R U R' F' R U R' U' R' F R2 U' R'",
            "R' U R' F2 R F' U R' F2 R F' R"
          ]
        },
        {
          cube: "2x2",
          name: "2x2 EG1",
          inactive: [],
          algs: [
            "R' F R2 F' R2 U2 R",
            "R U R' F2 U F R U R'",
            "F R' F' R U R' F' R2 U R'",
            "F' U R U' R' U F R U R'",
            "R U' R' U R U' R' U F R U' R'",
            "L' U L2 F' L' U L F' L' F",
            "B U' R2 F2 U' F",
            "R U' R' F' U' F2 R U' R'",
            "F' L F L' U' L F L2 U' L",
            "R U' R' F' U' R U R' U' F",
            "R U R' F' U' R U R' U' R U R'",
            "R U' R2 F R U' R' F R F'",
            "F2 R U R' U2 R U R' U' F",
            "R' F R2 U' R2 F R",
            "F R' F U' F2 R U R",
            "R U' R' U R U' R' F R U' R'",
            "F U' R U2 R' F' R U R' F'",
            "F R U' R' F R U2 R' U F'",
            "R2 U' R' U' R U' R' U R'",
            "x U' R' U R U' F R U R U' x'",
            "F' U2 R U2 R' U2 F",
            "R' F R F' R' F R2 U' R'",
            "R U' R' U R U' R' U R' F' R F",
            "L' U L U' L U L U' L F L' F'",
            "R U' R' U R U' R2 F' R F",
            "L' U L U' L' U L2 F L' F'",
            "R' U R2 U' R2 U' F R2 U' R'",
            "R' F2 R F' R' F R2 U R'",
            "F' R' F R U' R U R' U' R U R'",
            "F L F' L' U L' U' L U L' U' L",
            "F L F' L2 U' L U L' U' L",
            "F' R' F R2 U R' U' R U R'",
            "R U' R2 F R U R U2 R'",
            "R U' R' F' U' x U R' U' R U x'",
            "R U R2' F' R F R' F' R",
            "R U' R' U2 F R U2 R' F",
            "R' F R2 U' R2 U' F U R",
            "F' U R U' R2 F2 R U' F",
            "R' U' R' F2 U F' R F'",
            "R U R' F' R U R' U' R U R' U'",
            "R2 U F2 U2 R2 U R2",
            "R' D R' F2 R D' R"
          ]
        },
        {
          cube: "2x2",
          name: "2x2 EG2",
          inactive: [],
          algs: [
            "F U' R2 U' R' U2 R U' R2 F'",
            "R U R' U R U2 R B2 R2",
            "R U' R' F2 R2 F' L' U' L",
            "F R2 F' R2 F' R U' R",
            "F' R' U R' U2 F R' U R'",
            "R2 B2 R' U' L' U  R' U' L",
            "x U' R2 F R2 F' U R' U2 R' U x'",
            "R' U' R U' R' U2 R' F2 R2",
            "L' U L F' R U R B2 R2",
            "R' U R' F R2 F R2 F'",
            "R' U' R U' R' U' R' F2 R F' R",
            "R2 F2 R F R F' R U R'",
            "F U' R U2 R U' R' U R' F'",
            "R' U2 R2 U' R' F2 R2 F'",
            "R' F' U R' F R2 U2\u2019 R' U R",
            "R' F U' R U R' F2 U2 R",
            "R' U' R' F2 R2 U R' F2 R",
            "R' U2 R U' R2 F2 R F R",
            "F U' R U2 R U' R' U2 R' U' F'",
            "F U R U' R' F R2 F2",
            "R U R' U' R B2 R' U R U' R'",
            "R2 F2 R U R U2 R2 F R F' R",
            "R U' R' U2 L U L' U2 R U' R'",
            "L' U L U2 R' U' R U2 L' U L",
            "R2 B2 R2 F R' F' R U R U' R'",
            "F2 R2' F R U R' U' R' F R",
            "R' U' F2 R U2 R' U2 F R",
            "R' U' R U R' F' R U R' U' R' F' R2",
            "F R' F' R U R U' R B2 R2",
            "F' R U R' U' R' F R' F2 R2",
            "F R F' R U R' U' R B2 R2'",
            "F R' U2 R' U' R U2 F'",
            "R' U R' F R2 U2' R' U' R",
            "F2 R2 F U' R' F R F",
            "R F2 R U R U R F R U R",
            "R' U2 R' F2 R F2 R ",
            "R2 F U2 F2 R2 F' R2",
            "R2 U2 R U2 B2 R2",
            "R' U' R U2 R2 F' R U' F R",
            "R U' R' F U2 R2 F' R F' R",
            "R' U R' F2 R F' R",
            "R2 F2 R2"
          ]
        }
      ];
    }
  });

  // ../node_modules/@firebase/util/dist/index.esm2017.js
  var stringToByteArray$1 = function(str) {
    const out = [];
    let p = 0;
    for (let i = 0; i < str.length; i++) {
      let c = str.charCodeAt(i);
      if (c < 128) {
        out[p++] = c;
      } else if (c < 2048) {
        out[p++] = c >> 6 | 192;
        out[p++] = c & 63 | 128;
      } else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
        c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
        out[p++] = c >> 18 | 240;
        out[p++] = c >> 12 & 63 | 128;
        out[p++] = c >> 6 & 63 | 128;
        out[p++] = c & 63 | 128;
      } else {
        out[p++] = c >> 12 | 224;
        out[p++] = c >> 6 & 63 | 128;
        out[p++] = c & 63 | 128;
      }
    }
    return out;
  };
  var byteArrayToString = function(bytes) {
    const out = [];
    let pos = 0, c = 0;
    while (pos < bytes.length) {
      const c1 = bytes[pos++];
      if (c1 < 128) {
        out[c++] = String.fromCharCode(c1);
      } else if (c1 > 191 && c1 < 224) {
        const c2 = bytes[pos++];
        out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
      } else if (c1 > 239 && c1 < 365) {
        const c2 = bytes[pos++];
        const c3 = bytes[pos++];
        const c4 = bytes[pos++];
        const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
        out[c++] = String.fromCharCode(55296 + (u >> 10));
        out[c++] = String.fromCharCode(56320 + (u & 1023));
      } else {
        const c2 = bytes[pos++];
        const c3 = bytes[pos++];
        out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
      }
    }
    return out.join("");
  };
  var base64 = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob === "function",
    encodeByteArray(input, webSafe) {
      if (!Array.isArray(input)) {
        throw Error("encodeByteArray takes an array as a parameter");
      }
      this.init_();
      const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
      const output = [];
      for (let i = 0; i < input.length; i += 3) {
        const byte1 = input[i];
        const haveByte2 = i + 1 < input.length;
        const byte2 = haveByte2 ? input[i + 1] : 0;
        const haveByte3 = i + 2 < input.length;
        const byte3 = haveByte3 ? input[i + 2] : 0;
        const outByte1 = byte1 >> 2;
        const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
        let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
        let outByte4 = byte3 & 63;
        if (!haveByte3) {
          outByte4 = 64;
          if (!haveByte2) {
            outByte3 = 64;
          }
        }
        output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
      }
      return output.join("");
    },
    encodeString(input, webSafe) {
      if (this.HAS_NATIVE_SUPPORT && !webSafe) {
        return btoa(input);
      }
      return this.encodeByteArray(stringToByteArray$1(input), webSafe);
    },
    decodeString(input, webSafe) {
      if (this.HAS_NATIVE_SUPPORT && !webSafe) {
        return atob(input);
      }
      return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    decodeStringToByteArray(input, webSafe) {
      this.init_();
      const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
      const output = [];
      for (let i = 0; i < input.length; ) {
        const byte1 = charToByteMap[input.charAt(i++)];
        const haveByte2 = i < input.length;
        const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
        ++i;
        const haveByte3 = i < input.length;
        const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
        ++i;
        const haveByte4 = i < input.length;
        const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
        ++i;
        if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
          throw Error();
        }
        const outByte1 = byte1 << 2 | byte2 >> 4;
        output.push(outByte1);
        if (byte3 !== 64) {
          const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
          output.push(outByte2);
          if (byte4 !== 64) {
            const outByte3 = byte3 << 6 & 192 | byte4;
            output.push(outByte3);
          }
        }
      }
      return output;
    },
    init_() {
      if (!this.byteToCharMap_) {
        this.byteToCharMap_ = {};
        this.charToByteMap_ = {};
        this.byteToCharMapWebSafe_ = {};
        this.charToByteMapWebSafe_ = {};
        for (let i = 0; i < this.ENCODED_VALS.length; i++) {
          this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
          this.charToByteMap_[this.byteToCharMap_[i]] = i;
          this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
          this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
          if (i >= this.ENCODED_VALS_BASE.length) {
            this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
            this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
          }
        }
      }
    }
  };
  var base64Encode = function(str) {
    const utf8Bytes = stringToByteArray$1(str);
    return base64.encodeByteArray(utf8Bytes, true);
  };
  var base64urlEncodeWithoutPadding = function(str) {
    return base64Encode(str).replace(/\./g, "");
  };
  var base64Decode = function(str) {
    try {
      return base64.decodeString(str, true);
    } catch (e) {
      console.error("base64Decode failed: ", e);
    }
    return null;
  };
  var Deferred = class {
    constructor() {
      this.reject = () => {
      };
      this.resolve = () => {
      };
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    }
    wrapCallback(callback) {
      return (error, value) => {
        if (error) {
          this.reject(error);
        } else {
          this.resolve(value);
        }
        if (typeof callback === "function") {
          this.promise.catch(() => {
          });
          if (callback.length === 1) {
            callback(error);
          } else {
            callback(error, value);
          }
        }
      };
    }
  };
  function getUA() {
    if (typeof navigator !== "undefined" && typeof navigator["userAgent"] === "string") {
      return navigator["userAgent"];
    } else {
      return "";
    }
  }
  function isMobileCordova() {
    return typeof window !== "undefined" && !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
  }
  function isBrowserExtension() {
    const runtime = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : void 0;
    return typeof runtime === "object" && runtime.id !== void 0;
  }
  function isReactNative() {
    return typeof navigator === "object" && navigator["product"] === "ReactNative";
  }
  function isIE() {
    const ua = getUA();
    return ua.indexOf("MSIE ") >= 0 || ua.indexOf("Trident/") >= 0;
  }
  function isIndexedDBAvailable() {
    return typeof indexedDB === "object";
  }
  function validateIndexedDBOpenable() {
    return new Promise((resolve, reject) => {
      try {
        let preExist = true;
        const DB_CHECK_NAME = "validate-browser-context-for-indexeddb-analytics-module";
        const request = self.indexedDB.open(DB_CHECK_NAME);
        request.onsuccess = () => {
          request.result.close();
          if (!preExist) {
            self.indexedDB.deleteDatabase(DB_CHECK_NAME);
          }
          resolve(true);
        };
        request.onupgradeneeded = () => {
          preExist = false;
        };
        request.onerror = () => {
          var _a;
          reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || "");
        };
      } catch (error) {
        reject(error);
      }
    });
  }
  var ERROR_NAME = "FirebaseError";
  var FirebaseError = class extends Error {
    constructor(code, message, customData) {
      super(message);
      this.code = code;
      this.customData = customData;
      this.name = ERROR_NAME;
      Object.setPrototypeOf(this, FirebaseError.prototype);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ErrorFactory.prototype.create);
      }
    }
  };
  var ErrorFactory = class {
    constructor(service, serviceName, errors) {
      this.service = service;
      this.serviceName = serviceName;
      this.errors = errors;
    }
    create(code, ...data) {
      const customData = data[0] || {};
      const fullCode = `${this.service}/${code}`;
      const template = this.errors[code];
      const message = template ? replaceTemplate(template, customData) : "Error";
      const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
      const error = new FirebaseError(fullCode, fullMessage, customData);
      return error;
    }
  };
  function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_, key) => {
      const value = data[key];
      return value != null ? String(value) : `<${key}?>`;
    });
  }
  var PATTERN = /\{\$([^}]+)}/g;
  function isEmpty(obj) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return false;
      }
    }
    return true;
  }
  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    for (const k2 of aKeys) {
      if (!bKeys.includes(k2)) {
        return false;
      }
      const aProp = a[k2];
      const bProp = b[k2];
      if (isObject(aProp) && isObject(bProp)) {
        if (!deepEqual(aProp, bProp)) {
          return false;
        }
      } else if (aProp !== bProp) {
        return false;
      }
    }
    for (const k2 of bKeys) {
      if (!aKeys.includes(k2)) {
        return false;
      }
    }
    return true;
  }
  function isObject(thing) {
    return thing !== null && typeof thing === "object";
  }
  function querystring(querystringParams) {
    const params = [];
    for (const [key, value] of Object.entries(querystringParams)) {
      if (Array.isArray(value)) {
        value.forEach((arrayVal) => {
          params.push(encodeURIComponent(key) + "=" + encodeURIComponent(arrayVal));
        });
      } else {
        params.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
      }
    }
    return params.length ? "&" + params.join("&") : "";
  }
  function querystringDecode(querystring2) {
    const obj = {};
    const tokens = querystring2.replace(/^\?/, "").split("&");
    tokens.forEach((token) => {
      if (token) {
        const [key, value] = token.split("=");
        obj[decodeURIComponent(key)] = decodeURIComponent(value);
      }
    });
    return obj;
  }
  function extractQuerystring(url2) {
    const queryStart = url2.indexOf("?");
    if (!queryStart) {
      return "";
    }
    const fragmentStart = url2.indexOf("#", queryStart);
    return url2.substring(queryStart, fragmentStart > 0 ? fragmentStart : void 0);
  }
  function createSubscribe(executor, onNoObservers) {
    const proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
  }
  var ObserverProxy = class {
    constructor(executor, onNoObservers) {
      this.observers = [];
      this.unsubscribes = [];
      this.observerCount = 0;
      this.task = Promise.resolve();
      this.finalized = false;
      this.onNoObservers = onNoObservers;
      this.task.then(() => {
        executor(this);
      }).catch((e) => {
        this.error(e);
      });
    }
    next(value) {
      this.forEachObserver((observer) => {
        observer.next(value);
      });
    }
    error(error) {
      this.forEachObserver((observer) => {
        observer.error(error);
      });
      this.close(error);
    }
    complete() {
      this.forEachObserver((observer) => {
        observer.complete();
      });
      this.close();
    }
    subscribe(nextOrObserver, error, complete) {
      let observer;
      if (nextOrObserver === void 0 && error === void 0 && complete === void 0) {
        throw new Error("Missing Observer.");
      }
      if (implementsAnyMethods(nextOrObserver, [
        "next",
        "error",
        "complete"
      ])) {
        observer = nextOrObserver;
      } else {
        observer = {
          next: nextOrObserver,
          error,
          complete
        };
      }
      if (observer.next === void 0) {
        observer.next = noop;
      }
      if (observer.error === void 0) {
        observer.error = noop;
      }
      if (observer.complete === void 0) {
        observer.complete = noop;
      }
      const unsub = this.unsubscribeOne.bind(this, this.observers.length);
      if (this.finalized) {
        this.task.then(() => {
          try {
            if (this.finalError) {
              observer.error(this.finalError);
            } else {
              observer.complete();
            }
          } catch (e) {
          }
          return;
        });
      }
      this.observers.push(observer);
      return unsub;
    }
    unsubscribeOne(i) {
      if (this.observers === void 0 || this.observers[i] === void 0) {
        return;
      }
      delete this.observers[i];
      this.observerCount -= 1;
      if (this.observerCount === 0 && this.onNoObservers !== void 0) {
        this.onNoObservers(this);
      }
    }
    forEachObserver(fn) {
      if (this.finalized) {
        return;
      }
      for (let i = 0; i < this.observers.length; i++) {
        this.sendOne(i, fn);
      }
    }
    sendOne(i, fn) {
      this.task.then(() => {
        if (this.observers !== void 0 && this.observers[i] !== void 0) {
          try {
            fn(this.observers[i]);
          } catch (e) {
            if (typeof console !== "undefined" && console.error) {
              console.error(e);
            }
          }
        }
      });
    }
    close(err) {
      if (this.finalized) {
        return;
      }
      this.finalized = true;
      if (err !== void 0) {
        this.finalError = err;
      }
      this.task.then(() => {
        this.observers = void 0;
        this.onNoObservers = void 0;
      });
    }
  };
  function implementsAnyMethods(obj, methods) {
    if (typeof obj !== "object" || obj === null) {
      return false;
    }
    for (const method of methods) {
      if (method in obj && typeof obj[method] === "function") {
        return true;
      }
    }
    return false;
  }
  function noop() {
  }
  var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
  function getModularInstance(service) {
    if (service && service._delegate) {
      return service._delegate;
    } else {
      return service;
    }
  }

  // ../node_modules/@firebase/component/dist/esm/index.esm2017.js
  var Component = class {
    constructor(name4, instanceFactory, type) {
      this.name = name4;
      this.instanceFactory = instanceFactory;
      this.type = type;
      this.multipleInstances = false;
      this.serviceProps = {};
      this.instantiationMode = "LAZY";
      this.onInstanceCreated = null;
    }
    setInstantiationMode(mode) {
      this.instantiationMode = mode;
      return this;
    }
    setMultipleInstances(multipleInstances) {
      this.multipleInstances = multipleInstances;
      return this;
    }
    setServiceProps(props) {
      this.serviceProps = props;
      return this;
    }
    setInstanceCreatedCallback(callback) {
      this.onInstanceCreated = callback;
      return this;
    }
  };
  var DEFAULT_ENTRY_NAME = "[DEFAULT]";
  var Provider = class {
    constructor(name4, container) {
      this.name = name4;
      this.container = container;
      this.component = null;
      this.instances = /* @__PURE__ */ new Map();
      this.instancesDeferred = /* @__PURE__ */ new Map();
      this.instancesOptions = /* @__PURE__ */ new Map();
      this.onInitCallbacks = /* @__PURE__ */ new Map();
    }
    get(identifier) {
      const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
      if (!this.instancesDeferred.has(normalizedIdentifier)) {
        const deferred = new Deferred();
        this.instancesDeferred.set(normalizedIdentifier, deferred);
        if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
          try {
            const instance = this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier
            });
            if (instance) {
              deferred.resolve(instance);
            }
          } catch (e) {
          }
        }
      }
      return this.instancesDeferred.get(normalizedIdentifier).promise;
    }
    getImmediate(options) {
      var _a;
      const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
      const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
      if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
        try {
          return this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
        } catch (e) {
          if (optional) {
            return null;
          } else {
            throw e;
          }
        }
      } else {
        if (optional) {
          return null;
        } else {
          throw Error(`Service ${this.name} is not available`);
        }
      }
    }
    getComponent() {
      return this.component;
    }
    setComponent(component) {
      if (component.name !== this.name) {
        throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
      }
      if (this.component) {
        throw Error(`Component for ${this.name} has already been provided`);
      }
      this.component = component;
      if (!this.shouldAutoInitialize()) {
        return;
      }
      if (isComponentEager(component)) {
        try {
          this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
        } catch (e) {
        }
      }
      for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
        const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
        try {
          const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
          instanceDeferred.resolve(instance);
        } catch (e) {
        }
      }
    }
    clearInstance(identifier = DEFAULT_ENTRY_NAME) {
      this.instancesDeferred.delete(identifier);
      this.instancesOptions.delete(identifier);
      this.instances.delete(identifier);
    }
    async delete() {
      const services = Array.from(this.instances.values());
      await Promise.all([
        ...services.filter((service) => "INTERNAL" in service).map((service) => service.INTERNAL.delete()),
        ...services.filter((service) => "_delete" in service).map((service) => service._delete())
      ]);
    }
    isComponentSet() {
      return this.component != null;
    }
    isInitialized(identifier = DEFAULT_ENTRY_NAME) {
      return this.instances.has(identifier);
    }
    getOptions(identifier = DEFAULT_ENTRY_NAME) {
      return this.instancesOptions.get(identifier) || {};
    }
    initialize(opts = {}) {
      const { options = {} } = opts;
      const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
      if (this.isInitialized(normalizedIdentifier)) {
        throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
      }
      if (!this.isComponentSet()) {
        throw Error(`Component ${this.name} has not been registered yet`);
      }
      const instance = this.getOrInitializeService({
        instanceIdentifier: normalizedIdentifier,
        options
      });
      for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
        const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
        if (normalizedIdentifier === normalizedDeferredIdentifier) {
          instanceDeferred.resolve(instance);
        }
      }
      return instance;
    }
    onInit(callback, identifier) {
      var _a;
      const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
      const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set();
      existingCallbacks.add(callback);
      this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
      const existingInstance = this.instances.get(normalizedIdentifier);
      if (existingInstance) {
        callback(existingInstance, normalizedIdentifier);
      }
      return () => {
        existingCallbacks.delete(callback);
      };
    }
    invokeOnInitCallbacks(instance, identifier) {
      const callbacks = this.onInitCallbacks.get(identifier);
      if (!callbacks) {
        return;
      }
      for (const callback of callbacks) {
        try {
          callback(instance, identifier);
        } catch (_a) {
        }
      }
    }
    getOrInitializeService({ instanceIdentifier, options = {} }) {
      let instance = this.instances.get(instanceIdentifier);
      if (!instance && this.component) {
        instance = this.component.instanceFactory(this.container, {
          instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
          options
        });
        this.instances.set(instanceIdentifier, instance);
        this.instancesOptions.set(instanceIdentifier, options);
        this.invokeOnInitCallbacks(instance, instanceIdentifier);
        if (this.component.onInstanceCreated) {
          try {
            this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
          } catch (_a) {
          }
        }
      }
      return instance || null;
    }
    normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
      if (this.component) {
        return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
      } else {
        return identifier;
      }
    }
    shouldAutoInitialize() {
      return !!this.component && this.component.instantiationMode !== "EXPLICIT";
    }
  };
  function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? void 0 : identifier;
  }
  function isComponentEager(component) {
    return component.instantiationMode === "EAGER";
  }
  var ComponentContainer = class {
    constructor(name4) {
      this.name = name4;
      this.providers = /* @__PURE__ */ new Map();
    }
    addComponent(component) {
      const provider = this.getProvider(component.name);
      if (provider.isComponentSet()) {
        throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
      }
      provider.setComponent(component);
    }
    addOrOverwriteComponent(component) {
      const provider = this.getProvider(component.name);
      if (provider.isComponentSet()) {
        this.providers.delete(component.name);
      }
      this.addComponent(component);
    }
    getProvider(name4) {
      if (this.providers.has(name4)) {
        return this.providers.get(name4);
      }
      const provider = new Provider(name4, this);
      this.providers.set(name4, provider);
      return provider;
    }
    getProviders() {
      return Array.from(this.providers.values());
    }
  };

  // ../node_modules/@firebase/logger/dist/esm/index.esm2017.js
  var instances = [];
  var LogLevel;
  (function(LogLevel2) {
    LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
    LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
    LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
    LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
    LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
    LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
  })(LogLevel || (LogLevel = {}));
  var levelStringToEnum = {
    "debug": LogLevel.DEBUG,
    "verbose": LogLevel.VERBOSE,
    "info": LogLevel.INFO,
    "warn": LogLevel.WARN,
    "error": LogLevel.ERROR,
    "silent": LogLevel.SILENT
  };
  var defaultLogLevel = LogLevel.INFO;
  var ConsoleMethod = {
    [LogLevel.DEBUG]: "log",
    [LogLevel.VERBOSE]: "log",
    [LogLevel.INFO]: "info",
    [LogLevel.WARN]: "warn",
    [LogLevel.ERROR]: "error"
  };
  var defaultLogHandler = (instance, logType, ...args) => {
    if (logType < instance.logLevel) {
      return;
    }
    const now = new Date().toISOString();
    const method = ConsoleMethod[logType];
    if (method) {
      console[method](`[${now}]  ${instance.name}:`, ...args);
    } else {
      throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
    }
  };
  var Logger = class {
    constructor(name4) {
      this.name = name4;
      this._logLevel = defaultLogLevel;
      this._logHandler = defaultLogHandler;
      this._userLogHandler = null;
      instances.push(this);
    }
    get logLevel() {
      return this._logLevel;
    }
    set logLevel(val) {
      if (!(val in LogLevel)) {
        throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
      }
      this._logLevel = val;
    }
    setLogLevel(val) {
      this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
    }
    get logHandler() {
      return this._logHandler;
    }
    set logHandler(val) {
      if (typeof val !== "function") {
        throw new TypeError("Value assigned to `logHandler` must be a function");
      }
      this._logHandler = val;
    }
    get userLogHandler() {
      return this._userLogHandler;
    }
    set userLogHandler(val) {
      this._userLogHandler = val;
    }
    debug(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
      this._logHandler(this, LogLevel.DEBUG, ...args);
    }
    log(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
      this._logHandler(this, LogLevel.VERBOSE, ...args);
    }
    info(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
      this._logHandler(this, LogLevel.INFO, ...args);
    }
    warn(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
      this._logHandler(this, LogLevel.WARN, ...args);
    }
    error(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
      this._logHandler(this, LogLevel.ERROR, ...args);
    }
  };

  // ../node_modules/idb/build/wrap-idb-value.js
  var instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
  var idbProxyableTypes;
  var cursorAdvanceMethods;
  function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
      IDBDatabase,
      IDBObjectStore,
      IDBIndex,
      IDBCursor,
      IDBTransaction
    ]);
  }
  function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ]);
  }
  var cursorRequestMap = /* @__PURE__ */ new WeakMap();
  var transactionDoneMap = /* @__PURE__ */ new WeakMap();
  var transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
  var transformCache = /* @__PURE__ */ new WeakMap();
  var reverseTransformCache = /* @__PURE__ */ new WeakMap();
  function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
      const unlisten = () => {
        request.removeEventListener("success", success);
        request.removeEventListener("error", error);
      };
      const success = () => {
        resolve(wrap(request.result));
        unlisten();
      };
      const error = () => {
        reject(request.error);
        unlisten();
      };
      request.addEventListener("success", success);
      request.addEventListener("error", error);
    });
    promise.then((value) => {
      if (value instanceof IDBCursor) {
        cursorRequestMap.set(value, request);
      }
    }).catch(() => {
    });
    reverseTransformCache.set(promise, request);
    return promise;
  }
  function cacheDonePromiseForTransaction(tx) {
    if (transactionDoneMap.has(tx))
      return;
    const done = new Promise((resolve, reject) => {
      const unlisten = () => {
        tx.removeEventListener("complete", complete);
        tx.removeEventListener("error", error);
        tx.removeEventListener("abort", error);
      };
      const complete = () => {
        resolve();
        unlisten();
      };
      const error = () => {
        reject(tx.error || new DOMException("AbortError", "AbortError"));
        unlisten();
      };
      tx.addEventListener("complete", complete);
      tx.addEventListener("error", error);
      tx.addEventListener("abort", error);
    });
    transactionDoneMap.set(tx, done);
  }
  var idbProxyTraps = {
    get(target, prop, receiver) {
      if (target instanceof IDBTransaction) {
        if (prop === "done")
          return transactionDoneMap.get(target);
        if (prop === "objectStoreNames") {
          return target.objectStoreNames || transactionStoreNamesMap.get(target);
        }
        if (prop === "store") {
          return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
        }
      }
      return wrap(target[prop]);
    },
    set(target, prop, value) {
      target[prop] = value;
      return true;
    },
    has(target, prop) {
      if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
        return true;
      }
      return prop in target;
    }
  };
  function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
  }
  function wrapFunction(func) {
    if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
      return function(storeNames, ...args) {
        const tx = func.call(unwrap(this), storeNames, ...args);
        transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
        return wrap(tx);
      };
    }
    if (getCursorAdvanceMethods().includes(func)) {
      return function(...args) {
        func.apply(unwrap(this), args);
        return wrap(cursorRequestMap.get(this));
      };
    }
    return function(...args) {
      return wrap(func.apply(unwrap(this), args));
    };
  }
  function transformCachableValue(value) {
    if (typeof value === "function")
      return wrapFunction(value);
    if (value instanceof IDBTransaction)
      cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
      return new Proxy(value, idbProxyTraps);
    return value;
  }
  function wrap(value) {
    if (value instanceof IDBRequest)
      return promisifyRequest(value);
    if (transformCache.has(value))
      return transformCache.get(value);
    const newValue = transformCachableValue(value);
    if (newValue !== value) {
      transformCache.set(value, newValue);
      reverseTransformCache.set(newValue, value);
    }
    return newValue;
  }
  var unwrap = (value) => reverseTransformCache.get(value);

  // ../node_modules/idb/build/index.js
  function openDB(name4, version4, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name4, version4);
    const openPromise = wrap(request);
    if (upgrade) {
      request.addEventListener("upgradeneeded", (event) => {
        upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction));
      });
    }
    if (blocked)
      request.addEventListener("blocked", () => blocked());
    openPromise.then((db) => {
      if (terminated)
        db.addEventListener("close", () => terminated());
      if (blocking)
        db.addEventListener("versionchange", () => blocking());
    }).catch(() => {
    });
    return openPromise;
  }
  var readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
  var writeMethods = ["put", "add", "delete", "clear"];
  var cachedMethods = /* @__PURE__ */ new Map();
  function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
      return;
    }
    if (cachedMethods.get(prop))
      return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, "");
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (!(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
      return;
    }
    const method = async function(storeName, ...args) {
      const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
      let target2 = tx.store;
      if (useIndex)
        target2 = target2.index(args.shift());
      return (await Promise.all([
        target2[targetFuncName](...args),
        isWrite && tx.done
      ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
  }
  replaceTraps((oldTraps) => __spreadProps(__spreadValues({}, oldTraps), {
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
  }));

  // ../node_modules/@firebase/app/dist/esm/index.esm2017.js
  var PlatformLoggerServiceImpl = class {
    constructor(container) {
      this.container = container;
    }
    getPlatformInfoString() {
      const providers = this.container.getProviders();
      return providers.map((provider) => {
        if (isVersionServiceProvider(provider)) {
          const service = provider.getImmediate();
          return `${service.library}/${service.version}`;
        } else {
          return null;
        }
      }).filter((logString) => logString).join(" ");
    }
  };
  function isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
  }
  var name$o = "@firebase/app";
  var version$1 = "0.7.28";
  var logger = new Logger("@firebase/app");
  var name$n = "@firebase/app-compat";
  var name$m = "@firebase/analytics-compat";
  var name$l = "@firebase/analytics";
  var name$k = "@firebase/app-check-compat";
  var name$j = "@firebase/app-check";
  var name$i = "@firebase/auth";
  var name$h = "@firebase/auth-compat";
  var name$g = "@firebase/database";
  var name$f = "@firebase/database-compat";
  var name$e = "@firebase/functions";
  var name$d = "@firebase/functions-compat";
  var name$c = "@firebase/installations";
  var name$b = "@firebase/installations-compat";
  var name$a = "@firebase/messaging";
  var name$9 = "@firebase/messaging-compat";
  var name$8 = "@firebase/performance";
  var name$7 = "@firebase/performance-compat";
  var name$6 = "@firebase/remote-config";
  var name$5 = "@firebase/remote-config-compat";
  var name$4 = "@firebase/storage";
  var name$3 = "@firebase/storage-compat";
  var name$2 = "@firebase/firestore";
  var name$1 = "@firebase/firestore-compat";
  var name = "firebase";
  var version = "9.9.0";
  var DEFAULT_ENTRY_NAME2 = "[DEFAULT]";
  var PLATFORM_LOG_STRING = {
    [name$o]: "fire-core",
    [name$n]: "fire-core-compat",
    [name$l]: "fire-analytics",
    [name$m]: "fire-analytics-compat",
    [name$j]: "fire-app-check",
    [name$k]: "fire-app-check-compat",
    [name$i]: "fire-auth",
    [name$h]: "fire-auth-compat",
    [name$g]: "fire-rtdb",
    [name$f]: "fire-rtdb-compat",
    [name$e]: "fire-fn",
    [name$d]: "fire-fn-compat",
    [name$c]: "fire-iid",
    [name$b]: "fire-iid-compat",
    [name$a]: "fire-fcm",
    [name$9]: "fire-fcm-compat",
    [name$8]: "fire-perf",
    [name$7]: "fire-perf-compat",
    [name$6]: "fire-rc",
    [name$5]: "fire-rc-compat",
    [name$4]: "fire-gcs",
    [name$3]: "fire-gcs-compat",
    [name$2]: "fire-fst",
    [name$1]: "fire-fst-compat",
    "fire-js": "fire-js",
    [name]: "fire-js-all"
  };
  var _apps = /* @__PURE__ */ new Map();
  var _components = /* @__PURE__ */ new Map();
  function _addComponent(app2, component) {
    try {
      app2.container.addComponent(component);
    } catch (e) {
      logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app2.name}`, e);
    }
  }
  function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
      logger.debug(`There were multiple attempts to register component ${componentName}.`);
      return false;
    }
    _components.set(componentName, component);
    for (const app2 of _apps.values()) {
      _addComponent(app2, component);
    }
    return true;
  }
  function _getProvider(app2, name4) {
    const heartbeatController = app2.container.getProvider("heartbeat").getImmediate({ optional: true });
    if (heartbeatController) {
      void heartbeatController.triggerHeartbeat();
    }
    return app2.container.getProvider(name4);
  }
  var ERRORS = {
    ["no-app"]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
    ["bad-app-name"]: "Illegal App name: '{$appName}",
    ["duplicate-app"]: "Firebase App named '{$appName}' already exists with different options or config",
    ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
    ["invalid-app-argument"]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    ["invalid-log-argument"]: "First argument to `onLog` must be null or a function.",
    ["storage-open"]: "Error thrown when opening storage. Original error: {$originalErrorMessage}.",
    ["storage-get"]: "Error thrown when reading from storage. Original error: {$originalErrorMessage}.",
    ["storage-set"]: "Error thrown when writing to storage. Original error: {$originalErrorMessage}.",
    ["storage-delete"]: "Error thrown when deleting from storage. Original error: {$originalErrorMessage}."
  };
  var ERROR_FACTORY = new ErrorFactory("app", "Firebase", ERRORS);
  var FirebaseAppImpl = class {
    constructor(options, config, container) {
      this._isDeleted = false;
      this._options = Object.assign({}, options);
      this._config = Object.assign({}, config);
      this._name = config.name;
      this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
      this._container = container;
      this.container.addComponent(new Component("app", () => this, "PUBLIC"));
    }
    get automaticDataCollectionEnabled() {
      this.checkDestroyed();
      return this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(val) {
      this.checkDestroyed();
      this._automaticDataCollectionEnabled = val;
    }
    get name() {
      this.checkDestroyed();
      return this._name;
    }
    get options() {
      this.checkDestroyed();
      return this._options;
    }
    get config() {
      this.checkDestroyed();
      return this._config;
    }
    get container() {
      return this._container;
    }
    get isDeleted() {
      return this._isDeleted;
    }
    set isDeleted(val) {
      this._isDeleted = val;
    }
    checkDestroyed() {
      if (this.isDeleted) {
        throw ERROR_FACTORY.create("app-deleted", { appName: this._name });
      }
    }
  };
  var SDK_VERSION = version;
  function initializeApp(options, rawConfig = {}) {
    if (typeof rawConfig !== "object") {
      const name5 = rawConfig;
      rawConfig = { name: name5 };
    }
    const config = Object.assign({ name: DEFAULT_ENTRY_NAME2, automaticDataCollectionEnabled: false }, rawConfig);
    const name4 = config.name;
    if (typeof name4 !== "string" || !name4) {
      throw ERROR_FACTORY.create("bad-app-name", {
        appName: String(name4)
      });
    }
    const existingApp = _apps.get(name4);
    if (existingApp) {
      if (deepEqual(options, existingApp.options) && deepEqual(config, existingApp.config)) {
        return existingApp;
      } else {
        throw ERROR_FACTORY.create("duplicate-app", { appName: name4 });
      }
    }
    const container = new ComponentContainer(name4);
    for (const component of _components.values()) {
      container.addComponent(component);
    }
    const newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name4, newApp);
    return newApp;
  }
  function getApp(name4 = DEFAULT_ENTRY_NAME2) {
    const app2 = _apps.get(name4);
    if (!app2) {
      throw ERROR_FACTORY.create("no-app", { appName: name4 });
    }
    return app2;
  }
  function registerVersion(libraryKeyOrName, version4, variant) {
    var _a;
    let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) {
      library += `-${variant}`;
    }
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version4.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
      const warning = [
        `Unable to register library "${library}" with version "${version4}":`
      ];
      if (libraryMismatch) {
        warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
      }
      if (libraryMismatch && versionMismatch) {
        warning.push("and");
      }
      if (versionMismatch) {
        warning.push(`version name "${version4}" contains illegal characters (whitespace or "/")`);
      }
      logger.warn(warning.join(" "));
      return;
    }
    _registerComponent(new Component(`${library}-version`, () => ({ library, version: version4 }), "VERSION"));
  }
  var DB_NAME = "firebase-heartbeat-database";
  var DB_VERSION = 1;
  var STORE_NAME = "firebase-heartbeat-store";
  var dbPromise = null;
  function getDbPromise() {
    if (!dbPromise) {
      dbPromise = openDB(DB_NAME, DB_VERSION, {
        upgrade: (db, oldVersion) => {
          switch (oldVersion) {
            case 0:
              db.createObjectStore(STORE_NAME);
          }
        }
      }).catch((e) => {
        throw ERROR_FACTORY.create("storage-open", {
          originalErrorMessage: e.message
        });
      });
    }
    return dbPromise;
  }
  async function readHeartbeatsFromIndexedDB(app2) {
    var _a;
    try {
      const db = await getDbPromise();
      return db.transaction(STORE_NAME).objectStore(STORE_NAME).get(computeKey(app2));
    } catch (e) {
      throw ERROR_FACTORY.create("storage-get", {
        originalErrorMessage: (_a = e) === null || _a === void 0 ? void 0 : _a.message
      });
    }
  }
  async function writeHeartbeatsToIndexedDB(app2, heartbeatObject) {
    var _a;
    try {
      const db = await getDbPromise();
      const tx = db.transaction(STORE_NAME, "readwrite");
      const objectStore = tx.objectStore(STORE_NAME);
      await objectStore.put(heartbeatObject, computeKey(app2));
      return tx.done;
    } catch (e) {
      throw ERROR_FACTORY.create("storage-set", {
        originalErrorMessage: (_a = e) === null || _a === void 0 ? void 0 : _a.message
      });
    }
  }
  function computeKey(app2) {
    return `${app2.name}!${app2.options.appId}`;
  }
  var MAX_HEADER_BYTES = 1024;
  var STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1e3;
  var HeartbeatServiceImpl = class {
    constructor(container) {
      this.container = container;
      this._heartbeatsCache = null;
      const app2 = this.container.getProvider("app").getImmediate();
      this._storage = new HeartbeatStorageImpl(app2);
      this._heartbeatsCachePromise = this._storage.read().then((result) => {
        this._heartbeatsCache = result;
        return result;
      });
    }
    async triggerHeartbeat() {
      const platformLogger = this.container.getProvider("platform-logger").getImmediate();
      const agent = platformLogger.getPlatformInfoString();
      const date = getUTCDateString();
      if (this._heartbeatsCache === null) {
        this._heartbeatsCache = await this._heartbeatsCachePromise;
      }
      if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some((singleDateHeartbeat) => singleDateHeartbeat.date === date)) {
        return;
      } else {
        this._heartbeatsCache.heartbeats.push({ date, agent });
      }
      this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((singleDateHeartbeat) => {
        const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
        const now = Date.now();
        return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
      });
      return this._storage.overwrite(this._heartbeatsCache);
    }
    async getHeartbeatsHeader() {
      if (this._heartbeatsCache === null) {
        await this._heartbeatsCachePromise;
      }
      if (this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0) {
        return "";
      }
      const date = getUTCDateString();
      const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
      const headerString = base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
      this._heartbeatsCache.lastSentHeartbeatDate = date;
      if (unsentEntries.length > 0) {
        this._heartbeatsCache.heartbeats = unsentEntries;
        await this._storage.overwrite(this._heartbeatsCache);
      } else {
        this._heartbeatsCache.heartbeats = [];
        void this._storage.overwrite(this._heartbeatsCache);
      }
      return headerString;
    }
  };
  function getUTCDateString() {
    const today = new Date();
    return today.toISOString().substring(0, 10);
  }
  function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
    const heartbeatsToSend = [];
    let unsentEntries = heartbeatsCache.slice();
    for (const singleDateHeartbeat of heartbeatsCache) {
      const heartbeatEntry = heartbeatsToSend.find((hb) => hb.agent === singleDateHeartbeat.agent);
      if (!heartbeatEntry) {
        heartbeatsToSend.push({
          agent: singleDateHeartbeat.agent,
          dates: [singleDateHeartbeat.date]
        });
        if (countBytes(heartbeatsToSend) > maxSize) {
          heartbeatsToSend.pop();
          break;
        }
      } else {
        heartbeatEntry.dates.push(singleDateHeartbeat.date);
        if (countBytes(heartbeatsToSend) > maxSize) {
          heartbeatEntry.dates.pop();
          break;
        }
      }
      unsentEntries = unsentEntries.slice(1);
    }
    return {
      heartbeatsToSend,
      unsentEntries
    };
  }
  var HeartbeatStorageImpl = class {
    constructor(app2) {
      this.app = app2;
      this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
    }
    async runIndexedDBEnvironmentCheck() {
      if (!isIndexedDBAvailable()) {
        return false;
      } else {
        return validateIndexedDBOpenable().then(() => true).catch(() => false);
      }
    }
    async read() {
      const canUseIndexedDB = await this._canUseIndexedDBPromise;
      if (!canUseIndexedDB) {
        return { heartbeats: [] };
      } else {
        const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
        return idbHeartbeatObject || { heartbeats: [] };
      }
    }
    async overwrite(heartbeatsObject) {
      var _a;
      const canUseIndexedDB = await this._canUseIndexedDBPromise;
      if (!canUseIndexedDB) {
        return;
      } else {
        const existingHeartbeatsObject = await this.read();
        return writeHeartbeatsToIndexedDB(this.app, {
          lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
          heartbeats: heartbeatsObject.heartbeats
        });
      }
    }
    async add(heartbeatsObject) {
      var _a;
      const canUseIndexedDB = await this._canUseIndexedDBPromise;
      if (!canUseIndexedDB) {
        return;
      } else {
        const existingHeartbeatsObject = await this.read();
        return writeHeartbeatsToIndexedDB(this.app, {
          lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
          heartbeats: [
            ...existingHeartbeatsObject.heartbeats,
            ...heartbeatsObject.heartbeats
          ]
        });
      }
    }
  };
  function countBytes(heartbeatsCache) {
    return base64urlEncodeWithoutPadding(
      JSON.stringify({ version: 2, heartbeats: heartbeatsCache })
    ).length;
  }
  function registerCoreComponents(variant) {
    _registerComponent(new Component("platform-logger", (container) => new PlatformLoggerServiceImpl(container), "PRIVATE"));
    _registerComponent(new Component("heartbeat", (container) => new HeartbeatServiceImpl(container), "PRIVATE"));
    registerVersion(name$o, version$1, variant);
    registerVersion(name$o, version$1, "esm2017");
    registerVersion("fire-js", "");
  }
  registerCoreComponents("");

  // ../node_modules/firebase/app/dist/index.esm.js
  var name2 = "firebase";
  var version2 = "9.9.0";
  registerVersion(name2, version2, "app");

  // ../node_modules/@firebase/auth/node_modules/tslib/modules/index.js
  var import_tslib = __toESM(require_tslib(), 1);
  var {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __exportStar,
    __createBinding,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn
  } = import_tslib.default;

  // ../node_modules/@firebase/auth/dist/esm2017/index-90ebcfae.js
  function _prodErrorMap() {
    return {
      ["dependent-sdk-initialized-before-auth"]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
    };
  }
  var prodErrorMap = _prodErrorMap;
  var _DEFAULT_AUTH_ERROR_FACTORY = new ErrorFactory("auth", "Firebase", _prodErrorMap());
  var logClient = new Logger("@firebase/auth");
  function _logError(msg, ...args) {
    if (logClient.logLevel <= LogLevel.ERROR) {
      logClient.error(`Auth (${SDK_VERSION}): ${msg}`, ...args);
    }
  }
  function _fail(authOrCode, ...rest) {
    throw createErrorInternal(authOrCode, ...rest);
  }
  function _createError(authOrCode, ...rest) {
    return createErrorInternal(authOrCode, ...rest);
  }
  function _errorWithCustomMessage(auth2, code, message) {
    const errorMap = Object.assign(Object.assign({}, prodErrorMap()), { [code]: message });
    const factory = new ErrorFactory("auth", "Firebase", errorMap);
    return factory.create(code, {
      appName: auth2.name
    });
  }
  function _assertInstanceOf(auth2, object, instance) {
    const constructorInstance = instance;
    if (!(object instanceof constructorInstance)) {
      if (constructorInstance.name !== object.constructor.name) {
        _fail(auth2, "argument-error");
      }
      throw _errorWithCustomMessage(auth2, "argument-error", `Type of ${object.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
    }
  }
  function createErrorInternal(authOrCode, ...rest) {
    if (typeof authOrCode !== "string") {
      const code = rest[0];
      const fullParams = [...rest.slice(1)];
      if (fullParams[0]) {
        fullParams[0].appName = authOrCode.name;
      }
      return authOrCode._errorFactory.create(code, ...fullParams);
    }
    return _DEFAULT_AUTH_ERROR_FACTORY.create(authOrCode, ...rest);
  }
  function _assert(assertion, authOrCode, ...rest) {
    if (!assertion) {
      throw createErrorInternal(authOrCode, ...rest);
    }
  }
  function debugFail(failure) {
    const message = `INTERNAL ASSERTION FAILED: ` + failure;
    _logError(message);
    throw new Error(message);
  }
  function debugAssert(assertion, message) {
    if (!assertion) {
      debugFail(message);
    }
  }
  var instanceCache = /* @__PURE__ */ new Map();
  function _getInstance(cls) {
    debugAssert(cls instanceof Function, "Expected a class definition");
    let instance = instanceCache.get(cls);
    if (instance) {
      debugAssert(instance instanceof cls, "Instance stored in cache mismatched with class");
      return instance;
    }
    instance = new cls();
    instanceCache.set(cls, instance);
    return instance;
  }
  function initializeAuth(app2, deps) {
    const provider = _getProvider(app2, "auth");
    if (provider.isInitialized()) {
      const auth3 = provider.getImmediate();
      const initialOptions = provider.getOptions();
      if (deepEqual(initialOptions, deps !== null && deps !== void 0 ? deps : {})) {
        return auth3;
      } else {
        _fail(auth3, "already-initialized");
      }
    }
    const auth2 = provider.initialize({ options: deps });
    return auth2;
  }
  function _initializeAuthInstance(auth2, deps) {
    const persistence = (deps === null || deps === void 0 ? void 0 : deps.persistence) || [];
    const hierarchy = (Array.isArray(persistence) ? persistence : [persistence]).map(_getInstance);
    if (deps === null || deps === void 0 ? void 0 : deps.errorMap) {
      auth2._updateErrorMap(deps.errorMap);
    }
    auth2._initializeWithPersistence(hierarchy, deps === null || deps === void 0 ? void 0 : deps.popupRedirectResolver);
  }
  function _getCurrentUrl() {
    var _a;
    return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.href) || "";
  }
  function _isHttpOrHttps() {
    return _getCurrentScheme() === "http:" || _getCurrentScheme() === "https:";
  }
  function _getCurrentScheme() {
    var _a;
    return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.protocol) || null;
  }
  function _isOnline() {
    if (typeof navigator !== "undefined" && navigator && "onLine" in navigator && typeof navigator.onLine === "boolean" && (_isHttpOrHttps() || isBrowserExtension() || "connection" in navigator)) {
      return navigator.onLine;
    }
    return true;
  }
  function _getUserLanguage() {
    if (typeof navigator === "undefined") {
      return null;
    }
    const navigatorLanguage = navigator;
    return navigatorLanguage.languages && navigatorLanguage.languages[0] || navigatorLanguage.language || null;
  }
  var Delay = class {
    constructor(shortDelay, longDelay) {
      this.shortDelay = shortDelay;
      this.longDelay = longDelay;
      debugAssert(longDelay > shortDelay, "Short delay should be less than long delay!");
      this.isMobile = isMobileCordova() || isReactNative();
    }
    get() {
      if (!_isOnline()) {
        return Math.min(5e3, this.shortDelay);
      }
      return this.isMobile ? this.longDelay : this.shortDelay;
    }
  };
  function _emulatorUrl(config, path) {
    debugAssert(config.emulator, "Emulator should always be set here");
    const { url: url2 } = config.emulator;
    if (!path) {
      return url2;
    }
    return `${url2}${path.startsWith("/") ? path.slice(1) : path}`;
  }
  var FetchProvider = class {
    static initialize(fetchImpl, headersImpl, responseImpl) {
      this.fetchImpl = fetchImpl;
      if (headersImpl) {
        this.headersImpl = headersImpl;
      }
      if (responseImpl) {
        this.responseImpl = responseImpl;
      }
    }
    static fetch() {
      if (this.fetchImpl) {
        return this.fetchImpl;
      }
      if (typeof self !== "undefined" && "fetch" in self) {
        return self.fetch;
      }
      debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
    }
    static headers() {
      if (this.headersImpl) {
        return this.headersImpl;
      }
      if (typeof self !== "undefined" && "Headers" in self) {
        return self.Headers;
      }
      debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
    }
    static response() {
      if (this.responseImpl) {
        return this.responseImpl;
      }
      if (typeof self !== "undefined" && "Response" in self) {
        return self.Response;
      }
      debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
    }
  };
  var SERVER_ERROR_MAP = {
    ["CREDENTIAL_MISMATCH"]: "custom-token-mismatch",
    ["MISSING_CUSTOM_TOKEN"]: "internal-error",
    ["INVALID_IDENTIFIER"]: "invalid-email",
    ["MISSING_CONTINUE_URI"]: "internal-error",
    ["INVALID_PASSWORD"]: "wrong-password",
    ["MISSING_PASSWORD"]: "internal-error",
    ["EMAIL_EXISTS"]: "email-already-in-use",
    ["PASSWORD_LOGIN_DISABLED"]: "operation-not-allowed",
    ["INVALID_IDP_RESPONSE"]: "invalid-credential",
    ["INVALID_PENDING_TOKEN"]: "invalid-credential",
    ["FEDERATED_USER_ID_ALREADY_LINKED"]: "credential-already-in-use",
    ["MISSING_REQ_TYPE"]: "internal-error",
    ["EMAIL_NOT_FOUND"]: "user-not-found",
    ["RESET_PASSWORD_EXCEED_LIMIT"]: "too-many-requests",
    ["EXPIRED_OOB_CODE"]: "expired-action-code",
    ["INVALID_OOB_CODE"]: "invalid-action-code",
    ["MISSING_OOB_CODE"]: "internal-error",
    ["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]: "requires-recent-login",
    ["INVALID_ID_TOKEN"]: "invalid-user-token",
    ["TOKEN_EXPIRED"]: "user-token-expired",
    ["USER_NOT_FOUND"]: "user-token-expired",
    ["TOO_MANY_ATTEMPTS_TRY_LATER"]: "too-many-requests",
    ["INVALID_CODE"]: "invalid-verification-code",
    ["INVALID_SESSION_INFO"]: "invalid-verification-id",
    ["INVALID_TEMPORARY_PROOF"]: "invalid-credential",
    ["MISSING_SESSION_INFO"]: "missing-verification-id",
    ["SESSION_EXPIRED"]: "code-expired",
    ["MISSING_ANDROID_PACKAGE_NAME"]: "missing-android-pkg-name",
    ["UNAUTHORIZED_DOMAIN"]: "unauthorized-continue-uri",
    ["INVALID_OAUTH_CLIENT_ID"]: "invalid-oauth-client-id",
    ["ADMIN_ONLY_OPERATION"]: "admin-restricted-operation",
    ["INVALID_MFA_PENDING_CREDENTIAL"]: "invalid-multi-factor-session",
    ["MFA_ENROLLMENT_NOT_FOUND"]: "multi-factor-info-not-found",
    ["MISSING_MFA_ENROLLMENT_ID"]: "missing-multi-factor-info",
    ["MISSING_MFA_PENDING_CREDENTIAL"]: "missing-multi-factor-session",
    ["SECOND_FACTOR_EXISTS"]: "second-factor-already-in-use",
    ["SECOND_FACTOR_LIMIT_EXCEEDED"]: "maximum-second-factor-count-exceeded",
    ["BLOCKING_FUNCTION_ERROR_RESPONSE"]: "internal-error"
  };
  var DEFAULT_API_TIMEOUT_MS = new Delay(3e4, 6e4);
  function _addTidIfNecessary(auth2, request) {
    if (auth2.tenantId && !request.tenantId) {
      return Object.assign(Object.assign({}, request), { tenantId: auth2.tenantId });
    }
    return request;
  }
  async function _performApiRequest(auth2, method, path, request, customErrorMap = {}) {
    return _performFetchWithErrorHandling(auth2, customErrorMap, async () => {
      let body = {};
      let params = {};
      if (request) {
        if (method === "GET") {
          params = request;
        } else {
          body = {
            body: JSON.stringify(request)
          };
        }
      }
      const query = querystring(Object.assign({ key: auth2.config.apiKey }, params)).slice(1);
      const headers = await auth2._getAdditionalHeaders();
      headers["Content-Type"] = "application/json";
      if (auth2.languageCode) {
        headers["X-Firebase-Locale"] = auth2.languageCode;
      }
      return FetchProvider.fetch()(_getFinalTarget(auth2, auth2.config.apiHost, path, query), Object.assign({
        method,
        headers,
        referrerPolicy: "no-referrer"
      }, body));
    });
  }
  async function _performFetchWithErrorHandling(auth2, customErrorMap, fetchFn) {
    auth2._canInitEmulator = false;
    const errorMap = Object.assign(Object.assign({}, SERVER_ERROR_MAP), customErrorMap);
    try {
      const networkTimeout = new NetworkTimeout(auth2);
      const response = await Promise.race([
        fetchFn(),
        networkTimeout.promise
      ]);
      networkTimeout.clearNetworkTimeout();
      const json = await response.json();
      if ("needConfirmation" in json) {
        throw _makeTaggedError(auth2, "account-exists-with-different-credential", json);
      }
      if (response.ok && !("errorMessage" in json)) {
        return json;
      } else {
        const errorMessage = response.ok ? json.errorMessage : json.error.message;
        const [serverErrorCode, serverErrorMessage] = errorMessage.split(" : ");
        if (serverErrorCode === "FEDERATED_USER_ID_ALREADY_LINKED") {
          throw _makeTaggedError(auth2, "credential-already-in-use", json);
        } else if (serverErrorCode === "EMAIL_EXISTS") {
          throw _makeTaggedError(auth2, "email-already-in-use", json);
        } else if (serverErrorCode === "USER_DISABLED") {
          throw _makeTaggedError(auth2, "user-disabled", json);
        }
        const authError = errorMap[serverErrorCode] || serverErrorCode.toLowerCase().replace(/[_\s]+/g, "-");
        if (serverErrorMessage) {
          throw _errorWithCustomMessage(auth2, authError, serverErrorMessage);
        } else {
          _fail(auth2, authError);
        }
      }
    } catch (e) {
      if (e instanceof FirebaseError) {
        throw e;
      }
      _fail(auth2, "network-request-failed");
    }
  }
  async function _performSignInRequest(auth2, method, path, request, customErrorMap = {}) {
    const serverResponse = await _performApiRequest(auth2, method, path, request, customErrorMap);
    if ("mfaPendingCredential" in serverResponse) {
      _fail(auth2, "multi-factor-auth-required", {
        _serverResponse: serverResponse
      });
    }
    return serverResponse;
  }
  function _getFinalTarget(auth2, host, path, query) {
    const base = `${host}${path}?${query}`;
    if (!auth2.config.emulator) {
      return `${auth2.config.apiScheme}://${base}`;
    }
    return _emulatorUrl(auth2.config, base);
  }
  var NetworkTimeout = class {
    constructor(auth2) {
      this.auth = auth2;
      this.timer = null;
      this.promise = new Promise((_, reject) => {
        this.timer = setTimeout(() => {
          return reject(_createError(this.auth, "network-request-failed"));
        }, DEFAULT_API_TIMEOUT_MS.get());
      });
    }
    clearNetworkTimeout() {
      clearTimeout(this.timer);
    }
  };
  function _makeTaggedError(auth2, code, response) {
    const errorParams = {
      appName: auth2.name
    };
    if (response.email) {
      errorParams.email = response.email;
    }
    if (response.phoneNumber) {
      errorParams.phoneNumber = response.phoneNumber;
    }
    const error = _createError(auth2, code, errorParams);
    error.customData._tokenResponse = response;
    return error;
  }
  async function deleteAccount(auth2, request) {
    return _performApiRequest(auth2, "POST", "/v1/accounts:delete", request);
  }
  async function getAccountInfo(auth2, request) {
    return _performApiRequest(auth2, "POST", "/v1/accounts:lookup", request);
  }
  function utcTimestampToDateString(utcTimestamp) {
    if (!utcTimestamp) {
      return void 0;
    }
    try {
      const date = new Date(Number(utcTimestamp));
      if (!isNaN(date.getTime())) {
        return date.toUTCString();
      }
    } catch (e) {
    }
    return void 0;
  }
  async function getIdTokenResult(user2, forceRefresh = false) {
    const userInternal = getModularInstance(user2);
    const token = await userInternal.getIdToken(forceRefresh);
    const claims = _parseToken(token);
    _assert(claims && claims.exp && claims.auth_time && claims.iat, userInternal.auth, "internal-error");
    const firebase = typeof claims.firebase === "object" ? claims.firebase : void 0;
    const signInProvider = firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_provider"];
    return {
      claims,
      token,
      authTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.auth_time)),
      issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.iat)),
      expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.exp)),
      signInProvider: signInProvider || null,
      signInSecondFactor: (firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_second_factor"]) || null
    };
  }
  function secondsStringToMilliseconds(seconds) {
    return Number(seconds) * 1e3;
  }
  function _parseToken(token) {
    var _a;
    const [algorithm, payload, signature] = token.split(".");
    if (algorithm === void 0 || payload === void 0 || signature === void 0) {
      _logError("JWT malformed, contained fewer than 3 sections");
      return null;
    }
    try {
      const decoded = base64Decode(payload);
      if (!decoded) {
        _logError("Failed to decode base64 JWT payload");
        return null;
      }
      return JSON.parse(decoded);
    } catch (e) {
      _logError("Caught error parsing JWT payload as JSON", (_a = e) === null || _a === void 0 ? void 0 : _a.toString());
      return null;
    }
  }
  function _tokenExpiresIn(token) {
    const parsedToken = _parseToken(token);
    _assert(parsedToken, "internal-error");
    _assert(typeof parsedToken.exp !== "undefined", "internal-error");
    _assert(typeof parsedToken.iat !== "undefined", "internal-error");
    return Number(parsedToken.exp) - Number(parsedToken.iat);
  }
  async function _logoutIfInvalidated(user2, promise, bypassAuthState = false) {
    if (bypassAuthState) {
      return promise;
    }
    try {
      return await promise;
    } catch (e) {
      if (e instanceof FirebaseError && isUserInvalidated(e)) {
        if (user2.auth.currentUser === user2) {
          await user2.auth.signOut();
        }
      }
      throw e;
    }
  }
  function isUserInvalidated({ code }) {
    return code === `auth/${"user-disabled"}` || code === `auth/${"user-token-expired"}`;
  }
  var ProactiveRefresh = class {
    constructor(user2) {
      this.user = user2;
      this.isRunning = false;
      this.timerId = null;
      this.errorBackoff = 3e4;
    }
    _start() {
      if (this.isRunning) {
        return;
      }
      this.isRunning = true;
      this.schedule();
    }
    _stop() {
      if (!this.isRunning) {
        return;
      }
      this.isRunning = false;
      if (this.timerId !== null) {
        clearTimeout(this.timerId);
      }
    }
    getInterval(wasError) {
      var _a;
      if (wasError) {
        const interval = this.errorBackoff;
        this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4);
        return interval;
      } else {
        this.errorBackoff = 3e4;
        const expTime = (_a = this.user.stsTokenManager.expirationTime) !== null && _a !== void 0 ? _a : 0;
        const interval = expTime - Date.now() - 3e5;
        return Math.max(0, interval);
      }
    }
    schedule(wasError = false) {
      if (!this.isRunning) {
        return;
      }
      const interval = this.getInterval(wasError);
      this.timerId = setTimeout(async () => {
        await this.iteration();
      }, interval);
    }
    async iteration() {
      var _a;
      try {
        await this.user.getIdToken(true);
      } catch (e) {
        if (((_a = e) === null || _a === void 0 ? void 0 : _a.code) === `auth/${"network-request-failed"}`) {
          this.schedule(true);
        }
        return;
      }
      this.schedule();
    }
  };
  var UserMetadata = class {
    constructor(createdAt, lastLoginAt) {
      this.createdAt = createdAt;
      this.lastLoginAt = lastLoginAt;
      this._initializeTime();
    }
    _initializeTime() {
      this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt);
      this.creationTime = utcTimestampToDateString(this.createdAt);
    }
    _copy(metadata) {
      this.createdAt = metadata.createdAt;
      this.lastLoginAt = metadata.lastLoginAt;
      this._initializeTime();
    }
    toJSON() {
      return {
        createdAt: this.createdAt,
        lastLoginAt: this.lastLoginAt
      };
    }
  };
  async function _reloadWithoutSaving(user2) {
    var _a;
    const auth2 = user2.auth;
    const idToken = await user2.getIdToken();
    const response = await _logoutIfInvalidated(user2, getAccountInfo(auth2, { idToken }));
    _assert(response === null || response === void 0 ? void 0 : response.users.length, auth2, "internal-error");
    const coreAccount = response.users[0];
    user2._notifyReloadListener(coreAccount);
    const newProviderData = ((_a = coreAccount.providerUserInfo) === null || _a === void 0 ? void 0 : _a.length) ? extractProviderData(coreAccount.providerUserInfo) : [];
    const providerData = mergeProviderData(user2.providerData, newProviderData);
    const oldIsAnonymous = user2.isAnonymous;
    const newIsAnonymous = !(user2.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
    const isAnonymous = !oldIsAnonymous ? false : newIsAnonymous;
    const updates = {
      uid: coreAccount.localId,
      displayName: coreAccount.displayName || null,
      photoURL: coreAccount.photoUrl || null,
      email: coreAccount.email || null,
      emailVerified: coreAccount.emailVerified || false,
      phoneNumber: coreAccount.phoneNumber || null,
      tenantId: coreAccount.tenantId || null,
      providerData,
      metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
      isAnonymous
    };
    Object.assign(user2, updates);
  }
  async function reload(user2) {
    const userInternal = getModularInstance(user2);
    await _reloadWithoutSaving(userInternal);
    await userInternal.auth._persistUserIfCurrent(userInternal);
    userInternal.auth._notifyListenersIfCurrent(userInternal);
  }
  function mergeProviderData(original, newData) {
    const deduped = original.filter((o) => !newData.some((n) => n.providerId === o.providerId));
    return [...deduped, ...newData];
  }
  function extractProviderData(providers) {
    return providers.map((_a) => {
      var { providerId } = _a, provider = __rest(_a, ["providerId"]);
      return {
        providerId,
        uid: provider.rawId || "",
        displayName: provider.displayName || null,
        email: provider.email || null,
        phoneNumber: provider.phoneNumber || null,
        photoURL: provider.photoUrl || null
      };
    });
  }
  async function requestStsToken(auth2, refreshToken) {
    const response = await _performFetchWithErrorHandling(auth2, {}, async () => {
      const body = querystring({
        "grant_type": "refresh_token",
        "refresh_token": refreshToken
      }).slice(1);
      const { tokenApiHost, apiKey } = auth2.config;
      const url2 = _getFinalTarget(auth2, tokenApiHost, "/v1/token", `key=${apiKey}`);
      const headers = await auth2._getAdditionalHeaders();
      headers["Content-Type"] = "application/x-www-form-urlencoded";
      return FetchProvider.fetch()(url2, {
        method: "POST",
        headers,
        body
      });
    });
    return {
      accessToken: response.access_token,
      expiresIn: response.expires_in,
      refreshToken: response.refresh_token
    };
  }
  var StsTokenManager = class {
    constructor() {
      this.refreshToken = null;
      this.accessToken = null;
      this.expirationTime = null;
    }
    get isExpired() {
      return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
    }
    updateFromServerResponse(response) {
      _assert(response.idToken, "internal-error");
      _assert(typeof response.idToken !== "undefined", "internal-error");
      _assert(typeof response.refreshToken !== "undefined", "internal-error");
      const expiresIn = "expiresIn" in response && typeof response.expiresIn !== "undefined" ? Number(response.expiresIn) : _tokenExpiresIn(response.idToken);
      this.updateTokensAndExpiration(response.idToken, response.refreshToken, expiresIn);
    }
    async getToken(auth2, forceRefresh = false) {
      _assert(!this.accessToken || this.refreshToken, auth2, "user-token-expired");
      if (!forceRefresh && this.accessToken && !this.isExpired) {
        return this.accessToken;
      }
      if (this.refreshToken) {
        await this.refresh(auth2, this.refreshToken);
        return this.accessToken;
      }
      return null;
    }
    clearRefreshToken() {
      this.refreshToken = null;
    }
    async refresh(auth2, oldToken) {
      const { accessToken, refreshToken, expiresIn } = await requestStsToken(auth2, oldToken);
      this.updateTokensAndExpiration(accessToken, refreshToken, Number(expiresIn));
    }
    updateTokensAndExpiration(accessToken, refreshToken, expiresInSec) {
      this.refreshToken = refreshToken || null;
      this.accessToken = accessToken || null;
      this.expirationTime = Date.now() + expiresInSec * 1e3;
    }
    static fromJSON(appName, object) {
      const { refreshToken, accessToken, expirationTime } = object;
      const manager = new StsTokenManager();
      if (refreshToken) {
        _assert(typeof refreshToken === "string", "internal-error", {
          appName
        });
        manager.refreshToken = refreshToken;
      }
      if (accessToken) {
        _assert(typeof accessToken === "string", "internal-error", {
          appName
        });
        manager.accessToken = accessToken;
      }
      if (expirationTime) {
        _assert(typeof expirationTime === "number", "internal-error", {
          appName
        });
        manager.expirationTime = expirationTime;
      }
      return manager;
    }
    toJSON() {
      return {
        refreshToken: this.refreshToken,
        accessToken: this.accessToken,
        expirationTime: this.expirationTime
      };
    }
    _assign(stsTokenManager) {
      this.accessToken = stsTokenManager.accessToken;
      this.refreshToken = stsTokenManager.refreshToken;
      this.expirationTime = stsTokenManager.expirationTime;
    }
    _clone() {
      return Object.assign(new StsTokenManager(), this.toJSON());
    }
    _performRefresh() {
      return debugFail("not implemented");
    }
  };
  function assertStringOrUndefined(assertion, appName) {
    _assert(typeof assertion === "string" || typeof assertion === "undefined", "internal-error", { appName });
  }
  var UserImpl = class {
    constructor(_a) {
      var { uid, auth: auth2, stsTokenManager } = _a, opt = __rest(_a, ["uid", "auth", "stsTokenManager"]);
      this.providerId = "firebase";
      this.proactiveRefresh = new ProactiveRefresh(this);
      this.reloadUserInfo = null;
      this.reloadListener = null;
      this.uid = uid;
      this.auth = auth2;
      this.stsTokenManager = stsTokenManager;
      this.accessToken = stsTokenManager.accessToken;
      this.displayName = opt.displayName || null;
      this.email = opt.email || null;
      this.emailVerified = opt.emailVerified || false;
      this.phoneNumber = opt.phoneNumber || null;
      this.photoURL = opt.photoURL || null;
      this.isAnonymous = opt.isAnonymous || false;
      this.tenantId = opt.tenantId || null;
      this.providerData = opt.providerData ? [...opt.providerData] : [];
      this.metadata = new UserMetadata(opt.createdAt || void 0, opt.lastLoginAt || void 0);
    }
    async getIdToken(forceRefresh) {
      const accessToken = await _logoutIfInvalidated(this, this.stsTokenManager.getToken(this.auth, forceRefresh));
      _assert(accessToken, this.auth, "internal-error");
      if (this.accessToken !== accessToken) {
        this.accessToken = accessToken;
        await this.auth._persistUserIfCurrent(this);
        this.auth._notifyListenersIfCurrent(this);
      }
      return accessToken;
    }
    getIdTokenResult(forceRefresh) {
      return getIdTokenResult(this, forceRefresh);
    }
    reload() {
      return reload(this);
    }
    _assign(user2) {
      if (this === user2) {
        return;
      }
      _assert(this.uid === user2.uid, this.auth, "internal-error");
      this.displayName = user2.displayName;
      this.photoURL = user2.photoURL;
      this.email = user2.email;
      this.emailVerified = user2.emailVerified;
      this.phoneNumber = user2.phoneNumber;
      this.isAnonymous = user2.isAnonymous;
      this.tenantId = user2.tenantId;
      this.providerData = user2.providerData.map((userInfo) => Object.assign({}, userInfo));
      this.metadata._copy(user2.metadata);
      this.stsTokenManager._assign(user2.stsTokenManager);
    }
    _clone(auth2) {
      return new UserImpl(Object.assign(Object.assign({}, this), { auth: auth2, stsTokenManager: this.stsTokenManager._clone() }));
    }
    _onReload(callback) {
      _assert(!this.reloadListener, this.auth, "internal-error");
      this.reloadListener = callback;
      if (this.reloadUserInfo) {
        this._notifyReloadListener(this.reloadUserInfo);
        this.reloadUserInfo = null;
      }
    }
    _notifyReloadListener(userInfo) {
      if (this.reloadListener) {
        this.reloadListener(userInfo);
      } else {
        this.reloadUserInfo = userInfo;
      }
    }
    _startProactiveRefresh() {
      this.proactiveRefresh._start();
    }
    _stopProactiveRefresh() {
      this.proactiveRefresh._stop();
    }
    async _updateTokensIfNecessary(response, reload2 = false) {
      let tokensRefreshed = false;
      if (response.idToken && response.idToken !== this.stsTokenManager.accessToken) {
        this.stsTokenManager.updateFromServerResponse(response);
        tokensRefreshed = true;
      }
      if (reload2) {
        await _reloadWithoutSaving(this);
      }
      await this.auth._persistUserIfCurrent(this);
      if (tokensRefreshed) {
        this.auth._notifyListenersIfCurrent(this);
      }
    }
    async delete() {
      const idToken = await this.getIdToken();
      await _logoutIfInvalidated(this, deleteAccount(this.auth, { idToken }));
      this.stsTokenManager.clearRefreshToken();
      return this.auth.signOut();
    }
    toJSON() {
      return Object.assign(Object.assign({
        uid: this.uid,
        email: this.email || void 0,
        emailVerified: this.emailVerified,
        displayName: this.displayName || void 0,
        isAnonymous: this.isAnonymous,
        photoURL: this.photoURL || void 0,
        phoneNumber: this.phoneNumber || void 0,
        tenantId: this.tenantId || void 0,
        providerData: this.providerData.map((userInfo) => Object.assign({}, userInfo)),
        stsTokenManager: this.stsTokenManager.toJSON(),
        _redirectEventId: this._redirectEventId
      }, this.metadata.toJSON()), {
        apiKey: this.auth.config.apiKey,
        appName: this.auth.name
      });
    }
    get refreshToken() {
      return this.stsTokenManager.refreshToken || "";
    }
    static _fromJSON(auth2, object) {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : void 0;
      const email = (_b = object.email) !== null && _b !== void 0 ? _b : void 0;
      const phoneNumber = (_c = object.phoneNumber) !== null && _c !== void 0 ? _c : void 0;
      const photoURL = (_d = object.photoURL) !== null && _d !== void 0 ? _d : void 0;
      const tenantId = (_e = object.tenantId) !== null && _e !== void 0 ? _e : void 0;
      const _redirectEventId = (_f = object._redirectEventId) !== null && _f !== void 0 ? _f : void 0;
      const createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : void 0;
      const lastLoginAt = (_h = object.lastLoginAt) !== null && _h !== void 0 ? _h : void 0;
      const { uid, emailVerified, isAnonymous, providerData, stsTokenManager: plainObjectTokenManager } = object;
      _assert(uid && plainObjectTokenManager, auth2, "internal-error");
      const stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);
      _assert(typeof uid === "string", auth2, "internal-error");
      assertStringOrUndefined(displayName, auth2.name);
      assertStringOrUndefined(email, auth2.name);
      _assert(typeof emailVerified === "boolean", auth2, "internal-error");
      _assert(typeof isAnonymous === "boolean", auth2, "internal-error");
      assertStringOrUndefined(phoneNumber, auth2.name);
      assertStringOrUndefined(photoURL, auth2.name);
      assertStringOrUndefined(tenantId, auth2.name);
      assertStringOrUndefined(_redirectEventId, auth2.name);
      assertStringOrUndefined(createdAt, auth2.name);
      assertStringOrUndefined(lastLoginAt, auth2.name);
      const user2 = new UserImpl({
        uid,
        auth: auth2,
        email,
        emailVerified,
        displayName,
        isAnonymous,
        photoURL,
        phoneNumber,
        tenantId,
        stsTokenManager,
        createdAt,
        lastLoginAt
      });
      if (providerData && Array.isArray(providerData)) {
        user2.providerData = providerData.map((userInfo) => Object.assign({}, userInfo));
      }
      if (_redirectEventId) {
        user2._redirectEventId = _redirectEventId;
      }
      return user2;
    }
    static async _fromIdTokenResponse(auth2, idTokenResponse, isAnonymous = false) {
      const stsTokenManager = new StsTokenManager();
      stsTokenManager.updateFromServerResponse(idTokenResponse);
      const user2 = new UserImpl({
        uid: idTokenResponse.localId,
        auth: auth2,
        stsTokenManager,
        isAnonymous
      });
      await _reloadWithoutSaving(user2);
      return user2;
    }
  };
  var InMemoryPersistence = class {
    constructor() {
      this.type = "NONE";
      this.storage = {};
    }
    async _isAvailable() {
      return true;
    }
    async _set(key, value) {
      this.storage[key] = value;
    }
    async _get(key) {
      const value = this.storage[key];
      return value === void 0 ? null : value;
    }
    async _remove(key) {
      delete this.storage[key];
    }
    _addListener(_key, _listener) {
      return;
    }
    _removeListener(_key, _listener) {
      return;
    }
  };
  InMemoryPersistence.type = "NONE";
  var inMemoryPersistence = InMemoryPersistence;
  function _persistenceKeyName(key, apiKey, appName) {
    return `${"firebase"}:${key}:${apiKey}:${appName}`;
  }
  var PersistenceUserManager = class {
    constructor(persistence, auth2, userKey) {
      this.persistence = persistence;
      this.auth = auth2;
      this.userKey = userKey;
      const { config, name: name4 } = this.auth;
      this.fullUserKey = _persistenceKeyName(this.userKey, config.apiKey, name4);
      this.fullPersistenceKey = _persistenceKeyName("persistence", config.apiKey, name4);
      this.boundEventHandler = auth2._onStorageEvent.bind(auth2);
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
    }
    setCurrentUser(user2) {
      return this.persistence._set(this.fullUserKey, user2.toJSON());
    }
    async getCurrentUser() {
      const blob = await this.persistence._get(this.fullUserKey);
      return blob ? UserImpl._fromJSON(this.auth, blob) : null;
    }
    removeCurrentUser() {
      return this.persistence._remove(this.fullUserKey);
    }
    savePersistenceForRedirect() {
      return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
    }
    async setPersistence(newPersistence) {
      if (this.persistence === newPersistence) {
        return;
      }
      const currentUser = await this.getCurrentUser();
      await this.removeCurrentUser();
      this.persistence = newPersistence;
      if (currentUser) {
        return this.setCurrentUser(currentUser);
      }
    }
    delete() {
      this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
    }
    static async create(auth2, persistenceHierarchy, userKey = "authUser") {
      if (!persistenceHierarchy.length) {
        return new PersistenceUserManager(_getInstance(inMemoryPersistence), auth2, userKey);
      }
      const availablePersistences = (await Promise.all(persistenceHierarchy.map(async (persistence) => {
        if (await persistence._isAvailable()) {
          return persistence;
        }
        return void 0;
      }))).filter((persistence) => persistence);
      let selectedPersistence = availablePersistences[0] || _getInstance(inMemoryPersistence);
      const key = _persistenceKeyName(userKey, auth2.config.apiKey, auth2.name);
      let userToMigrate = null;
      for (const persistence of persistenceHierarchy) {
        try {
          const blob = await persistence._get(key);
          if (blob) {
            const user2 = UserImpl._fromJSON(auth2, blob);
            if (persistence !== selectedPersistence) {
              userToMigrate = user2;
            }
            selectedPersistence = persistence;
            break;
          }
        } catch (_a) {
        }
      }
      const migrationHierarchy = availablePersistences.filter((p) => p._shouldAllowMigration);
      if (!selectedPersistence._shouldAllowMigration || !migrationHierarchy.length) {
        return new PersistenceUserManager(selectedPersistence, auth2, userKey);
      }
      selectedPersistence = migrationHierarchy[0];
      if (userToMigrate) {
        await selectedPersistence._set(key, userToMigrate.toJSON());
      }
      await Promise.all(persistenceHierarchy.map(async (persistence) => {
        if (persistence !== selectedPersistence) {
          try {
            await persistence._remove(key);
          } catch (_a) {
          }
        }
      }));
      return new PersistenceUserManager(selectedPersistence, auth2, userKey);
    }
  };
  function _getBrowserName(userAgent) {
    const ua = userAgent.toLowerCase();
    if (ua.includes("opera/") || ua.includes("opr/") || ua.includes("opios/")) {
      return "Opera";
    } else if (_isIEMobile(ua)) {
      return "IEMobile";
    } else if (ua.includes("msie") || ua.includes("trident/")) {
      return "IE";
    } else if (ua.includes("edge/")) {
      return "Edge";
    } else if (_isFirefox(ua)) {
      return "Firefox";
    } else if (ua.includes("silk/")) {
      return "Silk";
    } else if (_isBlackBerry(ua)) {
      return "Blackberry";
    } else if (_isWebOS(ua)) {
      return "Webos";
    } else if (_isSafari(ua)) {
      return "Safari";
    } else if ((ua.includes("chrome/") || _isChromeIOS(ua)) && !ua.includes("edge/")) {
      return "Chrome";
    } else if (_isAndroid(ua)) {
      return "Android";
    } else {
      const re = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/;
      const matches = userAgent.match(re);
      if ((matches === null || matches === void 0 ? void 0 : matches.length) === 2) {
        return matches[1];
      }
    }
    return "Other";
  }
  function _isFirefox(ua = getUA()) {
    return /firefox\//i.test(ua);
  }
  function _isSafari(userAgent = getUA()) {
    const ua = userAgent.toLowerCase();
    return ua.includes("safari/") && !ua.includes("chrome/") && !ua.includes("crios/") && !ua.includes("android");
  }
  function _isChromeIOS(ua = getUA()) {
    return /crios\//i.test(ua);
  }
  function _isIEMobile(ua = getUA()) {
    return /iemobile/i.test(ua);
  }
  function _isAndroid(ua = getUA()) {
    return /android/i.test(ua);
  }
  function _isBlackBerry(ua = getUA()) {
    return /blackberry/i.test(ua);
  }
  function _isWebOS(ua = getUA()) {
    return /webos/i.test(ua);
  }
  function _isIOS(ua = getUA()) {
    return /iphone|ipad|ipod/i.test(ua) || /macintosh/i.test(ua) && /mobile/i.test(ua);
  }
  function _isIOSStandalone(ua = getUA()) {
    var _a;
    return _isIOS(ua) && !!((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.standalone);
  }
  function _isIE10() {
    return isIE() && document.documentMode === 10;
  }
  function _isMobileBrowser(ua = getUA()) {
    return _isIOS(ua) || _isAndroid(ua) || _isWebOS(ua) || _isBlackBerry(ua) || /windows phone/i.test(ua) || _isIEMobile(ua);
  }
  function _isIframe() {
    try {
      return !!(window && window !== window.top);
    } catch (e) {
      return false;
    }
  }
  function _getClientVersion(clientPlatform, frameworks = []) {
    let reportedPlatform;
    switch (clientPlatform) {
      case "Browser":
        reportedPlatform = _getBrowserName(getUA());
        break;
      case "Worker":
        reportedPlatform = `${_getBrowserName(getUA())}-${clientPlatform}`;
        break;
      default:
        reportedPlatform = clientPlatform;
    }
    const reportedFrameworks = frameworks.length ? frameworks.join(",") : "FirebaseCore-web";
    return `${reportedPlatform}/${"JsCore"}/${SDK_VERSION}/${reportedFrameworks}`;
  }
  var AuthMiddlewareQueue = class {
    constructor(auth2) {
      this.auth = auth2;
      this.queue = [];
    }
    pushCallback(callback, onAbort) {
      const wrappedCallback = (user2) => new Promise((resolve, reject) => {
        try {
          const result = callback(user2);
          resolve(result);
        } catch (e) {
          reject(e);
        }
      });
      wrappedCallback.onAbort = onAbort;
      this.queue.push(wrappedCallback);
      const index = this.queue.length - 1;
      return () => {
        this.queue[index] = () => Promise.resolve();
      };
    }
    async runMiddleware(nextUser) {
      var _a;
      if (this.auth.currentUser === nextUser) {
        return;
      }
      const onAbortStack = [];
      try {
        for (const beforeStateCallback of this.queue) {
          await beforeStateCallback(nextUser);
          if (beforeStateCallback.onAbort) {
            onAbortStack.push(beforeStateCallback.onAbort);
          }
        }
      } catch (e) {
        onAbortStack.reverse();
        for (const onAbort of onAbortStack) {
          try {
            onAbort();
          } catch (_) {
          }
        }
        throw this.auth._errorFactory.create("login-blocked", { originalMessage: (_a = e) === null || _a === void 0 ? void 0 : _a.message });
      }
    }
  };
  var AuthImpl = class {
    constructor(app2, heartbeatServiceProvider, config) {
      this.app = app2;
      this.heartbeatServiceProvider = heartbeatServiceProvider;
      this.config = config;
      this.currentUser = null;
      this.emulatorConfig = null;
      this.operations = Promise.resolve();
      this.authStateSubscription = new Subscription(this);
      this.idTokenSubscription = new Subscription(this);
      this.beforeStateQueue = new AuthMiddlewareQueue(this);
      this.redirectUser = null;
      this.isProactiveRefreshEnabled = false;
      this._canInitEmulator = true;
      this._isInitialized = false;
      this._deleted = false;
      this._initializationPromise = null;
      this._popupRedirectResolver = null;
      this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY;
      this.lastNotifiedUid = void 0;
      this.languageCode = null;
      this.tenantId = null;
      this.settings = { appVerificationDisabledForTesting: false };
      this.frameworks = [];
      this.name = app2.name;
      this.clientVersion = config.sdkClientVersion;
    }
    _initializeWithPersistence(persistenceHierarchy, popupRedirectResolver) {
      if (popupRedirectResolver) {
        this._popupRedirectResolver = _getInstance(popupRedirectResolver);
      }
      this._initializationPromise = this.queue(async () => {
        var _a, _b;
        if (this._deleted) {
          return;
        }
        this.persistenceManager = await PersistenceUserManager.create(this, persistenceHierarchy);
        if (this._deleted) {
          return;
        }
        if ((_a = this._popupRedirectResolver) === null || _a === void 0 ? void 0 : _a._shouldInitProactively) {
          try {
            await this._popupRedirectResolver._initialize(this);
          } catch (e) {
          }
        }
        await this.initializeCurrentUser(popupRedirectResolver);
        this.lastNotifiedUid = ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.uid) || null;
        if (this._deleted) {
          return;
        }
        this._isInitialized = true;
      });
      return this._initializationPromise;
    }
    async _onStorageEvent() {
      if (this._deleted) {
        return;
      }
      const user2 = await this.assertedPersistence.getCurrentUser();
      if (!this.currentUser && !user2) {
        return;
      }
      if (this.currentUser && user2 && this.currentUser.uid === user2.uid) {
        this._currentUser._assign(user2);
        await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(user2, true);
    }
    async initializeCurrentUser(popupRedirectResolver) {
      var _a;
      const previouslyStoredUser = await this.assertedPersistence.getCurrentUser();
      let futureCurrentUser = previouslyStoredUser;
      let needsTocheckMiddleware = false;
      if (popupRedirectResolver && this.config.authDomain) {
        await this.getOrInitRedirectPersistenceManager();
        const redirectUserEventId = (_a = this.redirectUser) === null || _a === void 0 ? void 0 : _a._redirectEventId;
        const storedUserEventId = futureCurrentUser === null || futureCurrentUser === void 0 ? void 0 : futureCurrentUser._redirectEventId;
        const result = await this.tryRedirectSignIn(popupRedirectResolver);
        if ((!redirectUserEventId || redirectUserEventId === storedUserEventId) && (result === null || result === void 0 ? void 0 : result.user)) {
          futureCurrentUser = result.user;
          needsTocheckMiddleware = true;
        }
      }
      if (!futureCurrentUser) {
        return this.directlySetCurrentUser(null);
      }
      if (!futureCurrentUser._redirectEventId) {
        if (needsTocheckMiddleware) {
          try {
            await this.beforeStateQueue.runMiddleware(futureCurrentUser);
          } catch (e) {
            futureCurrentUser = previouslyStoredUser;
            this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(e));
          }
        }
        if (futureCurrentUser) {
          return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
        } else {
          return this.directlySetCurrentUser(null);
        }
      }
      _assert(this._popupRedirectResolver, this, "argument-error");
      await this.getOrInitRedirectPersistenceManager();
      if (this.redirectUser && this.redirectUser._redirectEventId === futureCurrentUser._redirectEventId) {
        return this.directlySetCurrentUser(futureCurrentUser);
      }
      return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
    }
    async tryRedirectSignIn(redirectResolver) {
      let result = null;
      try {
        result = await this._popupRedirectResolver._completeRedirectFn(this, redirectResolver, true);
      } catch (e) {
        await this._setRedirectUser(null);
      }
      return result;
    }
    async reloadAndSetCurrentUserOrClear(user2) {
      var _a;
      try {
        await _reloadWithoutSaving(user2);
      } catch (e) {
        if (((_a = e) === null || _a === void 0 ? void 0 : _a.code) !== `auth/${"network-request-failed"}`) {
          return this.directlySetCurrentUser(null);
        }
      }
      return this.directlySetCurrentUser(user2);
    }
    useDeviceLanguage() {
      this.languageCode = _getUserLanguage();
    }
    async _delete() {
      this._deleted = true;
    }
    async updateCurrentUser(userExtern) {
      const user2 = userExtern ? getModularInstance(userExtern) : null;
      if (user2) {
        _assert(user2.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token");
      }
      return this._updateCurrentUser(user2 && user2._clone(this));
    }
    async _updateCurrentUser(user2, skipBeforeStateCallbacks = false) {
      if (this._deleted) {
        return;
      }
      if (user2) {
        _assert(this.tenantId === user2.tenantId, this, "tenant-id-mismatch");
      }
      if (!skipBeforeStateCallbacks) {
        await this.beforeStateQueue.runMiddleware(user2);
      }
      return this.queue(async () => {
        await this.directlySetCurrentUser(user2);
        this.notifyAuthListeners();
      });
    }
    async signOut() {
      await this.beforeStateQueue.runMiddleware(null);
      if (this.redirectPersistenceManager || this._popupRedirectResolver) {
        await this._setRedirectUser(null);
      }
      return this._updateCurrentUser(null, true);
    }
    setPersistence(persistence) {
      return this.queue(async () => {
        await this.assertedPersistence.setPersistence(_getInstance(persistence));
      });
    }
    _getPersistence() {
      return this.assertedPersistence.persistence.type;
    }
    _updateErrorMap(errorMap) {
      this._errorFactory = new ErrorFactory("auth", "Firebase", errorMap());
    }
    onAuthStateChanged(nextOrObserver, error, completed) {
      return this.registerStateListener(this.authStateSubscription, nextOrObserver, error, completed);
    }
    beforeAuthStateChanged(callback, onAbort) {
      return this.beforeStateQueue.pushCallback(callback, onAbort);
    }
    onIdTokenChanged(nextOrObserver, error, completed) {
      return this.registerStateListener(this.idTokenSubscription, nextOrObserver, error, completed);
    }
    toJSON() {
      var _a;
      return {
        apiKey: this.config.apiKey,
        authDomain: this.config.authDomain,
        appName: this.name,
        currentUser: (_a = this._currentUser) === null || _a === void 0 ? void 0 : _a.toJSON()
      };
    }
    async _setRedirectUser(user2, popupRedirectResolver) {
      const redirectManager = await this.getOrInitRedirectPersistenceManager(popupRedirectResolver);
      return user2 === null ? redirectManager.removeCurrentUser() : redirectManager.setCurrentUser(user2);
    }
    async getOrInitRedirectPersistenceManager(popupRedirectResolver) {
      if (!this.redirectPersistenceManager) {
        const resolver = popupRedirectResolver && _getInstance(popupRedirectResolver) || this._popupRedirectResolver;
        _assert(resolver, this, "argument-error");
        this.redirectPersistenceManager = await PersistenceUserManager.create(this, [_getInstance(resolver._redirectPersistence)], "redirectUser");
        this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
      }
      return this.redirectPersistenceManager;
    }
    async _redirectUserForId(id) {
      var _a, _b;
      if (this._isInitialized) {
        await this.queue(async () => {
        });
      }
      if (((_a = this._currentUser) === null || _a === void 0 ? void 0 : _a._redirectEventId) === id) {
        return this._currentUser;
      }
      if (((_b = this.redirectUser) === null || _b === void 0 ? void 0 : _b._redirectEventId) === id) {
        return this.redirectUser;
      }
      return null;
    }
    async _persistUserIfCurrent(user2) {
      if (user2 === this.currentUser) {
        return this.queue(async () => this.directlySetCurrentUser(user2));
      }
    }
    _notifyListenersIfCurrent(user2) {
      if (user2 === this.currentUser) {
        this.notifyAuthListeners();
      }
    }
    _key() {
      return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
    }
    _startProactiveRefresh() {
      this.isProactiveRefreshEnabled = true;
      if (this.currentUser) {
        this._currentUser._startProactiveRefresh();
      }
    }
    _stopProactiveRefresh() {
      this.isProactiveRefreshEnabled = false;
      if (this.currentUser) {
        this._currentUser._stopProactiveRefresh();
      }
    }
    get _currentUser() {
      return this.currentUser;
    }
    notifyAuthListeners() {
      var _a, _b;
      if (!this._isInitialized) {
        return;
      }
      this.idTokenSubscription.next(this.currentUser);
      const currentUid = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : null;
      if (this.lastNotifiedUid !== currentUid) {
        this.lastNotifiedUid = currentUid;
        this.authStateSubscription.next(this.currentUser);
      }
    }
    registerStateListener(subscription, nextOrObserver, error, completed) {
      if (this._deleted) {
        return () => {
        };
      }
      const cb = typeof nextOrObserver === "function" ? nextOrObserver : nextOrObserver.next.bind(nextOrObserver);
      const promise = this._isInitialized ? Promise.resolve() : this._initializationPromise;
      _assert(promise, this, "internal-error");
      promise.then(() => cb(this.currentUser));
      if (typeof nextOrObserver === "function") {
        return subscription.addObserver(nextOrObserver, error, completed);
      } else {
        return subscription.addObserver(nextOrObserver);
      }
    }
    async directlySetCurrentUser(user2) {
      if (this.currentUser && this.currentUser !== user2) {
        this._currentUser._stopProactiveRefresh();
        if (user2 && this.isProactiveRefreshEnabled) {
          user2._startProactiveRefresh();
        }
      }
      this.currentUser = user2;
      if (user2) {
        await this.assertedPersistence.setCurrentUser(user2);
      } else {
        await this.assertedPersistence.removeCurrentUser();
      }
    }
    queue(action) {
      this.operations = this.operations.then(action, action);
      return this.operations;
    }
    get assertedPersistence() {
      _assert(this.persistenceManager, this, "internal-error");
      return this.persistenceManager;
    }
    _logFramework(framework) {
      if (!framework || this.frameworks.includes(framework)) {
        return;
      }
      this.frameworks.push(framework);
      this.frameworks.sort();
      this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks());
    }
    _getFrameworks() {
      return this.frameworks;
    }
    async _getAdditionalHeaders() {
      var _a;
      const headers = {
        ["X-Client-Version"]: this.clientVersion
      };
      if (this.app.options.appId) {
        headers["X-Firebase-gmpid"] = this.app.options.appId;
      }
      const heartbeatsHeader = await ((_a = this.heartbeatServiceProvider.getImmediate({
        optional: true
      })) === null || _a === void 0 ? void 0 : _a.getHeartbeatsHeader());
      if (heartbeatsHeader) {
        headers["X-Firebase-Client"] = heartbeatsHeader;
      }
      return headers;
    }
  };
  function _castAuth(auth2) {
    return getModularInstance(auth2);
  }
  var Subscription = class {
    constructor(auth2) {
      this.auth = auth2;
      this.observer = null;
      this.addObserver = createSubscribe((observer) => this.observer = observer);
    }
    get next() {
      _assert(this.observer, this.auth, "internal-error");
      return this.observer.next.bind(this.observer);
    }
  };
  function connectAuthEmulator(auth2, url2, options) {
    const authInternal = _castAuth(auth2);
    _assert(authInternal._canInitEmulator, authInternal, "emulator-config-failed");
    _assert(/^https?:\/\//.test(url2), authInternal, "invalid-emulator-scheme");
    const disableWarnings = !!(options === null || options === void 0 ? void 0 : options.disableWarnings);
    const protocol = extractProtocol(url2);
    const { host, port } = extractHostAndPort(url2);
    const portStr = port === null ? "" : `:${port}`;
    authInternal.config.emulator = { url: `${protocol}//${host}${portStr}/` };
    authInternal.settings.appVerificationDisabledForTesting = true;
    authInternal.emulatorConfig = Object.freeze({
      host,
      port,
      protocol: protocol.replace(":", ""),
      options: Object.freeze({ disableWarnings })
    });
    if (!disableWarnings) {
      emitEmulatorWarning();
    }
  }
  function extractProtocol(url2) {
    const protocolEnd = url2.indexOf(":");
    return protocolEnd < 0 ? "" : url2.substr(0, protocolEnd + 1);
  }
  function extractHostAndPort(url2) {
    const protocol = extractProtocol(url2);
    const authority = /(\/\/)?([^?#/]+)/.exec(url2.substr(protocol.length));
    if (!authority) {
      return { host: "", port: null };
    }
    const hostAndPort = authority[2].split("@").pop() || "";
    const bracketedIPv6 = /^(\[[^\]]+\])(:|$)/.exec(hostAndPort);
    if (bracketedIPv6) {
      const host = bracketedIPv6[1];
      return { host, port: parsePort(hostAndPort.substr(host.length + 1)) };
    } else {
      const [host, port] = hostAndPort.split(":");
      return { host, port: parsePort(port) };
    }
  }
  function parsePort(portStr) {
    if (!portStr) {
      return null;
    }
    const port = Number(portStr);
    if (isNaN(port)) {
      return null;
    }
    return port;
  }
  function emitEmulatorWarning() {
    function attachBanner() {
      const el = document.createElement("p");
      const sty = el.style;
      el.innerText = "Running in emulator mode. Do not use with production credentials.";
      sty.position = "fixed";
      sty.width = "100%";
      sty.backgroundColor = "#ffffff";
      sty.border = ".1em solid #000000";
      sty.color = "#b50000";
      sty.bottom = "0px";
      sty.left = "0px";
      sty.margin = "0px";
      sty.zIndex = "10000";
      sty.textAlign = "center";
      el.classList.add("firebase-emulator-warning");
      document.body.appendChild(el);
    }
    if (typeof console !== "undefined" && typeof console.info === "function") {
      console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
    }
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      if (document.readyState === "loading") {
        window.addEventListener("DOMContentLoaded", attachBanner);
      } else {
        attachBanner();
      }
    }
  }
  var AuthCredential = class {
    constructor(providerId, signInMethod) {
      this.providerId = providerId;
      this.signInMethod = signInMethod;
    }
    toJSON() {
      return debugFail("not implemented");
    }
    _getIdTokenResponse(_auth) {
      return debugFail("not implemented");
    }
    _linkToIdToken(_auth, _idToken) {
      return debugFail("not implemented");
    }
    _getReauthenticationResolver(_auth) {
      return debugFail("not implemented");
    }
  };
  async function updateEmailPassword(auth2, request) {
    return _performApiRequest(auth2, "POST", "/v1/accounts:update", request);
  }
  async function signInWithPassword(auth2, request) {
    return _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithPassword", _addTidIfNecessary(auth2, request));
  }
  async function signInWithEmailLink$1(auth2, request) {
    return _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth2, request));
  }
  async function signInWithEmailLinkForLinking(auth2, request) {
    return _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth2, request));
  }
  var EmailAuthCredential = class extends AuthCredential {
    constructor(_email, _password, signInMethod, _tenantId = null) {
      super("password", signInMethod);
      this._email = _email;
      this._password = _password;
      this._tenantId = _tenantId;
    }
    static _fromEmailAndPassword(email, password) {
      return new EmailAuthCredential(email, password, "password");
    }
    static _fromEmailAndCode(email, oobCode, tenantId = null) {
      return new EmailAuthCredential(email, oobCode, "emailLink", tenantId);
    }
    toJSON() {
      return {
        email: this._email,
        password: this._password,
        signInMethod: this.signInMethod,
        tenantId: this._tenantId
      };
    }
    static fromJSON(json) {
      const obj = typeof json === "string" ? JSON.parse(json) : json;
      if ((obj === null || obj === void 0 ? void 0 : obj.email) && (obj === null || obj === void 0 ? void 0 : obj.password)) {
        if (obj.signInMethod === "password") {
          return this._fromEmailAndPassword(obj.email, obj.password);
        } else if (obj.signInMethod === "emailLink") {
          return this._fromEmailAndCode(obj.email, obj.password, obj.tenantId);
        }
      }
      return null;
    }
    async _getIdTokenResponse(auth2) {
      switch (this.signInMethod) {
        case "password":
          return signInWithPassword(auth2, {
            returnSecureToken: true,
            email: this._email,
            password: this._password
          });
        case "emailLink":
          return signInWithEmailLink$1(auth2, {
            email: this._email,
            oobCode: this._password
          });
        default:
          _fail(auth2, "internal-error");
      }
    }
    async _linkToIdToken(auth2, idToken) {
      switch (this.signInMethod) {
        case "password":
          return updateEmailPassword(auth2, {
            idToken,
            returnSecureToken: true,
            email: this._email,
            password: this._password
          });
        case "emailLink":
          return signInWithEmailLinkForLinking(auth2, {
            idToken,
            email: this._email,
            oobCode: this._password
          });
        default:
          _fail(auth2, "internal-error");
      }
    }
    _getReauthenticationResolver(auth2) {
      return this._getIdTokenResponse(auth2);
    }
  };
  async function signInWithIdp(auth2, request) {
    return _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithIdp", _addTidIfNecessary(auth2, request));
  }
  var IDP_REQUEST_URI$1 = "http://localhost";
  var OAuthCredential = class extends AuthCredential {
    constructor() {
      super(...arguments);
      this.pendingToken = null;
    }
    static _fromParams(params) {
      const cred = new OAuthCredential(params.providerId, params.signInMethod);
      if (params.idToken || params.accessToken) {
        if (params.idToken) {
          cred.idToken = params.idToken;
        }
        if (params.accessToken) {
          cred.accessToken = params.accessToken;
        }
        if (params.nonce && !params.pendingToken) {
          cred.nonce = params.nonce;
        }
        if (params.pendingToken) {
          cred.pendingToken = params.pendingToken;
        }
      } else if (params.oauthToken && params.oauthTokenSecret) {
        cred.accessToken = params.oauthToken;
        cred.secret = params.oauthTokenSecret;
      } else {
        _fail("argument-error");
      }
      return cred;
    }
    toJSON() {
      return {
        idToken: this.idToken,
        accessToken: this.accessToken,
        secret: this.secret,
        nonce: this.nonce,
        pendingToken: this.pendingToken,
        providerId: this.providerId,
        signInMethod: this.signInMethod
      };
    }
    static fromJSON(json) {
      const obj = typeof json === "string" ? JSON.parse(json) : json;
      const { providerId, signInMethod } = obj, rest = __rest(obj, ["providerId", "signInMethod"]);
      if (!providerId || !signInMethod) {
        return null;
      }
      const cred = new OAuthCredential(providerId, signInMethod);
      cred.idToken = rest.idToken || void 0;
      cred.accessToken = rest.accessToken || void 0;
      cred.secret = rest.secret;
      cred.nonce = rest.nonce;
      cred.pendingToken = rest.pendingToken || null;
      return cred;
    }
    _getIdTokenResponse(auth2) {
      const request = this.buildRequest();
      return signInWithIdp(auth2, request);
    }
    _linkToIdToken(auth2, idToken) {
      const request = this.buildRequest();
      request.idToken = idToken;
      return signInWithIdp(auth2, request);
    }
    _getReauthenticationResolver(auth2) {
      const request = this.buildRequest();
      request.autoCreate = false;
      return signInWithIdp(auth2, request);
    }
    buildRequest() {
      const request = {
        requestUri: IDP_REQUEST_URI$1,
        returnSecureToken: true
      };
      if (this.pendingToken) {
        request.pendingToken = this.pendingToken;
      } else {
        const postBody = {};
        if (this.idToken) {
          postBody["id_token"] = this.idToken;
        }
        if (this.accessToken) {
          postBody["access_token"] = this.accessToken;
        }
        if (this.secret) {
          postBody["oauth_token_secret"] = this.secret;
        }
        postBody["providerId"] = this.providerId;
        if (this.nonce && !this.pendingToken) {
          postBody["nonce"] = this.nonce;
        }
        request.postBody = querystring(postBody);
      }
      return request;
    }
  };
  async function sendPhoneVerificationCode(auth2, request) {
    return _performApiRequest(auth2, "POST", "/v1/accounts:sendVerificationCode", _addTidIfNecessary(auth2, request));
  }
  async function signInWithPhoneNumber$1(auth2, request) {
    return _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth2, request));
  }
  async function linkWithPhoneNumber$1(auth2, request) {
    const response = await _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth2, request));
    if (response.temporaryProof) {
      throw _makeTaggedError(auth2, "account-exists-with-different-credential", response);
    }
    return response;
  }
  var VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_ = {
    ["USER_NOT_FOUND"]: "user-not-found"
  };
  async function verifyPhoneNumberForExisting(auth2, request) {
    const apiRequest = Object.assign(Object.assign({}, request), { operation: "REAUTH" });
    return _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth2, apiRequest), VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_);
  }
  var PhoneAuthCredential = class extends AuthCredential {
    constructor(params) {
      super("phone", "phone");
      this.params = params;
    }
    static _fromVerification(verificationId, verificationCode) {
      return new PhoneAuthCredential({ verificationId, verificationCode });
    }
    static _fromTokenResponse(phoneNumber, temporaryProof) {
      return new PhoneAuthCredential({ phoneNumber, temporaryProof });
    }
    _getIdTokenResponse(auth2) {
      return signInWithPhoneNumber$1(auth2, this._makeVerificationRequest());
    }
    _linkToIdToken(auth2, idToken) {
      return linkWithPhoneNumber$1(auth2, Object.assign({ idToken }, this._makeVerificationRequest()));
    }
    _getReauthenticationResolver(auth2) {
      return verifyPhoneNumberForExisting(auth2, this._makeVerificationRequest());
    }
    _makeVerificationRequest() {
      const { temporaryProof, phoneNumber, verificationId, verificationCode } = this.params;
      if (temporaryProof && phoneNumber) {
        return { temporaryProof, phoneNumber };
      }
      return {
        sessionInfo: verificationId,
        code: verificationCode
      };
    }
    toJSON() {
      const obj = {
        providerId: this.providerId
      };
      if (this.params.phoneNumber) {
        obj.phoneNumber = this.params.phoneNumber;
      }
      if (this.params.temporaryProof) {
        obj.temporaryProof = this.params.temporaryProof;
      }
      if (this.params.verificationCode) {
        obj.verificationCode = this.params.verificationCode;
      }
      if (this.params.verificationId) {
        obj.verificationId = this.params.verificationId;
      }
      return obj;
    }
    static fromJSON(json) {
      if (typeof json === "string") {
        json = JSON.parse(json);
      }
      const { verificationId, verificationCode, phoneNumber, temporaryProof } = json;
      if (!verificationCode && !verificationId && !phoneNumber && !temporaryProof) {
        return null;
      }
      return new PhoneAuthCredential({
        verificationId,
        verificationCode,
        phoneNumber,
        temporaryProof
      });
    }
  };
  function parseMode(mode) {
    switch (mode) {
      case "recoverEmail":
        return "RECOVER_EMAIL";
      case "resetPassword":
        return "PASSWORD_RESET";
      case "signIn":
        return "EMAIL_SIGNIN";
      case "verifyEmail":
        return "VERIFY_EMAIL";
      case "verifyAndChangeEmail":
        return "VERIFY_AND_CHANGE_EMAIL";
      case "revertSecondFactorAddition":
        return "REVERT_SECOND_FACTOR_ADDITION";
      default:
        return null;
    }
  }
  function parseDeepLink(url2) {
    const link = querystringDecode(extractQuerystring(url2))["link"];
    const doubleDeepLink = link ? querystringDecode(extractQuerystring(link))["deep_link_id"] : null;
    const iOSDeepLink = querystringDecode(extractQuerystring(url2))["deep_link_id"];
    const iOSDoubleDeepLink = iOSDeepLink ? querystringDecode(extractQuerystring(iOSDeepLink))["link"] : null;
    return iOSDoubleDeepLink || iOSDeepLink || doubleDeepLink || link || url2;
  }
  var ActionCodeURL = class {
    constructor(actionLink) {
      var _a, _b, _c, _d, _e, _f;
      const searchParams = querystringDecode(extractQuerystring(actionLink));
      const apiKey = (_a = searchParams["apiKey"]) !== null && _a !== void 0 ? _a : null;
      const code = (_b = searchParams["oobCode"]) !== null && _b !== void 0 ? _b : null;
      const operation = parseMode((_c = searchParams["mode"]) !== null && _c !== void 0 ? _c : null);
      _assert(apiKey && code && operation, "argument-error");
      this.apiKey = apiKey;
      this.operation = operation;
      this.code = code;
      this.continueUrl = (_d = searchParams["continueUrl"]) !== null && _d !== void 0 ? _d : null;
      this.languageCode = (_e = searchParams["languageCode"]) !== null && _e !== void 0 ? _e : null;
      this.tenantId = (_f = searchParams["tenantId"]) !== null && _f !== void 0 ? _f : null;
    }
    static parseLink(link) {
      const actionLink = parseDeepLink(link);
      try {
        return new ActionCodeURL(actionLink);
      } catch (_a) {
        return null;
      }
    }
  };
  var EmailAuthProvider = class {
    constructor() {
      this.providerId = EmailAuthProvider.PROVIDER_ID;
    }
    static credential(email, password) {
      return EmailAuthCredential._fromEmailAndPassword(email, password);
    }
    static credentialWithLink(email, emailLink) {
      const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
      _assert(actionCodeUrl, "argument-error");
      return EmailAuthCredential._fromEmailAndCode(email, actionCodeUrl.code, actionCodeUrl.tenantId);
    }
  };
  EmailAuthProvider.PROVIDER_ID = "password";
  EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
  EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
  var FederatedAuthProvider = class {
    constructor(providerId) {
      this.providerId = providerId;
      this.defaultLanguageCode = null;
      this.customParameters = {};
    }
    setDefaultLanguage(languageCode) {
      this.defaultLanguageCode = languageCode;
    }
    setCustomParameters(customOAuthParameters) {
      this.customParameters = customOAuthParameters;
      return this;
    }
    getCustomParameters() {
      return this.customParameters;
    }
  };
  var BaseOAuthProvider = class extends FederatedAuthProvider {
    constructor() {
      super(...arguments);
      this.scopes = [];
    }
    addScope(scope) {
      if (!this.scopes.includes(scope)) {
        this.scopes.push(scope);
      }
      return this;
    }
    getScopes() {
      return [...this.scopes];
    }
  };
  var FacebookAuthProvider = class extends BaseOAuthProvider {
    constructor() {
      super("facebook.com");
    }
    static credential(accessToken) {
      return OAuthCredential._fromParams({
        providerId: FacebookAuthProvider.PROVIDER_ID,
        signInMethod: FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
        accessToken
      });
    }
    static credentialFromResult(userCredential) {
      return FacebookAuthProvider.credentialFromTaggedObject(userCredential);
    }
    static credentialFromError(error) {
      return FacebookAuthProvider.credentialFromTaggedObject(error.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
      if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
        return null;
      }
      if (!tokenResponse.oauthAccessToken) {
        return null;
      }
      try {
        return FacebookAuthProvider.credential(tokenResponse.oauthAccessToken);
      } catch (_a) {
        return null;
      }
    }
  };
  FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
  FacebookAuthProvider.PROVIDER_ID = "facebook.com";
  var GoogleAuthProvider = class extends BaseOAuthProvider {
    constructor() {
      super("google.com");
      this.addScope("profile");
    }
    static credential(idToken, accessToken) {
      return OAuthCredential._fromParams({
        providerId: GoogleAuthProvider.PROVIDER_ID,
        signInMethod: GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
        idToken,
        accessToken
      });
    }
    static credentialFromResult(userCredential) {
      return GoogleAuthProvider.credentialFromTaggedObject(userCredential);
    }
    static credentialFromError(error) {
      return GoogleAuthProvider.credentialFromTaggedObject(error.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
      if (!tokenResponse) {
        return null;
      }
      const { oauthIdToken, oauthAccessToken } = tokenResponse;
      if (!oauthIdToken && !oauthAccessToken) {
        return null;
      }
      try {
        return GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
      } catch (_a) {
        return null;
      }
    }
  };
  GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com";
  GoogleAuthProvider.PROVIDER_ID = "google.com";
  var GithubAuthProvider = class extends BaseOAuthProvider {
    constructor() {
      super("github.com");
    }
    static credential(accessToken) {
      return OAuthCredential._fromParams({
        providerId: GithubAuthProvider.PROVIDER_ID,
        signInMethod: GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
        accessToken
      });
    }
    static credentialFromResult(userCredential) {
      return GithubAuthProvider.credentialFromTaggedObject(userCredential);
    }
    static credentialFromError(error) {
      return GithubAuthProvider.credentialFromTaggedObject(error.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
      if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
        return null;
      }
      if (!tokenResponse.oauthAccessToken) {
        return null;
      }
      try {
        return GithubAuthProvider.credential(tokenResponse.oauthAccessToken);
      } catch (_a) {
        return null;
      }
    }
  };
  GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com";
  GithubAuthProvider.PROVIDER_ID = "github.com";
  var TwitterAuthProvider = class extends BaseOAuthProvider {
    constructor() {
      super("twitter.com");
    }
    static credential(token, secret) {
      return OAuthCredential._fromParams({
        providerId: TwitterAuthProvider.PROVIDER_ID,
        signInMethod: TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
        oauthToken: token,
        oauthTokenSecret: secret
      });
    }
    static credentialFromResult(userCredential) {
      return TwitterAuthProvider.credentialFromTaggedObject(userCredential);
    }
    static credentialFromError(error) {
      return TwitterAuthProvider.credentialFromTaggedObject(error.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
      if (!tokenResponse) {
        return null;
      }
      const { oauthAccessToken, oauthTokenSecret } = tokenResponse;
      if (!oauthAccessToken || !oauthTokenSecret) {
        return null;
      }
      try {
        return TwitterAuthProvider.credential(oauthAccessToken, oauthTokenSecret);
      } catch (_a) {
        return null;
      }
    }
  };
  TwitterAuthProvider.TWITTER_SIGN_IN_METHOD = "twitter.com";
  TwitterAuthProvider.PROVIDER_ID = "twitter.com";
  async function signUp(auth2, request) {
    return _performSignInRequest(auth2, "POST", "/v1/accounts:signUp", _addTidIfNecessary(auth2, request));
  }
  var UserCredentialImpl = class {
    constructor(params) {
      this.user = params.user;
      this.providerId = params.providerId;
      this._tokenResponse = params._tokenResponse;
      this.operationType = params.operationType;
    }
    static async _fromIdTokenResponse(auth2, operationType, idTokenResponse, isAnonymous = false) {
      const user2 = await UserImpl._fromIdTokenResponse(auth2, idTokenResponse, isAnonymous);
      const providerId = providerIdForResponse(idTokenResponse);
      const userCred = new UserCredentialImpl({
        user: user2,
        providerId,
        _tokenResponse: idTokenResponse,
        operationType
      });
      return userCred;
    }
    static async _forOperation(user2, operationType, response) {
      await user2._updateTokensIfNecessary(response, true);
      const providerId = providerIdForResponse(response);
      return new UserCredentialImpl({
        user: user2,
        providerId,
        _tokenResponse: response,
        operationType
      });
    }
  };
  function providerIdForResponse(response) {
    if (response.providerId) {
      return response.providerId;
    }
    if ("phoneNumber" in response) {
      return "phone";
    }
    return null;
  }
  var MultiFactorError = class extends FirebaseError {
    constructor(auth2, error, operationType, user2) {
      var _a;
      super(error.code, error.message);
      this.operationType = operationType;
      this.user = user2;
      Object.setPrototypeOf(this, MultiFactorError.prototype);
      this.customData = {
        appName: auth2.name,
        tenantId: (_a = auth2.tenantId) !== null && _a !== void 0 ? _a : void 0,
        _serverResponse: error.customData._serverResponse,
        operationType
      };
    }
    static _fromErrorAndOperation(auth2, error, operationType, user2) {
      return new MultiFactorError(auth2, error, operationType, user2);
    }
  };
  function _processCredentialSavingMfaContextIfNecessary(auth2, operationType, credential, user2) {
    const idTokenProvider = operationType === "reauthenticate" ? credential._getReauthenticationResolver(auth2) : credential._getIdTokenResponse(auth2);
    return idTokenProvider.catch((error) => {
      if (error.code === `auth/${"multi-factor-auth-required"}`) {
        throw MultiFactorError._fromErrorAndOperation(auth2, error, operationType, user2);
      }
      throw error;
    });
  }
  async function _link$1(user2, credential, bypassAuthState = false) {
    const response = await _logoutIfInvalidated(user2, credential._linkToIdToken(user2.auth, await user2.getIdToken()), bypassAuthState);
    return UserCredentialImpl._forOperation(user2, "link", response);
  }
  async function _reauthenticate(user2, credential, bypassAuthState = false) {
    var _a;
    const { auth: auth2 } = user2;
    const operationType = "reauthenticate";
    try {
      const response = await _logoutIfInvalidated(user2, _processCredentialSavingMfaContextIfNecessary(auth2, operationType, credential, user2), bypassAuthState);
      _assert(response.idToken, auth2, "internal-error");
      const parsed = _parseToken(response.idToken);
      _assert(parsed, auth2, "internal-error");
      const { sub: localId } = parsed;
      _assert(user2.uid === localId, auth2, "user-mismatch");
      return UserCredentialImpl._forOperation(user2, operationType, response);
    } catch (e) {
      if (((_a = e) === null || _a === void 0 ? void 0 : _a.code) === `auth/${"user-not-found"}`) {
        _fail(auth2, "user-mismatch");
      }
      throw e;
    }
  }
  async function _signInWithCredential(auth2, credential, bypassAuthState = false) {
    const operationType = "signIn";
    const response = await _processCredentialSavingMfaContextIfNecessary(auth2, operationType, credential);
    const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth2, operationType, response);
    if (!bypassAuthState) {
      await auth2._updateCurrentUser(userCredential.user);
    }
    return userCredential;
  }
  async function signInWithCredential(auth2, credential) {
    return _signInWithCredential(_castAuth(auth2), credential);
  }
  async function createUserWithEmailAndPassword(auth2, email, password) {
    const authInternal = _castAuth(auth2);
    const response = await signUp(authInternal, {
      returnSecureToken: true,
      email,
      password
    });
    const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response);
    await authInternal._updateCurrentUser(userCredential.user);
    return userCredential;
  }
  function signInWithEmailAndPassword(auth2, email, password) {
    return signInWithCredential(getModularInstance(auth2), EmailAuthProvider.credential(email, password));
  }
  function startEnrollPhoneMfa(auth2, request) {
    return _performApiRequest(auth2, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth2, request));
  }
  function finalizeEnrollPhoneMfa(auth2, request) {
    return _performApiRequest(auth2, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth2, request));
  }
  var STORAGE_AVAILABLE_KEY = "__sak";
  var BrowserPersistenceClass = class {
    constructor(storageRetriever, type) {
      this.storageRetriever = storageRetriever;
      this.type = type;
    }
    _isAvailable() {
      try {
        if (!this.storage) {
          return Promise.resolve(false);
        }
        this.storage.setItem(STORAGE_AVAILABLE_KEY, "1");
        this.storage.removeItem(STORAGE_AVAILABLE_KEY);
        return Promise.resolve(true);
      } catch (_a) {
        return Promise.resolve(false);
      }
    }
    _set(key, value) {
      this.storage.setItem(key, JSON.stringify(value));
      return Promise.resolve();
    }
    _get(key) {
      const json = this.storage.getItem(key);
      return Promise.resolve(json ? JSON.parse(json) : null);
    }
    _remove(key) {
      this.storage.removeItem(key);
      return Promise.resolve();
    }
    get storage() {
      return this.storageRetriever();
    }
  };
  function _iframeCannotSyncWebStorage() {
    const ua = getUA();
    return _isSafari(ua) || _isIOS(ua);
  }
  var _POLLING_INTERVAL_MS$1 = 1e3;
  var IE10_LOCAL_STORAGE_SYNC_DELAY = 10;
  var BrowserLocalPersistence = class extends BrowserPersistenceClass {
    constructor() {
      super(() => window.localStorage, "LOCAL");
      this.boundEventHandler = (event, poll) => this.onStorageEvent(event, poll);
      this.listeners = {};
      this.localCache = {};
      this.pollTimer = null;
      this.safariLocalStorageNotSynced = _iframeCannotSyncWebStorage() && _isIframe();
      this.fallbackToPolling = _isMobileBrowser();
      this._shouldAllowMigration = true;
    }
    forAllChangedKeys(cb) {
      for (const key of Object.keys(this.listeners)) {
        const newValue = this.storage.getItem(key);
        const oldValue = this.localCache[key];
        if (newValue !== oldValue) {
          cb(key, oldValue, newValue);
        }
      }
    }
    onStorageEvent(event, poll = false) {
      if (!event.key) {
        this.forAllChangedKeys((key2, _oldValue, newValue) => {
          this.notifyListeners(key2, newValue);
        });
        return;
      }
      const key = event.key;
      if (poll) {
        this.detachListener();
      } else {
        this.stopPolling();
      }
      if (this.safariLocalStorageNotSynced) {
        const storedValue2 = this.storage.getItem(key);
        if (event.newValue !== storedValue2) {
          if (event.newValue !== null) {
            this.storage.setItem(key, event.newValue);
          } else {
            this.storage.removeItem(key);
          }
        } else if (this.localCache[key] === event.newValue && !poll) {
          return;
        }
      }
      const triggerListeners = () => {
        const storedValue2 = this.storage.getItem(key);
        if (!poll && this.localCache[key] === storedValue2) {
          return;
        }
        this.notifyListeners(key, storedValue2);
      };
      const storedValue = this.storage.getItem(key);
      if (_isIE10() && storedValue !== event.newValue && event.newValue !== event.oldValue) {
        setTimeout(triggerListeners, IE10_LOCAL_STORAGE_SYNC_DELAY);
      } else {
        triggerListeners();
      }
    }
    notifyListeners(key, value) {
      this.localCache[key] = value;
      const listeners = this.listeners[key];
      if (listeners) {
        for (const listener of Array.from(listeners)) {
          listener(value ? JSON.parse(value) : value);
        }
      }
    }
    startPolling() {
      this.stopPolling();
      this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((key, oldValue, newValue) => {
          this.onStorageEvent(
            new StorageEvent("storage", {
              key,
              oldValue,
              newValue
            }),
            true
          );
        });
      }, _POLLING_INTERVAL_MS$1);
    }
    stopPolling() {
      if (this.pollTimer) {
        clearInterval(this.pollTimer);
        this.pollTimer = null;
      }
    }
    attachListener() {
      window.addEventListener("storage", this.boundEventHandler);
    }
    detachListener() {
      window.removeEventListener("storage", this.boundEventHandler);
    }
    _addListener(key, listener) {
      if (Object.keys(this.listeners).length === 0) {
        if (this.fallbackToPolling) {
          this.startPolling();
        } else {
          this.attachListener();
        }
      }
      if (!this.listeners[key]) {
        this.listeners[key] = /* @__PURE__ */ new Set();
        this.localCache[key] = this.storage.getItem(key);
      }
      this.listeners[key].add(listener);
    }
    _removeListener(key, listener) {
      if (this.listeners[key]) {
        this.listeners[key].delete(listener);
        if (this.listeners[key].size === 0) {
          delete this.listeners[key];
        }
      }
      if (Object.keys(this.listeners).length === 0) {
        this.detachListener();
        this.stopPolling();
      }
    }
    async _set(key, value) {
      await super._set(key, value);
      this.localCache[key] = JSON.stringify(value);
    }
    async _get(key) {
      const value = await super._get(key);
      this.localCache[key] = JSON.stringify(value);
      return value;
    }
    async _remove(key) {
      await super._remove(key);
      delete this.localCache[key];
    }
  };
  BrowserLocalPersistence.type = "LOCAL";
  var browserLocalPersistence = BrowserLocalPersistence;
  var BrowserSessionPersistence = class extends BrowserPersistenceClass {
    constructor() {
      super(() => window.sessionStorage, "SESSION");
    }
    _addListener(_key, _listener) {
      return;
    }
    _removeListener(_key, _listener) {
      return;
    }
  };
  BrowserSessionPersistence.type = "SESSION";
  var browserSessionPersistence = BrowserSessionPersistence;
  function _allSettled(promises) {
    return Promise.all(promises.map(async (promise) => {
      try {
        const value = await promise;
        return {
          fulfilled: true,
          value
        };
      } catch (reason) {
        return {
          fulfilled: false,
          reason
        };
      }
    }));
  }
  var Receiver = class {
    constructor(eventTarget) {
      this.eventTarget = eventTarget;
      this.handlersMap = {};
      this.boundEventHandler = this.handleEvent.bind(this);
    }
    static _getInstance(eventTarget) {
      const existingInstance = this.receivers.find((receiver) => receiver.isListeningto(eventTarget));
      if (existingInstance) {
        return existingInstance;
      }
      const newInstance = new Receiver(eventTarget);
      this.receivers.push(newInstance);
      return newInstance;
    }
    isListeningto(eventTarget) {
      return this.eventTarget === eventTarget;
    }
    async handleEvent(event) {
      const messageEvent = event;
      const { eventId, eventType, data } = messageEvent.data;
      const handlers = this.handlersMap[eventType];
      if (!(handlers === null || handlers === void 0 ? void 0 : handlers.size)) {
        return;
      }
      messageEvent.ports[0].postMessage({
        status: "ack",
        eventId,
        eventType
      });
      const promises = Array.from(handlers).map(async (handler) => handler(messageEvent.origin, data));
      const response = await _allSettled(promises);
      messageEvent.ports[0].postMessage({
        status: "done",
        eventId,
        eventType,
        response
      });
    }
    _subscribe(eventType, eventHandler) {
      if (Object.keys(this.handlersMap).length === 0) {
        this.eventTarget.addEventListener("message", this.boundEventHandler);
      }
      if (!this.handlersMap[eventType]) {
        this.handlersMap[eventType] = /* @__PURE__ */ new Set();
      }
      this.handlersMap[eventType].add(eventHandler);
    }
    _unsubscribe(eventType, eventHandler) {
      if (this.handlersMap[eventType] && eventHandler) {
        this.handlersMap[eventType].delete(eventHandler);
      }
      if (!eventHandler || this.handlersMap[eventType].size === 0) {
        delete this.handlersMap[eventType];
      }
      if (Object.keys(this.handlersMap).length === 0) {
        this.eventTarget.removeEventListener("message", this.boundEventHandler);
      }
    }
  };
  Receiver.receivers = [];
  function _generateEventId(prefix = "", digits = 10) {
    let random = "";
    for (let i = 0; i < digits; i++) {
      random += Math.floor(Math.random() * 10);
    }
    return prefix + random;
  }
  var Sender = class {
    constructor(target) {
      this.target = target;
      this.handlers = /* @__PURE__ */ new Set();
    }
    removeMessageHandler(handler) {
      if (handler.messageChannel) {
        handler.messageChannel.port1.removeEventListener("message", handler.onMessage);
        handler.messageChannel.port1.close();
      }
      this.handlers.delete(handler);
    }
    async _send(eventType, data, timeout = 50) {
      const messageChannel = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
      if (!messageChannel) {
        throw new Error("connection_unavailable");
      }
      let completionTimer;
      let handler;
      return new Promise((resolve, reject) => {
        const eventId = _generateEventId("", 20);
        messageChannel.port1.start();
        const ackTimer = setTimeout(() => {
          reject(new Error("unsupported_event"));
        }, timeout);
        handler = {
          messageChannel,
          onMessage(event) {
            const messageEvent = event;
            if (messageEvent.data.eventId !== eventId) {
              return;
            }
            switch (messageEvent.data.status) {
              case "ack":
                clearTimeout(ackTimer);
                completionTimer = setTimeout(() => {
                  reject(new Error("timeout"));
                }, 3e3);
                break;
              case "done":
                clearTimeout(completionTimer);
                resolve(messageEvent.data.response);
                break;
              default:
                clearTimeout(ackTimer);
                clearTimeout(completionTimer);
                reject(new Error("invalid_response"));
                break;
            }
          }
        };
        this.handlers.add(handler);
        messageChannel.port1.addEventListener("message", handler.onMessage);
        this.target.postMessage({
          eventType,
          eventId,
          data
        }, [messageChannel.port2]);
      }).finally(() => {
        if (handler) {
          this.removeMessageHandler(handler);
        }
      });
    }
  };
  function _window() {
    return window;
  }
  function _setWindowLocation(url2) {
    _window().location.href = url2;
  }
  function _isWorker() {
    return typeof _window()["WorkerGlobalScope"] !== "undefined" && typeof _window()["importScripts"] === "function";
  }
  async function _getActiveServiceWorker() {
    if (!(navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker)) {
      return null;
    }
    try {
      const registration = await navigator.serviceWorker.ready;
      return registration.active;
    } catch (_a) {
      return null;
    }
  }
  function _getServiceWorkerController() {
    var _a;
    return ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker) === null || _a === void 0 ? void 0 : _a.controller) || null;
  }
  function _getWorkerGlobalScope() {
    return _isWorker() ? self : null;
  }
  var DB_NAME2 = "firebaseLocalStorageDb";
  var DB_VERSION2 = 1;
  var DB_OBJECTSTORE_NAME = "firebaseLocalStorage";
  var DB_DATA_KEYPATH = "fbase_key";
  var DBPromise = class {
    constructor(request) {
      this.request = request;
    }
    toPromise() {
      return new Promise((resolve, reject) => {
        this.request.addEventListener("success", () => {
          resolve(this.request.result);
        });
        this.request.addEventListener("error", () => {
          reject(this.request.error);
        });
      });
    }
  };
  function getObjectStore(db, isReadWrite) {
    return db.transaction([DB_OBJECTSTORE_NAME], isReadWrite ? "readwrite" : "readonly").objectStore(DB_OBJECTSTORE_NAME);
  }
  function _deleteDatabase() {
    const request = indexedDB.deleteDatabase(DB_NAME2);
    return new DBPromise(request).toPromise();
  }
  function _openDatabase() {
    const request = indexedDB.open(DB_NAME2, DB_VERSION2);
    return new Promise((resolve, reject) => {
      request.addEventListener("error", () => {
        reject(request.error);
      });
      request.addEventListener("upgradeneeded", () => {
        const db = request.result;
        try {
          db.createObjectStore(DB_OBJECTSTORE_NAME, { keyPath: DB_DATA_KEYPATH });
        } catch (e) {
          reject(e);
        }
      });
      request.addEventListener("success", async () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(DB_OBJECTSTORE_NAME)) {
          db.close();
          await _deleteDatabase();
          resolve(await _openDatabase());
        } else {
          resolve(db);
        }
      });
    });
  }
  async function _putObject(db, key, value) {
    const request = getObjectStore(db, true).put({
      [DB_DATA_KEYPATH]: key,
      value
    });
    return new DBPromise(request).toPromise();
  }
  async function getObject(db, key) {
    const request = getObjectStore(db, false).get(key);
    const data = await new DBPromise(request).toPromise();
    return data === void 0 ? null : data.value;
  }
  function _deleteObject(db, key) {
    const request = getObjectStore(db, true).delete(key);
    return new DBPromise(request).toPromise();
  }
  var _POLLING_INTERVAL_MS = 800;
  var _TRANSACTION_RETRY_COUNT = 3;
  var IndexedDBLocalPersistence = class {
    constructor() {
      this.type = "LOCAL";
      this._shouldAllowMigration = true;
      this.listeners = {};
      this.localCache = {};
      this.pollTimer = null;
      this.pendingWrites = 0;
      this.receiver = null;
      this.sender = null;
      this.serviceWorkerReceiverAvailable = false;
      this.activeServiceWorker = null;
      this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
      }, () => {
      });
    }
    async _openDb() {
      if (this.db) {
        return this.db;
      }
      this.db = await _openDatabase();
      return this.db;
    }
    async _withRetries(op) {
      let numAttempts = 0;
      while (true) {
        try {
          const db = await this._openDb();
          return await op(db);
        } catch (e) {
          if (numAttempts++ > _TRANSACTION_RETRY_COUNT) {
            throw e;
          }
          if (this.db) {
            this.db.close();
            this.db = void 0;
          }
        }
      }
    }
    async initializeServiceWorkerMessaging() {
      return _isWorker() ? this.initializeReceiver() : this.initializeSender();
    }
    async initializeReceiver() {
      this.receiver = Receiver._getInstance(_getWorkerGlobalScope());
      this.receiver._subscribe("keyChanged", async (_origin, data) => {
        const keys2 = await this._poll();
        return {
          keyProcessed: keys2.includes(data.key)
        };
      });
      this.receiver._subscribe("ping", async (_origin, _data) => {
        return ["keyChanged"];
      });
    }
    async initializeSender() {
      var _a, _b;
      this.activeServiceWorker = await _getActiveServiceWorker();
      if (!this.activeServiceWorker) {
        return;
      }
      this.sender = new Sender(this.activeServiceWorker);
      const results = await this.sender._send("ping", {}, 800);
      if (!results) {
        return;
      }
      if (((_a = results[0]) === null || _a === void 0 ? void 0 : _a.fulfilled) && ((_b = results[0]) === null || _b === void 0 ? void 0 : _b.value.includes("keyChanged"))) {
        this.serviceWorkerReceiverAvailable = true;
      }
    }
    async notifyServiceWorker(key) {
      if (!this.sender || !this.activeServiceWorker || _getServiceWorkerController() !== this.activeServiceWorker) {
        return;
      }
      try {
        await this.sender._send(
          "keyChanged",
          { key },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        );
      } catch (_a) {
      }
    }
    async _isAvailable() {
      try {
        if (!indexedDB) {
          return false;
        }
        const db = await _openDatabase();
        await _putObject(db, STORAGE_AVAILABLE_KEY, "1");
        await _deleteObject(db, STORAGE_AVAILABLE_KEY);
        return true;
      } catch (_a) {
      }
      return false;
    }
    async _withPendingWrite(write) {
      this.pendingWrites++;
      try {
        await write();
      } finally {
        this.pendingWrites--;
      }
    }
    async _set(key, value) {
      return this._withPendingWrite(async () => {
        await this._withRetries((db) => _putObject(db, key, value));
        this.localCache[key] = value;
        return this.notifyServiceWorker(key);
      });
    }
    async _get(key) {
      const obj = await this._withRetries((db) => getObject(db, key));
      this.localCache[key] = obj;
      return obj;
    }
    async _remove(key) {
      return this._withPendingWrite(async () => {
        await this._withRetries((db) => _deleteObject(db, key));
        delete this.localCache[key];
        return this.notifyServiceWorker(key);
      });
    }
    async _poll() {
      const result = await this._withRetries((db) => {
        const getAllRequest = getObjectStore(db, false).getAll();
        return new DBPromise(getAllRequest).toPromise();
      });
      if (!result) {
        return [];
      }
      if (this.pendingWrites !== 0) {
        return [];
      }
      const keys2 = [];
      const keysInResult = /* @__PURE__ */ new Set();
      for (const { fbase_key: key, value } of result) {
        keysInResult.add(key);
        if (JSON.stringify(this.localCache[key]) !== JSON.stringify(value)) {
          this.notifyListeners(key, value);
          keys2.push(key);
        }
      }
      for (const localKey of Object.keys(this.localCache)) {
        if (this.localCache[localKey] && !keysInResult.has(localKey)) {
          this.notifyListeners(localKey, null);
          keys2.push(localKey);
        }
      }
      return keys2;
    }
    notifyListeners(key, newValue) {
      this.localCache[key] = newValue;
      const listeners = this.listeners[key];
      if (listeners) {
        for (const listener of Array.from(listeners)) {
          listener(newValue);
        }
      }
    }
    startPolling() {
      this.stopPolling();
      this.pollTimer = setInterval(async () => this._poll(), _POLLING_INTERVAL_MS);
    }
    stopPolling() {
      if (this.pollTimer) {
        clearInterval(this.pollTimer);
        this.pollTimer = null;
      }
    }
    _addListener(key, listener) {
      if (Object.keys(this.listeners).length === 0) {
        this.startPolling();
      }
      if (!this.listeners[key]) {
        this.listeners[key] = /* @__PURE__ */ new Set();
        void this._get(key);
      }
      this.listeners[key].add(listener);
    }
    _removeListener(key, listener) {
      if (this.listeners[key]) {
        this.listeners[key].delete(listener);
        if (this.listeners[key].size === 0) {
          delete this.listeners[key];
        }
      }
      if (Object.keys(this.listeners).length === 0) {
        this.stopPolling();
      }
    }
  };
  IndexedDBLocalPersistence.type = "LOCAL";
  var indexedDBLocalPersistence = IndexedDBLocalPersistence;
  function startSignInPhoneMfa(auth2, request) {
    return _performApiRequest(auth2, "POST", "/v2/accounts/mfaSignIn:start", _addTidIfNecessary(auth2, request));
  }
  function finalizeSignInPhoneMfa(auth2, request) {
    return _performApiRequest(auth2, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth2, request));
  }
  function getScriptParentElement() {
    var _a, _b;
    return (_b = (_a = document.getElementsByTagName("head")) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : document;
  }
  function _loadJS(url2) {
    return new Promise((resolve, reject) => {
      const el = document.createElement("script");
      el.setAttribute("src", url2);
      el.onload = resolve;
      el.onerror = (e) => {
        const error = _createError("internal-error");
        error.customData = e;
        reject(error);
      };
      el.type = "text/javascript";
      el.charset = "UTF-8";
      getScriptParentElement().appendChild(el);
    });
  }
  function _generateCallbackName(prefix) {
    return `__${prefix}${Math.floor(Math.random() * 1e6)}`;
  }
  var _JSLOAD_CALLBACK = _generateCallbackName("rcb");
  var NETWORK_TIMEOUT_DELAY = new Delay(3e4, 6e4);
  var RECAPTCHA_VERIFIER_TYPE = "recaptcha";
  async function _verifyPhoneNumber(auth2, options, verifier) {
    var _a;
    const recaptchaToken = await verifier.verify();
    try {
      _assert(typeof recaptchaToken === "string", auth2, "argument-error");
      _assert(verifier.type === RECAPTCHA_VERIFIER_TYPE, auth2, "argument-error");
      let phoneInfoOptions;
      if (typeof options === "string") {
        phoneInfoOptions = {
          phoneNumber: options
        };
      } else {
        phoneInfoOptions = options;
      }
      if ("session" in phoneInfoOptions) {
        const session = phoneInfoOptions.session;
        if ("phoneNumber" in phoneInfoOptions) {
          _assert(session.type === "enroll", auth2, "internal-error");
          const response = await startEnrollPhoneMfa(auth2, {
            idToken: session.credential,
            phoneEnrollmentInfo: {
              phoneNumber: phoneInfoOptions.phoneNumber,
              recaptchaToken
            }
          });
          return response.phoneSessionInfo.sessionInfo;
        } else {
          _assert(session.type === "signin", auth2, "internal-error");
          const mfaEnrollmentId = ((_a = phoneInfoOptions.multiFactorHint) === null || _a === void 0 ? void 0 : _a.uid) || phoneInfoOptions.multiFactorUid;
          _assert(mfaEnrollmentId, auth2, "missing-multi-factor-info");
          const response = await startSignInPhoneMfa(auth2, {
            mfaPendingCredential: session.credential,
            mfaEnrollmentId,
            phoneSignInInfo: {
              recaptchaToken
            }
          });
          return response.phoneResponseInfo.sessionInfo;
        }
      } else {
        const { sessionInfo } = await sendPhoneVerificationCode(auth2, {
          phoneNumber: phoneInfoOptions.phoneNumber,
          recaptchaToken
        });
        return sessionInfo;
      }
    } finally {
      verifier._reset();
    }
  }
  var PhoneAuthProvider = class {
    constructor(auth2) {
      this.providerId = PhoneAuthProvider.PROVIDER_ID;
      this.auth = _castAuth(auth2);
    }
    verifyPhoneNumber(phoneOptions, applicationVerifier) {
      return _verifyPhoneNumber(this.auth, phoneOptions, getModularInstance(applicationVerifier));
    }
    static credential(verificationId, verificationCode) {
      return PhoneAuthCredential._fromVerification(verificationId, verificationCode);
    }
    static credentialFromResult(userCredential) {
      const credential = userCredential;
      return PhoneAuthProvider.credentialFromTaggedObject(credential);
    }
    static credentialFromError(error) {
      return PhoneAuthProvider.credentialFromTaggedObject(error.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
      if (!tokenResponse) {
        return null;
      }
      const { phoneNumber, temporaryProof } = tokenResponse;
      if (phoneNumber && temporaryProof) {
        return PhoneAuthCredential._fromTokenResponse(phoneNumber, temporaryProof);
      }
      return null;
    }
  };
  PhoneAuthProvider.PROVIDER_ID = "phone";
  PhoneAuthProvider.PHONE_SIGN_IN_METHOD = "phone";
  function _withDefaultResolver(auth2, resolverOverride) {
    if (resolverOverride) {
      return _getInstance(resolverOverride);
    }
    _assert(auth2._popupRedirectResolver, auth2, "argument-error");
    return auth2._popupRedirectResolver;
  }
  var IdpCredential = class extends AuthCredential {
    constructor(params) {
      super("custom", "custom");
      this.params = params;
    }
    _getIdTokenResponse(auth2) {
      return signInWithIdp(auth2, this._buildIdpRequest());
    }
    _linkToIdToken(auth2, idToken) {
      return signInWithIdp(auth2, this._buildIdpRequest(idToken));
    }
    _getReauthenticationResolver(auth2) {
      return signInWithIdp(auth2, this._buildIdpRequest());
    }
    _buildIdpRequest(idToken) {
      const request = {
        requestUri: this.params.requestUri,
        sessionId: this.params.sessionId,
        postBody: this.params.postBody,
        tenantId: this.params.tenantId,
        pendingToken: this.params.pendingToken,
        returnSecureToken: true,
        returnIdpCredential: true
      };
      if (idToken) {
        request.idToken = idToken;
      }
      return request;
    }
  };
  function _signIn(params) {
    return _signInWithCredential(params.auth, new IdpCredential(params), params.bypassAuthState);
  }
  function _reauth(params) {
    const { auth: auth2, user: user2 } = params;
    _assert(user2, auth2, "internal-error");
    return _reauthenticate(user2, new IdpCredential(params), params.bypassAuthState);
  }
  async function _link(params) {
    const { auth: auth2, user: user2 } = params;
    _assert(user2, auth2, "internal-error");
    return _link$1(user2, new IdpCredential(params), params.bypassAuthState);
  }
  var AbstractPopupRedirectOperation = class {
    constructor(auth2, filter, resolver, user2, bypassAuthState = false) {
      this.auth = auth2;
      this.resolver = resolver;
      this.user = user2;
      this.bypassAuthState = bypassAuthState;
      this.pendingPromise = null;
      this.eventManager = null;
      this.filter = Array.isArray(filter) ? filter : [filter];
    }
    execute() {
      return new Promise(async (resolve, reject) => {
        this.pendingPromise = { resolve, reject };
        try {
          this.eventManager = await this.resolver._initialize(this.auth);
          await this.onExecution();
          this.eventManager.registerConsumer(this);
        } catch (e) {
          this.reject(e);
        }
      });
    }
    async onAuthEvent(event) {
      const { urlResponse, sessionId, postBody, tenantId, error, type } = event;
      if (error) {
        this.reject(error);
        return;
      }
      const params = {
        auth: this.auth,
        requestUri: urlResponse,
        sessionId,
        tenantId: tenantId || void 0,
        postBody: postBody || void 0,
        user: this.user,
        bypassAuthState: this.bypassAuthState
      };
      try {
        this.resolve(await this.getIdpTask(type)(params));
      } catch (e) {
        this.reject(e);
      }
    }
    onError(error) {
      this.reject(error);
    }
    getIdpTask(type) {
      switch (type) {
        case "signInViaPopup":
        case "signInViaRedirect":
          return _signIn;
        case "linkViaPopup":
        case "linkViaRedirect":
          return _link;
        case "reauthViaPopup":
        case "reauthViaRedirect":
          return _reauth;
        default:
          _fail(this.auth, "internal-error");
      }
    }
    resolve(cred) {
      debugAssert(this.pendingPromise, "Pending promise was never set");
      this.pendingPromise.resolve(cred);
      this.unregisterAndCleanUp();
    }
    reject(error) {
      debugAssert(this.pendingPromise, "Pending promise was never set");
      this.pendingPromise.reject(error);
      this.unregisterAndCleanUp();
    }
    unregisterAndCleanUp() {
      if (this.eventManager) {
        this.eventManager.unregisterConsumer(this);
      }
      this.pendingPromise = null;
      this.cleanUp();
    }
  };
  var _POLL_WINDOW_CLOSE_TIMEOUT = new Delay(2e3, 1e4);
  async function signInWithPopup(auth2, provider, resolver) {
    const authInternal = _castAuth(auth2);
    _assertInstanceOf(auth2, provider, FederatedAuthProvider);
    const resolverInternal = _withDefaultResolver(authInternal, resolver);
    const action = new PopupOperation(authInternal, "signInViaPopup", provider, resolverInternal);
    return action.executeNotNull();
  }
  var PopupOperation = class extends AbstractPopupRedirectOperation {
    constructor(auth2, filter, provider, resolver, user2) {
      super(auth2, filter, resolver, user2);
      this.provider = provider;
      this.authWindow = null;
      this.pollId = null;
      if (PopupOperation.currentPopupAction) {
        PopupOperation.currentPopupAction.cancel();
      }
      PopupOperation.currentPopupAction = this;
    }
    async executeNotNull() {
      const result = await this.execute();
      _assert(result, this.auth, "internal-error");
      return result;
    }
    async onExecution() {
      debugAssert(this.filter.length === 1, "Popup operations only handle one event");
      const eventId = _generateEventId();
      this.authWindow = await this.resolver._openPopup(
        this.auth,
        this.provider,
        this.filter[0],
        eventId
      );
      this.authWindow.associatedEvent = eventId;
      this.resolver._originValidation(this.auth).catch((e) => {
        this.reject(e);
      });
      this.resolver._isIframeWebStorageSupported(this.auth, (isSupported) => {
        if (!isSupported) {
          this.reject(_createError(this.auth, "web-storage-unsupported"));
        }
      });
      this.pollUserCancellation();
    }
    get eventId() {
      var _a;
      return ((_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.associatedEvent) || null;
    }
    cancel() {
      this.reject(_createError(this.auth, "cancelled-popup-request"));
    }
    cleanUp() {
      if (this.authWindow) {
        this.authWindow.close();
      }
      if (this.pollId) {
        window.clearTimeout(this.pollId);
      }
      this.authWindow = null;
      this.pollId = null;
      PopupOperation.currentPopupAction = null;
    }
    pollUserCancellation() {
      const poll = () => {
        var _a, _b;
        if ((_b = (_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.closed) {
          this.pollId = window.setTimeout(() => {
            this.pollId = null;
            this.reject(_createError(this.auth, "popup-closed-by-user"));
          }, 2e3);
          return;
        }
        this.pollId = window.setTimeout(poll, _POLL_WINDOW_CLOSE_TIMEOUT.get());
      };
      poll();
    }
  };
  PopupOperation.currentPopupAction = null;
  var PENDING_REDIRECT_KEY = "pendingRedirect";
  var redirectOutcomeMap = /* @__PURE__ */ new Map();
  var RedirectAction = class extends AbstractPopupRedirectOperation {
    constructor(auth2, resolver, bypassAuthState = false) {
      super(auth2, [
        "signInViaRedirect",
        "linkViaRedirect",
        "reauthViaRedirect",
        "unknown"
      ], resolver, void 0, bypassAuthState);
      this.eventId = null;
    }
    async execute() {
      let readyOutcome = redirectOutcomeMap.get(this.auth._key());
      if (!readyOutcome) {
        try {
          const hasPendingRedirect = await _getAndClearPendingRedirectStatus(this.resolver, this.auth);
          const result = hasPendingRedirect ? await super.execute() : null;
          readyOutcome = () => Promise.resolve(result);
        } catch (e) {
          readyOutcome = () => Promise.reject(e);
        }
        redirectOutcomeMap.set(this.auth._key(), readyOutcome);
      }
      if (!this.bypassAuthState) {
        redirectOutcomeMap.set(this.auth._key(), () => Promise.resolve(null));
      }
      return readyOutcome();
    }
    async onAuthEvent(event) {
      if (event.type === "signInViaRedirect") {
        return super.onAuthEvent(event);
      } else if (event.type === "unknown") {
        this.resolve(null);
        return;
      }
      if (event.eventId) {
        const user2 = await this.auth._redirectUserForId(event.eventId);
        if (user2) {
          this.user = user2;
          return super.onAuthEvent(event);
        } else {
          this.resolve(null);
        }
      }
    }
    async onExecution() {
    }
    cleanUp() {
    }
  };
  async function _getAndClearPendingRedirectStatus(resolver, auth2) {
    const key = pendingRedirectKey(auth2);
    const persistence = resolverPersistence(resolver);
    if (!await persistence._isAvailable()) {
      return false;
    }
    const hasPendingRedirect = await persistence._get(key) === "true";
    await persistence._remove(key);
    return hasPendingRedirect;
  }
  function _overrideRedirectResult(auth2, result) {
    redirectOutcomeMap.set(auth2._key(), result);
  }
  function resolverPersistence(resolver) {
    return _getInstance(resolver._redirectPersistence);
  }
  function pendingRedirectKey(auth2) {
    return _persistenceKeyName(PENDING_REDIRECT_KEY, auth2.config.apiKey, auth2.name);
  }
  async function _getRedirectResult(auth2, resolverExtern, bypassAuthState = false) {
    const authInternal = _castAuth(auth2);
    const resolver = _withDefaultResolver(authInternal, resolverExtern);
    const action = new RedirectAction(authInternal, resolver, bypassAuthState);
    const result = await action.execute();
    if (result && !bypassAuthState) {
      delete result.user._redirectEventId;
      await authInternal._persistUserIfCurrent(result.user);
      await authInternal._setRedirectUser(null, resolverExtern);
    }
    return result;
  }
  var EVENT_DUPLICATION_CACHE_DURATION_MS = 10 * 60 * 1e3;
  var AuthEventManager = class {
    constructor(auth2) {
      this.auth = auth2;
      this.cachedEventUids = /* @__PURE__ */ new Set();
      this.consumers = /* @__PURE__ */ new Set();
      this.queuedRedirectEvent = null;
      this.hasHandledPotentialRedirect = false;
      this.lastProcessedEventTime = Date.now();
    }
    registerConsumer(authEventConsumer) {
      this.consumers.add(authEventConsumer);
      if (this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, authEventConsumer)) {
        this.sendToConsumer(this.queuedRedirectEvent, authEventConsumer);
        this.saveEventToCache(this.queuedRedirectEvent);
        this.queuedRedirectEvent = null;
      }
    }
    unregisterConsumer(authEventConsumer) {
      this.consumers.delete(authEventConsumer);
    }
    onEvent(event) {
      if (this.hasEventBeenHandled(event)) {
        return false;
      }
      let handled = false;
      this.consumers.forEach((consumer) => {
        if (this.isEventForConsumer(event, consumer)) {
          handled = true;
          this.sendToConsumer(event, consumer);
          this.saveEventToCache(event);
        }
      });
      if (this.hasHandledPotentialRedirect || !isRedirectEvent(event)) {
        return handled;
      }
      this.hasHandledPotentialRedirect = true;
      if (!handled) {
        this.queuedRedirectEvent = event;
        handled = true;
      }
      return handled;
    }
    sendToConsumer(event, consumer) {
      var _a;
      if (event.error && !isNullRedirectEvent(event)) {
        const code = ((_a = event.error.code) === null || _a === void 0 ? void 0 : _a.split("auth/")[1]) || "internal-error";
        consumer.onError(_createError(this.auth, code));
      } else {
        consumer.onAuthEvent(event);
      }
    }
    isEventForConsumer(event, consumer) {
      const eventIdMatches = consumer.eventId === null || !!event.eventId && event.eventId === consumer.eventId;
      return consumer.filter.includes(event.type) && eventIdMatches;
    }
    hasEventBeenHandled(event) {
      if (Date.now() - this.lastProcessedEventTime >= EVENT_DUPLICATION_CACHE_DURATION_MS) {
        this.cachedEventUids.clear();
      }
      return this.cachedEventUids.has(eventUid(event));
    }
    saveEventToCache(event) {
      this.cachedEventUids.add(eventUid(event));
      this.lastProcessedEventTime = Date.now();
    }
  };
  function eventUid(e) {
    return [e.type, e.eventId, e.sessionId, e.tenantId].filter((v) => v).join("-");
  }
  function isNullRedirectEvent({ type, error }) {
    return type === "unknown" && (error === null || error === void 0 ? void 0 : error.code) === `auth/${"no-auth-event"}`;
  }
  function isRedirectEvent(event) {
    switch (event.type) {
      case "signInViaRedirect":
      case "linkViaRedirect":
      case "reauthViaRedirect":
        return true;
      case "unknown":
        return isNullRedirectEvent(event);
      default:
        return false;
    }
  }
  async function _getProjectConfig(auth2, request = {}) {
    return _performApiRequest(auth2, "GET", "/v1/projects", request);
  }
  var IP_ADDRESS_REGEX = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
  var HTTP_REGEX = /^https?/;
  async function _validateOrigin(auth2) {
    if (auth2.config.emulator) {
      return;
    }
    const { authorizedDomains } = await _getProjectConfig(auth2);
    for (const domain of authorizedDomains) {
      try {
        if (matchDomain(domain)) {
          return;
        }
      } catch (_a) {
      }
    }
    _fail(auth2, "unauthorized-domain");
  }
  function matchDomain(expected) {
    const currentUrl = _getCurrentUrl();
    const { protocol, hostname } = new URL(currentUrl);
    if (expected.startsWith("chrome-extension://")) {
      const ceUrl = new URL(expected);
      if (ceUrl.hostname === "" && hostname === "") {
        return protocol === "chrome-extension:" && expected.replace("chrome-extension://", "") === currentUrl.replace("chrome-extension://", "");
      }
      return protocol === "chrome-extension:" && ceUrl.hostname === hostname;
    }
    if (!HTTP_REGEX.test(protocol)) {
      return false;
    }
    if (IP_ADDRESS_REGEX.test(expected)) {
      return hostname === expected;
    }
    const escapedDomainPattern = expected.replace(/\./g, "\\.");
    const re = new RegExp("^(.+\\." + escapedDomainPattern + "|" + escapedDomainPattern + ")$", "i");
    return re.test(hostname);
  }
  var NETWORK_TIMEOUT = new Delay(3e4, 6e4);
  function resetUnloadedGapiModules() {
    const beacon = _window().___jsl;
    if (beacon === null || beacon === void 0 ? void 0 : beacon.H) {
      for (const hint of Object.keys(beacon.H)) {
        beacon.H[hint].r = beacon.H[hint].r || [];
        beacon.H[hint].L = beacon.H[hint].L || [];
        beacon.H[hint].r = [...beacon.H[hint].L];
        if (beacon.CP) {
          for (let i = 0; i < beacon.CP.length; i++) {
            beacon.CP[i] = null;
          }
        }
      }
    }
  }
  function loadGapi(auth2) {
    return new Promise((resolve, reject) => {
      var _a, _b, _c;
      function loadGapiIframe() {
        resetUnloadedGapiModules();
        gapi.load("gapi.iframes", {
          callback: () => {
            resolve(gapi.iframes.getContext());
          },
          ontimeout: () => {
            resetUnloadedGapiModules();
            reject(_createError(auth2, "network-request-failed"));
          },
          timeout: NETWORK_TIMEOUT.get()
        });
      }
      if ((_b = (_a = _window().gapi) === null || _a === void 0 ? void 0 : _a.iframes) === null || _b === void 0 ? void 0 : _b.Iframe) {
        resolve(gapi.iframes.getContext());
      } else if (!!((_c = _window().gapi) === null || _c === void 0 ? void 0 : _c.load)) {
        loadGapiIframe();
      } else {
        const cbName = _generateCallbackName("iframefcb");
        _window()[cbName] = () => {
          if (!!gapi.load) {
            loadGapiIframe();
          } else {
            reject(_createError(auth2, "network-request-failed"));
          }
        };
        return _loadJS(`https://apis.google.com/js/api.js?onload=${cbName}`).catch((e) => reject(e));
      }
    }).catch((error) => {
      cachedGApiLoader = null;
      throw error;
    });
  }
  var cachedGApiLoader = null;
  function _loadGapi(auth2) {
    cachedGApiLoader = cachedGApiLoader || loadGapi(auth2);
    return cachedGApiLoader;
  }
  var PING_TIMEOUT = new Delay(5e3, 15e3);
  var IFRAME_PATH = "__/auth/iframe";
  var EMULATED_IFRAME_PATH = "emulator/auth/iframe";
  var IFRAME_ATTRIBUTES = {
    style: {
      position: "absolute",
      top: "-100px",
      width: "1px",
      height: "1px"
    },
    "aria-hidden": "true",
    tabindex: "-1"
  };
  var EID_FROM_APIHOST = /* @__PURE__ */ new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  ]);
  function getIframeUrl(auth2) {
    const config = auth2.config;
    _assert(config.authDomain, auth2, "auth-domain-config-required");
    const url2 = config.emulator ? _emulatorUrl(config, EMULATED_IFRAME_PATH) : `https://${auth2.config.authDomain}/${IFRAME_PATH}`;
    const params = {
      apiKey: config.apiKey,
      appName: auth2.name,
      v: SDK_VERSION
    };
    const eid = EID_FROM_APIHOST.get(auth2.config.apiHost);
    if (eid) {
      params.eid = eid;
    }
    const frameworks = auth2._getFrameworks();
    if (frameworks.length) {
      params.fw = frameworks.join(",");
    }
    return `${url2}?${querystring(params).slice(1)}`;
  }
  async function _openIframe(auth2) {
    const context = await _loadGapi(auth2);
    const gapi2 = _window().gapi;
    _assert(gapi2, auth2, "internal-error");
    return context.open({
      where: document.body,
      url: getIframeUrl(auth2),
      messageHandlersFilter: gapi2.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
      attributes: IFRAME_ATTRIBUTES,
      dontclear: true
    }, (iframe) => new Promise(async (resolve, reject) => {
      await iframe.restyle({
        setHideOnLeave: false
      });
      const networkError = _createError(auth2, "network-request-failed");
      const networkErrorTimer = _window().setTimeout(() => {
        reject(networkError);
      }, PING_TIMEOUT.get());
      function clearTimerAndResolve() {
        _window().clearTimeout(networkErrorTimer);
        resolve(iframe);
      }
      iframe.ping(clearTimerAndResolve).then(clearTimerAndResolve, () => {
        reject(networkError);
      });
    }));
  }
  var BASE_POPUP_OPTIONS = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no"
  };
  var DEFAULT_WIDTH = 500;
  var DEFAULT_HEIGHT = 600;
  var TARGET_BLANK = "_blank";
  var FIREFOX_EMPTY_URL = "http://localhost";
  var AuthPopup = class {
    constructor(window2) {
      this.window = window2;
      this.associatedEvent = null;
    }
    close() {
      if (this.window) {
        try {
          this.window.close();
        } catch (e) {
        }
      }
    }
  };
  function _open(auth2, url2, name4, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
    const top = Math.max((window.screen.availHeight - height) / 2, 0).toString();
    const left = Math.max((window.screen.availWidth - width) / 2, 0).toString();
    let target = "";
    const options = Object.assign(Object.assign({}, BASE_POPUP_OPTIONS), {
      width: width.toString(),
      height: height.toString(),
      top,
      left
    });
    const ua = getUA().toLowerCase();
    if (name4) {
      target = _isChromeIOS(ua) ? TARGET_BLANK : name4;
    }
    if (_isFirefox(ua)) {
      url2 = url2 || FIREFOX_EMPTY_URL;
      options.scrollbars = "yes";
    }
    const optionsString = Object.entries(options).reduce((accum, [key, value]) => `${accum}${key}=${value},`, "");
    if (_isIOSStandalone(ua) && target !== "_self") {
      openAsNewWindowIOS(url2 || "", target);
      return new AuthPopup(null);
    }
    const newWin = window.open(url2 || "", target, optionsString);
    _assert(newWin, auth2, "popup-blocked");
    try {
      newWin.focus();
    } catch (e) {
    }
    return new AuthPopup(newWin);
  }
  function openAsNewWindowIOS(url2, target) {
    const el = document.createElement("a");
    el.href = url2;
    el.target = target;
    const click = document.createEvent("MouseEvent");
    click.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
    el.dispatchEvent(click);
  }
  var WIDGET_PATH = "__/auth/handler";
  var EMULATOR_WIDGET_PATH = "emulator/auth/handler";
  function _getRedirectUrl(auth2, provider, authType, redirectUrl, eventId, additionalParams) {
    _assert(auth2.config.authDomain, auth2, "auth-domain-config-required");
    _assert(auth2.config.apiKey, auth2, "invalid-api-key");
    const params = {
      apiKey: auth2.config.apiKey,
      appName: auth2.name,
      authType,
      redirectUrl,
      v: SDK_VERSION,
      eventId
    };
    if (provider instanceof FederatedAuthProvider) {
      provider.setDefaultLanguage(auth2.languageCode);
      params.providerId = provider.providerId || "";
      if (!isEmpty(provider.getCustomParameters())) {
        params.customParameters = JSON.stringify(provider.getCustomParameters());
      }
      for (const [key, value] of Object.entries(additionalParams || {})) {
        params[key] = value;
      }
    }
    if (provider instanceof BaseOAuthProvider) {
      const scopes = provider.getScopes().filter((scope) => scope !== "");
      if (scopes.length > 0) {
        params.scopes = scopes.join(",");
      }
    }
    if (auth2.tenantId) {
      params.tid = auth2.tenantId;
    }
    const paramsDict = params;
    for (const key of Object.keys(paramsDict)) {
      if (paramsDict[key] === void 0) {
        delete paramsDict[key];
      }
    }
    return `${getHandlerBase(auth2)}?${querystring(paramsDict).slice(1)}`;
  }
  function getHandlerBase({ config }) {
    if (!config.emulator) {
      return `https://${config.authDomain}/${WIDGET_PATH}`;
    }
    return _emulatorUrl(config, EMULATOR_WIDGET_PATH);
  }
  var WEB_STORAGE_SUPPORT_KEY = "webStorageSupport";
  var BrowserPopupRedirectResolver = class {
    constructor() {
      this.eventManagers = {};
      this.iframes = {};
      this.originValidationPromises = {};
      this._redirectPersistence = browserSessionPersistence;
      this._completeRedirectFn = _getRedirectResult;
      this._overrideRedirectResult = _overrideRedirectResult;
    }
    async _openPopup(auth2, provider, authType, eventId) {
      var _a;
      debugAssert((_a = this.eventManagers[auth2._key()]) === null || _a === void 0 ? void 0 : _a.manager, "_initialize() not called before _openPopup()");
      const url2 = _getRedirectUrl(auth2, provider, authType, _getCurrentUrl(), eventId);
      return _open(auth2, url2, _generateEventId());
    }
    async _openRedirect(auth2, provider, authType, eventId) {
      await this._originValidation(auth2);
      _setWindowLocation(_getRedirectUrl(auth2, provider, authType, _getCurrentUrl(), eventId));
      return new Promise(() => {
      });
    }
    _initialize(auth2) {
      const key = auth2._key();
      if (this.eventManagers[key]) {
        const { manager, promise: promise2 } = this.eventManagers[key];
        if (manager) {
          return Promise.resolve(manager);
        } else {
          debugAssert(promise2, "If manager is not set, promise should be");
          return promise2;
        }
      }
      const promise = this.initAndGetManager(auth2);
      this.eventManagers[key] = { promise };
      promise.catch(() => {
        delete this.eventManagers[key];
      });
      return promise;
    }
    async initAndGetManager(auth2) {
      const iframe = await _openIframe(auth2);
      const manager = new AuthEventManager(auth2);
      iframe.register("authEvent", (iframeEvent) => {
        _assert(iframeEvent === null || iframeEvent === void 0 ? void 0 : iframeEvent.authEvent, auth2, "invalid-auth-event");
        const handled = manager.onEvent(iframeEvent.authEvent);
        return { status: handled ? "ACK" : "ERROR" };
      }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
      this.eventManagers[auth2._key()] = { manager };
      this.iframes[auth2._key()] = iframe;
      return manager;
    }
    _isIframeWebStorageSupported(auth2, cb) {
      const iframe = this.iframes[auth2._key()];
      iframe.send(WEB_STORAGE_SUPPORT_KEY, { type: WEB_STORAGE_SUPPORT_KEY }, (result) => {
        var _a;
        const isSupported = (_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a[WEB_STORAGE_SUPPORT_KEY];
        if (isSupported !== void 0) {
          cb(!!isSupported);
        }
        _fail(auth2, "internal-error");
      }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
    }
    _originValidation(auth2) {
      const key = auth2._key();
      if (!this.originValidationPromises[key]) {
        this.originValidationPromises[key] = _validateOrigin(auth2);
      }
      return this.originValidationPromises[key];
    }
    get _shouldInitProactively() {
      return _isMobileBrowser() || _isSafari() || _isIOS();
    }
  };
  var browserPopupRedirectResolver = BrowserPopupRedirectResolver;
  var MultiFactorAssertionImpl = class {
    constructor(factorId) {
      this.factorId = factorId;
    }
    _process(auth2, session, displayName) {
      switch (session.type) {
        case "enroll":
          return this._finalizeEnroll(auth2, session.credential, displayName);
        case "signin":
          return this._finalizeSignIn(auth2, session.credential);
        default:
          return debugFail("unexpected MultiFactorSessionType");
      }
    }
  };
  var PhoneMultiFactorAssertionImpl = class extends MultiFactorAssertionImpl {
    constructor(credential) {
      super("phone");
      this.credential = credential;
    }
    static _fromCredential(credential) {
      return new PhoneMultiFactorAssertionImpl(credential);
    }
    _finalizeEnroll(auth2, idToken, displayName) {
      return finalizeEnrollPhoneMfa(auth2, {
        idToken,
        displayName,
        phoneVerificationInfo: this.credential._makeVerificationRequest()
      });
    }
    _finalizeSignIn(auth2, mfaPendingCredential) {
      return finalizeSignInPhoneMfa(auth2, {
        mfaPendingCredential,
        phoneVerificationInfo: this.credential._makeVerificationRequest()
      });
    }
  };
  var PhoneMultiFactorGenerator = class {
    constructor() {
    }
    static assertion(credential) {
      return PhoneMultiFactorAssertionImpl._fromCredential(credential);
    }
  };
  PhoneMultiFactorGenerator.FACTOR_ID = "phone";
  var name3 = "@firebase/auth";
  var version3 = "0.20.5";
  var AuthInterop = class {
    constructor(auth2) {
      this.auth = auth2;
      this.internalListeners = /* @__PURE__ */ new Map();
    }
    getUid() {
      var _a;
      this.assertAuthConfigured();
      return ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid) || null;
    }
    async getToken(forceRefresh) {
      this.assertAuthConfigured();
      await this.auth._initializationPromise;
      if (!this.auth.currentUser) {
        return null;
      }
      const accessToken = await this.auth.currentUser.getIdToken(forceRefresh);
      return { accessToken };
    }
    addAuthTokenListener(listener) {
      this.assertAuthConfigured();
      if (this.internalListeners.has(listener)) {
        return;
      }
      const unsubscribe = this.auth.onIdTokenChanged((user2) => {
        var _a;
        listener(((_a = user2) === null || _a === void 0 ? void 0 : _a.stsTokenManager.accessToken) || null);
      });
      this.internalListeners.set(listener, unsubscribe);
      this.updateProactiveRefresh();
    }
    removeAuthTokenListener(listener) {
      this.assertAuthConfigured();
      const unsubscribe = this.internalListeners.get(listener);
      if (!unsubscribe) {
        return;
      }
      this.internalListeners.delete(listener);
      unsubscribe();
      this.updateProactiveRefresh();
    }
    assertAuthConfigured() {
      _assert(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth");
    }
    updateProactiveRefresh() {
      if (this.internalListeners.size > 0) {
        this.auth._startProactiveRefresh();
      } else {
        this.auth._stopProactiveRefresh();
      }
    }
  };
  function getVersionForPlatform(clientPlatform) {
    switch (clientPlatform) {
      case "Node":
        return "node";
      case "ReactNative":
        return "rn";
      case "Worker":
        return "webworker";
      case "Cordova":
        return "cordova";
      default:
        return void 0;
    }
  }
  function registerAuth(clientPlatform) {
    _registerComponent(new Component("auth", (container, { options: deps }) => {
      const app2 = container.getProvider("app").getImmediate();
      const heartbeatServiceProvider = container.getProvider("heartbeat");
      const { apiKey, authDomain } = app2.options;
      return ((app3, heartbeatServiceProvider2) => {
        _assert(apiKey && !apiKey.includes(":"), "invalid-api-key", { appName: app3.name });
        _assert(!(authDomain === null || authDomain === void 0 ? void 0 : authDomain.includes(":")), "argument-error", {
          appName: app3.name
        });
        const config = {
          apiKey,
          authDomain,
          clientPlatform,
          apiHost: "identitytoolkit.googleapis.com",
          tokenApiHost: "securetoken.googleapis.com",
          apiScheme: "https",
          sdkClientVersion: _getClientVersion(clientPlatform)
        };
        const authInstance = new AuthImpl(app3, heartbeatServiceProvider2, config);
        _initializeAuthInstance(authInstance, deps);
        return authInstance;
      })(app2, heartbeatServiceProvider);
    }, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((container, _instanceIdentifier, _instance) => {
      const authInternalProvider = container.getProvider("auth-internal");
      authInternalProvider.initialize();
    }));
    _registerComponent(new Component("auth-internal", (container) => {
      const auth2 = _castAuth(container.getProvider("auth").getImmediate());
      return ((auth3) => new AuthInterop(auth3))(auth2);
    }, "PRIVATE").setInstantiationMode("EXPLICIT"));
    registerVersion(name3, version3, getVersionForPlatform(clientPlatform));
    registerVersion(name3, version3, "esm2017");
  }
  function getAuth(app2 = getApp()) {
    const provider = _getProvider(app2, "auth");
    if (provider.isInitialized()) {
      return provider.getImmediate();
    }
    return initializeAuth(app2, {
      popupRedirectResolver: browserPopupRedirectResolver,
      persistence: [
        indexedDBLocalPersistence,
        browserLocalPersistence,
        browserSessionPersistence
      ]
    });
  }
  registerAuth("Browser");

  // src/scripts/common/vars.ts
  var url = "https://api.cubingapp.com:3001";
  var firebaseConfig = {
    apiKey: "AIzaSyCnwuoBqAR6cx7uqzxf7iEC99sZf36sZZA",
    authDomain: "virtual-cube.firebaseapp.com",
    projectId: "virtual-cube",
    storageBucket: "virtual-cube.appspot.com",
    messagingSenderId: "371073332227",
    appId: "1:371073332227:web:c96d3137080aecfe634a36",
    measurementId: "G-YR33BDCQDY"
  };
  var app = initializeApp(firebaseConfig);
  var authSingleton;
  var auth = () => {
    if (authSingleton)
      return authSingleton;
    authSingleton = getAuth(app);
    connectAuthEmulator(authSingleton, "http://localhost:9099");
    return authSingleton;
  };

  // src/scripts/api.ts
  async function getTrainingAlgs(uid, set) {
    return fetch(`${url}/getTrainingAlgs`, {
      method: "POST",
      body: JSON.stringify({
        Uid: uid,
        Set: set
      })
    }).then((res) => res.json());
  }
  async function writeTrainingAlgs(uid, set, trainingAlgs) {
    return fetch(`${url}/writeTrainingAlgs`, {
      method: "POST",
      body: JSON.stringify({
        Uid: uid,
        Set: set,
        TrainingAlgs: trainingAlgs
      })
    }).then((res) => res.json());
  }

  // src/scripts/store.ts
  var algSet = "algSet";
  var keyboard = "keyboard";
  var orientation = "orientation";
  var user = "user";
  function getAlgSet() {
    var _a;
    return (_a = localStorage.getItem(algSet)) != null ? _a : "";
  }
  function setAlgSet(value) {
    localStorage.setItem(algSet, value);
  }
  function getKeyboard() {
    var _a;
    return (_a = getBool(keyboard)) != null ? _a : false;
  }
  function setKeyboard(value) {
    setBool(keyboard, value);
  }
  function getOrientation() {
    var _a;
    return (_a = localStorage.getItem(orientation)) != null ? _a : "";
  }
  function setOrientation(value) {
    localStorage.setItem(orientation, value);
  }
  function getUser() {
    return localStorage.getItem(user);
  }
  function removeUser() {
    localStorage.removeItem(user);
  }
  function setUser(value) {
    localStorage.setItem(user, value);
  }
  function getBool(key) {
    const value = localStorage.getItem(key);
    if (value === null)
      return null;
    return value == "1";
  }
  function setBool(key, value) {
    localStorage.setItem(key, value ? "1" : "0");
  }

  // src/scripts/common/element.ts
  function querySelector(selector, args) {
    const ele = document.querySelector(selector);
    return setOptions(ele, args);
  }
  function createElement(tag, args) {
    const ele = document.createElement(tag);
    return setOptions(ele, args);
  }
  function setOptions(ele, args) {
    for (const key in args) {
      if (key === "children") {
        args.children.forEach((child) => {
          if (!child)
            return;
          ele.appendChild(child);
        });
      } else {
        ele[key] = args[key];
      }
    }
    return ele;
  }

  // src/scripts/auth.ts
  var CubingAppUser = class {
    constructor() {
    }
    toJsonString() {
      return JSON.stringify({
        email: this.email,
        uid: this.uid
      });
    }
    fromJsonString(s) {
      const json = JSON.parse(s);
      this.email = json.email;
      this.uid = json.uid;
    }
  };
  function renderEmailInput() {
    return createElement("input", { type: "email", placeholder: "Email" });
  }
  function renderPasswordInput() {
    return createElement("input", { type: "password", placeholder: "Password" });
  }
  function renderCreateAccountButton(emailInput, passwordInput, callback) {
    return createElement("button", {
      className: "btn-primary",
      innerHTML: "Create Account",
      onclick: () => {
        _createUserWithEmailAndPassword(emailInput.value, passwordInput.value, callback);
      }
    });
  }
  function renderSignInButton(emailInput, passwordInput, callback) {
    return createElement("button", {
      className: "btn-primary",
      innerHTML: "Sign In",
      onclick: () => {
        _signInWithEmailAndPassword(emailInput.value, passwordInput.value, callback);
      }
    });
  }
  function renderGoogleSignInButton(callback) {
    return createElement("button", {
      className: "p-2 bg-white rounded-md shadow-lg border-solid border-gray-400 hover:cursor-pointer hover:bg-gray-200",
      innerHTML: `
        <div class="row">
            <svg style="width: 20px; height: 20px; margin-right: 0.6rem;" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"></path><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"></path><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"></path><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"></path><path fill="none" d="M2 2h44v44H2z"></path></svg>
            <p style="font-size: 1rem;">Sign in with Google</p>
        </div>
        `,
      onclick: () => {
        _signInWithPopup(callback);
      }
    });
  }
  function initialAuthCheck() {
    const userJsonString = getUser();
    if (userJsonString) {
      const user2 = new CubingAppUser();
      user2.fromJsonString(userJsonString);
      return user2;
    }
    return null;
  }
  function successfulSignIn(userCredential, callback) {
    const user2 = new CubingAppUser();
    user2.email = userCredential.user.email;
    fetch(`${url}/user`, {
      method: "POST",
      body: JSON.stringify({ Email: user2.email })
    }).then((res) => res.json()).then((data) => {
      user2.uid = data.Uid;
      setUser(user2.toJsonString());
      callback(user2);
    });
  }
  function _signInWithPopup(callback) {
    const auth2 = auth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth2, provider).then((userCredential) => {
      successfulSignIn(userCredential, callback);
    }).catch((error) => {
      console.log(error);
    });
  }
  function _createUserWithEmailAndPassword(email, password, callback) {
    const auth2 = auth();
    createUserWithEmailAndPassword(auth2, email, password).then((userCredential) => {
      successfulSignIn(userCredential, callback);
    }).catch((error) => {
      console.log(error.message);
    });
  }
  function _signInWithEmailAndPassword(email, password, callback) {
    const auth2 = auth();
    signInWithEmailAndPassword(auth2, email, password).then((userCredential) => {
      successfulSignIn(userCredential, callback);
    }).catch((error) => {
      console.log(error.message);
    });
  }
  function signOut2() {
    const auth2 = auth();
    auth2.signOut();
    removeUser();
  }

  // src/scripts/colors.ts
  var WHITE = [1, 1, 1, 1];
  var GRAY = [0.5, 0.5, 0.5, 1];
  var YELLOW = [1, 1, 0, 1];
  var GREEN = [0, 1, 0, 1];
  var BLUE = [0, 0, 1, 1];
  var ORANGE = [1, 0.5, 0, 1];
  var RED = [1, 0, 0, 1];
  var BLACK = [0, 0, 0, 1];
  var colors = [WHITE, GREEN, YELLOW, BLUE, ORANGE, RED];
  function faceToColor(face) {
    if (face < 0 || face >= colors.length)
      console.error("Invalid face: " + face);
    return colors[face];
  }

  // src/scripts/common/util.ts
  function stickerToFace(sticker, cube) {
    return Math.floor(sticker / sq(cube.layers));
  }

  // src/scripts/common/rand.ts
  function randInt(int) {
    return Math.floor(Math.random() * int);
  }

  // src/scripts/util.ts
  function shuffle(array) {
    let i = array.length;
    while (i != 0) {
      let r = randInt(i);
      i--;
      let temp = array[r];
      array[r] = array[i];
      array[i] = temp;
    }
    return array;
  }
  function series(n) {
    if (n <= 0) {
      return 2;
    }
    return series(n - 1) + n + 2;
  }
  function promoteAlg(algs) {
    algs[0].Score++;
    let position = series(algs[0].Score);
    const threeFourths = Math.ceil(algs.length * 3 / 4);
    if (position > threeFourths) {
      position = threeFourths + randInt(algs.length - threeFourths);
    }
    move(algs, position);
  }
  function demoteAlg(algs) {
    algs[0].Score = 0;
    move(algs, series(0));
  }
  function move(arr, n) {
    const temp = arr[0];
    for (let i = 0; i < n; i++) {
      arr[i] = arr[i + 1];
    }
    arr[n] = temp;
  }

  // src/scripts/scramble.ts
  var U = 0;
  var F = 1;
  var D = 2;
  var B = 3;
  var L = 4;
  var R = 5;
  var corners = [
    [U, B, L],
    [U, R, B],
    [U, L, F],
    [U, F, R],
    [D, F, L],
    [D, R, F],
    [D, L, B],
    [D, B, R]
  ];
  var edges = [
    [U, B],
    [U, L],
    [U, R],
    [U, F],
    [F, L],
    [F, R],
    [D, F],
    [D, L],
    [D, R],
    [D, B],
    [B, L],
    [B, R]
  ];
  function scramble3x3(cube) {
    let eo = orientation2(12, 2);
    let co = orientation2(8, 3);
    let cp = permutation(8);
    let ep = permutation(12);
    while (permutationParity(cp) !== permutationParity(ep)) {
      cp = permutation(8);
    }
    const stickers2 = Array(54);
    for (let i = 0; i < 6; i++) {
      const center = cube.center(i);
      stickers2[center] = i;
    }
    let uCorners = cube.corners(0, 0);
    let fCorners = cube.corners(1, 0);
    let dCorners = cube.corners(2, 0);
    let bCorners = cube.corners(3, 0);
    let lCorners = cube.corners(4, 0);
    let rCorners = cube.corners(5, 0);
    const fill4C = (cIndices, c1, c2, c3, c4, co1, co2, co3, co4) => {
      const corner = (ci, o) => corners[cp[ci]][(co[ci] + o) % 3];
      stickers2[cIndices.topLeft] = corner(c1, co1);
      stickers2[cIndices.topRight] = corner(c2, co2);
      stickers2[cIndices.bottomLeft] = corner(c3, co3);
      stickers2[cIndices.bottomRight] = corner(c4, co4);
    };
    fill4C(uCorners, 0, 1, 2, 3, 0, 0, 0, 0);
    fill4C(fCorners, 2, 3, 4, 5, 2, 1, 1, 2);
    fill4C(dCorners, 4, 5, 6, 7, 0, 0, 0, 0);
    fill4C(bCorners, 6, 7, 0, 1, 2, 1, 1, 2);
    fill4C(lCorners, 0, 2, 6, 4, 2, 1, 1, 2);
    fill4C(rCorners, 3, 1, 5, 7, 2, 1, 1, 2);
    let uEdges = cube.edges(0, 0, 0);
    let fEdges = cube.edges(1, 0, 0);
    let dEdges = cube.edges(2, 0, 0);
    let bEdges = cube.edges(3, 0, 0);
    let lEdges = cube.edges(4, 0, 0);
    let rEdges = cube.edges(5, 0, 0);
    const fill4E = (eIndices, e1, e2, e3, e4, eo1, eo2, eo3, eo4) => {
      const edge = (ei, o) => edges[ep[ei]][(eo[ei] + o) % 2];
      stickers2[eIndices.top] = edge(e1, eo1);
      stickers2[eIndices.left] = edge(e2, eo2);
      stickers2[eIndices.right] = edge(e3, eo3);
      stickers2[eIndices.bottom] = edge(e4, eo4);
    };
    fill4E(uEdges, 0, 1, 2, 3, 0, 0, 0, 0);
    fill4E(fEdges, 3, 4, 5, 6, 1, 0, 0, 1);
    fill4E(dEdges, 6, 7, 8, 9, 0, 0, 0, 0);
    fill4E(bEdges, 9, 10, 11, 0, 1, 0, 0, 1);
    fill4E(lEdges, 1, 10, 4, 7, 1, 1, 1, 1);
    fill4E(rEdges, 2, 5, 11, 8, 1, 1, 1, 1);
    return stickers2;
  }
  function orientation2(pieces, orientations) {
    const o = Array(pieces);
    for (let i = 0; i < pieces; i++) {
      o[i] = randInt(orientations);
    }
    while (!orientationValid(o, orientations)) {
      const randPiece = randInt(pieces);
      o[randPiece] = randInt(orientations);
    }
    return o;
  }
  function orientationValid(pieces, orientations) {
    let sum = 0;
    for (let i = 0; i < pieces.length; i++) {
      sum += pieces[i];
    }
    return sum % orientations === 0;
  }
  function permutation(pieces) {
    const p = Array(pieces);
    for (let i = 0; i < pieces; i++) {
      p[i] = i;
    }
    shuffle(p);
    return p;
  }
  function permutationParity(pieces) {
    const cpy = [...pieces];
    let parity = false;
    while (true) {
      if (cpy[0] === 0) {
        const misplaced = cpy.findIndex((value, index) => value !== index);
        if (misplaced === -1) {
          return parity;
        }
        cpy[0] = cpy[misplaced];
        cpy[misplaced] = 0;
        parity = !parity;
      } else {
        const temp = cpy[0];
        cpy[0] = cpy[temp];
        cpy[temp] = temp;
        parity = !parity;
      }
    }
  }

  // src/scripts/cube.ts
  var canvas = document.querySelector("canvas");
  var gl = canvas.getContext("webgl");
  function setColor(sticker, color) {
    const arr = [
      color[0],
      color[1],
      color[2],
      color[3],
      color[0],
      color[1],
      color[2],
      color[3],
      color[0],
      color[1],
      color[2],
      color[3],
      color[0],
      color[1],
      color[2],
      color[3]
    ];
    gl.bindBuffer(gl.ARRAY_BUFFER, sticker.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(arr), gl.STATIC_DRAW);
  }
  function sq(x) {
    return x * x;
  }
  function half(x) {
    return Math.floor(x / 2);
  }
  function even(x) {
    return x % 2 == 0;
  }
  function stickers(layers) {
    return layers * layers * 6;
  }
  var Cube2 = class {
    constructor() {
      this.animationQueue = [];
    }
    setColors(colors2) {
      for (let i = 0; i < stickers(this.layers); i++) {
        setColor(this.stickers[i], colors2[i]);
      }
    }
    solve() {
      const arr = Array(stickers(this.layers));
      for (let i = 0; i < stickers(this.layers); i++) {
        const face = stickerToFace(i, this);
        this.stickers[i].face = face;
        arr[i] = faceToColor(face);
      }
      this.setColors(arr);
    }
    scramble() {
      if (this.layers === 3) {
        this.scramble3x3();
        return;
      }
      this.naiveScramble();
    }
    scramble3x3() {
      const state2 = scramble3x3(this);
      this.setCubeState(state2);
    }
    naiveScramble() {
      let numTurns = sq(this.layers) * 10;
      for (let i = 0; i < numTurns; i++) {
        let axis = Math.floor(Math.random() * 3);
        let layer = Math.floor(Math.random() * this.layers);
        let clockwise = Math.floor(Math.random() * 1) == 0;
        this._matchTurn(axis, layer, clockwise);
      }
    }
    setNumOfLayers(num) {
      this.layers = num;
      this.stickers = Array(stickers(num));
      this.underStickers = Array(stickers(num));
      for (let i = 0; i < stickers(num); i++) {
        const face = stickerToFace(i, this);
        this.stickers[i] = {
          face,
          buffer: gl.createBuffer()
        };
        this.underStickers[i] = {
          face,
          buffer: gl.createBuffer()
        };
        setColor(this.underStickers[i], BLACK);
      }
      this.affectedStickers = Array(stickers(num)).fill(false);
    }
    getCubeState() {
      return this.stickers.map((sticker) => sticker.face);
    }
    setCubeState(state2) {
      for (let i = 0; i < stickers(this.layers); i++) {
        const color = faceToColor(state2[i]);
        this.stickers[i].face = state2[i];
        setColor(this.stickers[i], color);
      }
    }
    resetAffectedStickers() {
      const arr = Array(stickers(this.layers));
      this.affectedStickers = arr.fill(this.layers === 1);
    }
    pushAnimation(axis, clockwise, prevStickers) {
      let x = clockwise ? -1 : 1;
      let rotationAxis = [0, 0, 0];
      rotationAxis[axis] = x;
      this.animationQueue.push({
        axis: rotationAxis,
        stickers: prevStickers,
        stickersToAnimate: this.affectedStickers
      });
    }
    turn(axis, layer, clockwise) {
      this.resetAffectedStickers();
      this.pushAnimation(axis, clockwise, [...this.stickers]);
      this._matchTurn(axis, layer, clockwise);
    }
    sliceTurn(axis, clockwise) {
      const arr = Array(stickers(this.layers));
      this.affectedStickers = arr.fill(false);
      this.pushAnimation(axis, clockwise, [...this.stickers]);
      for (let i = 1; i < this.layers - 1; i++) {
        this._matchTurn(axis, i, clockwise);
      }
    }
    wideTurn(axis, layer, clockwise) {
      this.resetAffectedStickers();
      this.pushAnimation(axis, clockwise, [...this.stickers]);
      this._matchTurn(axis, layer, clockwise);
      for (let i = 1; i < this.layers - 1; i++) {
        this._matchTurn(axis, i, clockwise);
      }
    }
    cubeRotate(axis, clockwise) {
      this.resetAffectedStickers();
      this.pushAnimation(axis, clockwise, [...this.stickers]);
      for (let i = 0; i < this.layers; i++) {
        this._matchTurn(axis, i, clockwise);
      }
    }
    _matchTurn(axis, layer, clockwise) {
      if (axis == 0) {
        this._turnXAxis(layer, clockwise);
        if (layer == 0) {
          this._turnOuter(5, clockwise);
        } else if (layer == this.layers - 1) {
          this._turnOuter(4, !clockwise);
        }
      } else if (axis == 1) {
        this._turnYAxis(layer, clockwise);
        if (layer == 0) {
          this._turnOuter(0, clockwise);
        } else if (layer == this.layers - 1) {
          this._turnOuter(2, !clockwise);
        }
      } else if (axis == 2) {
        this._turnZAxis(layer, clockwise);
        if (layer == 0) {
          this._turnOuter(1, clockwise);
        } else if (layer == this.layers - 1) {
          this._turnOuter(3, !clockwise);
        }
      } else {
        console.error(`Axis ${axis} not recognized`);
      }
    }
    _turnXAxis(layer, clockwise) {
      for (let i = 1; i <= this.layers; i++) {
        this._cycle(
          clockwise,
          0 * sq(this.layers) + sq(this.layers) - i - layer * this.layers,
          3 * sq(this.layers) + sq(this.layers) - i - layer * this.layers,
          2 * sq(this.layers) + sq(this.layers) - i - layer * this.layers,
          1 * sq(this.layers) + sq(this.layers) - i - layer * this.layers
        );
      }
    }
    _turnYAxis(layer, clockwise) {
      for (let i = 0; i < this.layers; i++) {
        this._cycle(
          clockwise,
          1 * sq(this.layers) + i * this.layers + layer,
          4 * sq(this.layers) + i * this.layers + layer,
          3 * sq(this.layers) + (this.layers - i - 1) * this.layers + (this.layers - 1) - layer,
          5 * sq(this.layers) + i * this.layers + layer
        );
      }
    }
    _turnZAxis(layer, clockwise) {
      for (let i = 0; i < this.layers; i++) {
        this._cycle(
          clockwise,
          0 * sq(this.layers) + (i + 1) * this.layers - 1 - layer,
          5 * sq(this.layers) + i + this.layers * layer,
          2 * sq(this.layers) + (this.layers - i - 1) * this.layers + layer,
          4 * sq(this.layers) + sq(this.layers) - (i + 1) - layer * this.layers
        );
      }
    }
    _turnOuter(face, clockwise) {
      if (this.layers % 2 != 0) {
        let center = this.center(face);
        this.affectedStickers[center] = true;
      }
      for (let i = 0; i < Math.floor(this.layers / 2); i++) {
        const { topLeft, topRight, bottomLeft, bottomRight } = this.corners(face, i);
        this._cycle(clockwise, topLeft, topRight, bottomRight, bottomLeft);
        let numEdges = this.layers - 2 * (i + 1);
        for (let j = 0; j < numEdges; j++) {
          const { top, left, bottom, right } = this.edges(face, i, j);
          this._cycle(clockwise, top, right, bottom, left);
        }
      }
    }
    _cycle(clockwise, i1, i2, i3, i4) {
      this.affectedStickers[i1] = true;
      this.affectedStickers[i2] = true;
      this.affectedStickers[i3] = true;
      this.affectedStickers[i4] = true;
      if (clockwise) {
        this._cycleHelper(i1, i2, i3, i4);
      } else {
        this._cycleHelper(i4, i3, i2, i1);
      }
    }
    _cycleHelper(i1, i2, i3, i4) {
      let temp = this.stickers[i4];
      this.stickers[i4] = this.stickers[i3];
      this.stickers[i3] = this.stickers[i2];
      this.stickers[i2] = this.stickers[i1];
      this.stickers[i1] = temp;
    }
    matchKeyToTurn(event) {
      if (this.disableTurn)
        return;
      if (event.ctrlKey)
        return;
      return this.matchKeyCodeToTurn(event.code);
    }
    matchKeyCodeToTurn(code) {
      switch (code) {
        case "KeyN":
          this.cubeRotate(0, true);
          return { notation: "x", rotate: true };
        case "KeyB":
          this.cubeRotate(0, false);
          return { notation: "x'", rotate: true };
        case "Semicolon":
          this.cubeRotate(1, true);
          return { notation: "y", rotate: true };
        case "KeyA":
          this.cubeRotate(1, false);
          return { notation: "y'", rotate: true };
        case "KeyP":
          this.cubeRotate(2, true);
          return { notation: "z", rotate: true };
        case "KeyQ":
          this.cubeRotate(2, false);
          return { notation: "z'", rotate: true };
        case "KeyJ":
          this.turn(1, 0, true);
          return { notation: "U", turn: true };
        case "KeyF":
          this.turn(1, 0, false);
          return { notation: "U'", turn: true };
        case "KeyS":
          this.turn(1, this.layers - 1, false);
          return { notation: "D", turn: true };
        case "KeyL":
          this.turn(1, this.layers - 1, true);
          return { notation: "D'", turn: true };
        case "KeyH":
          this.turn(2, 0, true);
          return { notation: "F", turn: true };
        case "KeyG":
          this.turn(2, 0, false);
          return { notation: "F'", turn: true };
        case "KeyW":
          this.turn(2, this.layers - 1, false);
          return { notation: "B", turn: true };
        case "KeyO":
          this.turn(2, this.layers - 1, true);
          return { notation: "B'", turn: true };
        case "KeyD":
          this.turn(0, this.layers - 1, false);
          return { notation: "L", turn: true };
        case "KeyE":
          this.turn(0, this.layers - 1, true);
          return { notation: "L'", turn: true };
        case "KeyI":
          this.turn(0, 0, true);
          return { notation: "R", turn: true };
        case "KeyK":
          this.turn(0, 0, false);
          return { notation: "R'", turn: true };
        case "BracketLeft":
          this.sliceTurn(0, false);
          return { notation: "M", turn: true };
        case "Quote":
          this.sliceTurn(0, true);
          return { notation: "M'", turn: true };
        case "KeyC":
          this.sliceTurn(1, false);
          return { notation: "E", turn: true };
        case "Comma":
          this.sliceTurn(1, true);
          return { notation: "E'", turn: true };
        case "KeyY":
          this.sliceTurn(2, true);
          return { notation: "S", turn: true };
        case "KeyT":
          this.sliceTurn(2, false);
          return { notation: "S'", turn: true };
        case "KeyU":
          this.wideTurn(0, 0, true);
          return { notation: "r", turn: true };
        case "KeyM":
          this.wideTurn(0, 0, false);
          return { notation: "r'", turn: true };
        case "KeyV":
          this.wideTurn(0, this.layers - 1, false);
          return { notation: "l", turn: true };
        case "KeyR":
          this.wideTurn(0, this.layers - 1, true);
          return { notation: "l'", turn: true };
      }
      return;
    }
    stepAlgorithm(move2, forward) {
      switch (move2) {
        case "x":
          this.cubeRotate(0, forward);
          break;
        case "x'":
          this.cubeRotate(0, !forward);
          break;
        case "x2":
        case "x2'":
          this.cubeRotate(0, forward);
          this.cubeRotate(0, forward);
          break;
        case "y":
          this.cubeRotate(1, forward);
          break;
        case "y'":
          this.cubeRotate(1, !forward);
          break;
        case "y2":
        case "y2'":
          this.cubeRotate(1, forward);
          this.cubeRotate(1, forward);
          break;
        case "z":
          this.cubeRotate(2, forward);
          break;
        case "z'":
          this.cubeRotate(2, !forward);
          break;
        case "z2":
        case "z2'":
          this.cubeRotate(2, forward);
          this.cubeRotate(2, forward);
          break;
        case "U":
          this.turn(1, 0, forward);
          break;
        case "U'":
          this.turn(1, 0, !forward);
          break;
        case "U2":
        case "U2'":
          this.turn(1, 0, forward);
          this.turn(1, 0, forward);
          break;
        case "u":
          this.wideTurn(1, 0, forward);
          break;
        case "u'":
          this.wideTurn(1, 0, !forward);
          break;
        case "u2":
        case "u2'":
          this.wideTurn(1, 0, forward);
          this.wideTurn(1, 0, forward);
          break;
        case "D":
          this.turn(1, this.layers - 1, !forward);
          break;
        case "D'":
          this.turn(1, this.layers - 1, forward);
          break;
        case "D2":
        case "D2'":
          this.turn(1, this.layers - 1, forward);
          this.turn(1, this.layers - 1, forward);
          break;
        case "d":
          this.wideTurn(1, this.layers - 1, !forward);
          break;
        case "d'":
          this.wideTurn(1, this.layers - 1, forward);
          break;
        case "d2":
        case "d2'":
          this.wideTurn(1, this.layers - 1, forward);
          this.wideTurn(1, this.layers - 1, forward);
          break;
        case "F":
          this.turn(2, 0, forward);
          break;
        case "F'":
          this.turn(2, 0, !forward);
          break;
        case "F2":
        case "F2'":
          this.turn(2, 0, forward);
          this.turn(2, 0, forward);
          break;
        case "f":
          this.wideTurn(2, 0, forward);
          break;
        case "f'":
          this.wideTurn(2, 0, !forward);
          break;
        case "f2":
        case "f2'":
          this.wideTurn(2, 0, forward);
          this.wideTurn(2, 0, forward);
          break;
        case "B":
          this.turn(2, this.layers - 1, !forward);
          break;
        case "B'":
          this.turn(2, this.layers - 1, forward);
          break;
        case "B2":
        case "B2'":
          this.turn(2, this.layers - 1, forward);
          this.turn(2, this.layers - 1, forward);
          break;
        case "b":
          this.wideTurn(2, this.layers - 1, !forward);
          break;
        case "b'":
          this.wideTurn(2, this.layers - 1, forward);
          break;
        case "b2":
        case "b2'":
          this.wideTurn(2, this.layers - 1, forward);
          this.wideTurn(2, this.layers - 1, forward);
          break;
        case "L":
          this.turn(0, this.layers - 1, !forward);
          break;
        case "L'":
          this.turn(0, this.layers - 1, forward);
          break;
        case "L2":
        case "L2'":
          this.turn(0, this.layers - 1, forward);
          this.turn(0, this.layers - 1, forward);
          break;
        case "l":
          this.wideTurn(0, this.layers - 1, !forward);
          break;
        case "l'":
          this.wideTurn(0, this.layers - 1, forward);
          break;
        case "l2":
        case "l2'":
          this.wideTurn(0, this.layers - 1, forward);
          this.wideTurn(0, this.layers - 1, forward);
          break;
        case "R":
          this.turn(0, 0, forward);
          break;
        case "R'":
          this.turn(0, 0, !forward);
          break;
        case "R2":
        case "R2'":
          this.turn(0, 0, forward);
          this.turn(0, 0, forward);
          break;
        case "r":
          this.wideTurn(0, 0, forward);
          break;
        case "r'":
          this.wideTurn(0, 0, !forward);
          break;
        case "r2":
        case "r2'":
          this.wideTurn(0, 0, forward);
          this.wideTurn(0, 0, forward);
          break;
        case "M":
          this.turn(0, 1, !forward);
          break;
        case "M'":
          this.turn(0, 1, forward);
          break;
        case "M2":
        case "M2'":
          this.sliceTurn(0, forward);
          this.sliceTurn(0, forward);
          break;
        case "E":
          this.sliceTurn(1, !forward);
          break;
        case "E'":
          this.sliceTurn(1, forward);
          break;
        case "E2":
        case "E2'":
          this.sliceTurn(1, forward);
          this.sliceTurn(1, forward);
          break;
        case "S":
          this.sliceTurn(2, forward);
          break;
        case "S'":
          this.sliceTurn(2, !forward);
          break;
        case "S2":
        case "S2'":
          this.sliceTurn(2, forward);
        default:
          throw new Error("Invalid turn in algorithm: " + move2);
      }
    }
    execAlg(alg) {
      if (!alg)
        return;
      let moves = alg.split(" ");
      for (let i = 0; i < moves.length; i++) {
        this.stepAlgorithm(moves[i], true);
      }
      this.animationQueue = [];
    }
    execAlgReverse(alg) {
      if (!alg)
        return;
      let moves = alg.split(" ");
      for (let i = moves.length - 1; i >= 0; i--) {
        this.stepAlgorithm(moves[i], false);
      }
      this.animationQueue = [];
    }
    stickerIsOnFace(sticker, face) {
      return face * sq(this.layers) <= sticker && sticker < (face + 1) * sq(this.layers);
    }
    center(face) {
      return face * sq(this.layers) + Math.floor(sq(this.layers) / 2);
    }
    corners(face, layer) {
      const offset = face * sq(this.layers);
      return {
        topLeft: offset + (this.layers + 1) * layer,
        topRight: offset + (this.layers - 1) * (this.layers - layer),
        bottomRight: offset + (this.layers + 1) * (this.layers - layer - 1),
        bottomLeft: offset + (this.layers - 1) * (layer + 1)
      };
    }
    edges(face, corner, edge) {
      const corners2 = this.corners(face, corner);
      let numEdges = this.layers - 2 * (corner + 1);
      return {
        top: corners2.topLeft + this.layers * (edge + 1),
        left: corners2.topLeft + (numEdges - edge),
        right: corners2.topRight + edge + 1,
        bottom: corners2.bottomLeft + this.layers * (numEdges - edge)
      };
    }
  };

  // src/scripts/buffers.ts
  function createBuffers(gl4, cube, perspectiveMatrix) {
    let allPositions = makePositions(cube, 1.01, 0.02);
    let allNoGapPositions = makePositions(cube, 1, 0);
    let allHintPositions = makePositions(cube, 1.5, 0.02);
    const objects = Array(stickers(cube.layers));
    for (let i = 0; i < stickers(cube.layers); i++) {
      let object = {
        positionBuffer: gl4.createBuffer(),
        noGapPositionBuffer: gl4.createBuffer(),
        hintPositionBuffer: gl4.createBuffer(),
        indexBuffer: gl4.createBuffer(),
        cart2d: [],
        positions: null
      };
      let positions = new Float32Array(12);
      let noGapPos = new Float32Array(12);
      let hintPos = new Float32Array(12);
      for (let j = 0; j < 12; j++) {
        let index = i * 12 + j;
        positions[j] = allPositions[index];
        noGapPos[j] = allNoGapPositions[index];
        hintPos[j] = allHintPositions[index];
      }
      gl4.bindBuffer(gl4.ARRAY_BUFFER, object.positionBuffer);
      gl4.bufferData(gl4.ARRAY_BUFFER, positions, gl4.STATIC_DRAW);
      object.positions = positions;
      gl4.bindBuffer(gl4.ARRAY_BUFFER, object.noGapPositionBuffer);
      gl4.bufferData(gl4.ARRAY_BUFFER, noGapPos, gl4.STATIC_DRAW);
      gl4.bindBuffer(gl4.ARRAY_BUFFER, object.hintPositionBuffer);
      gl4.bufferData(gl4.ARRAY_BUFFER, hintPos, gl4.STATIC_DRAW);
      const homo = Array(16);
      multiply(homo, 0, perspectiveMatrix, [noGapPos[0], noGapPos[1], noGapPos[2], 1]);
      multiply(homo, 4, perspectiveMatrix, [noGapPos[3], noGapPos[4], noGapPos[5], 1]);
      multiply(homo, 8, perspectiveMatrix, [noGapPos[6], noGapPos[7], noGapPos[8], 1]);
      multiply(homo, 12, perspectiveMatrix, [noGapPos[9], noGapPos[10], noGapPos[11], 1]);
      object.cart2d = [
        homo[0] / homo[3],
        homo[1] / homo[3],
        homo[4] / homo[7],
        homo[5] / homo[7],
        homo[8] / homo[11],
        homo[9] / homo[11],
        homo[12] / homo[15],
        homo[13] / homo[15]
      ];
      const indices = [0, 1, 2, 0, 2, 3];
      gl4.bindBuffer(gl4.ELEMENT_ARRAY_BUFFER, object.indexBuffer);
      gl4.bufferData(gl4.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl4.STATIC_DRAW);
      objects[i] = object;
    }
    return objects;
  }
  function multiply(arr, offset, a, b) {
    const out = Array(4);
    let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    arr[offset + 0] = b0 * a[0] + b1 * a[4] + b2 * a[8] + b3 * a[12];
    arr[offset + 1] = b0 * a[1] + b1 * a[5] + b2 * a[9] + b3 * a[13];
    arr[offset + 2] = b0 * a[2] + b1 * a[6] + b2 * a[10] + b3 * a[14];
    arr[offset + 3] = b0 * a[3] + b1 * a[7] + b2 * a[11] + b3 * a[15];
  }
  var perSticker = 12;
  var verticesInSquare = 4;
  var dimensions = 3;
  function makePositions(cube, radius, gap) {
    const perFace = sq(cube.layers) * perSticker;
    const out = Array(6 * perFace);
    topFace(out, 0 * perFace, cube, 1, radius, gap);
    frontFace(out, 1 * perFace, cube, 0, radius, gap);
    bottomFace(out, 2 * perFace, cube, 1, -radius, gap);
    backFace(out, 3 * perFace, cube, 0, -radius, gap);
    leftFace(out, 4 * perFace, cube, 2, -radius, gap);
    rightFace(out, 5 * perFace, cube, 2, radius, gap);
    return out;
  }
  function topFace(arr, offset, cube, a, r, gap) {
    if (even(cube.layers)) {
      let coords2 = Array(sq(cube.layers));
      let idx2 = 0;
      for (let i = 0; i < cube.layers; i++) {
        for (let j = 0; j < cube.layers; j++) {
          const x = -1 + 1 / cube.layers + j * 2 / cube.layers;
          const y = -1 + 1 / cube.layers + i * 2 / cube.layers;
          coords2[idx2] = [x, y, r];
          idx2++;
        }
      }
      makeFace(arr, offset, cube, coords2, a, gap);
      return;
    }
    let coords = Array(sq(cube.layers));
    let idx = 0;
    for (let i = -half(cube.layers); i <= half(cube.layers); i++) {
      for (let j = -half(cube.layers); j <= half(cube.layers); j++) {
        coords[idx] = [2 * j / cube.layers, 2 * i / cube.layers, r];
        idx++;
      }
    }
    makeFace(arr, offset, cube, coords, a, gap);
  }
  function frontFace(arr, offset, cube, a, r, gap) {
    if (even(cube.layers)) {
      let coords2 = Array(sq(cube.layers));
      let idx2 = 0;
      for (let i = 0; i < cube.layers; i++) {
        for (let j = cube.layers - 1; j >= 0; j--) {
          const x = -1 + 1 / cube.layers + i * 2 / cube.layers;
          const y = -1 + 1 / cube.layers + j * 2 / cube.layers;
          coords2[idx2] = [x, y, r];
          idx2++;
        }
      }
      makeFace(arr, offset, cube, coords2, a, gap);
      return;
    }
    let coords = Array(sq(cube.layers));
    let idx = 0;
    for (let i = -half(cube.layers); i <= half(cube.layers); i++) {
      for (let j = half(cube.layers); j >= -half(cube.layers); j--) {
        coords[idx] = [2 * i / cube.layers, 2 * j / cube.layers, r];
        idx++;
      }
    }
    makeFace(arr, offset, cube, coords, a, gap);
  }
  function bottomFace(arr, offset, cube, a, r, gap) {
    if (even(cube.layers)) {
      let coords2 = Array(sq(cube.layers));
      let idx2 = 0;
      for (let i = 0; i < cube.layers; i++) {
        for (let j = cube.layers - 1; j >= 0; j--) {
          const x = -1 + 1 / cube.layers + j * 2 / cube.layers;
          const y = -1 + 1 / cube.layers + i * 2 / cube.layers;
          coords2[idx2] = [x, y, r];
          idx2++;
        }
      }
      makeFace(arr, offset, cube, coords2, a, gap);
      return;
    }
    let coords = Array(sq(cube.layers));
    let idx = 0;
    for (let i = -half(cube.layers); i <= half(cube.layers); i++) {
      for (let j = half(cube.layers); j >= -half(cube.layers); j--) {
        coords[idx] = [2 * j / cube.layers, 2 * i / cube.layers, r];
        idx++;
      }
    }
    makeFace(arr, offset, cube, coords, a, gap);
  }
  function backFace(arr, offset, cube, a, r, gap) {
    if (even(cube.layers)) {
      let coords2 = Array(sq(cube.layers));
      let idx2 = 0;
      for (let i = 0; i < cube.layers; i++) {
        for (let j = 0; j < cube.layers; j++) {
          const x = -1 + 1 / cube.layers + i * 2 / cube.layers;
          const y = -1 + 1 / cube.layers + j * 2 / cube.layers;
          coords2[idx2] = [x, y, r];
          idx2++;
        }
      }
      makeFace(arr, offset, cube, coords2, a, gap);
      return;
    }
    let coords = Array(sq(cube.layers));
    let idx = 0;
    for (let i = -half(cube.layers); i <= half(cube.layers); i++) {
      for (let j = -half(cube.layers); j <= half(cube.layers); j++) {
        coords[idx] = [2 * i / cube.layers, 2 * j / cube.layers, r];
        idx++;
      }
    }
    makeFace(arr, offset, cube, coords, a, gap);
  }
  function leftFace(arr, offset, cube, a, r, gap) {
    if (even(cube.layers)) {
      let coords2 = Array(sq(cube.layers));
      let idx2 = 0;
      for (let i = 0; i < cube.layers; i++) {
        for (let j = cube.layers - 1; j >= 0; j--) {
          const x = -1 + 1 / cube.layers + j * 2 / cube.layers;
          const y = -1 + 1 / cube.layers + i * 2 / cube.layers;
          coords2[idx2] = [x, y, r];
          idx2++;
        }
      }
      makeFace(arr, offset, cube, coords2, a, gap);
      return;
    }
    let coords = Array(sq(cube.layers));
    let idx = 0;
    for (let i = -half(cube.layers); i <= half(cube.layers); i++) {
      for (let j = half(cube.layers); j >= -half(cube.layers); j--) {
        coords[idx] = [2 * j / cube.layers, 2 * i / cube.layers, r];
        idx++;
      }
    }
    makeFace(arr, offset, cube, coords, a, gap);
  }
  function rightFace(arr, offset, cube, a, r, gap) {
    if (even(cube.layers)) {
      let coords2 = Array(sq(cube.layers));
      let idx2 = 0;
      for (let i = cube.layers - 1; i >= 0; i--) {
        for (let j = cube.layers - 1; j >= 0; j--) {
          const x = -1 + 1 / cube.layers + j * 2 / cube.layers;
          const y = -1 + 1 / cube.layers + i * 2 / cube.layers;
          coords2[idx2] = [x, y, r];
          idx2++;
        }
      }
      makeFace(arr, offset, cube, coords2, a, gap);
      return;
    }
    let coords = Array(sq(cube.layers));
    let idx = 0;
    for (let i = half(cube.layers); i >= -half(cube.layers); i--) {
      for (let j = half(cube.layers); j >= -half(cube.layers); j--) {
        coords[idx] = [2 * j / cube.layers, 2 * i / cube.layers, r];
        idx++;
      }
    }
    makeFace(arr, offset, cube, coords, a, gap);
  }
  function makeFace(arr, offset, cube, coords, a, gap) {
    for (let i = 0; i < sq(cube.layers); i++) {
      const temp = coords[i];
      makeSticker(arr, offset + i * perSticker, cube, temp[0], temp[1], temp[2], a, gap);
    }
  }
  function makeSticker(arr, offset, cube, x, y, r, a, gap) {
    const s = 1 / cube.layers - gap;
    const coords = [
      [x - s, y - s, r],
      [x + s, y - s, r],
      [x + s, y + s, r],
      [x - s, y + s, r]
    ];
    for (let i = 0; i < verticesInSquare; i++) {
      const temp = coords[i];
      arr[offset + i * dimensions] = temp[(a + 0) % dimensions];
      arr[offset + i * dimensions + 1] = temp[(a + 1) % dimensions];
      arr[offset + i * dimensions + 2] = temp[(a + 2) % dimensions];
    }
  }

  // src/scripts/component.ts
  var Component2 = class {
    constructor(shouldRender, stateToElement) {
      this.shouldRender = shouldRender;
      this.stateToElement = stateToElement;
    }
    render(nextState) {
      if (this.shouldRender(this.prevState, nextState)) {
        this._element = this.stateToElement(nextState);
      }
      this.prevState = nextState;
      return this._element;
    }
  };

  // src/scripts/mobile_keyboard.ts
  var keys = [
    [
      {
        key: "Q",
        code: "KeyQ"
      },
      {
        key: "W",
        code: "KeyW"
      },
      {
        key: "E",
        code: "KeyE"
      },
      {
        key: "R",
        code: "KeyR"
      },
      {
        key: "T",
        code: "KeyT"
      },
      {
        key: "T",
        code: "KeyT"
      },
      {
        key: "U",
        code: "KeyU"
      },
      {
        key: "I",
        code: "KeyI"
      },
      {
        key: "O",
        code: "KeyO"
      },
      {
        key: "P",
        code: "KeyP"
      },
      {
        key: "[",
        code: "BracketLeft"
      }
    ],
    [
      {
        key: "A",
        code: "KeyA"
      },
      {
        key: "S",
        code: "KeyS"
      },
      {
        key: "D",
        code: "KeyD"
      },
      {
        key: "F",
        code: "KeyF"
      },
      {
        key: "G",
        code: "KeyG"
      },
      {
        key: "H",
        code: "KeyH"
      },
      {
        key: "J",
        code: "KeyJ"
      },
      {
        key: "K",
        code: "KeyK"
      },
      {
        key: "L",
        code: "KeyL"
      },
      {
        key: ";",
        code: "Semicolon"
      },
      {
        key: "'",
        code: "Quote"
      }
    ],
    [
      {
        key: "Z",
        code: "KeyZ"
      },
      {
        key: "X",
        code: "KeyX"
      },
      {
        key: "C",
        code: "KeyC"
      },
      {
        key: "V",
        code: "KeyV"
      },
      {
        key: "B",
        code: "KeyB"
      },
      {
        key: "N",
        code: "KeyN"
      },
      {
        key: "M",
        code: "KeyM"
      },
      {
        key: ",",
        code: "Comma"
      },
      {
        key: ".",
        code: "Period"
      },
      {
        key: "/",
        code: "Slash"
      }
    ]
  ];
  function renderMobileKeyboard(onClickKey) {
    return createElement("div", {
      className: "col gap-1",
      style: "margin: 8px; max-width: 512px;",
      onclick: (e) => {
        const target = e.target;
        const move2 = target.value;
        if (move2) {
          onClickKey(move2);
        }
      },
      children: keys.map((row, i) => {
        return createElement("div", {
          className: "row w-full gap-1",
          children: [
            createElement("div", { style: `width: ${i * 0.5}rem;` }),
            ...row.map((key) => {
              return createElement("div", {
                className: "text-white p-2 bg-gray-700 rounded-md",
                style: "font-family: monospace; font-size: 1.5rem;",
                value: key.code,
                innerHTML: key.key
              });
            })
          ]
        });
      })
    });
  }

  // src/scripts/modal.ts
  function renderModal() {
    const modal = createElement("div", {
      className: "col fixed z-20 h-1/2 max-w-xl bg-white rounded-lg m-4 p-4",
      onclick: (event) => {
        event.stopPropagation();
      }
    });
    const background = createElement("div", {
      className: "col justify-center fixed z-10 w-screen h-screen bg-black bg-opacity-50",
      onclick: (event) => {
        event.target.remove();
      },
      children: [modal]
    });
    return [modal, background];
  }

  // src/scripts/common/spring.ts
  var k = 100;
  var f = 15;
  var Spring = class {
    constructor() {
      this.position = 0;
      this._velocity = 200;
      this._acceleration = 0;
      this.target = 0;
    }
    update(dt) {
      const springF = -k * (this.position - this.target);
      const dampingF = -f * this._velocity;
      this._acceleration = springF + dampingF;
      this._velocity += this._acceleration * dt;
      this.position += this._velocity * dt;
    }
  };

  // src/scripts/dragDetector.ts
  function xPixelToClip(val, canvasSize) {
    return val / canvasSize * 2 - 1;
  }
  function yPixelToClip(val, canvasSize) {
    return 1 - val / canvasSize * 2;
  }
  function calcSlope(x1, y1, x2, y2) {
    if (x1 < x2) {
      return (y2 - y1) / (x2 - x1);
    }
    return (y1 - y2) / (x1 - x2);
  }
  function areaTriangle(x1, y1, x2, y2, x3, y3) {
    return Math.abs(0.5 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)));
  }
  function topRow(cube, sticker) {
    return cube.layers - 1 - sticker % cube.layers;
  }
  function topColumn(cube, sticker) {
    return cube.layers - 1 - Math.floor(sticker / cube.layers);
  }
  function frontRow(cube, sticker) {
    return sticker % cube.layers;
  }
  function frontColumn(cube, sticker) {
    return cube.layers - 1 - Math.floor((sticker - sq(cube.layers)) / cube.layers);
  }
  var DragDetector = class {
    onPointerDown(x, y, div, cube, buffers) {
      this.numOfPointerMoves = 0;
      const clipX = xPixelToClip(x, div.clientWidth);
      const clipY = yPixelToClip(y, div.clientHeight);
      this.xOnDown = clipX;
      this.yOnDown = clipY;
      [this.stickerOnDown, this.cart2dOnDown] = this._coordinatesToSticker(clipX, clipY, cube, buffers);
      function getXY(objectIndex, xIndex, yIndex) {
        return {
          x: buffers[objectIndex].cart2d[xIndex],
          y: buffers[objectIndex].cart2d[yIndex]
        };
      }
      if (this.stickerOnDown !== -1)
        return;
      const topLeft = getXY(0, 0, 1);
      const topRight = getXY(cube.layers * (cube.layers - 1), 6, 7);
      const left = getXY(cube.layers - 1, 2, 3);
      const right = getXY(sq(cube.layers) - 1, 4, 5);
      const bottomLeft = getXY(cube.layers * (cube.layers + 1) - 1, 0, 1);
      const bottomRight = getXY(sq(cube.layers) * 2 - 1, 2, 3);
      if (clipY > topLeft.y && clipX > topLeft.x && clipX < topRight.x) {
        cube.cubeRotate(0, true);
      } else if (clipX < topLeft.x && clipY > left.y && clipY < topLeft.y) {
        cube.cubeRotate(2, false);
      } else if (clipX > topRight.x && clipY > right.y && clipY < topRight.y) {
        cube.cubeRotate(2, true);
      } else if (clipX < bottomLeft.x && clipY > bottomLeft.y && clipY < left.y) {
        cube.cubeRotate(1, true);
      } else if (clipX > bottomRight.x && clipY > bottomRight.y && clipY < right.y) {
        cube.cubeRotate(1, false);
      } else if (clipY < bottomLeft.y && clipX > bottomLeft.x && clipX < bottomRight.x) {
        cube.cubeRotate(0, false);
      }
    }
    onPointerMove(x, y) {
      this.numOfPointerMoves++;
      this.xOnMove = x;
      this.yOnMove = y;
    }
    onPointerUp(div, cube, buffers) {
      if (this.numOfPointerMoves < 2)
        return;
      let posSlope, negSlope;
      if (this.stickerOnDown !== -1) {
        posSlope = calcSlope(this.cart2dOnDown[0], this.cart2dOnDown[1], this.cart2dOnDown[4], this.cart2dOnDown[5]);
        negSlope = calcSlope(this.cart2dOnDown[2], this.cart2dOnDown[3], this.cart2dOnDown[6], this.cart2dOnDown[7]);
        if (posSlope < 0) {
          const temp = posSlope;
          posSlope = negSlope;
          negSlope = temp;
        }
      }
      const xClip = xPixelToClip(this.xOnMove, div.clientWidth);
      const yClip = yPixelToClip(this.yOnMove, div.clientHeight);
      const slope = calcSlope(xClip, yClip, this.xOnDown, this.yOnDown);
      if (cube.stickerIsOnFace(this.stickerOnDown, 0)) {
        if (xClip === this.xOnDown) {
          cube.turn(0, topColumn(cube, this.stickerOnDown), yClip > this.yOnDown);
        } else {
          if (slope > posSlope) {
            cube.turn(0, topColumn(cube, this.stickerOnDown), xClip > this.xOnDown);
          } else if (slope < negSlope) {
            cube.turn(0, topColumn(cube, this.stickerOnDown), xClip < this.xOnDown);
          } else {
            cube.turn(2, topRow(cube, this.stickerOnDown), xClip > this.xOnDown);
          }
        }
      } else if (cube.stickerIsOnFace(this.stickerOnDown, 1)) {
        if (xClip === this.xOnDown) {
          cube.turn(0, frontColumn(cube, this.stickerOnDown), yClip > this.yOnDown);
        } else {
          if (slope > posSlope) {
            cube.turn(0, frontColumn(cube, this.stickerOnDown), xClip > this.xOnDown);
          } else if (slope < negSlope) {
            cube.turn(0, frontColumn(cube, this.stickerOnDown), xClip < this.xOnDown);
          } else {
            cube.turn(1, frontRow(cube, this.stickerOnDown), xClip < this.xOnDown);
          }
        }
      }
    }
    _coordinatesToSticker(x, y, cube, buffers) {
      const coordinateIsInSticker = (i) => {
        if (!buffers[i].cart2d) {
          console.error("cart2d is undefined");
          return;
        }
        const cart2d = buffers[i].cart2d;
        const areaQuadrilateral = areaTriangle(cart2d[0], cart2d[1], cart2d[2], cart2d[3], cart2d[4], cart2d[5]) + areaTriangle(cart2d[0], cart2d[1], cart2d[4], cart2d[5], cart2d[6], cart2d[7]);
        const sumAreaTriangles = areaTriangle(x, y, cart2d[0], cart2d[1], cart2d[2], cart2d[3]) + areaTriangle(x, y, cart2d[2], cart2d[3], cart2d[4], cart2d[5]) + areaTriangle(x, y, cart2d[4], cart2d[5], cart2d[6], cart2d[7]) + areaTriangle(x, y, cart2d[6], cart2d[7], cart2d[0], cart2d[1]);
        const EPSILON = 1e-5;
        if (Math.abs(areaQuadrilateral - sumAreaTriangles) < EPSILON) {
          return [
            i,
            cart2d
          ];
        }
        return void 0;
      };
      for (let i = 0; i < 2 * sq(cube.layers); i++) {
        const output = coordinateIsInSticker(i);
        if (output)
          return output;
      }
      return [-1, void 0];
    }
  };

  // src/scripts/glMatrix.ts
  function create() {
    return [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
  }
  function perspective(out, fovy, aspect, near, far) {
    const f2 = 1 / Math.tan(fovy / 2);
    out[0] = f2 / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f2;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
    if (far != null && far !== Infinity) {
      const nf = 1 / (near - far);
      out[10] = (far + near) * nf;
      out[14] = 2 * far * near * nf;
    } else {
      out[10] = -1;
      out[14] = -2 * near;
    }
    return out;
  }
  function rotate(out, a, rad, axis) {
    let x = axis[0], y = axis[1], z = axis[2], len = 1 / Math.hypot(x, y, z);
    x *= len;
    y *= len;
    z *= len;
    let s = Math.sin(rad), c = Math.cos(rad), t = 1 - c, a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3], a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7], a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11], b00 = x * x * t + c, b01 = y * x * t + z * s, b02 = z * x * t - y * s, b10 = x * y * t - z * s, b11 = y * y * t + c, b12 = z * y * t + x * s, b20 = x * z * t + y * s, b21 = y * z * t - x * s, b22 = z * z * t + c;
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;
    if (a !== out) {
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    }
    return out;
  }
  function translate(m, v) {
    let x = v[0], y = v[1], z = v[2];
    m[12] += m[0] * x + m[4] * y + m[7] * z;
    m[13] += m[1] * x + m[5] * y + m[8] * z;
    m[14] += m[2] * x + m[5] * y + m[9] * z;
    m[15] += m[3] * x + m[6] * y + m[10] * z;
    return m;
  }

  // src/scripts/common/singleton.ts
  function singleton() {
    let instance;
    return (constructor) => {
      if (!instance) {
        instance = constructor();
      }
      return instance;
    };
  }

  // src/scripts/scene.ts
  var canvas2 = document.querySelector("canvas");
  var gl2 = canvas2.getContext("webgl");
  var programInfo = initPrograms();
  var scenes = [];
  var settings = {
    animateTurns: true,
    hintStickers: true,
    showBody: true
  };
  var time = Date.now() * 1e-3;
  var numLayers = 3;
  var loopStarted = false;
  function startLoop() {
    if (loopStarted)
      return;
    loopStarted = true;
    requestAnimationFrame(render);
  }
  function newScene(selector) {
    let div = document.querySelector(selector);
    let cube = new Cube2();
    let spring = new Spring();
    let perspectiveMatrix = initPerspective(div);
    let dragDetector = new DragDetector();
    cube.setNumOfLayers(numLayers);
    let buffers = createBuffers(gl2, cube, perspectiveMatrix);
    let scene = {
      div,
      cube,
      spring,
      buffers,
      perspectiveMatrix
    };
    const pointerdown = (offsetX, offsetY) => {
      if (!scene.dragEnabled)
        return;
      dragDetector.onPointerDown(offsetX, offsetY, scene.div, scene.cube, scene.buffers);
    };
    const pointermove = (offsetX, offsetY) => {
      if (!scene.dragEnabled)
        return;
      dragDetector.onPointerMove(offsetX, offsetY);
    };
    const pointerup = () => {
      if (!scene.dragEnabled)
        return;
      dragDetector.onPointerUp(scene.div, scene.cube, scene.buffers);
    };
    const calcOffset = (event) => {
      const rect = event.target.getBoundingClientRect();
      const x = event.touches[0].pageX - rect.left;
      const y = event.touches[0].pageY - rect.top;
      return { x, y };
    };
    const addPointerListeners = () => {
      div.addEventListener("pointerdown", (event) => pointerdown(event.offsetX, event.offsetY));
      div.addEventListener("pointermove", (event) => pointermove(event.offsetX, event.offsetY));
      div.addEventListener("pointerup", (event) => pointerup());
    };
    const addTouchListeners = () => {
      div.addEventListener("touchstart", (event) => {
        const { x, y } = calcOffset(event);
        pointerdown(x, y);
      });
      div.addEventListener("touchmove", (event) => {
        const { x, y } = calcOffset(event);
        pointermove(x, y);
      });
      div.addEventListener("touchend", (event) => {
        pointerup();
      });
    };
    if (window.PointerEvent) {
      addPointerListeners();
    } else {
      addTouchListeners();
    }
    return scene;
  }
  function initPrograms() {
    const vertexShaderSource = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;
    uniform mat4 uTransformMatrix;
    uniform mat4 uRotateMatrix;

    // variables shared between vertex and fragment shaders
    varying lowp vec4 vColor;
    varying lowp vec4 originalPos;
    varying lowp vec4 rotatedPos;
    void main(void) {
        gl_Position = uTransformMatrix * aVertexPosition;
        originalPos = aVertexPosition;
        rotatedPos = uRotateMatrix * aVertexPosition;
        vColor = aVertexColor;
    }
    `;
    const fragmentShaderSource = `
    // variables shared between vertex and fragment shaders
    varying lowp vec4 vColor;
    varying lowp vec4 originalPos;
    varying lowp vec4 rotatedPos;

    void main(void) {
        gl_FragColor = vColor;

        // low precision float variable
        lowp float max = 1.05;

        // if it is a normal sticker rather than a hint sticker, it should not be discarded
        if (originalPos.x < max && originalPos.x > -max && originalPos.y < max && originalPos.y > -max && originalPos.z < max && originalPos.z > -max) {
            return;
        }

        // if it starts on the right or left, and stays on its side, it should not be discarded
        if (originalPos.x > max && rotatedPos.x > max) return;
        if (originalPos.x < -max && rotatedPos.x < -max) return;

        if (rotatedPos.y < max && rotatedPos.z < max) return;
        discard;
    }
    `;
    const shaderProgram = initShaderProgram(gl2, vertexShaderSource, fragmentShaderSource);
    gl2.useProgram(shaderProgram);
    return {
      attribLocations: {
        vertexPosition: gl2.getAttribLocation(shaderProgram, "aVertexPosition"),
        vertexColor: gl2.getAttribLocation(shaderProgram, "aVertexColor")
      },
      uniformLocations: {
        transformMatrix: gl2.getUniformLocation(shaderProgram, "uTransformMatrix"),
        rotateMatrix: gl2.getUniformLocation(shaderProgram, "uRotateMatrix")
      }
    };
  }
  function initPerspective(element) {
    let perspectiveMatrix = create();
    perspective(
      perspectiveMatrix,
      50 * Math.PI / 180,
      element.clientWidth / element.clientHeight,
      0.1,
      100
    );
    translate(
      perspectiveMatrix,
      [0, 0, -5]
    );
    rotate(
      perspectiveMatrix,
      perspectiveMatrix,
      45 * Math.PI / 180,
      [1, 0, 0]
    );
    rotate(
      perspectiveMatrix,
      perspectiveMatrix,
      0,
      [0, -1, 0]
    );
    return perspectiveMatrix;
  }
  function bindPosition(positionBuffer, programInfo2, gl4) {
    gl4.bindBuffer(gl4.ARRAY_BUFFER, positionBuffer);
    gl4.vertexAttribPointer(
      programInfo2.attribLocations.vertexPosition,
      3,
      gl4.FLOAT,
      false,
      0,
      0
    );
    gl4.enableVertexAttribArray(
      programInfo2.attribLocations.vertexPosition
    );
  }
  function bindColor(colorBuffer, programInfo2, gl4) {
    gl4.bindBuffer(gl4.ARRAY_BUFFER, colorBuffer);
    gl4.vertexAttribPointer(
      programInfo2.attribLocations.vertexColor,
      4,
      gl4.FLOAT,
      false,
      0,
      0
    );
    gl4.enableVertexAttribArray(
      programInfo2.attribLocations.vertexColor
    );
  }
  function drawElements(gl4) {
    gl4.drawElements(
      gl4.TRIANGLES,
      6,
      gl4.UNSIGNED_SHORT,
      0
    );
  }
  function initShaderProgram(gl4, vsSource, fsSource) {
    const vertexShader = loadShader(gl4, gl4.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl4, gl4.FRAGMENT_SHADER, fsSource);
    const shaderProgram = gl4.createProgram();
    gl4.attachShader(shaderProgram, vertexShader);
    gl4.attachShader(shaderProgram, fragmentShader);
    gl4.linkProgram(shaderProgram);
    if (!gl4.getProgramParameter(shaderProgram, gl4.LINK_STATUS)) {
      alert("Unable to initialize the shader program: " + gl4.getProgramInfoLog(shaderProgram));
      return null;
    }
    return shaderProgram;
  }
  function loadShader(gl4, type, source) {
    const shader = gl4.createShader(type);
    gl4.shaderSource(shader, source);
    gl4.compileShader(shader);
    if (!gl4.getShaderParameter(shader, gl4.COMPILE_STATUS)) {
      alert("An error occurred compiling the shaders: " + gl4.getShaderInfoLog(shader));
      gl4.deleteShader(shader);
      return null;
    }
    return shader;
  }
  function resizeCanvasToDisplaySize() {
    const displayWidth = canvas2.clientWidth;
    const displayHeight = canvas2.clientHeight;
    const needResize = canvas2.width !== displayWidth || canvas2.height !== displayHeight;
    if (needResize) {
      canvas2.width = displayWidth;
      canvas2.height = displayHeight;
    }
    return needResize;
  }
  function render(newTime) {
    newTime *= 1e-3;
    const dt = newTime - time;
    time = newTime;
    resizeCanvasToDisplaySize();
    gl2.enable(gl2.DEPTH_TEST);
    gl2.enable(gl2.SCISSOR_TEST);
    gl2.depthFunc(gl2.LEQUAL);
    gl2.clear(gl2.COLOR_BUFFER_BIT | gl2.DEPTH_BUFFER_BIT);
    canvas2.style.transform = `translateY(${window.scrollY}px)`;
    for (let i = 0; i < scenes.length; i++) {
      const { cube, div, spring, buffers, perspectiveMatrix } = scenes[i];
      const rect = div.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > canvas2.clientHeight || rect.right < 0 || rect.left > canvas2.clientWidth) {
        continue;
      }
      const width = rect.right - rect.left;
      const height = rect.bottom - rect.top;
      const left = rect.left;
      const bottom = canvas2.clientHeight - rect.bottom;
      gl2.viewport(left, bottom, width, height);
      gl2.scissor(left, bottom, width, height);
      if (cube.animationQueue[0]) {
        spring.target = cube.animationQueue.length * 90;
        spring.update(dt);
        if (spring.position >= 90) {
          cube.affectedStickers = Array(stickers(cube.layers)).fill(false);
          spring.position = 0;
          cube.animationQueue.shift();
        }
      }
      const animation = cube.animationQueue[0];
      let stickers2 = chooseStickers(cube);
      let _transformSingleton = singleton();
      let _rotateSingleton = singleton();
      for (let i2 = 0; i2 < stickers(cube.layers); i2++) {
        let object = buffers[i2];
        const transform = animation && animation.stickersToAnimate[i2] && settings.animateTurns ? _transformSingleton(() => {
          return rotate(
            create(),
            perspectiveMatrix,
            spring.position * Math.PI / 180,
            animation.axis
          );
        }) : perspectiveMatrix;
        gl2.uniformMatrix4fv(
          programInfo.uniformLocations.transformMatrix,
          false,
          transform
        );
        const rotation = animation && animation.stickersToAnimate[i2] && settings.animateTurns ? _rotateSingleton(() => {
          const rotateMat = create();
          return rotate(
            rotateMat,
            rotateMat,
            spring.position * Math.PI / 180,
            animation.axis
          );
        }) : create();
        gl2.uniformMatrix4fv(
          programInfo.uniformLocations.rotateMatrix,
          false,
          rotation
        );
        gl2.bindBuffer(gl2.ELEMENT_ARRAY_BUFFER, object.indexBuffer);
        if (settings.showBody) {
          bindPosition(object.noGapPositionBuffer, programInfo, gl2);
          bindColor(cube.underStickers[i2].buffer, programInfo, gl2);
          drawElements(gl2);
        }
        bindPosition(object.positionBuffer, programInfo, gl2);
        bindColor(stickers2[i2].buffer, programInfo, gl2);
        drawElements(gl2);
        if (settings.hintStickers) {
          bindPosition(object.hintPositionBuffer, programInfo, gl2);
          bindColor(stickers2[i2].buffer, programInfo, gl2);
          drawElements(gl2);
        }
      }
    }
    requestAnimationFrame(render);
  }
  function chooseStickers(cube) {
    if (!settings.animateTurns) {
      return cube.stickers;
    }
    if (cube.animationQueue[0]) {
      return cube.animationQueue[0].stickers;
    }
    return cube.stickers;
  }

  // src/scripts/slide.ts
  var NARROW = 725;
  var opened = false;
  function open(ele) {
    opened = true;
    ele.style.display = "flex";
    ele.classList.add("slideLeftOpen");
    if (document.documentElement.clientWidth < NARROW) {
      ele.classList.add("slideLeftClosed");
    } else {
      ele.classList.remove("slideLeftClosed");
    }
  }
  function close(ele) {
    opened = false;
    if (document.documentElement.clientWidth < NARROW) {
      ele.classList.add("slideLeftClosed");
      ele.classList.remove("slideLeftOpen");
      ele.style.display = "flex";
    } else {
      ele.style.display = "none";
    }
  }
  function renderHeader1(title) {
    return createElement("div", {
      className: "row",
      style: "justify-content: space-between; width: 100%; padding-bottom: 16px;",
      children: [
        createElement("p", {
          style: "font-weight: bold; padding-right: 2rem;",
          innerHTML: title
        }),
        createElement("div", {
          innerHTML: `<svg id="closeDrawer" class="xButton" width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="black">
                    <path id="closeDrawer" d="M 2 2 L 22 22 M 22 2 L 2 22" stroke-width="2" />
                </svg>`
        })
      ]
    });
  }

  // src/scripts/ui.ts
  function addListenersForLeftModal() {
    const drawer = document.querySelector(".slideRight");
    let isOpen = false;
    function updateDrawer(open2) {
      isOpen = open2;
      if (isOpen) {
        drawer.classList.add("slideRightOpen");
        return;
      }
      drawer.classList.remove("slideRightOpen");
    }
    document.addEventListener("click", (event) => {
      const ele = event.target;
      if (ele === document.querySelector("#menu")) {
        updateDrawer(true);
        return;
      }
      if (isOpen && !ele.closest(".slideRight")) {
        updateDrawer(false);
      }
    });
    document.querySelector("#closeMenu").addEventListener("click", () => {
      updateDrawer(false);
    });
    document.querySelector("#learnButton").addEventListener("click", () => {
      document.location.href = "learn.html";
    });
    document.querySelector("#playButton").addEventListener("click", () => {
      document.location.href = "play.html";
    });
    document.querySelector("#trainButton").addEventListener("click", () => {
      document.location.href = "train.html";
    });
    document.querySelector("#cubleButton").addEventListener("click", () => {
      document.location.href = "cuble.html";
    });
  }

  // src/scripts/train.ts
  var canvas3 = document.querySelector("canvas");
  var gl3 = canvas3.getContext("webgl");
  var algData = require_alg_data();
  var state = {
    keyboard: getKeyboard(),
    user: null,
    showSolution: false,
    settingsOpen: false,
    preRotation: "",
    algSet: null,
    algs: [],
    preAUF: "",
    postAUF: ""
  };
  function findAlgSet(name4) {
    return algData.find((set) => set.name === name4);
  }
  function applyPre(alg, auf) {
    if (auf) {
      return `${auf} ${alg}`;
    }
    return alg;
  }
  function applyPost(alg, auf) {
    if (auf) {
      return `${alg} ${auf}`;
    }
    return alg;
  }
  function renderDrawer() {
    const drawerEle = document.querySelector("#rightDrawer");
    if (state.settingsOpen) {
      const optionsData = [
        { value: "", text: "White Green" },
        { value: "y'", text: "White Orange" },
        { value: "y2", text: "White Blue" },
        { value: "y", text: "White Red" },
        { value: "z2", text: "Yellow Green" },
        { value: "z2 y", text: "Yellow Orange" },
        { value: "x2", text: "Yellow Blue" },
        { value: "z2 y'", text: "Yellow Red" },
        { value: "x y2", text: "Green White" },
        { value: "x y", text: "Green Red" },
        { value: "x", text: "Green Yellow" },
        { value: "x y'", text: "Green Orange" },
        { value: "x'", text: "Blue White" },
        { value: "x' y", text: "Blue Red" },
        { value: "x' y2", text: "Blue Yellow" },
        { value: "x' y'", text: "Blue Orange" },
        { value: "z y", text: "Orange White" },
        { value: "z", text: "Orange Green" },
        { value: "z y'", text: "Orange Yellow" },
        { value: "z y2", text: "Orange Blue" },
        { value: "z' y'", text: "Red White" },
        { value: "z'", text: "Red Green" },
        { value: "z' y", text: "Red Yellow" },
        { value: "z' y2", text: "Red Blue" }
      ];
      setOptions(drawerEle, {
        innerHTML: "",
        children: [
          renderHeader1("Settings"),
          createElement("p", {
            innerHTML: "Algorithm Set",
            className: "mt-4"
          }),
          createElement("select", {
            onchange: (e) => {
              const setName = e.target.value;
              state.algSet = findAlgSet(setName);
              setAlgSet(setName);
              changeAlgSet();
            },
            children: algData.map((algSet2) => {
              return createElement("option", {
                value: algSet2.name,
                selected: algSet2.name === state.algSet.name,
                innerHTML: algSet2.name
              });
            })
          }),
          createElement("p", {
            innerHTML: "Orientation",
            className: "mt-4"
          }),
          createElement("select", {
            onchange: (e) => {
              const preRotation = e.target.value;
              state.preRotation = preRotation;
              setOrientation(preRotation);
              loadCurrAlg();
            },
            children: optionsData.map((option) => {
              return createElement("option", {
                value: option.value,
                selected: option.value === state.preRotation,
                innerHTML: option.text
              });
            })
          }),
          createElement("p", {
            innerHTML: "Keyboard",
            className: "mt-4"
          }),
          createElement("input", {
            type: "checkbox",
            checked: getKeyboard(),
            onchange: (e) => {
              const checked = e.target.checked;
              setKeyboard(checked);
              state.keyboard = checked;
              renderTrainPage();
            }
          })
        ]
      });
      open(drawerEle);
    } else {
      close(drawerEle);
    }
  }
  function changeAlgSet() {
    const algSet2 = state.algSet;
    if (algSet2.cube == "2x2") {
      let scene = scenes[0];
      scene.cube.setNumOfLayers(2);
      scene.buffers = createBuffers(gl3, scenes[0].cube, scenes[0].perspectiveMatrix);
      scene.cube.solve();
    } else if (algSet2.cube == "3x3") {
      let scene = scenes[0];
      scene.cube.setNumOfLayers(3);
      scene.buffers = createBuffers(gl3, scenes[0].cube, scenes[0].perspectiveMatrix);
      scene.cube.solve();
    }
    getTrainingAlgs(state.user.uid, algSet2.name).then((data) => {
      let filtered = data.TrainingAlgsRecord.TrainingAlgs.filter((storedAlg) => {
        return algSet2.algs.find((alg) => storedAlg.Alg === alg);
      });
      algSet2.algs.forEach((alg) => {
        const found = filtered.find((storedAlg) => storedAlg.Alg === alg);
        if (!found) {
          filtered.push({ Score: 0, Alg: alg });
        }
      });
      state.algs = filtered;
      loadCurrAlg();
    });
  }
  function generateRandAUF() {
    const options = ["", "U", "U2", "U'"];
    return options[Math.floor(Math.random() * 4)];
  }
  function loadCurrAlg() {
    let alg = state.algs[0].Alg;
    state.preAUF = generateRandAUF();
    alg = applyPre(alg, state.preAUF);
    state.postAUF = generateRandAUF();
    alg = applyPost(alg, state.postAUF);
    scenes[0].cube.solve();
    scenes[0].cube.execAlg(state.preRotation);
    state.algSet.inactive.forEach((stickerIdx) => {
      setColor(scenes[0].cube.stickers[stickerIdx], GRAY);
    });
    scenes[0].cube.execAlgReverse(alg);
  }
  function retry() {
    state.showSolution = false;
    loadCurrAlg();
    renderTrainPage();
  }
  function nextAlg(promote) {
    if (promote) {
      promoteAlg(state.algs);
    } else {
      demoteAlg(state.algs);
    }
    writeTrainingAlgs(state.user.uid, state.algSet.name, state.algs);
    state.showSolution = false;
    loadCurrAlg();
    renderTrainPage();
  }
  var sceneDiv = createElement("div", {
    id: "scene",
    className: "glDiv mt-4"
  });
  var showSolutionComponent = new Component2(
    (prev, next) => prev !== next,
    (showSolution) => showSolution ? createElement("button", {
      className: "btn-secondary mt-4",
      onclick: () => {
        state.showSolution = false;
        renderTrainPage();
      },
      innerHTML: applyPre(state.algs[0].Alg, state.preAUF)
    }) : createElement("button", {
      className: "btn-primary mt-4",
      title: "Press space to show solution",
      onclick: () => {
        state.showSolution = true;
        renderTrainPage();
      },
      innerHTML: "Show solution"
    })
  );
  var retryAndSadAndHappy = createElement("div", {
    className: "row mt-4 gap-6",
    children: [
      createElement("div", {
        className: "bg-neutral-700 hover:bg-neutral-800 hover:cursor-pointer",
        style: "width: 48px; height: 48px; padding: 4px; box-shadow: 0 0 4px black; border-radius: 50%;",
        title: "Press backspace to retry the algorithm",
        onclick: () => retry(),
        innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" stroke="white" stroke-width="3" fill-opacity="0" viewBox="0 0 50 50">
                <path d="M 42,32 A 20,20,0,1,1,42,18"/>
                <path fill="white" fill-opacity="1" d="M 44,22 L 34,17 L 45,12  Z"/>
            </svg>`
      }),
      createElement("div", {
        className: "bg-red-500 hover:bg-red-700 hover:cursor-pointer",
        style: "max-width: 48px; max-height: 48px; border: none; box-shadow: 0 0 4px black; border-radius: 50%",
        onclick: () => nextAlg(false),
        innerHTML: `<svg width="100%" height="100%" stroke="white" stroke-width="3" fill-opacity="0" viewBox="0 0 50 50" xml:space="preserve">
                <circle cx="25" cy="25" r="22" />
                <circle cx="18" cy="20" r="3" />
                <circle cx="32" cy="20" r="3" />
                <path d="M 15,35 Q 25,28 35,35"/>
            </svg>`
      }),
      createElement("div", {
        className: "bg-green-500 hover:bg-green-700 hover:cursor-pointer",
        style: "max-width: 48px; max-height: 48px; border: none; box-shadow: 0 0 4px black; border-radius: 50%",
        onclick: () => nextAlg(true),
        innerHTML: `<svg width="100%" height="100%" stroke="white" stroke-width="3" fill-opacity="0" viewBox="0 0 50 50" xml:space="preserve">
                <circle cx="25" cy="25" r="22" />
                <circle cx="18" cy="20" r="3" />
                <circle cx="32" cy="20" r="3" />
                <path d="M 15,33 Q 25,40 35,33"/>
            </svg>`
      })
    ]
  });
  var rightDrawer = createElement("div", {
    id: "rightDrawer",
    className: "slideLeft slideLeftClosed col"
  });
  function renderTrainPage() {
    var _a;
    let scene = scenes.length > 0 ? scenes[0] : null;
    querySelector("#iconContainer", { style: "display: flex;" });
    querySelector("#root", {
      innerHTML: "",
      children: [
        createElement("div", {
          className: "row slideWrapper",
          children: [
            createElement("div", {
              className: "col w-full h-full",
              children: [
                sceneDiv,
                showSolutionComponent.render(state.showSolution),
                retryAndSadAndHappy,
                createElement("div", { style: "flex-grow: 1" }),
                state.keyboard ? renderMobileKeyboard((code) => {
                  scene.cube.matchKeyCodeToTurn(code);
                }) : null
              ]
            }),
            rightDrawer
          ]
        })
      ]
    });
    if (scene)
      return;
    scene = newScene("#scene");
    scenes.push(scene);
    scene.cube.solve();
    scene.dragEnabled = true;
    startLoop();
    document.addEventListener("keydown", (event) => {
      if (event.key === " ") {
        event.preventDefault();
        state.showSolution = true;
        renderTrainPage();
      } else if (event.key == "Backspace") {
        retry();
      }
      if (scene.cube.matchKeyToTurn(event)) {
        return;
      }
    });
    const storedAlgSet = getAlgSet();
    state.algSet = (_a = findAlgSet(storedAlgSet)) != null ? _a : algData[0];
    state.preRotation = getOrientation();
    changeAlgSet();
    window.addEventListener("resize", () => {
      renderDrawer();
    });
    document.addEventListener("click", (event) => {
      const target = event.target;
      if (target.id === "closeDrawer") {
        close(document.querySelector("#rightDrawer"));
      } else if (target.id === "icon0") {
        const [modal, modalBg] = renderModal();
        setOptions(modal, {
          children: [
            createElement("p", {
              innerHTML: `Signed in as ${state.user.email}`,
              className: "mt-4"
            }),
            createElement("button", {
              className: "btn-primary mt-4",
              innerHTML: "Sign out",
              onclick: () => {
                signOut2();
                modalBg.remove();
                state.user = null;
                renderLandingPage();
              }
            })
          ]
        });
        document.body.appendChild(modalBg);
      } else if (target.id === "icon1") {
        state.settingsOpen = true;
        renderDrawer();
      }
    });
    document.addEventListener("change", (event) => {
      const target = event.target;
      if (target.id === "orientationSelect") {
        state.preRotation = target.value;
        loadCurrAlg();
        setOrientation(target.value);
      }
    });
  }
  function renderLandingPage() {
    querySelector("#iconContainer", { style: "display: none;" });
    const emailInput = renderEmailInput();
    const passwordInput = renderPasswordInput();
    const root = document.querySelector("#root");
    root.innerHTML = "";
    setOptions(root, {
      className: "col w-full h-full overflow-x-hidden overflow-y-auto",
      children: [
        createElement("div", {
          className: "flex flex-col w-full h-full p-4 max-w-xl",
          children: [
            createElement("h1", {
              innerHTML: "Algorithm Trainer",
              className: "text-white"
            }),
            createElement("p", {
              innerHTML: "Learn algorithms at lightning speed",
              className: "text-gray-300 mt-4 font-bold"
            }),
            createElement("h2", {
              innerHTML: "1. Memorize faster",
              className: "text-white mt-4"
            }),
            createElement("ul", {
              children: [
                createElement("li", {
                  innerHTML: "Get an algorithm right, and you'll see it less often.",
                  className: "text-white"
                }),
                createElement("li", {
                  innerHTML: "Get an algorithm wrong, and you'll see it more often.",
                  className: "text-white"
                })
              ]
            }),
            createElement("h2", {
              innerHTML: "2. Virtual cube",
              className: "text-white"
            }),
            createElement("p", {
              innerHTML: "To turn the cube, you can click and drag. Or you can use a keyboard",
              className: "text-white mt-4"
            }),
            createElement("p", {
              innerHTML: "Virtual cubes are better because:",
              className: "text-white mt-4"
            }),
            createElement("ul", {
              children: [
                createElement("li", {
                  innerHTML: "You'll never have to scramble a cube again",
                  className: "text-white"
                }),
                createElement("li", {
                  innerHTML: "You can practice anywhere, anytime",
                  className: "text-white"
                })
              ]
            }),
            state.user ? createElement("button", {
              innerHTML: "Get Started",
              className: "btn-primary",
              onclick: () => {
                renderTrainPage();
              }
            }) : createElement("div", {
              className: "self-center col rounded-xl shadow-md shadow-slate-400 p-4",
              children: [
                renderGoogleSignInButton((user2) => {
                  state.user = user2;
                  renderLandingPage();
                }),
                createElement("div", { style: "height: 1rem" }),
                createElement("div", { className: "bg-gray-300 w-full h-0.5" }),
                createElement("div", { style: "height: 1rem" }),
                createElement("p", { innerHTML: "Or use email and password", style: "color: white;" }),
                createElement("div", { style: "height: 1rem" }),
                emailInput,
                createElement("div", { style: "height: 1rem" }),
                passwordInput,
                createElement("div", { style: "height: 1rem" }),
                createElement("div", {
                  className: "row",
                  children: [
                    renderCreateAccountButton(emailInput, passwordInput, (user2) => {
                      state.user = user2;
                      renderLandingPage();
                    }),
                    createElement("div", { style: "width: 1rem" }),
                    renderSignInButton(emailInput, passwordInput, (user2) => {
                      state.user = user2;
                      renderLandingPage();
                    })
                  ]
                })
              ]
            }),
            createElement("div", { style: "min-height: 1rem" })
          ]
        })
      ]
    });
  }
  function main() {
    addListenersForLeftModal();
    state.user = initialAuthCheck();
    renderLandingPage();
  }
  main();
})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//# sourceMappingURL=train.js.map
