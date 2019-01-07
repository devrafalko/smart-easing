/*

The new [Motion] is created when
  the [Array] 'motions' property is defined with correct items in the [Object] argument passed through the constructor
  the [Motions].add is called with correct [0] argument
  the chaining methods go() and chain() are called with the [Object] motion template as the [0] argument passed

The [Motion] instance
  has 'index', 'id', 'properties', 'repetition' and 'delayed' getters accessible
  properties getter returns the [Properties] instance
    with 'id' getter only, when the 'id' getter returns [String] identifier
    with 'id' getter and setter, when the 'id' getter returns null
    with 'mode', 'fps', 'smooth', 'start', 'stop', 'autostart', 'time', 'speed', 'delay', 'repeat' getter and setter

The [Motions] and [Properties] instance should not
  have any other than public methods, properties, getters and setters
  let to define any new methods, properties, getters and setters
  let to delete any existing methods, properties, getters and setters
  let to modify any existing methods, properties, getters and setters

The [Motion].index getter
  if the [Motion] is stored in the [Motions] collection
    should return [Number] index of the [Motion] template in this collection
  if the [Motion] is not stored in the [Motions] collection
    should return the null
  if the [Motion] has been removed from the [Motions] collection
    should return [Number] index of the [Motion] template in this collection before it's removed
    should return null after it's removed
  if the [Motion] is added to the [Motions] collection
    should return null before it's added
    should return [Number] index of the [Motion] template in this collection after it's added

The [Motion].id getter and [Motion].properties.id getter
  should return the [String] identifier of the [Motion] template
    if the motion template has been added to the [Motions] collection
      in the constructor
        with the 'id' property defined
        without the 'id' property defined
      with the [Motions].add method
        with the 'id' property defined
        without the 'id' property defined
    if the motion template has been created in the go() or chain() chaining method
      with the 'id' property defined
  should return null
    if the motion template has been created in the go() or chain() chaining method
      without the 'id' property defined

The [Motion].repetition getter
  should return [Number] 1 value
    before the animation's first run
    when the animation is pending and some chaining method has just started this motion flow
  should return the increased (+1) [Number] value
    when the animation is pending and further chaining method has just started this motion flow for the next time

The [Motion].delayed getter
  when the 'delay' motion property has been set for the value equal or bigger than 1  
    should return [Boolean] true
  when the 'delay' motion property has not been defined, defined incorrectly or set to 0  
    should return [Boolean] false
    
The [Motion].id setter and [Motion].properties.id setter
  when the [Motion].id getter returns the null
    should not throw an error and should be accessible
    and when the null or incorrect value is set
      the [Motion].id getter should return null
      the [Motion].id setter should be still accessible
    and when the [String] value is set
      the [Motion].id getter should return this [String] new value
    and when is added to the [Motions] collection
      the [Motion].id getter should return the default [String] value
  when the 'id' is already defined and when is called to
    redefine 'id' with the new [String] value 
      for the [Motion] template in the [Motions] collection
        should throw an error, that the setter is inaccessible
      for the [Motion] template outside the [Motions] collection
        should throw an error, that the setter is inaccessible
    redefine 'id' with the null or any other value
      for the [Motion] template in the [Motions] collection
        should throw an error, that the setter is inaccessible
      for the [Motion] template outside the [Motions] collection
        should throw an error, that the setter is inaccessible

When the 'mode' motion property
  is set for the motion template
    in the constructor or with [Motion].properties.mode setter
      as the [String] value
        that indicates one of accessible native easing modes
          with lower case letters or regardler the lower or upper case letters are used
            the [Motion].properties.mode getter should return this value
        that does not indicate any of the native easing modes
            the [Motion].properties.mode getter should return default value
      as the [Array] object
        that is a correct custom easing mode
          the [Motion].properties.mode getter should return this [Array] object
        that is empty
        that contains less than 4 items
        that contains more than 34 items
        that contains items that are not of [Number] type
        that has the odd number of items
        that has odd-number [Number] items (x coord) that is lower than 0 or higher than 1
        that has even-number [Number] items (y coord) that is lower than -1 or higher than 2
        that has the last but one [Number] item (x coord) other than 1 value
          the [Motion].properties.mode getter should return default value
      as any other type value or object
        the [Motion].properties.mode getter should return default value
  is not set for the motion template
    the [Motion].properties.mode getter should return default value

When the 'fps' motion property
  is set for the motion template
    in the constructor or with [Motion].properties.fps setter
      as the [Number] value
        higher than 75 or Infinity
          the [Motion].properties.fps getter should return the [Number] 75
        lower than 1 or -Infinity
          the [Motion].properties.fps getter should return the [Number] 1
      as the [Number] integer between 1 and 75
        the [Motion].properties.fps getter should return this [Number] value
      as the [Number] decimal fraction between 1 and 75
        the [Motion].properties.fps getter should return the rounded [Number] value
      as NaN or any other type value or object
        the [Motion].properties.fps getter should return the default value
  is not set for the motion template
    the [Motion].properties.fps getter should return the default value

When the 'smooth' motion property
  is set for the motion template
    in the constructor or with [Motion].properties.smooth setter
      as the [Boolean] true|false
        the [Motion].properties.smooth getter should return this [Boolean] true|false
      as any other type value or object
        the [Motion].properties.smooth getter should return the default value
  is not set for the motion template
    the [Motion].properties.smooth getter should return the default value

When the 'start' motion property
  is set for the motion template
    in the constructor or with [Motion].properties.start setter
      as the [Number] value
        lower than 0, decimal fraction or integer
          the [Motion].properties.start getter should return this [Number] value
        -Infinity, Infinity or NaN
          the [Motion].properties.start getter should return the default value
      as the [Array] object
        but empty
          the [Motion].properties.start getter should return the default value
        but with some not [Number] items
          the [Motion].properties.start getter should return the [Array] object with all items, where the incorrect ones are replaced with the default value
        but with NaN, Infinity or -Infinity
          the [Motion].properties.start getter should return the [Array] object with all items, where the incorrect ones are replaced with the default value
        but with more than 16 items
          the [Motion].properties.start getter should return the [Array] object with all items
      as any other type value or object
        the [Motion].properties.start getter should return the default value
  is not set for the motion template
    the [Motion].properties.start getter should return the default value

When the 'stop' motion property
  is set for the motion template
    in the constructor or with [Motion].properties.stop setter
      as the [Number] value
        lower than 0, decimal fraction or integer
          the [Motion].properties.stop getter should return this [Number] value
        -Infinity, Infinity or NaN
          the [Motion].properties.stop getter should return the default value
      as the [Array] object
        but empty
          the [Motion].properties.stop getter should return the default value
        but with some not [Number] items
          the [Motion].properties.stop getter should return the [Array] object with all items, where the incorrect ones are replaced with the default value
        but with NaN, Infinity or -Infinity
          the [Motion].properties.stop getter should return the [Array] object with all items, where the incorrect ones are replaced with the default value
        but with more than 16 items
          the [Motion].properties.stop getter should return the [Array] object with all items
      as any other type value or object
        the [Motion].properties.stop getter should return the default value
  is not set for the motion template
    the [Motion].properties.stop getter should return the default value

When the animation is running
  and the 'start' and 'stop' motion properties
    are of the different types
      the [Array] start and [Number] stop
        the render event handler and the [Animation].state.coords getter should return the recomputed [Array] stop and [Array] start, where the [Array] stop has the same length as [Array] start, and [Array] stop further items are set with the default values
      the [Number] start and [Array] stop
        the render event handler and the [Animation].state.coords getter should return the recomputed [Array] stop and [Array] start, where the [Array] start has the same length as [Array] stop, and [Array] start further items are set with the default values
    has the [Array] object set with [Number] values
      but [Array] start has less items than [Array] stop
      but [Array] stop has less items than [Array] start
        the render event handler and the [Animation].state.coords getter should return the [Array] object filled with the default value items, so the length of [Array] stop and [Array] start are equal
  and [Array] start and|or [Array] stop motion properties has more than 16 [Number] items
    the render event handler and the [Animation].state.coords getter should return the recomputed [Array] object with only 16 first items 
  and two motion templates (the custom motion or the motion from the [Motions] collection) are chained with two chaining methods
    and the second motion template has not the start property defined and take it from the [Defaults] or the native-default value
      it should inherit the stop value of the previous chained motion template as its start value for this one flow
      the [Motion].properties.start getter should still return the default value
    and the second motion template has the start property defined
      it should not inherit the stop value of the previous chained motion template as its start value for this one flow and the motion should start from the defined value
      the [Motion].properties.start getter should return this defined value

When the 'autostart' motion property
  is set for the motion template
    in the constructor or with [Motion].properties.autostart setter
      as the [Boolean] true|false
        the [Motion].properties.autostart getter should return this [Boolean] true|false
      as any other type value or object
        the [Motion].properties.autostart getter should return the default value
  is not set for the motion template
    the [Motion].properties.autostart getter should return the default value

When the 'time' motion property
  is set for the motion template
    in the constructor or with [Motion].properties.time setter
      as the [Number] value
        that is Infinity
          the [Motion].properties.time getter should return the default value
        lower than 1 or -Infinity
          the [Motion].properties.time getter should return the [Number] 1
      as the [Number] integer
        the [Motion].properties.time getter should return this [Number] value
      as the [Number] decimal fraction higher than 1
        the [Motion].properties.time getter should return the rounded [Number] value
      as NaN or any other type value or object
        the [Motion].properties.time getter should return the default value
  is not set for the motion template
    the [Motion].properties.time getter should return the default value

When the 'speed' motion property
  is set for the motion template
    in the constructor or with [Motion].properties.speed setter
      as the [Number] value
        that equals 0
          the [Motion].properties.speed getter should return the default value
        that is negative or -Infinity
          the [Motion].properties.speed getter should return the default value
        that is positive integer
          the [Motion].properties.speed getter should return this [Number] value
        that is positive decimal fraction
          the [Motion].properties.speed getter should return this [Number] value
        that is Infinity
          the [Motion].properties.speed getter should return [Number] Infinity
  is not set for the motion template
    the [Motion].properties.speed getter should return the default value

When the animation is running
  and [Motion].properties.speed getter returns the [Number] Infinity
    the motion distance should be covered in 1 millisecond
  and [Motion].properties.speed getter returns some [Number] value
    the motion flow should move with this speed rather than according to the time motion property

When the 'delay' motion property
  is set for the motion template
    in the constructor or with [Motion].properties.delay setter
      as the [Number] value
        that is Infinity
          the [Motion].properties.delay getter should return the default value
        lower than 0 or -Infinity
          the [Motion].properties.delay getter should return the [Number] 0
        that is integer equal or higher than 0
          the [Motion].properties.delay getter should return this [Number] value
        that is decimal fraction higher than 0
          the [Motion].properties.delay getter should return the rounded [Number] value
      as NaN or any other type value or object
        the [Motion].properties.delay getter should return the default value
  is not set for the motion template
    the [Motion].properties.delay getter should return the default value

When the 'repeat' motion property
  is set for the motion template
    in the constructor or with [Motion].properties.repeat setter
      as the [Number] value
        that is Infinity
          the [Motion].properties.repeat getter should return the [Number] Infinity
        lower than 1 or -Infinity
          the [Motion].properties.repeat getter should return the [Number] 1
        that is integer equal or higher than 1
          the [Motion].properties.repeat getter should return this [Number] value
        that is decimal fraction higher than 1
          the [Motion].properties.repeat getter should return the rounded [Number] value
      as NaN or any other type value or object
        the [Motion].properties.repeat getter should return the default value
  is not set for the motion template
    the [Motion].properties.repeat getter should return the default value

*/