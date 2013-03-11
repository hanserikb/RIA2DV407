define(['jQ', 'underscore', 'backbone', 'handlebars', 'text!addRecipeTemplate', 'recipeModel', 'ingredientModel', 'ingredientView'], function($, _, Backbone, Handlebars, AddRecipeTemplate, RecipeModel, IngredientModel, IngredientView) {
  return Backbone.View.extend({
    template: Handlebars.compile(AddRecipeTemplate),
    formData: {},

    // Sets up model if none passed
    // Adds listeners and toggles the modal
    initialize: function(opts) {
      this.model = opts && opts.model || new RecipeModel();
      this.render();

      // Listen to model validation errors
      this.listenTo(this.model, 'invalid', this.checkErrors);
      this.listenTo(this.model, 'change', this.checkErrors);

      this.on('ingredient:destroy', this.renderIngredients);
      this.toggleModal();

    },

    // Shows or hides the modal window
    toggleModal: function() {
      _.bind(setTimeout(function() {
        this.$('#add-recipe-modal').modal('toggle').css({
          width: 'auto',
          'margin-left': function () {
            return -($(this).width() / 2);
          }
        });
      }, 0), this);
      
    },

    // Render the errors and append them to a error-container
    checkErrors: function(model) {
      this.$('#errors').html('');
      if (model.isValid()) {
        _.each(model.validationError, function(error) {
          this.$('#errors').append(error.message + '<br>');
        }, this);
      }
    },

    events: {
      // Validate model on every keyup
      'keyup input': 'inputChange',
      'keyup textarea': 'inputChange',

      // Submit form
      'submit form': 'addRecipe',

      'click #additem': 'addIngredient'
    },

    addRecipe: function(e) {
      // Prevent form from submitting
      e.preventDefault();

      // Add the model object to the collection
      this.collection.add(this.model);
      

      // Close the modal
      this.$('#add-recipe-modal').modal('toggle');
    },

    renderIngredients: function() {
      _.each(this.model.get('ingredients'), function(ingredient) {
        that.renderIngredient(ingredient);
      }, this);
    },

    renderIngredient: function(model) {
      this.$('.ingredients').append(new IngredientView({model: model}).render().$el);
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

    addIngredient: function(e) {
      //if(e.keyCode == 13) {
        //e.preventDefault();
        var name = this.$('#ingredient').val();

        // Create a new model object and make a relation to the current recipe
        var newIngredient = new IngredientModel({name: name, belongsTo: this.model});

        console.log(newIngredient)
        // Append it to the list
        this.renderIngredient(newIngredient);
     //  }
   },

   render: function() {
    this.$el.html(this.template());
    return this;
  }
});
});