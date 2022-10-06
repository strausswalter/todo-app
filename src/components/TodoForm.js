import React, { useState } from "react";


function TodoForm(props) {
  const [text, setText] = useState(""); // para modificar o estado do texto do input onChange

  //função para atualizar o valor do estado no envento onChange do input texto
  function handleChange(event) {
    let t = event.target.value;
    setText(t); //Usando a função retornada por 'useState' para atualizar o valor do estado do elemento input do form
  }

  function addItem(event) {
    event.preventDefault(); //previne o comportamento padrão, de atualizar a tela, no evento submit do form
    //adiciona o item na lista
    if (text) { //se o texto não for vazio
      props.onAddItem(text);//Notifica o componente pai, via função callback, que um novo item foi adicionado. Não pode usar o estado aqui (setItems([...items, text]);), pois o estado é do componente pai
      setText(""); //limpa o input texto
    };
  };

  return (
    <form>
      <input onChange={handleChange} type="text" value={text} placeholder="Add a todo"/>
      <button onClick={addItem}>Add</button>
    </form>
  );
}

export default TodoForm;
