<template>
<div>
  <HistoryStarWarsComponent/>
</div>
</template>

<script>
import HistoryStarWarsComponent from './components/HistoryStarWarsComponent.vue'


export default {
  name: 'App',
  components: {
    HistoryStarWarsComponent

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
