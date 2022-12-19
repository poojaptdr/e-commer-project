import React, { createContext, useContext, useEffect, useReducer } from "react";
import Reducer from './Reducer'

const AppContext = React.createContext();

// const API = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    name: '',
    image: '',
    services: [],
}

const AppProvider = ({children}) => {

const[state, dispatch] = useReducer(Reducer, initialState);

const updateHomePage = ()=>{
    return dispatch({
        type: 'HOME_UPDATE',
        payload: {
            name: 'Thapa Technical',
            image: './images/hero.svg',
        },
    });
};

const updateAboutPage = () => {
    return dispatch({
        type: 'ABOUT_UPDATE',
        payload:{
            name: 'Pooja Patidar',
            image: './images/about.svg',
        },
    });
};

// to get the api data

const getServices = async()=>{
  try{
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      dispatch({type: 'GET_SERVICES', payload: data})
  }catch(error){
    console.log(error);
  }
 }

// to call api

useEffect(()=>{
    getServices()
}, [])

return <AppContext.Provider value={{...state, updateHomePage, updateAboutPage}}>{children}</AppContext.Provider>
}

const useGlobalContext = ()=>{
   return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}