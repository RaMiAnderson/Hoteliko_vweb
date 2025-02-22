import React from "react";
import './dashContent.css'
import CardMoney from "../../../components/CardMoney/CardMoney";

const dashBoardContent = () => {
  return (
    <>
      {/* leftPart */}
      <div className="leftPart">
        {/* topPart */}
        <div className="topPart">
         <div className="partOne">
          <CardMoney color="var(--cardMVente)" label="Total Vente" montant="15 000 000" stats="+10%"/>
          <CardMoney color="var(--cardMRevient)" label="Total Revient" montant="11 000 000"/>
          <CardMoney color="var(--cardMRevient)" label="Total Revient" montant="11 000 000"/>
         </div>
         <div className="partOne">
          <CardMoney color="var(--cardMVente)" label="Total Vente" montant="15 000 000" stats="+10%"/>
          <CardMoney color="var(--cardMRevient)" label="Total Revient" montant="11 000 000"/>
          <CardMoney color="var(--cardMRevient)" label="Total Revient" montant="11 000 000"/>
         </div>
        </div>
        {/* bottomPart */}
        <div className="bottomPart">

        </div>
      </div>
      {/* rightPart */}
      <div className="rightPart">
 
      </div>
    </>
  );
}; 

export default dashBoardContent;
