<template>
<div>
  <div v-if="size==='xsmall'">
   <b-button class="warning warning-button-xsmall" :class="`warning-${status}`"  @click="onClick">{{label}}</b-button>
  </div>
  <div v-if="size==='small'">
    <b-button class="warning warning-button-small" :class="`warning-${status}`"  @click="onClick">{{label}}</b-button>
  </div>
  <div v-if="size==='medium'">
    <b-button class="warning warning-button-medium" :class="`warning-${status}`"  @click="onClick">{{label}}</b-button>
  </div>
  <div v-if="size==='large'">
    <b-button class="warning warning-button-large" :class="`warning-${status}`"  @click="onClick">{{label}}</b-button>
  </div>
</div>
</template>

<script>
import './warnbutton.css';
import Vue from "vue";
import { BButton} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.component('b-button',BButton);

export default {
  name: 'WarnButton',
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
