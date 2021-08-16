import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const getProjectType = createAsyncThunk(
  'projectType/getProjectType',
  async ( { dispatch, getState }) => {

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
    })
    console.log(response.data)
    return response.data
    // todo: try real api
  }
)

export const postProjectType = createAsyncThunk(
  'projectType/postProjectType',
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

export const putProjectType = createAsyncThunk(
  'projectType/putProjectType',
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

const projectTypeSlice = createSlice({
  name: 'projectType',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getProjectType.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getProjectType.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getProjectType.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [postProjectType.pending]: (state, action) => {
      state.status = 'loading'
    },
    [postProjectType.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [postProjectType.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [putProjectType.pending]: (state, action) => {
      state.status = 'loading'
    },
    [putProjectType.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [putProjectType.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export default projectTypeSlice.reducer
