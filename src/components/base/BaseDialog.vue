<template lang="">
    <div>
        <div class=" m-employee-danger">
            <div class="m-dialog-box">
                <div class="m-dialog-center">
                    <div class="m-dialog-background"></div>
                    <div class="m-dialog-drag">
                        <div class="m-dialog-message">
                            <div class="m-dialog-content">
                                <div class="m-content-icon">
                                    <div v-if="alert.type=='warning'" class="m-icon-48 m-icon-warning"></div>
                                    <div v-if="alert.type=='danger'" class="m-icon-48 m-icon-danger"></div>
                                    <div v-if="alert.type=='question'" class="m-icon-48 m-icon-question"></div>
                                    <div v-if="alert.type=='success'" class="m-icon-48 m-icon-success"></div>
                                </div>
                                <div class="m-content-message">{{alert.contentDialog}}</div>
                            </div>
                            <div class="m-dialog-line"></div>
                            <div class="m-dialog-footer">
                               <the-button buttonTitle="Đóng" @click="hiddenDialog()"></the-button>
                            </div>
                            <!--  -->
                            <div v-if="alert.type=='warning'" class="dialog-footer alert-warning-delete-footer">
                                <BaseButton :btnText="Text.deny" :isSecondary="true" @click="toggleAlert" tabIndex="2" />
                                <BaseButton :btnText="Text.confirm" @click="confirmClick" tabIndex="1" />
                            </div>
                
                            <div v-if="alert.type=='danger'||alert.type=='success'" class="dialog-footer alert-danger-footer">
                                <BaseButton :btnText="Text.close" @click="toggleAlert" tabIndex="1" />
                            </div>
                
                            <div v-if="alert.type=='question'" class="dialog-footer alert-question-footer">
                                <BaseButton :btnText="Text.cancel" :isSecondary="true" @click="toggleAlert" tabIndex="3" />
                                <div class="btn-action">
                                    <BaseButton :btnText="Text.deny" :isSecondary="true" @click="closeAll" tabIndex="2" />
                                    <BaseButton :btnText="Text.confirm" @click="confirmClick" tabIndex="1" />
                                </div>
                            </div>
                            <!--  -->

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TheButton from "../base/TheButton.vue";
export default {
  name: "TheDialog",
  components: {
    TheButton,
  },
  props: ["contentDialog"],
  emits: ["onCloseDialog"],
  methods : {
    //Ẩn dialog
    hiddenDialog() {
      this.$emit("closeDialog");
    },
  }
};
</script>
<style lang="">
</style>