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

      var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
      var android = (navigator.userAgent.match(/(Android|android)/g) ? true : false );

      if(iOS || android){
        var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
        if(isChrome){
          var w = (window.parent)?window.parent:window
          w.location.assign('firstoneto://resetpassword/' + data.aggregateId + '/' + data.resetPasswordId);
        } else {
          javascript:document.location = 'firstoneto://resetpassword/' + data.aggregateId + '/' + data.resetPasswordId;
        }
      }
      else {
        var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
        if(isChrome){
          var w = (window.parent)?window.parent:window
          w.location.assign('http://firstoneto.com/#/resetpassword/' + data.aggregateId + '/' + data.resetPasswordId);
        } else {
          javascript:document.location = 'http://firstoneto.com/#/resetpassword/' + data.aggregateId + '/' + data.resetPasswordId;
        }
      }
    }
});

App.ResetpasswordController = Ember.Controller.extend({
  
    init: function () {
    this._super();
    },
});