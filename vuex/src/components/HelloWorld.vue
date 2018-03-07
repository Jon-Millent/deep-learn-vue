<template>
  <div>
    <h1>兄弟组件之间的通信</h1>
    <apple></apple>
    <microsoft></microsoft>
  </div>
</template>

<script>
  import apple from '../components/apple'
  import microsoft from '../components/microsoft'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      apple,
      microsoft
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
