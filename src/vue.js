// src/main.js
import App from './js/tests/src_vue/App.js';

const app = Vue.createApp({
  // render: () => Vue.h(App),
  /*------------------------------------------------*/
  components: {
    App,
  },
  template: `
    <App>
    </App>
  `,
});
app.mount('#app');
