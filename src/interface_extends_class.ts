enum EDollMerk {
  avanza = 'Avanza',
  daihatsu = 'Daihatsu',
}



class Doll {
  public name: string;

  public constructor(name: string) {
    this.name = name;
  }
}

interface IDollMerk extends Doll {
  dollMerk: EDollMerk;
  move(): void;

}

class Barbie implements IDollMerk{
  public name: string = 'Barbie';
  public dollMerk: EDollMerk;

  public constructor(dollMerk: EDollMerk) {
    this.dollMerk = dollMerk;
  }

  public move() {
    console.log(`${this.name} omg he moved`);
  }

}


const myBarbie = new Barbie(EDollMerk.avanza);
console.log(myBarbie);
myBarbie.move();