<template>
  <section id="login">
    <div class="login_wrapper">
      <h4>LOGIN</h4>
      <div class="input_label">
        <label for="email">ENTER YOUR LOGIN/EMAIL</label>
        <input
          type="text"
          id="email"
          placeholder="e.g. example@gmail.com"
          v-model="email"
        />
      </div>
      <div class="input_label">
        <label for="password">PASSWORD</label>
        <input
          type="password"
          id="password"
          placeholder="**********"
          v-model="password"
        />
      </div>
      <div class="login_wrapper__part">
        <div class="part_remember">
          <input type="checkbox" id="remember" v-model="remember" />
          <label for="remember">Remember me</label>
        </div>
        <router-link to="/register">Register</router-link>
      </div>
      <Button name="Login" :onClick="login" />
    </div>
  </section>
</template>

<script>
import Button from "../Button/Button.vue";
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
export default {
  data() {
    return {
      remember: false,
      email: "",
      password: "",
    };
  },
  components: {
    Button,
  },
  methods: {
    login() {
      setPersistence(getAuth(), browserSessionPersistence)
        .then((res) => {
          setTimeout(() => {
            this.$router.push("/");
          }, 1000);
          return signInWithEmailAndPassword(
            getAuth(),
            this.email,
            this.password
          );
        })
        .catch((error) => {
          const errorMessage = error.message;
          this.$toast.open({
            message: errorMessage,
            type: "error",
          });
        });
    },
  },
};
</script>

<style scoped>
#login {
  height: 70vh;
  width: 100%;
  background-color: #ebf3ff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_wrapper {
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
.login_wrapper input {
  width: 450px;
  height: 50px;
  background-color: #f0f4fa;
  border: 1px solid rgb(225, 225, 225);
  border-radius: 10px;
  padding: 10px;
}
.login_wrapper input::placeholder {
  color: #d4d4d4;
}
h4 {
  color: #26265a;
  font-size: 2vw;
}
.login_wrapper__part {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.part_remember {
  display: flex;
  align-items: center;
  gap: 10px;
}
.part_remember input {
  width: auto;
}
.input_label {
  display: flex;
  flex-direction: column;
}
.input_label label {
  padding-left: 30px;
  padding-bottom: 10px;
  color: #26265a;
  font-weight: 500;
}
</style>
