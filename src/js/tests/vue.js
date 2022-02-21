// src/main.js
import App from './src_vue/App.js';

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
