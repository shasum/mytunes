// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    // event listener for play
    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    // event listener for enqueue
    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
      if (this.get('songQueue').length === 1) {
        song.play();
      }
    }, this);

    //event listener for dequeue
    params.library.on('dequeue', function(song){
      this.get('songQueue').remove(song);
    }, this);

    //event listener for when song finishes playing
    params.library.on('ended', function(song){
      //remove from queue
      this.get('songQueue').remove(song);
      // play next song
      if (this.get('songQueue').length > 0) {
        this.get('songQueue').at(0).play();
      }
    }, this);
  }
});
