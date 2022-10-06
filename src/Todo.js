import React, { useState } from "react";
import List from "./components/List";
import "./Todo.css";
import TodoForm from './components/TodoForm';
import Item from './components/Item';

function Todo() {
  
  const [items, setItems] = useState([]);

  function onAddItem(it){

    let item = new Item(it);

    setItems([...items, item]);

  }


function onItemDeleted(item){
  let filteredItems = items.filter(it => it.id !== item.id);
  setItems(filteredItems)
};

function onDone(item){
    let updatedItems = items.map(it => {
      if(it.id === item.id){
        it.done = !it.done;
      }
      return it;
    })
    setItems(updatedItems);
};



  return (
    <div className="container">
      <h1>Todo</h1>
      <TodoForm onAddItem={onAddItem} />
      <List items={ items } onItemDeleted={onItemDeleted} onDone={onDone}/>
    </div>
  );
}


export default Todo;
