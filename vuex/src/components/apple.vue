<template>
    <div class="apple" :style="{ background: color }">
      <p>apple</p>
      <button @click="setMicrosoftColor('orange')">同步改变</button>
      <button @click="updateMicrosoftColor()">异步改变</button>
    </div>
</template>

<script>
    import { mapGetters, mapMutations, mapActions } from 'vuex'

    export default {
        name: "apple",
        computed: {
            ...mapGetters({
              color: 'appleColor'
            })
        },
        methods: {
            ...mapMutations([
              'setMicrosoftColor'
            ]),
            ...mapActions([
              'updateMicrosoftColor'
            ])
        }
    }
</script>

<style scoped>
  .apple{
    width: 200px;
    height: 200px;
    border: 1px solid #000;
    border-radius: 50%;
    text-align: center;
  }
  .apple > p{
    padding-top: 50px;
  }
</style>
