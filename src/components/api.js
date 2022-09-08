export const config = {
		url: 'https://mesto.nomoreparties.co/v1/plus-cohort-14',
		headers: {
			authorization: '0dcfa538-92a2-4afe-989e-66160705b266',
			'content-type': 'application/json'
		},
		myId: ""
    };

const fetchResult = (promise) => {
	return promise
		.then((res) => {
			if (res.ok){
				return res.json();
			}
			return Promise.reject(`something wrong: ${res.statusText}`);
		})
		.catch((error) => {
			console.log(error);
		});
}

export const getInitialCards = () => {
	return fetchResult(fetch (`${config.url}/cards`, {
        headers: config.headers
    }));
}

export const getProfileInfo = () => {
	return fetchResult(fetch (`${config.url}/users/me`, {
		headers: config.headers
	}));
}

export const setProfileInfo = (name, description) => {
	return fetchResult(fetch(`${config.url}/users/me`, {
		method: 'PATCH',
		headers: config.headers,
		body: JSON.stringify({
			name: name,
			about: description
		})
	}));
}

export const addNewCard = (name, link) => {
	return fetchResult(fetch(`${config.url}/cards`, {
		method: 'POST',
		headers: config.headers,
		body: JSON.stringify({
			name: name,
			link: link
		})
	}));
}

export const deleteCard = (cardId) => {
	return fetchResult(fetch(`${config.url}/cards/${cardId}`, {
		method: 'DELETE',
		headers: config.headers,
	}))
}

export const setProfileAvatar = (link) => {
	return fetchResult(fetch(`${config.url}/users/me/avatar`, {
		method: 'PATCH',
		headers: config.headers,
		body: JSON.stringify({
			avatar: link
		})
	}));
}

export const like = (cardId) => {
	return fetchResult(fetch(`${config.url}/cards/likes/${cardId}`, {
		method: 'PUT',
		headers: config.headers
	}));
}

export const unlike = (cardId) => {
	return fetchResult(fetch(`${config.url}/cards/likes/${cardId}`, {
		method: 'DELETE',
		headers: config.headers
	}));
}