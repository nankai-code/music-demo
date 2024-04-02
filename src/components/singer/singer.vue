<template>
  <div class="singer">
    <listview :data="singerlist"></listview>
  </div>
</template>

<script>
import axios from 'axios'
import listview from '../base/listview.vue'
export default {
  name: "singer.vue",
  data() {
    return {
      singerlist: []
    }
  },
  created() {
    axios.get("http://localhost:9527/api/getSingerData").then(data=>{
      console.log(data)
      this.singerlist = data.data
    })
  },
  components: {
    listview
  }
}
</script>

<style lang="stylus" scoped>
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%

</style>