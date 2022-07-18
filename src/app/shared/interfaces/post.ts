export interface IPost{
  id: string,
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

export interface IPostDetail {
  id: number,
  title: string,
  content: string,
  status: string,
  userId: number,
  likes: number,
  comments: number,
  cover: string,
  recommend: boolean,
  isLiked: boolean,
  isInBookmark: boolean,
  user: any
}
