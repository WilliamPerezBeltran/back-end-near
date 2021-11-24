import { Context, PersistentVector,logging,PersistentUnorderedMap,math,PersistentMap} from "near-sdk-as";
import { Product,updateProductItem } from "./models/Product"
import { Comment,commentsVector } from "./models/Comment"
import { User,usersPersistentMap } from "./models/User"

export function registerUser(userName: string, userEmail: string): User {
	const newUser = new User(Context.sender, userName,userEmail,[],[]);
	usersPersistentMap.set(Context.sender, newUser)
	return newUser
}

export function registerProductUser(productName: string, productPrice: f64, productDescription: string,productQuantity:u32):string{
	const userId = Context.sender;
	const newProduct = createProduct(productName, productPrice, productDescription,productQuantity)
	const user = usersPersistentMap.get(userId)
	if(user){
		user.userProducts.push(newProduct)
		usersPersistentMap.set(userId,user)
		return `New product has been registered!`;
	}else{
		return "The user is not registered";
	}
}

export function getUserbyId(creator:string):User{
	const userId = creator;
	return usersPersistentMap.getSome(userId)
}

export function createProduct(productName: string, productPrice: f64, productDescription: string,productQuantity:u32):Product{
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

export function updateProduct(productId: u32,updateProduct: updateProductItem):Product{
	 return Product.update(productId,updateProduct);
}

export function createComment(commentId:number, creator: string, productId:u32):Comment{
		const comment = new Comment(commentsVector.length,Context.sender,productId);
		return comment 
}

export function addComment(productId: u32, descripcion:string):Comment{
	const allComments:Comment[] = getAllComments()
	const checkCommentArray:Comment[] = []

	for (var i = 0; i < allComments.length; ++i) {
		if(allComments[i].productId == productId ){
			checkCommentArray.push(allComments[i])
		}
	}

	if(checkCommentArray.length == 0){
		var arrayDescription:string[]; 
		arrayDescription = [descripcion] 

		const comment = createComment(commentsVector.length,Context.sender,productId);
		comment.descripcion = arrayDescription
		commentsVector.push(comment)	
		return comment
	}else{
		checkCommentArray[0].descripcion.push(descripcion)
		const commentId = checkCommentArray[0].commentId
		commentsVector.replace(commentId,checkCommentArray[0])
		return checkCommentArray[0]
	}
}

export function getAllComments():Comment[]{
	const comment:Comment[] =  new Array<Comment>(commentsVector.length)
	for (var i = 0; i < commentsVector.length; ++i) {
		comment[i] = commentsVector[i]
	}
	return comment
}





