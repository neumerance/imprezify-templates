<template>
  <img :src="photoSrc" />
</template>
<script>
export default {
  props: {
    photo: String
  },
  computed: {
    photoSrc() {
      return this.photo || 'https://i.pravatar.cc/192'
    }
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
