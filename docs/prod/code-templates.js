export default {
  'import-library': {
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation, Blender } from 'smart-easing';
const blender = new Blender();
const animation = new Animation({
  motions: [/*...*/],
  defaults: {/*...*/},
  render: ()=>{/*...*/}
});`
  },
  'rerendering-number': {
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation} from 'smart-easing';
const animation = new Animation(/*...*/);
const menu = document.getElementById('menu');
animation.render = function(easing){
  menu.style.height = \`\${easing}px\`;
};`
  },
  'defaults-usage':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`const animation = new Animation({
  defaults: {
    mode: 'ease-in-out', //it overwrites the native default mode: 'linear'
    fps: 55  //it overwrites the native default fps: 32
  },
  motions: [
    {
      id: 'open-menu',
      stop: 500,
      mode: 'linear' //it overwrites the user default mode: 'ease-in-out'
      /* delay: 0 is inherited from the native defaults */
      /* fps: 55 is inherited from the user defaults */
    }
  ]
});`
  },
  'chaining-methods-usage':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.first().last();
/* It runs the first motion template from the collection.
   After it's finished, it runs the last motion template from the collection.
   There is no need to indicate the motion templates in these methods as they take them themselves. */

animation.go('move-forward').go('move-left').go('move-forward');
/* Assuming that the two motion templates have been created with the 'move-forward' and 'move-left' id motion property,
   these motion templates are run sequentially as follows.
   The 'move-forward' motion template is used twice. */

animation.all().repeat(2);
/* The all created motion templates from the collection are run from the first one to the last one.
   After all motion templates are done, the chain starts once more. */`
  },
  'motion-indicators-usage':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation } from 'smart-easing';
const animation = new Animation({
  motions:[{
    id: 'rotate',
    start: 0,
    stop: 150,
    mode: 'ease-in-out-d'
  }];
});

/* Each [0] argument [Motion Indicator] indicates the same motion template in a different way. */

/* run the motion template of 'rotate' id */
animation.go('rotate');
animation.go({ id: 'rotate' }); 
animation.go(()=> 'rotate');
animation.go(()=> { id: 'rotate' });

/* run the first motion template from the collection */
animation.go(0);
animation.go(()=> 0);

/* it returns the [Motion] instance that is used as the motion indicator */
animation.go(animation.motions.get('rotate'));
animation.go(()=> this.motions.get('rotate'));`
  },
  'events-constructor-instance':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation } from 'smart-easing';
const menu = document.getElementById('menu');
/* Set some function handlers in the constructor. */
const animation = new Animation({
  motions: [/*...*/],
  render: ()=>(easing){
    menu.style.height = \`\${easing}px\`;
  },
  beforeAll:(value)=>{
    menu.style.display = 'block';
  }
});

/* Set some extra function handlers via the [Animation] instance. */
animation.afterAll = function(){
  menu.style.display = 'none';
};

console.log(animation.render); //[Function]
console.log(animation.beforeAll); //[Function]
console.log(animation.afterAll); //[Function]
console.log(animation.afterDelay); //null`
  },
  'control-methods-usage':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation } from 'smart-easing';
const menu = document.getElementById('menu');
const animation = new Animation({
  motions: [/*...*/],
  render: ()=>(easing){
    menu.style.height = \`\${easing}px\`;
  },
  afterEach: ()=>{
    this.pause();
  },
  afterAll: ()=>{
    this.reset();
  }
});`
  },
  'html-implementation':{
    language: 'language-markup',
    header: 'HTML',
    body:
`&lt;head&gt;
  &lt;script src='smart-easing.js'&gt;&lt;/script&gt;
  &lt;script&gt;
    var animation = new smartEasing.Animation(/*...*/);
  &lt;/script&gt;
&lt;/head&gt;`
  },
  'motion-templates-usage':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation } from 'smart-easing';

// The motion templates added in the constructor:
const animation = new Animation({
  motions:[
    {
      id: 'move-forward',
      mode: 'ease-in-out-c',
      start: 0,
      stop: 200,
      time: 150
    },
    {
      id: 'move-back',
      mode: 'ease-in-out-c',
      start: 200,
      stop: 0,
      time: 150
    }
  ]
});

// The motion template added with the motions.add method:
animation.motions.add({
  id: 'move-left',
  mode: 'ease-in-out-c',
  start: 0,
  stop: -100,
  time: 100
});
`
  },
  'motion-properties-sample':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`const animation = new Animation({
  motions:[
    {
   /* It recalculates the easing [Number] value from 0 to 150
      in the interval of 180 milliseconds, 60 frames per one second.
      This motion template can be easily chained by its 'move-forward' id. */
      id: 'move-forward',
      mode: 'sharp-jump-c',
      autostart: true,
      smooth: true,
      fps: 60,
      start: 0,
      stop: 150,
      time: 180,
      delay: 10,
      repeat: 2
    }
  ]
});
`
  },
  'modifying-motion-templates':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.first({ time: 200, stop: 440 });
/* The first motion template in the collection is executed
   with the time and stop motion property modified. */

animation.go({ id: 'toggle-menu', start: 440 });
/* The motion template of 'toggle-menu' identifier is executed
   with the start motion property modified. */

animation.all({ mode: 'ease-in-out-a', speed: 100 });
/* All motion templates from the collection are executed
  with the mode and speed motion properties modified. */

animation.chain({ id: 'jump-left', delay: null }, { id: 'jump-right', delay: null, time: 150 });
/* The motion template of 'jump-left' is executed
   with the delay motion property reset.
   Then the motion template of 'jump-right' is executed
   with the delay motion property reset and the time property modified. */

animation.go({ id: 'toggle-menu' time: null, mode: null });
/* The motion template of 'toggle-menu' identifier is executed
   with the time and mode motion properties reset. */`
  },
  'custom-motion-tempaltes':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.go({ start: 0, stop: 100, time: 100 }).go({ stop: 200, time: 100 });
/* Two custom motion templates are created in the flow.
   The id motion property is omitted as it is unnecessary.
   The animation does not refer to the motion templates from the collection. */

animation.chain({ delay: 20, stop: 100 }, { stop: 200 });
/* The default values are taken for all the missing motion properties. */`
  },
  'animation-data':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation } from 'smart-easing';
const animation = new Animation({
  render: ()=>{/*...*/}
});

animation.go({ start: 100, stop: 200, time: 150 }).go({ start: 200, stop: 300, time: 150 });

animation.beforeAll = function(){
  console.log(this.state.started); //false
};

animation.afterEach = function(){
  this.pause();
  console.log(this.state.paused); //true
  console.log(this.queue.current); //[Motion]
};

animation.afterAll = function(){
  console.log(this.state.finished); //true
  console.log(this.state.pending); //false
  console.log(this.time.all.elapsed); //300
  console.log(this.time.all.remaining); //0
};`
  },
  'state-coords':{
    language:'language-javascript',
    body:
`animation.render = function(value){
  console.log(this.state.coords === value); //true
};`
  },
  'state-paused':{
    language:'language-javascript',
    body:
`if(animation.state.paused) animation.reset();
else animation.pause();`
  },
  'time-all-elapsed':{
    language:'language-javascript',
    body:
`animation.render = function(){
  if(this.time.all.elapsed >= 1000) this.pause();
};`
  },
  'queue-next':{
    language:'language-javascript',
    body:
`animation.beforeEach = function(){
  const next = this.queue.next;
  if(next instanceof Promise){
    next.then((motion) => {
      /*...*/
    });
  } else if (next instanceof Motion){
    /*...*/
  } else if (next === null){
    /*...*/
  }
};`
  },
  'modes-instance':{
    language:'language-javascript',
    header: 'JavaScript',
    body:
`import Animation from 'smart-easing';
const animation = new Animation(/*...*/);

Animation.modes; //[Modes]
animation.modes; //[Modes]

animation.go({
  start: 0,
  stop: 350,
  time: 25,
  mode: 'ease-in-out-c'
  /*  or animation.modes['ease-in-out-c']
      or Animation.modes['ease-in-out-c'] */
});`
  },
  'defaults-setters':{
    language:'language-javascript',
    header: 'JavaScript',
    body:
`import Animation from 'smart-easing';
const animation = new Animation({
  defaults:{
    /* The user default motion properties can be set in the [Animation] constructor. */
    fps: 44,
    mode: 'sharp-swing-out-c'
  },
  motions: [/*...*/]
});

animation.defaults; //[Defaults]
animation.defaults.fps; //44

/* The user default motion properties can be also set with the [Defaults] instance. */
animation.defaults.delay = 10;`
  },
  'start-inheritance':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`/* The second motion starts from 50 and the third motion starts from 200.
   But the fourth motion starts from 45, as it defines its own start property. */
animation.chain({ start: 0, stop: 50 }, { stop: 200 }, { stop: 500 }, { start: 45, stop: 220 });`
  },
  'start-stop-recalculation':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation } from 'smart-easing';
const menu = document.getElementById('menu');
const animation = new Animation({
  render: function(value){ 
 /* This event is called 32 times per second.
    It recalculates the value from 0 to 500.
    This value can be directly attached to some DOM element. */
    menu.style.height = \`\${value}px\`;
  },
  motions: [
    {
      id: 'show-menu',
      start: 0,
      stop: 500,
      time: 25
    }
  ]
});

animation.go('show-menu');`
  },
  'chaining-methods-example':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation } from 'smart-easing';
const animation = new Animation({/*...*/});

animation.first().next();
animation.go(0).last({ time: 250 });
animation.all();
animation.chain('move-forward', 'move-back');
animation.go('move-forward').go({ id: 'move-back' });
animation.go({ id: 'move-forward', time: 200 });
animation.go(0).previous().go({ stop: 100, time: 100, mode: 'ease-out-c' });
animation.boomerang();`
  },
  'chaining-method-first':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.first();
animation.first().go(1).go(2).last();`
  },
  'chaining-method-last':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.last();
animation.last().go(2).go(1).first();`
  },
  'chaining-method-previous':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.go('slide-up').previous();
animation.last().previous().previous().previous();`
  },
  'chaining-method-previous-ignored':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.previous();
animation.first().previous();
animation.go(0).previous();
animation.boomerang().previous();
animation.go({ start: 150, stop: 330, time: 15 }).previous();`
  },
  'chaining-method-next':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.go('slide-down').next();
animation.first().next().next().next();`
  },
  'chaining-method-next-ignored':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.next();
animation.last().next();
animation.go(animation.motions.length - 1).next();
animation.all().next();
animation.go({ start: 150, stop: 330, time: 15 }).next();`
  },
  'chaining-method-go':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.go(0).go(1).go(2);
animation.go('toggle-menu');
animation.go({ id: 'toggle-menu' });
animation.go(animation.motions.first);
animation.go(()=> 'toggle-menu');
animation.go(()=> this.motions.get('toggle-menu'));`
  },
  'chaining-method-chain-arguments':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`/* The motion indicators passed as the following arguments */
animation.chain(0, 1, 2, 1, 0);
animation.chain('move-forward', 'move-left', 'move-forward');
animation.chain(3, 2, 'move-left', 0);
animation.chain({ id: 'switch-on' }, { id: 'switch-off'});
animation.chain(animation.motions.first, animation.motions.last);

/* The motion indicators passed as items of [Array] [0] argument */
animation.chain([0, 1, 2, 1, 0]);
animation.chain(['move-forward', 'move-left', 'move-forward']);
animation.chain([{ id: 'open-menu' }, { id: 'close-menu'}]);
animation.chain(animation.motions.list);
animation.chain(()=> [...animation.motions.list, 0 , 1]);`
  },
  'chaining-method-all':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.all();
animation.all().repeat(2);`
  },
  'chaining-method-reverse':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.reverse();
animation.reverse().repeat(2);`
  },
  'chaining-method-boomerang':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.boomerang();
animation.boomerang().repeat(2).all();`
  },
  'custom-motion-indicator-a':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation } from 'smart-easing';
const animation = new Animation({
  motions:[
    {
      id: 'move-forward',
      start: 0,
      stop: 150,
      time: 50
    },
    {
      id: 'move-back',
      start: 150,
      stop: 0,
      time: 50
    }
  ]
});

/* The first chained method creates the new custom motion template.
   There is not any motion template in the [Motions] collestion of the 'move-left' id. */
animation.go({ id: 'move-left', start: 0, stop: 50, time: 20 }).go('move-forward');`
  },
  'custom-motion-indicator-b':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation } from 'smart-easing';
const animation = new Animation({
  motions:[
    {
      id: 'move-forward',
      start: 0,
      stop: 150,
      time: 50
    },
    {
      id: 'move-back',
      start: 150,
      stop: 0,
      time: 50
    }
  ]
});

/* The go method does not create the custom motion template, as there is
   a motion template in the [Motions] collection of the 'move-back' id.
   It is interpreted as the motion indicator. */
animation.go({ id: 'move-back' });`
  },
  'custom-motion-sample':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.go({ stop: 100, time: 100 }).go({ stop: 200, time: 100 });
animation.go({ mode: 'ease-out-b', start: 0, stop: 350, time: 15, delay: 10 });

animation.chain({ delay: 20, stop: 100, time: 10 }, { stop: 200, time: 10 });
animation.chain({ mode: 'ease-in-b', stop: 10, time: 15 }, { mode: 'ease-out-b', stop: 20, time: 15 });

animation.chain([{ stop: 200, time: 15 }, { stop: 300, time: 30 }]);
animation.chain([{ mode: 'ease-in-a', stop: 100, time: 15 }, { mode: 'ease-out-b', stop: 200, time: 15 }]);`
  },
  'chaining-method-repeat':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.chain('light-on', 'light-off').repeat(Infinity);
animation.chain('grasp', 'rotate', 'release').repeat(5).go('push');
animation.chain(0, 1, 2).repeat().chain(2, 1, 0).repeat();
animation.all().repeat();
animation.reverse().repeat();
animation.boomerang().repeat(2).all();`
  },
  'control-method-pause':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.afterEach = function(){
  if(this.queue.index === 3) this.pause();
});`
  },
  'control-method-resume':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`startButton.addEventListener('click', function(){
  if(animation.state.paused) animation.resume();
});`
  },
  'control-method-reset':{
    language: 'language-javascript',
    header: 'JavaScript',
    body: 
`animation.afterAll = function(){
  this.reset().pause();
};`
  },
  'control-events-sample':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation } from 'smart-easing';
const menu = document.getElementById('menu');
const animation = new Animation({
  defaults: {/*...*/},
  motions: [/*...*/],
  render: function(coords){
    menu.style.height = \`\${coords}px\`;
  }
});

animation.afterAll = function(){
  if(this.queue.previous.id === 'close'){
    menu.style.display = 'none';
  }
};

animation.beforeEach = 'hello world';

animation.beforeEach; //null
animation.afterAll; //[Function]
animation.render; //[Function]`
  },
  'control-event-render-constructor':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation } from 'smart-easing';
const menu = document.getElementById('menu');
const animation = new Animation({
  defaults: {/*...*/},
  motions: [/*...*/],
  render: function(height){
    menu.style.height = \`\${height}px\`;
  }
});`
  },
  'control-event-render-setter':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation } from 'smart-easing';
const menu = document.getElementById('menu');
const animation = new Animation({
  defaults: {/*...*/},
  motions: [/*...*/]
});

animation.render = function(height){
  menu.style.height = \`\${height}px\`;
};`
  },
  'control-event-onpause':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.onPause = function(){
  this.state.paused; //true
};
animation.pause();`
  },
  'control-event-onresume':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.onResume = function(){
  this.state.paused; //false
};
animation.pause();
animation.resume();`
  },
  'motion-indicator-index':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.go(0).go(1).go(2);
animation.chain(0, 1, 2);
animation.chain([0, 1, 2, 1, 0]);

animation.motions.get(0);
animation.motions.remove(2);`
  },
  'motion-indicator-identifier':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.go('toggle-menu');
animation.chain('move-forward', 'move-left', 'move-forward');
animation.chain(['move-forward', 'move-left', 'move-forward']);

animation.motions.remove('open-menu');
animation.motions.has('toggle-menu');`
  },
  'motion-indicator-motion-template':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.go({ id: 'toggle-menu' });
animation.chain({ id: 'switch-on' }, { id: 'switch-off'});
animation.chain([{ id: 'open-menu' }, { id: 'close-menu'}]);

animation.motions.has({ id: 'toggle-menu' });
animation.get({ id: 'close-menu' });`
  },
  'motion-indicator-motion-instance':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.go(animation.motions.get('toggle-menu'));
animation.go(animation.motions.get(3));
animation.go(animation.motions.first);
animation.go('move-a').go(animation.queue.next).go('move-b');
animation.chain(animation.motions.list);
animation.chain(animation.motions.get(0));
animation.chain([animation.motions.first, animation.motions.last]);

const removed = animation.motions.remove('toggle-menu'); //[Motion]
animation.motions.has(removed); //false`
  },
  'motion-indicator-function':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.go(()=> 0);
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
});`
  },
  'modify-first-last-previous-next':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.first({ time: 200, stop: 440 });
animation.first({ repeat: 2 });
animation.last({ delay: 200, start: -220 });
animation.last({ mode: 'swing-out-d' });
animation.go('open-menu').previous({ delay: 2000, stop: 0 });
animation.last().previous({ repeat: 3 });
animation.go('close-menu').next({ delay: 2000; mode: 'sharp-swing-in-d' });
animation.first().next({ fps: 65 });

/* Reset the chosen motion properties. */
animation.first({ time: null });
animation.last({ delay: null });
animation.go(2).previous({ repeat: null });
animation.first().next({ mode: null });`
  },
  'modify-go-one-argument':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`/* The id motion property indicates the desired motion template */
animation.go({ id: 'move-forward', mode: 'linear' });
animation.go({ id: 'toggle-menu', start: 440 });

/* Reset the chosen motion properties. */
animation.go({ id: 'toggle-menu' time: null, mode: null });`
  },
  'modify-go-two-arguments':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`/* The motion indicator is passed through the chaining method as the [0] argument.
   The object with modified motion properties is passed as the [1] argument. */
animation.go(1, { mode: 'ease-in-out-d' });
animation.go('toggle-menu', { stop: 200, delay: 10 });
animation.go(animation.motions.get(3), { time: 15 });

/* Reset the chosen motion properties. */
animation.go('toggle-menu', { mode: null });`
  },
  'modify-chain':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`/* Pass the [Object] motion indicators as the subsequent arguments 
   or as the items of [Array] [0] argument. The id indicates the motion template 
   and the other motion properties modify the indicated motion's behaviour. */
animation.chain({ id: 'switch-on', stop: 200 }, { id: 'switch-off', mode: 'ease-in-d', time: 15 });
animation.chain([{ id: 'switch-on', stop: 200 }, { id: 'switch-off', mode: 'ease-in-d', time: 15 }]);

/* The [0] and [1] motion indicators do not modify the motions' behaviour. 
   The [2] argument is the [Object] motion indicator that modifies the indicated motion's behaviour. */
animation.chain('move-left', 'move-forward', { id: 'move-forward', mode: 'ease-out-a' });

/* Reset the chosen motion properties. */
animation.chain({ id: 'jump-left', delay: null }, { id: 'jump-right', delay: null, time: 150 });`
  },
  'modify-all-reverse-boomerang':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`/* The defined motion properties modify all motion templates in the chain. */
animation.all({ mode: 'ease-in-out-a', speed: 100 });
animation.reverse({ time: 100, mode: 'jump-d', stop: 0 });
animation.boomerang({ mode: 'pulse-c', time: 150 });

/* Reset the chosen motion properties. */
animation.all({ mode: null });
animation.reverse({ delay: null });
animation.boomerang({ time: null, speed: null });`
  },
  'trimming-undesirable':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`/* the last motion is executed twice: first by all(), then by reverse() method */
animation.all().reverse();

/* the first motion is executed twice: first by reverse(), then by all() method */
animation.reverse().all();

/* the first motion is executed twice: as the last motion of the first boomerang()  
   repetition and as the first motion of the second boomerang() repetition */
animation.boomerang().repeat(2);

/* the first motion is executed twice: as the last motion of boomerang() method
   and as the first motion of the all() method */
animation.boomerang().all();`
  },
  'trimming-samples':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`// Assuming, that the [Motions] collection contains three motion templates:

/* It runs the motions in the following order: [0], [1], [2], [1], [0] */
animation.all({ trimLast: true }).reverse();
animation.all().reverse({ trimFirst: true });

/* It runs the motions in the following order: [2], [1], [0], [1], [2] */
animation.reverse({ trimLast: true }).all();
animation.reverse().all({ trimFirst: true });

/* It runs the motions in the following order: [2], [1], [0], [1], [2], [1], [0] */
animation.reverse().boomerang({ trimFirst: true });

/* It runs the motions in the following order: [0], [1], [2], [1], [0], [1], [2], [1] */
animation.boomerang({ trimLast: true }).repeat(2);`
  },
  'trimming-additional-properties':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.all({ time: 100, trimFirst: true });
animation.reverse({ mode: 'ease-in-b', trimFirst: true, trimLast: true }).repeat(2);`
  },
  'break-animation-pause':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation } from 'smart-easing';
const animation = new Animation({/*...*/});

animation.all();

animation.render = function(){
  if(this.time.all.elapsed >= 1500) this.pause();
};`
  },
  'break-animation-reset':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation } from 'smart-easing';
const animation = new Animation({/*...*/});

animation.all();

const restartButton = document.getElementById('restart');
restartButton.addEventListener('click', ()=>{
  if(animation.state.started){
    animation.reset();
    animation.pause();
  };
});`
  },
  'break-animation-sample':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`/* The all() method call breaks the first chain immediately. */
animation.go(0).go(1).go(2);
animation.all(); 

/* It breaks the all() chain after the last but one motion execution
   and calls the reverse() chain. */
animation.all();
animation.afterEach = function(){
  if(this.queue.index === this.queue.length - 2) this.reverse();
};`
  },
  'break-animation-continue':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`animation.all();
animation.afterAll = function(){
  /* The animation is continued with the new chain on motions. */
  this.go(3).go(2).go(1).go(0);
};`
  },
  'animation-constructor-defaults':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation } from 'smart-easing';
const animation = new Animation({
  defaults: {
    fps: 60,
    mode: 'ease-in-out-b',
    speed: 55
  }
});`
  },
  'animation-constructor-motions':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation } from 'smart-easing';
const animation = new Animation({
  motions: [
    {
      id: 'move-up',
      start: 0,
      stop: 140,
      mode: 'ease-out-d',
      time: 30
    },
    {
      id: 'move-down',
      start: 140,
      stop: 0,
      mode: 'ease-in-d',
      time: 30
    }
  ]
});`
  },
  'animation-constructor-events':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation } from 'smart-easing';
const ball = document.getElementById('ball');
const animation = new Animation({
  render:(coords)=>{
    ball.style.left = \`\${coords}px\`;
  },
  afterEach:()=>{
    this.pause();
  },
  afterAll:()=>{
    this.reset();
    this.pause();
  }
});`
  },
  'array-start-stop':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation } from 'smart-easing';
const menu = document.getElementById('menu');
const animation = new Animation({
  defaults:{
    mode: 'ease-in-out',
    time: 30
  },
  motions:[
    {
      id: 'fold',
      start: [250, 1],
      stop: [0, 0]
    },
    {
      id: 'unfold',
      start: [0, 0],
      stop: [250, 1]
    }
  ],
  render:(values)=>{
    menu.style.height = \`\${values[0]}px\`;
    menu.style.opacity = values[1];
  }
});

animation.go('unfold');`
  },
  'multiple-animations':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation } from 'smart-easing';
const menu = document.getElementById('menu');
const height = new Animation({
  defaults:{
    mode: 'ease-in-out',
    time: 30
  },
  motions:[
    {
      id: 'fold',
      start: 250,
      stop: 0
    },
    {
      id: 'unfold',
      start: 0,
      stop: 250
    }
  ],
  render:(value)=>{
    menu.style.height = \`\${value}px\`;
  }
});
const opacity = new Animation({
  defaults:{
    mode: 'ease-in-out',
    time: 30,
    delay: 15
  },
  motions:[
    {
      id: 'fold',
      start: 1,
      stop: 0
    },
    {
      id: 'unfold',
      start: 0,
      stop: 1
    }
  ],
  render:(value)=>{
    menu.style.opacity = value;
  }
});

height.go('unfold');
opacity.go('unfold');`
  },
  'multiple-animations-blender':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation, Blender } from 'smart-easing';
const menu = document.getElementById('menu');
const blender = new Blender();
blender.render = function({ height, opacity }){
  menu.innerHTML = \`
    &lt;ul style="height:\${height}px; opacity:\${opacity}"&gt;
      &lt;li&gt;Projects&lt;/li&gt;
      &lt;li&gt;Contact&lt;/li&gt;
    &lt;/ul&gt;
  \`;
};
const height = new Animation({
  defaults:{
    mode: 'ease-in-out',
    time: 30
  },
  motions:[
    {
      id: 'fold',
      start: 250,
      stop: 0
    },
    {
      id: 'unfold',
      start: 0,
      stop: 250
    }
  ],
  render: blender.id('height')
});
const opacity = new Animation({
  defaults:{
    mode: 'ease-in-out',
    time: 30,
    delay: 15
  },
  motions:[
    {
      id: 'fold',
      start: 1,
      stop: 0
    },
    {
      id: 'unfold',
      start: 0,
      stop: 1
    }
  ],
  render: blender.id('opacity')
});

height.go('unfold');
opacity.go('unfold');`
  },
  'blender-constructor':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation, Blender } from 'smart-easing';
const area = document.getElementById('area');

/* The event handler is set for the render event in the constructor as the argument */
const blender = new Blender(function({ top, left }){
  area.innerHTML = \`&lt;div id="ball" style="top:\${top}px; left:\${left}px"&gt;&lt;/div&gt;\`;
});

const positionY = new Animation({
  /*...*/
  render: blender.id('top') 
});

const positionX = new Animation({
  /*...*/
  render: blender.id('left')  
});`
  },
  'blender-render-this-animations':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation, Blender } from 'smart-easing';
const blender = new Blender(function({ light, ball }){
  /* The this keyword refers to the [Animations] instance. */
  console.log(this); //[Animations]
  
  /* Use [Animations] methods and getters to get the desired [Animation] instance. */
  this.has('light'); //true
  this.get('light'); //[Animation]
  
  /* Use this [Animation] instance eg. to get this animation's data
     with the accessible [State], [Queue], [Time] getter. */
  this.get('ball').state.pending; //true
});

const light = new Animation({
  /*...*/,
  render: blender.id('light')
});

const ball = new Animation({
  /*...*/,
  render: blender.id('ball')
});`
  },
  'blender-animation-reference':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation, Blender } from 'smart-easing';
const road = document.getElementById('road');
const blender = new Blender();

/* The [Function] event handler is set for the [Blender].render event.
   The [0] [Object] argument has the properties that cohere
   with the animation identifiers below. */
blender.render = function(coords){
  road.innerHTML = \`&lt;div id="car" style="top:\${coords.y}px; left:\${coords.x}px"&gt;&lt;/div&gt;\`;
  /* The coords.x is the easing value of the moveCarHorizontally animation.
     The coords.y is the easing value of the moveCarVertically animation. */
};

/* The multiple animations' render events, rather than have
   their individual event handlers set, refere to the blender. */
const moveCarHorizontally = new Animation({
  motions: [/* some motion templates here */],
  render: blender.id('x')
  /* The [Blender].id is set as the [Animation].render event handler.
     It is immediately called with the [String] identifier passed as the argument.
     This animation's easing value will be accessible in the [Blender].render event
     via this identifier. */
});

const moveCarVertically = new Animation({
  motions: [/* some motion templates here */],
  render: blender.id('y')
});`
  },
  'blender-render-sample':{
    language:'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation, Blender } from 'smart-easing';
const dropbox = document.getElementById('dropbox');
const blender = new Blender();
blender.render = function({ opacity, position }){
  dropbox.innerHTML = \`
    &lt;ul style="opacity:\${opacity}; top:\${position}px;"&gt;
      &lt;li&gt;copy url&lt;/li&gt;
      &lt;li&gt;download&lt;/li&gt;
      &lt;li&gt;delete&lt;/li&gt;
    &lt;/ul&gt;\`;
};

const opacity = new Animation({
  /*...*/
  render: blender.id('opacity');
});

const position = new Animation({
  /*...*/
  render: blender.id('position');
});`
  },
  'blender-id-sample':{
    language:'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation, Blender } from 'smart-easing';
const blender = new Blender();
blender.render = function({ opacity, position }){/*...*/};

const opacity = new Animation({
  /*...*/
  render: blender.id('opacity');
});

const position = new Animation({
  /*...*/
  render: blender.id('position');
});`
  },
  'motion-instance-properties':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation } from 'smart-easing';
const animation = new Animation({
  defaults:{
    fps: 60,
    delay: 10
  },
  motions:[
    {
      id: 'move-forward',
      mode: 'ease-in-out-b',
      start: 100,
      stop: 500,
      time: 20
    }
  ]
});

const motion = animation.motions.get('move-forward'); //[Motion]
motion.properties.mode; // 'ease-in-out-b'
motion.properties.mode = 'swing-in-a';
motion.properties.mode; // 'swing-in-a'
motion.properties.time; // 20
motion.properties.fps; // 60 &lt;&lt;user default&gt;&gt;
motion.properties.delay; // 10 &lt;&lt;user default&gt;&gt;
motion.properties.repeat; // 1 &lt;&lt;native default&gt;&gt;`
  },
  'motions-add-method':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`import { Animation } from 'smart-easing';
const animation = new Animation({
  motions:[
    {
      id: 'move-forward',
      mode: 'ease-in-out-b',
      start: 100,
      stop: 500,
      time: 20
    }
  ]
});

/* It replaces the already existing [Motion] instance with the new one,
   as the [Motions] collection already has the [Motion] of the same id. */
animation.motions.add({ id: 'move-forward', time: 50 });

/* It creates the new [Motion] and adds it to the [Motions] collection. */
animation.motions.add({ id: 'move-back', start: 500, stop: 100, time: 50 });

/* It creates the new [Motion] of 'template' id with all default 
   motion properties and adds it to the [Motions] collection. */
animation.motions.add('template');`
  },
  'motion-update-object':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`const motion = animation.motions.get('toggle-menu');
motion.update({ time: 50, delay: 10 });

const motion = animation.motions.get('open-menu');
motion.update({ id: 'close-menu' });
animation.motions.has('open-menu'); //false

/* Reset the chosen motion properties. */
const motion = animation.motions.get('move-forward');
motion.update({ delay: null, mode: null });`
  },
  'motion-update-motion':{
    language: 'language-javascript',
    header: 'JavaScript',
    body:
`const toggleMenu = animation.motions.add({ id: 'toggle-menu', delay: 10, time: 50, mode: 'ease-in-out-d' });
const closeMenu = animation.motions.add({ id: 'close-menu', start: 250, stop: 0, time: 20 });

/* The delay and mode is added, and the time is modified in the 'close-menu' [Motion] instance. */
closeMenu.update(toggleMenu);`
  }
};