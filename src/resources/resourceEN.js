/**
 * Nội dung validate dữ liệu
 * Author : NVQUY(21/12/2022)
 */
const ErrorMessage = {
    emptyEmployeeCode: "Mã nhân viên không được để trống",
    invalidEmployeeCode: "Mã nhân viên không đúng định dạng",
    emptyEmployeeName: "Họ và tên không được để trống",
    emptyDepartmentName: "Đơn vị không được để trống",
    invalidEmail: "Email không đúng định dạng"
}
/**
 * Nội dung hiển thị trên dialog
 * Author : NVQUY(21/12/2022)
 */
const AlertMessage={
    addEmployeeSuccess: "Thêm nhân viên thành công",
    editEmployeeSuccess: "Sửa nhân viên thành công",
    deleteEmployeeSuccess:"Xóa nhân viên thành công",
    deleteWarning: "Bạn có thực sự muốn xóa Nhân viên <0> không?",
    deleteBatchWarning:"Bạn có thực sự muốn xóa những nhân viên đã chọn không?",
    changeDataQuestion:"Dữ liệu đã bị thay đổi. Bạn có muốn cất không?"
}
/**
 * Nội dung của các text trên ứng dụng
 * Author : NVQUY(21/12/2022)
 */

const Text={
    employee:"Employee",
    addEmployee: "Thêm mới nhân viên",
    store:"Store",
    storeAdd:"Store and add",
    cancel:"Cancel",
    deny:"No",
    confirm:"Yes",
    close:"Close",
    prev:"Preview",
    next:"Next",
    modify:"Sửa",
    duplicate:"Replication",
    delete:"Delete",
    stopUsing:"Ngưng sử dụng",
    addFormTitle:"More employee",
    modifyFormTitle:"Edit employee",
    refreshToolTip:"Tải lại dữ liệu",
    pageSize:" bản ghi trên 1 trang",
    total:"Total",
    record:"Record",
    searchPlaceHolder:"Tìm theo mã, tên nhân viên",
    isCustomer:"Là khách hàng",
    isProvider:"Là nhà cung cấp",
    helpToolTip:"Trợ giúp",
    escToolTip:"Close",
    male:"Male",
    female:"Female",
    other:"Other",
    success:"Success!"
}
/**
 * Nội dung các trường trên popup
 * Author : NVQUY(21/12/2022)
 */
const FieldName ={
    employeeCode:"Code",
    employeeName:"Name",
    gender:"Gender",
    dateOfBirth:"Date of birth",
    identityNumber:"Identity",
    identityNumberToolTip:"Số chứng minh nhân dân",
    identityDate:"Ngày cấp",
    identityPlace:"Nơi cấp",
    employeePosition:"Positon",
    departmentName:"Department",
    address:"Address",
    telephoneNumber:"ĐT di động",
    telephoneNumberToolTip:"Điện thoại di động",
    phoneNumber:"ĐT cố định",
    phoneNumberToolTip:"Điện thoại cố định",
    email:"Email",
    bankAccountNumber:"Số tài khoản",
    bankName:"Tên ngân hàng",
    bankBranchName:"Chi nhánh TK ngân hàng",
    bankBranchNameToolTip:"Chi nhánh tài khoản ngân hàng"
}
/**
 * Nội dung trên sidebar
 * Author : NVQUY(21/12/2022)
 */
const SideBarItem = {
    dashboard:"Tổng quan",
    cash:"Tiền mặt",
    bank:"Tiền gửi",
    buy:"Mua hàng",
    sale:"Bán hàng",
    invoice:"Quản lý hóa đơn",
    stock:"Kho",
    tools:"Công cụ dụng cụ",
    fixedAssets:"Tài sản cố định",
    tax:"Thuế",
    price:"Giá thành",
    general:"Tổng hợp",
    budget:"Ngân sách",
    report:"Báo cáo",
    finance:"Phân tích tài chính"
}
/**
 * Đối tượng chưa danh sách các resource
 * Author : NVQUY(21/12/2022)
 */
const resourceVN =  {
    ErrorMessage,
    AlertMessage,
    Text,
    FieldName,
    SideBarItem
}
/**
 * Export dữ liệu ra bên ngoài
 * Author : NVQUY(21/12/2022)
 */
export default resourceVN