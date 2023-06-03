import { create } from 'zustand'

export type PostListing = {
  id: string;
  title: string;
  created: string;
}

export type Post = {
  id: string;
  author: string;
  title: string;
  created: string;
  content: string;
}

export type Comment = {
  author: string;
  created: string;
  content: string;
}

export type ApplicationState = {
  posts: PostListing[];
  selectedPost: Post | null;
  selectedPostComments: Comment[];

  setPosts: (posts: PostListing[]) => void;
  setSelectedPost: (post: Post | null) => void;
  setPostComments: (comments: Comment[]) => void;
}

export const useApplicationStore = create<ApplicationState>((set) => ({
  posts: [],
  selectedPost: null,
  selectedPostComments: [],

  setPosts: (posts: PostListing[]) => set(() => ({ posts })),
  setSelectedPost: (post: Post | null) => set(() => ({ selectedPost: post })),
  setPostComments: (comments: Comment[]) => set(() => ({ selectedPostComments: comments })),
}))
