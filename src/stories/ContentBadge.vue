<template>
<div>
  <div v-if="status" class="success-badge v-center s-1">
    غير منشور
  </div>
  <div v-else class="warning-badge v-center s-1">
   منشور
  </div>

</div>


</template>

<script>
import './badge.css';
import Vue from "vue";
import { BBadge,BButton  } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.component('b-badge',BBadge);
Vue.component('b-button',BButton);

export default {
  name: 'content-badge',
  props: {
    status: {
      type: Boolean,
      default: false,
    },
  },

};
</script>
