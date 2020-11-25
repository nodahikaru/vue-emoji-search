<template>
  <div class="results">
    <Item
      v-for="emoji in emojiFiltered"
      :key="emoji.symbol"
      :id="$uuid.v4()"
      :symbol="emoji.symbol"
      :title="emoji.title"
      :keywords="emoji.keywords"
    />
  </div>
</template>
<script>
import Item from './Item.vue';
export default {
  props: ['emojiFiltered'],
  components: {
    Item
  }
}
</script>
<style>
.results {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
}
</style>