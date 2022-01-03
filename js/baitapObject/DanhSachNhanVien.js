/**
 * Chứa danh sách các đối tượng nv
 * Chứa các thao tác liên quan về mảng
 * -thêm
 * -xóa
 * -sửa
 * -tìm kiếm 
 */

function DanhSachNhanVien() {
    //thuộc tính mảng nhân viên
    this.mangNV = [];

    //phương thức để thêm nhiều nhân viên vào mảng
    this.them = function(nv) {
        this.mangNV.push(nv);
    }

    this.timViTri = function(id) {
        var viTri = -1;
        this.mangNV.map(function(nv,index){
            if(nv.taiKhoanNV === id) {
                viTri = index;
            }
        });
        return viTri;
    }

    this.xoa = function(id) {
        var viTri = this.timViTri(id);
        if(viTri != -1) {
            this.mangNV.splice(viTri,1);
        } else {
            console.log("Không tìm thấy nhân viên cần xóa");
        }
    }

    this.capNhat = function(nv) {
        var viTri = this.timViTri(nv.taiKhoanNV);
        if(viTri != -1) {
            //tìm thấy nhân viên
            this.mangNV[viTri] = nv;
        } else {
            console.log("Không tìm thấy nhân viên để cập nhật");
        }
    }
}

// Prototype dùng để thêm phương thức và thuộc tính cho lớp đối tượng mà không cần sửa trực tiếp
DanhSachNhanVien.prototype.searchName = function(keyword) {
    var mangTK = [];
    var keywordLower = keyword.toLowerCase();
    this.mangNV.map(function(nv) {
        var nameLower = nv.xepLoaiNV.toLowerCase();
        //kiểm tra từ khóa có tồn tại không
        var indexName = nameLower.indexOf(keywordLower);
        if(indexName > -1) {
            //Có chứa từ khóa
            mangTK.push(nv);
        }
    });
    return mangTK;
}