<template>
  <transition name="move">
    <div class="leftSide" v-show="listIsClick">
      <div class="login">
        <div class="loginImg">
          <i></i>
        </div>
        <a href="#" class="loginBtn">请登录</a>
      </div>
      <div class="zhihuSet">
        <div class="store">
          <a class="zhihuSetFont glyphicon glyphicon-star-empty">收藏</a>
        </div>
        <div class="message">
          <a class="zhihuSetFont glyphicon glyphicon-bell">消息</a>
        </div>
        <div class="setting">
          <a class="zhihuSetFont glyphicon glyphicon-cog">设置</a>
        </div>
      </div>
      <div class="classify">
        <ul>
          <template v-for="(list, index) in lists">
            <router-link :to="{path: list.path}">
              <li class="zhihuList" :class="{'active':list.selectIndex == index}" @click="addActive(index)">
                <span class="classifyFont">{{list.value}}</span>
                <i class="zhihuListIcon classifyFont glyphicon glyphicon-plus" :class="{'active':list.isClick}" @click="iconActive(index)"></i>
              </li>
            </router-link>
          </template>
        </ul>
      </div>
    </div>
  </transition>
</template>
<style>
     /*左侧样式*/
  #wrapper .leftSide{
    width: 40%;
    height: auto;
    background: #232A30;
    padding-top: 60px;
    float: left;
    padding-bottom: 9999px;
    margin-bottom: -9999px;
  }
  #wrapper .login{
    padding-left: 30px;
  }
  #wrapper .loginImg{
    width: 70px;
    height: 70px;
    float: left;
  }
  #wrapper .loginImg i {
    width: 100%;
    height: 100%;
    display: block;
    background:url("../images/loginImg.png");
  }
  #wrapper .loginBtn{
    display: inline-block;
    height: 70px;
    line-height: 70px;
    font-size: 30px;
    color: #94999D;
    font-family: "黑体";
    margin-left: 30px;
  }
  #wrapper .zhihuSet{
    margin-top: 30px;
    padding-left: 30px;
  }
  #wrapper .zhihuSet > div{
    display: inline-block;
  }
   #wrapper .zhihuSet > div + div{
    margin-left: 20%;
   }
  #wrapper .zhihuSetFont{
    position: relative;
    font-size: 20px;
    color: #94999D;
    margin-top: 50px;
    cursor: pointer;
  }
  #wrapper .glyphicon-star-empty::before,
  #wrapper .glyphicon-bell::before,
  #wrapper .glyphicon-cog::before{
    font-size: 40px;
    position: absolute;
    bottom: 30px;
  }
  #wrapper .classify{
    margin-top: 20px;
  }
  #wrapper .classify ul{
    padding: 0;
  }
  #wrapper .zhihuList{
    height: 100px;
    width: 100%;
    cursor: pointer;
    padding-left: 30px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
  #wrapper .classifyFont{
    line-height: 100px;
    font-size: 24px;
    color: #94999D;
    font-weight: 700;
  }
  #wrapper .zhihuList:hover{
    background: #1B2329;
    color: #fff;
  }
  #wrapper .zhihuList.active{
    background: #1B2329;
    color: #fff;
  }
  #wrapper .zhihuList .zhihuListIcon{
    float: right;
    margin-right: 80px;
    line-height: 100px;
  }
  #wrapper .glyphicon-plus.active::before{
    content: "\e080";
  }
  .move-enter-active, .move-leave-active {
    transition: all 1s
  }
  .move-enter, .move-leave-active {
    margin-left: -80%;
  }
</style>
<script>
  import $ from 'jquery'
  export default{
    data () {
      return {
        isClick: false,
        lists: [
          {'value': '首页', 'path': '/home', 'selectIndex': 0, 'isClick': true},
          {'value': '日常心理学', 'path': '/normal', 'selectIndex': null, 'isClick': false},
          {'value': '用户推荐日报', 'path': '/recommend', 'selectIndex': null, 'isClick': false},
          {'value': '电影日报', 'path': '/movies', 'selectIndex': null, 'isClick': false},
          {'value': '不许无聊', 'path': '/dull', 'selectIndex': null, 'isClick': false},
          {'value': '设计日报', 'path': '/design', 'selectIndex': null, 'isClick': false},
          {'value': '大公司日报', 'path': '/takungpao', 'selectIndex': null, 'isClick': false},
          {'value': '财经日报', 'path': '/economics', 'selectIndex': null, 'isClick': false},
          {'value': '互联网安全', 'path': '/internet', 'selectIndex': null, 'isClick': false},
          {'value': '开始游戏', 'path': '/games', 'selectIndex': null, 'isClick': false},
          {'value': '音乐日报', 'path': '/music', 'selectIndex': null, 'isClick': false},
          {'value': '动漫日报', 'path': '/manga', 'selectIndex': null, 'isClick': false},
          {'value': '体育日报', 'path': '/sport', 'selectIndex': null, 'isClick': false}
        ],
        sideListIsClick: this.listIsClick
      }
    },
    props: ['listIsClick'],
    watch: {
      listIsClick (val) {
        this.sideListIsClick = val
      },
      sideListIsClick (val) {
        this.$emit('on-list-is-click', val)
      }
    },
    methods: {
      addActive: function (propIndex) {
        var i = 0
        var len = this.lists.length
        for (; i < len; i++) {
          this.lists[i].selectIndex = null
        }
        this.lists[propIndex].selectIndex = propIndex
        this.listIsClick = !this.listIsClick
        $('body,html').animate({ scrollTop: 0 }, 100)
      },
      iconActive: function (propIndex) {
        this.lists[propIndex].isClick = !this.lists[propIndex].isClick
      }
    }
  }
</script>
