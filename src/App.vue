<template>
  <div id="app">
    <v-app>
      <v-content>
        <ShadesOfBlack
          :basicInformation="{}"
          :contactInformation="{}"
          :workExperiences="[]"
          :educations="[]"
          :skills="[]" />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import * as Templates from './components/templates';

export default {
  name: 'app',
  components: {
    ...Templates
  }
}
</script>
