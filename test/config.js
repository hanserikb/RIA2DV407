// Laddar in nödvändiga bilbiotek för att köra igång test
define(['jquery', 'jasmine',
  'jasmine-html',
  '../test/spec/models/dishSpec', 
  '../test/spec/collections/dishCollectionSpec',
  '../test/spec/views/dish',
  '../test/spec/views/recipeList',
  '../test/spec/views/addRecipe'], function($, jasmine) {
  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  jasmineEnv.execute();

});