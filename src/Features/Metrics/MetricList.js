import React, { useEffect, Fragment } from 'react';
import { useQuery, useSubscription } from 'urql';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from "./metricListReducer";


const query_metric = `
    query {
        getMetrics
}`;

export default () => {
  return <MetricList />;
};

const MetricList = () => {
  const dispatch = useDispatch();
  const list =  useSelector(state => state.getMetrics)

  let query = query_metric;
  let [result] = useQuery({
    query,
    variables: {}
  });
  const { fetching, data, error } = result;

   if (fetching) return "Fetching...";
   if (error) return "Error...";

   const metricsdatalist = data.getMetrics.map((metric, i)=>{
    return <div key={i}>{metric}</div>
  }) 
  dispatch(actions.metricListRecevied(data.getMetrics))
  

  return <Fragment>
       <div>{metricsdatalist}</div>
  </Fragment>
  
};