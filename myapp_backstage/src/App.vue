<template>
  <div id="app">
    <div>
      <NavLeft />
    </div>
    <div class='right-wrap'>
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavLeft from './components/NavLeft'
export default {
  name: 'App',
  components: {
    NavLeft
  }
}
</script>

<style>
@import "assets/index.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
}
.right-wrap {
  height: 100vh;
  width: calc(100vw - 250px);
  overflow: scroll;
}
</style>
