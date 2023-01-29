// Агрегация
// @ts-ignore
class Engine {
    drive() {
        console.log(`Двигатель работает`);
    }
}
// @ts-ignore
class Wheel {
    drive() {
        console.log(`Колеса едут`);
    }
}
/**
 * Создадим класс Freshener
 *
 * укажим что освежитель является свойством в классе Car и инициализировать
 * freshener будем откуда-то извне принимая параметром конструктора.
 * Основное отличие, что освежитель является отдельной жизнью не зависимо от
 * класса Car.
 * Если удалить объект класса Car, то двигатель и колеса удалятся вслед за ним,
 * а осежитель продолжит жить своей жизнью
 */
class Freshener {
    constructor(number) {
        this._number = number;
    }
    get number() {
        return this._number;
    }
}
// Агрегация
class Home {
    constructor(freshener) {
        this.freshener = freshener;
    }
}
// @ts-ignore
class Car {
    constructor(freshener) {
        // инициализация
        this.wheels = [];
        // Агрегация
        this.freshener = freshener;
        // Композиция
        this.engine = new Engine();
        this.wheels = [];
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
        this.wheels.push(new Wheel());
    }
    // делегация 
    drive() {
        this.engine.drive();
        for (let i = 0; i < this.wheels.length; i++) {
            this.wheels[i].drive();
        }
    }
}
const freshener = new Freshener(5);
// @ts-ignore
const bmw = new Car(freshener);
bmw.drive();
console.log(bmw);
