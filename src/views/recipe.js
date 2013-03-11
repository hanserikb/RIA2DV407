define(['jQ', 'underscore', 'backbone', 'handlebars', 'text!recipeTemplate'], function($, _, Backbone, Handlebars, RecipeTemplate) {
  return Backbone.View.extend({
    tagName: 'div',
    // Using handlebars to compile templates
    template: Handlebars.compile(RecipeTemplate),

    initialize: function() {
      // Reacts on changes
      this.on('change', function() {
        console.log('dish just changed!');
      });
    },

    events: {
      'click .showmore': function(e) {
        e.preventDefault();
      },
      'click .deleteRecipe': 'deleteRecipe'
    },

    // Renders a single dish into a div using the given model object
    // Also returns the complete view
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    deleteRecipe: function(e) {
      e.preventDefault();
      this.model.destroy();
    }

  });
});