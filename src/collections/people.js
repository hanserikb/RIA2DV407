define(['backbone', 'underscore', 'jquery', 'models/person'], function(Backbone, _, $, PersonModel) {
  
  var PeopleCollection = Backbone.Collection.extend({
    model: PersonModel,    
  })

  return PeopleCollection;
})