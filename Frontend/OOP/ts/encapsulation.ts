/**
 * Процедурный подход
 */
const width = 5;
const height = 10;

function calcRectArea(width, height) {
  return width * height;
}

// ООП

/**
 * constructor - это специальный метод, некоторый блок инструкций
 * который вызывается при создании метода. Может принимать в себя некоторые аргументы.
 * Обычно в конструкторе свойствам объекта присваиваются присваиваются какие-то значения.
 * 
 * 
 * 
 */

/**
 * Есть класс прямоугольник
 * 
 * 
 * У него есть два свойства
 * 
 * ширирна 
 * высота
 * 
 * 
 * Вызовем набор правил при создании объекта, набор правил принимает аргументы w, h
 * 
 * Присвоим свойствам объекта значения
 * 
 * ширина = w (ширина теперь будет обозначаться w)
 * высота = h  (высота теперь будет обозначаться h)
 * 
 * У него метод
 * 
 * посчитать площадь этого прямоугольника  * Под this подразумевается объект у которого будет вызван этот метод
 * 
 * 
 */

class Rectangle {
  width;
  height;

  constructor(w, h) {
    this.width = w;
    this.height = h;
  }

  calcArea() {
    return this.width * this.height;
  }
}

/**
 * Создаем объект с помощью оператора new 
 * 
 * передаем
 * ширину 5
 * высоту 10
 * 
 * 
 * Посчитаем площадь
 */

const rect = new Rectangle(5, 10)
rect.calcArea()

/**
 * _ по соглашению нижнее подчеркивание в js означает, что св-во приватное.
 * При этом чаще всего все свойства делают приватными, за редким исключением.
 * 
 * А для того чтобы получать доступ к этим свойствам получать их или изменять
 * создаются геттеры и сеттеры
 */

class Rectangle2 {
  // высота является приватной и для нее не сделано геттеров и сеттеров
  private _width;
  private _height;

  constructor(w, h) {
    this._width = w;
    this._height = h;
  }

  public get width() {
    return this._width;
  }

  public set width(value) {
    if (value <= 0) {
      this._width = 1;
    } else {
      this._width = value;
    }
  }

  calcArea() {
    return this._width * this._height;
  }
}

const rect2 = new Rectangle2(5, 10)
rect2.width = -2;
console.log(rect2)

/**
 * id - позволяет однозначно определить того или иного пользователя
 * при создании объекта username и password класс User получаем извне, 
 * а id устанавливает самостоятельно с помощью generateRandomId тем самым
 * гарантируя его уникальность.
 * 
 * Так как свойства приватны нужно создать геттеры и сеттеры для управления
 * свойствами, а id можно только получать изменять нельзя
 */

class User {
  private _username;
  private _password;
  private _id;

  constructor(username, password) {
    this._username = username;
    this._password = password;
    this._id = generateRandomId();
  }

  get username() {
    return this._username;
  }

  set username(value) {
    this._username = value;
  }
  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }
  get id() {
    return this._id;
  }

}

const user = new User("Rick", "Sanchez")
user.username = 5;

/**
 * Свойства изменять не можем, но можем получать
 * 
 * Что бы добавлять таблицы в массив создадим отедльный метод createNewTavble 
 * который принимает аргументом таблицу и добавляет ее в таблицы методом push. 
 * Таким образом с помощью специального публичного метода мы взаимодействуем с
 * массивом tables, при этом сам tables изменять не можем.
 */

class Database {
  private _url;
  private _port;
  private _username;
  private _password;
  private _tables;

  constructor(url, port, username, password) {
    this._url = url;
    this._port = port;
    this._username = username;
    this._password = password;
    this._tables = [];
  }

  public createNewTavble(table) {
    this._tables.push(table)
  }

  public clearTables() {
    this._tables = []
  }

  public get url() {
    return this._url;
  }
  public get username() {
    return this._username;
  }
  public get password() {
    return this._password;
  }
  public get tables() {
    return this._tables;
  }
}

const db = new Database(1, 2, 3, 4)
db.createNewTavble({ name: 'Rick' })
db.createNewTavble({ name: 'BirdPerson' })
db.clearTables()
console.log(db)