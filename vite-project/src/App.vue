<template>
  <img alt="Vue logo" src="./assets/logo.png" class="w-200"/>
  <span class="text-5xl">tailwindcss</span>
  <Header/>
  <HelloWorld :msg="'this is helloWorld'" />
  <NavBar/>
</template>
<script setup lang="ts">
import Header from "./components/Header.vue";
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar";
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
