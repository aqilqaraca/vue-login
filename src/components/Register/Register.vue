<template>
  <section id="register">
    <div class="register_wrapper">
      <h4>REGISTER</h4>
      <Input
        title="ENTER YOUR LOGIN/EMAIL"
        :errors="v$.emailInput.$errors"
        labelFor="text"
        inputType="email"
        placeholder="e.g. example@gmail.com"
        @setData="emailInput = $event"
      />
      <Input
        title="PASSWORD"
        :errors="v$.password.$errors"
        labelFor="password"
        inputType="password"
        placeholder="******"
        @setData="password = $event"
      />
      <Input
        title="CONFIRM PASSWORD"
        :errors="v$.confirmPassword.$errors"
        labelFor="confirm-password"
        inputType="password"
        placeholder="******"
        @setData="confirmPassword = $event"
      />
      <div class="register_wrapper__part">
        <div class="part_remember"></div>
        <router-link to="/login">Login</router-link>
      </div>
      <Button name="register" :onClick="register" />
    </div>
  </section>
</template>

<script>
import Button from "../Button/Button.vue";
import { required, email, sameAs, minLength } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import Input from "./Input.vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      emailInput: "",
      password: "",
      confirmPassword: "",
      remember: false,
    };
  },
  validations() {
    return {
      emailInput: { required, email },
      password: { required, minLengthValue: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs(this.password) },
    };
  },
  components: {
    Button,
    Input,
  },
  methods: {
    register() {
      this.v$.emailInput.$touch();
      this.v$.password.$touch();
      this.v$.confirmPassword.$touch();
      if (!this.v$.$error) {
        createUserWithEmailAndPassword(
          getAuth(),
          this.emailInput,
          this.password
        )
          .then((res) => {
            this.$toast.open({
              message: "Email was successfully registered!",
              type: "success",
            });
            this.emailInput = ""
            this.password = ""
            this.confirmPassword = ""
            setTimeout(()=>{
              this.$router.push("/login")
            },1000)
            this.v$.$reset()
          })
          .catch((err) => {
            const errorMessage = err.message;
            this.$toast.open({
              message: errorMessage,
              type: "error",
            });
          });
      }
    },
  },
};
</script>

<style scoped>
#register {
  height: 70vh;
  width: 100%;
  background-color: #ebf3ff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.register_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
  padding: 70px;
  border-radius: 10px;
}
h4 {
  color: #26265a;
  font-size: 2vw;
}
</style>
