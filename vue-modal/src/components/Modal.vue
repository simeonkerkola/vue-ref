<template>
  <div class="modal">
    <h2>I'm Modal</h2>
    <slot />
  </div>
</template>

<style scoped>
.modal {
  background: cyan;
  color: black;
  padding: 20px;
  width: 200px;
  position: absolute;
}
</style>
