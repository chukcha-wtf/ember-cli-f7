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
  },

  initSwipePanels(panels){
    f7.params.swipePanel = panels;
    f7.initSwipePanels();
  }
});
