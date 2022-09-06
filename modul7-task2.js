/* Задание 7-2
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false. */
let address = {
    city: "Moscow",
    street: "Neglinnaya",
    building: 8
  }
  
  "city" in address; // true
  "street" in address; // true
  "building" in address; // true
  "room" in address; // false