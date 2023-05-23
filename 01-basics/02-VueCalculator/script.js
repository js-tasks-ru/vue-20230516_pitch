import { createApp } from './vendor/vue.esm-browser.js';

const App = createApp({
  name: 'app',
  data(){
    return{
      action: undefined,
      number: {
        left: 0,
        right: 0
      },
      inputRadios: [
        {
          value: 'sum',
          symbol: '➕'
        },
        {
          value: 'subtract',
          symbol: '➖'
        },
        {
          value: 'multiply',
          symbol: '✖'
        },
        {
          value: 'divide',
          symbol: '➗'
        },
      ]
    }
  },
  computed:{
    result() {
      return this.calculation()
    },
  },
  methods:{
    calculation(){
      if(!this.action) {
        return 0
      } else if(this.action === 'sum') {
        return this.number.left + this.number.right
      } else if(this.action === 'subtract') {
        return this.number.left - this.number.right
      } else if(this.action === 'multiply') {
        return this.number.left * this.number.right
      } else if(this.action === 'divide') {
        return this.number.left / this.number.right
      }
    }
  },
}).mount('#app')
