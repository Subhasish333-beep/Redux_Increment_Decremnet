import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {doIncrement, doDecrement} from './Reduux'
import {fetchTodos} from './Reduux'


const App =()=>{
  const state=useSelector((state)=>state)
  
  const usedispatch=useDispatch();
  useEffect(()=>{
    usedispatch(fetchTodos());
  },[])
 
  const {todos} = state;
  console.log(todos)
  
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
          {todos?.map(todo=>{
            return(
              <tr>
                <td>{todo?.userId}</td>
                <td>{todo?.id}</td>
                <td>{todo?.title}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export  default App;

