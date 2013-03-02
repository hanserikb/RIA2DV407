// Laddar in nödvändiga bilbiotek för att köra igång test
define(['jQ', 'jasmine',
  'jasmine-html',
  '../test/spec/models/dishSpec', 
  '../test/spec/collections/dishCollectionSpec',
  '../test/spec/views/dish',
  '../test/spec/views/recipeList',
  '../test/spec/views/addRecipe',
  '../test/spec/views/showRecipe',
  '../test/spec/models/ingredientSpec'], function($, jasmine) {
  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  jasmineEnv.execute();

});