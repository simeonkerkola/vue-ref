<template>
  <div>
    <div class="cartunit">
      <h2>Your cart</h2>
      <div v-if="cart.length" class="cart-content">
        <ul class="cart-list">
          <li 
            class="cart-list__item"
            v-for="item in cart" 
            :key="item.item">
            {{ item.item }} {{ item.quantity }} {{item.price}}€
          </li>
          <li class="cart-list__item--total">Cart total: {{total}}</li>
        </ul>
        <button class="btn btn-checkout">
          Checkout
        </button>
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
.btn-checkout {
  margin-top: 40px;
  align-self: center
}
li {
  list-style: none;
}
.cart-list {
  display: flex;
  flex-direction: column;
}
.cart-list__item {
  
}
.cart-list__item--total {
  align-self: flex-end;
  margin-top: 40px;
  font-weight: bold;
}
.cartunit {
  padding-top: 120px;
  width: 600px;
  padding: 120px 0 40px;
  max-width: 900px;
  margin: 0 auto;
}
.cart-content {
  display: flex;
  flex-direction: column;
}

h2 {
  margin-bottom: 40px;
}
</style>
