<template>
  <div class="cartunit">
    <h2>Your cart</h2>
    <p>Thank you for shopping with us.</p>
    <div v-if="cart" />
    <div v-else>
      <p>Your cart is empty, why not fill it up with something?</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: ""
    };
  }
};
</script>
<style scoped>
</style>
