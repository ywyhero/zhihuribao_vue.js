<template>
  <div id="wrapper">
    <div>
      <sidebar class="clearfix" :listIsClick= 'listIsClick' @on-list-is-click="onListIsClick"></sidebar>
      <div class="rightSide clearfix">
        <span class="showLeft glyphicon glyphicon-list" @click="isShow" v-show="!this.$router.currentRoute.params.id"></span>
        <span class="showLeft glyphicon glyphicon-chevron-left" style="left: -3px" @click="isPrev" v-show="this.$router.currentRoute.params.id"></span>
        <router-view transition="fade"ransition-mode="out-in" keep-alive></router-view>
      </div>
    </div>
  </div>
</template>

<style>
  .clearfix {
    *zoom: 1;
  }
  .clearfix::before,
  .clearfix::after {
    display: table;
    line-height: 0;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }
  #wrapper a,#wrapper a:focus,#wrapper a:hover{
    text-decoration: none;
  }
  li{
    list-style-type:none
  }
  #wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #wrapper > div{
    width: 200%;
    height: 100%;
    overflow: hidden;
  }

  #wrapper .rightSide{
    width: 50%;
    position: relative;
    float: left;
  }
  #wrapper .showLeft{
    left: 30px;
    top: 45px;
    font-size: 30px;
    position: absolute;
    cursor: pointer;
    z-index: 2;
    color: #ddd;
  }
  #wrapper .title {
    color: rgb(255, 255, 255);
    top: 55px;
    left: 50%;
    margin-left: -60px;
    font-size: 30px;
    position: absolute;
    font-weight: 700;
    font-family: "microsoft yahei";
    z-index: 2;
    color: #fff;
  }
  #wrapper .swiper-container{
    height: 414px;
    position: relative;
    text-align: center;
  }
  #wrapper .swiper-container img{
    width: 100%;
  }
  #wrapper .swiperTitle{
    position: absolute;
    bottom: 30px;
    width: 100%;
    display: block;
    text-align: center;
    color: #fff;
    font-family: "simsun";
    font-weight: 700;
    font-size: 20px;
    font-style: normal;
  }
  #wrapper .list-group-item{
    border-radius: 0;
    border-top: 0;
    border-right: 0;
    border-left: 0;
    height: 150px;
    padding: 15px 30px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  #wrapper .list-group-item h4{
    font-size: 20px;
    font-family: 'microsoft yahei'
  }
  #wrapper .list-group-item h4.active{
    display: inline-block;
    width: 50%;
  }
  #wrapper .list-group-item img{
    float: right;
    width: 150px;
    height: 120px;
  }
  #wrapper .list-group{
    margin-bottom: 0;
  }
</style>
<script>
  import Sidebar from './components/Sidebar.vue'
  export default{
    data () {
      return {
        listIsClick: false
      }
    },
    methods: {
      isShow: function () {
        this.listIsClick = !this.listIsClick
      },
      onListIsClick: function (val) {
        this.listIsClick = val
      },
      isPrev: function () {
        this.$router.go(-1)
      }
    },
    components: {
      'sidebar': Sidebar
    }
  }
</script>

