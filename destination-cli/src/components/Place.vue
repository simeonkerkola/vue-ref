<template>
  <div class="place">
    <img 
      :src="img" 
      width="235" 
      height="300">
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true }
  }
};
</script>

<style scoped>
.place {
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 320px;
  justify-content: center;
  background: white;
  border: 1px solid #ddd;
  padding: 20px 20px;
  margin: 10px;
}
</style>
