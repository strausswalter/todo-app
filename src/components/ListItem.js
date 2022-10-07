import React from "react"
import Card from "./Card";



function DoneImg(props) {
  if(props.done){
    return (<img src="./assets/img/done.png" alt="icone de tarefa feita"></img>)
  }else{
    return (<img src="./assets/img/undone.png" alt="icone de tarefa não feita"></img>)
  }
};



function ListItem(props){

    return(<li>
        <Card className={props.item.done? "done item": "item"}>
        {props.item.text}
      <div>
          <button onClick={() =>{props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
          <button onClick={() =>{props.onItemDeleted(props.item)}}><img src="./assets/img/lixo.png" alt="icone de lixeira"></img></button>
          </div>
          </Card>
        </li>
     )
  }
  
  export default ListItem