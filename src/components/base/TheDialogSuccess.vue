<template lang="">
    <div>
    <!-- Success dialog -->
    <div class="m-employee-success">
        <div class="m-dialog-box">
            <div class="m-dialog-center">
                <div class="m-dialog-background"></div>
                <div class="m-dialog-drag">
                    <div class="m-dialog-message">
                        <div class="m-dialog-content">
                            <div class="m-content-icon">
                                <div class="m-icon-48 m-icon-suscess"></div>
                            </div>
                            <div class="m-content-message">{{messageSuccess}}</div>
                        </div>
                        <div class="m-dialog-line"></div>
                        <div class="m-dialog-footer">
                            <the-button buttonTitle="Đóng" @click="closeDialog"></the-button>
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
  name: "TheDialogSuccess",
  components: {
    TheButton,
  },
  data() {
    return {};
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialogSuccess");
    },
  },
  props: {
    messageSuccess: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="">
</style>