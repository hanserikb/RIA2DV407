// Model for a single person
define(['backbone'], function(Backbone) {

  var Person = Backbone.Model.extend({
    // Default values
    defaults: {
      firstName: 'Förnamn',
      lastName: 'Efternamn'
    },

    validate: function(attrs) {
      // Name cant be blank
      if (!attrs.firstName || !attrs.lastName) {
        return 'Du måste ange förnamn och efternamn';
      };
    },

    // Constructor
    initialize: function() {
      console.log('Person Model Initialized');
      this.on('change:done', function() {
        console.log(this + "changed");
      })
    },

    // Return concatinated string with first and last name
    fullName: function(){
      return this.firstName + " " + this.lastName;
    }
    
  });
  return Person;
})