// AppView.js - Defines a backbone view class for the whole music app.
// App view is a container for all the other views
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    //collection need .bind to listen to different events
    this.model.get('songQueue').bind('add', function(model){
      this.songQueueView.render();
      if (this.model.get('songQueue').length === 1) {
        this.model.get('songQueue').playFirst();
      }
    }, this);

    this.model.get('songQueue').bind('remove', function(model){
      this.songQueueView.render();
      if (this.model.get('songQueue').length === 0){
        this.playerView.stop();
        this.model.set('currentSong', null);
      } else {
        if (!this.model.get('songQueue').contains(this.model.get('currentSong'))) {
          this.model.get('songQueue').playFirst();
        }
      }
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
