<template>
  <div id="login-page">
    <head>
      <title>Medium User Viewer</title>
    </head>
    <v-layout align-center justify-center column>
      <h3>{{ title }}</h3><br/>
      <img id="left_bg" src=".././assets/images/main_page_leftBG.png">
      <img id="mdImage" src=".././assets/images/mediumLogo.png"><br/>
      <button id="FBloginBTN">
        <span><img id="FBIcon" src=".././assets/images/FBIcon.png" /></span>
        <span>Sign in with Facebook</span>
        <facebook-login class="button"
          appId="404147417038878"
          @login="onLogin"
          @logout="onLogout"
          @get-initial-status="getUserData"
          style="position:absolute;opacity:0;z-index:1;
          margin-left:0em;margin-top:-1.9em;">
        </facebook-login>
      </button><br/>
      <button id="GGloginBTN">
        <span><img id="GGIcon" src=".././assets/images/GGIcon.png" /></span>
        <span>Sign in with Google</span>
      </button><br/>
      <button id="TWTloginBTN">
        <span><img id="TWTIcon" src=".././assets/images/TWTIcon.png" /></span>
        <span>Sign in with Twitter</span>
      </button><br/>
      <button id="EmailloginBTN">
        <span><img id="EmailIcon" src=".././assets/images/EmailIcon.png" /></span>
        <span>Sign in with email</span>
      </button><br/>
    </v-layout>
  </div>
</template>

<script>
import facebookLogin from 'facebook-login-vuejs'

export default {
  components: {
    facebookLogin
  },
  methods: {
    getUserData () {
      this.FB.api('/me', 'GET', { fields: 'id,name,email' },
        userInformation => {
          console.warn('get data from Facebook', userInformation)
          this.personalID = userInformation.id
          this.email = userInformation.email
          this.name = userInformation.name
        }
      )
    },
    sdkLoaded (payload) {
      this.isConnected = payload.isConnected
      this.FB = payload.FB
      if (this.isConnected) this.getUserData()
    },
    onLogin () {
      this.isConnected = true
      this.getUserData()
    },
    onLogout () {
      this.isConnected = false
    }
  },
  data () {
    return {
      title: 'Medium User Viewer'
    }
  }
  // async created () {
  //   console.log('created')
  //   let res = await this.$http.get('/')
  //   console.log(res.data)
  // }
}
var medium = require('medium-sdk')
// var axios = require('axios')

var client = new medium.MediumClient({
  clientId: 'f64c891179d4',
  clientSecret: '87697fc303fd6f56352178f058487d322897cd86'
})

var redirectURL = 'https://MDUViewer.com/callback'

var url = client.getAuthorizationUrl('secretState', redirectURL, [
  medium.Scope.BASIC_PROFILE, medium.Scope.PUBLISH_POST,
  medium.Scope.LIST_PUBLICATIONS
])
console.log(url)
// axios.get(url)
// function getUserInfo () {
//   return axios.get(url);
// }

/* eslint-disable */
// client.exchangeAuthorizationCode('16a136f15fe2', redirectURL, function (err, token) {
//   client.getUser(function (err, user) {
//     client.createPost({
//       userId: user.id,
//       title: 'A new post',
//       contentFormat: medium.PostContentFormat.HTML,
//       content: '<h1>A New Post</h1><p>This is my new post.</p>',
//       publishStatus: medium.PostPublishStatus.DRAFT
//     }, function (err, post) {
//       console.log(token, user, post)
//     })
//   })
// })
</script>

<style>
  @import '.././assets/styles/loginPage.css';
</style>
