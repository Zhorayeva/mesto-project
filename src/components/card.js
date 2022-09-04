import {openPopup, closePopup} from "./modal.js";
import {prependElement,imageClickHandler, likeButtonClickHandler, removeButtonClickHandler} from "./utils.js";
import {settings} from "./index.js";

export const initialCards = [
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

export const articleFormElement = document.querySelector("#article-form");
const articlePopupElement = document.querySelector("#article-popup");
export const articleAddButton = document.querySelector(".profile__add-button");
const articleNameInput = document.querySelector(".popup__input_image_name");
const articleLinkInput = document.querySelector(".popup__input_image_link");
export const elementsContainer = document.querySelector(".elements");
const elementTemplate = document.querySelector("#article").content;

export function addArticleButtonClickHandler(){
    openPopup(articlePopupElement);
}

export function createArticleElement(name, link){
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

export function submitArticleFormHandler(evt){
    evt.preventDefault();
    prependElement(elementsContainer, articleNameInput.value, articleLinkInput.value);
    closePopup(articlePopupElement);
    evt.target.reset();
    evt.submitter.setAttribute('disabled', true);
    evt.submitter.classList.add(settings.buttonSubmitDisabled);
}

export function loadElements(list, elements){
    elements.forEach(element => prependElement(list, element.name, element.link));
}

export function getInitialCards(settings){
    fetch('https://nomoreparties.co/v1/cohort-42/cards', {
        headers: {
            authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6'
        }
    })
        .then(res => res.json())
}