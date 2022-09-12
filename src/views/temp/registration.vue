<script>
import { ref } from "vue";

export default {
  data() {
    return {
      name: { type: String, default: "" },
      phoneNo: { type: Number, default: "" },
      selectLang: { type: String, default: "" },
      nickName: { type: String, default: "" },
      password: { type: String, default: "" },
      mode: { type: String, default: "" },
      currentState: false,
    };
  },
  setup() {
    return {
      toggleValue: ref(false),
    };
  },
  computed: {},
  checkedValue: {
    get() {
      return this.currentState;
    },
    set(newValue) {
      this.currentState = newValue;
    },
  },
  mounted() {
    this.name = "";
    this.phoneNo = null;
    this.selectLang = "";
    this.nickName = "";
    this.password = "";
    this.mode = "";
  },
  methods: {
    handleClick() {
      this.$router.push("loginPage");
    },
  },
};
</script>

<template>
  <div class="row">
    <div class="col">
      <div id="app">
        <form>
          <img src="../././../assets/bro.svg" class="img-css" />
        </form>
      </div>
    </div>
    <div class="col" style="background-color: #323550">
      <form class="form-register-css">
        <div>
          <h3 class="she-hub-text">Welcome to SheHub!</h3>

          <p class="register-text">Register Your Account</p>

          <p class="fields-text">Name</p>
          <q-input
            outlined
            v-model="name"
            placeholder="Enter Name"
            class="name-input"
          />
          <p class="fields-text">Phone No.</p>
          <q-input
            outlined
            type="number"
            v-model="phoneNo"
            placeholder="Enter Phone No"
            class="phone-input"
          />
          <p class="fields-text">Language Selector</p>
          <q-select
            v-model="selectLang"
            :options="[
              { label: 'English', value: 'eng' },
              { label: 'Hindi', value: 'hi' },
            ]"
            placeholder="Select language"
            class="lang-select"
          />
          <p class="fields-text">Nickname</p>
          <q-input
            outlined
            v-model="nickName"
            placeholder="Enter Nickname"
            class="nick-input"
          />
          <p class="fields-text">Password</p>
          <q-input
            v-model="password"
            outlined
            type="password"
            placeholder="Password"
            class="password-input"
          />

          <p class="fields-text">Get Notifications and Alerts</p>
          <q-toggle class="text-green" v-model="toggleValue" color="#079090" />

          <div v-if="toggleValue">
            <p class="fields-text">Mode of notification</p>
            <q-select
              filled
              v-model="mode"
              :options="[
                { label: 'Phone', value: 'PHONE' },
                { label: 'Email', value: 'E-mail' },
              ]"
              class="mode-of-notification-select"
            />
          </div>
          <q-btn class="register-btn" label="Register" @click="handleClick()" />
          <p class="already-account" @click="handleClick()">
            Already have an account? Sign In
          </p>
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
.register-text {
  color: #ffffff;
  margin-top: 0;
}
.fields-text {
  color: #ffffff;
  margin-bottom: 0;
  margin-top: 16px;
}
.name-input {
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #492532;
  border-radius: 8px;
}
.phone-input {
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #492532;
  border-radius: 8px;
}
.lang-select {
  box-sizing: border-box;
  background: #ffffff;
  border: 0px #492532;
  border-radius: 8px;
}
.nick-input {
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
.mode-of-notification-select {
  box-sizing: border-box;
  background: #ffffff;
  border: 0px #492532;
  border-radius: 8px;
}
.register-btn {
  width: 100%;
  text-align: center;
  margin-top: 81px;
  color: #ffffff;
  background: #079090;
  border-radius: 6px;
}
.already-account {
  margin-top: 10px;
  color: white;
  text-align: center;
  text-decoration: underline;
}
.text-green {
  color: white !important;
}
</style>