/**
 * Унаследоваться можем только от одного класс, но имплементировать можем
 * множество interface
 */
interface Reader {
  read(url);
}

interface Writer {
  write(data)
}

/**
 * Класс имплементирует Reader и Writer 
 * под имплементацией подразумевается, что класс должен реализовать все методы
 * которые есть в интерфейсе
 */

class FileClient implements Reader, Writer {
  read(url: any) {
    // логика
  }

  write(data: any) {
    // логика
  }
}


