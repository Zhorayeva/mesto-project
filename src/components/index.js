import '../css/pages/index.css';

import { articleAddButton, articleFormElement, loadElements, addArticleButtonClickHandler, submitArticleFormHandler, elementsContainer } from "./card.js";
import {popupCloseButtonsList} from "./modal.js";
import {
    profileFormElement,
    profileEditButton,
    submitProfileFormHandler,
    profileAvatarButton,
    avatarFormElement,
    submitAvatarHandler,
    loadProfileInfo
} from "./profile.js";
import {enableValidation} from "./validate.js";
import {editButtonClickHandler, closeButtonClickHandler, avatarClickHandler} from "./utils.js";


profileEditButton.addEventListener("click", editButtonClickHandler);
popupCloseButtonsList.forEach(closeButton => closeButton.addEventListener("click", closeButtonClickHandler));
profileFormElement.addEventListener("submit", submitProfileFormHandler);
articleAddButton.addEventListener("click", addArticleButtonClickHandler);
articleFormElement.addEventListener("submit", submitArticleFormHandler);
profileAvatarButton.addEventListener("click", avatarClickHandler);
avatarFormElement.addEventListener("submit", submitAvatarHandler);

loadElements(elementsContainer);
loadProfileInfo();

export const settings = {
    formClass : '.popup__form',
    inputClass : '.popup__input',
    buttonSubmit: '.popup__submit',
    buttonSubmitDisabled : 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error'
};

enableValidation(settings);






