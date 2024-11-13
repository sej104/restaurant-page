import contactBackgroundImage from './images/contact-background.jpg';

export function loadContactPage() {
    const contactPageContainer = document.createElement('div');
    contactPageContainer.id = 'contact-content';

    const img = document.createElement('img');
    img.src = contactBackgroundImage;
    img.alt = 'Contact background';

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const titleContainer = document.createElement('div');
    const titleHeader = document.createElement('h1');
    titleHeader.textContent = 'Contact Us';
    const titleContent = document.createElement('p');
    titleContent.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nam quod, officiis alias ut qui exercitationem dolores';
    titleContainer.append(titleHeader, titleContent);

    const hoursContainer = document.createElement('div');
    const hoursHeader = document.createElement('h2');
    hoursHeader.textContent = "Hours";
    const hoursContent = document.createElement('p');
    hoursContent.textContent = 'Monday-Friday: 11am - 10pm';
    const hoursSecondContent = document.createElement('p');
    hoursSecondContent.textContent = 'Saturday-Sunday: 11am - 11pm';
    hoursContainer.append(hoursHeader, hoursContent, hoursSecondContent);

    const locationContainer = document.createElement('div');
    const locationHeader = document.createElement('h2');
    locationHeader.textContent = 'Location';
    const locationContent = document.createElement('p');
    locationContent.textContent = '123 Main Street, New York, NY 10002';
    locationContainer.append(locationHeader, locationContent);

    const phoneContainer = document.createElement('div');
    const phoneHeader = document.createElement('h2');
    phoneHeader.textContent = 'Phone';
    const phoneContent = document.createElement('p');
    phoneContent.textContent = '(123) 456-7890';
    phoneContainer.append(phoneHeader, phoneContent);

    const emailContainer = document.createElement('div');
    const emailHeader = document.createElement('h2');
    emailHeader.textContent = 'Email';
    const emailContent = document.createElement('p');
    emailContent.textContent = 'info@saporediitalia.com';
    emailContainer.append(emailHeader, emailContent);

    contactInfo.append(titleContainer, hoursContainer, locationContainer, 
        phoneContainer, emailContainer);

    contactPageContainer.append(img, contactInfo);
    
    const content = document.querySelector("#content");
    content.append(contactPageContainer);
}