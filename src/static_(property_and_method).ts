/*
  Static property ataupun static method itu nempel di class bukan di instance objectnya.

  perlu di ingat apabila ingin mengakses property static kita bisa panggil class itu terlebih dahulu baru property staticnya.
  Tapi kalo ingin menggunakan keyword this. kita bisa menggunakan keyword this dengan method yang static.
*/

class Ayam {
  // static property
  public static kaki: number = 2;

  // static method
  public static getKaki(): void {
    console.log('Kaki ayam ada ' + this.kaki)
  }
}

console.log(Ayam.kaki);
Ayam.getKaki();