import { PersistentUnorderedMap, math, logging} from "near-sdk-as";
export const productsMap = new PersistentUnorderedMap<u32, Product>("product");

// @nearBindgen
// export class updateProductItem {
//   productName: string;
//   productPrice: f64;
//   productDescription: string;
//   productQuantity: u32;
// }



@nearBindgen
export class Product {
  productId: u32;
  productName: string;
  productPrice: f64;
  productDescription: string;
  productOwner: string;
  productQuantity: u32;
  productAvailability:boolean;

  constructor(productName: string, productPrice: f64, productDescription: string,productOwner:string,productQuantity:i32) {
    this.productId = math.hash32<string>(productName);
    this.productName = productName;
    this.productPrice = productPrice;
    this.productDescription = productDescription;
    this.productOwner = productOwner;
    this.productQuantity = productQuantity;
    this.productAvailability = true;
  }

   static insert(productName: string, productPrice: f64, productDescription: string,productOwner:string,productQuantity:i32): Product {
    // create a new product
    const product = new Product(productName, productPrice, productDescription,productOwner,productQuantity);

    // add product to map he productsMap
    productsMap.set(product.productId, product);
    return product;
  }

  static findProduct(productId: u32): Product {
    // Find product by id 
    return productsMap.getSome(productId);
  }

  static removeProduct(productId: u32): void {
    // delete product by id 
     productsMap.delete(productId);
  }

  static getProducts(): Product[] {
     // get all products 
      return productsMap.values(0, productsMap.length);
  }

  // static update(productId: u32,updateProduct:updateProductItem): Product {
  //    // find product
  //    const product = this.findProduct(productId)
  //    product.productName = updateProduct.productName
  //    product.productPrice = updateProduct.productPrice
  //    product.productDescription = updateProduct.productDescription
  //    product.productQuantity = updateProduct.productQuantity

  //   // persist the updated todo
  //   productsMap.set(productId, product);
  //   return product;
  // }

  



}
