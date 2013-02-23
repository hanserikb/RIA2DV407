define(['jQ', 'underscore', 'backbone', 'handlebars', 'text!addRecipeTemplate', 'recipeModel'], function($, _, Backbone, Handlebars, AddRecipeTemplate, RecipeModel) {
  return Backbone.View.extend({
    template: Handlebars.compile(AddRecipeTemplate),
    formData: {},

    initialize: function(opts) {
      this.model = opts && opts.model || new RecipeModel();
      this.render();
        // Listen to model validation errors
        this.listenTo(this.model, 'invalid', this.renderErrors);
        this.listenTo(this.model, 'change', this.modelChanged);
      },

      modelChanged: function(model){
        if (model.isValid) {
          $('#errors').html('');
        }
    },

    // Render the errors and append them to a error-container
    renderErrors: function(model) {
      console.log('rendererrors');
      this.$('#errors').html('');
      _.each(model.validationError, function(error) {
        // TODO: Render the messages in HTML
        $('#errors').append(error.message + '<br>');
      });
    },

    events: {
      // Validate model on every keyup
      'keyup input': 'inputChange',
      'keyup textarea': 'inputChange'
    },

    // Sets the model to the typed value
    inputChange: function(e) {
      // Gets the field the user is typing in
      var field = $(e.currentTarget);

      // Populate the formData object with correct values
      // Gets the model attribute name from the form input-field ID
      // (string-dependency == bad??)
      this.formData[field.attr('id')] = field.val();

      // Sets values on the recipe model object
      this.model.set(this.formData, {validate: true});
    },

    render: function() {
      this.$el.html(this.template());
      return this;
    }
  });
});