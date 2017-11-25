<script>
import validateform from '../mixins/validateform';
  export default {
    name: 'register',
    data(){
      return {
          submited: true,
          isDsb: true,
          fname: '',
          lname: '',
          username: '',
          password: '',
          rpassword: ''


      }
    },
    methods: {
      reg: ()=> {
        this.$emit('checkPassword')
      }
    },
    mixins:[validateform]
  }
</script>

<template>
  <div class="grid-container">
    <div class="grid-x grid-margin-x">
      <div class="cell large-2"></div>
      <div class="cell large-8">
        <form >
          <p>First Name : <input v-model="fname" type="text" v-on:keyup="disabled_btn" ></p>
          <p>Last Name : <input v-model="lname" type="text" v-on:keyup="disabled_btn" ></p>
          <p>User Name : <input v-model="username" type="text" v-on:keyup="disabled_btn" ></p>
          <p>Password : <input v-model="rpassword"  type="password" v-on:keyup="disabled_btn"></p>
          <p>Repeat Password : <input v-model="password"  type="password" v-on:keyup="disabled_btn"></p>
          <button type="button" @click="reg" class="success button expanded" v-bind:class="{ disabled:isDsb }">Register User</button>
        </form>
      </div>
      <div class="cell large-2"></div>
    </div>
  </div>
</template>


<style>

</style>
