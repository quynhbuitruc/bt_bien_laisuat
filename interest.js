function tinhlai() {
    let tien = Number(document.getElementById("tienVay").value)
    let lSuat = Number(document.getElementById("Laisuat").value)
    let nam = Number(document.getElementById("thoiHan").value)
    let tinhtien = tien * (lSuat / 100) * nam;
    document.getElementById("hienthi").innerHTML = tinhtien;
}