import {openPopup, closePopup} from "./modal.js";
import {prependElement, imageClickHandler, likeButtonClickHandler, removeButtonClickHandler, isMyId, setButtonText} from "./utils.js";
import {settings} from "./index.js";
import {getInitialCards, config, addNewCard} from "./api.js";

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

export function createArticleElement(cardInfo){
    const element = elementTemplate.querySelector(".element").cloneNode(true);
    const imageElement = element.querySelector(".element__image");
    const elementRemove = element.querySelector(".element__remove");
    const likeCounter = element.querySelector(".element__like-counter");
    const likeButton = element.querySelector(".element__like");
    imageElement.src = cardInfo.link;
    imageElement.alt = cardInfo.name;
    imageElement.id = cardInfo._id;
    imageElement.addEventListener("click", function(){imageClickHandler(cardInfo.name, cardInfo.link)});
    element.querySelector(".element__title").textContent = cardInfo.name;
    likeButton.addEventListener("click", likeButtonClickHandler);

    likeCounter.textContent = cardInfo.likes.length;

    cardInfo.likes.forEach((like) => {
        if (isMyId(like._id)) {
            likeButton.classList.add('element__like-active');
        }
    });

    if (isMyId(cardInfo.owner._id)) {
        elementRemove.addEventListener("click", removeButtonClickHandler);
    } else {
        elementRemove.remove();
    }

    return element;
}

export function submitArticleFormHandler(evt){
    evt.preventDefault();
    setButtonText(evt.submitter, true);
    addNewCard(articleNameInput.value, articleLinkInput.value)
        .then((data) => {
            prependElement(elementsContainer, data);
            closePopup(articlePopupElement);
            evt.target.reset();
            evt.submitter.setAttribute('disabled', true);
            evt.submitter.classList.add(settings.buttonSubmitDisabled);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setButtonText(evt.submitter, false);
        });


}

export function loadElements(containerElement){
    getInitialCards().then((data) => {
        data.reverse().forEach(element => prependElement(containerElement, element));
    });
}