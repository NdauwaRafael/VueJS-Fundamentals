export default {
  methods: {
    disabled_btn: function(){
      var opt = this.uname !='' && this.password != '';
      var opt2 = this.lname !='' && this.fname !='' && this.username !='' && this.password !='' && this.rpassword != '';
        if (opt || opt2 ) {
          this.isDsb = false;
        }else{
            this.isDsb = true;
        }
    }
  }
}
