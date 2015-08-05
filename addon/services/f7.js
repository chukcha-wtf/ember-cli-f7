import Ember from 'ember';

let f7 = new Framework7({
  init: false
});

f7.f7Init = f7.init;
f7.init = function(){
  return this._super();
};


let preloaderTimeout = null;

export default Ember.Service.extend(f7, {
  currentDevice: Framework7.prototype.device.os,

  isAndroid: Ember.computed.equal('currentDevice', 'android'),
  isIOS: Ember.computed.equal('currentDevice', 'ios'),
  materialTheme: Ember.computed('isAndroid', function(){
    return this.config.framework7 && this.config.framework7.theme === 'material';
  }),
  iosTheme: Ember.computed('isIOS', function(){
    return this.config.framework7 && this.config.framework7.theme === 'ios';
  }),

  init() {
    f7.params.material = this.config.framework7 && this.config.framework7.theme === 'material';
    f7.f7Init();

    return this._super();
  },

  showPreloader(options) {
    options = options || {};

    if (options.delay) {
      preloaderTimeout = Ember.run.later(()=>{
        preloaderTimeout = null;
        f7.showPreloader();
      }, options.delay);
    } else {
      f7.showPreloader();
    }
  },

  hidePreloader(){
    if (preloaderTimeout) {
      Ember.run.cancel(preloaderTimeout);
      preloaderTimeout = null;
    } else {
      f7.hidePreloader();
    }
  }
});
