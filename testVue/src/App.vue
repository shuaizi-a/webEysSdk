<script setup>
import HelloWorld from './components/HelloWorld.vue';
const jsErr = () => {
  var num = new Number(33.22);
  console.log(num.toFixed(-1));
};
</script>

<template>
  <div>
    <button @click="jsErr">js错误模拟</button>
  </div>
  <img src="http://toutiao.com/x.png" alt="1" />
  <img src="http://toutiao.com/x2.png" alt="2" />
  <img src="http://toutiao.com/x3.png" alt="3" />

  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
