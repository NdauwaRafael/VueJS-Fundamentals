<template lang="html">
  <div >
    <div class="grid-container">
      <div class="">
        <div class="grid-x grid-margin-x">
          <div class="cell small-2">

          </div>

          <div class="cell small-8">
            <h6 class="status" v-if="login_status">
              <i class="fa fa-spinner fa-spin fa-fw"></i>
              <span class="sr-only">Loading...</span> {{ output}}</h6>
            <form >
              <p>User Name : <input v-model="uname" type="text" v-on:keyup="disabled_btn" ></p>
              <p>Password : <input v-model="password"  type="password" v-on:keyup="disabled_btn"></p>
              <p><input type="checkbox" value="Logged In"  v-model="ischecked" >
              <label v-if="ischecked">{{ its_ck }}</label>
              <label v-else>Stay Logged in?</label></p>
              <button type="button" @click="login" class="success button expanded" v-bind:class="{ disabled: isDsb }">Login</button>
              <p> <label>{{validate}}</label> </p>
              <p><button type="button" class="primary button">SignUp</button></p>
            </form>


              <li v-for="(s_data, index) in session_data">
                 {{ index }} - {{ s_data.name }}
              </li>
            </ul>


          <div class="cell small-2">

          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return {
      ischecked: '',
      its_ck: 'You will remain logged in',
      output: '',
      login_status: false,
      uname: '',
      password: '',
      isDsb: true,
      session_data: [{name: "raf", date:"2017/99/00"} ]
    }
},
computed:{
  validate: function() {
    if(this.uname == "rkaranja"){
      return "Username is taken";
    }else{
      return "";
    }
  }
},
methods:{
  login: function(){
    if (this.uname !='' && this.password != '') {
      this.output = 'You Have submited your Login details successfully, You will be redirected soonest';
      this.login_status = true;
    }else {
      this.login_status = false
    }
  },

  disabled_btn: function(){
      if (this.uname !='' && this.password != '') {
        this.isDsb = false;
      }else{
          this.isDsb = true;
      }
  }
}
}
</script>


<style lang="css">
.status {
  color: #33691e;
}
</style>
