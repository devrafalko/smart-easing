/*

When the new [Animation] instance is created
  it should have the 'beforeAll', 'afterAll', 'beforeEach', 'afterEach', 'afterDelay', 'render', 'onPause', 'onResume' getter
    that returns the null
      by default, when any [Function] has been set for the event (both in constructor and with setters)
      when the incorrect value was set for the event in the constructor
      when the null has already been set for the event and then the incorrect value was set for the event with setters
      when the [Function] has already been set for the event and then the null was set for the event with setters
    that returns the [Function] function
      that has been set for the event
        in the constructor, when the new [Animation] instance was created
        by [Animation] event setters
      when the [Function] has already been set for the event and then the incorrect value was set for the event with setters
    that returns the new [Function] function
      when the [Function] has already been set for the event and then the new [Function] was set for the event with setters

Each [Function] event handler
  should refer to the [Animation] instance with the 'this' keyword

*/