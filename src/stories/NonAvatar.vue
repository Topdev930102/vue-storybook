<template>
<div>
  <div v-if="size==='small'">
   <b-avatar size="2rem" text="i">
     <div class="small-avatar v-center">i</div>
   </b-avatar>
  </div>
  <div v-if="size==='medium'">
    <b-avatar size="2.5rem">
      <div class="medium-avatar v-center">i</div>
    </b-avatar>
  </div>
  <div v-if="size==='large'">
    <b-avatar size="4rem">
      <div class="large-avatar v-center">i</div>
    </b-avatar>
  </div>
  <div v-if="size==='super'">
    <b-avatar size="6rem">
      <div class="super-avatar v-center">i</div>
    </b-avatar>
  </div>
</div>

 
  
</template>

<script>
import './nonavatar.css';
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
        return ['small', 'medium', 'large','super'].indexOf(value) !== -1;
      },
    },
  },

};
</script>
