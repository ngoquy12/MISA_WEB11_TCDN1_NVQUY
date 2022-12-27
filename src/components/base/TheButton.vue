<template lang="">
    <div>
        <button class="m-button" :class="{'m-button-secondary' : isSecondary}" :tabindex="tabIndex">
            <div class="m-btn-text">{{buttonTitle}}</div>
        </button>
    </div>
</template>
<script>
export default {
  name: "TheButton",
  data() {
    return {};
  },
  props: {
    buttonTitle: {
      type: String,
      default: "",
    },
    isSecondary: {
      type: Boolean,
      default: false,
    },
    tabIndex : {
      type : Number,
      default: 0
    },
  },
};
</script>
<style lang="">
</style>