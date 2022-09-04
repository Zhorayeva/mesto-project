import {openPopup, closePopup, popupImage, popupTitle, imagePopupElement,clearPopupErrors} from "./modal.js";
import {createArticleElement} from "./card.js";
import {profileDescriptionElement, profileNameElement, profileNameInput, profileDescriptionInput, profilePopupElement} from "./profile.js";

export function editButtonClickHandler(){
    clearPopupErrors(profilePopupElement);
    profileNameInput.value = profileNameElement.textContent;
    profileDescriptionInput.value = profileDescriptionElement.textContent;
    openPopup(profilePopupElement);

}

export function closeButtonClickHandler(evt){
    closePopup(evt.target.closest(".popup"));
}

export function prependElement(list, name, link){
    list.prepend(createArticleElement(name, link));
}

export function likeButtonClickHandler(evt){
    evt.target.classList.toggle("element__like-active");
}

export function removeButtonClickHandler(evt){
    evt.target.closest(".element").remove();
}

export function imageClickHandler(name, link){
    popupImage.src = link;
    popupImage.alt = name;
    popupTitle.textContent = name;
    openPopup(imagePopupElement);
}