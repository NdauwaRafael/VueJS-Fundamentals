<script>
import Vue from 'vue';
import topbar from './components/title-bar.vue';
import footdiv from './components/footer.vue';
    export default {
      components: {topbar, footdiv},
      name: 'app',
    }
</script>


<template>
  <div id="app">
    <div class="">
      <topbar></topbar>
    </div>
    <div class="">
      <router-view></router-view>
    </div>

  <div class="">
    <footdiv></footdiv>
  </div>
  </div>
</template>

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
