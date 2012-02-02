define([], function () {

	// Permissions

	// A permissions structure can support checking
	// against subscriptions prior to allowing them 
	// to clear. This enforces a flexible security 
	// layer for your application.
	
	// Turn on permission checking by setting this to true
	var override_permissions = true;

	var permissions = {

		// Permissions Structure
		// can `subscriptionName` get messages from `channel`?
		// channel : {
		//   subscrptionName: true/false
		// }

		routeChanged: {
			masterViewChange:true
		}

	};

	permissions.validate = function(subscriber, channel){
		if(!override_permissions){
			var test = permissions[channel][subscriber];
			return test===undefined? false: test;
		} else {
			return true;
		}
	};


	return permissions;

});