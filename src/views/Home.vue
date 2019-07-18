<template>
  <div class="home">
    <Idea msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Idea from '@/components/Ideas.vue'

export default {
  name: 'home',
  components: {
    Idea
  }
}
</script>
<style scope lang="scss">

</style>

