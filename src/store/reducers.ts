import { reducer as weatherReducer } from '../Features/Weather/reducer';
import {reducer as metricListReducer } from "../Features/Metrics/metricListReducer"

export default {
  weather: weatherReducer,
  metricList: metricListReducer,
};
