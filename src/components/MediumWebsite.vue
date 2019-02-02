<template>
  <div class="mediumWS">
    <ul>
      <li>
        Copyright
        <a href="https://medium.com/" target="_blank">
          A Medium Corporation
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MediumWebsite',
  data () {
    return {
      msg: 'MediumWebsite'
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin-top: 2vh;
  font-size: 1.25vw;
  font-family: medium-content-sans-serif-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
}
a {
  color: #42b983;
}
</style>
