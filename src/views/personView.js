define(['backbone', 'underscore', 'jquery', 'text!templates/person.html'], function(Backbone, _, $, personTemplate) {
  var personView = Backbone.View.extend({
    tagName: 'li',

    template: _.template($(personTemplate).html()),

    initialize: function () {
      this.render();
    },
    render: function() {
      this.$el.html( this.template(this.model.toJSON()) );
      return this;
    }
  });

  return personView;
})