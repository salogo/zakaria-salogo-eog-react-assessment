import React, { useEffect, Fragment } from 'react';
import { useQuery, useSubscription } from 'urql';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from "./metricListReducer";


const current_time = new Date().valueOf();
const query_multiple_measurements = `
query($input: [MeasurementQuery] = [
  {metricName: "tubingPressure", after: ${current_time - 
  1800000}, before: ${current_time}},
  {metricName: "casingPressure", after: ${current_time -
  1800000}, before: ${current_time}},
  {metricName: "oilTemp", after: ${current_time -
  1800000}, before: ${current_time}},
  {metricName: "flareTemp", after: ${current_time -
  1800000}, before: ${current_time}},
  {metricName: "waterTemp", after: ${current_time -
  1800000}, before: ${current_time}},
  {metricName: "injValveOpen", after: ${current_time -
  1800000}, before: ${current_time}}
])
{
  getMultipleMeasurements(input: $input) {
    metric
    measurements {
     at
     value
     metric
     unit
    }
  }
}`;

export default () => {
    return <MultipleMeasurements />;
  };

const MultipleMeasurements =()=> {
    //const dispatch = useDispatch();
   // const list =  useSelector(state => state  ) 

    //const dispatch = useDispatch();
    let [result] = useQuery({
      query: query_multiple_measurements,
    });
    const { data, error, fetching } = result;

   if (fetching) return "Fetching...";
   if (error) return "Error...";
   console.log("DATA...",data)

  /* const multipleMeasurementsData = data.getMultipleMeasurements.measurements.map((me, i)=>{
    return <div key={i}>{me}</div>

  }) */

  return <Fragment>
   <div>{JSON.stringify(data.getMultipleMeasurements)}</div>
</Fragment>

}

