define([
  'jquery',
  'underscore', 
  'backbone',
  'aura/mediator',
], function ($, _, Backbone, mediator) {

  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'index'
    },
    initialize: function(options) {
      var self = this;
      $(document).on("click", "a:not([data-bypass])", function(evt) {
        // Get the anchor href and protcol
        var href = $(this).attr("href");
        var protocol = this.protocol + "//";
        if (href && href.slice(0, protocol.length) !== protocol) {
          evt.preventDefault();
          self.navigate(href, true);
        }
      });
    },
    index: function(){
      mediator.publish('routeChanged', 'index');
    }
  })

  return AppRouter;

});