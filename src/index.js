import createFront from './front.js';
import createMenu from './menu.js';
import createContact from './contact.js';

import './styles/normalize.css';
import './styles/style.scss';
import './images/food1.jpg';

let content = document.getElementById('content');

// createMenu();
// createContact();
// createFront();

const removeAllChildNodes = function(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let tabHome = document.getElementById('tab-home');
let tabMenu = document.getElementById('tab-menu');
let tabContact = document.getElementById('tab-contact');

// removeAllChildNodes(content);
// createFront();

tabHome.addEventListener('click', function() {
    removeAllChildNodes(content);
    createFront();
});