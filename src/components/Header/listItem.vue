<template>
  <li>
    <a href="#">{{ listItemNameUpperCase }}</a>
  </li>
</template>

<script>
export default {
  props: {
    menuListItem: {
      type: Object,
      reqired: true,
    },
  },
  computed: {
    listItemNameUpperCase() {
      return this.menuListItem.name.toUpperCase();
    },
  },
};
</script>

<style scoped>
li{
    position: relative;
}
li a {
  color: #fff;
  font-size: .9vw;
}
li::after{
    content: "";
    width: 0;
    position: absolute;
    height: 2px;
    bottom: -10px;
    left: 0;
    background-color: #fff;
    transition: .3s;
}
li:hover::after{
    width: 100%;
}
</style>