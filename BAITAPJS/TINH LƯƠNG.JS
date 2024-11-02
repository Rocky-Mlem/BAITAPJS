let btnTinh = document.getElementById('btnTinh');
btnTinh.onclick = function () {
    // input 
    let input1 = document.getElementById('luongMotNgay').value;
    let input2 = parseFloat(document.getElementById('soNgay').value);

    // xử lý
    let output = "Tiền lương của bác là : " + (input1 * input2).toLocaleString() + " VND";

    // output

    let tongLuong = document.getElementById('tongLuong');
    tongLuong.innerHTML = output;
    console.log(output)
    tongLuong.classList = 'stylene';
};
