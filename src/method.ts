// Untuk membuat class kita gunakan sebuah keyword class

class Cooking { // class
  public recipe: string[] = ['bawang bodas', 'bawang beureum'];

  getRecipe() {
    return this.recipe;
  }
}

let cooking = new Cooking(); // instance class
console.log(cooking.recipe);
console.log(cooking.getRecipe());