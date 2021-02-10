const total = 100;
const ordered = 50;
const messageFail = "На складе недостаточно твоаров!";
const messageAdvance = "Заказ оформлен, с вами свяжется менеджер";

const orderStatus = total > ordered ? messageAdvance : messageFail;

console.log(orderStatus);