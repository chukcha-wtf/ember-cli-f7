import config from 'dummy/config/environment';

export default function(){
  const isMetro = config.framework7 && config.framework7.theme === 'material';

  const pageTransitionDirection = isMetro ? 'toUp' : 'toLeft';
  const pageTransitionBack = isMetro ? 'toUp' : 'toRight';
  const transitionDuration = isMetro ? 200 : 300;

  this.transition(
    this.toRoute('virtual'),
    this.use(pageTransitionDirection, { duration: transitionDuration }),
    this.reverse(pageTransitionBack, { duration: transitionDuration })
  );

  if (!isMetro) {
    this.transition(
      this.childOf(".navbar"),
      this.toValue(true),
      this.use('crossFade', {duration: transitionDuration})
    );
  }
}
