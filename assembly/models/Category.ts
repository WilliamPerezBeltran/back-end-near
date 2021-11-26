import { PersistentVector } from "near-sdk-as";


@nearBindgen
export class Category {
  category: string;

  constructor(category: string) {
    this.category = category;
  }

   static insertCategory(category: string): Category {
    const newCategory = new Category(category);
    categoryVector.push(newCategory);
    return newCategory;
  }

  static findCategory(category: string): Category {
    const getCategory:Category[] = []
    for (var i = 0; i < categoryVector.length; ++i) {
      if(category == categoryVector[i].category){
        getCategory.push(categoryVector[i])
        break
      }
    }
    return getCategory[0]
  }

  static findIndexCategory(category: string): u32 {

    let index:u32 = 0
    const getCategory:Category[] = []
    for (var i = 0; i < categoryVector.length; ++i) {
      if(category == categoryVector[i].category){
        getCategory.push(categoryVector[i])
        index = i
        break
      }
    }
    return index
  }

  static removeCategory(category: string): void {
    const index = this.findIndexCategory(category)
    const newCategory =  this.findCategory(category);
    categoryVector.replace(index, newCategory)
  }

}

export const categoryVector = new PersistentVector<Category>("category");
