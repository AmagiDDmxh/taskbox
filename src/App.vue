<template>
  <div id="app">
    <inbox-screen />
  </div>
</template>

<script>
import InboxScreen from "./components/InboxScreen.vue";
import store from "./store"

export default {
  name: "App",
  store,
  components: {
    InboxScreen
  }
};
</script>

<style>
@import './index.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* margin-top: 60px; */
}
</style>
