// eslint-disable-next-line no-unused-vars
import React from "react";
export default function Card(props) {
   //  console.log(props)
   return (
      <div>
         <div className="header">
            {<>
               <button onClick={props.onClose}>X</button>
               <h2>id: {props.id}</h2>
               <h4>Name: {props.name}</h4>
               <h4>Status: {props.status}</h4>
               <h4>Species: {props.species}</h4>
               <h4>Género: {props.gender}</h4>
               <h4>Origen: {props.origin.name}</h4>
               <img src={props.image} alt={props.name} />
               </>}
         </div>
      </div>
   );
}

