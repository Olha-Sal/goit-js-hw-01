let cost;
let country = prompt('Введите название страны');
let message;
console.log(country);

if (country !== null) {
 
  let lowerCountry = country.toLowerCase();
  
switch (lowerCountry) {
  case 'китай':
    cost = 100;
    break;
  
  case 'чили':
    cost = 250;
    break;
  
  case 'австралия':
    cost = 170;
    break;
  
  case 'индия':
    cost = 80;
    break;
  
  case 'ямайка':
    cost = 120;
    break;
  
  default:
    alert('В вашей стране доставка не доступна')
}

if (cost) {
  console.log(message = `Доставка в ${country} будет стоить ${cost} кредитов`);
  alert(message);
  }
} 
