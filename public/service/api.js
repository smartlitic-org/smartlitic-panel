// import { BaseData } from "../model/data.model";

const BaseURL = 'https://smartlitic-api.darkube.app';
export let _result;
export let progress = false;

export async function Api(analyticsData, api_key) {  
  let endPoint = setEndpoint(analyticsData); 
  progress = true;
  await fetch(`${BaseURL}/logger/v1/${endPoint}/`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'API-KEY':`${api_key}`,
      },
      body: JSON.stringify(analyticsData),
    })
    .then((response) => response)
    .then((data) => { 
      _result = data;
      progress = false;
    })
    .catch((error) => {
      _result = error; 
      progress = false;
      console.error('Error:', error)
    });
}

const setEndpoint = (data) => {
  if (data.client_rate) {
    return 'rate'
  } else {
    return 'load-complete'
  }
}

