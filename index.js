let linksAbout = document.querySelector('.links-about');
let linksSelected = document.querySelector('.links-selected');
let linksContact = document.querySelector('.links-contact');
let aboutSection = document.querySelector('.about');
let selectedSection = document.querySelector('.selected-work');
let contactSection = document.querySelector('.contact');
let navButton = document.querySelector('.nav-button');
let navLinks = document.querySelector('.nav-links');



linksAbout.addEventListener('click', () => {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

linksSelected.addEventListener('click', () => {
    selectedSection.scrollIntoView({ behavior: 'smooth' });
});

linksContact.addEventListener('click', () => {
    contactSection.scrollIntoView({ behavior: 'smooth' });
});





