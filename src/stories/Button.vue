<template>
<div>
  <div v-if="size==='small'">
   <b-avatar size="2rem">
      <img src="../assets/avatar.png" width="32px" height="32px"/>
   </b-avatar>
  </div>
  <div v-if="size==='medium'">
    <b-avatar size="2.5rem">
      <img src="../assets/avatar.png" width="40px" height="40px"/>
    </b-avatar>
  </div>
  <div v-if="size==='large'">
    <b-avatar size="4rem">
      <img src="../assets/avatar.png" width="64px" height="64px"/>
    </b-avatar>
  </div>
</div>

</template>

<script>
import './button.css';
import Vue from "vue";
import { BAvatar} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.component('b-avatar',BAvatar);

export default {
  name: 'my-avatar',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
  },

};
</script>
