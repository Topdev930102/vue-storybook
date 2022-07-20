<template>
 <b-form-checkbox v-model="status" class="checkbox"  
    @click.native="onClick"
 ></b-form-checkbox>

</template>
<script>
import './checkbox.css';
import Vue from "vue";
import { BFormCheckbox} from "bootstrap-vue";
// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.component('b-form-checkbox',BFormCheckbox);

export default {
  name: 'my-checkbox',
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
