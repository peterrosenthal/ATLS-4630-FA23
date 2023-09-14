const myParagraph = document.getElementById('my-specific-paragraph');
console.log(myParagraph);

const myParagraphs = document.getElementsByClassName('my-paragraph');
console.log(myParagraphs);

const myParagraphQuery = document.querySelector('#my-specific-paragraph');
console.log(myParagraphQuery);

const myParagraphsQuery = document.querySelectorAll('.my-paragraph');
console.log(myParagraphsQuery);

const header = document.querySelector('h1');
console.log(header);

const divHeader = document.querySelector('div h1');
console.log(divHeader);

const div = divHeader.parentElement;
console.log(div);

const divChildren = div.children;
console.log(divChildren);

const myParagraphSibling = divHeader.nextElementSibling;
console.log(myParagraphSibling);

let isStyled = false;
document.addEventListener('click', () => {
  if (isStyled) {
    myParagraph.style.backgroundColor = null;
    myParagraph.style.color = null;
    isStyled = false;
  } else {
    myParagraph.style.backgroundColor = '#ff0000';
    myParagraph.style.color = 'white';
    isStyled = true;
  }
  myParagraph.id = 'a-new-element-id';
});

const usernameInput = document.getElementById('username');
usernameInput.addEventListener('input', () => {
  console.log(usernameInput.value);
});

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);
  console.log(data.get('username'));
  console.log(data.get('password'));
});
