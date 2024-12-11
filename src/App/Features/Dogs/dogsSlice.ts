import type { Dog } from '../../../types/types';
import type { Schema } from '../../../../amplify/data/resource';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '../../hooks';
import type { RootState } from '../../store';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

interface DogsState {
  dogs: Dog[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

export const fetchDogs = createAppAsyncThunk(
  'dogs/fetchDogs',
  async () => {
    const response = await client.models.Dog.list();
    console.log('fetching dogs', response);
    return response.data;
  },
  {
    condition(_arg, thunkApi) {
      const dogsStatus = selectDogsStatus(thunkApi.getState());
      if (dogsStatus !== 'idle') {
        // cancel if a thunk is already in progress
        return false;
      }
    },
  }
);

const initialState: DogsState = {
  dogs: [],
  status: 'idle',
  error: null,
};

const dogsSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers: {
    dogAdded(state, action: PayloadAction<Dog>) {
      state.dogs.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDogs.pending, state => {
        state.status = 'pending';
      })
      .addCase(fetchDogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched posts to the array
        state.dogs.push(...action.payload);
      })
      .addCase(fetchDogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown Error';
      });
  },
});

export default dogsSlice.reducer;
export const { dogAdded } = dogsSlice.actions;
export const selectAllDogs = (state: RootState) => state.dogs.dogs;
export const selectDogsStatus = (state: RootState) => state.dogs.status;
