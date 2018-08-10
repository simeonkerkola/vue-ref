<template>
  <div>
    <div class="cartunit">
      <h2>Your cart</h2>
      <div v-if="cart.length">
        <ul>
          <li 
            v-for="item in cart" 
            :key="item.item">
            {{ item.item }} {{ item.quantity }} {{item.price}}€
          </li>
        </ul>
        <div>Cart total is: {{total}}</div>
      </div>
      <div v-else>
        <p>Your cart is empty, why not 
          <nuxt-link 
            exact 
            to="/" 
            class="logo">fill it up with something?
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex';

export default {
  computed: {
    cart() {
      return this.$store.getters.cartItems;
    },
    total() {
      return this.$store.getters.cartTotal;
    }
  }
};
</script>

<style scoped>
.cartunit {
  padding-top: 120px;
  width: 600px;
  padding: 120px 0 40px;
  max-width: 900px;
  margin: 0 auto;
}

h2 {
  margin-bottom: 40px;
}
</style>
