<template>
  <dull-content :recommendList='recommendList'></dull-content>
</template>
<script>
  import Dull from './contentList.vue'
  export default{
    name: 'dull',
    data () {
      return {
        apiUrl: '/4/theme/11',
        recommendList: []
      }
    },
    components: {
      'dull-content': Dull
    },
    methods: {
      fixImageUrl (recommendList) {
        if (recommendList.image) {
          recommendList.image = recommendList.image.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
        }
        if (recommendList.stories) {
          recommendList.stories.forEach(function (list) {
            if (list.images) {
              list.images[0] = list.images[0].replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
            }
          })
        }
        if (recommendList.editors) {
          recommendList.editors.forEach(function (editor) {
            if (editor.avatar) {
              editor.avatar = editor.avatar.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
            }
          })
        }
      },
      getLists: function () {
        var that = this
        that.$http.get(this.apiUrl)
          .then(function (response) {
            that.recommendList = response.data
            that.fixImageUrl(that.recommendList)
          })
      }
    },
    mounted () {
      this.getLists()
    }
  }
</script>
