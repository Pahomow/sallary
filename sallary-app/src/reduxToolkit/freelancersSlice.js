import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const getFreelancers = createAsyncThunk(
  'freelancers/getFreelancers',
  async ( { dispatch, getState }) => {

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
    })
    console.log(response.data)
    return response.data
    // todo: try real api
  }
)

export const postFreelancers = createAsyncThunk(
  'freelancers/postFreelancers',
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

export const deleteFreelancers = createAsyncThunk(
  'freelancers/postFreelancers',
  async ( { dispatch, getState }) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
)




const freelancersSlice = createSlice({
  name: 'freelancers',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getFreelancers.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getFreelancers.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getFreelancers.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [postFreelancers.pending]: (state, action) => {
      state.status = 'loading'
    },
    [postFreelancers.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [postFreelancers.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [deleteFreelancers.pending]: (state, action) => {
      state.status = 'loading'
    },
    [deleteFreelancers.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [deleteFreelancers.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export default freelancersSlice.reducer
