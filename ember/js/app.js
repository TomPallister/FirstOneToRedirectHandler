App = Ember.Application.create({
    // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: true, 

  // Extremely detailed logging, highlighting every internal
  // step made while transitioning into a route, including
  // `beforeModel`, `model`, and `afterModel` hooks, and
  // information about redirects and aborted transitions
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_ACTIVE_GENERATION: true
});

App.Router.map(function() {
    this.resource('resetpassword', {path: '/resetpassword/:aggregateId/:resetPasswordId' });
    this.resource('index', { path: '/' });
});


App.ResetpasswordView = Ember.View.extend({
  didInsertElement: function() {   
  }
});

App.ResetpasswordRoute = Ember.Route.extend({  
    beforeModel: function() {
    },

    setupController: function(controller, data) {

      alert(navigator.platform);

      var iOS = navigator.platform.indexOf("iOS") != -1;
      var android = navigator.platform.indexOf("android") != -1;

      if(!iOS || !android){
        var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
        if(isChrome){
          var w = (window.parent)?window.parent:window
          w.location.assign('http://firstoneto.com/#/resetpassword/' + data.aggregateId + '/' + data.resetPasswordId);
        } else {
          javascript:document.location = 'http://firstoneto.com/#/resetpassword/' + data.aggregateId + '/' + data.resetPasswordId;
        }
      }
      else {
        var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
        if(isChrome){
          var w = (window.parent)?window.parent:window
          w.location.assign('firstoneto://resetpassword/' + data.aggregateId + '/' + data.resetPasswordId);
        } else {
          javascript:document.location = 'firstoneto://resetpassword/' + data.aggregateId + '/' + data.resetPasswordId;
        }
      }
    }
});

App.ResetpasswordController = Ember.Controller.extend({
  
    init: function () {
    this._super();
    },
});