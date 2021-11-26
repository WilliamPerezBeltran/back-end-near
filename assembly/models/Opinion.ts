import { PersistentVector, Context, PersistentUnorderedMap,math, logging} from "near-sdk-as";

@nearBindgen
export class Opinion{
	public like: u32 = 0;
	public dislike: u32 = 0;
	public productId: u32 = 0
	public user: string 

}

export const opinionVector = new PersistentVector<Opinion>("opinion");
