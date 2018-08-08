<template>
  <section class="container">
    <div class="flexrow">
      <div 
        v-for="unit in manifest" 
        :key="unit.name"
        class="unit">
        <child 
          :item="unit.item" 
          :url="unit.url" />
      </div>
    </div>
  </section>
</template>

<script>
import Child from '~/components/Child.vue';

export default {
  components: {
    Child
  },
  data() {
    return {
      manifest: [
        {
          item: 'backpack',
          url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/backpack.jpg'
        },
        {
          item: 'tshirt',
          url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/tshirt.jpg'
        },
        {
          item: 'sweatshirt',
          url:
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/sweatshirt.jpg'
        }
      ]
    };
  }
};
</script>

<style>
/* Page transition ANIMATION  */
.page-enter-active {
  animation: acrossIn 0.4s ease-out both;
}

.page-leave-active {
  animation: acrossOut 0.4s ease-in both;
}

@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(100%, 0, 0);
  }
}
</style>
