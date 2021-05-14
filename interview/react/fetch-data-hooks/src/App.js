import React, { useState, useEffect, Fragment ,useReducer} from 'react';
import axios from 'axios';

const dataFetchReducer=(state,action)=>{
  switch(action.type)
  {
    case 'FETCH_INIT'://请求开始后
      return{
        ...state,
        loading:true,
        isError:false
      }
      case 'FEATCH_SUCCESS':
      return{
        ...state,
        loading:false,
        isError:false,
        data:action.payload
      }
      case 'FEATCH_FAILED':
      return{
        ...state,
        loading:false,
        isError:true,
        data:action.payload
      }
  }
}



const useDataApi=(initiaUrl,initiaData)=>{
  const [url,setUrl]=useState(initiaUrl)
  const [state,dispatch]=useReducer(dataFetchReducer,{
    loading:false,
    isError:false,
    data:initiaData
  })
  useEffect(()=>{
    let diaCancel=false;
    const featchData=async ()=>{
      dispatch({type:'FETCH_INIT'});
      try{
        const result=await axios(url)
        if(!didCancel)
        {
          dispatch({type:'FETCH_SUCCESS',payload:result.data})
        }
      }catch(error){
        if(!didCancel)
        {
          dispatch({type:'FEATCH_FAILED'})
        }
      }
    }
    featchData();
    return ()=>{
      didCancel=true;
    }
  },[url])
}

const App=()=>{
  const [{data,loading,isError},doFetch]=useDataApi(
    'https://hn.algolia.com/api/v1/search?query=redux',{hits:[]}
  )
}


export default App;