import React from "react"



function DoneImg(props) {
  if(props.done){
    return (<img src="./assets/img/done.png" alt="icone de tarefa feita"></img>)
  }else{
    return (<img src="./assets/img/undone.png" alt="icone de tarefa não feita"></img>)
  }
};



function List(props){

    return(<ul>
      {props.items.map(item => <li className={item.done? "done item": "item"}  key={item.id} >{item.text}
      <div>
          <button onClick={() =>{props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
          <button onClick={() =>{props.onItemDeleted(item)}}><img src="./assets/img/lixo.png" alt="icone de lixeira"></img></button>
          </div>
        </li>
      )}
    </ul>)
  }
  
  export default List