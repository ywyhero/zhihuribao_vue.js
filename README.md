# zhihuribao_vue

知乎日报

#跨域问题

使用的是vue_cli的proxyTable 解决的，具体可以参考http://www.jianshu.com/p/95b2caf7e0da

#图片盗链

参考：http://tangrui.win/2016/01/09/%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA%E8%BD%BB%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5/

#props双项绑定

1、创建一个data副本sideListIsClick，初始值和listIsClick值一样

  data(){
    return {
      sideListIsClick: this.listIsClick
    }
  }
 
  
2、创建针对props属性值的watch来同步组件对外的props的修改

  在sidebar组件里添加watch
  watch: {
    listIsClick: function (val) {
      this.sideListIsClick = val
    }
    sideListIsClick: function (val) {
      this.$emit('on-list-is-click', val)
    }
  }
  
  
3、创建针对props副本的watch，通知到组件外

  在APP.vue里面添加
  <sidebar @on-list-is-click="onListIsClick"></sidebar>
  methods: {
    onListIsClick: functin (val) {
      this.listIsCLick = val
    }
  }
  
  
#下载项目后使用
npm install
#然后运行项目
npm run dev
