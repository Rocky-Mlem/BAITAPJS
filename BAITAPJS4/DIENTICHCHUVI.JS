let btnDienTich = document.getElementById('btnDienTich');
btnDienTich.onclick = function () {
    // input 
    let input = parseFloat(document.getElementById('ipChieuDai').value);
    let input2 = parseFloat(document.getElementById('ipChieuRong').value);
    // xu ly 
    let output1 = "Diện Tích là :" + (input * input2);
    let output2 = "Chu vi là :" + ((input + input2) * 2);
    // output 
    let dienTich = document.getElementById('sDT')
    dienTich.innerHTML = output1
    let chuVi = document.getElementById('sCV')
    chuVi.innerHTML = output2
}