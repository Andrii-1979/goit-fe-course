'use strict';
const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';
const login = prompt('Введите, пожалуйста, ваш логин - ');
if (!login) {alert("Отменено пользователем!")}
else if (login!==ADMIN_LOGIN) {alert('Доступ запрещен!')}
else {
    const password = prompt('Введите, пожалуйста, пароль - ');
    if (!password) {alert('Отменено пользователем!')}    
    else if (password!==ADMIN_PASSWORD) {alert('Доступ запрещен!')}
    else {alert('Добро пожаловать!')}
}