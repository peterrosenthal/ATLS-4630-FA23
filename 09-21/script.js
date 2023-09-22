try {
  throw new Error('this is an error!');
} catch (e) {
  console.error(e);
}

function sayHello() {
  console.log('hello world!');
}

setTimeout(sayHello, 2000);

console.log('goodbye world!');

async function sayHelloAsyncronously() {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  return 'hello world async!';
}

async function logSomethingToConsole(something) {
  console.log(something);
  return something + ' is something!';
}

sayHelloAsyncronously()
  .then(logSomethingToConsole)
  .then((value) => console.log(value));

function add(x, y) {
  return x + y;
}

const a = add(3, 4);

async function addAsync(x, y) {
  return x + y;
}

let b;
addAsync(3, 4)
  .then((value) => { b = value });

async function awaitAddAsync() {
  const c = await addAsync(3, 4);
  console.log(c);
}

awaitAddAsync();

function sayHelloRepeat() {
  console.log('hello world repeat!');
}

const intervalId = setInterval(sayHelloRepeat, 1000 / 30);

window.addEventListener('click', () => {
  clearInterval(intervalId);
});

function sayHelloAnimationFrame() {
  console.log('hello world animation frame!');
  
  // last line of the function
  requestAnimationFrame(sayHelloAnimationFrame);
}

// requestAnimationFrame(sayHelloAnimationFrame);
sayHelloAnimationFrame();
