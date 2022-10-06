



// Explicação da manipulação de estados do elemento filho para o pai.
// no arquivo Todo.js, a função onAddItem(item)

// O componente pai, Todo.js, usa o componente filho TodoForm e passa a função onAddItem para o componente filho ( <TodoForm onAddItem={onAddItem} /> ). O pai passa dados ao filho via propriedades JSX(escrita similar ao HTML).
// O componente filho, TodoForm, usa a função (do pai) onAddItem (via props.onAddItem) para passar o valor do input (props.onAddItem(text);) para o componente pai, Todo.js.

// O componente filho, TodoForm, usa a função onAddItem para passar o valor do input para o componente pai, Todo.js. O componente pai, Todo.js, usa a função onAddItem para atualizar o estado do array de itens list do <ul>.
//  TodoForm.js, através do props.onAddItem. O componente filho, TodoForm.js, executa a função onAddItem(item) e passa o

//  item para o componente pai, Todo.js, através do props.onAddItem(item). O componente pai, Todo.js, executa a função onAddItem(item)
//  e passa o item para o componente filho, List.js, através do props.items.

//*1: A função TodoForm (TodoForm.js) recebe via proposição (props) a função onAddItem (props.onAddItem(text);).
// quando o evento de click do botão é disparado, a função onAddItem é chamada
//*2: se o

//*3: A função onAddItem recebe o valor do estado do elemento filho e o passa para o elemento pai através da propriedade onAddItem.
//*4: O elemento pai recebe o valor do estado do elemento filho através da propriedade onAddItem.
//*5: O elemento pai atualiza o estado do elemento pai através da função onAddItem.
//*6: O elemento pai atualiza o estado do elemento filho através da propriedade onAddItem.
//*7: O elemento filho recebe o valor do estado do elemento pai através da propriedade onAddItem.
//*8: O elemento filho atualiza o estado do elemento filho através da função onAddItem.
//*9: O elemento filho atualiza o estado do elemento pai através da propriedade onAddItem.
//*10: O elemento pai recebe o valor do estado do elemento filho através da propriedade onAddItem.
//*11: O elemento pai atualiza o estado do elemento pai através da função onAddItem.
//*12: O elemento pai atualiza o estado do elemento filho através da propriedade onAddItem.
//*13: O elemento filho recebe o valor do estado do elemento pai através da propriedade onAddItem.