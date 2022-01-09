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
