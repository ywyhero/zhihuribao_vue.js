<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in guideData">
        <img class="imgload" :src="item.image">
        <i class="swiperTitle">{{item.title}}</i>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

  </div>
</template>
<style>

</style>
<script>
  import Swiper from 'swiper'
  require('../../static/swiper-3.4.0.min.css')

  export default {
    data () {
      return {
        apiUrl: '/4/news/latest',
        guideData: []
      }
    },
    methods: {
      fixImageUrl (guideData) {
        if (guideData) {
          guideData.forEach(function (list) {
            list.image = list.image.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
          })
        }
      },
      getData: function () {
        var that = this
        that.$http.get(this.apiUrl)
          .then(function (response) {
            that.guideData = response.data.top_stories
            that.fixImageUrl(that.guideData)
          })
      }
    },
    mounted () {
      var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        longSwipesRatio: 0.3,
        touchRatio: 1,
        observer: true,
        observeParents: true
      })
      console.log(mySwiper)
      this.getData()
    }
  }
</script>
