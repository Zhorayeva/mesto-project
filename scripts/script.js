const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const closeButtons = document.querySelectorAll(".popup__close");

const profileFormElement = document.querySelector("#profile-form");
const profilePopupElement = document.querySelector("#profile-popup");
const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(".profile__description");
const profileNameInput = document.querySelector(".popup__input_info_name");
const profileDescriptionInput = document.querySelector(".popup__input_info_description");

const articleFormElement = document.querySelector("#article-form");
const articlePopupElement = document.querySelector("#article-popup");
const editProfileButton = document.querySelector(".profile__edit-button");
const addArticleButton = document.querySelector(".profile__add-button");
const articleNameInput = document.querySelector(".popup__input_image_name");
const articleLinkInput = document.querySelector(".popup__input_image_link");
const elementsList = document.querySelector(".elements");
const elementTemplate = document.querySelector("#article").content;

const imagePopupElement = document.querySelector("#image-popup");
const popupImage = document.querySelector(".popup__image");
const popupTitle = document.querySelector(".popup__image_title");

function closePopup(popup){
    popup.classList.remove("popup_opened");
}

function openPopup(popup){
    popup.classList.add("popup_opened");
}

function editButtonClickHandler(){
    profileNameInput.value = profileNameElement.textContent;
    profileDescriptionInput.value = profileDescriptionElement.textContent;
    openPopup(profilePopupElement);
}

function closeButtonClickHandler(evt){
    closePopup(evt.target.parentElement.parentElement);
}

function profileFormSubmitHandler(evt){
    evt.preventDefault();
    profileNameElement.textContent = profileNameInput.value;
    profileDescriptionElement.textContent = profileDescriptionInput.value;
    closePopup(profilePopupElement);
}

function addArticleButtonClickHandler(){
    openPopup(articlePopupElement);
}

function articleFormSubmitHandler(evt){
    evt.preventDefault();
    prependElement(elementsList, articleNameInput.value, articleLinkInput.value);
}

function prependElement(list, name, link){
    let element = elementTemplate.querySelector(".element").cloneNode(true);
    element.querySelector(".element__image").src = link;
    element.querySelector(".element__image").alt = name;
    element.querySelector(".element__image").addEventListener("click", function(){imageClickHandler(popupImage, popupTitle, name, link)});
    element.querySelector(".element__title").textContent = name;
    element.querySelector(".element__like").addEventListener("click", likeButtonClickHandler);
    element.querySelector(".element__remove").addEventListener("click", removeButtonClickHandler);
    list.prepend(element);
}

function loadElements(list, elements){
    for(let i = 0; i < elements.length; i++){
        prependElement(list, elements[i].name, elements[i].link);
    }
}

function likeButtonClickHandler(evt){
    evt.target.classList.toggle("element__like-active");
}

function removeButtonClickHandler(evt){
    evt.target.parentElement.remove();
}

function imageClickHandler(imageElement, titleElement, name, link){
    imageElement.src = link;
    imageElement.alt = name;
    titleElement.textContent = name;
    openPopup(imagePopupElement);
}

editProfileButton.addEventListener("click", editButtonClickHandler);
closeButtons.forEach(closeButton => closeButton.addEventListener("click", closeButtonClickHandler));
profileFormElement.addEventListener("submit", profileFormSubmitHandler);
addArticleButton.addEventListener("click", addArticleButtonClickHandler);
articleFormElement.addEventListener("submit", articleFormSubmitHandler);
loadElements(elementsList, initialCards);