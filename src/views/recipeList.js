define(['backbone', 'handlebars', 'text!templates/recipeList.html', '../views/dish', '../collections/dishes'], function(Backbone, Handlebars, RecipeListTemplate, DishView, DishCollection) {
  return Backbone.View.extend({
    el: '#content',
    className: 'recipeList',
    template: Handlebars.compile($(RecipeListTemplate).html()),

    initialize: function() {
      this.listenTo(this.collection, 'add', this.addOne);
      this.listenTo(this.collection, 'remove', this.addAll);
      this.render();
    },

    render: function() {
      this.collection.each(this.addOne, this);
      return this;
    },

    // Adds a single recipe to the list
    addOne: function(recipe) {
      console.log('addone');
      var view = new DishView({
          model: recipe,
          collection: this.collection
      });
      this.$el.append(view.render().el);
    },

    // Clears the container and adds all elements
    addAll: function() {
      this.$el.html('');
      this.collection.each(this.addOne, this);
    }
  });
});