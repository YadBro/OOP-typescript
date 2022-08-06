namespace NamespaceExample {
  export class Human {
    public name: string = 'Human';
  }

  export const myHuman = new Human();

  console.log(myHuman);
}

const tes = new NamespaceExample.Human();
console.log(tes);