let myExampleVariable = "Hello World!";
console.log(myExampleVariable);

const myParagraph = document.querySelector('.hello');
const myButton = document.getElementById('my-button') as HTMLButtonElement;

myButton.disabled = true;

myButton.addEventListener('click', (event) => {
  console.log(event.target);
  console.log(event.clientX);
  console.log(event.clientY);
});

window.addEventListener('keydown', (event) => {
  console.log(event.code);
});

function myClickEventFunction(event: MouseEvent) {
  console.log(event.clientX);
  myButton.disabled = false;
}
window.addEventListener('click', myClickEventFunction);
