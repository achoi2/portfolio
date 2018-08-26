let linksAbout = document.querySelector('.links-about');
let linksSelected = document.querySelector('.links-selected');
let linksContact = document.querySelector('.links-contact');
let intoSection = document.querySelector('.intro');
let selectedSection = document.querySelector('.selected-title');
let contactSection = document.querySelector('.contact');
let navButton = document.querySelector('.nav-btn');
let navLinks = document.querySelector('.navlinks');
    
linksAbout.addEventListener('click', () => {
    intoSection.scrollIntoView({ behavior: 'smooth' });
});

linksSelected.addEventListener('click', () => {
    selectedSection.scrollIntoView({ behavior: 'smooth' });
});

linksContact.addEventListener('click', () => {
    contactSection.scrollIntoView({ behavior: 'smooth' });
});


document.addEventListener('click', e => {
    if (e.target === navButton) {
        navLinks.classList.toggle('show');
    } else {
        navLinks.classList.remove('show');
    }
});

