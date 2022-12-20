<template lang="">
    <div>
       <!-- Toolbar -->
      <div class="m-body-toolbar">
        <div class="m-search-area">
            <input class="m-input m-input-search m-input-34" type="text"
                placeholder="Tìm theo mã, tên nhân viên">
            <div class="m-input-icon-search">
                <div class="m-icon-20 m-icon-search "></div>
            </div>
        </div>
        <div class="m-icon-24 m-icon-refresh" @click="loadData()"></div>
    </div>
    <!-- Bảng chi tiết nhân viên -->
      <div class="m-body-table">
          <table class="m-table">
            <thead class="m-thead">
              <tr class="m-tr">
                <th class="m-th m-checkall">
                  <label class="m-table-checkbox">
                    <input type="checkbox" class="m-input-checkall" />
                    <span class="m-checkbox">
                      <span class="m-checkbox-inner">
                        <div class="m-icon-16 m-icon-checkbox-active"></div>
                      </span>
                    </span>
                  </label>
                </th>
                <th class="m-th" style="min-width: 140px">
                  <div class="m-th-title">Mã nhân viên</div>
                </th>
                <th class="m-th" style="min-width: 200px">
                  <div class="m-th-title">Tên nhân viên</div>
                </th>
                <th class="m-th" style="min-width: 150px">
                  <div class="m-th-title">Giới tính</div>
                </th>
                <th class="m-th m-th-dob" style="min-width: 155px">
                  <div class="m-th-title">Ngày sinh</div>
                </th>
                <th class="m-th" style="min-width: 150px">
                  <div class="m-th-title" title="Số chứng minh nhân dân">
                    Số CMND
                  </div>
                </th>
                <th class="m-th" style="min-width: 140px">
                  <div class="m-th-title">Chức danh</div>
                </th>
                <th class="m-th" style="min-width: 250px">
                  <div class="m-th-title">Tên đơn vị</div>
                </th>
                <th class="m-th" style="min-width: 150px">
                  <div class="m-th-title">Số tài khoản</div>
                </th>
                <th class="m-th" style="min-width: 250px">
                  <div class="m-th-title">Tên ngân hàng</div>
                </th>
                <th class="m-th" style="min-width: 250px">
                  <div class="m-th-title" title="Chi nhánh tài khoản ngân hàng">
                    Chi nhánh TK ngân hàng
                  </div>
                </th>
                <th class="m-th m-th-widget" style="min-width: 120px">
                  <div class="m-th-title">Chức năng</div>
                </th>
              </tr>
            </thead>
            <tbody class="m-tbody">
              <!-- Nhập dữ liệu cho bảng -->
              <tr class="m-tr" :key="index" v-for="(employee, index) in employees"  @dblclick="dblEditEmployee(employee)">
                <td class="m-td m-td-multi">
                  <label class="m-table-checkbox">
                    <input type="checkbox" class="m-input-checkbox" />
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
                    <button class="m-dropdown-type-feature m-dropdown-button-text" @click=" dblEditEmployee(employee)">
                      <div class="m-button-text">Sửa</div>
                    </button>
                    <button  class="m-dropdown-type-feature m-dropdown-button-icon">
                      <div class="m-button-text">
                        <div class="m-icon-16 m-icon-arrow-down-blue"></div>
                      </div>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- Thanh phân trang -->
          <div class="m-pagination">
            <div class="m-pagination-left">
                <div class="m-total-record">Tổng số: <b class="m-total">{{totalRecord}}</b> bản ghi</div>
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
                                <div class="m-btn-dropdown">
                                    <div class="m-icon-16 m-icon-arrow-dropdown m-dropdown-close">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="m-page-number">
                    <div class="m-prev-page">Trước</div>
                    <div class="m-page-index">1</div>
                    <div class="m-page-index">2</div>
                    <div class="m-page-index">3</div>
                    <div class="m-next-page">Sau</div>
                </div>
            </div>
        </div>
      </div>
      <!--Component loading -->
      <TheLoading v-if="isShowLoading" ></TheLoading>
      <!-- Component employee detail -->
      <employee-detail v-if="isShowEmployeeDetail" 
      titlePopup="Sửa nhân viên" 
      :employeeId="employeeIdSelected" 
      @closeForm="closeDialog()"
      ></employee-detail>
  </div>
</template>
<script>
import TheLoading from "../components/base/TheLoading.vue";
import EmployeeDetail from "../employees/employeeDetail.vue";
export default {
  name: "TheTable",
  emits: ["closeForm"],
  components: {
    TheLoading,
    EmployeeDetail,
  },
  data() {
    return {
      employees: [],
      isShowLoading: false,
      totalRecord: 0,
      isShowEmployeeDetail: false,
      employeeIdSelected: {},
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    //Đóng form chi tiết nhân viên
    //Author: NVQUY(15/12/2022)
    closeDialog() {
      this.isShowEmployeeDetail = false;
      this.loadData();
    },
    //Lấy danh sách tất cả nhân viên
    //Author: NVQUY(15/12/2022)
    loadData() {
      //Hiển thị loading
      this.isShowLoading = true;
      //Gọi api
      this.$request
        .get("https://amis.manhnv.net/api/v1/Employees")
        .then((res) => {
          //Thực hiện gán dữ liệu
          this.employees = res.data;
          //Lấy và gán tổng số bản ghi
          this.totalRecord = res.data.length;
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
  },
};
</script>
