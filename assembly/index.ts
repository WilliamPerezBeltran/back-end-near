import { Context, PersistentVector,logging} from "near-sdk-as";
import { Product } from "./models/Product"
// import { Product,updateProductItem } from "./models/Product"

export function createProduct(productName: string, productPrice: f64, productDescription: string,productQuantity:i32):Product{
	return Product.insert(productName, productPrice, productDescription,Context.sender,productQuantity);
}

export function getproductById(productId: u32):Product{
	return Product.findProduct(productId);
}

export function deleteProductbyId(productId: u32):void{
	 Product.removeProduct(productId);
}

export function getAllProducts():Product[]{
	 return Product.getProducts();
}

// export function updateProduct(productId: u32,updateProduct: updateProductItem):Product{
// 	 return Product.update(productId,updateProduct);
// }


