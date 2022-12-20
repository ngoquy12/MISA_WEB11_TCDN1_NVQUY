
const common = {
    /**
     * Hàm fomat ngày/tháng/năm
     * @param {date} Ngày/tháng/năm 
     * @returns Định dạng ngày/tháng/năm
     * Author: NVQUY(15/12/2022)
     */
    fomatDate(date) {
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
                return date = `${day}/${month}/${year}`;
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default common;