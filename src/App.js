import React from "react";
import {useState} from "react"
import List from "./components/list.jsx";

const App  = ()=>{

  const [input , setInput] = useState("");
  const [items , setItems] = useState([]);

  const changeEvent = (event)=>{
      setInput(event.target.value);
  }

  // by the below code as the default behaviour od the setItem it stores the prevvalue of the input hence we can change the value wioth the help 
  // of three dots ... and add an another input in it
const itemList = ()=>{
  setItems((oldValue)=>{
    return ([...oldValue,input]);
  });
  setInput(" ");
}

const deleteItem = (id)=>{
  setItems((oldItems)=>{
return oldItems.filter((elemts , index)=>{
return index!==id;
})
  })
}

  return (


    <>
        <div className="main_div">

          <div className="center_div">
            <h1>ToDoApp</h1>
            <br />

          <input type="text" placeholder=" Enter your to do " onChange={changeEvent}  value = {input} />
          <button onClick={itemList}>+</button>
          <ol>
           

          
            {items.map((item,index)=>{
              return <List text = {item}  key ={index} id = {index} onSelect = {deleteItem}/>
            })}
          
          </ol>
          </div>
        </div>
    </>
  
  )

}

export default App;
