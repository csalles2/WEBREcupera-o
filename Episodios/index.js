import { useEffect, useState } from "react";

import api from "../../Api";

import CardEpisodios from "../../Components/CardEpisodios";

function Episodios(){
    
    const [data, setData] = useState(null);
    
    

    useEffect( () => {
        const load = async()=>{
            let response = await api.getEpisodios();
            setData(response);
            
         
        }
        load();
   }, [])
   

 return(
 
       <div className="results-container">
          
        {data &&
            ((data.error)
                ? <h1>Busca não encontrada</h1>
                : data.results.map((item, key) => {
                    return <CardEpisodios
                                key={key}
                                id={item.id}
                                air_date={item.air_date}
                                episode={item.episode}
                                name={item.name}
                                quant_person ={item.quant_person}
                                />
                            })
                        )
                    }

            
                    
                    
                </div>

           
        );
                }


                
        export default Episodios;
