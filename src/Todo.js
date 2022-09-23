import React, { useState } from "react";
import List from "./List";
import "./Todo.css";
import TodoForm from './TodoForm';

function Todo() {
  //No React só conseguimos alterar um elemento através dos estados. Não dá para usar querySelector ou getElementById. Usando forma de codificar hooks, conseguimos alterar o estado de um elemento através do useState.
  // o hook useState retorna um array com duas posições (1- variável com o seu valor inicial, 2- função para atualizar o valor)

  const [items, setItems] = useState([]); // para modificar o estado do array de itens list do <ul>.

  function onAddItem(item){
    setItems([...items, item]);

  }

  return (
    <div className="container">
      <h1>Todo</h1>
      <TodoForm onAddItem={onAddItem} />
      <List items={items} />
    </div>
  );
}


export default Todo;
