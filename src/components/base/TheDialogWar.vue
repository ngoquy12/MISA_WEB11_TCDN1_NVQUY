<template lang="">
    <div>
        <div class=" m-delete-warning">
            <div class="m-dialog-box">
                <div class="m-dialog-center">
                    <div class="m-dialog-background"></div>
                    <div class="m-dialog-drag">
                        <div class="m-dialog-message">
                            <div class="m-dialog-content">
                                <div class="m-content-icon">
                                    <div class="m-icon-48 m-icon-warning"></div>
                                </div>
                                <div class="m-content-message">{{warnMessage}}</div>
                            </div>
                            <div class="m-dialog-line"></div>
                            <div class="m-dialog-footer">
                                <the-button buttonTitle="Không" :isSecondary="true" @click="oncloseDialog()"></the-button>
                                <the-button buttonTitle="Có" @click="confirmDeleteEmp()"></the-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TheButton from "../base/TheButton.vue"
export default {
  name: "TheDialogWarning",
  components : {
    TheButton
  },
  emits: ["closeDialog", "warnMessage","confirmDelete"],
  data() {
    return {
      closeDialog: false,
      confirmDelete: false,
    };
  },
  methods: {
    //Đóng dialog confirm xóa nhân viên
    //Author : NVQUY(18/12/2022)
    oncloseDialog() {
      this.$emit("closeDialog");
    },
    //Confirm xóa nhân viên
    confirmDeleteEmp(){
        this.$emit('confirmDelete')
    }
  },
  props: {
    warnMessage : {
        type: String,
        defaul : ""
    }
  },
};
</script>
<style lang="">
</style>