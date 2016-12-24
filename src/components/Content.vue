<template>
  <div class="content">
    <div class="list-group" v-for="list in contentList">
      <a :href="path+'/'+list.id" class="list-group-item">
        <h4 class="list-group-item-heading" :class="{'active': list.images}">{{list.title}}</h4>
        <img :src="list.images">
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      apiUrl: '/4/news/latest',
      contentList: [],
      path: '/home'
    }
  },
  methods: {
    fixImageUrl (contentList) {
      if (contentList) {
        contentList.forEach(function (list) {
          list.images[0] = list.images[0].replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
        })
      }
    },
    getLists: function () {
      var that = this
      that.$http.get(this.apiUrl)
      .then(function (response) {
        that.contentList = response.data.stories
        that.fixImageUrl(that.contentList)
      })
    }
  },
  mounted () {
    this.getLists()
  }
}
</script>
