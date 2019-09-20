<template>
  <img :src="photo" />
</template>
<script>
export default {
  props: {
    photo: String
  }
}
</script>
<style scoped>
img {
  width: 100%;
  height: auto;
  display: block;
  border: 3px solid #F5F5F5;
}
</style>
