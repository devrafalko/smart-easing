var SmartEasing=function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=2)}([function(module,exports,__webpack_require__){module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";(function(e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){return e||window}.bind(void 0);t.exports=function(t,e){var o,u=arguments.length>=2,i="string"==typeof e,f="function"==typeof e,c=void 0===e,s=void 0===t,l=null===e,a=null===t,y="object"===(void 0===t?"undefined":n(t)),d=!l&&"object"===(void 0===e?"undefined":n(e))&&"Array"===e.constructor.name,p=e&&"RegExp"===e.constructor.name,m=/^\[object Arguments\]$/i;if(!u)return!1;if(l)return a;if(c)return void 0===t;if(f)return!s&&!a&&Object.getPrototypeOf(t).constructor.name===e.name;if(d){if(!e.length)return!0;var b=!0,v=!1,g=void 0;try{for(var j,O=e[Symbol.iterator]();!(b=(j=O.next()).done);b=!0){var h=j.value;if(null===h&&a)return!0;if(void 0===h&&s)return!0;if(!a&&!s&&null!==h&&void 0!==h&&Object.getPrototypeOf(t).constructor.name===h.name)return!0}}catch(t){v=!0,g=t}finally{try{!b&&O.return&&O.return()}finally{if(v)throw g}}return!1}if(i){var x=e.toLowerCase().split("|");return!!(1===x.length&&""===x[0]||x.some(function(t){return"any"===t}))||!(!x.some(function(t){return"truthy"===t})||!t)||!(!x.some(function(t){return"falsy"===t})||t)||!(!s||!x.some(function(t){return"undefined"===t}))||!(!a||!x.some(function(t){return"null"===t}))||!a&&void 0!==t&&(o=Object.getPrototypeOf(t).constructor,!!(m.test(t.toString())&&o&&"Object"===o.name&&x.some(function(t){return"arguments"===t}))||!!(x.some(function(t){return"instance"===t})&&y&&o&&o!==r()[o.name])||x.some(function(e){return e===Object.getPrototypeOf(t).constructor.name.toLowerCase()}))}return!!p&&(!(!e.test("any")&&!e.test(""))||!(!e.test("truthy")||!t)||!(!e.test("falsy")||t)||!(!e.test("undefined")||!s)||!(!e.test("null")||!a)||!a&&void 0!==t&&(o=Object.getPrototypeOf(t).constructor,!!(e.test("arguments")&&o&&"Object"===o.name&&m.test(t.toString()))||!!(e.test("instance")&&y&&o&&o!==r()[o.name])||e.test(Object.getPrototypeOf(t).constructor.name)))}}).call(this,n(0))}])},function(module){module.exports={linear:[.5,.5,1,1],"ease-in-a":[.3,.3,1,1],"ease-in-b":[.1,.1,1,1],"ease-in-c":[.1,.1,.2,.2,1,1],"ease-in-d":[.05,.05,.1,.1,1,1],"ease-out-a":[.7,.7,1,1],"ease-out-b":[.9,.9,1,1],"ease-out-c":[.8,.8,.9,.9,1,1],"ease-out-d":[.9,.9,.95,.95,1,1],"ease-in-out-a":[.15,.15,.85,.85,1,1],"ease-in-out-b":[.05,.05,.95,.95,1,1],"ease-in-out-c":[.05,.05,.15,.15,.85,.85,.95,.95,1,1],"ease-in-out-d":[0,.1,0,-.1,1,1.1,1,.9,1,1],"sharp-out-in-a":[.45,.45,.55,.55,1,1],"sharp-out-in-b":[.55,.55,.45,.45,1,1],"sharp-out-in-c":[.33,.75,.1,.2,.9,.8,.66,.25,1,1],"sharp-out-in-d":[.2,.8,.5,.2,.5,.8,.8,.2,1,1],"ease-out-in-a":[.05,0,1,0,0,1,.95,1,1,1],"ease-out-in-b":[.1,0,1,.5,0,.5,.9,1,1,1],"ease-out-in-c":[.25,0,1,0,0,1,.75,1,1,1],"ease-out-in-d":[.05,0,1,1.5,0,-.5,.95,1,1,1],"swing-in-a":[0,-.15,1,-.15,1,1],"swing-in-b":[0,-.2,.8,-.2,1,1],"swing-in-c":[0,-.3,.5,-.3,1,1],"swing-in-d":[0,-.5,0,-.5,1,1],"swing-out-a":[0,1.15,1,1.15,1,1],"swing-out-b":[.2,1.2,1,1.2,1,1],"swing-out-c":[.5,1.3,1,1.3,1,1],"swing-out-d":[1,1.5,1,1.5,1,1],"swing-in-out-a":[0,-.5,1,1.5,1,1],"swing-in-out-b":[0,-.25,.05,-.25,.5,.5,.95,1.25,1,1.25,1,1],"swing-in-out-c":[0,-.5,.1,-.5,.9,1.5,1,1.5,1,1],"swing-in-out-d":[0,-.5,.05,-.5,.1,-.5,.9,1.5,.95,1.5,1,1.5,1,1],"sharp-swing-in-a":[.4,-.05,.3,-.05,1,1],"sharp-swing-in-b":[.4,-.15,.3,-.15,1,1],"sharp-swing-in-c":[.5,-.35,.25,-.35,1,1],"sharp-swing-in-d":[.66,-.5,0,-.5,1,1],"sharp-swing-out-a":[.7,1.05,.6,1.05,1,1],"sharp-swing-out-b":[.7,1.15,.6,1.15,1,1],"sharp-swing-out-c":[.75,1.35,.5,1.35,1,1],"sharp-swing-out-d":[1,1.5,.33,1.5,1,1],"sharp-swing-in-out-a":[.3,-.2,0,-.2,1,1.2,.7,1.2,1,1],"sharp-swing-in-out-b":[.2,-.3,.25,-.3,.75,1.3,.8,1.3,1,1],"sharp-swing-in-out-c":[.3,-.4,.15,-.4,0,-.4,1,1.4,.85,1.4,.7,1.4,1,1],"sharp-swing-in-out-d":[.25,-.5,.2,-.5,.1,-.5,.9,1.5,.8,1.5,.75,1.5,1,1],"lurk-in-a":[.35,.1,.7,.25,.7,.3,1,1],"lurk-in-b":[.25,.1,.6,.25,.6,.3,1,1],"lurk-in-c":[.25,.05,.6,.2,.45,.25,1,1],"lurk-in-d":[.3,.05,.6,.1,.3,.15,1,1],"lurk-out-a":[.3,.7,.3,.75,.65,.9,1,1],"lurk-out-b":[.4,.7,.5,.75,.75,.9,1,1],"lurk-out-c":[.55,.75,.4,.8,.75,.95,1,1],"lurk-out-d":[.7,.85,.4,.9,.7,.95,1,1],"step-in-out-a":[0,.8,0,-.5,1,1.5,1,.2,1,1],"step-in-out-b":[0,.85,0,.1,0,0,1,1,1,.9,1,.15,1,1],"step-in-out-c":[0,1,0,.1,0,-.33,1,1.33,1,.9,1,0,1,1],"step-in-out-d":[0,1.5,0,-.5,0,-.5,1,1.5,1,1.5,1,-.5,1,1],"jump-a":[.4,1.33,.5,1.33,1,0],"jump-b":[.6,1.33,.5,1.33,1,0],"jump-c":[.7,1,.4,1.33,.7,1,1,0],"jump-d":[.85,1,.4,1.33,.6,1,1,0],"sharp-jump-a":[0,0,.8,1.15,.5,1.5,.2,1.15,1,0,1,0],"sharp-jump-b":[0,0,.6,1.15,.5,1.5,.4,1.15,1,0,1,0],"sharp-jump-c":[0,.2,0,.5,1,1.5,0,1.5,1,.5,1,.2,1,0],"sharp-jump-d":[0,.2,0,.5,0,1.5,1,1.5,1,.5,1,.2,1,0],"pulse-a":[.55,1.33,1,1.33,1,0],"pulse-b":[.8,1.33,1,1.33,1,0],"pulse-c":[.95,1.33,1,1.33,1,0],"pulse-d":[.96,1.15,.98,1.15,1,1.15,1,0]}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var of_type_min=__webpack_require__(0),of_type_min_default=__webpack_require__.n(of_type_min);var class_modes=new function Modes(modes){for(var mode in function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Modes),modes)this[mode]=Object.freeze(modes[mode]);return Object.freeze(this)}(__webpack_require__(1));function class_state_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}var _State=function(){function _State(){class_state_classCallCheck(this,_State),this.coords=0,this.paused=!1,this.pending=!1,this.started=!1,this.finished=!1,this.public=this._public}return _createClass(_State,[{key:"_public",get:function(){var _this=this;return new(function(){function State(){class_state_classCallCheck(this,State)}return _createClass(State,[{key:"coords",get:function(){return _this.coords}},{key:"paused",get:function(){return _this.paused}},{key:"pending",get:function(){return _this.pending}},{key:"started",get:function(){return _this.started}},{key:"finished",get:function(){return _this.finished}}]),State}())}}]),_State}();function class_time_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function class_time_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function class_time_createClass(Constructor,protoProps,staticProps){return protoProps&&class_time_defineProperties(Constructor.prototype,protoProps),staticProps&&class_time_defineProperties(Constructor,staticProps),Constructor}var _Time=function(){function _Time(){class_time_classCallCheck(this,_Time),this.current={elapsed:0,remaining:0,delay:0,duration:0},this.all={elapsed:0,remaining:0,duration:0},this.public=this._public}return class_time_createClass(_Time,[{key:"_public",get:function(){var _this=this,current=new(function(){function Current(){class_time_classCallCheck(this,Current)}return class_time_createClass(Current,[{key:"elapsed",get:function(){return _this.current.elapsed}},{key:"remaining",get:function(){return _this.current.remaining}},{key:"delay",get:function(){return _this.current.delay}},{key:"duration",get:function(){return _this.current.duration}}]),Current}()),all=new(function(){function All(){class_time_classCallCheck(this,All)}return class_time_createClass(All,[{key:"elapsed",get:function(){return _this.all.elapsed}},{key:"remaining",get:function(){return _this.all.remaining}},{key:"duration",get:function(){return _this.all.duration}}]),All}());return new(function(){function Time(){class_time_classCallCheck(this,Time)}return class_time_createClass(Time,[{key:"current",get:function(){return current}},{key:"all",get:function(){return all}}]),Time}())}}]),_Time}();function class_queue_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function class_queue_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function class_queue_createClass(Constructor,protoProps,staticProps){return protoProps&&class_queue_defineProperties(Constructor.prototype,protoProps),staticProps&&class_queue_defineProperties(Constructor,staticProps),Constructor}var _Queue=function(){function _Queue(){class_queue_classCallCheck(this,_Queue),this.index=0,this.current=0,this.next=0,this.previous=0,this.length=0,this.public=this._public}return class_queue_createClass(_Queue,[{key:"_public",get:function(){var _this=this;return new(function(){function Queue(){class_queue_classCallCheck(this,Queue)}return class_queue_createClass(Queue,[{key:"index",get:function(){return _this.index}},{key:"current",get:function(){return _this.current}},{key:"next",get:function(){return _this.next}},{key:"previous",get:function(){return _this.previous}},{key:"length",get:function(){return _this.length}}]),Queue}())}}]),_Queue}();function class_defaults_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function class_defaults_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function class_defaults_createClass(Constructor,protoProps,staticProps){return protoProps&&class_defaults_defineProperties(Constructor.prototype,protoProps),staticProps&&class_defaults_defineProperties(Constructor,staticProps),Constructor}var _Defaults=function(){function _Defaults(){class_defaults_classCallCheck(this,_Defaults),this.id=null,this.mode="linear",this.fps=32,this.smooth=!1,this.start=0,this.stop=1,this.autostart=!0,this.time=1e3,this.speed=void 0,this.delay=0,this.repeat=1,this.public=this._public}return class_defaults_createClass(_Defaults,[{key:"_public",get:function(){var _this=this;return new(function(){function Defaults(){class_defaults_classCallCheck(this,Defaults)}return class_defaults_createClass(Defaults,[{key:"id",get:function(){return _this.id},set:function(value){_this.id=value}},{key:"mode",get:function(){return _this.mode},set:function(value){_this.mode=value}},{key:"fps",get:function(){return _this.fps},set:function(value){_this.fps=value}},{key:"smooth",get:function(){return _this.smooth},set:function(value){_this.smooth=value}},{key:"start",get:function(){return _this.start},set:function(value){_this.start=value}},{key:"stop",get:function(){return _this.stop},set:function(value){_this.stop=value}},{key:"autostart",get:function(){return _this.autostart},set:function(value){_this.autostart=value}},{key:"time",get:function(){return _this.time},set:function(value){_this.time=value}},{key:"speed",get:function(){return _this.speed},set:function(value){_this.speed=value}},{key:"delay",get:function(){return _this.delay},set:function(value){_this.delay=value}},{key:"repeat",get:function(){return _this.repeat},set:function(value){_this.repeat=value}}]),Defaults}())}}]),_Defaults}();function class_motions_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function class_motions_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function class_motions_createClass(Constructor,protoProps,staticProps){return protoProps&&class_motions_defineProperties(Constructor.prototype,protoProps),staticProps&&class_motions_defineProperties(Constructor,staticProps),Constructor}var _Motions=function(){function _Motions(){class_motions_classCallCheck(this,_Motions),this.motions=[],this.public=this._public}return class_motions_createClass(_Motions,[{key:"list",value:function(){}},{key:"add",value:function(){}},{key:"_public",get:function(){var _this=this;return new(function(){function Motions(){class_motions_classCallCheck(this,Motions)}return class_motions_createClass(Motions,[{key:"add",value:function(){}},{key:"get",value:function(){}},{key:"has",value:function(){}},{key:"list",get:function(){return _this.list()}},{key:"reversed",get:function(){return _this.list().reverse()}},{key:"first",get:function(){return _this.list()[0]}},{key:"last",get:function(){var list=_this.list();return list[list.length-1]}},{key:"length",get:function(){return _this.list().length}}]),Motions}())}}]),_Motions}();function class_animation_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var class_animation_SmartEasing=function(){function _SmartEasing(config,modes){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,_SmartEasing),this.state=new _State,this.time=new _Time,this.queue=new _Queue,this.defaults=new _Defaults,this.motions=new _Motions,this.modes=modes,this.events={}}var Constructor,protoProps,staticProps;return Constructor=_SmartEasing,(protoProps=[{key:"first",value:function(){}},{key:"last",value:function(){}},{key:"previous",value:function(){}},{key:"next",value:function(){}},{key:"go",value:function(){}},{key:"chain",value:function(){}},{key:"all",value:function(){}},{key:"reverse",value:function(){}},{key:"boomerang",value:function(){}},{key:"repeat",value:function(){}},{key:"pause",value:function(){}},{key:"resume",value:function(){}},{key:"reset",value:function(){}}])&&class_animation_defineProperties(Constructor.prototype,protoProps),staticProps&&class_animation_defineProperties(Constructor,staticProps),_SmartEasing}();function smart_easing_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function smart_easing_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function smart_easing_createClass(Constructor,protoProps,staticProps){return protoProps&&smart_easing_defineProperties(Constructor.prototype,protoProps),staticProps&&smart_easing_defineProperties(Constructor,staticProps),Constructor}__webpack_require__.d(__webpack_exports__,"default",function(){return smart_easing_SmartEasing});var smart_easing_SmartEasing=function(){function SmartEasing(config){smart_easing_classCallCheck(this,SmartEasing);var _animation=new class_animation_SmartEasing(config,class_modes);return new(function(){function Animation(){smart_easing_classCallCheck(this,Animation)}return smart_easing_createClass(Animation,[{key:"first",value:function(){return _animation.first.apply(_animation,arguments)}},{key:"last",value:function(){return _animation.last.apply(_animation,arguments)}},{key:"previous",value:function(){return _animation.previous.apply(_animation,arguments)}},{key:"next",value:function(){return _animation.next.apply(_animation,arguments)}},{key:"go",value:function(){return _animation.go.apply(_animation,arguments)}},{key:"chain",value:function(){return _animation.chain.apply(_animation,arguments)}},{key:"all",value:function(){return _animation.all.apply(_animation,arguments)}},{key:"reverse",value:function(){return _animation.reverse.apply(_animation,arguments)}},{key:"boomerang",value:function(){return _animation.boomerang.apply(_animation,arguments)}},{key:"repeat",value:function(){return _animation.repeat.apply(_animation,arguments)}},{key:"pause",value:function(){return _animation.pause.apply(_animation,arguments)}},{key:"resume",value:function(){return _animation.resume.apply(_animation,arguments)}},{key:"reset",value:function(){return _animation.reset.apply(_animation,arguments)}},{key:"modes",get:function(){return _animation.modes}},{key:"state",get:function(){return _animation.state.public}},{key:"time",get:function(){return _animation.time.public}},{key:"queue",get:function(){return _animation.queue.public}},{key:"defaults",get:function(){return _animation.defaults.public}},{key:"motions",get:function(){return _animation.motions.public}},{key:"beforeAll",set:function(f){of_type_min_default()(f,Function)&&(_animation.events.beforeAll=f)},get:function(){var event=_animation.events.beforeAll;return of_type_min_default()(event,Function)?event:null}},{key:"afterAll",set:function(f){of_type_min_default()(f,Function)&&(_animation.events.afterAll=f)},get:function(){var event=_animation.events.afterAll;return of_type_min_default()(event,Function)?event:null}},{key:"beforeEach",set:function(f){of_type_min_default()(f,Function)&&(_animation.events.beforeEach=f)},get:function(){var event=_animation.events.beforeEach;return of_type_min_default()(event,Function)?event:null}},{key:"afterEach",set:function(f){of_type_min_default()(f,Function)&&(_animation.events.afterEach=f)},get:function(){var event=_animation.events.afterEach;return of_type_min_default()(event,Function)?event:null}},{key:"afterDelay",set:function(f){of_type_min_default()(f,Function)&&(_animation.events.afterDelay=f)},get:function(){var event=_animation.events.afterDelay;return of_type_min_default()(event,Function)?event:null}},{key:"render",set:function(f){of_type_min_default()(f,Function)&&(_animation.events.render=f)},get:function(){var event=_animation.events.render;return of_type_min_default()(event,Function)?event:null}},{key:"onPause",set:function(f){of_type_min_default()(f,Function)&&(_animation.events.onPause=f)},get:function(){var event=_animation.events.onPause;return of_type_min_default()(event,Function)?event:null}},{key:"onResume",set:function(f){of_type_min_default()(f,Function)&&(_animation.events.onResume=f)},get:function(){var event=_animation.events.onResume;return of_type_min_default()(event,Function)?event:null}}]),Animation}())}return smart_easing_createClass(SmartEasing,null,[{key:"modes",get:function(){return class_modes}}]),SmartEasing}()}]).default;