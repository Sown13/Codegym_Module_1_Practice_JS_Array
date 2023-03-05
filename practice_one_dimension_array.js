let family = ['son', 'father', 'mother']
family[0] = 'daughter';
document.getElementById("testLet").innerHTML = family.toString();

const school = ['student', 'teacher', 'president']
school[0] = 'changed or not';
school[3] = 'one more';
document.getElementById('testConst').innerHTML = school.toString();

let i = 0;
let simpleArray = [];

function addElmt() {
    simpleArray[i] = document.getElementById('inputElement').value;
    alert('Element' + ' ' + simpleArray[i] + ' ' + 'added to the simpleArray');
    i++;
    document.getElementById('inputElement').value = '';
}

function displayNewElmt() {
    let e = "";
    for (i = 0; i < simpleArray.length; i++) {
        e = e + "element " + i + " is: " + simpleArray[i] + "<br>";
        document.getElementById("display").innerHTML = e;
    }
}

document.getElementById('buttonADD').addEventListener('click', addElmt);
document.getElementById('buttonDisplay').addEventListener('click', displayNewElmt);

let readyForReversed = [10, 20, 30, 40, 50, 60, 70, 80, 90];

function reverseStyle1() {
    document.getElementById('displayReverse1').innerHTML = readyForReversed.reverse().toString();
    // console.log(readyForReversed.reverse())
}

function reverseStyle2() {
    let first = 0;
    let last = readyForReversed.length - 1;
    while (first < last) {
        let newArrayElement = readyForReversed[first];
        readyForReversed[first] = readyForReversed[last];
        readyForReversed[last] = newArrayElement;
        first++;
        last--;
    }
    document.getElementById('displayReverse2').innerHTML = readyForReversed.toString();
}

document.getElementById('buttonReverseStyle1').addEventListener('click', reverseStyle1);
document.getElementById('buttonReverseStyle2').addEventListener('click', reverseStyle2);

function checkArray() {
    let numToCheck = parseInt(prompt('Input your number'));
    let numbers = [1, 10, 13, 15, 36, 50, 61, 75, 80, 100];
    for (i = 0; i < numbers.length; i++) {
        if (numToCheck === numbers[i]) {
            alert("Bingo!!!!")
        }
    }
}

function findMax(){
    let numbers = [-100, 10, 13, 15, 36,240, 61, 175, 80, 100];
    let maxNum = 1;
    let index = 0;
    for (i = 0; i < numbers.length; i++) {
        if (maxNum < numbers[i]){
            maxNum = numbers[i];
            index = i;
        }
    } alert ("số lớn nhất là " + maxNum + " tại index = " + index)
}
