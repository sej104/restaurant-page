import contactBackgroundImage from './images/contact-background.jpg';

function createContactInfo(headingType, title, content1, content2) {
    const div = document.createElement('div');
    const heading = document.createElement(headingType);
    heading.textContent = title; 
    const para = document.createElement('p');
    para.textContent = content1;
    div.append(heading, para);
    if (content2) {
        const para = document.createElement('p');
        para.textContent = content2;
        div.append(para);
    }
    return div;
}

export function loadContactPage() {
    const img = document.createElement('img');
    img.src = contactBackgroundImage;
    img.alt = 'Contact background';

    const contactInfoContainer = document.createElement('div');
    contactInfoContainer.classList.add('contact-info');

    const contactPageContent = document.createElement('div');
    contactPageContent.id = 'contact-content';
    contactInfoContainer.append(
        createContactInfo('h1', 'Contact Us', `Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Illum nam quod, officiis alias ut 
            qui exercitationem dolores`),
        createContactInfo('h2', 'Hours', 'Monday-Friday: 11am - 10pm',
            'Saturday-Sunday: 11am - 11pm'),
        createContactInfo('h2', 'Location', '123 Main Street, New York, NY 10002'),
        createContactInfo('h2', 'Phone', '(123) 456-7890'),
        createContactInfo('h2', 'Email', 'info@saporediitalia.com')
    );

    contactPageContent.append(img, contactInfoContainer);
    
    document.querySelector("#content").append(contactPageContent);
}