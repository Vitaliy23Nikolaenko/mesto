# Проект: Место

### Обзор
* Описание
* Структура с примерами оформления

**Описание**

Ссылка: **(https://Vitaliy23Nikolaenko.github.io/mesto/index.html)**
![Общий вид проекта](./image/README.md/page.PNG);

Одностраничный сайт от [**Яндекс.Практикум**](https://practicum.yandex.ru/) с графическим офрмлением, представляющий собой интерактивный сервис со следующими возможностями:
  * редактирование профиля через модальное окно;
  * добавление фотографий из путешествий;
  * проставление реакций.

**Структура с примерами оформления**

Сайт включает в себя следующие **секции**:

**1.** Шапка сайта (**header**) с логотипом.

![Общий вид header](./image/README.md/header.PNG)

**2.** Секция **profile** с описанием профиля и возможностью его редактирования через всплывающее модальное окно, а также кнопка для добавления контента страницы через всплывающее модальное окно.

![Общий вид profile](./image/README.md/profile.PNG)

![Общий вид модального онка для редактирования профиля](./image/README.md/profile-edit.PNG)

![Общий вид модального окна для добавления публикации](./image/README.md/add-place.PNG)

**3.** Секция **places** с публикациями, в которых содержатся фотография локации, название, кнопка реакции(лайк) и кнопка удаления публикации. Реализована возможность просмотра увеличенного изображения из публикации в всплывающем модальном окне.

![Общий вид places](./image/README.md/places.PNG)

![Общий вид модального окна просмотра увеличенного изображения публикации](./image/README.md/popup-image.PNG)

Применена адаптивная верстка для дисплеев с разрешением от 320px до 1280px.

**320px**

![Общий вид 320px](./image/README.md/320px.PNG);

**768px**

![Общий вид 768px](./image/README.md/768px.PNG);

**1024px**

![Общий вид 1024px](./image/README.md/1024px.PNG);

**1280px**

![Общий вид 1280px](./image/README.md/1280px.PNG);


Проект выполнен с помощью **HTML**,**СSS** и **JavaScript**, 

```
<div class="popup">
        <form class="popup__container">
          <h2 class="popup__title">Редактировать профиль</h2>
          <input type="text" class="popup__edit-title" />
          <input type="text" class="popup__edit-description" />
          <button type="submit" class="popup__submit-button">Сохранить</button>
          <button type="button" class="popup__close-button">
            <img
              src="./image/close-icon.svg"
              alt="Крестик"
              class="popup__button-icon"
            />
          </button>
        </form>
        <div class="popup__overlay"></div>
      </div>
```
```
let formElement = document.querySelector(".popup__container");
let nameInput = formElement.querySelector(".popup__edit-title");
let jobInput = formElement.querySelector(".popup__edit-description");

function OpenPopUp() {
  popUp.classList.add("popup_opened");
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
}

function ClosePopUp() {
  popUp.classList.remove("popup_opened");
}

openPopUpButton.addEventListener("click", OpenPopUp);
closePopupButton.addEventListener("click", ClosePopUp);
```