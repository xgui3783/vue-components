<template>
  <div id="app">
    <div @click = "show = !show">click me</div>
    <transition name = "fade">
      <div class = "text-box" v-if = "show">
        TEXT BOX
      </div>
    </transition>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Pill from './components/pill'
import Modal from './components/modal'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Pill,
    Modal
  },
  data: () => ({
    show: false
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
