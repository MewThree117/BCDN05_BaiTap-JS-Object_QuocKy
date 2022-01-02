/**
 * Thông tin đầy đủ của 1 nhân viên
 */

function NhanVien(account,hoTen,email,pass,ngay,luongCoBan,chucVu,gioLam) {
    //thuộc tính
    this.taiKhoanNV = account;
    this.hoTenNV = hoTen;
    this.emailNV = email;
    this.matKhau = pass;
    this.ngayLam = ngay;
    this.luongCoBanNV = luongCoBan;
    this.chucVuNV = chucVu;
    this.gioLamTrongThang = gioLam;
    this.tongLuongNV = 0;
    this.xepLoaiNV = "";

    //phương thức
    this.tongLuong = function() {
        if(this.chucVuNV == "Sếp") {
            this.tongLuongNV = this.luongCoBanNV*3;
        } else if(this.chucVuNV == "Trưởng phòng") {
            this.tongLuongNV = this.luongCoBanNV*2;
        } else {
            this.tongLuongNV = this.luongCoBanNV;
        }
    }

    this.xepLoai = function() {
        if(this.gioLamTrongThang >= 0 && this.gioLamTrongThang < 160 ) {
            this.xepLoaiNV = "Nhân viên Trung Bình";
        } else if(this.gioLamTrongThang >= 160 && this.gioLamTrongThang < 176 ) {
            this.xepLoaiNV = "Nhân viên Khá";
        } else if(this.gioLamTrongThang >= 176 && this.gioLamTrongThang < 192) {
            this.xepLoaiNV = "Nhân viên Giỏi";
        } else {
            this.xepLoaiNV = "Nhân viên Xuất Sắc";
        }
    }
}