import { PersistentUnorderedMap, math } from "near-sdk-as";

export const productsMap = new PersistentUnorderedMap<u32, Product>("product");


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

  


}
