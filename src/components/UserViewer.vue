<template>
    <v-layout>
        <v-layout align-start justify-start column fill-height>
            <div id="user_profileImage">
                <img v-bind:src="MediumProfileImage"/>
            </div>
            <div id="user_Name">
                <b>{{ MediumAccountName }}</b>
            </div>
            <div id="user_userName">
                <b>{{ MediumUserName }}</b>
            </div>
        </v-layout>
        <v-layout align-center justify-start column fill-height>
            <div id="user_publishing">
                <ul>
                    <li>
                    </li>
                </ul>
            </div>
        </v-layout>
    <router-view/>
    </v-layout>
</template>

<script>
export default {
  name: 'UserViewer',
  data () {
    return {
      MediumUserName: '',
      MediumAccountName: '',
      MediumProfileImage: ''
    }
  }
}
</script>
