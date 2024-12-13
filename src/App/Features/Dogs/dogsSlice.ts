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

type NewDog = Pick<
  Dog,
  'name' | 'description' | 'birthdate' | 'weight' | 'breed'
>;

type UpdatedDog = Pick<
  Dog,
  'id' | 'name' | 'description' | 'birthdate' | 'weight' | 'breed'
>;

export const fetchDogs = createAppAsyncThunk(
  'dogs/fetchDogs',
  async () => {
    const response = await client.models.Dog.list();
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

export const deleteDog = createAppAsyncThunk(
  'dogs/deleteDog',
  async (id: string) => {
    await client.models.Dog.delete({ id });
    return id;
  }
);

export const addDog = createAppAsyncThunk(
  'dogs/addDog',
  async (data: NewDog) => {
    const response = await client.models.Dog.create(data);
    return response.data;
  }
);

export const editDog = createAppAsyncThunk(
  'dogs/editDog',
  async (data: UpdatedDog) => {
    const response = await client.models.Dog.update(data);
    return response.data;
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
        state.dogs.push(...action.payload);
      })
      .addCase(fetchDogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown Error';
      })
      .addCase(addDog.pending, state => {
        state.status = 'pending';
      })
      .addCase(addDog.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload) {
          state.dogs.push(action.payload);
        }
      })
      .addCase(addDog.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown Error';
      })
      .addCase(editDog.pending, state => {
        state.status = 'pending';
      })
      .addCase(editDog.fulfilled, (state, action) => {
        if (action.payload) {
          const { id, birthdate, breed, description, name, weight } =
            action.payload;
          const currentDog = state.dogs.find(dog => dog.id == id);
          if (currentDog) {
            currentDog.birthdate = birthdate;
            currentDog.breed = breed;
            currentDog.description = description;
            currentDog.name = name;
            currentDog.weight = weight;
          }
          state.status = 'succeeded';
        }
      })
      .addCase(editDog.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown Error';
      })
      .addCase(deleteDog.pending, state => {
        state.status = 'pending';
      })
      .addCase(deleteDog.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const id = action.payload;
        const existingDogIndex = state.dogs.findIndex(dog => dog.id === id);
        state.dogs.splice(existingDogIndex, 1);
      })
      .addCase(deleteDog.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown Error';
      });
  },
});

export default dogsSlice.reducer;
export const { dogAdded } = dogsSlice.actions;
export const selectAllDogs = (state: RootState) => state.dogs.dogs;
export const selectDogById = (state: RootState, dogId: string) =>
  state.dogs.dogs.find(dog => dog.id === dogId);
export const selectDogsStatus = (state: RootState) => state.dogs.status;
