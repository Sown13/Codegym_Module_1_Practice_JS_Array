let arrMain = [];

function initDimensionArr() {
    arrMain.length = parseInt(prompt("Nhập độ dài mảng chính"));
    for (let i = 0; i < arrMain.length; i++) {
        arrMain[i] = [];
        document.write(`<br> row ${i} <br>`)
        arrMain[i].length = parseInt(prompt(`Nhập độ dài mảng arrMain[${i}]`));
        for (let  j =0; j < arrMain[i].length; j++) {
            arrMain[i][j] = parseInt(prompt(`Nhập phần tử thứ ${j} của mảng arrMain[${i}]`))
        document.write(arrMain[i][j] + "<br>")
        }
    } console.log(arrMain)
}

// nhập độ dài mảng
// let arrTest = [];
// arrTest.length = prompt("nhập độ dài mảng vào đây");
// for (let i=0;i<arrTest.length;i++){
//     arrTest[i] = prompt(`Nhập vào giá trị phần tử thứ ${i} của mảng`)
// } console.log(arrTest)
a= 1
alert("đây là một cái thông báo giá trị là" + a + " rất là phiền");
alert(`đây là một cái thông báo giá trị là ${a} rất là phiền`)