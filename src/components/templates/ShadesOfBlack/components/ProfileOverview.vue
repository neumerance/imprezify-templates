<template>
  <div v-if="overview"
    v-html="overview">
  </div>
</template>
<script>
export default {
  props: {
    overview: String || null
  },
}
</script>
<style scoped>
ul {
  display: block;
  list-style-type: disc;
  padding-left: 40px;
}
ol {
  display: block;
  list-style-type: decimal;
  padding-left: 40px;
}
</style>
