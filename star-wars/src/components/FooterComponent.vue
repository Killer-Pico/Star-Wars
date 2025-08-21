<template>
<footer>
    <div class="info">
      <router-link to="/historySW">Сюжет Звездных Войн</router-link>
      <router-link to="/characters">Персонажи Звездных Войн</router-link>
      <p>2025 рік | Звездные Войны</p>
</div>
</footer>
</template>
<script>
export default {

}
</script>

<style scoped>
.info{
    background-color: black;
}
ul{
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
}
a{
  text-decoration: none;
  font-size:18px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color:aqua;
  background-color: black;
  gap:10px;
}
a:hover{
    color:yellow;
  font-size:25px;
}
</style>