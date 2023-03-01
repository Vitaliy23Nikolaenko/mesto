const initialCards = [ //Исходный массив из 6 объектов, у каждого из которых есть свойства name и link
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

const popUpEditProfile = document.querySelector('.popup_edit-profile'); //Задаем константу и находим в document popup редактирования профиля
const buttonEditProfile = document.querySelector('.profile__edit-button'); //Задаем константу и находим в document кнопку открытия popup редактирования профиля
const buttonCloseEditProfile = popUpEditProfile.querySelector('.popup__close-button'); //Задаем константу и находим в popUpEditProfile кнопку закрытия popup 
const popUpAddPlace = document.querySelector('.popup_add-place'); //Задаем константу и находим в document popup добавления публикации
const buttonAddPlace = document.querySelector('.profile__add-button'); //Задаем константу и находим кнопку открытия popup добавления публикации
const buttonCloseAddPlace = popUpAddPlace.querySelector('.popup__close-button'); //Задаем константу и находим в popUpAddPlace кнопку закрытия popup добавления публикации
const popUpImage = document.querySelector('.popup_place-image'); //Задаем константу и находим в document popup для просмотра увеличенного изображения
const buttonClosePopUpImage = popUpImage.querySelector('.popup__close-button'); //Задаем константу и находим в popUpEnlargedImage кнопку закрытия
const name = document.querySelector('.profile__title'); // Задаем константу и находим в document элемент с именем хозяина профиля
const job = document.querySelector('.profile__description'); //Задаем константу и наодим в document элемент с описанием хозяина профиля
const editForm = document.querySelector('.popup__edit-form'); //Задаем константу и находим в document форму редактирования профиля
const nameInput = editForm.querySelector('.popup__input_edit_title'); //Задаем константу и находим в editForm поле для ввода имени хозяина профиля
const jobInput = editForm.querySelector('.popup__input_edit_description'); //Задаем константу и находим в editForm поле для ввода описания хозяина профиля
const addPlaceForm = popUpAddPlace.querySelector('.popup__add-form'); //Задаем константу и находим форму добавления публикации в popUpAddPlace
const placeNameInput = document.querySelector('.popup__input_add_place'); //Задаем константу и находим в popupAddPlace поле для ввода place.name
const placeLinkInput = document.querySelector('.popup__input_add_url'); //Задаем константу и находим в popUpAddPlace поле для ввода place.link
const placeGallery = document.querySelector('.place-gallery'); //Задаем константу и находим в document галерею публикаций

function OpenPopUp(popup) { //Общая функция открытия popup с параметром на входе 'popup'. Открытие осуществляем путем добавления модификатора 'popup_opened'
  popup.classList.add('popup_opened');
}

function ClosePopUp(popup) {  //Общая функция закрытия popup с параметром на входе 'popup'. Закрытие осуществляем путем удаления модификатора 'popup_opened'
  popup.classList.remove('popup_opened');
}

function OpenPopUpEditProfile() { //Функция, отвечающая за открытие popup перенос существующих данных c именем и описанеим хозяина профиля в поля формы при открытии
  nameInput.value = name.textContent; // Присваиваем значение в input уже существующее значение name в profile
  jobInput.value = job.textContent; // Присваиваем значение в input уже существующее значение job в profile
  OpenPopUp(popUpEditProfile); // Открываем popupEditProfile с уже внесенными значениями в input'ы
}

function editFormSubmit(event) { //Функция, отвечающая за отправку формы со значениями в полях формы и закрытия popup редактирования профиля
  event.preventDefault(); //Сбрасываем стандартное поведеиние браузера
  name.textContent = nameInput.value; //
  job.textContent = jobInput.value;
  ClosePopUp(popUpEditProfile);
}

function placeLike(event) { //Функция реализации лайка, через toggle по выбранному элементу при событии 
  event.target.classList.toggle('place__button-like_action');
}

function placeRemove(event) { //Функция удаления публикации по нахождению ближайшего элемента с классом 'place'
  event.target.closest('.place').remove();
}

function OpenPopUpImage(place) { //Функция открытия popUpImage
  const enlargedImage = popUpImage.querySelector('.popup__enlarged-image'); //Находим в popUpImage картинку со свойствами для просмотра
  const enlargedImageDescription = popUpImage.querySelector('.popup__description'); ////Находим в popUpImage описание картинки
  enlargedImage.alt = place.name; // Присваиваем alt значение свойства name объекта
  enlargedImage.src = place.link; // Присваиваем src значение свойства link объекта
  enlargedImageDescription.textContent = place.name; //Присваиваем описанию картинки значение свойства
  OpenPopUp(popUpImage); //Открываем popUpImage с уже заданными значениями
}

function createPlace(place) { //Функция создания публикации с прописанными возможностями: ставить лайк, удалять, смотреть величенное изображение
const placeTemplate = document.querySelector('#placeTemplate').content; //Задаем константу и находим шаблон в HTML со всем содержимым
const newPlace = placeTemplate.querySelector('.place').cloneNode(true); //Задаем константу для того, чтобы браузер перебирал все объекты из массива в template с помощью cloneNode(true)
const buttonLike = newPlace.querySelector('.place__button-like'); // Задаем константу и находим в newPlace кнопку лайка
const placeImage = newPlace.querySelector('.place__picture'); //Задаем константу и находим в newPlace картинку публикации
placeImage.alt = place.name; //Присваиваем alt название через свойство name объекта
placeImage.src = place.link; //Присваиваем src название через свойство link объекта
newPlace.querySelector('.place__title').textContent = place.name; //выбираем в newPlace название публикации и присваиваем ему ззначение свойство name объекта
buttonLike.addEventListener('click', () => placeLike(event)); //Вешаем слушатель на кнопку лайка с колбеком функции лайка
const buttonTrash = newPlace.querySelector('.place__button-trash'); //Находим кнопку удаления публикации в newPlace
buttonTrash.addEventListener('click', () => placeRemove(event)); //Вешаем слушатель на кнопку при клике с колбеком функции удаления
placeImage.addEventListener('click', () => OpenPopUpImage(place)); //Вешаем слушатель на клик по картинке c колбеком функции открытия popUpImage

return newPlace; //возвращаем значение newPlace c новыми параметрами

};

function showPlace(place) { //Функция добавления публикации в начало галереи HTML с колбеком функции создания публикации
  placeGallery.prepend(createPlace(place));
}

initialCards.forEach(showPlace); //Применяем метод forEach для всех объектов в массиве initialCards c колбеком функции showPlace

function addPlace(event) { //Функция добавления публикации через модальное окно popUpAddPlace
event.preventDefault(); //Сбрасываем поведение браузера
const place = {}; //Создаем пустой объект
place.name = placeNameInput.value; //Добавляем в объект свойство с ключом name и значением из поля ввода названия
place.link = placeLinkInput.value; //Добавляем в объект свойство с ключом link и значением из поля ввода ссылки
showPlace(place); //Вызываем функция showPlace для нового объекта
ClosePopUp(popUpAddPlace); //Закрываем popUpAddPlace
placeNameInput.value = ''; //Обнуляем поле ввода названия
placeLinkInput.value = ''; //Обнуляем поле ввода ссылки на картинку
}

console.log(initialCards);

buttonEditProfile.addEventListener('click', OpenPopUpEditProfile);  //Вешаем слушатель на кнопку редактирования профиля с колбеком функции открытия popUpEditProfile
buttonCloseEditProfile.addEventListener('click', () => ClosePopUp(popUpEditProfile)); //Вешаем слушатель на кнопку закрытия popUpEditProfile с колбеком функции закрытия
buttonAddPlace.addEventListener('click', () => OpenPopUp(popUpAddPlace)); //Вешаем слушатель на кнопку добавления публикации с колбеком функции открытия popUpAddPlace
buttonCloseAddPlace.addEventListener('click', () => ClosePopUp(popUpAddPlace)); //Вешаем слушатель на кнопку закрытия popUpAddPlace с колбеком функции закрытия
buttonClosePopUpImage.addEventListener('click', () => ClosePopUp(popUpImage)); //Вешаем слушатель на кнопку закрытия popUpImage с колбеком функции закрытия
editForm.addEventListener('submit', editFormSubmit); //Вешаем слушатель на форму с submit формы редактирования профиля
addPlaceForm.addEventListener('submit', addPlace); //Вешаем слушатель на форму с submit формы добавления публикации с колбеком функции добавления публикации
