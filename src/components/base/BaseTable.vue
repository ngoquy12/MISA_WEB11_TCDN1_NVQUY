<template lang="">
    <div>
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
                  <td class="m-td">{{ employee.EmployeeCode }}</td>
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
    </div>
</template>
<script>
export default {
    name : "BaseTable",
    
};
</script>
<style lang="">
</style>