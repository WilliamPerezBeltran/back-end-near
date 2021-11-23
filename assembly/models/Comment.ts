import { PersistentVector, Context, PersistentUnorderedMap,math, logging} from "near-sdk-as";

// export const commentsMap = new PersistentUnorderedMap<u32, Comment[]>("product");
export const commentsVector = new PersistentVector<Comment>("comment");

@nearBindgen
export class Comment{
	public commentId: number;
	public creator: string;
	public productId: u32;
	public descripcion: string[];

	constructor(
		commentId:number,
		creator: string,
		productId:u32,
	){
		this.commentId = commentId;
		this.creator = creator;
		this.productId = productId;
	}

	


}

