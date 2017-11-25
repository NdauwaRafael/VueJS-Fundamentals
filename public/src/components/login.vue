<template lang="html">

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
              <p>
                <router-link type="button" class="reg-btn button" :to="{ name: 'register'}">SignUp</router-link>
              </p>
            </form>

            <table>
              <thead>
                <tr>
                  <h5>User Loged In to the system</h5>
                </tr>
              </thead>
              <tbody v-for="user in session_data">
                <tr>
                  <td>{{user.time }}</td>
                  <td>{{user.name }}</td>
                </tr>
              </tbody>
            </table>



          <div class="cell small-2">

          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import validateform from '../mixins/validateform';
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
      session_data: [

     ]
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

      // var date = new Date();
      var today = new Date();

      this.session_data.push({name: this.uname, time:today});
    }else {
      this.login_status = false
    }
  }
},
mixins:[validateform]
}
</script>


<style lang="css">
.status {
  color: #33691e;
}

.reg-btn {
  background: #ab47bc !important;
  color: #ffff;
}
</style>
