<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <head>
      <title>Medium User Viewer</title>
    </head>
    <h3>Medium User Viewer</h3>
    <img id="mdImage" src="./assets/mediumLogo.png"><br/>
    <input id="usernameBox" placeholder="Username"><br/>
    <input id="passwordBox" placeholder="Password"><br/>
    <v-btn id="loginBTN">Login</v-btn><br/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import './assets/styles/loginPage.css';
</style>
