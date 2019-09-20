<template>
  <div class="mb-1" v-if="rated">
    <h4 class="subheading white--text ma-0 pa-0">{{this.skill.name}}</h4>
    <v-progress-linear class="ma-0 pa-0" :color="rateColor" height="10" :value="ratingValue"></v-progress-linear>
    <p :class="`subheading text-center progress-text ma-0 pa-0 ${textColor}`">{{rateLabel}}</p>
  </div>
</template>
<script>
const SKILL_LEVELS = [
  'Novice', 'Beginner', 'Skillful',
  'Experienced', 'Expert',
];
const SKILL_COLOUR = [
  'white', 'blue darken-1', 'cyan accent-3',
  'teal accent-3', 'green darken-1',
];
const SKILL_TEXT_COLOUR = [
  'white--text', 'blue--text darken-1--text',
  'cyan--text accent-3--text', 'teal--text accent-3--text',
  'green--text darken-1--text',
]

export default {
  props: {
    skill: Object
  },
  computed: {
    rateLabel() {
      return SKILL_LEVELS[this.skill.rating];
    },
    rateColor() {
      return SKILL_COLOUR[this.skill.rating];
    },
    textColor() {
      return SKILL_TEXT_COLOUR[this.skill.rating];
    },
    rated() {
      return !!this.skill.name;
    },
    ratingValue() {
      return (parseInt(this.skill.rating) + 1) * 20;
    }
  }
};
</script>
<style>
.progress-text {
  text-align: center;
  line-height: 30px;
}
</style>
