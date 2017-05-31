
<template lang="html">
  <div id="auth0Api">
    Auth0 API - check console for results
    <div class="control">
      <button type="button" class="button" v-on:click="test()">Test API</button>
      <button type="button" class="button" v-on:click="testSecured()">Test API - Secured</button>
      <ul id="myULContainer"></ul>
      <div id="log"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'auth0Api',
  methods: {
    test: function () {
      let ConsoleLogHTML = require('console-log-html')
      ConsoleLogHTML.connect(document.getElementById('myULContainer'))
      console.log('sending un-secured test call to api ...')
      axios.get('/ping').then((response) => {
        console.log(response)
      }, (response) => {
        console.log(response)
        ConsoleLogHTML.disconnect()
      })
    },
    testSecured: function () {
      let ConsoleLogHTML = require('console-log-html')
      ConsoleLogHTML.connect(document.getElementById('myULContainer'))
      console.log('sending secured test call to api ...')
      axios.get('/secured/ping').then((response) => {
        console.log(response)
      }, (response) => {
        console.log(response)
        ConsoleLogHTML.disconnect()
      })
    }
  }
}
</script>

<style lang="css">
</style>
