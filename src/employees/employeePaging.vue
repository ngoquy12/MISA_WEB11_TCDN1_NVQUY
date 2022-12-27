<template lang="">
    <div>
        <!-- Thanh phân trang -->
        <div class="m-pagination">
            <div class="m-pagination-left">
                <div class="m-total-record">{{text.total}}: <b class="m-total">{{totalRecord}}</b> {{text.record}}</div>
            </div>
            <div class="m-pagination-right">
                <div class="m-record-in-page">
                    <div class="m-combo-box">
                        <div class="m-combo-main-content">
                            <div class="m-selected-options">
                                <input type="text" class="m-combo-input" readonly="true"
                                    autofocus="autofocus" value="10 bản ghi trên 1 trang" />
                            </div>
                            <div class="m-combo-action">
                                <div class="m-btn-dropdown" @click="toggleDropdown()">
                                    <div class="m-icon-16 m-icon-arrow-dropdown m-dropdown-close">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="m-page-number">
                    <div class="m-prev-page m-disable">{{text.prev}}</div>
                    <div class="m-page-index m-number">1</div>
                    <div class="m-page-index">2</div>
                    <div class="m-page-index">3</div>
                    <div class="m-next-page">{{text.next}}</div>
                </div>
            </div>
        </div>
        <!-- Chọn số bản ghi -->
        <teleport to='body'>
            <div class="m-combo-dropdown-panel" v-if="isShowDropdown">
                <div class="m-dropdown-body-container">
                  <div class="m-combo-dropdown-items">
                    <a class="m-combo-box-item" @click="pagingItemOnClick" value="10">10 bản ghi trên 1 trang</a>
                    <a class="m-combo-box-item" @click="pagingItemOnClick" value="20">20 bản ghi trên 1 trang</a>
                    <a class="m-combo-box-item" @click="pagingItemOnClick" value="30">30 bản ghi trên 1 trang</a>
                    <a class="m-combo-box-item" @click="pagingItemOnClick" value="50">50 bản ghi trên 1 trang</a>
                    <a class="m-combo-box-item" @click="pagingItemOnClick" value="100">100 bản ghi trên 1 trang</a>
                  </div>
                </div>
            </div>
        </teleport>
    </div>
</template>
<script>
import ResourceVN from "../resources/resourceVN.js"
export default {
    name : "EmployeePaging",
    methods : { 
        //Ẩn hiện dropdown chọn số bản ghi
        toggleDropdown(){
            this.isShowDropdown =!this.isShowDropdown;
        },
        /**
        * Lấy giá trị số bản ghi trên 1 trang
         * Author: QuangNV (21/12/2022)
        */
        pagingItemOnClick(e) {
        try {
         this.paging.pageSize = e.target.getAttribute("value");
         this.isShowDropdown = false;
            console.log(this.paging);
        } catch (error) {
            console.log(error);
        }
    }
  },
    data(){
        return {
            text : ResourceVN.Text,
            isShowDropdown : false,
            paging: {
            pageSize: 10,
            pageNumber: 1,
            employeeFilter: '',
      }
        }
    },
    props : {
        totalRecord : {
            type : Number,
            default : 0
        }
    }
};
</script>
<style lang="">
</style>