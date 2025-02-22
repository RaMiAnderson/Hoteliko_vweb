import React from "react";
import './dashContent.css'
import CardMoney from "../../../components/CardMoney/CardMoney";
import LineChart from "../../../components/lineChart/LineChartStat.jsx";

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
          <CardMoney color="var(--cardMDepense)" label="Total Dépense" montant="1 000 000"/>
         </div>
         <div className="partOne">
          <CardMoney color="var(--cardMVente)" label="Total Encaisse" montant="13 000 000" stats="+10%"/>
          <CardMoney color="var(--cardMVente)" label="Reste Encaisse" montant="2 000 000"/>
          <CardMoney color="var(--cardMEncaisse)" label="Total Bénéfice" montant="3 000 000"/>
         </div>
         {/* Details d'encaissmnt */}
         <div className="partOne">
          <h3 className="titlePart">Détails des encaissés</h3>
         </div>
         <div className="partOne">
          <CardMoney color="var(--whiteTransp)" label="Espece" montant="8 000 000"/>
          <CardMoney color="var(--whiteTransp)" label="Mobile Money" montant="2 000 000" stats="+10%"/>
          <CardMoney color="var(--whiteTransp)" label="Autre mode" montant="3 000 000"/>
         </div>
        </div>
        {/* bottomPart */}
        <div className="bottomPart">
          <LineChart />
        </div>
      </div>
      {/* rightPart */}
      <div className="rightPart">
 
      </div>
    </>
  );
}; 

export default dashBoardContent;
