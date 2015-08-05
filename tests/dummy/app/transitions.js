export default function(){
  this.transition(
    this.toRoute('virtual'),
    this.use('toLeft', { duration: 300 }),
    this.reverse('toRight', { duration: 300 })
  );

  this.transition(
    this.childOf(".navbar"),
    this.toValue(true),
    this.use('crossFade', {duration: 300})
  );
}
