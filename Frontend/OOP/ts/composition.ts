
// Композиция

/**
 * У двигателя и колеса создадим метод drive в котором выведем что-нибудь
 * в консоль логи.
 */
class Engine {
  drive() {
    console.log(`Двигатель работает`)
  }
}

class Wheel {
  drive() {
    console.log(`Колеса едут`)
  }
}

/**
 * В классе Автомобиля объявляем, что у Автомобиля будет один двигатель и
 * массив колес.
 * 
 * После в конструкторе инициализируем двигатель (создаем новый объект)
 * и в массив добавляем 4 объекта колеса. - Здесь самое важное, что объекты
 * создаются внутри конструктора класса Car, они не создаются где-то вне.
 * 
 * 
 * Внутри класса Car создадим одноименный метод drive и внутри вызовем соответсвующий
 * метод у двигателя и каждого колеса
 */
class Car {
  engine: Engine;
  wheels: Wheel[] = [];

  constructor() {
    // инициализация

    this.engine = new Engine()
    this.wheels = []
    this.wheels.push(new Wheel())
    this.wheels.push(new Wheel())
    this.wheels.push(new Wheel())
    this.wheels.push(new Wheel())
  }

  // делегация 
  drive() {
    this.engine.drive();
    for (let i = 0; i < this.wheels.length; i++) {
      this.wheels[i].drive()
    }
  }
}

const bmw = new Car()
bmw.drive()