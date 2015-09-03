// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

// clicking executes the play() and the enqueue() on this.model which references a SongModel instance
// Library controller --> it decides what should be done next
  events: {
    'click': function() {
      this.model.play();      // play intent sent to the Songs model --> event listener at AppModel
      this.model.enqueue();   // enqueue intent sent to the Songs model --> event listener at AppModel
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
