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
      this.$().find('.infinite-scroll-preloader').hide();
      
      this.$().on('infinite', ()=>{
        if (this.get('loading')) {
          return;
        }

        this.set('loading', true);

        const deferred = Ember.RSVP.defer();
        deferred.promise.finally(()=>{
          this.set('loading', false);
        });
        this.sendAction('onInfiniteScroll', deferred);
      });
    } else {
      this.set('loading', false);
      this.$().off('infinite');
    }
  }),

  observeLoading: Ember.observer('loading', function(){
    if (this.get('loading')) {
      this.$().find('.infinite-scroll-preloader').show();
    } else {
      this.$().find('.infinite-scroll-preloader').hide();
    }
  })
});
