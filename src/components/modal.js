export const imagePopupElement = document.querySelector("#image-popup");
export const popupImage = document.querySelector(".popup__image");
export const popupTitle = document.querySelector(".popup__image_title");

export const popupCloseButtonsList = document.querySelectorAll(".popup__close");

export function closePopup(popup){
    popup.classList.remove("popup_opened")
}

export function openPopup(popup){
    popup.classList.add("popup_opened");
}

export function closeOverlay() {
    const popupList = Array.from(document.querySelectorAll('.popup'));
    popupList.forEach((popupElement) => {
        popupElement.addEventListener('click', (evt) => {
            closePopup(evt.target);
        });
    });
};

export function closeEsc() {
    document.addEventListener('keydown', (evt) => {
        console.log(evt.key);
        if (evt.key === 'Escape') {
            closePopup(document.querySelector('.popup_opened'));
        };
    });
}