<template>
  <div id="preview">
    <v-container class="grey lighten-5" pa-0>
      <v-layout row>
        <v-flex class="grey darken-3" shrink>
          <div class="leftCol white--text ma-3">
            <div class="mb-3">
              <Photo :photo="basicInformation.photo" />
            </div>
            <v-divider class="mb-3"></v-divider>
            <div class="basic-info white--text mb-3">
              <h3 class="subtitle white--text mb-3">Contacts</h3>
              <ContactInformation :contactInformation="contactInformation" />
            </div>
            <v-divider class="mb-3"></v-divider>
            <div class="basic-info white--text mb-3">
              <h3 class="subtitle white--text mb-3">Personal Info</h3>
              <BasicInformation :basicInformation="basicInformation" />
            </div>
            <v-divider class="mb-3"></v-divider>
            <div class="mb-3">
              <h3 class="subtitle white--text mb-3">Skills</h3>
              <Skill
                :skill="skill"
                v-for="(skill,i) in skills"
                :key="i" />
            </div>
          </div>
        </v-flex>
        <v-flex>
          <div class="rightCol grey--text text--darken-3 ma-3">
            <Name :basicInformation="basicInformation" />
            <div class="mb-3">
              <Title :title="basicInformation.title" />
            </div>
            <div class="mb-3">
              <ProfileOverview :overview="basicInformation.overview" />
            </div>
            <v-divider class="mb-3"></v-divider>
            <div class="work-experiences mb-3">
              <h2 class="subtitle mb-3">WORK EXPERIENCES</h2>
              <TimelinedEntity :entities="workExperiences" />
            </div>
            <v-divider class="mb-3"></v-divider>
            <div class="education mb-3">
              <h2 class="subtitle">EDUCATION</h2>
              <TimelinedEntity :entities="educations" />
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import components from './components';

export default {
  components: {
    ...components
  },
  props: {
    basicInformation: Object,
    contactInformation: Object,
    workExperiences: Array,
    educations: Array,
    skills: Array,
  }
}
</script>
<style scoped>
  #preview {
    width: 794px;
    margin: 0 auto;
  }
  .leftCol {
    width: 232px;
  }
  .leftCol .photo {
    width: 188px;
    height: auto;
    border: 1px solid #dddddd;
    margin: 0 auto;
  }
</style>
