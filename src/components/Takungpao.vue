<template>
  <takungpao-content :recommendList='recommendList'></takungpao-content>
</template>
<script>
  import Takungpao from './contentList.vue'
  export default{
    name: 'takungpao',
    data () {
      return {
        apiUrl: '/4/theme/5',
        recommendList: []
      }
    },
    components: {
      'takungpao-content': Takungpao
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
