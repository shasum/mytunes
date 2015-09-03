// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel

});

// var list = new Songs([{song1}, {song2}, {song3}]);
// now each song here,song1, song2, song3, is a SongModel, this is automatic by backbone