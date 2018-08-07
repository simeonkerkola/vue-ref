<template>
  <div id="app">
    <div :class="[isShowing ? blurClass : '', bkClass]">
      <h2>trigger the Modal!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem facilis 
        recusandae id, aperiam delectus enim! Deleniti, qui. Quidem possimus 
        maxime cumque delectus odio cum quaerat iste, debitis praesentium tempora 
        qui.
      </p>
      <button @click="toggleShow">
        <span v-if="isShowing">Hide</span>
        <span v-else>Show</span>
      </button>
    </div>
    <transition name="fade">
      <Modal 
        v-if="isShowing" 
      >
        <button @click="toggleShow">Close</button>
      </Modal>
    </transition>
    <br>
    <br>
    <br>
    <div :class="[isShowing ? blurClass : '', bkClass]">
      <Tooltip>
        <span slot="tooltip-text">Hover me</span>
        <p slot="tooltip-tip">I'm the tip!</p>
      </Tooltip>
    </div>
  </div>
</template>

<script>
import Modal from './components/Modal.vue';
import Tooltip from './components/Tooltip.vue';

import { toggle } from './components/mixins/toggle';
export default {
  name: 'App',
  components: {
    Modal,
    Tooltip
  },
  mixins: [toggle],
  data() {
    return {
      bkClass: 'bk',
      blurClass: 'blur'
    };
  }
};
</script>

<style>
body {
  font-family: sans-serif, serif;
  display: flex;
  justify-content: center;
}

#app {
  text-align: center;
  margin: 60px;
  max-width: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}

button {
  font-family: sans-serif;
  border: 2px solid black;
  background: white;
  padding: 10px 15px;
  margin: 0 10px;
  outline: 0;
  width: 60%;
  cursor: pointer;
}

h4 {
  margin: 0 0 15px;
}

/* x-enter-active name comes from vue, <transition name="fade"> */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.bk {
  transition: all 0.05s ease-out;
}

.blur {
  filter: blur(1px);
  opacity: 0.4;
}
</style>
