<template>
  <main>
    <main-menu :navs="nav"></main-menu>
    {{t}}
  </main>
</template>

<script>
import mainMenu from 'components/common/main-menu.vue'
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
      }],
      t: 1
    }
  },
  mounted () {
  },

  preFetch (store) {
    console.log(this.data.t = 2)
    return this.methods.meta()
  },

  methods: {
    meta () {
      return {
        title: '展会列表',
        description: '展会列表',
        keywords: '展会列表'
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