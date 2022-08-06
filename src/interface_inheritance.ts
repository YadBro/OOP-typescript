enum EEngineCar {
  hybrid = 'hybrid',
  electricity = 'electricity',
  matic = 'matic',
}


interface IEngine {
  engineType: EEngineCar,
}

interface ICar extends IEngine {
  name: string,
  type: string,
  wheels: number,
  door: number,
}


class Daihatsu implements ICar {
  public name: string = 'Daihatsu';
  public type: string;
  public wheels: number = 4;
  public door: number;
  public engineType: EEngineCar;

  public constructor(type: string, door: number, engineType: EEngineCar) {
    this.type = type;
    this.door = door;
    this.engineType = engineType;
  }

  public running(): void {
    console.log(`${this.name} ${this.type} is running.`);
  }
}

const daihatsuAyla = new Daihatsu('Ayla 1.2 R Deluxe AT', 4, EEngineCar.matic);
console.log(daihatsuAyla);
daihatsuAyla.running();