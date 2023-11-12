import {NavBar} from './NavBar.js';

const props = {
  title: 'Peter\'s Portfolio',
  links: [
    'https://google.com',
    'https://google.com',
    'https://canvas.colorado.edu',
    'https://reddit.com',
    'https://reddit.com',
  ],
}

document.body.innerHTML = NavBar(props);
