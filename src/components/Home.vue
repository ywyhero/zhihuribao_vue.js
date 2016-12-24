<template>
  <div class="nav">
    <span class="title">今日新闻</span>
    <swipe-module></swipe-module>
    <contentList></contentList>
  </div>
</template>
<script>
  import Content from './Content.vue'
  import Swiper from './Swiper.vue'
  export default {
    components: {
      'swipe-module': Swiper,
      'contentList': Content
    }
  }
</script>
