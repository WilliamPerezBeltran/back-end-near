import { PersistentVector, Context, PersistentUnorderedMap,math, logging} from "near-sdk-as";
export const commentsVector = new PersistentVector<Comment>("comment");

@nearBindgen
export class Comment{
	public commentId: u32;
	public creator: string;
	public productId: u32;
	public descripcion: string[];

	constructor(
		commentId:u32,
		creator: string,
		productId:u32,
	){
		this.commentId = commentId;
		this.creator = creator;
		this.productId = productId;
	}
}

