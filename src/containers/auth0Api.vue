
<template lang="html">
  <div id="auth0Api">
    Auth0 API - check console for results
    <div class="control">
      <button type="button" class="button" v-on:click="test()">Test API</button>
      <button type="button" class="button" v-on:click="testSecured()">Test API - Secured</button>
      <div id="log"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
(function () {
  if (!console) {
    console = {}
  }
  let old = console.log
  let logger = document.getElementById('log')
  console.log = function (message) {
    if (typeof message === 'object') {
      logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />'
    } else {
      logger.innerHTML += message + '<br />'
    }
  }
})()
export default {
  name: 'auth0Api',
  methods: {
    test: function () {
      console.log('sending un-secured test call to api ...')
      axios.get('/ping').then((response) => {
        console.log(response)
      }, (response) => {
        console.log(response)
      })
    },
    testSecured: function () {
      console.log('sending secured test call to api ...')
      axios.get('/secured/ping').then((response) => {
        console.log(response)
      }, (response) => {
        console.log(response)
      })
    }
  }
}
</script>

<style lang="css">
</style>
