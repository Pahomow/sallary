import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const getEmployees = createAsyncThunk(
  'employees/getEmployees',
  async ( { dispatch, getState }) => {

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
    })
    console.log(response.data)
    return response.data
    // todo: try real api
  }
)

export const postEmployees = createAsyncThunk(
  'employees/postEmployees',
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

export const deleteEmployees = createAsyncThunk(
  'employees/postEmployees',
  async ( { dispatch, getState }) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
)

const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getEmployees.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getEmployees.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getEmployees.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [postEmployees.pending]: (state, action) => {
      state.status = 'loading'
    },
    [postEmployees.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [postEmployees.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [deleteEmployees.pending]: (state, action) => {
      state.status = 'loading'
    },
    [deleteEmployees.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [deleteEmployees.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export default employeesSlice.reducer
