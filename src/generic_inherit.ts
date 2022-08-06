interface Length {
  length: any;
}

function getLength<T extends Length>(value: T): T {
  console.log(value.length);
  return value;
}

const myLengthString = getLength('Hello Asiap santuy');
const myLengthNumber = getLength({length: 15});
const myLengthBoolean = getLength({length: true});
console.log(myLengthString);
console.log(myLengthNumber);
console.log(myLengthBoolean);