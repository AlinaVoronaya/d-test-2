require('./styles/styles.scss');

if (process.env.NODE_ENV === 'development') {
    require('../index.html')
}

let button = document.getElementById('modal-btn');
button.onclick = function(event) {
    event.preventDefault();
    let modal = document.getElementById('modal');
    modal.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';
}

let closeButton = document.getElementById('modal-close');
closeButton.onclick = function(event) {
    event.preventDefault();
    closeModal();
}

let closeOverlay = document.getElementById('overlay');
closeOverlay.onclick = function(event) {
    closeModal();
}

function closeModal() {
    let modal = document.getElementById('modal');
    modal.classList.remove('modal--open');
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';
    const form = document.getElementById('form');
    resetForm(form);
}

function closeSucces() {
    let succes = document.getElementById('succes');
    succes.classList.remove('succes--open');
    document.body.style.overflow = '';
}

let closeSuccesWindow = document.getElementById('succesOverlay');
closeSuccesWindow.onclick = function(event) {
    closeSucces();
}

const form = document.getElementById("form");
form.onsubmit = function(event) {
    event.preventDefault();
    const form = event.target;
    // event - событие
    // target - куда кликнули
    console.log(form.elements);
    let hasErrors = false;
    for (const element of form.elements) {
        if (!element.hasAttribute('validate')) {
            continue;
        }
        hasErrors = hasErrors || !element.value;
        if (!element.value) {
            element.parentNode.querySelector('.form__error').style.visibility = 'visible';
        } else {
            element.parentNode.querySelector('.form__error').style.visibility = 'hidden';
        }
    }
    console.log(hasErrors);
    if (!hasErrors) {
        closeModal();
        setTimeout(showSucces, 800);
    }
};

function showSucces() {
    let succes = document.getElementById('succes');
    succes.classList.add('succes--open');
}

function resetForm(form) {
    for (const element of form.elements) {
        if (!element.hasAttribute('validate')) {
            continue;
        }
        element.value = '';
        element.parentNode.querySelector('.form__error').style.visibility = 'hidden';
    }
}