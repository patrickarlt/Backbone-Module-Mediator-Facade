define([], function(obj){

  var channels = {};
  if (!obj) obj = {};

  obj.subscribe = function (channel, subscription) {
    if (!channels[channel]) channels[channel] = [];
    channels[channel].push(subscription);
    return channels[channel].length -1;
  };

  obj.publish = function (channel) {
    if (!channels[channel]) return;
    var args = [].slice.call(arguments, 1);
    for (var i = 0, l = channels[channel].length; i < l; i++) {
      if(typeof channels[channel][i] === "function"){
        channels[channel][i].apply(this, args);
      }
    }
  };

  obj.unsubscribe = function(channel, subscription_number){
    channels[channel][subscription_number] = null;
  }

  return obj;

});
