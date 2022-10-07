import React from 'react'
import Card from './Card'

function Modal(props){

    function hideModal(event){
        let target = event.target;
       
        if(target.id === "modal"){
            props.onHideModal();
        }
    }


    return(
        <div id="modal" onClick={hideModal} className={props.show?"modal": "modal hideModal"}>
        <Card className="cardModal">
            {/* Criar o conteudo no componente pai Todo.js*/}
            {props.children}
        </Card>
        </div>
    )
}

export default Modal;