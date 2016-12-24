<template>
  <div>
    <div class="header" v-if="bodyContent.image">
      <img :src="bodyContent.images" style="position: absolute;left: 0;width: 100%;z-index: -1;height:150px">
      <span class="description">{{bodyContent.title}}</span>
      <span class="imgSource">图片：{{bodyContent.image_source}}</span>
    </div>
    <div class="listDetail"></div>
  </div>
</template>
<style>
  img{
    width: 100%;
  }
  #wrapper .header{
    height: 150px;
    position: relative;
  }
  #wrapper .description{
    width: 100%;
    display: block;
    text-align: center;
    position: absolute;
    bottom: 30px;
    color: #fff;
    font-weight: 700;
    font-family: "microsoft yahei";
    font-size: 24px;
  }
  #wrapper .imgSource{
    color: #ddd;
    position: absolute;
    bottom: 10px;
    right: 10%;
  }
  #wrapper .listDetail{
    padding: 20px;
  }
</style>
<script>
  export default {
    props: ['bodyContent']
  }
</script>
