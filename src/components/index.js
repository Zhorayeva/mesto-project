import '../css/pages/index.css';
import { loadElements, addArticleButtonClickHandler, submitArticleFormHandler} from "./card.js";
import {submitProfileFormHandler, submitAvatarHandler, loadProfileInfo, editButtonClickHandler, avatarClickHandler} from "./profile.js";
import {enableValidation} from "./validate.js";
import {closeButtonClickHandler} from "./utils.js";
import {settings, articleAddButton, articleFormElement, elementsContainer, popupCloseButtonsList, profileFormElement, profileEditButton, profileAvatarButton, avatarFormElement, } from "./constants.js";
import {getInitialCards, getProfileInfo} from "./api.js";


profileEditButton.addEventListener("click", editButtonClickHandler);
popupCloseButtonsList.forEach(closeButton => closeButton.addEventListener("click", closeButtonClickHandler));
profileFormElement.addEventListener("submit", submitProfileFormHandler);
articleAddButton.addEventListener("click", addArticleButtonClickHandler);
articleFormElement.addEventListener("submit", submitArticleFormHandler);
profileAvatarButton.addEventListener("click", avatarClickHandler);
avatarFormElement.addEventListener("submit", submitAvatarHandler);


Promise.all([getProfileInfo(), getInitialCards()])
    .then(([info, cards]) => {
        loadProfileInfo(info);
        loadElements(elementsContainer, cards);
    })
    .catch((error) => {
        console.log(error);
    });


enableValidation(settings);






