<template>
    <v-layout>
        <v-layout align-start justify-start column fill-height>
            <div id="user_profileImage"></div>
            <div id="user_Name">name</div>
            <div id="user_userName"></div>
        </v-layout>
        <v-layout align-center justify-start column fill-height>
            <div id="user_publishing"></div>
        </v-layout>
    <router-view/>
    </v-layout>
</template>

<script>
export default {
  name: 'UserViewer',
  data () {
    return {
      msg: 'UserViewer'
    }
  }
}
</script>
