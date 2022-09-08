import {closePopup} from './modal.js'
import {getProfileInfo, config, setProfileInfo, setProfileAvatar} from "./api.js";
import {setButtonText} from "./utils.js";

export const profileEditButton = document.querySelector(".profile__edit-button");
export const profileFormElement = document.querySelector("#profile-form");
export const profilePopupElement = document.querySelector("#profile-popup");
export const profileNameElement = document.querySelector(".profile__name");
export const profileDescriptionElement = document.querySelector(".profile__description");
export const profileNameInput = document.querySelector(".popup__input_info_name");
export const profileDescriptionInput = document.querySelector(".popup__input_info_description");
export const profileAvatarButton = document.querySelector(".profile__avatar-button");
export const profileAvatar = document.querySelector(".profile__avatar");
export const profileAvatarPopup = document.querySelector("#avatar-change");
export const avatarFormElement = document.querySelector('#avatar-form');
const avatarInputElement = document.querySelector("#avatar-input");

export function submitProfileFormHandler(evt){
    evt.preventDefault();
    setButtonText(evt.submitter, true);
    setProfileInfo(profileNameInput.value, profileDescriptionInput.value)
        .then((data) => {
            profileNameElement.textContent = data.name;
            profileDescriptionElement.textContent = data.about;
            closePopup(profilePopupElement);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setButtonText(evt.submitter, false);
        });
}

export function submitAvatarHandler (evt) {
    evt.preventDefault();
    setButtonText(evt.submitter, true);
    setProfileAvatar(avatarInputElement.value)
        .then((data) => {
            profileAvatar.src = data.avatar;
            closePopup(profileAvatarPopup);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setButtonText(evt.submitter, false);
        });
}

export const loadProfileInfo = () => {
    getProfileInfo().then((data) => {
        profileAvatar.src = data.avatar;
        profileNameElement.textContent = data.name;
        profileDescriptionElement.textContent = data.about;
        config.myId = data._id;
        profileNameElement.id = data._id;
    })
}

