<template lang="html">
  <nav class="nav has-shadow" v-if="isLoggedIn()">
    <div class="nav-left">
      <router-link class="nav-item is-brand" to="/">
        Clevyr PMO
      </router-link>
      <router-link class="nav-item is-tab" to="/dashboard">
        <i class="fa fa-dashboard"></i> Dashboard
      </router-link>
      <router-link class="nav-item is-tab" to="/projects">
        <i class="fa fa-list-alt"></i> Project List
      </router-link>
      <router-link class="nav-item is-tab" to="/bash">
        <i class="fa fa-terminal"></i> Bash Treats
      </router-link>
      <router-link class="nav-item is-tab" to="/reddit">
        <i class="fa fa-reddit fa-lg" aria-hidden="true"></i> Reddit
      </router-link>
      <router-link class="nav-item is-tab" to="/api">
        <i class="fa fa-lock"></i> Auth0 API
      </router-link>
    </div>
    <div class="nav-right">
      <span class="nav-item">
        <a class="button" @click="logout()"><i class="fa fa-key"></i>Logout</a>
      </span>
    </div>
  </nav>
</template>

<script>
import auth from '../auth'
export default {
  name: 'navbar',
  methods: {
    logout () {
      auth.logout()
      this.$router.go('/login')
    },
    isLoggedIn () {
      return auth.checkAuth()
    }
  }
}
</script>

<style lang="css">

</style>
