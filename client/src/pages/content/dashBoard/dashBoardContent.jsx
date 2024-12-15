import React from "react";
import './dashContent.css'
import TextBlock from "../../../components/TextBlock/TextBlock";

const dashBoardContent = () => {
  return (
    <>
      {/* leftPart */}
      <div className="leftPart">
        {/* topPart */}
        <div className="topPart">
            <div className="first">
              <TextBlock label={"TOTAL RECETTE"} color={"BlueSky"}/>
              <TextBlock label={"TOTAL REVIENT"} color={""}/>
              <TextBlock label={"TOTAL DEPENSES"} color={"RedTheme"}/>
            </div>
            <div className="second">
              <TextBlock label={"TOTAL ENCAISSE"} color={"BlueSky"}/>
              <TextBlock label={"RESTE A ENCAISSER"} color={""}/>
              <TextBlock label={"BENEFICES"} color={"Green"}/>
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
