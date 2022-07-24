// Gunakan keyword implements untuk menggunakan interfacenya
// Dalam 1 class bisa banyak mengimplementasikan interface.

import {MorningActivity, NoonActivity} from "./interface";

abstract class Ortu {
  public abstract parentName: string;
}

class AnakBaik extends Ortu implements MorningActivity, NoonActivity {
  public parentName: string = 'Siti Jubaedah';
  public name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  public eat(): void {
    console.log(this.name + ' Breakfast.');
  }

  public lunch(): void {
    console.log(this.name + ' Lunch.');
  }
}

const tatang = new AnakBaik('Tatang');
console.log(tatang.parentName);
console.log(tatang.name);
tatang.eat();
tatang.lunch();