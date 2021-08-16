import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const getSm = createAsyncThunk(
  'sm/getSm',
  async ( { dispatch, getState }) => {

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
    })
    console.log(response.data)
    return response.data
    // todo: try real api
  }
)

export const postSm = createAsyncThunk(
  'sm/postSm',
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

export const deleteSm = createAsyncThunk(
  'sm/postSm',
  async ( { dispatch, getState }) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
)

const smSlice = createSlice({
  name: 'sm',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getSm.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getSm.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getSm.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [postSm.pending]: (state, action) => {
      state.status = 'loading'
    },
    [postSm.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [postSm.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [deleteSm.pending]: (state, action) => {
      state.status = 'loading'
    },
    [deleteSm.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [deleteSm.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export default smSlice.reducer
