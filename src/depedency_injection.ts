interface IStore {
  name: string,
  getProfit(): number,
}

class TokoBaru implements IStore{
  public name: string = 'Toko Baru';
  private profit: number = 2500;


  public getProfit(): number {
    return this.profit;
  }
}

class TokoLama implements IStore{
  public name: string = 'Toko Lama';
  private profit: number = 1000;


  public getProfit(): number {
    return this.profit;
  }
}

class HijabProduct {
  public store: IStore;
  public name: string;
  public price: number;

  public constructor(store: IStore, name: string, price: number) {
    this.name = name;
    this.store = store;
    this.price = price;
  }

  public sell(): void {
    console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
  }
}

class FoodProduct {
  public store: IStore;
  public name: string;
  public price: number;

  public constructor(store: IStore, name: string, price: number) {
    this.name = name;
    this.store = store;
    this.price = price;
  }

  public sell(): void {
    console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
  }
}

const tokoLama = new TokoLama();
const tokoBaru = new TokoBaru();

const hijabBagus = new HijabProduct(tokoBaru, 'Bagus', 25000);
const makanBagus = new FoodProduct(tokoLama, 'SEAFOOD', 25000);
console.log(hijabBagus);
console.log(makanBagus);
hijabBagus.sell();
makanBagus.sell();
