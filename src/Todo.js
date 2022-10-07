import React, { useState, useEffect } from "react";
import List from "./components/List";
import "./Todo.css";
import TodoForm from './components/TodoForm';
import Modal from './components/Modal';
import Item from './components/Item';

const SAVED_ITEMS = "savedItems";//constante para usar no localstorage

function Todo() {
  
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(()=>{
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    if(savedItems){
      return() => setItems(savedItems);
      
    }
  },[])//fazer apenas na 1a vez que for carregado, não monitora nenhuma outra alteração de estado (não renderiza novamente)

  useEffect(()=>{
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
  },[items])//monitora a alteração do estado 'items' e salva no localstorage
  
  function onAddItem(text){
    let item = new Item(text);
    setItems([...items, item]);
    onHideModal();

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

function onHideModal(){
  setShowModal(false);
}

  return (
    <div className="container">
      <header className="header">
        <h1>Todo</h1>
        <button onClick={()=>{setShowModal(true)}} className="addButton">+</button>
      </header>

      <List items={ items } onItemDeleted={onItemDeleted} onDone={onDone}/>
      <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem} /></Modal>
    </div>
  );
}

export default Todo;
