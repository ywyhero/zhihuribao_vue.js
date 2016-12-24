<template>
  <div class="nav">
    <span class="normalTitle">
      {{recommendList.name}}
      <img :src="recommendList.image" style="position: absolute;left: 0;width: 100%;z-index: -1;height:150px">
    </span>
    <div class="content">
      <div class="editors ">
        <span class="editorsFont">主编</span>
        <a href="#" class="editorsImg" v-for="item in recommendList.editors">
          <img :src="item.avatar">
        </a>
      </div>
      <div class="list-group" v-for="list in recommendList.stories">
        <a :href="path +'/'+ list.id" class="list-group-item">
          <h4 class="list-group-item-heading" :class="{'active':list.images}">{{list.title}}</h4>
          <img v-if="list.images" :src="list.images">
        </a>
      </div>
    </div>
  </div>
</template>
<style>
  #wrapper .normalTitle {
    font-size: 30px;
    font-weight: 700;
    font-family: "microsoft yahei";
    z-index: 2;
    height: 150px;
    line-height: 150px;
    text-align: center;
    display: block;
    width: 100%;
    color: #fff;
  }
  #wrapper .editors{
    height: 40px;
    border-bottom: 1px solid #ddd;
  }
  #wrapper .editorsFont{
    float: left;
    font-size: 18px;
    font-family: "simsun";
    margin-right: 20px;
    margin-left: 30px;
    line-height: 40px;
    color: #333;
  }
  #wrapper .editorsImg{
    float: left;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    overflow: hidden;
    margin-top: 5px;
    margin-right: 10px;
  }
  #wrapper .editorsImg img{
    height: 100%;
    width: 100%;

  }
</style>
<script>
  export default {
    data () {
      return {
        path: ''
      }
    },
    props: ['recommendList'],
    mounted () {
      this.path = this.$router.currentRoute.fullPath
    }
  }
</script>
