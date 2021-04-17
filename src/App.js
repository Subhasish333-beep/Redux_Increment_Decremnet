import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {doIncrement, doDecrement} from './Reduux'
// import Apps from './Apps'
import { Provider } from 'react-redux';
import {fetchTodos} from './Reduux'


const App =()=>{
  const state=useSelector((state)=>state)
  
  const usedispatch=useDispatch();
  useEffect(()=>{
    usedispatch(fetchTodos());
  },[])
 
  const {todo} = state;
  console.log(todo,"app.js")
  
  return(
    <div>
      <table className="table">
        <thead>
          <tr>
            <td>UserId</td>
            <td>Id</td>
            <td>Title</td>
          </tr>
        </thead>
        <tbody>
          {todo?.map(item=>{
            return(
              <tr>
                <td>{item?.userId}</td>
                <td>{item?.id}</td>
                <td>{item?.title}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export  default App;

