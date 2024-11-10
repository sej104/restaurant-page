import menuBackgroundImage from './images/menu-background.jpg';
import appetizerImage from './images/appetizer.jpg';
import saladImage from './images/salad.jpg';
import soupImage from './images/soup.jpg';
import pizzaImage from './images/pizza.jpg';
import pastaImage from './images/pasta.jpg';
import seaFoodImage from './images/seafood.jpg';
import sandwichImage from './images/sandwich.jpg';
import dessertImage from './images/dessert.jpeg';
import drinkImage from './images/wine.png';
import './menu.css';

function createImage(src, alt) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    return img;
}

function createCard(title, src, alt) {
    const div = document.createElement('div');
    const img = createImage(src, alt);
    const para = document.createElement('p');
    para.textContent = title;
    div.append(img, para);
    return div;
}

export function loadMenuPage() {
    const img = createImage(menuBackgroundImage, "Menu background image");
    let div = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.textContent = 'Our Menu';

    let para = document.createElement('p');
    para.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus eveniet, blanditiis neque adipisci expedita iusto assumenda facere ipsam aliquam accusamus';

    div.append(h1, para);

    const heroContainer = document.createElement('div');
    heroContainer.classList.add('hero');
    heroContainer.append(img, div);

    const appetizer = createCard('Appetizers', appetizerImage, 'Appetizer');
    const salad = createCard('Salads', saladImage, 'Salad');
    const soup = createCard('Soups', soupImage, 'Soup');
    const pizza = createCard('Pizza', pizzaImage, 'Pizza');
    const pasta = createCard('Pasta', pastaImage, 'Pasta');
    const seaFood = createCard('Seafood', seaFoodImage, 'Seafood');
    const sandwich = createCard('Sandwiches', sandwichImage, 'Sandwich');
    const dessert = createCard('Desserts', dessertImage, 'Dessert');
    const drink = createCard('Drinks', drinkImage, 'Drinks');

    const cardContainer = document.createElement('div');
    cardContainer.classList = 'card-container';
    cardContainer.append(appetizer, salad, soup, pizza, pasta, seaFood, sandwich,
        dessert, drink);
    
    const content = document.querySelector('#content');
    content.append(heroContainer, cardContainer);
}