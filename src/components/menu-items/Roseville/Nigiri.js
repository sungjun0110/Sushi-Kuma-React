import React from 'react';
import Item from '../Content';

const Nigiri = () => {
  return(
    <>
    <div className="item-div">
      <div className="item-title">Nigiri</div>
      
      <div className="items">
        <Item itemName="Albacore" description="white tuna" price="5.95" />
        <Item itemName="Ama-Ebi" description="sweet shrimp" price="7.50" />
        <Item itemName="Ebi" description="cooked shrimp" price="4.50" />
        <Item itemName="Escolar" description="escolar" price="5.95" />
        <Item itemName="Hamachi" description="yellow tail" price="5.95" />
        <Item itemName="Hokkigai" description="surf clam" price="5.95" />
        <Item itemName="Hotate" description="scallop" price="5.95" />
        <Item itemName="Ika" description="squid" price="4.50" />
        <Item itemName="Ikura" description="salmon roe" price="5.50" />
        <Item itemName="Inari" description="tofu wrap" price="4.50" />
        <Item itemName="Kani" description="snow crab" price="7.95" />
        <Item itemName="Maguro" description="tuna" price="5.95" />
        <Item itemName="Masago" description="smelt roe" price="4.95" />
        <Item itemName="Saba" description="mackerel" price="4.95" />
        <Item itemName="Sake" description="salmon" price="5.95" />
        <Item itemName="Spicy Hotate" description="spicy scallop" price="5.95" />
        <Item itemName="Tako" description="octopus" price="4.95" />
        <Item itemName="Tamago" description="sweet egg" price="4.50" />
        <Item itemName="Tobiko" description="flying fish roe" price="5.95" />
        <Item itemName="Unagi" description="fresh water eel" price="5.95" />
      </div>
    </div>
    </>
  );
}

export default Nigiri;
