/* Задание 7-1
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение. */
const address = {
    city: 'Moscow',
    street: 'Neglinnaya',
    bilding: 8
  }
  function showAddress(arg) {
  for (let [key, value] of Object.entries(arg)) {
    console.log(`${key}: ${value}`);
   } 
  }
  
  showAddress(address)