// Overriding adalah sebuah cara untuk menimpa atau mengset ulang nilai dari si parentnya;

// Contoh kasus:
/*
  Di sini kita akan membuat sebuah class ibu dan anak yang di mana anak sudah punya ibu tiri
  dan kita akan mengoverriding nama dari ibu kandungnya
*/

class Mother { // Ibu Kandung
  public motherName: string = 'Yunani Watasio';
}

class Child2 extends Mother { // Anak kedua
  public stepMotherName: string = 'Siti Maimunah';

  getStepMotherName() {
    return this.motherName = this.stepMotherName; // override
  }
}

const maman = new Child2();
console.log(maman.getStepMotherName()); // The result: Siti Maimunah