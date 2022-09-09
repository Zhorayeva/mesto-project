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

