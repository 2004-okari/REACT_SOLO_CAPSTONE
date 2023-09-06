import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTeams = createAsyncThunk('teams/fetchTeams', async () => {
  try {
    const response = await axios.get('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log('Error getting teams:', error);
    throw error; // Re-throw the error to be caught by the rejected action
  }
})

const initialState = {
  teams: [],
  loading: false,
  error: null,
};

const teamsSlice = createSlice({
  name:'teams',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.loading = false;
        state.teams = action.payload;
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
})

export default teamsSlice.reducer;
