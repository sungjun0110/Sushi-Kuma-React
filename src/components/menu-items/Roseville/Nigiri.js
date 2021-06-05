import React from 'react';
import CreateItems from '../CreateItems';

const Nigiri = ( props ) => {
  return(
      <div className="item-div">
        {CreateItems(
          "Nigiri", 
          {
          "Albacore" : ["white tuna", "6.50"], 
          "Ama-Ebi" : ["sweet shrimp", "8.50"], 
          "Ebi" : ["cooked shrimp", "5.50"], 
          "Escolar" : ["escolar", "6.50"], 
          "Hamachi" : ["yellow tail", "6.50"], 
          "Hokkigai" : ["surf clam", "6.50"], 
          "Hotate" : ["scallop", "6.50"], 
          "Ika" : ["squid", "5.95"], 
          "Ikura" : ["salmon roe", "6.50"], 
          "Inari" : ["tofu wrap", "5.50"], 
          "Kani" : ["snow crab", "7.95"], 
          "Maguro" : ["tuna", "6.50"], 
          "Masago" : ["smelt roe", "5.95"], 
          "Saba" : ["mackerel", "5.95"], 
          "Sake" : ["salmon", "6.50"], 
          "Spicy Hotate" : ["spicy scallop", "6.95"], 
          "Tako" : ["octopus", "5.95"], 
          "Tamago" : ["sweet egg", "5.50"], 
          "Tobiko" : ["flying fish roe", "6.50"], 
          "Unagi" : ["fresh water eel", "6.50"], 
          }, 
          props
        )}
    </div>
  );
}

export default Nigiri;
