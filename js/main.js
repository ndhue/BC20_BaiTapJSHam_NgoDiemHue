/**
 * B1: tạo 3 hàm tính tổng tongSoDiem(a,b,c), điểm khu vực diemKhuVuc(a), điểm đối tượng diemDoiTuong(a) điều kiện như đề yêu cầu
 * B2: tạo hàm tuyenSinh() đặt các biến bằng giá trị do user nhập vào
 *     tạo biến total = tongSoDiem + diemKhuVuc + diemDoiTuong
 *     so sánh total với diemChuan: 
 *              total > diemChuan: đậu.
 *              total < diemChuan: rớt.
 *      gán kết quả đậu rớt và điểm để in ra màn hình
 * B3: gọi hàm qua onclick từ button
 */
function tongSoDiem(a,b,c){
    return a+b+c;
}
function diemKhuVuc(a){
    if (a=='A') return 2;
    else if(a=='B') return 1;
    else if(a=='C') return 0.5;
    else if(a=='X') return 0;
}
function diemDoiTuong(a){
    if(a=='1') return 2.5;
    else if(a=='2') return 1.5;
    else if(a=='3') return 1;
    else if(a=='0') return 0;
}
function tuyenSinh(){
    var m1 = Number(document.getElementById('so1').value);
    var m2 = Number(document.getElementById('so2').value);
    var m3 = Number(document.getElementById('so3').value);
    var kv = document.getElementById('khuVuc').value;
    var dt = Number(document.getElementById('doiTuong').value);
    var diemChuan = Number(document.getElementById('diemChuan').value);
    var total = tongSoDiem(m1,m2,m3)+diemKhuVuc(kv)+diemDoiTuong(dt);
    if(diemChuan < total)
        document.getElementById('ketqua1').innerHTML = "Bạn đã đậu. Tổng điểm: "+total;
    else
        document.getElementById('ketqua1').innerHTML = "Bạn đã rớt. Tổng điểm: "+total;
}
document.getElementById('btn1').onclick = tuyenSinh;

/**
 * B1: đặt tên biến
 *      name = họ tên
 *      soKW = số kW
 *      total = 0 : tổng tiền
 * B2: tiến hành so sánh
 *      nếu sokW <=50: total = soKW*500;
 *      nếu 50< sokW <=100: total = total = 50*500 + (soKW-50)*650
 *      nếu 100< sokW <=200: total = 50*500 + 50*650 + (soKW-100)*850
 *      nếu 200< sokQ <=350: total = 50*500 + 50*650 + 100*850 + (soKW-200)*1100
 *      còn lại: total = 50*500 + 50*650 + 100*850 + 150*1100 + (soKW-350)*1300
 *  gán giá trị total để in ra kết quả
 * B3: gọi hàm
 */
function tinhTienDien(){
    var name = document.getElementById('name').value;
    var soKW = Number(document.getElementById('soKW').value);
    var total = 0;
    if(soKW <= 50)
        total = soKW*500;
    else if(soKW <= 100)
        total = 50*500 + (soKW-50)*650;
    else if(soKW <= 200)
        total = 50*500 + 50*650 + (soKW-100)*850;
    else if(soKW <= 350)
        total = 50*500 + 50*650 + 100*850 + (soKW-200)*1100;
    else
        total = 50*500 + 50*650 + 100*850 + 150*1100 + (soKW-350)*1300;
    document.getElementById('ketqua2').innerHTML = "Họ tên: " + name +"; Tiền điện: " + new Intl.NumberFormat('vn-VN').format(total);
}
document.getElementById('btn2').onclick = tinhTienDien;

/**
 * B1: đặt tên biến
 *      name = họ tên
 *      sal = lương một năm
 *      num = số người
 *      total = sal - 4e+6 - num*1.6e+6: thu nhập chưa chịu thuế
 * B2: viết hàm thuNhapChiuThue(a) với a là thu nhập chưa chịu thuế
 *      gán giá trị thuNhapChiuThue(total) vào thẻ p
 * B3: gọi hàm
 */
function thuNhapChiuThue(a){
    if (a<=60e+6)  return a*0.05;
    else if(a<=120e+6) return a*0.1;
    else if(a<=210e+6) return a*0.15;
    else if(a<=384e+6) return a*0.2;
    else if(a<=624e+6) return a*0.25;
    else if(a<=960e+6) return a*0.3;
    else    return a*0.35;
}
function tinhThue(){
    var name = document.getElementById('name2').value;
    var sal = Number(document.getElementById('salary').value);
    var num = Number(document.getElementById('num').value);
    var total = 0;
    total = sal - 4e+6 - num*1.6e+6;
    console.log(total);
    document.getElementById('ketqua3').innerHTML = "Họ tên: " + name +"; Tiền thuế thu nhập cá nhân: " + new Intl.NumberFormat('vn-VN').format(thuNhapChiuThue(total));
}
document.getElementById('btn3').onclick = tinhThue;

/**
 * B1: đặt tên biến
 *      tenKH = tên khách hàng
 *      maKH = mã khách hàng
 *      kenhCaoCap = số kênh cao cấp
 *      soKetNoi = số kết nối
 * B2: 
 *      tạo hàm active() để khi tenKH=="Doanh nghiệp" thì soKetNoi hiện lên
 *      tạo hàm phiDV(a) tính phí dịch vụ truyền kenhCaoCap vào
 *      trong hàm tinhTienCap() so sánh
 *          nếu tenKH=="Nhà dân": total = 4.5 + 20.5 + 7.5*kenhCaoCap
 *          nếu tenKH=="Doanh nghiệp": total = 15 + phiDV(soKetNoi) + 50*kenhCaoCap
 *      gán giá trị total để in ra kết quả
 * B3: gọi hàm
 */
function active(){
    var a = document.getElementById('khachHang').value;
    if(a=="Doanh nghiệp")
        document.getElementById("soKetNoi").style.display="";
    else if(a=="Nhà dân")
        document.getElementById("soKetNoi").style.display="none";
}
function phiDV(a){
    if (a<=10)  return 75;
    else    return 75 + 5*(a-10);

}
function tinhTienCap(){
    var tenKH = document.getElementById('khachHang').value;
    var maKH = document.getElementById('maKH').value;
    var kenhCaoCap = Number(document.getElementById('kenhCaoCap').value);
    var soKetNoi = Number(document.getElementById('soKetNoi').value);
    var total = 0;
    if(tenKH=="Nhà dân")
        total = 4.5 + 20.5 + 7.5*kenhCaoCap;
    if(tenKH=="Doanh nghiệp")
        total = 15 + phiDV(soKetNoi) + 50*kenhCaoCap;
    document.getElementById('ketqua4').innerHTML = "Mã khách hàng: " + maKH +"; Tiền cáp: $" + new Intl.NumberFormat('en-US').format(total);
}
document.getElementById('btn4').onclick = tinhTienCap;