<template>
  <div>
      <h1>REGISTER PAGE</h1>

    <input 
        type="text" 
        name="name"
        v-model="email"
        placeholder="email" />
        <br>
    <input 
        type="password" 
        name="password"
        v-model="password"
        placeholder="password" />
        <br>
    <button
        @click="Register">Register</button>
  </div>
   


</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
      async Register () {
        const reposnse = await AuthenticationService.register({
            email: this.email,
            password: this.password
        })       
      } 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
