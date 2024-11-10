import foodBackgroundImage from './food-background.jpg';
import "./styles.css";

export function loadHomePage() {
    const content = document.querySelector("#content");

    const img = document.createElement('img');
    img.src = foodBackgroundImage;
    
    const div = document.createElement('div');
    
    const h2 = document.createElement('h2');
    h2.textContent = 'Sapore di Italia';
    
    const h1 = document.createElement('h1');
    h1.textContent = 'The Best Tasting Experience!';
    
    const para = document.createElement('p');
    para.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur nostrum modi illum nesciunt! Voluptate, expedita animi dignissimos!';
    
    const button = document.createElement('button');
    button.textContent = 'View Our Menu';
    
    div.append(h2, h1, para, button);
    content.append(img, div);
}

