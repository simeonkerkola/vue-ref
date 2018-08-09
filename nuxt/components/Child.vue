<template>
  <div>
    <div class="item">
      <h2>{{ item }}</h2>
      <img 
        :src="url" 
        width="235" 
        height="300">
      <div class="quantity">
        <button 
          class="inc" 
          @click="quantity > 0 ? quantity -= 1 : 0">-</button>
        <span class="quant-text">Quantity: {{ quantity }}</span>
        <button 
          class="inc" 
          @click="quantity += 1">+</button>
      </div>
      <button 
        class="submit" 
        @click="addItemToCart({item, quantity})">Submit</button>
    </div>
  </div>
</template>


<script>
import { mapActions } from 'vuex';
export default {
  props: ['item', 'url'],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    addItemToCart(item) {
      this.$store.dispatch('addItemToCart', item).then(() => {
        this.$store.dispatch('peekSnackbar', {
          message: `item added to cart`
        });
      });
    }
  }
};
</script>

<style scoped>
</style>
