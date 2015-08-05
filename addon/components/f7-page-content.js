import Ember from 'ember';
import layout from '../templates/components/f7-page-content';

export default Ember.Component.extend({
  layout: layout,
  classNameBindings: [':page-content', 'pullToRefresh:pull-to-refresh-content', 'infiniteScroll:infinite-scroll'],
  infiniteScroll: Ember.computed.notEmpty('attrs.onInfiniteScroll'),
  pullToRefresh: Ember.computed.notEmpty('attrs.onPullToRefresh'),
  loading: false,

  setupPullToRefresh: Ember.on('didInsertElement', function(){
    if (this.get('pullToRefresh')) {
      this.get('f7').initPullToRefresh(this.$());
      
      this.$().on('refresh', ()=>{
        const deferred = Ember.RSVP.defer();
        deferred.promise.finally(()=>{
          this.get('f7').pullToRefreshDone();
        });
        this.sendAction('onPullToRefresh', deferred);
      });
    } else {
      this.$().off('refresh');
    }
  }),

  setupInfiniteScroll: Ember.on('didInsertElement', function(){
    if (this.get('infiniteScroll')) {
      this.get('f7').attachInfiniteScroll(this.$());

      if (this.get('f7.materialTheme')) {
        this.$().find('.infinite-scroll-preloader').hide();
      } else {
        this.get('f7').hideIndicator();
      }
      
      this.$().on('infinite', ()=>{
        if (this.get('loading')) {
          return;
        }

        this.set('loading', true);

        const deferred = Ember.RSVP.defer();
        deferred.promise.finally((detach)=>{
          this.set('loading', false);
        });
        this.sendAction('onInfiniteScroll', deferred);
      });
    } else {
      this.set('loading', false);
      this.$().off('infinite');
    }
  }),

  listenTransitionsEnd: Ember.on('didInsertElement', function(){
    const el = document.getElementsByClassName('liquid-container');
    Ember.$.Velocity(el, 'scroll', ()=>{
      if (this.get('virtualList')) {
        this.get('f7').showIndicator();
        Ember.run.later(()=>{
          this.set('virtualList', this.get('f7').reinitVirtualList(this.get('virtualListContainer')));
          this.get('f7').hideIndicator();
        }, 300);
      } else {
        this.setupVirtualList();
      }
    });
  }),

  setupVirtualList: Ember.on('didInsertElement', function(){
    const container = this.get('virtualListContainer');

    if (container && this.$(container)) {
      if (this.$(container).length > 1) {
        throw new Error("You're trying to initialize more than 1 virtual list");
      }

      if (this.$(container).length < 1) {
        throw new Error(`Please specify a container '${container}' for virtual list`);
      }

      this.get('f7').virtualList(container, this.get('virtualListConfig') || {});

      Ember.run.once(()=>{
        if (!this.get('virtualList')) {
          this.set('virtualList', this.$(container)[0].f7VirtualList);
        }
      });
    }
  }),

  observeVirtualListItems: Ember.observer('virtualListConfig.items', function(){
    if (this.get('virtualListConfig.items')) {
      this.setupVirtualList();
    }
  }),

  observeLoading: Ember.observer('loading', function(){
    if (this.get('f7.materialTheme')) {
      if (this.get('loading')) {
        this.get('f7').showIndicator();
      } else {
        this.get('f7').hideIndicator();
      }
    } else {
      if (this.get('loading')) {
        this.$().find('.infinite-scroll-preloader').show();
      } else {
        this.$().find('.infinite-scroll-preloader').hide();
      }
    }
  })
});
