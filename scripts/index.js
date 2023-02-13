let popUp = document.querySelector('.popup');
let openPopUpButton = document.querySelector('.profile__edit-button');
const closePopUpButton = popUp.querySelector('.popup__close-button');

let name = document.querySelector('.profile__title');
let job = document.querySelector('.profile__description');

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_edit_title');
let jobInput = formElement.querySelector('.popup__input_edit_description');

function OpenPopUp() {
  popUp.classList.add('popup_opened');
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
}

function ClosePopUp() {
  popUp.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  ClosePopUp();
}

openPopUpButton.addEventListener('click', OpenPopUp);
closePopUpButton.addEventListener('click', ClosePopUp);
formElement.addEventListener('submit', handleFormSubmit);

/*let likeButton = document.querySelectorAll('.place__button');
for (let i = 0; i < likeButton.length; i++) {
  likeButton[i].addEventListener('click', function buttonAction() {
    likeButton[i].classList.toggle('place__button_action');
  });
}*/