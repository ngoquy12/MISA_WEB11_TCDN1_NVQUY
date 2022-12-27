<template lang="">
    <div>
       <!-- Toolbar -->
      <div class="m-body-toolbar">
        <div class="m-search-area">
            <input class="m-input m-input-search"
              type="text"
              :placeholder="text.searchPlaceHolder"
              v-model.trim="this.filter.employeeFilter"
              @keyup.enter="loadData()"/>
            <div class="m-input-icon-search">
                <div class="m-icon-20 m-icon-search "></div>
            </div>
        </div>
        <div class="m-icon-24 m-icon-refresh"
         @click="loadData()"
         :title="text.refreshToolTip"
         ></div>
    </div>
    <!-- Bảng chi tiết nhân viên -->
      <div class="m-body-table">
          <table class="m-table">
            <thead class="m-thead">
              <tr class="m-tr">
                <th class="m-th m-checkall">
                  <label class="m-table-checkbox">
                    <input type="checkbox" class="m-input-checkall"/>
                    <span class="m-checkbox">
                      <span class="m-checkbox-inner">
                        <div class="m-icon-16 m-icon-checkbox-active"></div>
                      </span>
                    </span>
                  </label>
                </th>
                <th class="m-th" style="min-width: 140px">
                  <div class="m-th-title">{{fieldName.employeeCode}}</div>
                </th>
                <th class="m-th" style="min-width: 200px">
                  <div class="m-th-title">{{fieldName.employeeName}}</div>
                </th>
                <th class="m-th" style="min-width: 150px">
                  <div class="m-th-title">{{fieldName.gender}}</div>
                </th>
                <th class="m-th m-th-dob" style="min-width: 155px">
                  <div class="m-th-title">{{fieldName.dateOfBirth}}</div>
                </th>
                <th class="m-th" style="min-width: 150px">
                  <div class="m-th-title" :title="fieldName.identityNumberToolTip">
                    {{fieldName.identityNumber}}
                  </div>
                </th>
                <th class="m-th" style="min-width: 140px">
                  <div class="m-th-title">{{fieldName.employeePosition}}</div>
                </th>
                <th class="m-th" style="min-width: 250px">
                  <div class="m-th-title">{{fieldName.departmentName}}</div>
                </th>
                <th class="m-th" style="min-width: 150px">
                  <div class="m-th-title">{{fieldName.bankAccountNumber}}</div>
                </th>
                <th class="m-th" style="min-width: 250px">
                  <div class="m-th-title">{{fieldName.bankName}}</div>
                </th>
                <th class="m-th" style="min-width: 250px">
                  <div class="m-th-title" :title="fieldName.bankBranchNameToolTip">
                    {{fieldName.bankBranchName}}
                  </div>
                </th>
                <th class="m-th m-th-widget" style="min-width: 120px">
                  <div class="m-th-title">{{fieldName.function}}</div>
                </th>
              </tr>
            </thead>
            <tbody class="m-tbody">
              <!-- Nhập dữ liệu cho bảng -->
              <tr class="m-tr" :key="index" v-for="(employee, index) in employees"  @dblclick="dblEditEmployee(employee)">
                <td class="m-td m-td-multi">
                  <label class="m-table-checkbox">
                    <input type="checkbox" class="m-input-checkbox"/>
                    <span class="m-checkbox">
                      <span class="m-checkbox-inner">
                        <div class="m-icon-16 m-icon-checkbox-active"></div>
                      </span>
                    </span>
                  </label>
                </td>
                <td class="m-td">
                  {{ employee.EmployeeCode }}
                </td>
                <td class="m-td">{{ employee.EmployeeName }}</td>
                <td class="m-td">{{ employee.GenderName }}</td>
                <td class="m-td" style="text-align: center">
                  {{ formatDate(employee.DateOfBirth) }}
                </td>
                <td class="m-td">{{ employee.IdentityNumber }}</td>
                <td class="m-td">{{ employee.EmployeePosition }}</td>
                <td class="m-td">{{ employee.DepartmentName }}</td>
                <td class="m-td">{{ employee.BankAccountNumber }}</td>
                <td class="m-td">{{ employee.BankName }}</td>
                <td class="m-td">{{ employee.BankBranchName }}</td>
                <td class="m-td m-td-widget">
                  <div class="m-dropdown">
                    <button class="m-dropdown-type-feature m-dropdown-button-text" @click="dblEditEmployee(employee)">
                      <div class="m-button-text">{{text.modify}}</div>
                    </button>
                    <button  class="m-dropdown-type-feature m-dropdown-button-icon" @click="toggleDropdown($event, employee.EmployeeId, employee.EmployeeCode)">
                      <div class="m-button-text">
                        <div class="m-icon-16 m-icon-arrow-down-blue"></div>
                      </div>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <teleport to='body'>
             <!-- Dropdown menu xóa nhân viên -->
           <div class="m-dropdown-menu" v-if="isShowDropdown" :style="featurePosition">
            <ul class="m-dropdown-menu-items">
                <li class="m-dropdown-item">
                    <a class="m-dropdown-item-link">{{text.duplicate}}</a>
                </li>
                <li class="m-dropdown-item" @click="confirmDelete">
                    <a class="m-dropdown-item-link">{{text.delete}}</a>
                </li>
                <li class="m-dropdown-item">
                    <a class="m-dropdown-item-link">{{text.stopUsing}}</a>
                </li>
            </ul>
          </div>
        </teleport>
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
                                  autofocus="autofocus" 
                                  v-bind:value="this.filter.pageSize + text.recordOnPage"
                                  />
                          </div>
                          <div class="m-combo-action">
                              <div class="m-btn-dropdown"
                               @click="this.isShowDropdownPage=!this.isShowDropdownPage">
                                  <div class="m-icon-16 m-icon-arrow-dropdown m-dropdown-close" :class="{'m-dropdown-open': this.isShowDropdownPage}">
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="m-page-number">
                <!-- Chọn trang trước   -->
                  <div class="m-prev-page" :class="{'m-disable' : this.currentPage == 1}" @click="previousPage()">{{text.prev}}</div>
                  <!-- Lựa chọn thứ tự các trang -->
                  <div class="m-page-index"
                  v-show="this.totalPage > 1"
                  @click="firstPage()"
                  :class="{'m-number': this.currentPage == 1}"
                  >1</div>
                  <div class="m-page-index"
                    v-show="(this.currentPage < 3 || this.totalPage == 2) && this.totalPage >= 2"
                    @click="this.currentPage=2, loadData()"
                    :class="{'m-number': this.currentPage == 2}">2</div>
                  <div class="m-page-index"
                    v-show="(this.currentPage < 3 || this.totalPage >3) && this.totalPage == 2"
                    @click="this.currentPage=3, loadData()"
                    :class="{'m-number': this.currentPage == 3}">3</div>
                  <!-- Chọn trang cuối -->
                  <div class="m-next-page" @click="nextPage()" :class="{'m-disable' : this.currentPage == this.totalPage}">{{text.next}}</div>
              </div>
          </div>
      </div>
      <!-- Chọn số bản ghi -->
      <teleport to='body'>
          <div class="m-combo-dropdown-panel" v-if="isShowDropdownPage">
              <div class="m-dropdown-body-container">
                <div class="m-combo-dropdown-items">
                  <a class="m-combo-box-item" :class="{'m-item-highlight': this.filter.pageSize == 10}"
                    @click="this.filter.pageSize = 10,
                    this.currentPage = 1, loadData(), hiidenDropdownPage()" >10{{text.recordOnPage}}
                  </a>
                  <a class="m-combo-box-item" :class="{'m-item-highlight': this.filter.pageSize == 20}"
                    @click="this.filter.pageSize = 20,
                    this.currentPage = 1, loadData(), hiidenDropdownPage()" >20{{text.recordOnPage}}
                  </a>
                  <a class="m-combo-box-item" :class="{'m-item-highlight': this.filter.pageSize == 30}"
                    @click="this.filter.pageSize = 30,
                    this.currentPage = 1, loadData(), hiidenDropdownPage()" >30{{text.recordOnPage}}
                  </a>
                  <a class="m-combo-box-item" :class="{'m-item-highlight': this.filter.pageSize == 50}"
                    @click="this.filter.pageSize = 50,
                    this.currentPage = 1, loadData(), hiidenDropdownPage()" >50{{text.recordOnPage}}
                  </a>
                  <a class="m-combo-box-item" :class="{'m-item-highlight': this.filter.pageSize == 100}"
                    @click="this.filter.pageSize = 100,
                    this.currentPage = 1, loadData(), hiidenDropdownPage()" >100{{text.recordOnPage}}
                  </a>
                </div>
              </div>
          </div>
      </teleport>
      </div>
      <!--Component loading -->
      <TheLoading v-if="isShowLoading" ></TheLoading>
      <!-- Component employee detail -->
      <employee-detail v-if="isShowEmployeeDetail" 
      titlePopup="Sửa nhân viên" 
      :employeeId="employeeIdSelected" 
      @closeForm="closePopup()"
      @closeFormAndLoad="closeDialogAndLoad()"
      ></employee-detail>
      <!-- Component dialog warning -->
      <dialog-warn :warnMessage="warnDelete"
       v-if="isShowDialogWarn"
       @closeDialog="cancalConfirm"
       @confirmDelete="onDeleteEmployee"
       ></dialog-warn>
       <!-- Component Dialog successs -->
       <dialog-success v-if="isShowDialogSuccess"
        :messageSuccess="alertSuccess"
        @closeDialogSuccess="closeDialogSuccess()"
        ></dialog-success>
  </div>
</template>
<script>
import TheLoading from "../components/base/TheLoading.vue";
import EmployeeDetail from "../employees/employeeDetail.vue";
import DialogWarn from "../components/base/TheDialogWar.vue";
import resourceVN from "../resources/resourceVN.js";
import DialogSuccess from "../components/base/TheDialogSuccess.vue";
export default {
  name: "TheTable",
  emits: ["closeForm", "closeFormAndLoad"],
  components: {
    TheLoading,
    EmployeeDetail,
    DialogWarn,
    DialogSuccess,
  },
  data() {
    return {
      employees: [],
      isShowLoading: false,
      isShowDropdownPage: false,
      totalRecord: 0,
      isShowEmployeeDetail: false,
      employeeIdSelected: {},
      warnDelete: "",
      alertSuccess: "",
      isShowDialogWarn: false,
      isShowDialogSuccess: false,
      fieldName: resourceVN.FieldName,
      text: resourceVN.Text,
      alertMessage: resourceVN.AlertMessage,
      currentPage: 1,
      position: {
        top: 0,
        left: 0,
      },
      deleteId: "",
      isShowDropdown: false,
      filter: {
        employeeFilter: "",
        pageSize: 10,
        currentPage: 1,
      },
      totalPage: 10,
    };
  },
  created() {
    console.log("Created");
    this.loadData();
  },
  methods: {
    //Đóng form chi tiết nhân viên
    //Author: NVQUY(15/12/2022)
    closePopup() {
      this.isShowEmployeeDetail = false;
    },
    //Đóng form chi tiết nhân viên và load lại dữ liệu
    //Author: NVQUY(15/12/2022)
    closeDialogAndLoad() {
      this.isShowEmployeeDetail = false;
      this.loadData();
    },
    //Hiển thị dropdown xóa nhân viên
    //Author : NVQUY(18/12/2022)
    toggleDropdown(e, employeeId, employeeCode) {
      this.deleteId = employeeId;
      this.isShowDropdown = !this.isShowDropdown;
      this.position.top = e.clientY;
      this.position.left = e.clientX;
      this.warnDelete = `Bạn chắc chắn muốn xóa nhân viên <${employeeCode}> không?`;
    },
    //Lấy danh sách tất cả nhân viên
    //Author: NVQUY(15/12/2022)
    loadData() {
      //Hiển thị loading
      this.isShowLoading = true;
      //Gọi api
      this.$request
        .get(
          `https://amis.manhnv.net/api/v1/Employees/filter?employeeFilter=${this.filter.employeeFilter}&pageSize=${this.filter.pageSize}&pageNumber=${this.currentPage}`
        )
        .then((res) => {
          //Thực hiện gán dữ liệu
          this.employees = res.data.Data;
          //Lấy và gán tổng số bản ghi
          this.totalRecord = res.data.TotalRecord;
          //Chọn số bản ghi hiển thị trên bảng
          this.totalPage = res.data.TotalPage;
          //Sau khi load dữ liệu xong thì tắt loading
          this.isShowLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //Hàm fomat ngày/tháng/năm
    //Author: NVQUY(15/12/2022)
    formatDate(date) {
      try {
        if (date) {
          //Chuyển sang dữ liệu date
          date = new Date(date);
          // Lấy ngày
          let day = date.getDate();
          day = day < 10 ? `0${day}` : day;
          // Lấy tháng
          let month = date.getMonth() + 1;
          month = month < 10 ? `0${month}` : month;
          // Lấy năm
          let year = date.getFullYear();
          return (date = `${day}/${month}/${year}`);
        }
      } catch (error) {
        console.log(error);
      }
    },
    //Double click hiển thị form sửa thông tin nhân viên
    //Author: NVQUY(17/12/2022)
    dblEditEmployee(employee) {
      try {
        //Hiển thị form sửa thông tin nhân viên
        this.isShowEmployeeDetail = true;
        //Gán giá trị cho form
        this.employeeIdSelected = employee.EmployeeId;
      } catch (error) {
        console.log(error);
      }
    },
    //Hàm confirm xóa nhân viên
    confirmDelete() {
      this.isShowDialogWarn = true;
    },
    //Chọn nút hủy trên dialog confirm xóa nhân viên
    cancalConfirm() {
      this.isShowDialogWarn = false;
    },
    //Đóng dialog xóa thành công
    closeDialogSuccess() {
      this.isShowDialogSuccess = false;
    },
    //Hàm xử lý xóa thông tin nhân viên theo ID
    //Author: NVQUy(19/12/2022)
    onDeleteEmployee() {
      try {
        this.$request
          .delete(`https://amis.manhnv.net/api/v1/Employees/${this.deleteId}`)
          .then((res) => {
            if (res.data) {
              this.isShowDialogWarn = false;
              this.isShowDropdown = false;
              this.loadData();
              this.alertSuccess = this.alertMessage.deleteEmployeeSuccess;
              setTimeout(() => (this.isShowDialogSuccess = true), 100);
            }
          });
      } catch (error) {
        console.log(error);
      }
    },
    //Ẩn dropdown chọn số bản ghi
    hiidenDropdownPage() {
      this.isShowDropdownPage = false;
    },
    //Quay về trang trước
    previousPage() {
      console.log("Quay lại đang trước");
      if (this.currentPage != 1) {
        this.currentPage--;
        this.loadData();
      }
    },
    //Chọn trang tiếp theo
    nextPage() {
      console.log("Chuyển trang tiếp theo");
      if (this.currentPage != this.totalPage) {
        this.currentPage++;
        this.loadData();
      }
    },
    //Quay lại  trang đầu
    firstPage() {
      console.log("Quay về trang đầu");
      if (this.currentPage != 1) {
        this.currentPage = 1;
        this.loadData();
      }
    },
    //Chuyển tới trang cuối
    lastPage() {
      console.log("Tới trang cuối");
      if (this.currentPage != this.totalPage) {
        this.currentPage = this.totalPage;
        this.loadData();
      }
    },
  },
  computed: {
    featurePosition() {
      return {
        top: `${this.position.top}px`,
        left: `${this.position.left}px`,
      };
    },
  },
};
</script>

