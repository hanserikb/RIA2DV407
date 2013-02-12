define(['backbone'], function(Backbone) {
   
    var Dish = Backbone.Model.extend({
      defaults: {
        name: '',
        description: 'No description.'
      },
      validate: function(attrs) {

        // Array to hold possible errors
        var errors = [];

        if (!attrs.name) {
          errors.push({name: 'name', message: 'You must enter a name for the dish'});
        }

        if (attrs.name.length > 256) {
          errors.push({name: 'name', message: 'Maximum name length is 256 character'});
        }

        // Return errors or false
        return errors.length > 0 ? errors : false;
      }
    });
   
    return Dish;
});