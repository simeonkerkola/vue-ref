const app = new Vue({
  el: '#app',
  data() {
    return {
      num1: 0,
      num2: 0,
      result: 0,
      name: '',
      tacos: [
        'veg',
        'non-veg',
        'spicy'
      ]
    }
  },
  methods: {
    add() {
      this.result = this.num1 + this.num2
    }
  }
})