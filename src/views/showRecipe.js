define(['jQ', 'underscore', 'backbone', 'handlebars'], function($, _, Backbone, Handlebars) {
  return Backbone.View.extend({
    tagName: 'div',

    render: function() {
      
      this.$el.html(this.template(this.model.toJSON()));

      return this;
    }
  });
});