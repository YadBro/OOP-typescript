function getPropertyValue<T, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

const myObj = {a: 1, b: 2, c: 3};
const myObjPropertyValue = getPropertyValue(myObj, "c");
console.log(myObjPropertyValue);