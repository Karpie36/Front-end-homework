// Show/hide page navigation
const menuButton = document.querySelector('#hamburger');
let menuStatus = 0;

menuButton.addEventListener('click', (e) => {
	let hamburgerLine = menuButton.querySelectorAll('img');
    const pageNavigation = document.querySelector('.page-navigation');
	pageNavigation.classList.toggle('page-navigation--visible');
	
	if(menuStatus == 0)
	{
		hamburgerLine[0].style.transform = "translateY(8px) rotate(405deg)";
		hamburgerLine[1].style.transform = "scaleX(0.1)";
		hamburgerLine[2].style.transform = "translateY(-8px) rotate(-405deg)";
		
		menuStatus = 1;
	}
	else if(menuStatus == 1)
	{		
		hamburgerLine[0].style.transform = "translateY(0px) rotate(0deg)";
		hamburgerLine[1].style.transform = "scaleX(1)";
		hamburgerLine[2].style.transform = "translateY(0px) rotate(0deg)";
		
		menuStatus = 0;
	}
});

// Mark ticket as bought
const concerts = document.querySelector('#concerts');

concerts.addEventListener('click', (e) => {
    if (e.target.classList.contains('button--buy-ticket')) {
        const buyTicketButton = e.target;
        const haveFunText = document.createElement('p');
        haveFunText.textContent = 'Have fun!';

        const buttonContainer = buyTicketButton.parentElement;
        buttonContainer.insertBefore(haveFunText, buyTicketButton);
        buyTicketButton.remove();
        // OR
        // buyTicketButton.replaceWith(haveFunText);
    }
});

const gallery = document.querySelector('.gallery');

gallery.addEventListener('mouseover', (e) => {
	if (e.target.classList.contains('gallery__image')) {
		const photo = e.target;
		photo.style.animation = 'gallery-anime 4s 0.2s both';
	}
});

gallery.addEventListener('mouseout', (e) => {
	if (e.target.classList.contains('gallery__image')) {
		const photo = e.target;
		photo.style.animation = 'color-anime 3s 0.1s both';
	}
});

// Log form data
const contactForm = document.querySelector('.contact__form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);
    console.log(formObject);
});

