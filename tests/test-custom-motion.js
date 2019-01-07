/*

When the chaining method go() or chain() is called
  with the [Object] [0] argument with the motion properties defined
    and without the id property defined, or defined incorrectly
      the new [Motion] instance is created and accessible in the [Queue] instance
      this [Motion] instance is not added to the [Motions] collection
      this [Motion].id and [Motion].properties.id getter returns the null
    and with the id property defined correctly
      that is unique
        the new [Motion] instance is created and accessible in the [Queue] instance
        this [Motion] instance is not added to the [Motions] collection
        this [Motion].id and [Motion].properties.id getter returns this defined id value
      but when the [Motions] collection has the [Motion] instance of the same id
        the new [Motion] instance is not created
        the already existing [Motion] template of this id is run in the chain instead
        all motion properties passed in the [Object] [0] argument are used to modify this running [Motion] template flow in the pending animation
        the already existing [Motion] template is not updated with the motion properties defined in the [Object] [0] argument (it retains all its previous defined motion properties)

When the [Motion] instance is created for the custom motion template in the go() or chain() chaining method
  the [Motion].properties getters should return
    the motion properties' values that have been defined for this motion template in the passed [Object] argument
    the [Defaults]'s values for all motion properties that have not been defined for this motion template in the passed [Object] argument
    the native-default values for all motion properties that have not been defined for this motion template in the passed [Object] argument and that have not been defined in the [Defaults] instance

*/