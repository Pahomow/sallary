import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const getTotalTable = createAsyncThunk(
  'totalTable/getTotalTable',
  async ( { dispatch, getState }) => {

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
    })
    console.log(response.data)
    return response.data
    // todo: try real api
  }
)

export const postTotalTable = createAsyncThunk(
  'totalTable/postTotalTable',
  async ( { dispatch, getState }) => {

    await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

)

const totalTableSlice = createSlice({
  name: 'totalTable',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getTotalTable.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getTotalTable.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getTotalTable.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [postTotalTable.pending]: (state, action) => {
      state.status = 'loading'
    },
    [postTotalTable.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [postTotalTable.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export default totalTableSlice.reducer
