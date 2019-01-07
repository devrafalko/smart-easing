/*

When the motion property is not defined in the [Defaults] instance
  the [Defaults] getter should return native-default value for this motion property
  the motion template (from constructor, motions.add and the custom motion template)
    that does not have its own motion property defined
      should take the native-default value for this motion property
    that has its own motion property defined
      correctly
        should return this defined value
      incorrectly
        should take the native-default value for this motion property
When the motion property is defined in the [Defaults] instance in the constructor
  correctly
    the [Defaults] getter should return this defined value
    the motion template (from constructor, motions.add and the custom motion template)
      that does not have its own motion property defined
        should take the [Defaults] value for this motion property, rather than the native-default value
      that has its own motion property defined
        correctly
          should return this defined value
        incorrectly
          should take the [Defaults] value for this motion property, rather than the native-default value or the incorrect value
  incorrectly
    the [Defaults] getter should return the native-default value for this motion property
    the motion template (from constructor, motions.add and the custom motion template)
      that does not have its own motion property defined
        should take the native-default value for this motion property, rather than the incorrect [Defaults] value
      that has its own motion property defined
        correctly
          should return this defined value
        incorrectly
          should take the native-default value for this motion property, rather than this incorrect value or the incorrect [Defaults] value
When the motion property is defined for the first time in the [Defaults] instance with the setter
  correctly
    the [Defaults] getter should return this defined value
    the motion template (from constructor, motions.add and the custom motion template) that has been added both before and after this motion property has been defined in the [Defaults]
      that does not have its own motion property defined
        should take the [Defaults] value for this motion property, rather than the native-default value
      that has its own motion property defined
        correctly
          should return this defined value
        incorrectly
          should take the [Defaults] value for this motion property, rather than this incorrect value
  incorrectly
    the [Defaults] getter should return the native-default value for this motion property
    the motion template (from constructor, motions.add and the custom motion template) that has been added both before and after this motion property has been defined in the [Defaults]
      that does not have its own motion property defined
        should take the native-default value for this motion property, rather than the incorrect [Defaults] value
      that has its own motion property defined
        correctly
          should return this defined value
        incorrectly
          should take the native-default value for this motion property, rather than this incorrect value or the incorrect [Defaults] value

When the motion property is re-defined in the [Defaults] instance with the setter (after being defined either in the constructor or with [Defaults] setters)
  correctly
    the [Defaults] getter should return this new defined value
    the motion template (from constructor, motions.add and the custom motion template) that has been added both before and after this motion property has been defined in the [Defaults]
      that does not have its own motion property defined
        should take the [Defaults] new value for this motion property, rather than the [Defaults] previous value
      that has its own motion property defined
        correctly
          should return this defined value
        incorrectly
          should take the [Defaults] new value for this motion property, rather than this incorrect value
  incorrectly
    the [Defaults] getter should return the [Defaults] previous value for this motion property rather than this incorrect value
    the motion template (from constructor, motions.add and the custom motion template)  that has been added both before and after this motion property has been defined in the [Defaults]
      that does not have its own motion property defined
        should take the [Defaults] previous value for this motion property, rather than the [Defaults] new incorrect value
      that has its own motion property defined
        correctly
          should return this defined value
        incorrectly
          should take the [Defaults] previous value for this motion property, rather than this incorrect value or the [Defaults] new incorrect value

*/