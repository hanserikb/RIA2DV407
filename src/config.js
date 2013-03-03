require.config({
  // ## Paths to modules and libraries. Relative to this file.
  paths: {

    // ### Libraries
    'text': '../lib/requirejs-text/text',
    'jQ': '../lib/jquery/jquery',
    'modal': '../lib/bootstrap/js/bootstrap-modal',
    'underscore': '../lib/underscore/underscore',
    'handlebars': '../lib/handlebars.js/dist/handlebars',
    'pureBackbone': '../lib/backbone/backbone',
    'backbone': '../lib/backbone/backbone.module',
    'backbone-relational': '../lib/backbone-relational/backbone-relational',
    'localstorage': '../lib/backbone.localStorage/backbone.localStorage',
    'jasmine': '../lib/jasmine/lib/jasmine-core/jasmine',
    'jasmine-jquery': '../lib/jasmine-jquery/lib/jasmine-jquery',
    'jasmine-html': '../lib/jasmine/lib/jasmine-core/jasmine-html',


    // ### Models
    'recipeModel': 'models/recipe',
    'ingredientModel': 'models/ingredient',

    // ### Collections
    'recipeCollection': 'collections/recipes',

    // ### Views
    'appView': 'views/app',
    'addRecipeView': 'views/addRecipe',
    'recipeView': 'views/recipe',
    'recipeListView': 'views/recipeList',
    'showRecipeView': 'views/showRecipe',
    'ingredientView': 'views/ingredient',

    // ### Templates
    'addRecipeTemplate': 'templates/addRecipe.html',
    'recipeTemplate': 'templates/recipe.html',
    'recipeListTemplate': 'templates/recipeList.html',

    // ### Other
    'router': 'router'
  },
  shim: {
    jQ: {
      init: function() {
        console.log('Shimming jquery');
        return this.$;
      }
    },
    underscore: {
      init: function() {
        console.log('Shimmming underscore');
        return this._;
      }
    },
    backbone: {
      deps: ['pureBackbone']
    },
    pureBackbone: {
      deps: ['jQ', 'underscore'],
      exports: 'Backbone'
    },
    localstorage: {
      deps: ['jQ', 'pureBackbone', 'underscore'],
    },
    'backbone-relational': {
      deps: ['pureBackbone'],
    },
    'handlebars': {
      exports: 'Handlebars'
    },
    'modal': {
      deps: ['jQ']
    },
    jasmine: {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    }
  }
});

// Run test suite or start app, depending on where we were included
if (window.TEST) {
  require(['../test/config']);
} else {
  require(
    ['backbone', 'appView', 'router'], function(Backbone, AppView, Router) {
      new Router();
      Backbone.history.start();

      var appView = new AppView();
    });
  
}