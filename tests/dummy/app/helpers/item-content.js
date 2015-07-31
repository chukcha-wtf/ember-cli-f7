import Ember from 'ember';

export default {
  render(params/*, hash*/) {
    return '<li class="item-content">' +
              '<div class="item-inner">' +
                `<div class="item-title">${params}</div>` +
              '</div>' +
            '</li>';
  }
};