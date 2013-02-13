define(['backbone'], function(Backbone) {

    // Dish model
    return Backbone.Model.extend({
      defaults: {
        name: '',
        description: 'No description',
        cookingTime: 'N/A'
      },
      validate: function(attrs) {

        // Array to hold errors
        var errors = [];

        if (!attrs.name) {
          errors.push({name: 'name', message: 'You must enter a name for the dish'});
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