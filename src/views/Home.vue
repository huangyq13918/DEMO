<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="hangdleClick('back')">返回上一页</button>
    <button @click="hangdleClick('push')">跳转到parent</button>
    <button @click="hangdleClick('replace')">路由替换</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    // 方法
    hangdleClick (type) {
      // js路由跳转
      switch (type) {
        case 'back':
          this.$router.back()
          break
        case 'push':
          // this.$router.push('/parent') // 直接页面跳转
          this.$router.push({ // 带参数跳转(实际开发中运用比较多)
            name: 'argu', // 命名路由（路由的name不需要带/）
            params: {
              name: 'song',
              data: {
                list: 'list'
              }
            }
          })
          // var name = 'song'
          // this.$router.push({ // 带参数跳转
          //   path: `/argu/${name}`
          // })
          break
        case 'replace':
          this.$router.replace('/named_view') // 重定向返回上一页将会是上上一页（如：从About=>home,在home页面重定向到其他页面时点击返回上一页，实际返回的是About页）
          break
      }
    }
  }
}
</script>
