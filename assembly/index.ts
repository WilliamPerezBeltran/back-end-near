import { Context, PersistentVector, logging, PersistentUnorderedMap, math, PersistentMap, u128} from "near-sdk-as";
import { Product,updateProductItem,productsMap } from "./models/Product"
import { Comment,commentsVector } from "./models/Comment"
import { User,usersPersistentMap } from "./models/User"
import { Opinion,opinionVector } from "./models/Opinion"
import { Category,categoryVector } from "./models/Category"

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

export function buyProduct(productId: u32): string {
  const attachedDeposit = (Context.attachedDeposit as u128)
  const sender = Context.sender;
  const product = Product.findProduct(productId)
  if (product) {
    const userId = Context.sender;
    const user = usersPersistentMap.get(userId)
    if (user) {
    	if(product.productAvailability){
	      if (attachedDeposit >= u128.from(product.productPrice)) {
	      	// disminuye una unidad en la cantidad de los productos 
	      	const currentQuantity = product.productQuantity-1
	      	product.productQuantity = currentQuantity 
	      	// actuliza el product user
	      	let indexProductInUser:u32 = 0
			for (var i = 0; i < user.userProducts.length; ++i) {
				if(user.userProducts[i].productId == product.productId){
					indexProductInUser = i
				}
			}
	        user.userProducts[indexProductInUser].productQuantity = currentQuantity 
	        // si no hay mas productos para vender la disponibilidad del producto queda en false
	        if(currentQuantity == 0){
	        	product.productAvailability = false
	        }
			// actualiza el productQuantity en productsMap
			productsMap.set(product.productId, product);
			// agrega el nuevo producto disminuyendo una cantidad del producto
	        user.userPurchasedProducts.push(product);
	        usersPersistentMap.set(userId,user)
	        return `${product.productName} was successfully purchased`
	      }
    	}else{
    		return `Product is not available any more, the quantity is equal to zero`
    	}
      return `The price of the price is higher: you inserted  ${attachedDeposit}NEAR`
    }
    return `User: ${userId} is not registered`
  }
  return `No product found`
}
					  // ejempl("like",1)
export function opinionProduct(opinion:string,opinionValue: u32,productId: u32): string {
  const sender = Context.sender;
  const product = Product.findProduct(productId)
  if (product) {
    const userId = Context.sender;
    const user = usersPersistentMap.get(userId)
    if (user) {
    	const instanceOpinion = new Opinion()
    	instanceOpinion.productId = product.productId
    	instanceOpinion.user = sender 
    	if(opinion == "like"){
    		instanceOpinion.like = instanceOpinion.like + 1
    	}else{
    		instanceOpinion.dislike = instanceOpinion.dislike + 1
    	}
        user.opinion.push(instanceOpinion)
        opinionVector.push(instanceOpinion)
        usersPersistentMap.set(userId,user)
        return `Opinion was successfully`
    }
    return `User: ${userId} is not registered`
  }
  return `No product found`
}

export function sumOpinionLiken(owner:string,productId: u32): string {
  const sender = Context.sender;
  const product = Product.findProduct(productId)
  if (product) {
    const userId = Context.sender;
    const user = usersPersistentMap.get(userId)
    if (user) {
    	let getOpinion:Opinion[] =  new Array<Opinion>(user.opinion.length)
		let sumLike:u32 = 0
		for (var i = 0; i < user.opinion.length; ++i) {
			sumLike = sumLike + user.opinion[i].like
		}
		return sumLike.toString()
    }
  }
  return ""
}

export function sumOpinionDisLiken(owner:string,productId: u32): string {
  const sender = Context.sender;
  const product = Product.findProduct(productId)
  if (product) {
    const userId = Context.sender;
    const user = usersPersistentMap.get(userId)
    if (user) {
    	let getOpinion:Opinion[] =  new Array<Opinion>(user.opinion.length)
		let sumLike:u32 = 0
		for (var i = 0; i < user.opinion.length; ++i) {
			sumLike = sumLike + user.opinion[i].dislike
		}
		return sumLike.toString()
    }
  }
  return ""
}

export function insertcategory(category: string):Category{
	return Category.insertCategory(category);
}

export function findcategory(category: string):void{
	 Category.findCategory(category);
}

export function findIndexcategory(category: string):void{
	 Category.findIndexCategory(category);
}

export function removecategory(category: string):void{
	 Category.removeCategory(category);
}

export function getAllCategories():Category[]{
	const category:Category[] =  new Array<Category>(categoryVector.length)
	for (var i = 0; i < categoryVector.length; ++i) {
		category[i] = categoryVector[i]
	}
	return category
}



