import {closePopup} from './modal.js'

export const profileEditButton = document.querySelector(".profile__edit-button");
export const profileFormElement = document.querySelector("#profile-form");
export const profilePopupElement = document.querySelector("#profile-popup");
export const profileNameElement = document.querySelector(".profile__name");
export const profileDescriptionElement = document.querySelector(".profile__description");
export const profileNameInput = document.querySelector(".popup__input_info_name");
export const profileDescriptionInput = document.querySelector(".popup__input_info_description");

export function submitProfileFormHandler(evt){
    evt.preventDefault();
    profileNameElement.textContent = profileNameInput.value;
    profileDescriptionElement.textContent = profileDescriptionInput.value;
    closePopup(profilePopupElement);
}