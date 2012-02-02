define([ "../aura/mediator" , "../aura/permissions" ],
function (mediator, permissions) {

	var facade = facade || {};

	facade.subscribe = function(subscriber, channel, callback){

		// Note: Handling permissions/security is optional here
		// The permissions check can be removed 
		// to just use the mediator directly.
		
		if(permissions.validate(subscriber, channel)){
			mediator.subscribe( channel, callback );
		}
	}

	facade.publish = function(channel){
		mediator.publish(channel);
	}

	facade.extend = function (sub, channel, callback) {
		if(permissions.validate(sub, channel)){
	    var subscription = function () {
	      this.subscription = sub;
	      this.channel = channel;
	      this.callback = callback;
	      this.number = mediator.subscribe( channel, callback );
	    };

	    subscription.prototype = {
	      activate: function(){
	        mediator.unsubscribe(this.channel, this.number);
	        console.log(this);
	      },
	      deactive: function(){
	        this.subscription_number = mediator.subscribe( channel, callback );
	      }
	    };

	    return new subscription();
	  }
  };

	return facade;

});