<template>

 <b-form-radio v-model="status" class="radio" 
    @change.native="onClick"
 ></b-form-radio>

</template>
<script>
import './radio.css';
import Vue from "vue";
import { BFormRadio} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.component('b-form-radio',BFormRadio);

export default {
  name: 'my-radio',
  data() {
      return {
        status: true
      }
    },
    methods:{
      onClick(){
        this.status=!this.status;
      }

    }
 };
</script>
