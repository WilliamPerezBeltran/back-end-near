import { PersistentMap } from "near-sdk-as";
import { Product } from "./Product";
import { Opinion } from "./Opinion";

@nearBindgen
export class User {
  userId: string;
  userName: string;
  userEmail: string;
  userProducts: Product[];
  userPurchasedProducts: Product[];
  opinion: Opinion[];
  constructor(
    userId: string,
    userName: string,
    userEmail: string,
    userProducts: Product[],
    userPurchasedProducts: Product[],
  ) {
    this.userId = userId;
    this.userName = userName;
    this.userEmail = userEmail;
    this.userProducts = userProducts;
    this.userPurchasedProducts = userPurchasedProducts;
    this.opinion = [];
  }
}

export const usersPersistentMap = new PersistentMap<string, User>("users");
