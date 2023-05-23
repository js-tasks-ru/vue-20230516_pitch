import { createApp } from './vendor/vue.esm-browser.js';

const App = createApp({
  name: 'app',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    counterAdd() {
      this.counter += 1
    }
  },
  template:
    `<button
      type="button"
      @click="counterAdd"
    >
      {{ counter }}
    </button>`,
}).mount('#app')
