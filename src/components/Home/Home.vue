<template>
  <section id="home">
    <div class="user_information" v-if="getUserData">
      <p>mail : {{ getUserData.email }}</p>
      <p>Email verified : {{ getUserData.emailVerified ? "Yes" : "No" }}</p>
      <p>Creation time : {{ new Date(Number(getUserData.createdAt)).toLocaleString() }}</p>
      <p>Last Sign In time : {{ new Date(Number(getUserData.lastLoginAt)).toLocaleString()  }}</p>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    getUserData() {
      const userKey = Object.keys(window.sessionStorage).filter((it) =>
        it.startsWith("firebase:authUser")
      )[0];
      const user = userKey
        ? JSON.parse(sessionStorage.getItem(userKey))
        : undefined;
      return user;
    },
  },
  beforeCreate(){
    if(!this.$store.getters.getIsLogin){
      this.$router.push("/login")
    }
  }
};
</script>

<style scoped>
#home {
  height: 70vh;
  width: 100%;
  background-color: #ebf3ff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user_information {
  padding: 50px;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
}
</style>
