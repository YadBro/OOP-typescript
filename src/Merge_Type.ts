type Tes1 = {
  name: string,
}

type Tes2 = {
  age: number,
}

type Manusia = Tes1 & Tes2;

const yadi: Manusia = {
  name: 'Yadi Apriyadi',
  age: 19,
}

console.log(yadi);