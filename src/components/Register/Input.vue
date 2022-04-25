<template>
  <div class="input_label">
    <label :for="labelFor">{{ title }}</label>
    <input
      :type="inputType"
      :id="labelFor"
      :placeholder="placeholder"
      @input="setValue"
    />
    <RegisterValidateError :errors="errors" />
  </div>
</template>


<script>
import RegisterValidateError from "./RegisterValidateError.vue";
export default {
  components: {
    RegisterValidateError,
  },
  props: ["labelFor", "inputType", "placeholder", "errors", "title"],
  methods : {
      setValue(e){
          this.$emit('setData',e.target.value)
      }
  }
};
</script>

<style scoped>
.register_wrapper input {
  width: 450px;
  height: 50px;
  background-color: #f0f4fa;
  border: 1px solid rgb(225, 225, 225);
  border-radius: 10px;
  padding: 10px;
}
.register_wrapper input::placeholder {
  color: #d4d4d4;
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