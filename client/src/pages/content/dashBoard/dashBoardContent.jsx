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
         <CardMoney /> 
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
