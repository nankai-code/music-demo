<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import mHeader from "./components/m-header/m-header.vue"
import tab from "./components/tab/tab.vue"
export default {
  name: 'App',
  components: {
    mHeader,
    tab
  }
}
</script>

<style lang="stylus" scoped>
  @import "./common/stylus/variable.styl"

  #app
    color:$color-theme

</style>
