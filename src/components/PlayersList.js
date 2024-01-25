import React from "react";
import Players from "./Players";
import players from "../players";

//Création  du composant PlayersList,  
const PlayersList =()=>{
    return(
        <div>
            {/* players.map: elle va parcourir chaque element du tableau players avec la fonction .map */}
            {players.map((joueurs, id)=>(
            // id: qui s'assure  que chaque composant Players a une clé unique pour aider React à identifier et la méthode spreading qui passe toutes les propriétés des joueurs en tant qu'attributs au composant Players 
                <Players key={id}{...joueurs}/>
            ))}
        </div>
    );
 }; 
 export default PlayersList;
