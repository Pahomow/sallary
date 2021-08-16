import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const getFreelanceExpenses = createAsyncThunk(
  'freelanceExpenses/getFreelanceExpenses',
  async ( { dispatch, getState }) => {

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
    })
    console.log(response.data)
    return response.data
    // todo: try real api
  }
)

export const postFreelanceExpenses = createAsyncThunk(
  'freelanceExpenses/postFreelanceExpenses',
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

const freelanceExpensesSlice = createSlice({
  name: 'freelanceExpenses',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getFreelanceExpenses.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getFreelanceExpenses.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getFreelanceExpenses.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [postFreelanceExpenses.pending]: (state, action) => {
      state.status = 'loading'
    },
    [postFreelanceExpenses.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [postFreelanceExpenses.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export default freelanceExpensesSlice.reducer
