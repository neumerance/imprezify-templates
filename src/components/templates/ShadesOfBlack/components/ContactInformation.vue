<template>
  <ul>
    <IconValueEntry
      icon="fa fa-envelope"
      :value="contactInformation.email" />
    <IconValueEntry
      icon="fa fa-skype"
      :value="contactInformation.skype" />
    <IconValueEntry
      icon="fa fa-linkedin"
      :value="contactInformation.linkedin" />
    <IconValueEntry
      icon="fa fa-phone"
      :value="contactInformation.phone" />
  </ul>
</template>
<script>
import IconValueEntry from './abstracts/IconValueEntry';

export default {
  props: {
    contactInformation: Object
  },
  components: {
    IconValueEntry
  },
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
