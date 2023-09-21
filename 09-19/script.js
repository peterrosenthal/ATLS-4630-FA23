const peter = {
  name: 'Peter',
  hairColor: 'orange'
};

const jack = {
  name: 'Jack',
  hairColor: 'brown'
}

function sayHello(person) {
  console.log(`Hello! My name is ${person.name}, and my hair color is ${person.hairColor}.`);
}

sayHello(peter);
sayHello(jack);

class Person {
  constructor(name, hairColor) {
    this.name = name
    this.hairColor = hairColor
  }

  sayHello() {
    console.log(`Hello! My name is ${this.name}, and my hair color is ${this.hairColor}`);
  }
}

const peterPerson = new Person('Peter', 'orange');
peterPerson.sayHello();

const jackPerson = new Person('Jack', 'brown');
jackPerson.sayHello();

console.log(peterPerson.name);
peterPerson.name = 'Peterr';
peterPerson.sayHello();
