import {openPopup, closePopup, popupImage, popupTitle, imagePopupElement,clearPopupErrors} from "./modal.js";
import {createArticleElement} from "./card.js";
import {profileDescriptionElement, profileNameElement, profileNameInput, profileDescriptionInput, profilePopupElement,profileAvatar, profileAvatarPopup} from "./profile.js";
import {config, deleteCard, like, unlike} from "./api.js";
import {data} from "autoprefixer";

export function editButtonClickHandler(){
    clearPopupErrors(profilePopupElement);
    profileNameInput.value = profileNameElement.textContent;
    profileDescriptionInput.value = profileDescriptionElement.textContent;
    openPopup(profilePopupElement);

}

export function closeButtonClickHandler(evt){
    closePopup(evt.target.closest(".popup"));
}

export function prependElement(containerElement, card){
    containerElement.prepend(createArticleElement(card));
}

export function likeButtonClickHandler(evt){
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

export function removeButtonClickHandler(evt){
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

export function imageClickHandler(name, link){
    popupImage.src = link;
    popupImage.alt = name;
    popupTitle.textContent = name;
    openPopup(imagePopupElement);
}

export function avatarClickHandler(evt) {
    openPopup(profileAvatarPopup);
}

export const isMyId = (id) => {
    return config.myId === id;
}

export const setButtonText = (button, isLoading) => {
    button.textContent = isLoading ? "Сохранение..." : "Сохранить";
}