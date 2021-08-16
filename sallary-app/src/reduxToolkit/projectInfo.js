import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const getProjectInfo = createAsyncThunk(
  'projectInfo/getProjectInfo',
  async ( { dispatch, getState }) => {

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
    })
    console.log(response.data)
    return response.data
    // todo: try real api
  }
)

export const postProjectInfo = createAsyncThunk(
  'projectInfo/postProjectInfo',
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

export const postProjectInfoDate = createAsyncThunk(
  'projectInfo/postProjectInfoDate',
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

export const putProjectInfo = createAsyncThunk(
  'projectInfo/putProjectInfo',
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


const projectInfoSlice = createSlice({
  name: 'projectInfo',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getProjectInfo.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getProjectInfo.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getProjectInfo.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [postProjectInfo.pending]: (state, action) => {
      state.status = 'loading'
    },
    [postProjectInfo.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [postProjectInfo.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [postProjectInfoDate.pending]: (state, action) => {
      state.status = 'loading'
    },
    [postProjectInfoDate.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [postProjectInfoDate.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [putProjectInfo.pending]: (state, action) => {
      state.status = 'loading'
    },
    [putProjectInfo.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [putProjectInfo.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export default projectInfoSlice.reducer
