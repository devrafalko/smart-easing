/*

When the new [Animation] instance is created
  it has the [Animation].time property with [Time] instance
    that has 'current' getter accessible
      that returns [Current] object with the 'elapsed', 'remaining', 'delay' and 'duration' getters
    that has 'all' getter accessible
      that returns [All] object with the 'elapsed', 'remaining' and 'duration' getters

The [Time], [Current] and [All] instances should not
  have any other than public methods, properties, getters and setters
  let to define any new methods, properties, getters and setters
  let to delete any existing methods, properties, getters and setters
  let to modify any existing methods, properties, getters and setters

The [Time] instance
  before the animation is run for the first time

*/