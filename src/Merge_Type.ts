type Tes1 = {
  name: string,
}

type Tes2 = {
  age: number,
}

type Manusia = Tes1 & Tes2; // merge
type Manusia2 = Tes1 | Tes2; // union

const yadi: Manusia = {
  name: 'Yadi Apriyadi',
  age: 19,
}

console.log(yadi);

const udinTerpesona: Manusia2 = {
  name: 'Udin Terpesona',
}

console.log(udinTerpesona);