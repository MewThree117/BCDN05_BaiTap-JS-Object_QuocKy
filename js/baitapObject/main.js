//Global
var dsnv = new DanhSachNhanVien();
getLocalstorage();


//Hàm rút gọn
function getELE(id) {
    return document.getElementById(id);
}

//account,hoTen,email,pass,ngay,luongCoBan,chucVu,gioLam
function themNhanVien() {
    var account = getELE("tknv").value;
    var hoTen = getELE("name").value;
    var email = getELE("email").value;
    var pass = getELE("password").value;
    var ngay = getELE("datepicker").value;
    var luongCoBan = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;

    //Tạo thể hiện
    var nv = new NhanVien(account,hoTen,email,pass,ngay,Number(luongCoBan),chucVu,Number(gioLam));
    nv.tongLuong();
    nv.xepLoai();
    // console.log(nv);
    dsnv.them(nv);
    // console.log(dsnv.mangNV);
    hienThiTable(dsnv.mangNV);
    setLocalstorage(dsnv.mangNV);
}

document.getElementById("btnThemNV").onclick = themNhanVien;
document.getElementById("btnCapNhat").onclick = capNhatNV;
document.getElementById("btnReset").onclick = resetForm;

function hienThiTable(mang) {
    var content = "";
    mang.map(function(nv,index){
        var tr = `<tr>
            <td>${nv.taiKhoanNV}</td>
            <td>${nv.hoTenNV}</td>
            <td>${nv.emailNV}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVuNV}</td>
            <td>${nv.tongLuongNV}</td>
            <td>${nv.xepLoaiNV}</td>
            <td>
                <button class="btn btn-danger" onclick="xoaNV('${nv.taiKhoanNV}')">Xóa</button>
                <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="xemNV('${nv.taiKhoanNV}')">Xem</button>
            </td>
        </tr>`;
        content += tr;
    });
    getELE("tableDanhSach").innerHTML = content;
}

function setLocalstorage(mang) {
    localStorage.setItem("DSNV",JSON.stringify(mang));
}

function getLocalstorage() {
    if(localStorage.getItem("DSNV") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienThiTable(dsnv.mangNV);
    }
}

function xoaNV(id) {
    dsnv.xoa(id);
    setLocalstorage(dsnv.mangNV);
    hienThiTable(dsnv.mangNV);
}

function xemNV(id) {
    var viTri = dsnv.timViTri(id);
    if(viTri != -1) {
        var nv = dsnv.mangNV[viTri];
        getELE("tknv").value = nv.taiKhoanNV;
        getELE("tknv").disabled = true;
        getELE("name").value = nv.hoTenNV;
        getELE("email").value = nv.emailNV;
        getELE("password").value = nv.matKhau;
        getELE("datepicker").value = nv.ngayLam;
        getELE("luongCB").value = nv.luongCoBanNV;
        getELE("chucvu").value = nv.chucVuNV;
        getELE("gioLam").value = nv.gioLamTrongThang;
    } else {
        console.log("Không tìm thấy nhân viên cần xem");
    }
}

function capNhatNV() {
    var account = getELE("tknv").value;
    var hoTen = getELE("name").value;
    var email = getELE("email").value;
    var pass = getELE("password").value;
    var ngay = getELE("datepicker").value;
    var luongCoBan = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;
    //Tạo thể hiện
    var nv = new NhanVien(account,hoTen,email,pass,ngay,Number(luongCoBan),chucVu,Number(gioLam));
    nv.tongLuong();
    nv.xepLoai();
    // console.log(nv);
    dsnv.capNhat(nv);
    setLocalstorage(dsnv.mangNV);
    hienThiTable(dsnv.mangNV);
}

function resetForm() {
    getELE("formLogIn").reset();
    getELE("tknv").disabled = false;
}