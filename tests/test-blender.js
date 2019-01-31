/*

If the [Blender].id method is set for the [Animation].render event, but not called
  it is ignored ([Animation] instance is not connected with [Blender] instance)
If the [Blender].id method is not set for the [Animation].render event and called
  it is ignored
If the [Blender].id method is set for the [Animation].render event and called without the [String] argument
  it is ignored ([Animation] instance is not connected with [Blender] instance)
If the [Blender].id method is set for the [Animation].render event and called with the duplicated [String] identifier
  this [Animation] instance replaces the [Animation] instance that has been previously connected to the [Blender] instance with the same identifier

*/