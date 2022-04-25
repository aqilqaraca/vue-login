<template>
  <nav>
    <ul>
      <li class="service">
        <a href="#">
          <Icons
            :name="'category'"
            :iconColor="'white'"
            :bg="'#7783ac'"
            :hoverColor="'white'"
          />SERVICE</a
        >
      </li>
      <listItem
        v-for="menuListItem in getMenuList"
        :key="menuListItem.id"
        :menuListItem="menuListItem"
      />
      <li class="login">
          <figure>
            <img src="@/assets/icons/profile.png" alt="profile icon" />
          </figure>
        <button @click="login">
          {{ isLogin }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import listItem from "./listItem.vue";
import { mapGetters } from "vuex";
import Icons from "../SocialMediaIcons/Icons.vue";
import { getAuth, signOut } from "firebase/auth";
export default {
  components: {
    listItem,
    Icons,
  },
  computed: {
    ...mapGetters(["getMenuList"]),
    isLogin() {
      if (!this.$store.getters.getIsLogin) {
        return "LOGIN";
      } else {
        return "SIGN OUT";
      }
    },
  },
  methods: {
    login() {
      if (!this.$store.getters.getIsLogin) {
          this.$router.push("/login")
      } else {
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            this.$router.push("/login")
          })
          .catch((error) => {
          });
      }
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  gap: 25px;
  align-items: center;
}
ul li a {
  color: #fff;
  font-size: 0.9vw;
  display: flex;
  align-items: center;
  gap: 10px;
}
.service {
  border-right: 1px solid white;
  padding-right: 20px;
}
.login{
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
}
.login button{
  background: transparent;
  color: #fff;
  font-size: 0.9vw;
  cursor: pointer;
}
.login figure {
  background-color: #7783ac;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  outline: 2px solid #7783ac;
  outline-offset: 5px;
}
.isActive {
  color: #1d5cba;
}
</style>