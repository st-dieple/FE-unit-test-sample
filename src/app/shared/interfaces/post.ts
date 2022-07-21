export interface IPost{
  id: number,
  title: string,
  description: string,
  content: string,
  status: string,
  tags: String[],
  userId: string,
  like: string,
  comments: string,
  cover: string,
  recommend: boolean,
  deletedAt: any,
  createdAt: any,
  updatedAt: any,
  user: any
};
