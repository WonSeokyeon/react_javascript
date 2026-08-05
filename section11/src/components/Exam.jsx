import { useState, useReducer } from "react";

function reducer(count,action){
  switch (action.type) {
    case "PLUS":
     return count + action.data 
    case "MINUS":
     return count - action.data 
    default:
      return count;
  }

}

const Exam = () => {
 // const [count, setcount] =  useState(3)
 const [count, dispatch]= useReducer(reducer, 0)
  const onClikckPlus=(e)=>{
    dispatch({type : "PLUS", data : 1})
   // setcount(count + 1)
  }
    const onClikckMiuns=(e)=>{
     dispatch({type : "MINUS", data : 1})
    //setcount(count -1)
  }
  return (
    <div>
     <h1>{count}</h1>
     <button onClick={onClikckPlus}>+</button>
     <button onClick={onClikckMiuns}>-</button>
    </div>
  );
};

export default Exam;
