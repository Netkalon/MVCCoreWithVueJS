<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <PrivacyWorld msg="Welcome to Your Vue.js App...Privacy"/>
  </div>
</template>

<script>
    import PrivacyWorld from './components/PrivacyWorld.vue'

export default {
        name: 'PrivacyApp',
  components: {
      PrivacyWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
