
// Konfiguration till Require.js för testning
// Inspiration hämtad från http://kilon.org/blog/2012/08/testing-backbone-requirejs-applications-with-jasmine/
require.config({  

  // Lägger till en querystring så cache-problem löses
  urlArgs: 'cb=' + Math.random(),

  // Sökväg till bibliotek
  paths: {
    'text': '../lib/requirejs-text/text',
    'jquery': '../lib/jquery/jquery',
    'underscore': '../lib/underscore-amd/underscore',
    'backbone': '../lib/backbone/backbone',
    'backbone-relational': '../lib/backbone-relational/backbone-relational',
    'backbone.localStorage': '../lib/backbone.localStorage/backbone.localStorage',
    'jasmine': '../lib/jasmine/lib/jasmine-core/jasmine',
    'jasmine-html': '../lib/jasmine/lib/jasmine-core/jasmine-html',
    'jasmine-jquery': '../lib/jasmine-jquery/lib/jasmine-jquery'
  },
  // Lägger till AMD-stöd till bibliotek som behöver det
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

// Laddar in nödvändiga bilbiotek för att köra igång test
define(['jquery', 'jasmine-html'], function($, jasmine) {
  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  // Lägg till specsen i arrayen så kör Specrunnern dem
  var specs = [];
  specs.push('spec/models/PersonSpec');

  $(function() {
    require(specs, function() {
        jasmineEnv.execute();
    });
  });
});

