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
// src/components/App.js
import BaseButton from './BaseButton.js';

export default {
  name: 'App',
  components: {
    BaseButton,
  },
  data() {
    return {
      count: 0,
    };
  },
  template: `
    <div>
      Count: {{ count }}
      <BaseButton @click="count += 1">
        +1
      </BaseButton>
    </div>
  `,
};