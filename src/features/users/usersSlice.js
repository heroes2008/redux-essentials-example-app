import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', name: 'Vijay Jain' },
  { id: '2', name: 'Chris Davis' },
  { id: '3', name: 'Prasong T' },
]

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default userSlice.reducer
