<template>
  <div id="login-page">
    <head>
      <title>Medium User Viewer</title>
    </head>
    <v-layout align-center justify-center column>
      <h3>{{ title }}</h3><br/>
      <img id="left_bg" src=".././assets/images/main_page_leftBG.png">
      <img id="mdImage" src=".././assets/images/mediumLogo.png"><br/>
      <input id="usernameBox" placeholder="Username"><br/>
      <input id="passwordBox" placeholder="Password"><br/>
      <v-btn id="loginBTN">Login</v-btn><br/>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Medium User Viewer'
    }
  }
}
var medium = require('medium-sdk')

var client = new medium.MediumClient({
  clientId: 'f64c891179d4',
  clientSecret: '87697fc303fd6f56352178f058487d322897cd86'
})

var redirectURL = 'https://MDUViewer/callbackurl.com'

// var url = client.getAuthorizationUrl('secretState', redirectURL, [
//   medium.Scope.BASIC_PROFILE, medium.Scope.PUBLISH_POST,
//   medium.Scope.LIST_PUBLICATIONS
// ])
// console.log(url)
/* eslint-disable */
client.exchangeAuthorizationCode('7e242b007edb', redirectURL, function (err, token) {
  client.getUser(function (err, user) {
    client.createPost({
      userId: user.id,
      title: 'A new post',
      contentFormat: medium.PostContentFormat.HTML,
      content: '<h1>A New Post</h1><p>This is my new post.</p>',
      publishStatus: medium.PostPublishStatus.DRAFT
    }, function (err, post) {
      console.log(token, user, post)
    })
  })
})
</script>

<style>
  @import '.././assets/styles/loginPage.css';
</style>
