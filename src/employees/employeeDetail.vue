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
                  <span class="m-input-checkbox-label">{{text.isCustomer}}</span>
                </label>
                <label class="m-popup-checkbox">
                  <input type="checkbox" class="m-input-checkbox" />
                  <span class="m-checkbox">
                    <span class="m-checkbox-inner">
                      <div class="m-icon-16 m-icon-checkbox-active"></div>
                    </span>
                  </span>
                  <span class="m-input-checkbox-label">{{
                    text.isProvider
                  }}</span>
                </label>
              </div>
              <div class="m-popup-close">
                <div
                  class="m-icon-24 m-icon-help"
                  style="margin-right: 6px"
                  :title="text.helpToolTip"
                ></div>
                <div
                  class="m-icon-24 m-icon-close"
                  :title="text.escToolTip"
                  @click="hiddenFormPopup()"
                ></div>
              </div>
            </div>
            <div class="m-popup--content">
              <div>
                <div class="m-content-2-col">
                  <div class="m-col-1 m-flex-wrap">
                    <div class="m-input-40 m-pr-6 m-pb-24">
                      <div class="m-flex">
                        <title-lable :titleLable="fieldName.Code" />
                        <div class="m-input-title-require">&nbsp;*</div>
                      </div>
                      <input
                        type="text"
                        class="m-input"
                        :class="{ 'm-input-error': errors.EmployeeCode }"
                        tabindex="1"
                        @blur="validateData()"
                        v-model="newEmployee.EmployeeCode"
                        ref="employeeCode"
                      />
                      <div class="m-input-message-error">{{errors.EmployeeCode}}</div>
                    </div>
                    <div class="m-input-60 m-pb-24">
                      <div class="m-flex">
                        <title-lable :titleLable="fieldName.Name" />
                        <div class="m-input-title-require">&nbsp;*</div>
                      </div>
                      <input
                        type="text"
                        class="m-input"
                        @blur="validateData()"
                        :class="{ 'm-input-error': errors.EmployeeName }"
                        v-model="newEmployee.EmployeeName"
                        tabindex="2"
                      />
                      <div class="m-input-message-error">{{errors.EmployeeName}}</div>
                    </div>
                    <div class="m-input-100 m-pb-24">
                      <div class="m-flex">
                        <title-lable :titleLable="fieldName.department" />
                        <div class="m-input-title-require">&nbsp;*</div>
                      </div>
                      <TheCombobox url="https://amis.manhnv.net/api/v1/Departments"
                       propValue="DepartmentId"
                        propText="DepartmentName"
                        @getValue="getDepartmentValue"
                        :isError="isDepartmentError"
                        :required="true"
                        ></TheCombobox>
                      <div class="m-input-message-error" v-if="isDepartmentError">{{errors.DepartmentId}}</div>
                    </div>
                    <div class="m-input-100 m-pb-24">
                      <div class="m-flex-wrap">
                        <title-lable :titleLable="fieldName.employeePosition" />
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
                        <title-lable :titleLable="fieldName.dateOfBirth" />
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
                        <title-lable :titleLable="fieldName.gender" />
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
                          <span class="m-radio-label">{{ text.male }}</span>
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
                          <span class="m-radio-label">{{ text.female }}</span>
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
                          <span class="m-radio-label">{{ text.other }}</span>
                        </label>
                      </div>
                    </div>
                    <div class="m-input-60 m-pr-6 m-pb-24">
                      <div class="m-flex-wrap">
                        <title-lable
                          :titleLable="fieldName.identityNumber"
                          :title="fieldName.identityNumberToolTip"
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
                        <title-lable :titleLable="fieldName.identityDate" />
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
                        <title-lable :titleLable="fieldName.identityPlace" />
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
                      <title-lable :titleLable="fieldName.address" />
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
                          :titleLable="fieldName.telephoneNumber"
                          :title="fieldName.telephoneNumberToolTip"
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
                        <title-lable
                          :titleLable="fieldName.bankAccountNumber"
                        />
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
                          :titleLable="fieldName.phoneNumber"
                          :title="fieldName.phoneNumberToolTip"
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
                        <title-lable :titleLable="fieldName.bankName" />
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
                        <title-lable :titleLable="fieldName.email" />
                      </div>
                      <input
                        type="text"
                        class="m-input"
                        @blur="validateData()"
                        :class="{ 'm-input-error': errors.Email }"
                        v-model="newEmployee.Email"
                        tabindex="15"
                      />
                      <div class="m-input-message-error">{{errors.Email}}</div>
                    </div>
                    <div class="m-input-100 m-pb-24">
                      <div class="m-flex-wrap">
                        <title-lable :titleLable="fieldName.branch" />
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
                    <the-button :isSecondary="true" :tabIndex="21"
                      @click="hiddenFormPopup"
                      @keydown.prevent="tabOder"
                      :buttonTitle="text.cancel"
                    ></the-button>
                  </div>
                  <div class="m-popup-btn-right">
                      <the-button :tabIndex="20"
                         @click="btnSaveOnclick"
                        :buttonTitle="text.store"
                        :isSecondary="true"
                        v-bind:style="{'marginRight': 8 + 'px'}" 
                         ></the-button>
                    <the-button :tabIndex="19" @click="saveAndAdd()" :buttonTitle="text.storeAdd"></the-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Dialog wraning -->
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
import resourceVN from "../../src/resources/resourceVN.js";
import TheCombobox from "../components/base/TheCombobox.vue"

export default {
  name: "EmployeeDetail",
  components: {
    TitleLable,
    TheButton,
    TheDialog,
    TheCombobox,
  },
  props: ["titlePopup", "employeeId"],
  emits: ["closeForm"],
  data() {
    return {
      titleLable: "",  // Tiêu đề của form 
      fieldName: resourceVN.FieldName, //Tên các trường có trong form
      errorMessage: resourceVN.ErrorMessage, // Tên resource cảnh báo 
      text: resourceVN.Text, //Tên resource các đoạn text
      buttonTitle: "", // Tên button
      isDepartmentError : false,
      flag: true, // Gắn cờ
      errors: { //Danh sách các lỗi
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
      isShowDialog: false, // Lựa chọn có show dialog không
      erorrDialog: "", // Lỗi có trên dialog
    };
  },
  methods: {
    //Ẩn form chi tiết nhân viên
    //Author: NVQUY(15/12/2022)
    hiddenFormPopup() {
      this.$emit("closeForm");
    },
    //Ẩn form chi tiết và load lại dữ liệu
    //Author: NVQUY(15/12/2022)
    hiddenAndLoad() {
      this.$emit("closeFormAndLoad");
    },
  //#region Các hàm liên quan đến cất và thêm dữ liệu
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
                // this.$emit("closeFormAndLoad");
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
              .then(() => {
                //Ẩn form thêm mới và load lại dữ liệu
                this.$emit("closeFormAndLoad");
              })
              .catch((error) => {
                //Hiển thị lỗi lấy từ serve
                this.isShowDialog = true;
                this.erorrDialog = error.response.data.userMsg;
                //Nếu lỗi mặc định từ serve thì gắn lại lỗi khác ch dễ hiểu
                if (
                  error.response.data.userMsg == this.errorMessage.errorByServe
                )
                  this.erorrDialog = this.errorMessage.employeeExited;
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
                // //Reset lại data
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
                this.hiddenAndLoad();
                console.log(res);
              })
              .catch((error) => {
                this.isShowDialog = true;
                this.erorrDialog = error.response.data.userMsg;
                //Nếu lỗi mặc định từ serve thì gắn lại lỗi khác ch dễ hiểu
                if (
                  error.response.data.userMsg == this.errorMessage.errorByServe
                )
                  this.erorrDialog = this.errorMessage.employeeExited;
              });
          }
        }
      } catch (error) {
        //Hiển thị lỗi lấy từ serve
        this.isShowDialog = true;
        this.erorrDialog = error.response.data.userMsg;
      }
    },
    //Lấy ra giá trị từ combobox phòng ban
    getDepartmentValue(value){
        this.newEmployee.DepartmentId = value;
        this.isDepartmentError = false;
    },

  //#endregion
  //#region Các hàm liên quan đến Validate dữ liệu
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
          this.errors.EmployeeCode = this.errorMessage.emptyEmployeeCode;
          this.flag = false;
        }
        //Nếu tên nhân viên để trống
        if (!this.valueIsEmpty(this.newEmployee.EmployeeName)) {
          this.errors.EmployeeName = this.errorMessage.emptyEmployeeName;
          this.flag = false;
        }
        //Nếu thông tin phòng ban để trống
        if (!this.valueIsEmpty(this.newEmployee.DepartmentId)) {
          this.isDepartmentError = true;
          this.errors.DepartmentId = this.errorMessage.emptyDepartmentName;
          this.flag = false;
        }
        //Nếu email không đúng định dạng
        if (this.newEmployee.mail) {
          if (!this.validateEmail(this.newEmployee.Email)) {
            this.errors.Email = this.errorMessage.invalidEmail;
            this.flag = false;
          }
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

  //#endregion
    //Đóng dialog
    onCloseDialog() {
      this.isShowDialog = false;
    },
    //TabOder
    tabOder() {
      this.$refs.employeeCode.focus();
    },
    //Hàm fomat ngày/tháng/năm khi Created
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
          return `${year}-${month}-${day}`;
        }
      } catch (error) {
        console.log(error);
      }
    }
  },

  created() {
    //Lấy dữ liệu từ server
    if (this.valueIsEmpty(this.employeeId)) {
      this.$request
        .get(`https://amis.manhnv.net/api/v1/Employees/${this.employeeId}`)
        .then((res) => {
          console.log(res);
          //Thực hiện gán dữ liệu
          this.newEmployee = res.data;
          this.newEmployee.dateOfBirth = this.formatDate(res.data.DateOfBirth);
          this.newEmployee.identityDate = this.formatDate(res.data.IdentityDate
          );
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


