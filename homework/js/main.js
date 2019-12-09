
window.onload = create_hamburger_listener;

function create_hamburger_listener()
{
	let hamburger = document.querySelector('.page-hamburger');
	let concerts = document.querySelector('.concerts');
	let contact_form = document.querySelector('.contact__form');

	hamburger.addEventListener('click', (e) => {
		document.querySelector('nav').classList.toggle("changing_nav");
	});
	
	concerts.addEventListener('click', (e) => {
		e.target.outerHTML = "<span>Have fun!</span>";
	});
	
	contact_form.addEventListener('submit', (e) => {
		e.preventDefault();
		let form_data = new FormData(contact_form);
		const obj = Object.fromEntries(form_data);
		console.log(obj);
	});
}