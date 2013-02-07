require.config({
  
  // Anger startpunkten för applikationen. 
  // Utgår ifrån baseUrl-direktivet. Eftersom vi inte har överlagrat detta är
  // baseUrl för tillfället data-main-attributet på script-taggen
  //deps: ['main'], 
  
  // Anger sökvägen till våra bibliotek. Utgår ifrån denna fil.
  paths: {
    'text': '../lib/requirejs-text/text',
    'jquery': '../lib/jquery/jquery',
    'underscore': '../lib/underscore-amd/underscore',
    'backbone': '../lib/backbone/backbone',
    'backbone-relational': '../lib/backbone-relational/backbone-relational',
    'backbone.localStorage': '../lib/backbone.localStorage/backbone.localStorage',
    'jasmine': '../lib/jasmine/jasmine/lib/jasmine-core/jasmine',
    'jasmine-jquery': '../lib/jasmine-jquery/lib/jasmine-jquery'
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
    }
  }
});

// Run test suite or start app, depending on where we were included
if(window.TEST) {
  require(['../test/config']);
} else {
  require(
  ['views/app', 'router'], function(AppView, Router) {

    new Router();
    Backbone.history.start();


    new AppView();
  });
}