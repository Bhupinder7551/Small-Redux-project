// JavaScript source code
const redux= require('redux');
const createStore= redux.createStore;
const applyMiddleware =redux.applyMiddleware;
const thunkMiddleware=require('redux-thunk').default;
const axios = require('axios');

const initialState={
    users:[],

}

const USER_SUCCESS='USER_SUCCESS';

const userSuccess=(users)=>{
    return{
          type:USER_SUCCESS,
          payload:users
    }
}


const reducer=(state=initialState,action)=>{

    switch(action.type){


        case "USER_SUCCESS": return{
             users:action.payload
        }

     
    }

}

const fetchUser=()=>{
    return function(dispatch){
        dispatch(userSuccess())
         axios.get('https://jsonplaceholder.typicode.com/users')
         .then(response=>{
               // response.data
           const users =response.data.map(user=>user.name)
            dispatch(userSuccess(users))
         })
         .catch(error=>{
             // error.message
             dispatch(userError(error.message))
         })
    }
}

const store =createStore(reducer,applyMiddleware(thunkMiddleware));
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(fetchUser());
//unsubscribe();