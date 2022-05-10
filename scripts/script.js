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
const profileEditButton = document.querySelector(".profile__edit-button");
const addArticleButton = document.querySelector(".profile__add-button");
const articleNameInput = document.querySelector(".popup__input_image_name");
const articleLinkInput = document.querySelector(".popup__input_image_link");
const elementsContainer = document.querySelector(".elements");
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
    closePopup(evt.target.closest(".popup"));
}

function submitProfileFormHandler(evt){
    evt.preventDefault();
    profileNameElement.textContent = profileNameInput.value;
    profileDescriptionElement.textContent = profileDescriptionInput.value;
    closePopup(profilePopupElement);
}

function addArticleButtonClickHandler(){
    openPopup(articlePopupElement);
}

function createArticleElement(name, link){
    const element = elementTemplate.querySelector(".element").cloneNode(true);
    const imageElement = element.querySelector(".element__image");
    imageElement.src = link;
    imageElement.alt = name;
    imageElement.addEventListener("click", function(){imageClickHandler(name, link)});
    element.querySelector(".element__title").textContent = name;
    element.querySelector(".element__like").addEventListener("click", likeButtonClickHandler);
    element.querySelector(".element__remove").addEventListener("click", removeButtonClickHandler);
    return element;
}

function prependElement(list, name, link){
    list.prepend(createArticleElement(name, link));
}

function submitArticleFormHandler(evt){
    evt.preventDefault();
    prependElement(elementsContainer, articleNameInput.value, articleLinkInput.value);
    closePopup(articlePopupElement);
    articleNameInput.value = ""; 
    articleLinkInput.value = "";
}

function loadElements(list, elements){
    elements.forEach(element => prependElement(list, element.name, element.link));
}

function likeButtonClickHandler(evt){
    evt.target.classList.toggle("element__like-active");
}

function removeButtonClickHandler(evt){
    evt.target.closest(".element").remove();
}

function imageClickHandler(name, link){
    popupImage.src = link;
    popupImage.alt = name;
    popupTitle.textContent = name;
    openPopup(imagePopupElement);
}

profileEditButton.addEventListener("click", editButtonClickHandler);
closeButtons.forEach(closeButton => closeButton.addEventListener("click", closeButtonClickHandler));
profileFormElement.addEventListener("submit", submitProfileFormHandler);
addArticleButton.addEventListener("click", addArticleButtonClickHandler);
articleFormElement.addEventListener("submit", submitArticleFormHandler);
loadElements(elementsContainer, initialCards);