<template>
  <div
    :key="id"
    class="item"
    title="Copy Emoji to Clipboard"
    @click="handleClick"
    v-clipboard="() => symbol"
  >
    <div
      class="item-copy"
      :class="[fadeIn ? 'label-true' : 'label-false']"
    >
      Copied!
    </div>
    <span class="item-emoji">{{symbol}}</span>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      fadeIn: false
    }
  },
  props: {
    id: String,
    symbol: String,
    keywords: String
  },
  created() {
    this.fadeIn = false;
  },
  methods: {
    handleClick() {
      this.fadeIn = true;
      setTimeout(() => {
        this.fadeIn = false;
      }, 900);
    }
  }
}
</script>
<style>
.item {
  position: relative;
  width: 100px;
  height: 180px;
  background: white;
  margin: 15px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: -5px -5px 15px #ffffff99, 5px 5px 15px #142b4711;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  box-sizing: border-box;
  cursor: pointer;
  transition: box-shadow 0.3s;
}
.item-copy {
  position: absolute;
  background: #0077ff33;
  color: #0077ff;
  font-weight: 700;
  border-radius: 6px;
  font-size: 0.8em;
  padding: 6px;
  bottom: 8px;
  left: 8px;
  transition: opacity 0.3s;
  cursor: pointer;
}

.label-true {
  opacity: 1;
}

.label-false {
  opacity: 0;
}
.item-emoji {
  font-size: 2.4em;
  cursor: pointer;
}
.item:hover {
  box-shadow: -5px -5px 15px #ffffff99, 5px 5px 15px #152b4711, 0 0 0 5px #0077ff49;
}

@media only screen and (max-width: 600px) {
  .item {
    height: 120px;
    width: 130px;
  }
  .item-emoji {
    font-size: 1.6em;
  }
}
</style>