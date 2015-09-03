// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

// Controller
// Invokes intended methods on the Model
  events: {
    'click': function() {
      this.model.enqueue();   // enqueue intent invoked from Songs model
    }                         // which in turn triggers event listener at AppModel
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
