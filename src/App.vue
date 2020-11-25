<template>
  <div id="app">
    <Header />
    <Search />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
export default {
  name: 'App',
  components: {
    Header,
    Search
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: auto;
}
</style>
