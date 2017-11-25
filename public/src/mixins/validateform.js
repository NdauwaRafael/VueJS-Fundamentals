export default {
  methods: {
    disabled_btn: function(){
      var opt = this.uname !='' && this.password != '';
      var opt2 = this.lname !='' && this.fname !='' && this.uname !='' && this.password !='' && this.rpassword != '';
        if (opt ) {
          this.isDsb = false;
        }else{
            this.isDsb = true;
        }
    }
  }
}
