define(['jQ', 'backbone', 'handlebars', 'text!recipeListTemplate', 'recipeView'], function($, Backbone, Handlebars, RecipeListTemplate, RecipeView) {
  return Backbone.View.extend({
    el: '#content',
    className: 'recipeList',
    template: Handlebars.compile(RecipeListTemplate),

    initialize: function() {
      this.collection.fetch();

      // Setting up eventlisteners
      this.listenTo(this.collection, 'add', this.addOne);
      this.listenTo(this.collection, 'remove', this.addAll);

      // Render the collection
      this.render();
    },

    // Iterating over the collections models and renders them individually
    render: function() {
      this.collection.each(this.addOne, this);
      return this;
    },

    // Renders & adds a single recipe to the view element
    addOne: function(recipe) {
      var view = new RecipeView({
          model: recipe,
          collection: this.collection
      });
      this.$el.append(view.render().el);
    },

    // Clears the container and render all elements
    addAll: function() {
      this.$el.html('');
      this.collection.each(this.addOne, this);
    }
  });
});