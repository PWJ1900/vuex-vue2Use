<template>
<div>
  2332
  {{$store.state.count}}
  {{$store.state.allUseOne.info}}
  <button @click="use"></button>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    use(){
      this.$store.commit('SET_COUNT_ADD',12)
      this.$store.dispatch('REdUCE1000')
      this.$stored.commit("useIt","你很好")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
