<template>
<footer>
    <div class="info">
      <router-link to="/Character">Запити</router-link>
      <router-link to="/dangerous-rides">Небезпечні атракціони</router-link>
      <router-link to="/blog-topics">Інші теми</router-link>
        <p>2025 рік | Блоги</p>
</div>
</footer>
</template>
<script>
export default {

}
</script>

<style scoped>
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
  color:green;
  gap:10px;
  padding:15px;
  margin: 15px;
}
a:hover{
  color:aqua;
  font-size:25px;
}
</style>