
console.log('Adding functions merely results in code text being concatenated');

function foo() {
    return 5;
}

function bar(){
    return 10;
}

const added = foo+bar;

// while functions can be added together, you can't run their sum, as it's a String.
console.log(added)

console.log('Functions are invokable objects, but they are immutable');

const obj = function(){
    let propA = 'some value';
    return `>>${propA}<<`;
}

console.log(obj());
console.log(obj);
obj.propA = 'new value';
console.log(obj());
console.log(obj);

console.log('a non-anonymous function, is also immutable');

function objFoo(){
    let propA = 'some initial value'
    return `<<<${propA}>>>`
}
console.log(objFoo());
objFoo.propA = 'replacement value';
console.log(objFoo());

console.log('this means different thing depending on how a function is defined in an object, for anonymous functions, it points to the global execution context');
const something = {
    someProp: 'hello',
    foo: function(){
        // way to get reference to something object that can be used within below nested functions
        const self = this;

        function fooNamed(){
            this.someProp = 'hello 2';
        }
        fooNamed();
        console.log(someProp);
        const fooAnonymous = function(){
            this.someProp = 'hello 3';
        }
        fooAnonymous();
        console.log(someProp);

        console.log('now trying with self reference');

        function fooFixed(){
            self.someProp = "new value for the prop finally!";
        }
        console.log(someProp);
    }
}
something.foo();



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