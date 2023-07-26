import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createBlogService, deleteBlogService, getAllBlogService, getDetailBlogService, getIsShowService, updateBlogService } from "../../services/blogService";

const initialState = {
    isLoading: false,
    listBlog: [],
    blog: {}
}

export const getAllBlogsAsync = createAsyncThunk('getAllBlogs', async () => {
    const response = await getAllBlogService();
    return response.data
})
export const getIsShowsAsync = createAsyncThunk('getIsShowBlogs', async (id) => {
  const response = await getIsShowService(id);
  return response.data
})

export const getDetailBlogsAsync = createAsyncThunk('getDetailBlogs', async (id) => {
    const response = await getDetailBlogService(id);
    return response.data
})
export const deleteBlogAsync = createAsyncThunk(
    "deleteBlog",
    async (id) => {
      const response = await deleteBlogService(id);
      return response.data;
    }
  );
  export const createBlogAsync = createAsyncThunk(
    "createBlog",
    async (params) => {
      const response = await createBlogService(params);
      return response.data;
    }
  );
  export const updateBlogAsync = createAsyncThunk(
    "updateBlog",
    async (params) => {
      const response = await updateBlogService(params.id, params);
      return response.data;
    }
  );
  

export const blogHomeSlice = createSlice({
    name: 'newzingBlog',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAllBlogsAsync.pending, state => {
                state.isLoading = true;
            })
            .addCase(getAllBlogsAsync.fulfilled, (state, action) => {
                if (action.payload) {
                    state.isLoading = false;
                    state.listBlog = action.payload
                }
            })

            .addCase(getDetailBlogsAsync.pending, state => {
                state.isLoading = true;
            })
            .addCase(getDetailBlogsAsync.fulfilled, (state, action) => {
                if (action.payload) {
                    state.isLoading = false;
                    state.blog = action.payload
                }
            })
            .addCase(deleteBlogAsync.pending, (state) => {
                state.isLoading = true;
              })
              .addCase(deleteBlogAsync.fulfilled, (state, action) => {
                if (action.payload) {
                  state.isLoading = false;
                  state.Blog = action.payload;
                }
              })
              .addCase(createBlogAsync.pending, (state) => {
                state.isLoading = true;
              })
              .addCase(createBlogAsync.fulfilled, (state, action) => {
                if (action.payload) {
                  state.isLoading = false;
                  state.Blog = action.payload;
                }
              })
              .addCase(updateBlogAsync.pending, (state) => {
                state.isLoading = true;
              })
              .addCase(updateBlogAsync.fulfilled, (state, action) => {
                if (action.payload) {
                  state.isLoading = false;
                  state.Blog = action.payload;
                }
              })
              .addCase(getIsShowsAsync.pending, (state) => {
                state.isLoading = true;
              })
              .addCase(getIsShowsAsync.fulfilled, (state, action) => {
                if (action.payload) {
                  state.isLoading = false;
                  state.Blog = action.payload;
                }
              });
    }
})
export const selectBlogs = state => state.newzingBlog;
export default blogHomeSlice.reducer;