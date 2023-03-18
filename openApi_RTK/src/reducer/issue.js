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

export const issueSlice = createSlice({
  name: 'issue',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getIssues.pending, (state) => {
      state.getIssueState.loading = true;
    });

    builder.addCase(getIssues.fulfilled, (state, action) => {
      state.issues = action.payload;
      console.log('#############', action.payload);
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

export const getIssues = createAsyncThunk('issue/getIssues', async (issue) => {
  const res = await IssueApi.getIssue(issue);
  return res.data;
});
