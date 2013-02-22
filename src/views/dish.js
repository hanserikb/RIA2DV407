define(['jQ', 'underscore', 'backbone', 'handlebars', 'text!templates/dish.html'], function($, _, Backbone, Handlebars, DishTemplate) {
  return Backbone.View.extend({
    tagName: 'div',
    // Using handlebars to compile templates
    template: Handlebars.compile(DishTemplate),

    initialize: function() {
      // Reacts on changes
      this.on('change', function() {
        console.log('dish just changed!');
      });
    },

    // Renders a single dish into a div using the given model object
    // Also returns the complete view
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
});