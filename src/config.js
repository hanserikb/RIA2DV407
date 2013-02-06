require.config({
  
  // Anger startpunkten för applikationen. 
  // Utgår ifrån baseUrl-direktivet. Eftersom vi inte har överlagrat detta är
  // baseUrl för tillfället data-main-attributet på script-taggen
  deps: ['main'], 
  
  // Anger sökvägen till våra bibliotek. Utgår ifrån denna fil.
  paths: {
    'text': '../lib/requirejs-text/text',
    'jquery': '../lib/jquery/jquery',
    'underscore': '../lib/underscore-amd/underscore',
    'backbone': '../lib/backbone-amd/backbone',
    'jasmine': '../lib/jasmine/jasmine/lib/jasmine-core/jasmine',
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