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
    metricListRecevied(state){
        state.getMetrics = metricsDataReceived
    },
    
   
    },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
