<template>
  <div id="svg">
    <p>
      <router-link to="/svg/coffee">Mmmm....Coffee</router-link>
      <router-link to="/svg/game">Yay! A Game</router-link>
      <router-link to="/svg/cats">OMG Cat Memes</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>



<script>
  export default {
    name: 'svg'
  }
</script>
