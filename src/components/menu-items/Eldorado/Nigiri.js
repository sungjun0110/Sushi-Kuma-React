import React from 'react';
import CreateItems from '../CreateItems';

const Nigiri = ( props ) => {
  return(
    <div className="item-div">
      {CreateItems(
        "Nigiri", 
        {
          "Albacore" : ["white tuna", "5.95"], 
          "Ama-Ebi" : ["sweet shrimp", "7.50"], 
          "Ebi" : ["cooked shrimp", "4.50"], 
          "Escolar" : ["escolar", "5.95"], 
          "Hamachi" : ["yellow tail", "5.95"], 
          "Hokkigai" : ["surf clam", "5.95"], 
          "Hotate" : ["scallop", "5.95"], 
          "Ika" : ["squid", "4.50"], 
          "Ikura" : ["salmon roe", "5.50"], 
          "Inari" : ["tofu wrap", "4.50"], 
          "Kani" : ["snow crab", "7.95"], 
          "Maguro" : ["tuna", "5.95"], 
          "Masago" : ["smelt roe", "4.95"], 
          "Saba" : ["mackerel", "4.95"], 
          "Sake" : ["salmon", "5.95"], 
          "Spicy Hotate" : ["spicy scallop", "5.95"], 
          "Tako" : ["octopus", "4.95"], 
          "Tamago" : ["sweet egg", "4.50"], 
          "Tobiko" : ["flying fish roe", "5.95"], 
          "Unagi" : ["fresh water eel", "5.95"], 
        }, props.cartItem)}
        
        <div className="nigiri-warning">
          <p>* Extra order: Uzura (Quail Egg).....1.50 *</p>
        </div>
    </div>
  );
}

export default Nigiri;
