import { loadHomePage } from './homePage.js';
import { loadMenuPage } from './menuPage.js';
import { loadContactPage } from './contactPage.js';
import './styles.css';

const content = document.querySelector('#content');
const homeButton = document.querySelector('#home-btn');
const menuButton = document.querySelector('#menu-btn');
const contactButton = document.querySelector('#contact-btn');

homeButton.addEventListener('click', () => {
    content.replaceChildren();
    loadHomePage();
});

menuButton.addEventListener('click', () => {
    content.replaceChildren();
    loadMenuPage();
});

contactButton.addEventListener('click', () => {
    content.replaceChildren();
    loadContactPage();
});

loadHomePage();