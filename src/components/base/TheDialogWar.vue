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
                                <button class="m-button m-button-secondary" @click="oncloseDialog()">
                                    <div class="m-btn-text">Không</div>
                                </button>
                                <button class="m-button" @click="confirmDeleteEmp()">
                                    <div class="m-btn-text">Có</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "TheDialogWarning",
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
  props: ["warnMessage"],
};
</script>
<style lang="">
</style>