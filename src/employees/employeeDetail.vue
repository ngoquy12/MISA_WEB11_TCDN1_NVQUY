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
      titleLable: "",  // Ti??u ????? c???a form 
      fieldName: resourceVN.FieldName, //T??n c??c tr?????ng c?? trong form
      errorMessage: resourceVN.ErrorMessage, // T??n resource c???nh b??o 
      text: resourceVN.Text, //T??n resource c??c ??o???n text
      buttonTitle: "", // T??n button
      isDepartmentError : false,
      flag: true, // G???n c???
      errors: { //Danh s??ch c??c l???i
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
      isShowDialog: false, // L???a ch???n c?? show dialog kh??ng
      erorrDialog: "", // L???i c?? tr??n dialog
    };
  },
  methods: {
    //???n form chi ti???t nh??n vi??n
    //Author: NVQUY(15/12/2022)
    hiddenFormPopup() {
      this.$emit("closeForm");
    },
    //???n form chi ti???t v?? load l???i d??? li???u
    //Author: NVQUY(15/12/2022)
    hiddenAndLoad() {
      this.$emit("closeFormAndLoad");
    },
  //#region C??c h??m li??n quan ?????n c???t v?? th??m d??? li???u
    //Th??m m???i nh??n vi??n
    btnSaveOnclick() {
      try {
        //Validate d??? li???u
        let isValid = this.validateData();
        if (isValid) {
          //G???i api th???c hi???n c???t d??? li???u
          //N???u l?? th??m m???i nh??n vi??n
          //Author : NVQUY(18/12/2022)
          if (!this.valueIsEmpty(this.employeeId)) {
            this.$request
              .post(
                "https://amis.manhnv.net/api/v1/Employees",
                this.newEmployee
              )
              .then((res) => {
                //???n form th??m m???i
                // this.$emit("closeFormAndLoad");
                this.hiddenFormPopup();
                console.log(res);
              })
              .catch((error) => {
                //Hi???n th??? l???i l???y t??? serve
                this.isShowDialog = true;
                this.erorrDialog = error.response.data.userMsg;
              });
          }
          //N???u l?? s???a nh??n vi??n
          else {
            this.$request
              .put(
                `https://amis.manhnv.net/api/v1/Employees/${this.employeeId}`,
                this.newEmployee
              )
              .then(() => {
                //???n form th??m m???i v?? load l???i d??? li???u
                this.$emit("closeFormAndLoad");
              })
              .catch((error) => {
                //Hi???n th??? l???i l???y t??? serve
                this.isShowDialog = true;
                this.erorrDialog = error.response.data.userMsg;
                //N???u l???i m???c ?????nh t??? serve th?? g???n l???i l???i kh??c ch d??? hi???u
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
    //C???t v?? th??m
    saveAndAdd() {
      try {
        let isValid = this.validateData();
        if (isValid) {
          //G???i api th???c hi???n c???t d??? li???u
          //N???u l?? th??m m???i nh??n vi??n
          if (!this.valueIsEmpty(this.employeeId)) {
            this.$request
              .post(
                "https://amis.manhnv.net/api/v1/Employees",
                this.newEmployee
              )
              .then((res) => {
                // //Reset l???i data
                this.newEmployee = {};
                //G???i m?? m???i
                this.$request
                  .get(
                    "https://amis.manhnv.net/api/v1/Employees/NewEmployeeCode"
                  )
                  .then((res) => {
                    this.newEmployee.EmployeeCode = res.data;
                    //focus v??o ?? nh???p li???u ?????u ti??n
                    this.$nextTick(function () {
                      this.$refs.employeeCode.focus();
                    });
                    //checked v??o radio gi???i t??nh nam
                    this.isChecked = true;
                  });
                console.log(res);
              })
              .catch((error) => {
                //Hi???n th??? l???i l???y t??? serve
                this.isShowDialog = true;
                this.erorrDialog = error.response.data.userMsg;
              });
          }
          //N???u l?? s???a nh??n vi??n
          else {
            this.$request
              .put(
                `https://amis.manhnv.net/api/v1/Employees/${this.employeeId}`,
                this.newEmployee
              )
              .then((res) => {
                //???n form chi ti???t
                this.hiddenAndLoad();
                console.log(res);
              })
              .catch((error) => {
                this.isShowDialog = true;
                this.erorrDialog = error.response.data.userMsg;
                //N???u l???i m???c ?????nh t??? serve th?? g???n l???i l???i kh??c ch d??? hi???u
                if (
                  error.response.data.userMsg == this.errorMessage.errorByServe
                )
                  this.erorrDialog = this.errorMessage.employeeExited;
              });
          }
        }
      } catch (error) {
        //Hi???n th??? l???i l???y t??? serve
        this.isShowDialog = true;
        this.erorrDialog = error.response.data.userMsg;
      }
    },
    //L???y ra gi?? tr??? t??? combobox ph??ng ban
    getDepartmentValue(value){
        this.newEmployee.DepartmentId = value;
        this.isDepartmentError = false;
    },

  //#endregion
  //#region C??c h??m li??n quan ?????n Validate d??? li???u
      //Validate d??? li???u
    //Author: NVQUY(18/12/2022)
    validateData() {
      try {
        //Reset l???i l???i
        this.errors = {
          EmployeeCode: "",
          EmployeeName: "",
          DepartmentId: "",
          Email: "",
        };
        //N???u m?? nh??n vi??n ????? tr???ng
        if (!this.valueIsEmpty(this.newEmployee.EmployeeCode)) {
          this.errors.EmployeeCode = this.errorMessage.emptyEmployeeCode;
          this.flag = false;
        }
        //N???u t??n nh??n vi??n ????? tr???ng
        if (!this.valueIsEmpty(this.newEmployee.EmployeeName)) {
          this.errors.EmployeeName = this.errorMessage.emptyEmployeeName;
          this.flag = false;
        }
        //N???u th??ng tin ph??ng ban ????? tr???ng
        if (!this.valueIsEmpty(this.newEmployee.DepartmentId)) {
          this.isDepartmentError = true;
          this.errors.DepartmentId = this.errorMessage.emptyDepartmentName;
          this.flag = false;
        }
        //N???u email kh??ng ????ng ?????nh d???ng
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
    //H??m ki???m tra t???t c??? gi?? tr??? b???t bu???c nh???p
    valueIsEmpty(value) {
      if (value == "" || value == null || value == undefined) {
        return false;
      }
      return true;
    },
    //Ki??m tra ?????nh d???ng email
    //Author : NVQUy(18/12/2022)
    validateEmail(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    },

  //#endregion
    //????ng dialog
    onCloseDialog() {
      this.isShowDialog = false;
    },
    //TabOder
    tabOder() {
      this.$refs.employeeCode.focus();
    },
    //H??m fomat ng??y/th??ng/n??m khi Created
    //Author: NVQUY(15/12/2022)
    formatDate(date) {
      try {
        if (date) {
          //Chuy???n sang d??? li???u date
          date = new Date(date);
          // L???y ng??y
          let day = date.getDate();
          day = day < 10 ? `0${day}` : day;
          // L???y th??ng
          let month = date.getMonth() + 1;
          month = month < 10 ? `0${month}` : month;
          // L???y n??m
          let year = date.getFullYear();
          //Tr??? v??? ?????nh d???ng th???i gian
          return `${year}-${month}-${day}`;
        }
      } catch (error) {
        console.log(error);
      }
    }
  },

  created() {
    //L???y d??? li???u t??? server
    if (this.valueIsEmpty(this.employeeId)) {
      this.$request
        .get(`https://amis.manhnv.net/api/v1/Employees/${this.employeeId}`)
        .then((res) => {
          console.log(res);
          //Th???c hi???n g??n d??? li???u
          this.newEmployee = res.data;
          this.newEmployee.dateOfBirth = this.formatDate(res.data.DateOfBirth);
          this.newEmployee.identityDate = this.formatDate(res.data.IdentityDate
          );
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      //L???y m?? nh??n vi??n m???i
      this.$request
        .get("https://amis.manhnv.net/api/v1/Employees/NewEmployeeCode")
        .then((res) => {
          this.newEmployee.EmployeeCode = res.data;
          //focus v??o ?? nh???p li???u ?????u ti??n
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


