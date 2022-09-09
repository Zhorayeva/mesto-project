import {closePopup, openPopup} from './modal.js'
import {getProfileInfo, config, setProfileInfo, setProfileAvatar} from "./api.js";
import {setButtonText, clearPopupErrors} from "./utils.js";
import {settings, profileNameInput, profileDescriptionInput, profileNameElement, profileDescriptionElement, profilePopupElement,profileAvatarPopup,avatarInputElement, profileAvatar} from "./constants.js";

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

export function avatarClickHandler (evt) {
    openPopup(profileAvatarPopup);
}

export function submitAvatarHandler (evt) {
    evt.preventDefault();
    setButtonText(evt.submitter, true);
    setProfileAvatar(avatarInputElement.value)
        .then((data) => {
            profileAvatar.src = data.avatar;
            closePopup(profileAvatarPopup);
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

export const loadProfileInfo = (data) => {
        profileAvatar.src = data.avatar;
        profileNameElement.textContent = data.name;
        profileDescriptionElement.textContent = data.about;
        config.myId = data._id;
        profileNameElement.id = data._id;
}

export function editButtonClickHandler(){
    clearPopupErrors(profilePopupElement);
    profileNameInput.value = profileNameElement.textContent;
    profileDescriptionInput.value = profileDescriptionElement.textContent;
    openPopup(profilePopupElement);
}

