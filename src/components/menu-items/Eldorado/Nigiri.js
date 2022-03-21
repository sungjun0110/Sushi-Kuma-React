import React from 'react';
import CreateItems from '../CreateItems';

const Nigiri = ( props ) => {
  return(
    <div className="item-div">
      {CreateItems(
        "Nigiri", 
        {
          "Albacore" : ["white tuna", "6.95"], 
          "Ama-Ebi" : ["sweet shrimp", "8.95"], 
          "Ebi" : ["cooked shrimp", "6.50"], 
          "Escolar" : ["escolar", "6.95"], 
          "Hamachi" : ["yellow tail", "6.95"], 
          "Seared Sake" : ["seared salmon", "6.95"], 
          "Hotate" : ["scallop", "6.95"], 
          "Ika" : ["squid", "6.50"], 
          "Ikura" : ["salmon roe", "6.50"], 
          "Inari" : ["tofu wrap", "6.50"], 
          "Kani" : ["snow crab", "7.95"], 
          "Maguro" : ["tuna", "6.95"], 
          "Masago" : ["smelt roe", "6.50"], 
          "Saba" : ["mackerel", "6.95"], 
          "Sake" : ["salmon", "6.95"], 
          "Spicy Hotate" : ["spicy scallop", "6.95"], 
          "Tako" : ["octopus", "6.50"], 
          "Tamago" : ["sweet egg", "6.50"], 
          "Tobiko" : ["flying fish roe", "6.50"], 
          "Unagi" : ["fresh water eel", "6.95"], 
        }, props)}
        
        <div className="nigiri-warning">
          <p style={{color: 'white'}}>* Extra order: Uzura (Quail Egg).....3.00 *</p>
        </div>
    </div>
  );
}

export default Nigiri;
