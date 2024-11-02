let btnTinh = document.getElementById('btnTinh')
btnTinh.onclick = function () {
    // input 
    let input1 = parseFloat(document.getElementById("tb1").value);
    let input2 = parseFloat(document.getElementById("tb2").value);
    let input3 = parseFloat(document.getElementById("tb3").value);
    let input4 = parseFloat(document.getElementById("tb4").value);
    let input5 = parseFloat(document.getElementById("tb5").value);
    // xu ly 
    let output = "Giá trị trung bình là: " + ((input1 + input2 + input3 + input4 + input5) / 5);
    // output
    let hienThi = document.getElementById('hienThi')
    hienThi.innerHTML = output
    console.log(output)
    hienThi.classList = 'stylene';

}