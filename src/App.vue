<template>
  <div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link v-if="!cook"  to="/register">Register</router-link>
    {{ this.$cookies.isKey('jwt') }}
  </nav>
  <button  @click="logout()">Logout</button>
  <router-view/>
  </div>
</template>
<script>
import store from './store'


export default {
  data(){
   return{
    cook:this.$store.state.cookie
   }
  },
  methods:{
    signout(){
      this.$cookies.remove('jwt')
    },
    cookiePresent(){
      let cookie = this.$cookies.isKey('jwt')
      cookie =this.cook
    },
    logout(){
      this.$store.dispatch('logout')
    }
  },
  mounted(){
    this.cookiePresent()
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
