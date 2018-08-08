<template>
  <div>
    <li> 
      <img :src="commentpost.authorImg" class="post-img" > 
      <small>{{ commentpost.author }}</small>
      <p class="post-comment">"{{ commentpost.text }}"</p>
    </li>
  </div>
</template>


<script>
export default {
  props: ['commentpost']
};
</script>
