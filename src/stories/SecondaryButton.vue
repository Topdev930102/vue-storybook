<template>
<div>
  <div v-if="size==='xsmall'">
   <b-button class="secondary-button secondary-button-xsmall" :class="`secondary-${status}`" @click="onClick">{{label}}</b-button>
  </div>
  <div v-if="size==='small'">
    <b-button class="secondary-button secondary-button-small" :class="`secondary-${status}`" @click="onClick">{{label}}</b-button>
  </div>
  <div v-if="size==='medium'">
    <b-button class="secondary-button secondary-button-medium" :class="`secondary-${status}`" @click="onClick">{{label}}</b-button>
  </div>
  <div v-if="size==='large'">
    <b-button class="secondary-button secondary-button-large" :class="`secondary-${status}`" @click="onClick">{{label}}</b-button>
  </div>
</div>
</template>

<script>
import './secondarybutton.css';
import Vue from "vue";
import { BButton} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.component('b-button',BButton);

export default {
  name: 'my-avatar',
  props: {
    label:{
      type:String,
      required:true
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['xsmall','small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    status: {
      type: String,
      default: 'enabled',
      validator: function (value) {
        return ['enabled','hover', 'actived', 'disable'].indexOf(value) !== -1;
      },
    },
  },
  methods:{
    onClick(e){
      this.$emit('click',e);
    }
  }

};
</script>
