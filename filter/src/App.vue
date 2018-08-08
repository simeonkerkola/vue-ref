<template>
  <div id="app">
    <small>Your place here: </small>
    <input 
      v-model.number="num" 
      type="number"
      min="1"
      max="10"
      step="1">
    <div class="won">
      <h2>Congratulations!</h2>
      <p 
        v-color="'red'" 
        v-if="num"> You won <span>{{ num | place }}</span> place!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  filters: {
    place: function(value) {
      if (value == 1) return `${value}st`;
      else if (value == 2) return `${value}nd`;
      else if (value == 3) return `${value}rd`;
      return `${value}th`;
    }
  },
  directives: {
    color: function(el, binding) {
      el.style.color = binding.value;
    }
  },
  data() {
    return {
      num: 2
    };
  }
};
</script>

<style>
body {
  font-family: sans-serif;
}

#app {
  text-align: center;
  max-width: 420px;
  margin: 50px auto;
  display: table;
  padding: 10px 40px;
  border: 1px solid black;
}

h2 {
  border-bottom: 1px solid #ed9909;
}

span {
  font-size: 40px;
}

.won {
  background: #ffc968;
  padding: 10px 20px;
  border-radius: 3px;
  margin: 10px;
}
</style>
