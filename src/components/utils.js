import {closePopup} from "./modal.js";
import {createArticleElement} from "./card.js";
import {config} from "./api.js";
import {data} from "autoprefixer";

export function closeButtonClickHandler(evt){
    closePopup(evt.target.closest(".popup"));
}

export function prependElement(containerElement, card){
    containerElement.prepend(createArticleElement(card));
}

export const isMyId = (id) => {
    return config.myId === id;
}

export const setButtonText = (button, isLoading) => {
    button.textContent = isLoading ? "Сохранение..." : "Сохранить";
}

export const clearPopupErrors = (popup) => {
    popup.querySelectorAll(".popup__input").forEach((inputElement) => inputElement.classList.remove("popup__input_type_error"));
    popup.querySelectorAll(".popup__input-error").forEach((errorElement) => errorElement.textContent = "");
}
