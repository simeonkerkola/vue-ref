<template>
  <div id="app">
    <div>
      <mainmenu />
      <div class="flexrow">
        <div 
          v-for="unit in manifest" 
          class="unit">
          <child 
            :item="unit.item" 
            :url="unit.url" />
        </div>
      </div>
      <cart />
    </div>
  </div>
</template>

<script>
import Child from "./components/Child.vue";
import Cart from "./components/Cart.vue";
import Mainmenu from "./components/Mainmenu.vue";
export default {
  name: "App",
  components: {
    Child,
    Cart,
    Mainmenu
  },
  data() {
    return {
      manifest: [
        {
          item: "backpack",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/backpack.jpg"
        },
        {
          item: "tshirt",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/tshirt.jpg"
        },
        {
          item: "sweatshirt",
          url:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/sweatshirt.jpg"
        }
      ]
    };
  }
};
</script>

<style>
body,
html {
  font-family: "PT Serif", serif;
}

.flexrow {
  padding-top: 80px;
  display: flex;
  justify-content: center;
}

.cartunit {
  padding: 40px 0;
  max-width: 900px;
  margin: 0 auto;
}

header {
  background: #222;
  padding: 5px 10px 10px;
  width: 100vw;
  color: white;
  position: fixed;
  display: flex;
  align-content: center;
  justify-content: center;
}
header ul {
  padding-left: 0;
}
header a {
  color: white;
  text-decoration: none;
  padding: 0 10px;
  transition: all 0.2s ease;
}
header a:hover {
  color: #e6534b;
}

.stamp {
  width: 30px;
  height: 30px;
  margin: 10px;
  float: left;
}

.cart {
  width: 40px;
  height: 40px;
  margin: 5px;
}

.special,
h1,
h2,
h3,
li,
button.submit,
.quant-text {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
}

h2 {
  font-size: 20px;
  margin: 0 0 5px;
  text-align: center;
}

li {
  list-style: none;
  display: inline-block;
}

input {
  background: #eee;
}

button {
  border: none;
  border-radius: 1000px;
  padding: 8px 13px;
  outline: none;
  cursor: pointer;
}
button.inc {
  background: white;
  color: black;
}
button.submit {
  background: black;
  color: white;
  margin-left: 20px;
  padding: 12px 14px;
  width: 240px;
  transition: 0.25s all ease-in;
}
button.submit:hover {
  opacity: 0.8;
  transition: 0.25s all ease-out;
}

.quant-text {
  display: inline-block;
  text-align: center;
  width: 140px;
  padding: 8px;
  padding: 8px;
}

.quantity {
  border: 2px solid black;
  width: 235px;
  padding-left: 3px;
  border-radius: 1000px;
  background: #fff;
  margin-left: 20px;
}

.item {
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 440px;
  justify-content: space-around;
  background: #eee;
  padding: 20px 10px;
  margin: 30px;
}
.item img {
  align-self: center;
}
</style>
