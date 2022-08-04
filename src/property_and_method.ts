/*
  Perlu di ingat di OOP ada yang namanya enkapsulasi (encapsulation) atau hak akses;
  Enkapsulasi ini sangat penting bagi property dan method pada object class kita, karena
  ini akan melindungi data property dan juga method kita.

  Terdapat 3 enkapsulasi atau hak akses pada OOP, yaitu:
  - public = Bisa di akses di manapun, oleh class apapun dan oleh siapapun.
  - private = Hanya bisa di akses dari class itu sendiri tidak bisa di akses oleh class manapun, turunannya dan oleh siapapun.
  - protected = Bisa di akses oleh class itu sendiri beserta turunannya tidak bisa di akses dari luar instance object class itu sendiri.
*/



class Student {
  public name: string = '';
  public foot: number = 2;
  public human: boolean = false;

  public breath() {
    console.log(`${this.name} are breath.`);
  }
}

const yanto = new Student();
console.log(yanto);

yanto.name = 'Yanto Ganteng';
yanto.human = true;
console.log(yanto);

yanto.breath();