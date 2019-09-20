<template>
  <ul>
    <IconValueEntry
      icon="fa fa-birthday-cake"
      :value="birthDate" />
    <IconValueEntry
      icon="fa fa-flag"
      :value="basicInformation.nationality" />
    <IconValueEntry
      icon="fa fa-user-circle"
      :value="basicInformation.status" />
    <IconValueEntry
      icon="fa fa-address-card"
      :value="fullAddress" />
  </ul>
</template>
<script>
import IconValueEntry from './abstracts/IconValueEntry';

export default {
  props: {
    basicInformation: Object
  },
  components: {
    IconValueEntry
  },
  computed: {
    birthDate() {
      if (this.basicInformation.dateOfBirth) {
        if (this.basicInformation.dateOfBirth) {
          return new Date(
            this.basicInformation.dateOfBirth
          ).toLocaleString('en-EN', {
            month: 'short', day: 'numeric', year: 'numeric'
          });
        }
      } else {
        return null
      }
    },
    fullAddress() {
      if (!!this.basicInformation.address) {
        return `${this.basicInformation.address} `+
          `${this.basicInformation.city || ''} `+
          `${this.basicInformation.country || ''} `+
          `${this.basicInformation.postalCode || ''}`
      } else {
        return null;
      }
    }
  }
}
</script>
<style scoped>
.width-20 {
  width: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>
