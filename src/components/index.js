import { initialCards, articleAddButton, articleFormElement, loadElements, addArticleButtonClickHandler, submitArticleFormHandler, elementsContainer } from "./card.js";
import {popupCloseButtonsList, closeEsc, closeOverlay} from "./modal.js";
import {profileFormElement, profileEditButton, submitProfileFormHandler} from "./profile.js";
import {enableValidation} from "./validate.js";
import {editButtonClickHandler, closeButtonClickHandler, } from "./utils.js";


profileEditButton.addEventListener("click", editButtonClickHandler);
popupCloseButtonsList.forEach(closeButton => closeButton.addEventListener("click", closeButtonClickHandler));
profileFormElement.addEventListener("submit", submitProfileFormHandler);
articleAddButton.addEventListener("click", addArticleButtonClickHandler);
articleFormElement.addEventListener("submit", submitArticleFormHandler);

loadElements(elementsContainer, initialCards);

enableValidation();

closeOverlay();

closeEsc();





