define([
  'jquery',
  'underscore', 
  'backbone',
  'text!templates/master.html',
  '../aura/mediator',
  '../aura/facade',
  '../subscriptions'
], function($, _, Backbone, masterTemplate, Mediator, Facade){

  var AppView = Backbone.View.extend({

    el: "body",

    template: _.template(masterTemplate),
  
    facade: {
      routeChange: Facade.extend("masterViewChange", "routeChanged", function(route){
        console.log("Change view to " + route);
      }),
      renderComplete: Facade.extend("postMasterRender", "masterRendered", function(){
          console.log("Master was rendered");
      })
    },

    events: {},
    
    initialize: function() {
      this.render();
      Mediator.publish("masterRendered", this);
    },

    render: function() {
      $(this.el).html(this.template());
    }

  });

  return AppView;

});