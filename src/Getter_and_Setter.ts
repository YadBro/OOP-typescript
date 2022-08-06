enum MerkPencil {
  '2B' = '2B',
  'Faber Castel' = 'Faber Castel',
  '3B' = '3B',
}

enum EPencilPrice {
  '2B' = 3000,
  'Faber Castel' = 4000,
  '3B' = 5000,
}

enum EProductDiscount {
  YADBROCHANNEL = 0.05,
}

abstract class Product {
  public merk: string;

  public constructor(merk: MerkPencil) {
    this.merk = merk;
  }

}


class Pencil extends Product {

  private _price: number = 0;

  public constructor(merk: MerkPencil) {
    super(merk);
  }

  public get price(): any | number {
    switch (this.merk) {
      case '2B':
        return this._price = this._price || EPencilPrice["2B"];
      case 'Faber Castel':
        return this._price = this._price || EPencilPrice["Faber Castel"];
      case '3B':
        return this._price = this._price || EPencilPrice["3B"];
      default:
        return 'Please pencil type correct!';
    }
  }


  public set discountCode(code: any) {
    switch (code) {
      case 'YADBRO CHANNEL':
        if (this.merk === MerkPencil["2B"]){
          this._price = EPencilPrice["2B"] - (EPencilPrice["2B"] * EProductDiscount.YADBROCHANNEL);
        }else if (this.merk === MerkPencil["3B"]){
          this._price = EPencilPrice["3B"] - (EPencilPrice["3B"] * EProductDiscount.YADBROCHANNEL);
        }else if (this.merk === MerkPencil["Faber Castel"]){
          this._price = EPencilPrice["Faber Castel"] - (EPencilPrice["Faber Castel"] * EProductDiscount.YADBROCHANNEL);
        }
        break;
      default:
        console.log('Please input discount correct');
    }
  }
}

const pencil = new Pencil(MerkPencil["3B"]);
const discount = 'YADBRO CHANNEL'
console.log('Before Discount = ' + pencil.price);
pencil.discountCode = discount;
console.log('Discount = ' + discount + ' (' + EProductDiscount.YADBROCHANNEL + ')')
console.log('After Discount = ' + pencil.price);