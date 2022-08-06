// Abstract Class adalah sebuah karakteristik dalam OOP juga.
// Abstract (Gambar Umum)
// Abstract class merupakan proses untuk menyembunyikan detail implementasi dan hanya sisi fungsionalitas (gambaran umum) saja yang ditampilkan.

// Abstract class hanya kerangkanya saja tidak bisa di buat menjadi instance object baru


abstract class Induk {
  public getData(): string {
    return 'Ini adalah abstract induknya';
  }

  // Abstract pun bisa berlaku untuk method function dari class itu sendiri
  // Tetapi abstract pada method itu tidak memiliki block scope atau fungsi lanjutan. Apabila di paksa itu akan error.
  // Errornya : Method 'getData2' cannot have an implementation because it is marked abstract.
  public abstract getData2(): string;
}

class Anak extends Induk {

  // Wajib di override abstract method class parentnya!
  public getData2(): string {
    return 'Ini adalah method abstract dari parentnya (override)';
  }
}

let suparto = new Anak();
console.log(suparto.getData());
console.log(suparto.getData2());


abstract class Hewan {
  public name: string;
  
  public constructor(name: string) {
    this.name = name;
  }

  public abstract walk(): void;
}

class Lion extends Hewan {

  public constructor(public name: string = 'Udin') {
    super(name);
  }

  public walk(): void {
    console.log('The lion walked with it\'s foot');
  }
}

const myLion = new Lion();
console.log('My name lion is = ' + myLion.name);
myLion.walk()