'use strict';
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"]
const login = prompt('Введите логин');

function checkLoginValidity(login){
	const len = login.length;
	if ((3 < len) && (len < 17)) {return true};
	return false;
};

function checkIfLoginExists(logins, login){
	if (logins.includes(login)) {return true};
	return false;
};

function addLogin(logins, login){
	if (!checkLoginValidity(login)) {
		alert('Ошибка! Логин должен быть от 4 до 16 символов');
	} else if (checkIfLoginExists(logins, login)) {
		alert('Такой логин уже используется!')
	} else {
		logins.push(login);
		alert('Логин успешно добавлен!')
	}
};

addLogin(logins, login);
