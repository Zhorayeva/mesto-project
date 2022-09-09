import {openPopup, closePopup} from "./modal.js";
import {prependElement, isMyId, setButtonText} from "./utils.js";
import {getInitialCards, addNewCard, unlike, like, deleteCard} from "./api.js";
import {articlePopupElement, elementsContainer, elementTemplate, articleNameInput, articleLinkInput, settings, popupImage, popupTitle, imagePopupElement} from "./constants";

export function addArticleButtonClickHandler(){
    openPopup(articlePopupElement);
}

function likeButtonClickHandler(evt){
    const likeButton = evt.target;
    const cardElement = likeButton.closest(".element");
    const imageElement = cardElement.querySelector(".element__image");
    const likeCounter = cardElement.querySelector(".element__like-counter");

    if (likeButton.classList.contains("element__like-active")){
        unlike(imageElement.id)
            .then((data) => {
                likeCounter.textContent = data.likes.length;
                likeButton.classList.remove("element__like-active");
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        like(imageElement.id)
            .then((data) => {
                likeCounter.textContent = data.likes.length;
                likeButton.classList.add("element__like-active");
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

function removeButtonClickHandler(evt){
    const element = evt.target.closest(".element");
    const imageElement = element.querySelector(".element__image");
    deleteCard(imageElement.id)
        .then((data) => {
            element.remove();
        })
        .catch((error) => {
            console.log(error);
        });
}

function imageClickHandler(name, link){
    popupImage.src = link;
    popupImage.alt = name;
    popupTitle.textContent = name;
    openPopup(imagePopupElement);
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

export function loadElements(containerElement, data){
        data.reverse().forEach(element => prependElement(containerElement, element));
}