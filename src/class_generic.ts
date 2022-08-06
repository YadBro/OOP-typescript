class Shirt<T> {

  public constructor(public classType: T){}
}

const theUnion: string | number = 'Hello' || 123;

// Hover your mouse in these variable
const shirtString = new Shirt('STRING');
const shirtBoolean = new Shirt(true || false);
const shirtUnion = new Shirt(theUnion);
const shirtNumber = new Shirt(12345);
const shirtNull = new Shirt(null);
const shirtUndefined = new Shirt(undefined);
const shirtArray = new Shirt(Array);
const shirtSymbol = new Shirt(Symbol('hello'));
const shirtAny = new Shirt((): any => {
  console.log('Hello')
});
const shirtVoid = new Shirt((): void => {
  console.log('Hello')
});
const shirtNever = new Shirt(() => {
  while (true) {
    console.log('HELLO');
  }
});

console.log(shirtString);
console.log(shirtBoolean);
console.log(shirtNumber);
console.log(shirtUnion);
console.log(shirtUndefined);
console.log(shirtNull);
console.log(shirtArray);
console.log(shirtSymbol);
console.log(shirtAny);
console.log(shirtVoid);
console.log(shirtNever);

console.log(typeof shirtString.classType);
console.log(typeof shirtBoolean.classType);
console.log(typeof shirtNumber.classType);
console.log(typeof shirtUnion.classType);
console.log(typeof shirtUndefined.classType);
console.log(typeof shirtNull.classType);
console.log(typeof shirtArray.classType);
console.log(typeof shirtSymbol.classType);
console.log(typeof shirtAny.classType);
console.log(typeof shirtVoid.classType);
console.log(typeof shirtNever.classType);


class A {
  public name: string = 'A';
}

class Baru<T> {
  public newClass: T;

  public constructor(theClass: T) {
    this.newClass = theClass;
  }
}

const classA = new A();
const classBaru = new Baru(classA);
console.log(classA);
console.log(classA.name);
console.log(classBaru);
console.log(classBaru.newClass);
console.log(classBaru.newClass.name);