<script>
import { number } from '@intlify/core-base'

export default {
data(){
  return {
  phoneNo : {type:number, default : ""},
  password : {type:String, default : ""},
}
}, 
mounted(){
  this.phoneNo =null
  this.password=""
},
methods : {
handleClick(){
this.$router.push('/')
},
registrationClick(){
  this.$router.push("registration")
}
}
}
</script>
  
  <template>
  <div class="row">
    <div class="col">
      <div id="app">
        <form>
                  <img src="../././../assets/login.svg" class="img-css" />
        </form>
      </div>
    </div>
    <div class="col" style="background-color: #323550">
      <form class="form-register-css">
      <div>
        <h3 class="she-hub-text">Welcome to SheHub!</h3>
        
        <p class="login-text" >Login Your Account</p>

          <p class="fields-text" >Phone No.</p>
      <q-input
        outlined
        v-model="phoneNo"
                type="number"
        placeholder="Enter Phone No"
        class="phone-input"
      />     
          <p class="fields-text" >Password</p>
      <q-input
        outlined
        type="password"
        v-model="password"
        placeholder="Password"
        class="password-input"
    />
          <q-btn
           class="login-btn" label="Login" @click="handleClick()"/>
           <p class="new-account" @click="registrationClick()">No account? Sign Up</p>
      </div>
        </form>
    </div>
  </div>
</template>

<style scoped>
.img-css {
  margin-left: 180px;
  margin-top: 90px;
  width: 50%;
}
  .form-register-css {
    margin: 2cm;
  }
.she-hub-text {
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
  color: white;
  font-size: 35px;
}
.login-text {
  color: #ffffff;
  margin-top: 0;
}
.fields-text {
  color: #ffffff;
  margin-bottom: 0;
  margin-top: 16px;
}
.phone-input {
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #492532;
  border-radius: 8px;
}
.password-input {
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #492532;
  border-radius: 8px;
}
.login-btn {
width: 480px;
text-align: center;
margin-top: 81px;
color: #ffffff;
background: #079090;
border-radius: 6px;
}
.new-account {
  margin-top: 10px;
  color: white;
  margin-left: 180px;
  text-decoration: underline;
}
</style>


