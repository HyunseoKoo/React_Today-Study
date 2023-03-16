import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import IssueApi from '../apis/issueApi';

const initialState = {
  issues: [],
  getIssueState: {
    loading: false,
    done: false,
    err: null,
  },
};

// get만 하는데 여기서 createSlice를 사용할 이유가 있나?
export const issueSlice = createSlice({
  name: 'issue',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getIssues.pending, (state) => {
      state.getIssueState.loading = true;
    });

    builder.addCase(getIssues.fulfilled, (state, action) => {
      state.issues = action.payload;
      state.getIssueState.loading = false;
      state.getIssueState.done = true;
      state.getIssueState.err = null;
    });

    builder.addCase(getIssues.rejected, (state, action) => {
      state.getIssueState.loading = false;
      state.getIssueState.done = true;
      state.getIssueState.err = action.payload;
    });
  },
});

export const getIssues = createAsyncThunk('issue/getIssues', async () => {
  const res = await IssueApi.getIssue();
  return res.data;
});
