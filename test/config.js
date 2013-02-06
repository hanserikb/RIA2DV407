require.config({
  
  // Anger startpunkten för applikationen. 
  // Utgår ifrån baseUrl-direktivet. Eftersom vi inte har överlagrat detta är
  // baseUrl för tillfället data-main-attributet på script-taggen
  //baseUrl: '/src/',

  // Anger sökvägen till våra bibliotek. Utgår ifrån denna fil.
  paths: {
    'text': '../lib/requirejs-text/text',
    'jquery': '../lib/jquery/jquery',
    'underscore': '../lib/underscore-amd/underscore',
    'backbone': '../lib/backbone-amd/backbone',
    'jasmine': '../lib/jasmine/lib/jasmine-core/jasmine',
    'jasmine-html': '../lib/jasmine/lib/jasmine-core/jasmine-html',
    'jasmine-jquery': '../lib/jasmine-jquery/lib/jasmine-jquery',
  },
  shim: {
    jasmine: {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    }
  }
});

require(['underscore', 'jquery', 'jasmine-html'], function(_, $, jasmine) {
  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;


  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  }

  var specs = [];
  specs.push('spec/models/PersonSpec');

  $(function() {
    require(specs, function() {
        jasmineEnv.execute();
    })
  })
})