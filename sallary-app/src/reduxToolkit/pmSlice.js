import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const getPm = createAsyncThunk(
  'pm/getPm',
  async ( { dispatch, getState }) => {

    const response = await axios.get(`http://localhost:8000/pm`, {
    })
    console.log(response.data)
    return response.data
    // todo: try real api
  }
)

export const postPm = createAsyncThunk(
  'pm/postPm',
  async ({data}, { dispatch, getState }) => {

    await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
)

export const deletePm = createAsyncThunk(
  'pm/postPm',
  async ({id}, { dispatch, getState }) => {
    fetch(`http://localhost:8000/pm/:${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
)
export const patchPm = createAsyncThunk(
  'pm/postPm',
  async ( { dispatch, getState }) => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PATCH',
      body: JSON.stringify({
        title: 'foo',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
)



const pmSlice = createSlice({
  name: 'pm',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getPm.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getPm.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getPm.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [postPm.pending]: (state, action) => {
      state.status = 'loading'
    },
    [postPm.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [postPm.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [deletePm.pending]: (state, action) => {
      state.status = 'loading'
    },
    [deletePm.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [deletePm.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [patchPm.pending]: (state, action) => {
      state.status = 'loading'
    },
    [patchPm.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [patchPm.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export default pmSlice.reducer
