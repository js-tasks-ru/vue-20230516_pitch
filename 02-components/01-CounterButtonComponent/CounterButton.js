import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  props: {
    count:{
      type: Number,
      required: true,
      default: 0
    }
  },
  emits: ['update:count'],
    methods:{
      countAdd(){
        const result = this.count + 1
        this.$emit('update:count', result)
      }
    },
  template: `
    <button
      type="button"
      @click="countAdd"
    >
      {{ count }}
    </button>
  `,
});
