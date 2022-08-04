/*
  readonly simplenya adalah sebuah variable constanta yang ada pada javascript tetapi readonly ini digunakan di dalam class.
*/

class Book {
  readonly page: number = 1;
}

const mybook = new Book();
console.log(mybook.page);

// mybook.page = 2; // ini error, Cannot assign to 'page' because it is a read-only property.
// console.log(mybook);