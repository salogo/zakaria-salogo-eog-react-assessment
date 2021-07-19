import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    getMetrics : [],
};


const slice = createSlice({
  name: 'metriclist',
  initialState,
  reducers: {
    metricListRecevied(state, action){
        state.getMetrics =  action.payload 
    },
   
    },
    
});

export const reducer = slice.reducer;
export const actions = slice.actions;
