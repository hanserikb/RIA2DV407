define(['backbone', 'underscore', 'jquery', 'views/personView'], function(Backbone, _, $, PersonView) {
  var PeopleView = Backbone.View.extend({
    tagName: 'ul',

    initialize: function() {
      console.log("peopleView initialized");
      this.render();
    },

    render: function() {
      // Loopa igenom alla personer i samlingen
      this.collection.each(this.addOne, this);
    },

    addOne: function(person) {
      var personView = new PersonView({model: person});
      this.$el.append(personView.render().el)
    }
  });

  return PeopleView;
});