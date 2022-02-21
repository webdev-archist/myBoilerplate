/* 1°)
// src/components/App.js
import BaseButton from './App.js';

export default {
  name: 'App',
  data() {
    return {
      count: 0,
    };
  },
  render() {
    return Vue.h('div', [
      `Count: ${this.count}`,
      Vue.h(BaseButton, {
        onClick: () => { this.count += 1 },
      }, () => '+1'),
    ]);
  },
};
*/

/* 2°) 
*/

export default {
  name: 'BaseButton',
  data() {
    return {
      value: "ok, je suis un bouton",
    };
  },
  template: `
    <div>
      {{value}}
    </div>
  `,
};