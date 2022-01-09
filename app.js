const samplesList = document.getElementById("samplesList")

function a() {
    function b() {
        console.log(this.myVar);
    }
    var myVar = 2;
    b();
}

var myVar = 1;
a();

document.addEventListener('click', (() => console.log('click happened!')));

const b = 3 + '3'
console.log(b)

console.log(`NaN !== NaN but Object.is(NaN, NaN) is true: ${NaN === NaN}, ${Object.is(NaN, NaN)}`)

console.log('-------------------');

const result = 1;
function checkLatter() {
    console.log('did a latter check');
    return 0
}
if (result || result === checkLatter()) {
    console.log('yupi!');
}