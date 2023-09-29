// meowfacts API
fetch('https://meowfacts.herokuapp.com/')
  .then((response) => { return response.json() })
  //.then(function(response) { return response.json() })
  .then((data) => { console.log(data) });

function writeMeowFactsToPage(json) {
  for (const meowFact of json.data) {
    const p = document.createElement('p');
    p.innerText = meowFact;
    document.body.appendChild(p);
  }
}

fetch('https://meowfacts.herokuapp.com/?count=3')
  .then(response => response.json())
  .then(writeMeowFactsToPage);

// pexels API
const myQuery = 'Tigers';
fetch(`https://api.pexels.com/v1/search?query=${myQuery}&per_page=10`, {
  type: 'GET',
  headers: { Authorization: 'rUAeaXs8i1jb1agcojt7e1611gLOmko7P5rOtsdjLttQAXRI5WlJ4lZm' }
}).then(response => response.json())
  .then(json => {
    for (const photo of json.photos) {
      const img = document.createElement('img');
      img.src = photo.src.small;
      img.alt = photo.alt;
      document.body.appendChild(img);
    }
  });

const box = document.querySelector('.box');
