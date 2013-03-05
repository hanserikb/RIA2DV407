// Laddar in nödvändiga bilbiotek för att köra igång test
define(['jQ', 'jasmine',
  'jasmine-html',
  '../test/spec/models/recipeSpec', 
  '../test/spec/collections/recipesSpec',
  '../test/spec/views/recipeSpec',
  '../test/spec/views/recipeListSpec',
  '../test/spec/views/addRecipeSpec',
  '../test/spec/views/showRecipeSpec',
  '../test/spec/models/ingredientSpec',
  '../test/spec/views/ingredientSpec'], function($, jasmine) {
  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  jasmineEnv.execute();

});