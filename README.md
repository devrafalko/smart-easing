### In This Documentation
1. [Description](#description)
2. [Implementation](#implementation)
3. [Create new animation](#create-new-animation)  
4. [Motion properties](#motion-properties)  
5. [Create the chain of motion templates](#create-the-chain-of-motion-templates)  
  a. [Chaining methods](#chaining-methods)  
  b. [Motion indicators](#motion-indicators)  
  c. [Custom motion templates](#custom-motion-templates)  
  d. [Trimming the motion templates from the queue](#trimming-the-motion-templates-from-the-queue)  
  e. [Modifying the motion templates on the run](#modifying-the-motion-templates-on-the-run)
6. [Control the motion flow](#control-the-motion-flow)  
  a. [Control methods](#control-methods)  
  b. [Control events](#control-events)  
  c. [Control getters](#control-getters)
7. [[Motion] instance](#motion-instance)
8. [Break the animation](#break-the-animation)
9. [Samples](#samples)

# Description

The `smart-easing` library works like CSS `animation` and `transition`. It computes the easing flow of the **number** from its initial value to the final one in the specified time interval. You can use the `smart-easing` library:
* anywhere that CSS `animation` and `transition` is limited
* to control the DOM elements flow via JavaScript
* to animate the CSS gradients
* to animate Canvas *(eg. the graphs)*
* to display the counting out numbers smoothly

The computed easing numerical value can be attached to some DOM or Canvas element to control its flow by rerendering it in the specified number of frames per second. The `smart-easing` provides a set of methods and events to control the animation. It allows to create the motion templates and combine them into the chains. It also provides the default set of 69 easing modes.

Check out the **[easing simulator](https://devrafalko.github.io/smart-easing/simulator)** that shows how the `smart-easing` works on DOM and Canvas samples with the built-in easing modes.

Also check out the `smart-easing` with the following **examples**:
  * [DOM elements flow]()
  * [Canvas flow]()
  * [CSS gradient flow]()
  * [numerical values counting out]()

# Implementation

#### with NodeJS
`npm install smart-easing --save`

```javascript
const SmartEasing = require('smart-easing');
const animation = new SmartEasing(/*...*/);
```

#### with Browser

#### Add `smart-easing.js` library to the HTML file.
The library is located in `./dist/smart-easing.js` directory.  
It is a webpack&babel bundled cross-browser library version.  
The library is accessible as `SmartEasing` variable in the global *(window)* scope.
```html
<head>
  <script src='smart-easing.js'></script>
  <script>
     var animation = new SmartEasing(/*...*/);
  </script>
</head>
```

# Create new animation

The `smart-easing` is a **constructor**.  
Use the `new` keyword to create the new animation.  

```javascript
const SmartEasing = require('smart-easing');
const menu = document.getElementById('menu');

const animation = new SmartEasing({
  render: (value) => {
    menu.style.height = `${value}px`;
  },
  defaults:{
    mode: 'ease-in-out',
    fps: 32,
    start: 0,
    time: 200,
    delay: 50,
    smooth: true
  },
  motions:[
    {
      id: 'open',
      stop: 500,
    },
    {
      id: 'close',
      stop: 0
    }
  ]
});
```

The **constructor** takes one [Object] argument with the following properties:
### `render`
**Type:** [Function|null]  
**Default:** `null`
* It lets to attach the computed easing numerical value to some DOM or Canvas element
* The [Function] `render` is called for every animation **frame** *(according to the [`fps`](#fps) setting)*, thus it rerenders the chosen element flow
* The current [Number|Array] **coordinates** *(the value between [`start`]() and [`stop`]())* are passed as the `[0]` argument in the `render` function
* The `this` keyword in the `render` function refers to the [Animation] instance with all [getters](#control-getters), [control methods](#control-methods), [chaining methods](#chaining-methods) and [events](#control-events) to control the animation flow

### `motions`
**Type:** [Array]  
**Default:** `[]`
* It lets to create the [Array] collection of **motion templates**
* One motion template is a set of [motion properties](#motion-properties) that determine how the **easing numerical value** should behave when it is rerendering. The motion template can be **reused** many times, so the [motion properties](#motion-properties) do not have to be defined each time for the same motion
* These motion templates can be then easily combined in the animation **chains** by their [identifiers](#id) in many different configurations, using the available [chaining methods](#chaining-methods)
* The [Array] `motions` must contain [Object] items
* Each [Object] item is a set of [motion properties](#animation-properties) of the new **motion template**
* the new [[Motion] instance](#motion-instance) is created for each new **motion template**

### `defaults`
**Type:** [Object]  
**Default:** `{}`
* It lets to set the default *(global)* [motion properties](#motion-properties) that will be used by all [motion templates](#motions) in case they don't define the ones
* The [motion properties](#motion-properties) defined in the [motion templates](#motions) have **priority** over the ones defined in the [Object] `defaults` property

```javascript
const SmartEasing = require('smart-easing');
const animation = new SmartEasing({
  defaults:{
    mode: 'ease-in-out',
    fps: 32
  },
  motions:[
    {
      /* fps: 32 is inherited from the defaults */
      mode: 'linear', //it overwrites the default 'ease-in-out' mode
      id: 'open',
      stop: 500
    }
  ]
});
```

# Motion properties
* The **motion properties** allow to control how the specified motion should behave
* The **motion properties** can be set:
  * **globally** in the [`defaults`](#defaults) object.  
    These motion properties are **common** for all [motion templates](#motions) in case they don't define the ones. In other words, the [motion templates](#motions) **inherit** the motion properties from the global [`defaults`](#defaults) object.
  * **individually** for each [motion template](#motions).  
    These motion properties are appropriate only to the [motion template](#motions) they are defined in. They have the **priority** over the motion properties defined globally in the [`defaults`](#defaults) object.
* The **incorrect values are ignored** and the default values are used instead
* See the sample of well prepared **motion template** below  
  *It recalculates the easing [Number] value from `0` to `150` in the interval of `180` milliseconds, `44` frames per one second. This motion template can be easily chained by its `'move-forward'` identifier.*
```javascript
{
  id: 'move-forward',
  mode: 'ease-in-out-d',
  fps: 44,
  start: 0,
  stop: 150,
  time: 180,
  delay: 10,
  repeat: 1
}
```
### `id`
**Type:** [String]  
**Default:**  
`"0"` *(for the `[0]` motion template in the [`motions`](#motions) collection)*,  
`"1"` *(for the `[1]` motion template in the[`motions`](#motions) collection)*, etc.
* It is the **indentifier** of the [motion template](#motions)
* The `id` can be used to build the animation [chains](#chaining-methods) of the [motion templates](#motions)
* The `id` property defined in the [`defaults`](#defaults) object is ignored *(each motion template must have its individual identifier)*

### `mode`
**Type:** [String|Array]  
**Default:** `"linear"`
* The `smart-easing` library uses the [De Casteljau's algorithm](https://en.wikipedia.org/wiki/De_Casteljau%27s_algorithm) to draw a Bézier curve of the flow
* The [String] `mode` should indicate the one of accessible [built-in esing modes]()
  * You can find the list of built-in easing modes in the [simulator]()
  * See also [`modes`](#modes) getter
* The [Array] `mode` should contain the values that are interpreted as **custom easing mode**
  * The [Array] object takes the [Number] value pairs - at least 4 values
  * Each pair represents the *x* and *y* coordinate of the point that builds the curve
  * Each value should be a [Number] value from `0` to `1`
  * To understand how the Bézier curve is built out of the [Array] values or in order to build your own **custom easing mode** easily, visit the [simulator]() page
* The `mode` property defined in the [`defaults`](#defaults) object applies to all [motion templates](#motions) by default

### `fps`
**Type:** [Number]  
**Default:** `32`
* Set the number of frames rerendered per 1 second
* Higher `fps` values make the  animation smoother
* It must be a [Number] integer from `1` to `75`
* The value lower than 1 or higher than 75 will be increased to 1 or decreased to 75 value respectively. The decimal fraction will be rounded to the nearest integer
* The `fps` property defined in the [`defaults`](#defaults) object applies to all [motion templates](#motions) by default


### `smooth`
**Type:** [Boolean]  
**Default:** `false`
* If the [motion template]() is combined with other motion templates in the [chain](#chaining-methods), the whole flow *(switch moment between the motions)* can be not very smooth
* The `smooth` set to `true` attempts so **smooth** the switch between the motions in the chain
* It may slightly alter the default behaviour of the chosen [`mode`](#mode)
* The `smooth` property defined in the [`defaults`](#defaults) object applies to all [motion templates](#motions) by default


### `start`, `stop`
**Type:** [Number|Array]  
**Default `start`:** `0`  
**Default `stop`:** `1`
* The motion flow starts from the `start` value and ends with the `stop` value. The recomputed value is accessible in the [`render control event`](#render-1) and as the [`state.coords`](#state) getter
* Set the custom [Number] values for the `start` and `stop` properties in order to attach the recomputed value directly to some DOM or Canvas element
* Set the [Array] list of [Number] values in order to compute multiple easing interval values at once
* The [Array] object of `start` and `stop` must contain the same number of [Number] items
* Both `start` and `stop` property must be of the same type - either [Number] value or [Array] object
* If two [motion templates](#motions) are [chained](#chaining-methods), the second motion template in the chain *(if the `start` property is not defined)* **inherits** the `stop` value from the first *(previous)* chained motion template as its `start` value:
  * `animation.chain({ start: 0, stop: 50 }, { stop: 200 }, { stop: 500 }, { start: 45, stop: 220 })`  
    *The second motion starts from `50` and the third motion starts from `200`, but the fourth motion starts from `45`, as it defines its own `start` property.*
* The `start` and `stop` properties defined in the [`defaults`](#defaults) object apply to all [motion templates](#motions) by default

```javascript
const SmartEasing = require('smart-easing');
const menu = document.getElementById('menu');
const animation = new SmartEasing({
  render: (value) => { /*
    This function is called 32 times per second.
    It recalculates the value from 0 to 500.
    This value can be directly attached to some DOM element. */
    menu.style.height = `${value}px`;
  },
  motions:[
    {
      id: 'show-menu',
      start: 0,
      stop: 500,
      time: 25
    }
  ]
});
```

### `autostart`
**Type:** [Boolean]  
**Default:** `true`
* When the `autostart` is set to `true` for the [motion template](#motions), it runs right after it is called with any [chaining method](#chaining-methods)
* When the `autostart` is set to `false` for the [motion template](#motions), the animation is automatically paused before the motion start. The [`resume`](#resume) control method must be called manually to run the motion
* The `autostart` property defined in the [`defaults`](#defaults) object applies to all [motion templates](#motions) by default
  * when `true`, all chained motion templates run automatically
  * when `false`, the animation is paused before each chained motion start

### `time`
**Type:** [Number]  
**Default:** `1000`
* Set the duration time of the motion
* If the motions are [chained](#chaining-methods), the animation time is a sum of all chained motions durations
* It must be a [Number] positive integer
* The `1` value equals `1` millisecond, while `1000` equals `1` second, etc.
* The value lower than 1 will be increased to 1. The decimal fraction will be rounded to the nearest integer
* The `Infinity` is forbidden *(the default value will be used instead)*
* The `time` property defined in the [`defaults`](#defaults) object applies to all [motion templates](#motions) by default

### `speed`
**Type:** [Number]  
**Default:** `undefined`
* The [`time`](#time) and `speed` properties are used **alternately**
* The `speed` property has a priority over the [`time`](#time) property. If the `speed` property is properly defined, the [`time`](#time) property is ignored
* The [Number] `speed` property indicates what **distance** should be covered **per 1 second**:
  * for `{ start: 0, stop: 100, speed: 10 }` the coords increases by `10` every `1000` milliseconds
  * for `{ start: 0, stop: 100, speed: 25 }` the coords increases by `25` every `1000` milliseconds
  * for `{ start: 1.1, stop: 1.5, speed: .05 }` the coords increases by `0.05` every `1000` milliseconds
* When the `speed` is defined, the final motion duration depends on the **difference** between the [`start`](#start-stop) and [`stop`](#start-stop) values *(the distance)*, while the [`time`]() defined makes the motion duration constant, regardless the distance
* It may turn out more useful than the [`time`](#time) property, if the two [motion templates](#motions) of the different distances are chained and the equal speed of the flow should be kept
* The `speed` property defined in the [`defaults`](#defaults) object applies to all [motion templates](#motions) by default

### `delay`
**Type:** [Number]  
**Default:** `0`
* Set a duration of the delay that precedes the motion
* It must be a [Number] positive integer
* The `1` value equals `1` millisecond, while `1000` equals `1` second, etc.
* The value lower than `0` will be increased to `0`. The decimal fraction will be rounded to the nearest integer
* The `Infinity` is forbidden *(the default value will be used instead)*
* The `delay` property defined in the [`defaults`](#defaults) object applies to all [motion templates](#motions) by default

### `repeat`
**Type:** [Number]  
**Default:** `1`
* It indicates how many times the [motion template](#motions) should be repeated
* It must be a [Number] positive integer or `Infinity`
* The value lower than `1` will be increased to `1`. The decimal fraction will be rounded to the nearest integer
* The `repeat` property defined in the [`defaults`](#defaults) object applies to all [motion templates](#motions) by default

# Create the chain of motion templates
Connect the available chaining methods [`first`](#first), [`last`](#last), [`previous`](#previous), [`next`](#next), [`go`](#go), [`chain`](#chain), [`all`](#all), [`reverse`](#reverse), [`boomerang`](#boomerang) and [`repeat`](#repeat) to create the chain of motion templates. These motion templates are executed in the **queue**.

```javascript
const SmartEasing = require('smart-easing');
const animation = new SmartEasing({/*...*/});

animation.first().next();
animation.go(0).last({ time: 250 });
animation.all();
animation.chain('move-forward', 'move-back');
animation.go('move-forward').go({ id: 'move-back' });
animation.go({ id: 'move-forward', time: 200 });
animation.go(0).previous().go({ stop: 100, time: 100, mode: 'ease-out-c' });
animation.boomerang();
```

## Chaining methods

### `first`
* It runs the first `[0]` [motion template](#motions) from the [Array] [`motions`](#motions) collection
* The first [motion template](#motions) can be run with some properties [modified](#modifying-the-motion-templates-on-the-run)

```javascript
animation.first();
animation.first().go(1).go(2).last();
```

### `last`
* It runs the last [motion template](#motions) from the [Array] [`motions`](#motions) collection
* The last [motion template](#motions) can be run with some properties [modified](#modifying-the-motion-templates-on-the-run)

```javascript
animation.last();
animation.last().go(2).go(1).first();
```

### `previous`
* If the animation is pending and eg. the `[2]` [motion template](#motions) is running from the [Array] [`motions`](#motions) collection, the `previous` method executes the `[1]` motion template from the [Array] [`motions`](#motions) collection as the next one:
  * `animation.go('slide-up').previous();`
  * `animation.last().previous().previous().previous();`
* If the `previous` method is called as the first one in the chain of methods, or if the first `[0]` **motion template** is pending and the `previous` method is chained as the next one, it is **ignored** *(the next motion in the queue is called)*. The [`beforeEach`](#beforeeach) and [`afterEach`](#aftereach) events are **not called** for the ignored motion.
  * `animation.previous();`
  * `animation.first().previous();`
  * `animation.go(0).previous();`
  * `animation.boomerang().previous();`
* The previous [motion template](#motions) can be run with some properties [modified](#modifying-the-motion-templates-on-the-run)

### `next`
* If the animation is pending and eg. the `[2]` [motion template](#motions) is running from the [Array] [`motions`](#motions) collection, the `next` method executes the `[3]` motion template from the [Array] [`motions`](#motions) collection as the next one:
  * `animation.go('slide-down').next();`
  * `animation.first().next().next().next();`
* If the `next` method is called as the first one in the chain of methods, or if the last [motion template](#motions) from the [Array] [`motions`](#motions) collection is pending and the `next` method is chained as the next one, it is **ignored** *(the next motion in the queue is called)*. The [`beforeEach`](#beforeeach) and [`afterEach`](#aftereach) events are **not called** for the ignored motion
  * `animation.next();`
  * `animation.last().next();`
  * `animation.go(animation.motions.length - 1).next();`
  * `animation.all().next();`
* The next [motion template](#motions) can be run with some properties [modified](#modifying-the-motion-templates-on-the-run)

### `go`
* It runs the **chosen** [motion template](#motions) from the [Array] [`motions`](#motions) collection
* The `[0]` **argument** should be the **[`motion indicator`](#motion-indicators)** that indicates the desired motion template:
  * `animation.go(0).go(1).go(2);`
  * `animation.go('toggle-menu');`
  * `animation.go({ id: 'toggle-menu' });`
  * `animation.go(animation.motions.first);`
  * `animation.go(()=> 'toggle-menu');`
  * `animation.go(()=> this.motions.get('toggle-menu'));`
* The chosen [motion template](#motions) can be run with some properties [modified](#modifying-the-motion-templates-on-the-run)
* The [custom motion template](#custom-motion-templates) can be also passed as the `[0]` **argument**:
  * `animation.go({ stop: 100, time: 100 }).go({ stop: 200, time: 100 });`
  * `animation.go({ mode: 'ease-out-b', start: 0, stop: 350, time: 15, delay: 10 });`

### `chain`
* It runs the **given** [motion templates](#motions) **list** in the queue
* Indicate the desired motion templates with **[`motion indicators`](#motion-indicators)**:
  * passed as the sequence of `[0]`, `[1]`, `[2]`, *etc.* **arguments**
    * `animation.chain(0, 1, 2, 1, 0);`
    * `animation.chain('move-forward', 'move-left', 'move-forward');`
    * `animation.chain(3, 2, 'move-left', 0);`
    * `animation.chain({ id: 'switch-on' }, { id: 'switch-off'});`
    * `animation.chain(animation.motions.first, animation.motions.last);`
  * passed as the `[0]` argument **[Array] list**
    * `animation.chain([0, 1, 2, 1, 0]);`
    * `animation.chain(['move-forward', 'move-left', 'move-forward']);`
    * `animation.chain([{ id: 'open-menu' }, { id: 'close-menu'}]);`
    * `animation.chain(animation.motions.list);`
    * `animation.chain(()=> [...animation.motions.list, 0 , 1]);`
* The chained [motion templates](#motions) can be run with some properties [modified](#modifying-the-motion-templates-on-the-run)
* The [custom motion templates](#custom-motion-templates) can be also passed respectively:
  * `animation.chain({ mode: 'ease-in-b', stop: 10, time: 15 }, { mode: 'ease-out-b', stop: 20, time: 15 });`
  * `animation.chain([{ stop: 200, time: 15 }, { stop: 300, time: 30 }]);`
* Use [`repeat`](#repeat-1) method to repeat the chain of motions rather than each motion separately

### `all`
* It runs **all** [motion templates](#motions) from the [Array] [`motions`](#motions) collection from the **first** one to the **last** one
* The first and|or last motion template can be [trimmed](#trimming-the-motion-templates-from-the-queue) from the queue
* All [motion templates](#motions) can be run with some properties [modified](#modifying-the-motion-templates-on-the-run)
* Use [`repeat`](#repeat-1) method to repeat the chain of all motions rather than each motion separately

### `reverse`
* It runs **all** [motion templates](#motions) from the [Array] [`motions`](#motions) collection from the **last** one to the **first** one
* The first and|or last motion template can be [trimmed](#trimming-the-motion-templates-from-the-queue) from the queue
* All [motion templates](#motions) can be run with some properties [modified](#modifying-the-motion-templates-on-the-run)
* Use [`repeat`](#repeat-1) method to repeat the chain of all motions rather than each motion separately

### `boomerang`
* It runs **all** [motion templates](#motions) from the [Array] [`motions`](#motions) collection from the **first** one to the **last** one **and back**
* The first and|or last motion template can be [trimmed](#trimming-the-motion-templates-from-the-queue) from the queue
* All [motion templates](#motions) can be run with some properties [modified](#modifying-the-motion-templates-on-the-run)
* Use [`repeat`](#repeat-1) method to repeat the chain of all motions rather than each motion separately

### `repeat`
* It works in combination with [`chain`](#chain), [`all`](#all), [`reverse`](#reverse) and [`boomerang`](#boomerang) methods
* While the [`repeat`](#repeat) motion property **repeats** the one [motion template](#motions) itself, the **`repeat`** method repeats the **chain** of motion templates
* It takes one `[0]` argument:
  * [Number] positive integer or `Infinity`
  * it indicates the **number of repetitions**
  * if any *(or incorrect)* argument is passed, the default `1` value is used
  * the value lower than 1 will be increased to 1
  * the decimal fraction will be rounded to the nearest integer
* It must be chained with the [`chain`](#chain), [`all`](#all), [`reverse`](#reverse) or [`boomerang`](#boomerang) method:
  * `animation.chain().repeat(Infinity);`
  * `animation.chain().repeat(5).go();`
  * `animation.chain().repeat().chain().repeat();`
  * `animation.all().repeat();`
  * `animation.reverse().repeat();`
  * `animation.boomerang().repeat(2);`

## Motion indicators
* The motion template **indicators** are used in the [`go`](#go) and [`chain`](#chain) chaining methods to **indicate** the the [motion template(s)](#motions) from the [Array] [`motions`](#motions) collection, that should be used in the motion queue
* There are many ways to **indicate** the desired motion template. The motion template indicators can be used alternately in the most suitable way
* The incorrect motion template **indicator** is ignored *(the next motion in the queue is called)*. The [`beforeEach`](#beforeeach) and [`afterEach`](#aftereach) events are not called for the ignored motion

#### 1. Motion template index
  * The [Number] **index** of the motion template from the [Array] [`motions`](#motions) collection:
```javascript
animation.go(0).go(1).go(2);
animation.chain(0, 1, 2);
animation.chain([0, 1, 2, 1, 0]);
```

#### 2. Motion template identifier
  * The [String] motion template [`id`](#id)
```javascript
animation.go('toggle-menu');
animation.chain('move-forward', 'move-left', 'move-forward');
animation.chain(['move-forward', 'move-left', 'move-forward']);
```

#### 3. Object with motion template [`id`](#id)
  * Pass the [Object] argument that indicates the [`id`](#id) of the motion template
```javascript
animation.go({ id: 'toggle-menu' });
animation.chain({ id: 'switch-on' }, { id: 'switch-off'});
animation.chain([{ id: 'open-menu' }, { id: 'close-menu'}]);
```

#### 4. [Motion] instance of the motion template
  * Pass the [[Motion] instance](#motion-instance) of the motion template as the argument
  * Use the available [`queue`](#queue) and [`motions`](#motions-1) getters to get the desired motion template
```javascript
animation.go(animation.motions.get('toggle-menu'));
animation.go(animation.motions.get(3));
animation.go(animation.motions.first);
animation.go('move-a').go(animation.queue.next).go('move-b');
animation.chain(animation.motions.list);
animation.chain(animation.motions.get(0));
animation.chain([animation.motions.first, animation.motions.last]);
```

#### 5. Function
  * Pass the function as the argument
  * This function should **return** one of the **motion indicators** described above or the [custom motion template](#custom-motion-templates)
  * Function allows to put some extra instructions *(eg. check the current state of animation when it's pending)* before the motion indicator is finally returned
  * The `this` keyword in the function refers to the [Animation] instance with all [getters](#control-getters), [control methods](#control-methods), [chaining methods](#chaining-methods) and [events](#control-events) to control the animation flow

```javascript
animation.go(()=> 0);
animation.go(()=> 'toggle-menu');
animation.go(()=> this.motions.first);
animation.go(()=> {
  if(this.state.coords > 100) return { stop: 200};
  else return { stop: 100 }
});

animation.chain(()=> [0, 1, 2]);
animation.chain(()=> ['move-forward', 'move-left', 'move-forward']);
animation.chain(()=> [{ id: 'left' }, { id: 'right', stop: 100 }]);
animation.chain(()=> {
  return [
    { stop: 100, time: 100 },
    { stop: 200, time: 100 },
    { stop: 400, time: 200, mode: 'ease-in-out' }
  ];
});
```

## Custom motion templates
* The [`go`](#go) and [`chain`](#chain) chaining methods can:
  * either indicate the motion template that is **already defined** in the [Array] [`motions`](#motions) collection, using the [motion indicators](#motion-indicators)
  * or create the **new** *(single-use)* **custom** motion template in the flow *(when the chaining method is called)*
* The **custom** motion template can be passed through the [`go`](#go) or [`chain`](#chain) method as the [Object] object with [motion properties](#motion-properties) defined
* The `id` property is unnecessary in the custom motion template:
  * If the [`id`](#id) property is defined, that indicates the motion template already existing in the [Array] [`motions`](#motions) collection, it is interpreted as the [object with motion template id](#3-object-with-motion-template-id) **identifier**, rather than the custom motion template
  * If the **new** [`id`](#id) property is defined, that does not indicate any motion template in the [Array] [`motions`](#motions) collection, it is interpreted as the **custom motion template**, rather than the [object with motion template id](#3-object-with-motion-template-id) identifier. The `id` is accessible in the [[Motion] instance](#motion-instance) of this **custom** motion template via the [`queue`](#queue) getter while the animation is pending
* The **custom** motion template is **not stored** in the [Array] [`motions`](#motions) collection and thereby is not accessible via the [`motions`](#motions-1) getter
* The **custom** motion template still **inherits** the [motion properties](#motion-properties) from the [`defaults`](#defaults) object

```javascript
animation.go({ stop: 100, time: 100 }).go({ stop: 200, time: 100 });
animation.chain({ delay: 20, stop: 100 }, { stop: 200 });
animation.chain([{ mode: 'ease-in-a', stop: 100, time: 15 }, { mode: 'ease-out-b', stop: 200, time: 15 }]);
```

## Trimming the motion templates from the queue
* The [`all`](#all), [`reverse`](#reverse) and [`boomerang`](#boomerang) methods run the sequence of several motion templates
* Sometimes it is undesirable to execute first or last motion template in the queue:
  * `animation.all().reverse()`  
    *the last motion is executed twice: first by `all`, then by `reverse` method*
  * `animation.reverse().all()`  
    *the first motion is executed twice: first by `reverse`, then by `all` method*
  * `animation.boomerang().repeat(2)`  
    *the first motion is executed twice: as the last motion of first repetition and as the first motion of second repetition*
  * `animation.boomerang().all()`  
    *the first motion is executed twice: as the last motion of `boomerang` and as the first motion of `all` method*
* The [Boolean] `trimFirst` and `trimLast` properties *(default: `false`)* can be defined in the [Object] first argument passed through the [`all`](#all), [`reverse`](#reverse) and [`boomerang`](#boomerang) method, to **trim** the first and|or last motion in the chain
* Assuming, that the [Array] [`motions`](#motions) collection contains **three** motion templates:
  * `animation.all().reverse({ trimLast: true });`  
    *It runs the motions in the following order:* `[0]`, `[1]`, `[2]`, `[1]`, `[0]`
  * `animation.reverse().all({ trimFirst: true });`  
    *It runs the motions in the following order:* `[2]`, `[1]`, `[0]`, `[1]`, `[2]`
  * `animation.reverse().boomerang({ trimFirst: true });`  
    *It runs the motions in the following order:* `[2]`, `[1]`, `[0]`, `[1]`, `[2]`, `[1]`, `[0]`
  * `animation.boomerang({ trimLast: true }).repeat(2);`  
    *It runs the motions in the following order:* `[0]`, `[1]`, `[2]`, `[1]`, `[0]`, `[1]`, `[2]`, `[1]`
* The [Object] argument can still define other [motion properties](#motion-properties) to [modify](#modifying-the-motion-templates-on-the-run) the motion templates:
  * `animation.all({ time: 100, trimFirst: true });`
  * `animation.reverse({ mode: 'ease-in-b', trimFirst: true, trimLast: true }).repeat(2);`

## Modifying the motion templates on the run
* The [motion templates](#motions) are running in accordance with the [motion properties](#motion-properties) defined in the [`motions`](#motions) and [`defaults`](#defaults) objects
* The [motion properties](#motion-properties) can be **modified** for the motion template in the flow *(when the chaining method is called)*, by passing the [Object] argument with the chosen motion properties modified
* The [motion properties](#motion-properties) can also be **reset** *(the [`defaults`](#defaults) values are used then rather than the [`motions`](#motions) ones)* by defining the chosen motion properties with the `null` in the [Object] argument
* The motion template is modified **only** for this one execution *(the motion properties defined in the [`motions`](#motions) and [`defaults`](#defaults) objects remain unmodified)*
* It may turn out useful if you want to alter the motion template behaviour just for the single run

#### For the [`first`](#first), [`last`](#last), [`previous`](#previous) or [`next`](#next) method:
  * pass the [Object] `[0]` argument with the new *(modified)* [motion properties](#motion-properties):
    * `animation.first({ time: 200, stop: 440 });`
    * `animation.first({ repeat: 2 });`
    * `animation.last({ delay: 200, start: -220 });`
    * `animation.last({ mode: 'swing-out-d' });`
    * `animation.go('open-menu').previous({ delay: 2000, stop: -0 });`
    * `animation.last().previous({ repeat: 3 });`
    * `animation.go('close-menu').next({ delay: 2000; mode: 'sharp-swing-in-d' });`
    * `animation.first().next({ fps: 65 });`
  * reset the motion properties:
    * `animation.first({ time: null });`
    * `animation.last({ delay: null });`
    * `animation.go(2).previous({ repeat: null });`
    * `animation.first().next({ mode: null });`

#### For the [`go`](#go) method:
  * pass the [Object] `[1]` argument with the new *(modified)* [motion properties](#motion-properties);  
  *(the `[0]` argument is the [motion indicator](#motion-indicators))*
    * `animation.go(1, { mode: 'ease-in-out-d' });`
    * `animation.go('toggle-menu', { stop: 200, delay: 10 });`
    * `animation.go(animation.motions.get(3), { time: 15 });`
  * or pass the [Object] `[0]` argument with the new *(modified)* [motion properties](#motion-properties);  
  *(the [`id`]() property is the [motion indicator](#motion-indicators))*
    * `animation.go({ id: 'move-forward', mode: 'linear' });`
    * `animation.go({ id: 'toggle-menu', start: 440 });`
  * reset the motion properties:
    * `animation.go('toggle-menu', { mode: null });`
    * `animation.go({ id: 'toggle-menu' time: null, mode: null });`

#### For the [`chain`](#chain) method:
  * the motion templates in the chain method can be modified only if they are passed as the [objects-with-id motion indicators](#3-object-with-motion-template-id)
    * `animation.chain({ id: 'switch-on', stop: 200 }, { id: 'switch-off', mode: 'ease-in-d', time: 15 });`
    * `animation.chain('move-left', 'move-forward', { id: 'move-forward', mode: 'ease-out-a' });`
  * reset the motion properties:
    * `animation.chain({ id: 'jump-left', delay: null }, { id: 'jump-right', delay: null, time: 150 })`

#### For the [`all`](#all), [`reverse`](#reverse) and [`boomerang`](#boomerang) methods:
  * pass the [Object] `[0]` argument with the new *(modified)* [motion properties](#motion-properties)  
    *these modified properties **affect all** motion templates in the chain*
    * `animation.all({ mode: 'ease-in-out-a', speed: 100 });`
    * `animation.reverse({ time: 100, mode: 'jump-d', stop: 0 });`
    * `animation.boomerang({ mode: 'pulse-c', time: 150 });`
  * reset the motion properties:  
    *these reset properties **affect all** motion templates in the chain*
    * `animation.all({ mode: null });`
    * `animation.reverse({ mode: null });`
    * `animation.boomerang({ mode: null });`

# Control the motion flow
* Use the available **[control methods](#control-methods)** [`pause`](#pause), [`resume`](#resume) and [`reset`](#reset) to control the animation flow
* Use the available **[control events](#control-events)** [`beforeAll`](#beforeall), [`afterAll`](#afterall), [`beforeEach`](#beforeeach), [`afterEach`](#aftereach), [`afterDelay`](#afterdelay), [`render`](#render-1), [`onPause`](#onpause) and [`onResume`](#onresume) to catch the desirable moment of animation
* Use the available **[control getters](#control-getters)** [`state`](#state), [`time`](#time-1), [`queue`](#queue), [`modes`](#modes), [`defaults`](#defaults-1) and [`motions`](#motions-1) to get the desired motion's data
* The animation data differs depending on the moment of the animation when it's pending. You can use the available [control getters](#control-getters) inside the [Function] [control events](#control-events) to get the desired data in the desired moment of animation. You can also use the available [control methods](#control-methods) and [chaining methods](#chaining-methods) inside the [Function] [control events](#control-events) to modify the animation flow.

## Control methods
> In order to **start** the animation, call one of the [chaining methods](#chaining-methods) *(or the chain of chaining methods)*.

### `pause`
* It **pauses** the animation in the particular frame when the animation is pending

```javascript
animation.pause();
```
```javascript
animation.afterEach(()=>{
  if(this.queue.index === 3) this.pause();
});
```

### `resume`
* It **resumes** the animation from the frame on which it was **paused**
* It is ignored, if the animation is pending and **is not** paused

```javascript
animation.resume();
```
```javascript
startButton.addEventListener('click',()=>{
  if(animation.state.paused) animation.resume();
});
```

### `reset`
* It runs the animation from the beginning *(from the first motion template in the chain)*
* In order to reset the animation without starting it, combine `reset` method with the [`pause`](#pause) method
```javascript
animation.reset();
```
```javascript
animation.afterAll(()=> this.reset().pause());
```

## Control events

### `beforeAll`
* It fires before the whole animation start
* It fires before the [`beforeEach`](#beforeeach) event of the first motion in the queue
* It fires before the [`delay`](#delay) *(if defined)* of the first motion in the queue
* The `this` keyword in the `beforeAll` function refers to the [Animation] instance with all [getters](#control-getters), [control methods](#control-methods), [chaining methods](#chaining-methods) and [events](#control-events) to control the animation flow

### `afterAll`
* It fires after the whole animation end
* It fires after the [`afterEach`](#aftereach) event of the last motion in the queue
* The `this` keyword in the `afterAll` function refers to the [Animation] instance with all [getters](#control-getters), [control methods](#control-methods), [chaining methods](#chaining-methods) and [events](#control-events) to control the animation flow

### `beforeEach`
* If fires before each motion start in the queue
* It fires before the [`delay`](#delay) *(if defined)* of the motion
* It fires after [`beforeAll`](#beforeall) event for the first motion in the queue
* It fires after [`afterEach`](#aftereach) event of the previous motion in the queue
* The `this` keyword in the `beforeEach` function refers to the [Animation] instance with all [getters](#control-getters), [control methods](#control-methods), [chaining methods](#chaining-methods) and [events](#control-events) to control the animation flow

### `afterEach`
* If fires after each motion end in the queue
* It fires before [`afterAll`](#afterall) event for the last motion in the queue
* It fires before [`beforeEach`](#beforeeach) event of the next motion in the queue
* The `this` keyword in the `afterEach` function refers to the [Animation] instance with all [getters](#control-getters), [control methods](#control-methods), [chaining methods](#chaining-methods) and [events](#control-events) to control the animation flow

### `afterDelay`
* It fires after the [`delay`](#delay) interval *(if defined)* for the motion
* It does not fire if the [`delay`](#delay) equals `0`
* The `this` keyword in the `afterDelay` function refers to the [Animation] instance with all [getters](#control-getters), [control methods](#control-methods), [chaining methods](#chaining-methods) and [events](#control-events) to control the animation flow


### `render`
* [See the description above](#render)
* The [Function] `render` event can be either defined when the new [Animation] instance is created with the constructor or after the new instance is already created
```javascript
const SmartEasing = require('smart-easing');
const animation = new SmartEasing({
  /*...*/
  render: function(value){
    menu.style.height = `${value}px`;
  }
});
```

```javascript
animation.render = function(value){
  menu.style.height = `${value}px`;
}
```

### `onPause`
* It fires when the animation is paused *(when the [`pause`](#pause) method is called for the animation)*
* It does not fire, when the [`pause`](#pause) method is called while the animation is already paused and **is not** pending

```javascript
animation.onPause(()=>{
  console.log(this.state.paused); //true
});
animation.pause();
```

### `onResume`
* It fires when the animation is resumed *(when the [`resume`](#resume) method is called for the animation)*
* It does not fire, when the [`resume`](#resume) method is called while the animation is pending and **is not** paused

```javascript
animation.onResume(()=>{
  console.log(this.state.paused); //false
});
animation.pause();
animation.resume();
```

## Control getters 

### `state`
**Return:** `[Object]`
* It indicates the current state of the animation
* The following `getter` properties are accessible:
  * `state.coords` [Number|Array]
    * It returns the current coordinates between the [`start`](#start-stop) and [`stop`](#stop-stop) values of the current motion, when the animation is pending
    * It returns the initial coordinates when the animation is not pending yet *(also in [`beforeAll`](#beforeall) event)*
    * It returns the final coordinates when the animation is not pending already *(also in [`afterAll`](#afterall) event)*
  * `state.paused` [Boolean]
    * It returns `true`, when the animation is paused at the moment
    * The animation is paused when the [`pause`](#pause) control method has been called
    * Otherwise it returns `false`
  * `state.pending` [Boolean]
    * It returns `true`, when the animation is pending
    * The animation is pending when any [chaining method](#chaining-methods) has been called for the animation and when the last [chaining method](#chaining-methods) in the chain is not finished yet
    * The animation is pending regardless of whether it is paused
    * It returns `false` before the animation is started *(also in [`beforeAll`](#beforeall) event)* or after the animation is finished *(also in [`afterAll`](#afterall) event)*
  * `state.started` [Boolean]
    * It indicates whether the animation has been started
    * It returns `true`, when the first [chaining method](#chaining-methods) in the chain has been called
    * It still returns `true`, when the animation is finished
    * It returns `false` before the animation is started *(also in [`beforeAll`](#beforeall) event)*
  * `state.finished` [Boolean]
    * It indicates whether the animation is finished
    * It returns `true`, when the last [chaining method](#chaining-methods) in the chain is already finished
    * It returns `false`, when the animation has not been started yet or when it is still pending

```javascript
animation.render((value)=> {
  console.log(this.state.coords === value); //true
});
```

```javascript
if(animation.state.paused) animation.reset();
else animation.pause();
```

### `time`
**Return:** `[Object]`
* It lets to control the time of both current motion and the animation:
* The following `getter` properties are accessible:
  * `time.current.elapsed` [Number]
    * It indicates how many milliseconds have passed since the **current motion** start
    * It includes the [`delay`](#delay) interval *(if defined for the motion)*  
      *If the `delay` equals eg. `150`, the `elapsed` starts from negative value **`-150`**,  
      then reaches `0` when the [`delay`](#delay) comes to an end,  
      then starts to count out the motion duration.*
  * `time.current.remaining` [Number]
    * It indicates how many milliseconds left till the end of the **current motion** 
    * It includes both the delay interval and the motion duration
  * `time.current.delay` [Number]
    * It indicates how long the [`delay`](#delay) time is *(in milliseconds)*
    * It equals `0` if the delay is not defined for the motion
  * `time.current.duration` [Number]
    * It indicates how long the motion time is *(in milliseconds)*
    * It does not include the [`delay`](#delay) time
  * `time.all.elapsed` [Number]
    * It indicates how many milliseconds have passed since the **animation** start
    * It starts from `0`
    * It includes all [`delay`](#delay)s' and all motions' times of the whole animation
  * `time.all.remaining` [Number]
    * It indicates how many milliseconds left till the end of the **whole animation**
    * It includes all [`delay`](#delay)s' and all motions' times of the **whole animation**
  * `time.all.duration` [Number]
    * It indicates how long the animation time is *(in milliseconds)*
    * It includes all [`delay`](#delay)s' and all motions' times of the **whole animation**

```javascript
animation.render(()=> {
  if(this.queue.index === 3) console.log(this.time.all.elapsed);
});
```

### `queue`
**Return:** `[Object]`
* The chain of [chaining methods](#chaining-methods) creates the sequence of the motions
* The `queue` getter gives the data of this motions sequence
* The following `getter` properties are accessible:
  * `queue.index` [Number|null]
    * It returns the [Number] index of the current *(pending)* motion
    * It returns `null` before the animation is started *(also in [`beforeAll`](#beforeall) event)*
    * It returns `null` after the animation is finished *(also in [`afterAll`](#afterall) event)*
  * `queue.current` [Motion|null]
    * It return the [[Motion] instance](#motion-instance) of the current *(pending)* motion
    * It returns `null` before the animation is started *(also in [`beforeAll`](#beforeall) event)*
    * It returns `null` after the animation is finished *(also in [`afterAll`](#afterall) event)*
  * `queue.next` [Motion|Promise|null]
    * It returns the [[Motion] instance](#motion-instance) of the next motion in the queue *(that will be executed right after the current one)*
    * It returns the [Promise] object of the next motion in the queue, when the [[Function] motion indicator](#5-function) is passed in the [chaining method](#chaining-methods)  for the next motion; *The [Motion] instance of the next motion is unknown till the moment the [Function] motion indicator is called for the next motion. The `then` method of the returned [Promise] object is called in the moment when the [Motion] instance is already known. See the sample below.*
    * It returns the first motion in the queue before the animation is started
    * It returns `null` if the current motion is the last one in the queue
  * `queue.previous` [Motion|null]
    * It returns the [[Motion] instance](#motion-instance) of the previous motion in the queue *(that has been executed right before the current one)*
    * It returns the last motion in the queue after the animation is finished
    * It returns `null` if the current motion is the first one in the queue
  * `queue.length` [Number]
    * It returns the [Number] length of the queue

```javascript
animation.beforeEach(()=>{
  if(this.queue.index === 0){
    const next = this.queue.next;
    if(next instanceof Promise) next.then((motion) => { /*...*/ });
    else if (next instanceof Motion) /*...*/
    else if (next === null) /*...*/
  }
});
```





### `modes`
**Return:** `[Object]`
* It returns the [Object] collection of all built-in **easing-modes**
* The properties correspond with the modes' [String] [names](#mode) and the values correspond with the modes' [Array] [coordinates](#mode)
* Both modes' **names** and **coordinates** can be used to define the [`mode`]() property of the new **motion template**
* The `modes` getter is accessible both as the [Animation] instances' property and as the library's constructor static property
```javascript
const SmartEasing = require('smart-easing');
const animation = new SmartEasing(/*...*/);

SmartEasing.modes; //[Object]
animation.modes; //[Object]
```

### `defaults`
**Return:** `[Object]`
* It returns the [`defaults`](#defaults) object
* Each [`defaults`](#defaults) property can be (re)defined here
  * `animation.defaults.fps = 44;`
  * `animation.defaults.mode = 'sharp-swing-out-c';`
* When any property is defined *(for the first time)* incorrectly, the default value is used instead
* When any property is **re**defined incorrectly, the previous-defined value remains in use
### `motions`
**Return:** `[Object]`
* It returns the collection of [Motion] **motion templates**' instances defined in the [Array] [`motions`](#motions)
* The following **methods** are accessible:
  * `motions.add(Object)`
    * It takes the one [Object] `[0]` argument with the [motion properties](#motion-properties) of the **new** motion template
    * The new **motion template** is added as the last one in the [Array] [`motions`](#motions) collection
    * The motion template that already exists in the [`motions`](#motions) collection is overwritten by the new motion template, if the new motion template has the same [`id`](#id) property
  * `motions.get(String|Number)`
    * It takes the one [String|Number] `[0]` argument that indicates the **seeking** motion template
    * The [Number] argument should indicate the [index](#1-motion-template-index) of the motion template in the [Array] [`motions`](#motions) collection
    * The [String] argument should indicate the [`id`](#2-motion-template-identifier) of the seeking motion template
    * It returns `null` if the [Array] [`motions`](#motions) collection does not contain the seeking motion template
    * It returns the [Motion] instance of the seeking motion template
  * `motions.has(String|Number)`
    * It takes the one [String|Number] `[0]` argument that indicates the **seeking** motion template
    * The [Number] argument should indicate the [index](#1-motion-template-index) of the motion template in the [Array] [`motions`](#motions) collection
    * The [String] argument should indicate the [`id`](#2-motion-template-identifier) of the seeking motion template
    * It returns [Boolean] `true` if the [Array] [`motions`](#motions) collection contains the seeking motion template, otherwise it returns `false`
* The following `getter` properties are accessible:
  * `list` [Array]
    * It returns the [Array] list of the [String] [`id`](#id)s of all **motion templates** in the [`motions`](#motions) collection
    * The motion templates order is retained
  * `reversed`
    * It returns the [Array] list of the [String] [`id`](#id)s of all **motion templates** in the [`motions`](#motions) collection
    * The motion templates order is **reversed**
  * `first` [Motion|null]
    * It returns the first [[Motion] instance](#motion-instance) of the [Array] [`motions`](#motions) collection
    * It returns `null` if the [`motions`](#motions) collection is empty
  * `last` [Motion|null]
    * It returns the last [[Motion] instance](#motion-instance) of the [Array] [`motions`](#motions) collection
    * It returns `null` if the [`motions`](#motions) collection is empty
  * `length` [Number]
    * It returns the [Number] number of all motion templates in the [Array] [`motions`](#motions) collection

# [Motion] instance
* The [Motion] instance is created for:
  * each **motion template** defined in the [Array] [`motions`](#motions) collection
  * each **[custom motion](#custom-motion-templates)** passed as the argument in the [`go`](#go) or [`chain`](#chain) chaining method
* The [Motion] `getter` properties:
  * `index` [Number]
    * It returns the motion template's **index** in the [Array] [`motions`](#motions) collection
    * It returns `null` for the [custom motion templates](#custom-motion-templates)
  * `id` [String]
    * It returns the [`id`](#id) of the motion template
    * if the [custom motion](#custom-motion-templates) is created without the [`id`](#id) defined, it returns `null`
  * `properties` [Object]
    * It returns the object with **all final** [motion properties](#motion-properties) *(that are *in fact* used in animation)*
    * The final value of the motion property is determined in the following order:  
     a. defined in the [`motions`](#motions) object  
     b. inherited from the [`defaults`](#defaults) object *(when not defined in the [`motions`](#motions) object)*  
     c. the default one *(when not defined at all)*
    * Get the single property's value by eg. `properties.id`, `properties.fps`, `properties.mode`, etc.
    * Each motion property can be (re)defined here, eg.  
      `setting.mode = 'ease-out-c';`  
      `setting.fps = 44;`
    * When any property is defined *(for the first time)* incorrectly, the default value is used instead
    * When any property is **re**defined incorrectly, the previous-defined value remains in use
    * **Mind** that the [`id`](#id) redefining may collapse the further [chaining methods](#chaining-methods) that indicate this motion template by its `id`
  * `repetition` [Number]
    * It returns the number of current repetition of the motion
    * It works in combination with both the [`repeat`](#repeat) property *(defined for the motion template)* and the [`repeat`](#repeat-1) method *(called for the chain of motions)*
  * `delayed` [Boolean]
    * It returns `true` if the [`delay`](#delay) property is defined for the motion *(bigger than `0`)*, otherwise `false`

# Break the animation
In order to **pause** the animation *(stop the flow in the current position)*, use the [`pause`](#pause) control method

In order to **reset** the animation *(stop the flow in the initial position)*, use the combination of [`reset`](#reset) and [`pause`](#pause) control methods

In order to **break** the animation and run the **new** chain of motions, just call any of the [control method](#control-methods)s *(or the chain of control methods)*

```javascript
animation.go(0).go(1).go(2);
animation.all(); //it breaks the first chain immediately
```

```javascript
animation.all();
animation.afterEach(()=>{
  //break the animation and call the reverse() after the last but one motion
  if(this.queue.index === this.queue.length - 2) this.reverse();
});
```

In order to **continue** the animation with the next chain of motions, use [`afterAll`](#afterall) control event, in which you call the new chain of [control methods](#control-methods)

```javascript
animation.all();
animation.afterAll(()=>{
  this.go(3).go(2).go(1).go(0); //the animation is continued
});
```

# Samples