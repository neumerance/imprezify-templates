<template>
  <li :data-date="calculatedDateRange" class="pl-4 pb-4">
    <div class="d-inline-flex mb-3">
      <img
        v-if="logo"
        class="mr-2 rounded"
        :src="logo"
        width="50"
        height="50"
      />
      <div>
        <h3 class="title" v-if="entity.name">
          {{ entity.name }}
        </h3>
        <h4 v-if="entity.title" class="subtitle">
          {{ entity.title }}
        </h4>
      </div>
    </div>
    <div
      class="mb-3 description"
      v-if="entity.description"
      v-html="entity.description">
    </div>
    <ul v-if="hasContacts" class="ma-0 pa-0">
      <li v-if="entity.email">
        <div class="d-inline-flex">
          <i class="fa fa-envelope width-20 mt-1 mr-3"></i>
          <div>
            {{ entity.email }}
          </div>
        </div>
      </li>
      <li v-if="entity.phone">
        <div class="d-inline-flex">
          <i class="fa fa-phone width-20 mt-1 mr-3"></i>
          <div>
            {{ entity.phone }}
          </div>
        </div>
      </li>
      <li v-if="entity.address">
        <div class="d-inline-flex">
          <i class="fa fa-address-card width-20 mt-1 mr-3"></i>
          <div>
            {{ entity.address }}
            {{ entity.city }}
            {{ entity.country }}
            {{ entity.postalCode }}
          </div>
        </div>
      </li>
    </ul>
  </li>
</template>
<script>
// props Entity
// object {
  // name,
  // title,
  // description,
  // since,
  // until,
  // present,
  // logo,
  // phone,
  // address,
  // city,
  // country,
  // postalCode,
// }
export default {
  props: {
    entity: Object
  },
  methods: {
    strpDateFormat(dateString) {
      try {
        return new Date(
          dateString
        ).toLocaleString('en-EN', {
          month: 'short', year: 'numeric'
        });
      } catch (_error) {
        return '';
      }
    }
  },
  computed: {
    calculatedDateRange() {
      if (!!this.entity.since) {
        return `${this.strpDateFormat(this.entity.since)} ` +
          `${this.entity.present ? 'present' : this.strpDateFormat(this.entity.until)}`
      } else {
        return '';
      }
    },
    logo() {
      if (this.entity.logo) {
        return this.entity.logo;
      } else {
        return null;
      }
    },
    hasContacts() {
      if (!this.entity) { return false }
      return !!this.entity.email ||
        !!this.entity.phone ||
        !!this.entity.address
    }
  }
}
</script>
<style>
  .width-20 {
    width: 20px;
  }
  .description ul, .description p {
    padding:0;
    margin:0;
  }
  .description ul li {
    margin-bottom: 10px;
  }
</style>
