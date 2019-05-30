<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

// 引用api
import { login } from 'api/user'

console.log(process.env.TEST)

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    /**
     * [loadData axios示例]
     * @return
     */
    loadData() {
      login({
        uid: 1233
      })
        .then(res => {
          if (res.code === 200) {
          }
        })
        .catch(err => {
        })
    }
  }
}
</script>
