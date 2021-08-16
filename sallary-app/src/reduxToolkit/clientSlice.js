import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const getClients = createAsyncThunk(
  'clients/getClients',
  async ( { dispatch, getState }) => {

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
    })
    console.log(response.data)
    return response.data
    // todo: try real api
  }
)

export const postClients = createAsyncThunk(
  'clients/postClients',
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

export const deleteClients = createAsyncThunk(
  'clients/postClients',
  async ( { dispatch, getState }) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
)

const clientSlice = createSlice({
  name: 'clients',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getClients.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getClients.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getClients.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [postClients.pending]: (state, action) => {
      state.status = 'loading'
    },
    [postClients.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [postClients.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [deleteClients.pending]: (state, action) => {
      state.status = 'loading'
    },
    [deleteClients.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [deleteClients.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export default clientSlice.reducer
