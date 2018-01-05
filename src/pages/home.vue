<template>
  <main>
    <main-menu :navs="nav"></main-menu>
    <img src="/public/logo.png" class="logo">
    <h3 class="view1-title">This is View1</h3>
    <a href="/">Main</a>
    <a href="/view1">view1</a>
    <a href="/view2">view2</a>
  </main>
</template>

<script>
import mainMenu from '../components/common/main-menu.vue'
export default {
  components: {
    mainMenu
  },
  data () {
    return {
      nav: [{
        title: '菜单1',
        link: '/event'
      }, {
        title: '菜单2',
        link: '/event/listasdasd'
      }]
    }
  },
  mounted () {
  },

  preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta () {
      return {
        title: '首页',
        description: '首页描述',
        keywords: '首页关键字, 关键字1'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.logo{
  margin: 10px auto;
  height: 30px;
  width: 30px;
  display: block;
}
</style>