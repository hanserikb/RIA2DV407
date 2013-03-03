define(['backbone', 'ingredientModel'], function(Backbone, IngredientModel) {
    // Dish model
  return Backbone.RelationalModel.extend({
    relations: [{
        type: Backbone.HasMany,
        key: 'ingredients',
        relatedModel: IngredientModel,
        //collectionType: 'IngredientCollection',
        reverseRelation: {
          key: 'belongsTo'
          //includeInJSON: 'id'
    }
  }],
  defaults: {
    name: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque enim. Phasellus rhoncus tempor vestibulum. Nam volutpat libero vel ipsum interdum aliquet. Duis suscipit pulvinar suscipit. Donec vitae tempus justo. Nunc adipiscing tempus diam, vitae pretium mi iaculis a. Cras sit amet nibh non magna malesuada venenatis.',
    cookingTime: 'N/A',
    author: 'N/A'
  },
  initialize: function() {
    
  },
  validate: function(attrs) {
        // Array to hold errors
        var errors = [];

        if (!attrs.name) {
          errors.push({name: 'name', message: 'You must enter a name for the recipe'});
        }

        if (!attrs.description) {
          errors.push({name: 'description', message: 'You must enter a description for the recipe'});
        }

        if (attrs.name.length > 256) {
          errors.push({name: 'name', message: 'Maximum name length is 256 character'});
        }

        if (attrs.description.length > 1024) {
          errors.push({name: 'description', message: 'Maximum description length is 1024 characters'});
        }

        if (attrs.cookingTime.length > 20) {
          errors.push({name: 'cookingTime', message: 'Maximum cooking time length is 20 characters'});
        };

        // Return errors or false
        return errors.length > 0 ? errors : false;
      }
    });
});