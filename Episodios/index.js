import React from "react";
import "./styles.css"


function CardEpisodios(props){
    const { id,name,episode,air_date,quant_person } = props;

    return(
        <div className="card">
            <p> {id} </p>

            <p>{name}</p>
            
           
            <p>{episode}</p>
           
          
            <p>{air_date}</p>
           
           
            <p>{quant_person}</p>
            

        </div>
    );
}

export default CardEpisodios;