import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const getSalesType = createAsyncThunk(
  'salesType/getSalesType',
  async ( { dispatch, getState }) => {

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
    })
    console.log(response.data)
    return response.data
    // todo: try real api
  }
)

export const postSalesType = createAsyncThunk(
  'salesType/postSalesType',
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

export const putSalesType = createAsyncThunk(
  'salesType/putSalesType',
  async ( { dispatch, getState }) => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
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

const salesTypeSlice = createSlice({
  name: 'salesType',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getSalesType.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getSalesType.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getSalesType.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [postSalesType.pending]: (state, action) => {
      state.status = 'loading'
    },
    [postSalesType.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [postSalesType.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [putSalesType.pending]: (state, action) => {
      state.status = 'loading'
    },
    [putSalesType.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [putSalesType.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export default salesTypeSlice.reducer
