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
  import Game from './game'
  import Coffee from './coffee'
  import Cats from './cats'
  export default {
    components: {
      Coffee,
      Game,
      Cats},
    name: 'svg'
  }
</script>
