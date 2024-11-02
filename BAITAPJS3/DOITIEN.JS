let btnDoi = document.getElementById('btnDoi');
btnDoi.onclick = function () {
    //  input 
    let tyGiaInput = document.getElementById('tyGia');
    tyGiaInput.value = "";
    tyGiaInput.placeholder = "23.500 VND";

    let soTienDoi = parseFloat(document.getElementById('soTienDoi').value);
    // xử lý 
    let output = "Số Tiền Của Bạn Là :" + (23500 * soTienDoi).toLocaleString() + " VND";
    // output
    let hienThi = document.getElementById('hienThi');
    hienThi.innerHTML = output;
    console.log(output)
    hienThi.classList = 'styleNe2'
};
