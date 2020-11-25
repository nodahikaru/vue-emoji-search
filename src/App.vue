<template>
  <div id="app">
    <Header />
    <Search />
    <Results :emojiFiltered="emojiData"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import Results from "./components/Results.vue";
import data from "./assets/data.json";

export default {
  name: 'App',
  data() {
    return {
      emojiData: data
    }
  },
  components: {
    Header,
    Search,
    Results
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
