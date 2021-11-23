import { Context, PersistentVector,logging} from "near-sdk-as";
import { Product } from "./models/Product"

export function createProduct(productName: string, productPrice: f64, productDescription: string,productQuantity:i32):Product{
	return Product.insert(productName, productPrice, productDescription,Context.sender,productQuantity);
}

