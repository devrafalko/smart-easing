/*

When the new [Animation] instance is created
  it has the [Animation].motions property with [Motions] instance
    that has the [Function] 'add', 'remove', 'get' and 'has' methods defined
    that has 'list', 'reversed', 'first', 'last' and 'length' getters accessible

The [Motions] instance should not
  have any other than public methods, properties, getters and setters
  let to define any new methods, properties, getters and setters
  let to delete any existing methods, properties, getters and setters
  let to modify any existing methods, properties, getters and setters

When the 'motions' property is passed in the [Object] [0] argument in the constructor
  and is of incorrect type
    the [Motions] instance should be empty
  and is of [Array] type
    but empty
      the [Motions] instance should be empty
    but has some items of incorrect types
    but has some items of incorrect types and correct types
    and has some items of correct types [Motion|Object|String]
      the [Motions] instance should have the [Motion] instances stored in the number of passed items
      the order of the [Motion] instances in the [Motions] collection should correspond with the order of items in the [Array] motions property in the [Object] argument in the constructor

  When the new motion template is added to the [Motions] collection
  with the [Motions].add method
  in the constructor
    as the [Motion] instance
      the [Motion].properties getters should return
        the motion properties' values that have been defined for this motion template when it was created  
        the [Defaults]'s values for all motion properties that have not been defined for this motion template, when it was created
        the native-default values for all motion properties that have not been defined for this motion template when it was created and that have not been defined in the [Defaults] instance
    as the [Object] with motion properties defined
      the [Motion].properties getters should return
        the motion properties' values that have been defined for this motion template in this object
        the [Defaults]'s values for all motion properties that have not been defined for this motion template in this object
        the native-default values for all motion properties that have not been defined for this motion template in this object and that have not been defined in the [Defaults] instance
    as the [String] identifier
      the [Motion].properties getters should return
        the [Defaults]'s values for all motion properties
        the native-default values for all motion properties that have not been defined in the [Defaults] instance
    as the incorrect type value or object
      the [Motion].properties getter should return
        the [Defaults]'s values for all motion properties
        the native-default values for all motion properties that have not been defined in the [Defaults] instance

When the new motion template is added to the [Motions] collection with the [Motions].add method
  it should be the last item of the collection
  the [Motion].index should indicate its index in the [Motions] collection
  the [Motions].add method should return the new length of [Motions] collection

When the [Motions].remove method is called
  without any argument or with the [Function] argument that returns undefined
  with incorrect value or object or with the [Function] argument that returns it
  with the [Number] index argument that is higher than the length of the [Motions] collection or with the [Function] argument that returns it
  with the [String] argument that does not indicate any [Motion] by its identifier in the [Motions] collection or with the [Function] argument that returns it
  with the [Motion] argument that does not indicate the [Motion] instance that exists in the [Motions] collection or with the [Function] argument that returns it
    any [Motion] instance should be removed from the [Motions] collection
    the [Motions].remove method should return null
  with the [Object] argument that has the 'id' property
    not defined or of incorrect type or with the [Function] argument that returns it
    of [String] type, but that does not indicate any [Motion] by its identifier in the [Motions] collection or with the [Function] argument that returns it
      any [Motion] instance should be removed from the [Motions] collection
      the [Motions].remove method should return null
  with the [Function] argument
    this function should be called
    the 'this' keyword in the function should refer to the [Animation] instance
    that returns another function
      the returned function should not be even called
      any [Motion] instance should be removed from the [Motions] collection
      the [Motions].remove method should return null
  with correct [Motion Indicator] argument
    the indicated [Motion] instance should be removed from the [Motions] collection
    the removed [Motion].index property should return null
    the [Motions].remove method should return the removed [Motion] instance
    the former [Motion] instances in the collection
      should remain their [Motion].index value
      should remain their [Motion].id and [Motion].properties.id value
    the further [Motion] instances in the collection
      should have their [Motion].index value changed (minus 1)
      should remain their [Motion].id and [Motion].properties.id value

When the [Motions].get method is called
  without any argument or with the [Function] argument that returns undefined
  with incorrect value or object or with the [Function] argument that returns it
  with the [Number] index argument that is higher than the length of the [Motions] collection or with the [Function] argument that returns it
  with the [String] argument that does not indicate any [Motion] by its identifier in the [Motions] collection or with the [Function] argument that returns it
  with the [Motion] argument that does not indicate the [Motion] instance that exists in the [Motions] collection or with the [Function] argument that returns it
    the [Motions].get method should return null
  with the [Object] argument that has the 'id' property
    not defined or of incorrect type or with the [Function] argument that returns it
    of [String] type, but that does not indicate any [Motion] by its identifier in the [Motions] collection or with the [Function] argument that returns it
      the [Motions].get method should return null
  with the [Function] argument
    this function should be called
    the 'this' keyword in the function should refer to the [Animation] instance
    that returns another function
      the returned function should not be even called
      the [Motions].get method should return null
  with correct [Motion Indicator] argument
    the [Motions].get method should return the [Motion] instance found in the [Motions] collection

When the [Motions].has method is called
  without any argument or with the [Function] argument that returns undefined
  with incorrect value or object or with the [Function] argument that returns it
  with the [Number] index argument that is higher than the length of the [Motions] collection or with the [Function] argument that returns it
  with the [String] argument that does not indicate any [Motion] by its identifier in the [Motions] collection or with the [Function] argument that returns it
  with the [Motion] argument that does not indicate the [Motion] instance that exists in the [Motions] collection or with the [Function] argument that returns it
    the [Motions].has method should return false
  with the [Object] argument that has the 'id' property
    not defined or of incorrect type or with the [Function] argument that returns it
    of [String] type, but that does not indicate any [Motion] by its identifier in the [Motions] collection or with the [Function] argument that returns it
      the [Motions].has method should return false
  with the [Function] argument
    this function should be called
    the 'this' keyword in the function should refer to the [Animation] instance
    that returns another function
      the returned function should not be even called
      the [Motions].has method should return false
  with correct [Motion Indicator] argument
    the [Motions].has method should return true

The [Motions].list
  when is used as setter
    the error should be thrown that this property is not a setter
  when the motion templates are added to the [Motions] collection in the constructor
    it should return the [Array] list
      of all motion templates identifier with the same order as they were ordered in the [Array] motions property in the [Object] argument passed in the constructor
      with the length that should be the same as the length of the [Array] motions property in the [Object] argument passed in the constructor
  when the [Animation] is created without the [Array] motions property defined in the [Object] argument passed in the constructor
    should return the empty [Array] list
  when the new [Motion] has been added to the [Motions] collection
    should return the [Array] list with the new last [String] item that indicates the id of the new [Motion] template
  when the [Motion] has been removed from the [Motions] collection
    should return the [Array] list without the [String] item that indicates the removed [Motion] template    

The [Motions].reversed
  when is used as setter
    the error should be thrown that this property is not a setter
  when the motion templates are added to the [Motions] collection in the constructor
    it should return the [Array] list
      of all motion templates identifier with the reversed order as they were ordered in the [Array] motions property in the [Object] argument passed in the constructor
      with the length that should be the same as the length of the [Array] motions property in the [Object] argument passed in the constructor
  when the [Animation] is created without the [Array] motions property defined in the [Object] argument passed in the constructor
    should return the empty [Array] list
  when the new [Motion] has been added to the [Motions] collection
    should return the [Array] list with the new first [String] item that indicates the id of the new [Motion] template
  when the [Motion] has been removed from the [Motions] collection
    should return the [Array] list without the [String] item that indicates the removed [Motion] template    

The [Motions].first
  when is used as setter
    the error should be thrown that this property is not a setter
  when the motion templates are added to the [Motions] collection in the constructor
    should return the [Motion] instance that corresponds with the [0] item of the [Array] motions property defined in the [Object] argument passed in the constructor
  when the [Animation] is created without the [Array] motions property defined in the [Object] argument passed in the constructor
    should return null
  when the new (next) [Motion] has been added to the [Motions] collection
    should still return the first [Motion] instance in the [Motions] collection
  when the first [Motion] has been removed from the [Motions] collection
    should return the next (current first) [Motion] in the [Motions] collection
  when the [Motions] collection has the one [Motion] instance
    should return the same [Motion] instance as the [Motions].last getter
    and this [Motion] has been removed from the [Motions] collection
      should return null

The [Motions].last
  when is used as setter
    the error should be thrown that this property is not a setter
  when the motion templates are added to the [Motions] collection in the constructor
    should return the [Motion] instance that corresponds with the last item of the [Array] motions property defined in the [Object] argument passed in the constructor
  when the [Animation] is created without the [Array] motions property defined in the [Object] argument passed in the constructor
    should return null
  when the new (next) [Motion] has been added to the [Motions] collection
    should return this new [Motion] instance in the [Motions] collection
  when the last [Motion] has been removed from the [Motions] collection
    should return the previous (current last) [Motion] in the [Motions] collection
  when the [Motions] collection has the one [Motion] instance
    and this [Motion] has been removed from the [Motions] collection
      should return null

The [Motions].length
  when is used as setter
    the error should be thrown that this property is not a setter
  when the motion templates are added to the [Motions] collection in the constructor
    should return the [Number] value that corresponds with the length of the [Array] motions property defined in the [Object] argument passed in the constructor
  when the [Animation] is created without the [Array] motions property defined in the [Object] argument passed in the constructor
    should return [Number] 0
  when the new [Motion] has been added to the [Motions] collection
    should return the new increased (+1) [Number] value
  when some [Motion] has been removed from the [Motions] collection
    should return the new decreased (-1) [Number] value
  when the [Motions] collection has the one [Motion] instance
    and this [Motion] has been removed from the [Motions] collection
      should return 0

*/