<template>
<div>
   <nav>
      <router-link to="/historySW">Сюжет Звездных Войн</router-link>
   </nav>
   <router-view />
  <FooterComponent/>
</div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';


export default {
  name: 'App',
  components: {
    FooterComponent
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
  background-color: black;
  margin-top: 60px;
}
a{
  color: aqua;
  background-color: black;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size:18px;
  text-decoration: none;
}
a:hover{
  color:yellow;
  font-size: 24px;
}
nav {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
}
router-link {
  text-decoration: none;
  color: yellow;
}
</style>

