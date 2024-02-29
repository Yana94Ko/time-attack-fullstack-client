export type Deal = {
  id: number;
  authorId: string;
  bookmarksCount: number;
  title: string;
  content: string;
  price: number;
  hit: number;
  imgUrl: string;
  createdAt: string;
  updatedAt: string;
  bookmarks: [];
};
