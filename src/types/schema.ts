export type IUser = {
  _id: string;
  id: string;
  username: string;
  name: string;
  image: string;
  bio: string;
  threads: IThread[];
  onboarded: boolean;
  communities: ICommunity[];
};

export type IThread = {
  _id: string;
  text: string;
  author: IUser;
  community: ICommunity | string;
  createdAt: string;
  parentId: string;
  children: IThread[];
};

export type ICommunity = {
  _id: string;
  id: string;
  username: string;
  name: string;
  image: string;
  bio: string;
  createdBy: IUser;
  threads: IThread[];
  members: IUser[];
};
