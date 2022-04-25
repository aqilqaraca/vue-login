<template>
  <header>
    <div class="container">
      <div class="header_left">
        <figure>
          <router-link to="/">
            <img src="@/assets/logo_02.png" alt="logo" />
          </router-link>
        </figure>
        <IconsWrapper />
      </div>
      <menuList />
    </div>
  </header>
</template>

<script>
import menuList from "./menuList.vue";
import IconsWrapper from "../SocialMediaIcons/IconsWrapper.vue";
export default {
  components: {
    menuList,
    IconsWrapper,
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 100px;
  background-color: #11112f;
}
header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.header_left {
  display: flex;
  gap: 50px;
  align-items: center;
}
</style>
