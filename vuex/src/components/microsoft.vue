<template>
  <div class="microsoft" :style="{ background: color }">
    <p>microsoft</p>
    <button @click="setAppleColor('green')">同步改变</button>
    <button @click="updateAppleColor()">异步改变</button>
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    name: "apple",
    computed: {
      ...mapGetters({
        color: 'microsoftColor'
      })
    },
    methods: {
      ...mapMutations([
        'setAppleColor'
      ]),
      ...mapActions([
        'updateAppleColor'
      ])
    }
  }
</script>

<style scoped>
  .microsoft{
    width: 200px;
    height: 200px;
    border: 1px solid #000;
    border-radius: 50%;
    text-align: center;
  }
  .microsoft > p{
    padding-top: 50px;
  }
</style>
