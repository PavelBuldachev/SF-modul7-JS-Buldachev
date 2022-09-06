/* Задание 7-4 */
function KitchenUnit(name, power) {
  this.plugStatus = false;
  this.name = name;
  this.power = power;
  }

  KitchenUnit.prototype.getPower = function(power) {
  console.log(`Потребляемая мощность - ${power} ВТ`);
  }

  KitchenUnit.prototype.plugIn = function () {
  console.log(this.name + " is plugged!");
  this.plugStatus = true;
  }

const kettle = new KitchenUnit('kettle');
const owen = new KitchenUnit('owen');

kettle.plugIn();

kettle.getPower(2200);

owen.plugIn();

owen.getPower(800);