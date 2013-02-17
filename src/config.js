require.config({
  // Anger sökvägen till våra bibliotek. Utgår ifrån denna fil.
  paths: {
    'text': '../lib/requirejs-text/text',
    'jquery': '../lib/jquery/jquery',
    'underscore': '../lib/underscore-amd/underscore',
    'handlebars': '../lib/handlebars.js/dist/handlebars',
    'backbone': '../lib/backbone/backbone',
    'backbone-relational': '../lib/backbone-relational/backbone-relational',
    'backbone.localStorage': '../lib/backbone.localStorage/backbone.localStorage',
    'bootstrap-modal-jakobmattsson': '../lib/bootstrap-modal-jakobmattsson/js/bootstrap-modal',
    'jasmine': '../lib/jasmine/lib/jasmine-core/jasmine',
    'jasmine-jquery': '../lib/jasmine-jquery/lib/jasmine-jquery',
    'jasmine-html': '../lib/jasmine/lib/jasmine-core/jasmine-html'
  },
  shim: {
    jasmine: {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'backbone-relational': {
      deps: ['backbone'],
      exports: 'Backbone'
    },
    'backbone.localStorage': {
      deps: ['backbone'],
      exports: 'Backbone'
    },
    'bootstrap-modal-jakobmattsson': {
      deps: ['backbone'],
      exports: 'Backbone'
    },
    'handlebars': {
      exports: 'Handlebars' 
    }
  }
});

// Run test suite or start app, depending on where we were included
if (window.TEST) {
  require(['../test/config']);
} else {
  require(
  ['views/app', 'router'], function(AppView, Router) {
    new Router();
    Backbone.history.start();

    window.appView = new AppView();
  });
}