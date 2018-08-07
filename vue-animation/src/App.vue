<template>
  <div id="app">
    <h3>Bounce the Ball!</h3>
    <button @click="toggleShow">
      <span v-if="isShowing">Get it gone!</span>
      <span v-else>Here we go!</span>
    </button>
    <transition
      name="ballmove"
      enter-active-class="bouncein"
      leave-active-class="rollout">
      <div v-if="isShowing">
        <Ball class="ball-area" />
      </div>
    </transition>
  </div>
</template>

<script>
import Ball from './components/Ball.vue';
export default {
  name: 'App',
  components: {
    Ball
  },
  data() {
    return {
      isShowing: false
    };
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    }
  }
};
</script>

<style lang="scss">
@mixin ballb($yaxis: 0) {
  transform: translate3d(0, $yaxis, 0);
}
@mixin ballr($xaxis: 0) {
  transform: rotate3d($xaxis, 0, 0);
}

@keyframes bouncein {
  1% {
    @include ballb(-400px);
  }
  20%,
  40%,
  60%,
  80%,
  95%,
  99%,
  100% {
    @include ballb();
  }
  30% {
    @include ballb(-80px);
  }
  50% {
    @include ballb(-40px);
  }
  70% {
    @include ballb(-30px);
  }
  90% {
    @include ballb(-15px);
  }
  97% {
    @include ballb(-10px);
  }
}

@keyframes rollout {
  0% {
    transform: translate3d(0, 300px, 0);
  }
  100% {
    transform: translate3d(1000px, 300px, 0);
  }
}

@keyframes ballroll {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(1000deg);
  }
}
.ballmove-enter {
  @include ballb(-400px);
}

.bouncein {
  animation: bouncein 0.8s cubic-bezier(0.25, -0.24, 0.36, 1.57) both;
}

.rollout {
  width: 60px;
  height: 60px;
  animation: rollout 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  div {
    animation: ballroll 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }
}

body {
  font-family: sans-serif, serif;
  width: 100vw;
  height: 100vh;
  background: #eee; /* Old browsers */
  background: linear-gradient(to bottom, #eee 0%, #ccc 65%, #eee 99%);
}

#app {
  text-align: center;
  margin: 60px;
  max-width: 320px;
  margin: 0 auto;
  display: table;
}

.num {
  color: #af007e;
}

button {
  font-family: sans-serif;
  background: #c62735;
  color: white;
  border: 0;
  padding: 5px 15px;
  margin: 0 10px;
  border-radius: 4px;
  outline: 0;
  cursor: pointer;
}

h4 {
  margin: 0 0 15px;
}

hr {
  border-color: #f2faff;
  opacity: 0.5;
  margin: 15px 0;
}

.ball {
  width: 60px;
  height: 60px;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/soccerball.svg');
  transform-origin: 50% 50%;
  transform: translate3d(0, 300px, 0) rotate(0);
}
</style>
