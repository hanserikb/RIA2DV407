define([
  'backbone', 
  'underscore',
  'views/personView',
  'models/person',
  'collections/people',
  'views/peopleView'], function(Backbone, _, personView, personModel, PeopleCollection, PeopleView) {

  var foo1 = new personModel();
  var foo2 = new personModel();
  var foo3 = new personModel();

  var peopleCollection = new PeopleCollection();
  peopleCollection.add(foo1);
  peopleCollection.add(foo2);
  peopleCollection.add(foo3);

  var peopleView = new PeopleView({ collection: peopleCollection })
  console.log(peopleView.el)
});