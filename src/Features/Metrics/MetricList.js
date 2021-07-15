import React, { useEffect } from 'react';
import { useQuery, useSubscription } from 'urql';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from "./metricListReducer";


const query_metric = `
    query {
        getMetrics
}`;

const getMetric = (state) => {
  const getMetrics = state.metricList.getMetrics ;
  return getMetrics;
};

export default () => {
  return <MetricList />;
};

let query = query_metric;
let [result] = useQuery({
  query,
  variables: {}
});
const {  data } = result;
console.log(data)

const MetricListData = () => {
  const dispatch = useDispatch();
  const metricList = useSelector(state => state.metricList);

  let query = query_metric;
  let [result] = useQuery({
    query,
    variables: {}
  });
  const {  data } = result;

  useEffect(() => {
    const getMetrics = data;
   
    if (data) {
       dispatch(actions.metricListRecevied(getMetrics))
    }
   
    
  }, [ data ]);
};

const MetricList = () => {
 
 
  return (
    <div>
       
    </div>
  );
};
