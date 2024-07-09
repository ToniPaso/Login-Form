
// When you press REGISTER HERE, another form will slide from the right
const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');



registerLink.addEventListener('click', () => {
    container.classList.add('active');
});

loginLink.addEventListener('click', () => {
    container.classList.remove('active');
});





// When you click the LOGIN button on the top of the page. The form to fill out will pop out
const btnPopup = document.querySelector('.btnLogin-popup');


btnPopup.addEventListener('click', () => {
    container.classList.add('active-popup');
})


// For closing the tab. Icon X
const closeIcon = document.querySelector('.close-icon');
closeIcon.addEventListener('click', () => {
    container.classList.remove('active-popup');
});








