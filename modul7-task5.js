/* Задание 7-5 */
class KitchenUnit {
    constructor(name, power) {
    this.plugStatus = false;
    this.name = name;
    this.power = power;
    }
  
    getPower() {
    console.log(`Потребляемая мощность - ${this.power} ВТ`);
    }
  
    plugIn() {
    console.log(this.name + " is plugged!");
    this.plugStatus = true;
    }
  }
  
  const kettle = new KitchenUnit('kettle', 2200);
  const owen = new KitchenUnit('owen', 800);
  
  kettle.plugIn();
  
  kettle.getPower();
  
  owen.plugIn();
  
  owen.getPower();