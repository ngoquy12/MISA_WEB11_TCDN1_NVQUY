<template >
  <div class="m-content-header">
    <div class="m-header-title">Nhân viên</div>
    <the-button  @click="showFormEmpoloyee()" buttonTitle="Thêm mới nhân viên"></the-button>
  </div>
  <employee-detail v-if="isShowFormEmpoloyee" @closeForm="closeForm1" titlePopup="Thêm mới nhân viên"></employee-detail>

</template>
<script>
import EmployeeDetail from "../../employees/employeeDetail.vue"
import TheButton from "../base/TheButton.vue"
export default {
  name: "TheContent",
  components : {
    EmployeeDetail,
    TheButton
  },
  data(){
    return {
      isShowFormEmpoloyee : false,
      buttonTitle : ''
    }
  },
  //Hiển thị form chi tiết nhân viên
  //Author: NVQUY(15/12/2022)
  methods : {
    showFormEmpoloyee() {
      this.isShowFormEmpoloyee = true;
    },
    //Đóng form chi tiết nhân viên
    //Author: NVQUY(15/12/2022)
    closeForm1() {
      this.isShowFormEmpoloyee = false;
    }
  }
}

</script>
<style lang="">
</style>