import Ember from 'ember';

export default Ember.Mixin.create({
  renderTemplate() {
    const currentName = this.get('templateName') || this.routeName;
    const renderInto = this.get('f7.materialTheme') ? currentName : 'application';

    this.render();
    this.render(`${currentName}-navbar`, {
      outlet: 'navbar',
      into: renderInto
    });
  },

  actions: {
    loading(transition, route) {
      this.get('f7').showIndicator();

      this.router.one('didTransition', ()=>{
        this.get('f7').hideIndicator();
      });

      return true;
    }
  }
});
