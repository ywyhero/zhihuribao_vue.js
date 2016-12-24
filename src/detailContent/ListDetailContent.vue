<template>
  <list-detail :bodyContent="bodyContent"></list-detail>
</template>

<script>
  import $ from 'jquery'
  import ListDetailContent from './DetailContent.vue'
  export default {
    data () {
      return {
        apiUrl: '',
        bodyContent: []
      }
    },
    components: {
      'list-detail': ListDetailContent
    },
    methods: {
      getHtml () {
        var imagesArr = []
        this.$http.get(this.apiUrl)
          .then(function (response) {
            this.bodyContent = response.data
            $('.listDetail').html(this.bodyContent.body)
            var link = $('<link>').attr('href', this.bodyContent.css[0])
            $('head').append(link)
            for (var i = 0; i < $('.listDetail img').length; i++) {
              imagesArr.push($('.listDetail img').eq(i).attr('src'))
            }
            this.fixImageUrl(this.bodyContent)
            imagesArr.push(this.fixImgUrl(imagesArr))
            for (var j = 0; j < imagesArr.length; j++) {
              $('.listDetail img').eq(j).attr('src', imagesArr[j])
            }
          })
      },
      fixImageUrl (bodyContent) {
        if (bodyContent.image) {
          if (bodyContent.images) {
            for (var i = 0; i < bodyContent.images.length; i++) {
              bodyContent.images[i] = bodyContent.images[i].replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
            }
          }
        }
      },
      fixImgUrl (images) {
        if (images) {
          for (var i = 0; i < images.length; i++) {
            images[i] = images[i].replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
          }
        }
      }
    },
    mounted () {
      this.apiUrl = '/4/news/' + this.$router.currentRoute.params.id
      this.getHtml()
    }
  }
</script>
