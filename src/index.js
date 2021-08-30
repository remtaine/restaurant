import createFront from './front.js';
import createMenu from './menu.js';
import createContact from './contact.js';

import './styles/normalize.css';
import './styles/style.scss';
import './images/food1.jpg';
import './images/food2.jpg';
import './images/food3.jpg';

let content = document.getElementById('content');
let tabHome = document.getElementById('tab-home');
let tabMenu = document.getElementById('tab-menu');
let tabContact = document.getElementById('tab-contact');

const removeAllChildNodes = function(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

const setActiveTab = function(tab) {
    tabContact.classList.remove('active');
    tabHome.classList.remove('active');
    tabMenu.classList.remove('active');
    tab.classList.add('active');
};



removeAllChildNodes(content);
createFront();
setActiveTab(tabHome);

tabHome.addEventListener('click', function() {
    removeAllChildNodes(content);
    createFront();
    setActiveTab(tabHome);
});

tabMenu.addEventListener('click', function() {
    removeAllChildNodes(content);
    createMenu();
    setActiveTab(tabMenu);
});

tabContact.addEventListener('click', function() {
    removeAllChildNodes(content);
    createContact();
    setActiveTab(tabContact);
});