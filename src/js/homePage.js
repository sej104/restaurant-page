import homeBackgroundImage from '../images/home-background.jpg';

export function loadHomePage() {
    const img = document.createElement('img');
    img.src = homeBackgroundImage;
    img.alt = 'Homepage background image';
    
    const h2 = document.createElement('h2');
    h2.textContent = 'Sapore di Italia';
    
    const h1 = document.createElement('h1');
    h1.textContent = 'The Best Tasting Experience!';
    
    const para = document.createElement('p');
    para.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sint pariatur nostrum modi illum nesciunt! Voluptate, expedita 
        animi dignissimos!`;
    
    const button = document.createElement('button');
    button.textContent = 'Make a Reservation';
    
    const div = document.createElement('div');
    div.append(h2, h1, para, button);

    const homePageContent = document.createElement('div');
    homePageContent.id = 'home-content';
    homePageContent.append(img, div);

    document.querySelector("#content").append(homePageContent);
}

