<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>
  <Footer />
</template>

<script>
import "./assets/base.css";
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
  components: {
    Header,
    Footer,
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$store.commit("setIsLogin", true);
      } else {
        this.$store.commit("setIsLogin", false);
      }
    });
  },
};
</script>