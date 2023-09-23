import { SortOrder } from "mongoose";
import { IThread, IUser } from "./schema";

/* user-actions */
export interface IUpdateUser {
  userId: string;
  username: string;
  name: string;
  bio: string;
  image: string;
  path: string;
}

export interface IFetchUsers {
  userId: string;
  searchString?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: SortOrder;
}

/* thread-actions */
export interface ICreateThread {
  text: string;
  author: string;
  communityId: string | null;
  path: string;
}

export interface IAddCommentToThread {
  threadId: string;
  commentText: string;
  userId: string;
  path: string;
}
