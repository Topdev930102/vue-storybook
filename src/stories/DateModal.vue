<template>
 <div>
  <b-modal v-model="modalShow" class="siglemodal" hide-header hide-backdrop hide-footer>

  </b-modal>
     
 </div>
</template>

<script>
import './datemodal.css';
import Vue from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BModal } from 'bootstrap-vue';
Vue.component('b-modal', BModal)

export default {
    name: "my-modal",
    props: {},
    data() {
        return {
            modalShow: true
        };
    },

};
</script>
