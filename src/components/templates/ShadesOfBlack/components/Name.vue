<template>
  <h1 class="display-1" v-if="fullName">
    {{ fullName }}
  </h1>
</template>
<script>
export default {
  props: {
    basicInformation: Object
  },
  computed: {
    fullName() {
      if(this.basicInformation.firstName) {
        return `${this.basicInformation.firstName} ` +
          `${this.basicInformation.middleName} ` +
          `${this.basicInformation.lastName}`
      } else {
        return null;
      }
    }
  }
}
</script>
