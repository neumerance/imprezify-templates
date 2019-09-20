<template>
  <li v-if="value">
    <div class="d-inline-flex">
      <i :class="`${icon} width-20 mt-1 mr-3`"></i>
      <span>{{ value }}</span>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    icon: String,
    value: String,
  }
}
</script>
