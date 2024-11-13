import menuBackgroundImage from './images/menu-background.jpg';
import appetizerImage from './images/appetizer.jpg';
import saladImage from './images/salad.jpg';
import soupImage from './images/soup.jpg';
import pizzaImage from './images/pizza.jpg';
import pastaImage from './images/pasta.jpg';
import seaFoodImage from './images/seafood.jpg';
import sandwichImage from './images/sandwich.jpg';
import dessertImage from './images/dessert.jpeg';
import drinkImage from './images/drink.png';

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
    const backgroundImage = createImage(menuBackgroundImage, 
        "Menu background image");

    const h1 = document.createElement('h1');
    h1.textContent = 'Our Menu';

    let para = document.createElement('p');
    para.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing 
        elit. Ducimus eveniet, blanditiis neque adipisci expedita iusto 
        assumenda facere ipsam aliquam accusamus`;

    const div = document.createElement('div');
    div.append(h1, para);

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    titleContainer.append(backgroundImage, div);

    const cardContainer = document.createElement('div');
    cardContainer.classList = 'card-container';
    cardContainer.append(
        createCard('Appetizers', appetizerImage, 'Appetizer'),
        createCard('Salads', saladImage, 'Salad'),
        createCard('Soups', soupImage, 'Soup'),
        createCard('Pizza', pizzaImage, 'Pizza'),
        createCard('Pasta', pastaImage, 'Pasta'),
        createCard('Seafood', seaFoodImage, 'Seafood'),
        createCard('Sandwiches', sandwichImage, 'Sandwich'),
        createCard('Desserts', dessertImage, 'Dessert'),
        createCard('Drinks', drinkImage, 'Drinks')
    );
    
    const menuPageContent = document.createElement('div');
    menuPageContent.id = 'menu-content';
    menuPageContent.append(titleContainer, cardContainer);

    document.querySelector('#content').append(menuPageContent);
}