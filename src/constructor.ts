/*
Apa itu Constructor? Constructor adalah method khusus yang akan dieksekusi pada saat pembuatan objek (instance). Biasanya method ini digunakan untuk inisialisasi atau mempersiapkan data untuk objek.

www.petanikode.com/java-oop-constructor/

lebih simplenya untuk menginisialisasikan object itu sendiri.
*/

class Fruits {
  public vitamin: string;

  constructor(name: string, vitamin: string) {
    console.log('Aku orang tua ' + name);
    this.vitamin = vitamin;
  }

}

class Fruit extends Fruits {
  public name: string;

  // Apabila ingin membuat constructor pada child classnya kita di wajibkan memanggil constructor punya parentnya.
  // dengan menggunakan keyword super juga
  constructor(name: string, vitamin: string) {
    super(name, vitamin);
    this.name = name;
    console.log('Aku ' + this.name);
  }

  public getVitamin(): string {
    return this.name + ' mengandung vitamin sebanyak '+ this.vitamin;
  }
}

const pepaya1 = new Fruit('Pepaya', '20%');
const pepaya2 = new Fruit('Apel', '50%');


// Constructor akan di eksekusi pertama kalinya
console.log(pepaya1);
console.log(pepaya1.getVitamin());
console.log(pepaya2);
console.log(pepaya2.getVitamin());