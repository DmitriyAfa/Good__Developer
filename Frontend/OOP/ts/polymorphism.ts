/**
 * ad-hoc
 */

/*
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
  add(a: string, b: string): string {
    return a + b;
  }
}

add(5, 5) -> result = 10
add("5", "5") -> result = "55"
*/

/**
 * Создадим новый метод 
 */
// @ts-ignore
class Person {
  private _firstName;
  private _lastName;
  private _age;

  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  public greeting() {
    console.log(`Привет я человек и меня зовут ${this._firstName}`)
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
// @ts-ignore
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

  greeting() {
    console.log(`Привет я работник и меня зовут ${this._firstName}`);
  }
}
// @ts-ignore
const employee1 = new Employee("Rick", "Sanchez", 72, 15, 15, 15)

console.log(employee1)

// @ts-ignore
class Developer extends Employee {
  private level;

  constructor(firstName, lastName, age, inn, number, snils, level) {
    super(firstName, lastName, age, inn, number, snils);
    this.level = level;
  }

  greeting() {
    console.log(`Привет я разраб и меня зовут ${this._firstName}`);
  }
}

// @ts-ignore
const rickTv = new Developer("Rick", "Sanchez", 72, 15, 15, 15, "The God")
const employee = new Employee("Employee", "Sanchez", 72, 15, 15, 15)
const person = new Person("Person", "TV", 15)

// rickTv.greeting()
// employee.greeting()
// person.greeting()


/**
 * Что бы друг друга поприветствовать создадим массив который содержит в себе
 * rickTv, employee, person
 * и укажем, что это массив типа Person
 * 
 * После чего создадим функцию массовое приветствие 
 * function massGreeting
 * Вызвав функцию со списком персон функцию попреветствует должным образом,
 * не смотря на то, что класс Developer или Employee внутри функции massGreeting
 * не задействованы. Но отработали соответсвующие методы - данный механизм 
 * и называется полиморфизмом  
 */
const personList: Person[] = [rickTv, employee, person];

function massGreeting(persons: Person[]) {
  for (let i = 0; i < persons.length; i++) {
    const person = persons[i]
    person.greeting()
  }
}

massGreeting(personList)