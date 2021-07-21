import React, { useEffect, Fragment } from 'react';
import { useQuery, useSubscription } from 'urql';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from "./metricListReducer";

const metric_Subscription_Query = `
  subscription {
    newMeasurement{
      metric
      at
      value
      unit
    }
  }
`;

export default () => {
    return <NewMeasurement />;
  };

const NewMeasurement = () => {
   // const dispatch = useDispatch();
    const [result] = useSubscription({
      query: metric_Subscription_Query,
      variables: {}
    });
    const { fetching, data ,error } = result;
    
  // if (fetching) return "Fetching";
   if (error) return "Error...";
   console.log("newMeasurements result...c", data)
     const NewMeasurementData = data.newMeasurement.map((n, i)=>{
    return <Fragment key={i}>
           <div>{n.metric}</div>
           
     </Fragment>
  }) 
 
   return <Fragment>
   <p>New Measurements:</p>
   <div>{NewMeasurementData}</div>
  </Fragment>

}