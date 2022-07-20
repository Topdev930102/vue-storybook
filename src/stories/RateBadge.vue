<template>
<div>
  <div v-if="rate>=4" class="high v-between s-3">
     {{rate}}
     <img src="../assets/star.png" width="15" height="15"/>
  </div>
  <div v-else class="low v-between s-3">
     {{rate}}
     <img src="../assets/star.png" width="15" height="15"/>
  </div>

</div>

</template>

<script>
import './badge.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: 'my-badge',
  props: {
    rate:{
      type:Number,
      default:0
    }
  },

};
</script>
