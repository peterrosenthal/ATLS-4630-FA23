let helloWorld = '"hello world!"';
console.log(helloWorld);
helloWorld = "wello horld!";
console.log(helloWorld);

const x = 10;
let y = 13;
console.log(`x + y = ${x + y}`);
y = x + y;
console.log(`y = ${y}`);
console.log(`x + y = ${x + y}`);

const animals = ['dog', 'cat', 'cow'];
console.log(animals[1]);
animals.push('goat');
console.log(animals);
console.log(animals.length);

const classroom = {
  building: "ATLAS",
  room: 104
};
console.log(classroom);
classroom.room += 1;
console.log(classroom.room);
classroom.lighting = 'not so great';
console.log(classroom);
console.log(classroom["building"]);

if (y < 30) {
  console.log(y);
}
// y += x;
if (y < 30) {
  console.log(y);
} else {
  console.log('y is too big!');
}

while (y < 50) {
  console.log(y);
  y++;
}

for (let i = 0; i < 50; i++) {
  console.log(i);
}

for (let i = 0; i < animals.length; i++) {
  const animal = animals[i];
  console.log(animal);
}

for (const animal of animals) {
  console.log(animal);
}

for (const key in classroom) {
  console.log(`${key}: ${classroom[key]}`);
}

animals.forEach(function(animal) {
  console.log(animal);
});

function printHello() {
  console.log('hello!');
}

printHello();

function printMessage(message) {
  console.log(message);
}

printMessage(helloWorld);
printMessage();

animals.forEach(animal => console.log(animal));

const printHelloMessage = (message) => {
  console.log(message);
}

(() => {
  console.log("I'm inside an anonymous function!");
})();
