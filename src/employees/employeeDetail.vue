<template >
  <div>
    <div class="m-popup">
      <div class="m-popup-con">
        <div class="m-popup-background"></div>
        <div class="m-popup-drag">
          <div class="m-popup m-popup-content">
            <div class="m-popup-header">
              <div class="m-popup-title">
                <div class="m-title">{{ titlePopup }}</div>
                <label class="m-popup-checkbox">
                  <input type="checkbox" class="m-input-checkbox" />
                  <span class="m-checkbox">
                    <span class="m-checkbox-inner">
                      <div class="m-icon-16 m-icon-checkbox-active"></div>
                    </span>
                  </span>
                  <span class="m-input-checkbox-label">Là khách hàng</span>
                </label>
                <label class="m-popup-checkbox">
                  <input type="checkbox" class="m-input-checkbox" />
                  <span class="m-checkbox">
                    <span class="m-checkbox-inner">
                      <div class="m-icon-16 m-icon-checkbox-active"></div>
                    </span>
                  </span>
                  <span class="m-input-checkbox-label">Là nhà cung cấp</span>
                </label>
              </div>
              <div class="m-popup-close">
                <div
                  class="m-icon-24 m-icon-help"
                  style="margin-right: 6px"
                  title="Trợ giúp"
                ></div>
                <div
                  class="m-icon-24 m-icon-close"
                  title="Đóng"
                  @click="hiddenFormPopup()"
                ></div>
              </div>
            </div>
            <div class="m-popup--content">
              <div >
                <div class="m-content-2-col">
                  <div class="m-col-1 m-flex-wrap">
                    <div class="m-input-40 m-pr-6 m-pb-24">
                      <div class="m-flex">
                        <title-lable titleLable="Mã" />
                        <div class="m-input-title-require">&nbsp;*</div>
                      </div>
                      <input
                        type="text"
                        class="m-input m-input-code"
                        maxlength="25"
                        :class="{ 'm-input-error': errors.EmployeeCode }"
                        tabindex="1"
                        v-model="newEmployee.EmployeeCode"
                        ref="employeeCode"
                      />
                    </div>
                    <div class="m-input-60 m-pb-24">
                      <div class="m-flex">
                        <title-lable titleLable="Tên" />
                        <div class="m-input-title-require">&nbsp;*</div>
                      </div>
                      <input
                        type="text"
                        class="m-input"
                        :class="{ 'm-input-error': errors.EmployeeName }"
                        v-model="newEmployee.EmployeeName"
                        tabindex="2"
                      />
                    </div>
                    <div class="m-input-100 m-pb-24">
                      <div class="m-flex">
                        <title-lable titleLable="Đơn vị" />
                        <div class="m-input-title-require">&nbsp;*</div>
                      </div>
                      <!-- <MSCombobox url="https://amis.manhnv.net/api/v1/Departments" propValue="DepartmentId" propText="DepartmentName"></MSCombobox> -->
                      <!-- <select
                        class="m-combo-main-content-dep m-combo-main-content"
                        v-model="newEmployee.DepartmentId"
                        :class="{ 'm-input-error': errors.DepartmentId }"
                        style="padding-right: 12px"
                      >
                        <option value=""></option>
                        <option value="142cb08f-7c31-21fa-8e90-67245e8b283e">
                          Phòng nhân sự
                        </option>
                        <option value="17120d02-6ab5-3e43-18cb-66948daf6128">
                          Phòng tuyển sinh
                        </option>
                        <option value="469b3ece-744a-45d5-957d-e8c757976496">
                          Phòng sản xuất
                        </option>
                        <option value="4e272fc4-7875-78d6-7d32-6a1673ffca7c">
                          Phòng đào tạo
                        </option>
                      </select> -->
                      <div class="m-combo-box input" 
                      >
                        <div class="m-combo-main-content" 
                        :class="{ 'm-input-error': errors.DepartmentId }"
                        
                        >
                          <div
                            class="m-selected-options m-combo-input-department"
                          >
                            <input
                              type="hidden"
                              v-model="newEmployee.DepartmentId"
                            />
                            <input
                              type="text"
                              class="m-combo-input m-combo-input-department"
                              v-model="newEmployee.DepartmentName"
                              tabindex="7"
                            />
                          </div>
                          <div class="m-combo-action">
                            <div
                              class="m-btn-dropdown"
                              @click="
                                this.isshowListDepartment =
                                  !this.isshowListDepartment">
                              <div
                                class="m-icon-16 m-icon-arrow-dropdown"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="m-combo-menu" v-if="isshowListDepartment" >
                        <div class="m-combo-menu-header">
                          <table class="m-menu-table">
                            <thead class="m-menu-header">
                              <tr>
                                <th
                                  class="m-menu-header-th"
                                  style="width: 100px; text-align: left"
                                >
                                  <span>Mã đơn vị</span>
                                </th>
                                <th
                                  class="m-menu-header-th"
                                  style="width: 250px; text-align: left"
                                >
                                  <span>Tên đơn vị</span>
                                </th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                        <div class="m-combo-menu-content">
                          <table class="m-menu-table">
                            <tbody class="m-menu-items m-departments-list">
                              <!-- Lấy dữ liệu phòng ban gọi từ api   -->
                              <tr
                                class="m-menu-items-tr"
                                v-for="(department, index) in departments"
                                :key="index"
                                @click="getDepartment()">
                                <td
                                  class="m-menu-items-td"
                                  style="width: 100px; text-align: left">
                                  <span>{{ department.DepartmentCode }}</span>
                                </td>
                                <td
                                  class="m-menu-items-td"
                                  style="width: 250px; text-align: left">
                                  <span>{{ department.DepartmentName }}</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="m-input-100 m-pb-24">
                      <div class="m-flex-wrap">
                        <title-lable titleLable="Chức danh" />
                      </div>
                      <input
                        type="text"
                        class="m-input"
                        tabindex="10"
                        v-model="newEmployee.EmployeePosition"
                      />
                    </div>
                  </div>
                  <div class="m-col-2 m-flex-wrap">
                    <div class="m-input-40 m-pr-6 m-pb-24">
                      <div class="m-flex-wrap">
                        <title-lable titleLable="Ngày sinh" />
                      </div>
                      <input
                        type="date"
                        class="m-input"
                        v-model="newEmployee.DateOfBirth"
                        tabindex="3"
                      />
                    </div>
                    <div class="m-input-60 m-pb-24">
                      <div class="m-flex-wrap">
                        <title-lable titleLable="Giới tính" />
                      </div>
                      <div class="m-radio-group">
                        <label class="m-con-radio">
                          <input
                            type="radio"
                            class="m-input-radio"
                            value="1"
                            :checked="isChecked"
                            v-model="newEmployee.Gender"
                            tabindex="4"
                          />
                          <span class="m-radio">
                            <span class="m-radio-border"></span>
                            <span class="m-radio-circle"></span>
                          </span>
                          <span class="m-radio-label">Nam</span>
                        </label>
                        <label class="m-con-radio">
                          <input
                            type="radio"
                            class="m-input-radio"
                            value="0"
                            v-model="newEmployee.Gender"
                            tabindex="5"
                          />
                          <span class="m-radio">
                            <span class="m-radio-border"></span>
                            <span class="m-radio-circle"></span>
                          </span>
                          <span class="m-radio-label">Nữ</span>
                        </label>
                        <label class="m-con-radio">
                          <input
                            type="radio"
                            class="m-input-radio"
                            value="2"
                            v-model="newEmployee.Gender"
                            tabindex="6"
                          />
                          <span class="m-radio">
                            <span class="m-radio-border"></span>
                            <span class="m-radio-circle"></span>
                          </span>
                          <span class="m-radio-label">Khác</span>
                        </label>
                      </div>
                    </div>
                    <div class="m-input-60 m-pr-6 m-pb-24">
                      <div class="m-flex-wrap">
                        <title-lable
                          titleLable="Số CMND"
                          title="Số chứng minh nhân dân"
                        />
                      </div>
                      <input
                        type="text"
                        class="m-input"
                        tabindex="8"
                        v-model="newEmployee.IdentityNumber"
                      />
                    </div>
                    <div class="m-input-40 m-pb-24">
                      <div class="m-flex-wrap">
                        <title-lable titleLable="Ngày cấp" />
                      </div>
                      <input
                        type="date"
                        class="m-input"
                        tabindex="9"
                        v-model="newEmployee.IdentityDate"
                      />
                    </div>
                    <div class="m-input-100 m-pb-24">
                      <div class="m-flex-wrap">
                        <title-lable titleLable="Nơi cấp" />
                      </div>
                      <input
                        type="text"
                        class="m-input"
                        tabindex="11"
                        v-model="newEmployee.IdentityPlace"
                      />
                    </div>
                  </div>
                </div>
                <div class="m-content-1-col m-pb-24">
                  <div class="m-input-100">
                    <div class="m-flex-wrap">
                      <title-lable titleLable="Địa chỉ" />
                    </div>
                    <input
                      type="text"
                      class="m-input"
                      tabindex="12"
                      v-model="newEmployee.Address"
                    />
                  </div>
                </div>
                <div class="m-content-4-col">
                  <div class="m-col-1 m-pr-6">
                    <div class="m-input-100 m-pb-24">
                      <div class="m-flex-wrap">
                        <title-lable
                          titleLable="ĐT di động"
                          title="Điện thoại di động"
                        />
                      </div>
                      <input
                        type="text"
                        class="m-input"
                        tabindex="13"
                        v-model="newEmployee.TelephoneNumber"
                      />
                    </div>
                    <div class="m-input-100 m-pb-24">
                      <div class="m-flex-wrap">
                        <title-lable titleLable="Tài khoản ngân hàng" />
                      </div>
                      <input
                        type="text"
                        class="m-input"
                        v-model="newEmployee.BankAccountNumber"
                        tabindex="16"
                      />
                    </div>
                  </div>
                  <div class="m-col-2 m-pr-6">
                    <div class="m-input-100 m-pb-24">
                      <div class="m-flex-wrap">
                        <title-lable
                          titleLable="ĐT cố định"
                          title="Điện thoại cố định"
                        />
                      </div>
                      <input
                        type="text"
                        class="m-input"
                        v-model="newEmployee.PhoneNumber"
                        tabindex="14"
                      />
                    </div>
                    <div class="m-input-100 m-pb-24">
                      <div class="m-flex-wrap">
                        <title-lable titleLable="Tên ngân hàng" />
                      </div>
                      <input
                        type="text"
                        class="m-input"
                        v-model="newEmployee.BankName"
                        tabindex="17"
                      />
                    </div>
                  </div>
                  <div class="m-col-3 m-pr-6">
                    <div class="m-input-100 m-pb-24">
                      <div class="m-flex-wrap">
                        <title-lable titleLable="Email" />
                      </div>
                      <input
                        type="text"
                        class="m-input"
                        :class="{ 'm-input-error': errors.Email }"
                        v-model="newEmployee.Email"
                        tabindex="15"
                      />
                    </div>
                    <div class="m-input-100 m-pb-24">
                      <div class="m-flex-wrap">
                        <title-lable titleLable="Chi nhánh" />
                      </div>
                      <input
                        type="text"
                        class="m-input"
                        v-model="newEmployee.BankBranchName"
                        tabindex="18"
                      />
                    </div>
                  </div>
                  <div class="m-col-4"></div>
                </div>
              </div>
              <div class="m-popup--footer">
                <div class="m-divine"></div>
                <div class="m-popup-btn">
                  <div class="m-popup-btn-left">
                    <button
                      class="m-button m-button-secondary"
                      tabindex="21"
                      @click="hiddenFormPopup()"
                      @keydown.prevent="tabOder()"
                    >
                      <div class="m-btn-text">Hủy</div>
                    </button>
                  </div>
                  <div class="m-popup-btn-right">
                    <button
                      class="m-button m-button-secondary"
                      tabindex="20"
                      style="margin-right: 8px"
                      @click="btnSaveOnclick()"
                    >
                      <div class="m-btn-text">Cất</div>
                    </button>
                    <the-button
                      buttonTitle="Cất và thêm"
                      tabindex="19"
                      @click="saveAndAdd()"
                    ></the-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <the-dialog
      v-if="isShowDialog"
      :contentDialog="erorrDialog"
      @closeDialog="onCloseDialog()"
    ></the-dialog>
  </div>
</template>
  <script>
import TitleLable from "../../src/components/base/TheLable.vue";
import TheButton from "../../src/components/base/TheButton.vue";
import TheDialog from "../components/base/TheDialog.vue";
// import MSCombobox from "../components/base/ms-combobox.vue"
export default {
  name: "EmployeeDetail",
  components: {
    TitleLable,
    TheButton,
    TheDialog,
    // MSCombobox
  },
  props: ["titlePopup", "employeeId"],
  emits: ["closeForm"],
  data() {
    return {
      titleLable: "",
      isshowListDepartment: false,
      departments: [],
      buttonTitle: "",
      isChecked: true,
      error: [],
      errors: {
        EmployeeCode: "",
        EmployeeName: "",
        DepartmentId: "",
        Email: "",
      },
      newEmployee: {
        EmployeeCode: "",
        EmployeeName: "",
        DepartmentId: "",
        Email: "",
      },
      isShowDetail: false,
      isShowDialog: false,
      erorrDialog: "",
    };
  },
  computed: {
    isAdd: function () {
      if (this.valueIsEmpty(this.employeeId)) {
        return false;
      }
      return true;
    },
  },

  methods: {
    //Hàm lấy danh sách nhân viên
    //Author: NVQUY(15/12/2022)
    getAllDepartment() {
      try {
        this.$request
          .get("https://amis.manhnv.net/api/v1/Departments")
          .then((res) => {
            //Gắn dữ liệu cho phòng ban
            this.departments = res.data;
          });
      } catch (error) {
        console.log(error);
      }
    },
    //Ẩn form chi tiết nhân viên
    //Author: NVQUY(15/12/2022)
    hiddenFormPopup() {
      this.$emit("closeForm");
    },

    //Lưu và giữ lại form thêm mới nhân viên kèm theo mã mới
    saveAndShowDetail() {
      this.$emit("saveAndShowDetail");
    },
    //Hiển thị danh sách phòng ban
    getDepartment() {
      try {
        this.isshowListDepartment = false;
      } catch (error) {
        console.log(error);
      }
    },
    //Thêm mới nhân viên
    btnSaveOnclick() {
      try {
        //Validate dữ liệu
        let isValid = this.validateData();
        if (isValid) {
          //Gọi api thực hiện cất dữ liệu
          //Nếu là thêm mới nhân viên
          //Author : NVQUY(18/12/2022)
          if (!this.valueIsEmpty(this.employeeId)) {
            this.$request
              .post(
                "https://amis.manhnv.net/api/v1/Employees",
                this.newEmployee
              )
              .then((res) => {
                //Ẩn form thêm mới
                this.hiddenFormPopup();
                console.log(res);
              })
              .catch((error) => {
                //Hiển thị lỗi lấy từ serve
                this.isShowDialog = true;
                this.erorrDialog = error.response.data.userMsg;
              });
          }
          //Nếu là sửa nhân viên
          else {
            this.$request
              .put(
                `https://amis.manhnv.net/api/v1/Employees/${this.employeeId}`,
                this.newEmployee
              )
              .then((res) => {
                //Ẩn form thêm mới
                this.hiddenFormPopup();
                console.log(res);
              })
              .catch((error) => {
                //Hiển thị lỗi lấy từ serve
                this.isShowDialog = true;
                this.erorrDialog = error.response.data.userMsg;
              });
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    //Cất và thêm
    saveAndAdd() {
      try {
        let isValid = this.validateData();
        if (isValid) {
          //Gọi api thực hiện cất dữ liệu
          //Nếu là thêm mới nhân viên
          if (!this.valueIsEmpty(this.employeeId)) {
            this.$request
              .post(
                "https://amis.manhnv.net/api/v1/Employees",
                this.newEmployee
              )
              .then((res) => {
                //Gọi hàm lưu và hiển thị form
                this.saveAndShowDetail();
                //Reset lại data
                this.newEmployee = {};
                //Gọi mã mới
                this.$request
                  .get(
                    "https://amis.manhnv.net/api/v1/Employees/NewEmployeeCode"
                  )
                  .then((res) => {
                    this.newEmployee.EmployeeCode = res.data;
                    //focus vào ô nhập liệu đầu tiên
                    this.$nextTick(function () {
                      this.$refs.employeeCode.focus();
                    });
                    //checked vào radio giới tính nam
                    this.isChecked = true;
                  });
                console.log(res);
              })
              .catch((error) => {
                //Hiển thị lỗi lấy từ serve
                this.isShowDialog = true;
                this.erorrDialog = error.response.data.userMsg;
              });
          }
          //Nếu là sửa nhân viên
          else {
            this.$request
              .put(
                `https://amis.manhnv.net/api/v1/Employees/${this.employeeId}`,
                this.newEmployee
              )
              .then((res) => {
                //Ẩn form chi tiết
                this.hiddenFormPopup();
                console.log(res);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }
      } catch (error) {
        //Hiển thị lỗi lấy từ serve
        this.isShowDialog = true;
        this.erorrDialog = error.response.data.userMsg;
      }
    },
    //Validate dữ liệu
    //Author: NVQUY(18/12/2022)
    validateData() {
      try {
        //Reset lại lỗi
        this.errors = {
          EmployeeCode: "",
          EmployeeName: "",
          DepartmentId: "",
          Email: "",
        };
        //Nếu mã nhân viên để trống
        if (!this.valueIsEmpty(this.newEmployee.EmployeeCode)) {
          this.errors.EmployeeCode = "Mã nhân viên không được phép để trống.";
          this.isShowDialog = true;
          this.erorrDialog = "Mã nhân viên không được phép để trống.";
          this.erorr.push = "";
        }
        //Nếu tên nhân viên để trống
        if (!this.valueIsEmpty(this.newEmployee.EmployeeName)) {
          this.errors.EmployeeName = "Mã nhân viên không được phép để trống.";
          this.isShowDialog = true;
          this.erorrDialog = "Tên nhân viên không được phép để trống.";
          this.erorr.push = "";
        }
        //Nếu thông tin phòng ban để trống
        if (!this.valueIsEmpty(this.newEmployee.DepartmentId)) {
          this.errors.DepartmentId = "Mã nhân viên không được phép để trống.";
          this.isShowDialog = true;
          this.erorrDialog = "Thông tin phòng ban không được phép để trống.";
          this.erorr.push = "";
        }
        //Nếu email không đúng định dạng
        if (this.newEmployee.Email) {
          if (!this.validateEmail(this.newEmployee.Email)) {
            this.errors.Email = "";
            this.isShowDialog = true;
            this.erorrDialog = "Email không đúng định dạng.";
            this.erorr.push = "";
          }
        }
        //Nếu mảng danh sách lỗi > 0 thì trả về false, ngược lại trả về true
        if (this.error.length > 0) {
          return false;
        }
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    //Hàm kiểm tra tất cả giá trị bắt buộc nhập
    valueIsEmpty(value) {
      if (value == "" || value == null || value == undefined) {
        return false;
      }
      return true;
    },
    //Kiêm tra định dạng email
    //Author : NVQUy(18/12/2022)
    validateEmail(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    },
    //Đóng dialog
    onCloseDialog() {
      this.isShowDialog = false;
    },
    //TabOder
    tabOder() {
      this.$refs.employeeCode.focus();
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
          //Trả về định dạng thời gian
          return (date = `${year}/${month}/${day}`);
        }
      } catch (error) {
        console.log(error);
      }
    },
    offAllFilter(){
      alert(1)
    }
  },

  created() {
    //Lấy thông tin phòng ban từ serve
    this.getAllDepartment();
    //Lấy dữ liệu từ serve
    if (this.valueIsEmpty(this.employeeId)) {
      this.$request
        .get(`https://amis.manhnv.net/api/v1/Employees/${this.employeeId}`)
        .then((res) => {
          console.log(res);
          //Thực hiện gán dữ liệu
          this.newEmployee = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      //Lấy mã nhân viên mới
      this.$request
        .get("https://amis.manhnv.net/api/v1/Employees/NewEmployeeCode")
        .then((res) => {
          this.newEmployee.EmployeeCode = res.data;
          //focus vào ô nhập liệu đầu tiên
          this.$nextTick(function () {
            this.$refs.employeeCode.focus();
          }).catch((error) => {
            console.log(error);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
</script>
