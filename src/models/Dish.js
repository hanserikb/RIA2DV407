define(['backbone'], function(Backbone) {
   
    var Dish = Backbone.Model.extend({
      defaults: {
        name: "N/A"
      }
    });
   
    return Dish; 
});