import React from "react";
import { Link } from "react-router-dom";

function Cardf(props){
    return(
     <div className="card">
        <div className="card__body">
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.des}</p>
        </div>
        <a href={props.urlc}>
        <button className="card__btn">Click To Redeem</button></a>
     </div>
)};
export default Cardf;

