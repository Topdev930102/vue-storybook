<template>
 <div>
  <b-modal v-model="modalShow" class="siglemodal" hide-header hide-backdrop hide-footer>
    <div class="d-flex justify-content-around align-items-center">
      <img src="../assets/person.svg" width="80" height="80"/>
    </div>
    <div>
      <p class="text-center">هل ترغب في إلغاء اشتراك الطالب من الدورة</p>
      <p class="text-center">هذه خطوة تأكيدية لإلغاء اشتراك الطالب محمد سمير سعد من الدورة</p>
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <WarnButton  :label="'OK'" :size="'small'"  :status="'enabled'" @click="onOK"/>
      <SecondaryButton  :label="'Cancel'" :size="'small'" :status="'enabled'" @click="onCancel"/>
    </div>
  </b-modal>
     
 </div>
</template>

<script>
import './singlemodal.css';
import Vue from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BModal } from 'bootstrap-vue';
import WarnButton from './WarnButton.vue';
import SecondaryButton from './SecondaryButton.vue';
Vue.component('b-modal', BModal)

export default {
    name: "my-modal",
    props: {},
    data() {
        return {
            modalShow: true
        };
    },
    methods: {
      onOK(){
        this.modalShow=false;
      },
      onCancel(){
        this.modalShow=false;
      }


    },
    components: { WarnButton, SecondaryButton }
};
</script>
