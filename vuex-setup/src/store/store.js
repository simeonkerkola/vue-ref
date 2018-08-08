import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    comments: [
      {
        text: 'Looks great Julianne!',
        author: 'Robin Rendle',
        authorImg:
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-coffee.jpg'
      },
      {
        text: 'I love the Sea',
        author: 'Miriam Suzanne',
        authorImg:
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-miriam.jpg'
      },
      {
        text: 'Where are you?',
        author: 'Geoff Graham',
        authorImg:
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-geoff.jpg'
      }
    ]
  },
  // Showing things, not mutating state
  getters: {
    trippleCounter: state => {
      return state.counter * 3;
    }
  },
  // mutations are always synchronous
  mutations: {
    increment: (state, num) => {
      state.counter += num;
    }
  }
});