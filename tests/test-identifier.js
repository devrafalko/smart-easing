/*

When the motion template is added in the constructor
When the motion template is added with motions.add
  as the [Motion] instance (cases for: the custom motion, removed motion, the motion from another animation)
    and this [Motion] instance has id=null
      the default id is automatically set for this [Motion] instance
      the [Motion].id and [Motion].properties.id getter should return this id value
      the new motion template should not be created
      this motion template is added to the motions collection
      and when the motions collection already has [Motion] instance of the id, that will be generated for this motion
        the next unique (free) id should be generated for this motion template
        the [Motion].id and [Motion].properties.id getter should return this id value
        the new motion template should not be created
        this motion template is added to the motions collection with unique id
        the already existing motion template in the collection should not be updated 
    and this [Motion] instance has its id
      and any motion template of this id exists in the motions collection
        the motion retains its id
        the [Motion].id and [Motion].properties.id getter should return this id value
        the new motion template should not be created
        the motion is added to the motions.collection
      and there is an already existing motion template of this id in the motions collection
        and this is the same [Motion] instance as the added one
          it should be ignored
        and this is another [Motion] instance as the added one, just has the same id
          the new motion template should not be created
          the already existing [Motion] instance in the motions collection should be updated
            //only the individual motion properties of the adding [Motion] instance should be taken to update the already existing one
      and there is a motion template of this id but removed from the motions collection
        the motion retains its id
        the [Motion].id and [Motion].properties.id getter should return this id value
        the new motion template should not be created
        the motion is added to the motions.collection
        the removed motion template should not be updated
  as the [Object] motion templates
    with the 'id' property not defined or defined incorrectly
      the new motion template should be created
      the default id is automatically set for this [Motion] instance
      the [Motion].id and [Motion].properties.id getter should return this id value
      this motion template is added to the motions collection
      and when the motions collection already has [Motion] instance of the id, that will be generated for this motion
        the next unique (free) id should be generated for this motion template
        the [Motion].id and [Motion].properties.id getter should return this id value
        this motion template is added to the motions collection with unique id
        the already existing motion template in the collection should not be updated 
    with the 'id' property defined
      and any motion template of this id exists in the motions collection
        the new motion template should be created
        the motion retains its id
        the [Motion].id and [Motion].properties.id getter should return this id value
        the motion is added to the motions.collection
      and there is an already existing motion template of this id in the motions collection
        the new motion template should not be created
        the already existing [Motion] instance in the motions collection should be updated
          //only motion properties defined in the object should be used to update the [Motion] instance in the motions collection
      and there is a motion template of this id but removed from the motions collection
        the new motion template should be created  
        the motion retains its id
        the [Motion].id and [Motion].properties.id getter should return this id value
        the motion is added to the motions.collection
        the removed motion template should not be updated
  as the [String] identifier
    and any motion template of this id exists in the motions collection
      the new motion template should be created
      the motion retains its id
      the [Motion].id and [Motion].properties.id getter should return this id value
      this motion template is added to the motions collection
    and there is an already existing motion template of this id in the motions collection
      it should be ignored as there is nothing to update
    and there is a motion template of this id but removed from the motions collection
      the new motion template should be created
      the motion retains its id
      the [Motion].id and [Motion].properties.id getter should return this id value
      this motion template is added to the motions collection
  as any other incorrect type object or value
    the new motion template should be created
    the default id is automatically set for this [Motion] instance
    the [Motion].id and [Motion].properties.id getter should return this id value
    this motion template is added to the motions collection
    and when the motions collection already has [Motion] instance of the id, that will be generated for this motion
      the next unique (free) id should be generated for this motion template
      this motion template is added to the motions collection with unique id
      the already existing motion template in the collection should not be updated 

When the default 'id' property is set for the motion templates
  and the motion template is removed from the motions collection
    the next motion template default 'id' is generated as the continuous increasing integer

When the custom motion template is passed through the go() or chain() chaining method
  with id motion property not defined or defined incorrectly
    the new motion template should be created
    this motion template is not added to the motions collection
    the [Motion].id and [Motion].properties.id getter should return null
  with (unique) id motion property defined
    the new motion template should be created
    this motion template is not added to the motions collection
    the [Motion].id and [Motion].properties.id getter should return this id value
    the motion that already exists in the motions collection with the same id should not be updated
    
When the [Motion].id or [Motion].properties.id setter is used
  to redefine the id motion property, when it returns some [String] identifier
    it should be ignored
    any error should be thrown
    the [Motion].id or [Motion].properties.id should return the already defined id
  to define the id motion property, when it returns null
    the new identifier should be set
    the [Motion].id and [Motion].properties.id getter should return this id value

*/