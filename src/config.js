require.config({
  // Anger sökvägen till våra bibliotek. Utgår ifrån denna fil.
  paths: {
    'text': '../lib/requirejs-text/text',
    'jquery': '../lib/jquery/jquery',
    'underscore': '../lib/underscore-amd/underscore',
    'handlebars': '../lib/handlebars.js/dist/handlebars',
    'pureBackbone': '../lib/backbone/backbone',    
    'backbone': '../lib/backbone/backbone.module',
    'backbone-relational': '../lib/backbone-relational/backbone-relational',
    'localstorage': '../lib/backbone.localStorage/backbone.localStorage',
    'jasmine': '../lib/jasmine/lib/jasmine-core/jasmine',
    'jasmine-jquery': '../lib/jasmine-jquery/lib/jasmine-jquery',
    'jasmine-html': '../lib/jasmine/lib/jasmine-core/jasmine-html',
    'Bootstrap-modal': '../lib/bootstrap/js/bootstrap-modal'
  },
  shim: {
    jquery: {
      init: function() {
        return this.jQuery.noConflict(true);
      }
    },
    backbone: {
      deps: ['pureBackbone'],
    },
    pureBackbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    jasmine: {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    },
    'backbone-relational': {
      deps: ['underscore', 'pureBackbone']
    },
    'localstorage': {
      deps: ['underscore', 'pureBackbone']
    },
    'handlebars': {
      exports: 'Handlebars'
    },
    'Bootstrap-modal': {
      exports: 'Bootstrap-modal'
    }
  }
});

// Run test suite or start app, depending on where we were included
if (window.TEST) {
  require(['../test/config']);
} else {
  require(
    ['views/app', 'router', 'pureBackbone'], function(AppView, Router, Backbone) {
      new Router();
      Backbone.history.start();

      window.appView = new AppView();
    });
}