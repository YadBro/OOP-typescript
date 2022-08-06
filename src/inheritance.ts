// Inheritance adalah pewarisan dari induk itu sendiri, kalo di real life ibarat kata seperti
// Seorang anak mirip wajah seperti ibunya atau
// Seorang anak warna rambutnya seperti bapaknya, dst.

class Parent {
  public motherName: string = 'Siti Jubaedah';
  public fatherName: string = 'Ahmad Subarjo';
}

// Untuk melakukan inheritance atau pewarisan sifat gunakan keyword (extends) pada child class
class Child extends Parent {
  public childName: string = 'Mamad Subarjo';

  getMotherName(): string {
    return this.motherName;
  }

  getFatherName(): string {
    return this.fatherName;
  }
}

// Jadi memang di child class tidak ada property parentName tetapi di karenakan dia sudah mewarisi sifat induknya
// maka parentName pun bisa ada. Dan javascript atau typescript akan mencari terlebih dahulu property parentName itu
// ada atau tidak di child class apabila tidak ada maka dia akan mencari ke parentnya atau extendsnya

// Dalam inheritance pada javascript / typescript ataupun pada bahasa pemograman lainnya inheritance itu si class anak akan
// mewarisi variable dan method pada parentnya

let udin = new Child(); // intance object baru dari class child dengan nama udin
console.log(udin.getMotherName()); // The result: Siti Jubaedah
console.log(udin.getFatherName()); // The result: Siti Jubaedah

// CATATAN
// Dalam inheritance seorang child hanya bisa mengextends 1 parent saja tidak boleh lebih`

interface AndroidPhone {
  name: string;
  menu(): void;
  home(): void;
  back(): void;
}

class Samsung implements AndroidPhone {
  public name: string;

  public constructor(name: string) {
    this.name = name;
  }
  menu(): void {
    throw new Error("Method not implemented.");
  }
  home(): void {
    throw new Error("Method not implemented.");
  }
  back(): void {
    throw new Error("Method not implemented.");
  }

}