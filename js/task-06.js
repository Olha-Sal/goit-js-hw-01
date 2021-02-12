let total = 0;
let input;

do {
  input = prompt('Bведите число');

  if (input === null) {
    // console.log(input);
    break;
  }

  input = Number(input);
  const notNumber = Number.isNaN(input);

  if (notNumber) {
    alert(`Было введено не число, попробуйте еще раз`);
    continue;
  }

  total += input;

} while (true);

console.log(`Общая сумма чисел равна ${total}`);
alert(`Общая сумма чисел равна ${total}`);