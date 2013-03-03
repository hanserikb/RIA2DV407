define(['backbone','recipeModel', 'backbone-relational'], function(Backbone, RecipeModel) {
  return  Backbone.RelationalModel.extend({
    
    defaults: {
      name: "",
      amount: ""
    },
    validate: function(attrs) {
      var errors = [];

      if (!attrs.name) {
        errors.push({ name: "name", message: 'Enter a name, fool!'})
      }

      if (!attrs.amount) {
        errors.push({ name: "amount", message: 'Enter an amount, fool!'})
      };

      return errors;
    }
  })
});