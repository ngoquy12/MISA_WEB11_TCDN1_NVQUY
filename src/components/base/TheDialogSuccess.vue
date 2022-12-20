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
                            <button class="m-button">
                                <div class="m-btn-text">Đóng</div>
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
  name: "TheDialogSuccess",
  data() {
    return {
        messageSuccess : ''
    };
  },
  props : ['messageSuccess']
};
</script>
<style lang="">
</style>