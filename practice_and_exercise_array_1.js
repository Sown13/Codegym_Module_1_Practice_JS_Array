let arrEx1 = [];

function initArr() {
    let i;
    arrEx1.length = parseInt(prompt("Nhập độ dài của mảng", 10));
    for (i = 0; i < arrEx1.length; i++) {
        arrEx1[i] = parseInt(prompt(`Nhập phần tử có index là ${i} vào `))
    }
    document.getElementById("displayArr").innerHTML = `arrEx1 = [${arrEx1}]`
}

document.getElementById('btnInit').addEventListener("click", initArr);


function intThan10() {
    let count = 0;
    for (let i = 0; i < arrEx1.length; i++) {
        if (arrEx1[i] >= 10) {
            count++
        }
    }
    alert(`có ${count} số nguyên >=10 trong mảng của bạn `)
}

document.getElementById('btnItn10').addEventListener("click", intThan10);

function findMax() {
    let max = arrEx1[0];
    let i, index;
    for (i = 0; i < arrEx1.length; i++) {
        if (max < arrEx1[i]) {
            max = arrEx1[i];
            index = i;
        }
        console.log(i)
    }
    alert(`Phần tử lớn nhất trong mảng của bạn là ${max} tại vị trí index = ${index}`)
}

document.getElementById('btnMax').addEventListener("click", findMax);

function averageCal() {
    let i, average, total;
    total = 0;
    for (i = 0; i < arrEx1.length; i++) {
        total += arrEx1[i];
    }
    average = total / i;
    console.log(average);
    alert(`Giá trị trung bình các phần tử trong mảng của bạn là ${average} `)
}

document.getElementById("btnAverage").addEventListener("click", averageCal);

function reverseArr() {
    alert(`Mảng của bạn đã đảo ngược thành arrEx1= ${arrEx1.reverse()}`);
    document.getElementById("displayArr").innerHTML = `arrEx1 = [${arrEx1}]`;
}

document.getElementById("btnReverse").addEventListener("click", reverseArr);

// function checkV(){
//     let V;
//     V = prompt("Nhập 1 số nguyên");
//
// }
// How many ueoai in this string?
let senctence = prompt("nhập bất kỳ câu tiếng anh vào đây");
    // "nguYen HaI Son"
    //
let arrString;

function makeString() {
    arrString = senctence.toLowerCase().split("");
    document.getElementById("displayArrString").innerHTML = arrString
}

function countUeoai() {
    let ueoai = ["u", "e", "o", "a", "i"];
    let count = 0;
    for (let k = 0; k < ueoai.length; k++) {
        for (let j = 0; j < arrString.length; j++) {
            if (ueoai[k] === arrString[j]) {
                count++;
            }
        }
    }
    alert(count);
}

function splitUsing() {
    arrName = prompt("nhập 1 chuỗi từ");
    newVar = arrName.split("");
    alert(newVar);
    console.log(newVar)
}

