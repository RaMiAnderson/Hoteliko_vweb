import React from "react";
import './dashContent.css';
import CardMoney from "../../../components/CardMoney/CardMoney";
import LineChart from "../../../components/lineChart/LineChartStat.jsx";
import TableList from "../../../components/TableList/TableList1.jsx";

const dashBoardContent = () => {
  
  return (
    <>
      {/* leftPart */}
      <div className="leftPart">
        {/* topPart */}
        <div className="topPart">
         <div className="partOne">
          <CardMoney color="var(--cardMVente)" label="Vente" montant="15 000 000" stats="+10%"/>
          <CardMoney color="var(--cardMRevient)" label="Revient" montant="11 000 000"/>
          <CardMoney color="var(--cardMDepense)" label="Dépense" montant="1 000 000"/>
         </div>
         <div className="partOne">
          <CardMoney color="var(--cardMVente)" label="Encaissés" montant="13 000 000" stats="+10%"/>
          <CardMoney color="var(--cardMVente)" label="À Encaisser" montant="2 000 000"/>
          <CardMoney color="var(--cardMEncaisse)" label="Bénéfices" montant="3 000 000"/>
         </div>
         {/* Details d'encaissmnt */}
         <div className="partOne">
          <h3 className="titlePart">Détails des encaissés</h3>
         </div>
         <div className="partOne">
          <CardMoney color="var(--whiteTransp)" label="Espece" montant="8 000 000"/>
          <CardMoney color="var(--whiteTransp)" label="Mobile" montant="2 000 000" stats="+10%"/>
          <CardMoney color="var(--whiteTransp)" label="Autre" montant="3 000 000"/>
         </div>
        </div>
        {/* bottomPart */}
        <div className="bottomPart">
          <LineChart />
        </div>
      </div>
      {/* rightPart */}
      <div className="rightPart">
        <TableList />
      </div>
    </>
  );
}; 

export default dashBoardContent;
