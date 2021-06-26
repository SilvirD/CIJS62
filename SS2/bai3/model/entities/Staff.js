class Staff {
  constructor(maNV, hoTen, ngaySinh, queQuan, gioiTinh) {
    this.maNV = maNV;
    this.hoTen = hoTen;
    this.ngaySinh = ngaySinh;
    this.queQuan = queQuan;
    this.gioiTinh = gioiTinh;
  }

  //get set...
  get getMaNV() {
    return this.maNV;
  }

  set setMaNV(newMaNV) {
    this.maNV = newMaNV;
  }
}

export default Staff;
