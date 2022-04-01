import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

interface IPost {
  id: string;
  title: string;
}

const initialState: {
  loading: boolean;
  data: IPost[];
} = {
  loading: false,
  data: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    searchPosts(state, action: PayloadAction<{ keyword: string }>) {
      state.loading = true;
      state.data = [];
    },
    searchPostsSuccess(state, action: PayloadAction<{ posts: IPost[] }>) {
      state.loading = false;
      state.data = action.payload.posts;
    },
    searchPostsFail(state, action: PayloadAction) {
      state.loading = false;
      state.data = [];
    },
  },
});

export const { searchPosts, searchPostsSuccess, searchPostsFail } =
  postsSlice.actions;

export default postsSlice.reducer;
