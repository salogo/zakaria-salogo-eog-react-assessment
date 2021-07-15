import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    getMetrics : [],
};

const metricsDataReceived = (state, action) => {
    const { getMetrics } = action;
    return { getMetrics }
}

const slice = createSlice({
  name: 'metriclist',
  initialState,
  reducers: {
    metricListRecevied(state, action){
        state.getMetrics = metricsDataReceived + action.payload 
    },
    
   
    },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
