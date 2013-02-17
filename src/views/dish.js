define(['backbone', 'handlebars', 'text!templates/dish.html', 'bootstrap-modal-jakobmattsson'], function(Backbone, Handlebars, DishTemplate) {
  return Backbone.View.extend({
    tagName: 'div',
    template: Handlebars.compile($(DishTemplate).html()),

    initialize: function() {
      this.on('change', function() {
        console.log('dish just changed!');
      });

      var view = Backbone.View.extend({
        tagName: 'div',
        template: Handlebars.compile('<div>HEJEHEJ</div>'),
        initialize: function() {
          this.render();
        },
        render: function() {
          $el.html(this.template);
          return this;
        }

      });

      var modal = new Backbone.BootstrapModal({ content: view }).open();
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
});