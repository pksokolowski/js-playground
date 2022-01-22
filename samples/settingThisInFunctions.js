export default function () {
    const obj = {
        propA: 'abc'
    };

    function foo(propB) {
        console.log(this.propA + propB);
    }

    /*
    call() allows us to... call a function while also setting 
    its "this" value as first param, then next params are the 
    params of the function
    */
    foo.call(obj, 'cde');

    /*
    Similarly, one might use .apply, which does a very similar
    thing, yet it takes an array of arguments rather than 
    vararg of them
    */
    foo.apply(obj, ['edc']);

    /*
    finally, one can obtain a copy of a function so to speak
    which would have the "this" set to a particular object
    */
    const bar = foo.bind(obj);
    bar('def');
};