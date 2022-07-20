<template>
<div @click="onChange()">
 <v-switches v-model="enabled" color="info" theme="bootstrap" ></v-switches>
 </div>
</template>
<script>
import './toggle.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vue from "vue";
import Switches from "vue-switches";
Vue.component('v-switches',Switches)
export default {
  name: 'my-toggle',
  data() {
      return {
        enabled: true
      }
    },
    methods:{
      onChange(){
        this.enabled=!this.enabled;
        this.$emit('changed');
      }

    }

 };
</script>
