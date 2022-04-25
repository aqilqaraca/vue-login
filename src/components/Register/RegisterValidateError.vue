<template>
  <div class="error-message">
    <div
      class="input-errors"
      v-for="error of errors"
      :key="error.$uid"
    >
      <div class="error-msg"> * {{ error.$message }}</div>
    </div>
  </div>
</template>


<script>
export default {
    props : ["errors"]
}
</script>

<style scoped>
.error-message .error-msg{
    color: tomato;
    font-size: .7vw;
    text-transform: lowercase;
    margin-top: 10px;
}
</style>