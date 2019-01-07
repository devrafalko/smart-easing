/*

Motion templates
  can be reused many times with the chaining methods.
  when are added to the motions collection with motions.add method
    during the animation is pending
      they are accessible in the motions collection right after they have been added, eg. in render() callback
  when are removed from the [Motions] collection with [Motions].remove method
    during the animation is pending
      the further chaining methods that indicate this [Motion] are ignored and omitted
  when is updated with some new motion properties during the animation is pending (eg. in render event)
    it should take effect for the next motion template use in the queue (and not for the current one)
  when the defaults motion properties are updated during the animation is pending and this motion template takes these defaults motion properties
    it should take effect for the next motion template use in the queue (and not for the current one)

*/