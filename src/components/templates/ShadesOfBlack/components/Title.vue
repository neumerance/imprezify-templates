<template>
  <h2 class="title" v-if="title">
    {{ title }}
  </h2>
</template>
<script>
export default {
  props: {
    title: String || null
  },
}
</script>
