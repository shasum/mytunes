// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);  // the second this specifies to the listener which song triggered this method
  },
  enqueue: function(){
    this.trigger('enqueue', this); // trigger gets captured in AppModel
  },
  dequeue: function(){
    this.trigger('dequeue', this);
  },
  ended: function(){
    this.trigger('ended', this);
  }

});
