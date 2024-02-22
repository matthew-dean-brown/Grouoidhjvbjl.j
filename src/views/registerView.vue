<template>
  <div class="register">
    <h1>This is a register page</h1>
    
    <input 
      type="email"
      placeholder="email"
      name="email"
      v-model="email"
      required
    >
    <br>
    <input 
      type="password"
      placeholder="password"
      name="password"
      v-model="password"
      required
    >
    <br>
    <button @click="register()">
      Register
    </button>
    <br>
    <button @click="getInfo()">getInfo</button>
  
  </div>
</template>
<script>
export default {

  data() {
    return {
      email:'abc@gmail.com',
      password:'1223'
    }
  },
  methods:{
    register(){
      //this.$store.state.email = this.email
      //this.$store.state.password = this.password
      console.log('register button was clicked'+ this.email + this.password);
      // console.log(this.$data);
      this.$store.dispatch('register',this.$data)
    },
    getInfo(){
      this.$store.dispatch('getInfo')
    }
  }

}
</script>

<style>

</style>