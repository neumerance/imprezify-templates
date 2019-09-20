<template>
  <div class="timeline">
    <ul>
      <Entity :entity="entity"
        v-for="(entity, key) in entities" :key="key" />
    </ul>
  </div>
</template>
<script>
import Entity from './Entity';
export default {
  components: {
    Entity
  },
  props: {
    entities: Array,
  }
}
</script>
<style>
  .timeline > ul {
    margin-left: 80px;
    list-style-type: none;
  }
  .timeline > ul > li {
    border-left: 6px solid #424242;
    position: relative;
  }
  .timeline > ul > li > p {
    margin: 0;
  }
  .timeline > ul > li:before {
    content: attr(data-date);
    text-align: right;
    position: absolute;
    left: -110px;
    top: 0;
    color: #777;
    font-size: 1.1rem;
    font-weight: 600;
    width: 80px;
  }
  .timeline > ul > li:after {
    background: #FFFFFF;
    border: solid 5px #424242;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    content: "";
    position: absolute;
    left: -13px;
    top: 12px;
  }
  .timeline ul {
    list-style-type: none;
  }
</style>
