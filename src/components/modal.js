export const imagePopupElement = document.querySelector("#image-popup");
export const popupImage = document.querySelector(".popup__image");
export const popupTitle = document.querySelector(".popup__image_title");

export const popupCloseButtonsList = document.querySelectorAll(".popup__close");

export function closePopup(popup){
    popup.classList.remove("popup_opened")
    document.removeEventListener('keydown', closeByEsc);
    popup.removeEventListener('mousedown', closeOverlay);
}

export function openPopup(popup){
    popup.classList.add("popup_opened");
    document.addEventListener('keydown', closeByEsc);
    popup.addEventListener('mousedown', closeOverlay);
}

const closeOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target);
    };
}

const closeByEsc = (evt) => {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_opened'));
    };
}

export const clearPopupErrors = (popup) => {
    popup.querySelectorAll(".popup__input").forEach((inputElement) => inputElement.classList.remove("popup__input_type_error"));
    popup.querySelectorAll(".popup__input-error").forEach((errorElement) => errorElement.textContent = "");
}