<template>
<div>
  <div v-if="size==='xsmall'">
   <b-button class="secondary-warn secondary-warn-button-xsmall" :class="`secondary-warn-${status}`" @click="onClick">{{label}}</b-button>
  </div>
  <div v-if="size==='small'">
    <b-button class="secondary-warn secondary-warn-button-small" :class="`secondary-warn-${status}`" @click="onClick">{{label}}</b-button>
  </div>
  <div v-if="size==='medium'">
    <b-button class="secondary-warn secondary-warn-button-medium" :class="`secondary-warn-${status}`" @click="onClick">{{label}}</b-button>
  </div>
  <div v-if="size==='large'">
    <b-button class="secondary-warn secondary-warn-button-large" :class="`secondary-warn-${status}`" @click="onClick">{{label}}</b-button>
  </div>
</div>
</template>

<script>
import './secondarywarnbutton.css';
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
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
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
