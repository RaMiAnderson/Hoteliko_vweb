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
          <CardMoney color="var(--GreenThem)" label="Total Vente" montant="15000000" stats="+10%"/>
          <CardMoney color="var(--GreenThem)" label="Total Vente" montant="15000000"/>
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
