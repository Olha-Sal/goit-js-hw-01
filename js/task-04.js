let credits = 23580;
let pricePerDroid = 3000;
const quantity = prompt('Введите количество');
let message;
let totalPrice = 0;
let sum;

if (quantity === null) {
  message = 'Отменено пользователем!';
  alert(message);
} else {
  totalPrice = quantity * pricePerDroid;
  console.log(totalPrice);
}
  

if (credits < totalPrice) {
  message = 'Недостаточно средств на счету!';
} else {
  sum = credits - totalPrice;
  console.log(message = `Вы купили ${quantity} дроидов, на счету осталось ${sum} кредитов.`);
  alert(message);
}