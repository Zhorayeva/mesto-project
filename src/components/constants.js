export const settings = {
    formClass : '.popup__form',
    inputClass : '.popup__input',
    buttonSubmit: '.popup__submit',
    buttonSubmitDisabled : 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error'
};

export const articleFormElement = document.querySelector("#article-form"),
articlePopupElement = document.querySelector("#article-popup"),
articleAddButton = document.querySelector(".profile__add-button"),
articleNameInput = document.querySelector(".popup__input_image_name"),
articleLinkInput = document.querySelector(".popup__input_image_link"),
elementsContainer = document.querySelector(".elements"),
elementTemplate = document.querySelector("#article").content;

export const imagePopupElement = document.querySelector("#image-popup"),
popupImage = document.querySelector(".popup__image"),
popupTitle = document.querySelector(".popup__image_title"),
popupCloseButtonsList = document.querySelectorAll(".popup__close");


export const profileEditButton = document.querySelector(".profile__edit-button"),
profileFormElement = document.querySelector("#profile-form"),
profilePopupElement = document.querySelector("#profile-popup"),
profileNameElement = document.querySelector(".profile__name"),
profileDescriptionElement = document.querySelector(".profile__description"),
profileNameInput = document.querySelector(".popup__input_info_name"),
profileDescriptionInput = document.querySelector(".popup__input_info_description"),
profileAvatarButton = document.querySelector(".profile__avatar-button"),
profileAvatar = document.querySelector(".profile__avatar"),
profileAvatarPopup = document.querySelector("#avatar-change"),
avatarFormElement = document.querySelector('#avatar-form'),
avatarInputElement = document.querySelector("#avatar-input");
