class Person {
  private _firstName;
  private _lastName;
  private _age;

  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  public get fullName() {
    return `Имя - ${this._firstName} Фамилия -${this._lastName}`
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    this._lastName = value;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    if (value < 0) {
      this._age = 0
    } else {
      this._age = value;
    }
  }
}

/**
 * Создаем класс Работник и расширим его от Person. 
 * Класс имеет свойства и методы класса Person;
 * 
 * Создадим приватные свойства inn, number, snils
 * вызовем конструктор который принимает все поля, которые принимал родительский
 * конструктор, но помимо этого он принимает так же inn, number, snils
 * 
 * вызов функции super говорит о том, что в первую очередь будет вызван родительский
 * конструктор и только потом будем выполнять какие-либо действия в классе Employee.
 * 
 */

class Employee extends Person {
  private inn;
  private number;
  private snils;

  constructor(firstName, lastName, age, inn, number, snils) {
    super(firstName, lastName, age);
    this.inn = inn;
    this.number = number;
    this.snils = snils;
  }
}

const employee1 = new Employee("Rick", "Sanchez", 72, 15, 15, 15)

console.log(employee1)

class Developer extends Employee {
  private level;

  constructor(firstName, lastName, age, inn, number, snils, level) {
    super(firstName, lastName, age, inn, number, snils);
    this.level = level;
  }
}

const rickTv = new Developer("Rick", "Sanchez", 72, 15, 15, 15, "The God")
console.log(rickTv.fullName)