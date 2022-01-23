export default function objectCreationSample() {
    function Person(name) {
        this.name = name;
    }

    const person = new Person('name1');
    console.log(person);

    /*
    Note: for performance reasons, adding the function
    to the prototype is more favorable than adding it 
    in the constructor function, as with the prototype
    (which is not a prototype of the function object btw)
    we only hold one copy of the function in memory, 
    while if it was defined in the constructor function
    there would be as many, as there are Person instances.
    */
    Person.prototype.greet = function () {
        console.log(`hello ${this.name}!`);
    }

    person.greet();

    /*
    Probably not a best practice, but should produce a similar effect.
    Not entirely the same though.
    */
    const person2 = {}
    Person.call(person2, 'name2');

    console.log(person2);
};