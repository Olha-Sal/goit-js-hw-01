const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const userLog = prompt('Введите пароль');

if (userLog === null) {
  message = 'Отменено пользователем!';
} else if (userLog === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
} 

alert(message);