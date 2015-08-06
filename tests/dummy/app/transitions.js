import config from 'dummy/config/environment';

const isMetro = config.framework7 && config.framework7.theme === 'material';

const pageTransitionDirection = isMetro ? 'toUp' : 'toLeft';
const pageTransitionBack = isMetro ? 'crossFade' : 'toRight';
const transitionDuration = isMetro ? 200 : 300;

const transitionWithReverse = function(route) {
  this.transition(
    this.toRoute(route),
    this.use(pageTransitionDirection, { duration: transitionDuration }),
    this.reverse(pageTransitionBack, { duration: transitionDuration })
  );  
};

export default function(){

  transitionWithReverse.call(this, 'virtual');
  transitionWithReverse.call(this, 'items.show');
    
  if (!isMetro) {
    this.transition(
      this.childOf(".navbar"),
      this.toValue(true),
      this.use('crossFade', {duration: transitionDuration})
    );
  }
}
