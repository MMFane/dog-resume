import type { Dog } from '../../../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

const initialState: Dog[] = [];

const dogsSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers: {
    dogAdded(state, action: PayloadAction<Dog>) {
      state.push(action.payload);
    },
  },
});

export default dogsSlice.reducer;
export const { dogAdded } = dogsSlice.actions;
export const selectAllDogs = (state: RootState) => state.dogs;
