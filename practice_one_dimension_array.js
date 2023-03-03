let family = ['son','father','mother']
family[0] = 'daughter';
document.getElementById("testLet").innerHTML= family;

const school = ['student','teacher','president']
school[0] = 'changed or not';
school[3] = 'one more';
document.getElementById('testConst').innerHTML = school;

let i = 0;
let simpleArray = [];
function addElmt(){
    simpleArray[i] = document.getElementById('inputElement').value;
    alert('Element'+' '+ simpleArray[i] + ' ' + 'added to the simpleArray');
    i++;
    document.getElementById('inputElement').value = '';
}

function displayNewElmt(){
    let e = "";
    for (i=0;i<simpleArray.length;i++){
       e = e+"element "+ i + " is: "+ simpleArray[i] + "<br>";
       document.getElementById("display").innerHTML=e;
    }
}

document.getElementById('buttonADD').addEventListener('click',addElmt);
document.getElementById('buttonDisplay').addEventListener('click',displayNewElmt);
