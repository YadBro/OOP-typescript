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

  // To get a property use keyword super
  getStepMotherName() {
    return super.motherName = this.stepMotherName; // override
  }

  // And then how to get a motherName this child, same example on above
  getMotherName() {
    return super.motherName;
  }
}

const maman = new Child2();
console.log(maman.getStepMotherName()); // The result: Siti Maimunah
console.log(maman.getMotherName()); // The result: undefined (karena propertynya belum di defined ke constructor)