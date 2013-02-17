define(['backbone', 'handlebars', 'text!templates/dish.html'], function(Backbone, Handlebars, DishTemplate) {
  return Backbone.View.extend({
    tagName: 'li',
    template: Handlebars.compile($(DishTemplate).html()),

    initialize: function() {
      this.on('change', function() {
        console.log('dish just changed!');
      });
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
});