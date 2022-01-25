export default function thisInObjects() {
    // setup, a prop in the outer execution context 
    // (that of the sample function)
    const someProp = 'outer execution context\'s prop value';

    // correct
    const obj = {
        someProp: 'correctValue',
        foo: function () {
            console.log(`The way I see someProp: ${this.someProp}`)
        }
    }

    // incorrect
    const objWithMistake = {
        someProp: 'correctValue',
        foo: function () {
            console.log(`The way I see someProp: ${someProp}`)
        }
    }

    obj.foo();
    objWithMistake.foo();

}