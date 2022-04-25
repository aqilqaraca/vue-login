<template>
    <div class="icons">
          <Icons :name="'facebook'" :iconColor="'white'" :bg="'#7783ac'"  :hoverColor="'#2b3c63'"/>
          <Icons :name="'twitter'" :iconColor="'white'" :bg="'#7783ac'"  :hoverColor="'#1DA1F2'"/>
          <Icons :name="'linkedin'" :iconColor="'white'" :bg="'#7783ac'"  :hoverColor="'#0085d2'"/>
      </div>
</template>

<script>
import Icons from './Icons.vue'
export default {
    components : {
        Icons
    }
}
</script>

<style scoped>
.icons{
    display: flex;
    gap: 10px;
}
</style>