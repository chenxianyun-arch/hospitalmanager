<template>
  <div id="app">
    <login></login>
  </div>
</template>

<script>
import Login from './views/login/Login'
export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
@import "static/css/style/base.css";
</style>
