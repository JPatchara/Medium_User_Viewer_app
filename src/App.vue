<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import loginPage from './components/loginPage'

export default {
  component: {
    'login-page': loginPage
  },
  data () {
    return {

    }
  },
  methods: {}
}
</script>
