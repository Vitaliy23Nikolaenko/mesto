const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const popUpEditProfile = document.querySelector(".popup_edit-profile");
const popUpAddPlace = document.querySelector(".popup_add-place");
const popUpEnlargedImage = document.querySelector('.popup_place-image');
const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonAddPlace = document.querySelector(".profile__add-button");
const buttonCloseEditProfile = popUpEditProfile.querySelector(".popup__close-button");
const buttonCloseAddPlace = popUpAddPlace.querySelector(".popup__close-button");
const buttonCloseEnlargedImage = popUpEnlargedImage.querySelector('.popup__close-button');
const editForm = document.querySelector(".popup__edit-form");
const addForm = document.querySelector(".popup__add-form");
const name = document.querySelector(".profile__title");
const job = document.querySelector(".profile__description");
const nameInput = editForm.querySelector(".popup__input_edit_title");
const jobInput = editForm.querySelector(".popup__input_edit_description");
const placeGallery = document.querySelector(".place-gallery");
const placeInput = document.querySelector(".popup__input_add_place");
const placeURL = document.querySelector(".popup_input_add_url");
const enlargedImage = popUpEnlargedImage.querySelector('.popup__enlarged-image');
const enlargedImageDescription = popUpEnlargedImage.querySelector('.popup__description');


function OpenPopUpEditProfile() {
  popUpEditProfile.classList.add("popup_opened");
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
}

function ClosePopUpEditProfile() {
  popUpEditProfile.classList.remove("popup_opened");
}

function OpenPopUpAddPlace() {
  popUpAddPlace.classList.add("popup_opened");
}

function ClosePopUpAddPlace() {
  popUpAddPlace.classList.remove("popup_opened");
}

function OpenPopUpEnlargedImage() {
  popUpEnlargedImage.classList.add('popup_opened');
}

function ClosePopUpEnlargedImage() {
  popUpEnlargedImage.classList.remove('popup_opened');
}

function editFormSubmit(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  ClosePopUpEditProfile();
}

function createPlace(place) {
  const placeTemplate = document.querySelector("#placeTemplate").content.cloneNode(true);
  const placeTitle = placeTemplate.querySelector(".place__title");
  placeTitle.textContent = place.name;
  const placeImage = placeTemplate.querySelector(".place__picture");
  placeImage.setAttribute("src", place.link);
  placeGallery.append(placeTemplate);
  placeImage.addEventListener('click', () => {
    enlargedImage.src = place.link;
    enlargedImage.alt = place.name;
    enlargedImageDescription.textContent = place.name;
    OpenPopUpEnlargedImage();  
  })
}

// function fullImage () {
//   enlargedImage.src = place.link;
//   enlargedImage.alt = place.name;
//   enlargedImageDescription.textContent = place.name;
//   OpenPopUpEnlargedImage(); 
// }

function createNewPlace() {
  const place = {};
  place.name = placeInput.value;
  place.link = placeURL.value;
  placeGallery.prepend(createPlace(place));
}

function addFormSubmit(evt) {
  evt.preventDefault();
  createNewPlace();
  ClosePopUpAddPlace();
}

initialCards.forEach(createPlace);

buttonEditProfile.addEventListener("click", OpenPopUpEditProfile);
buttonCloseEditProfile.addEventListener("click", ClosePopUpEditProfile);
buttonAddPlace.addEventListener("click", OpenPopUpAddPlace);
buttonCloseAddPlace.addEventListener("click", ClosePopUpAddPlace);
editForm.addEventListener("submit", editFormSubmit);
addForm.addEventListener("submit", addFormSubmit);
placeImage.addEventListener('click', fullImage);
buttonCloseEnlargedImage.addEventListener('click', ClosePopUpEnlargedImage);

// /*let likeButton = document.querySelectorAll('.place__button');
// for (let i = 0; i < likeButton.length; i++) {
//   likeButton[i].addEventListener('click', function buttonAction() {
//     likeButton[i].classList.toggle('place__button_action');
//   });
// }*/
