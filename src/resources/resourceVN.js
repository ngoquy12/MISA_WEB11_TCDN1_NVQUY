const ErrorMessage = {
    emptyEmployeeCode: "Mã nhân viên không được để trống",
    invalidEmployeeCode: "Mã nhân viên không đúng định dạng",
    emptyEmployeeName: "Họ và tên không được để trống",
    emptyDepartmentName: "Đơn vị không được để trống",
    fieldIsrequies : "Trường này là bắt buộc",
    invalidEmail: "Email không đúng định dạng",
    employeeExited : "Mã nhân viên đã tồn tại trong hệ thống",
    errorByServe : "Có lỗi xảy ra vui lòng liên hệ Giảng viên để được hỗ trợ!"
}

const AlertMessage={
    addEmployeeSuccess: "Thêm nhân viên thành công",
    editEmployeeSuccess: "Sửa nhân viên thành công",
    deleteEmployeeSuccess:"Xóa nhân viên thành công",
    deleteWarning: "Bạn có thực sự muốn xóa Nhân viên <0> không?",
    deleteBatchWarning:"Bạn có thực sự muốn xóa những nhân viên đã chọn không?",
    changeDataQuestion:"Dữ liệu đã bị thay đổi. Bạn có muốn cất không?"
}

const Text={
    employee:"Nhân viên",
    addEmployee: "Thêm mới nhân viên",
    store:"Cất",
    storeAdd:"Cất và thêm",
    cancel:"Hủy",
    deny:"Không",
    confirm:"Có",
    close:"Đóng",
    prev:"Trước",
    next:"Sau",
    modify:"Sửa",
    duplicate:"Nhân bản",
    delete:"Xóa",
    stopUsing:"Ngưng sử dụng",
    addFormTitle:"Thêm khách hàng",
    modifyFormTitle:"Sửa khách hàng",
    refreshToolTip:"Tải lại dữ liệu",
    total:"Tổng số",
    record:"bản ghi",
    recordOnPage : " bản ghi trên 1 trang",
    searchPlaceHolder:"Tìm theo mã, tên nhân viên",
    isCustomer:"Là khách hàng",
    isProvider:"Là nhà cung cấp",
    helpToolTip:"Trợ giúp",
    escToolTip:"Đóng",
    male:"Nam",
    female:"Nữ",
    other:"Khác",
    success:"Thành công!"
}

const FieldName ={
    Code:"Mã",
    Name:"Tên",
    employeeCode:"Mã nhân viên ",
    employeeName:"Tên nhân viên ",
    gender:"Giới tính",
    dateOfBirth:"Ngày sinh",
    identityNumber:"Số CMND",
    identityNumberToolTip:"Số chứng minh nhân dân",
    identityDate:"Ngày cấp",
    identityPlace:"Nơi cấp",
    employeePosition:"Chức danh",
    department:"Đơn vị",
    departmentName:"Tên đơn vị",
    address:"Địa chỉ",
    telephoneNumber:"ĐT di động",
    telephoneNumberToolTip:"Điện thoại di động",
    phoneNumber:"ĐT cố định",
    phoneNumberToolTip:"Điện thoại cố định",
    email:"Email",
    bankAccountNumber:"Số tài khoản",
    bankName:"Tên ngân hàng",
    bankBranchName:"Chi nhánh TK ngân hàng",
    branch:"Chi nhánh",
    bankBranchNameToolTip:"Chi nhánh tài khoản ngân hàng",
    function : "Chức năng"
}

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

const resourceVN =  {
    ErrorMessage,
    AlertMessage,
    Text,
    FieldName,
    SideBarItem
}
export default resourceVN