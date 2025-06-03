import React from "react";
import './dashContent.css';
import CardMoney from "../../../components/CardMoney/CardMoney";
import LineChart from "../../../components/lineChart/LineChartStat.jsx";
import TableList from "../../../components/TableList/TableList1.jsx";
import InputSearch from "../../../components/InputSearch/InputSearch.jsx"
import BasicButton from "../../../components/BasicButton/BasicButtons.jsx"

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
         <div>
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
        <div className="findSection">
          <h4>Liste des Produits</h4>
          <section>
            <div style={{marginRight : "10px"}}><InputSearch /></div>
            <BasicButton
              variant={"contained"}
              color={"var(--white)"} 
              bgColor={"#f87269"} 
              bgColorH={"#eb6258"} 
              bgColorA={"#E42417"} 
              brdrColor={"#f87269"}
              brdrColorH={"#eb6258"}
              textBtn={"Rechercher"} 
              width={100} 
              padding={"7.7px 0px 9px 0px"} 
            />
          </section>
        </div>
        <div className="tableAff">
          <TableList />
        </div>
      </div>
    </>
  );
}; 

export default dashBoardContent;
