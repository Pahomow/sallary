import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const getProjects = createAsyncThunk(
  'projects/getProjects',
  async ( { dispatch, getState }) => {

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
    })
    console.log(response.data)
    return response.data
    // todo: try real api
  }
)

export const postProjects = createAsyncThunk(
  'projects/postProjects',
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

export const deleteProjects = createAsyncThunk(
  'projects/postProjects',
  async ( { dispatch, getState }) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
)

export const putProjects = createAsyncThunk(
  'projects/putProjects',
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

export const patchProjects = createAsyncThunk(
  'projects/patchProjects',
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

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getProjects.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getProjects.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getProjects.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [postProjects.pending]: (state, action) => {
      state.status = 'loading'
    },
    [postProjects.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [postProjects.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [deleteProjects.pending]: (state, action) => {
      state.status = 'loading'
    },
    [deleteProjects.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [deleteProjects.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [putProjects.pending]: (state, action) => {
      state.status = 'loading'
    },
    [putProjects.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [putProjects.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [patchProjects.pending]: (state, action) => {
      state.status = 'loading'
    },
    [patchProjects.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [patchProjects.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export default projectsSlice.reducer
