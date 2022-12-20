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
                                    <div class="m-icon-48 m-icon-danger"></div>
                                </div>
                                <div class="m-content-message">{{contentDialog}}</div>
                            </div>
                            <div class="m-dialog-line"></div>
                            <div class="m-dialog-footer">
                               <the-button buttonTitle="Đóng" @click="hiddenDialog()"></the-button>
                            </div>
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