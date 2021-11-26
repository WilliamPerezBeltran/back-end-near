import { PersistentVector, Context, PersistentUnorderedMap,math, logging} from "near-sdk-as";

@nearBindgen
export class Opinion{
	public like: u32 = 0;
	public dislike: u32 = 0;
	public productId: u32 = 0
	public user: string 

	// constructor(
	// 	like:u32,
	// 	dislike:u32,
	// ){
	// 	this.like = like;
	// 	this.dislike = dislike;
	// }
}

export const opinionVector = new PersistentVector<Opinion>("opinion");
