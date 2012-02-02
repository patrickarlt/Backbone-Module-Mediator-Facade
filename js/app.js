require.config({
  paths: {
    jquery: 'lib/jquery/jquery-min',
    underscore: 'lib/underscore/underscore-min',
    backbone: 'lib/backbone/backbone-optamd3-min',
    text: 'lib/require/require-text-min'
  }
});

require([
  'backbone',
  'views/master',
  'router'
], function(Backbone, AppView, AppRouter){
  var app_view = new AppView;
  var app_router = new AppRouter;
  Backbone.history.start();
});