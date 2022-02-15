import { useState } from "react"
import styled from "styled-components"
import Images from "../Images"

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  >img {
    margin: 0px 50px;
  }

  >h1 {
    margin: 30px 50px;
    font-weight: 500;
  }

  >.dfast2012 {
    display: flex;
    flex-wrap: wrap;

    >img {
      margin: 20px 50px;
    }
  }

  >.dfast2021 {
    display: flex;
    flex-wrap: wrap;

    >img {
      margin: 20px 50px;
    }


  }
`

const ScreenShot = ({year, norm, metadata}) => {

  return (
    <Container>
        <h1>Screenshot(s)</h1>
        {year === "2012" && norm === "CCAR"
          ? metadata === "Value" || metadata === "Scaling" || metadata === "Interim Type" || metadata === "Period Date" || metadata === "Unit" 
          ? <img src={Images.Ccar2012Metadata} placeholder=""/> 
          : metadata === "Financial Concept" ? <img src={Images.Ccar2012FinCon} placeholder=""/> 
          : metadata === "Types of Scenario" ? <img src={Images.Ccar2012Scenario} placeholder=""/>
          : metadata === "Data Classification" ? <img src={Images.Ccar2012DataClassif} placeholder=""/>
          : metadata === "Exercise Quarter" ? <img src={Images.Ccar2012EQ} placeholder=""/> 
          : metadata === "Entity ID" ? <img src={Images.Ccar2012EntityID} placeholder=""/>
          : metadata === "Assessment Coverage Date" ? <img src={Images.Ccar2012ACD} placeholder=""/>     
          : null

        : year === "2012" && norm === "DFAST"
          ? metadata === "Value" || metadata === "Scaling" || metadata === "Interim Type" || metadata === "Period Date" || metadata === "Unit" 
          ? <div className="dfast2012"> 
              <img src={Images.Dfast2012LoanMetadata} placeholder=""/> 
              <img src={Images.Dfast2012LoanMetadata} placeholder=""/> 
            </div>
          : metadata === "Financial Concept"
          ? <div className="dfast2012"> 
              <img src={Images.Dfast2012LoanFinCon} placeholder=""/> 
              <img src={Images.Dfast2012RevenueFinCon} placeholder=""/> 
            </div>
          : metadata === "Types of Scenario"
          ? <div className="dfast2012"> 
              <img src={Images.Dfast2012LoanScenario} placeholder=""/> 
              <img src={Images.Dfast2012RevenueScenario} placeholder=""/> 
            </div>
          : metadata === "Data Classification"
          ? <div className="dfast2012"> 
              <img src={Images.Dfast2012LoanDataClassif} placeholder=""/> 
              <img src={Images.Dfast2012RevenueDataClassif} placeholder=""/> 
            </div>
          : metadata === "Entity ID"
          ? <div className="dfast2012"> 
              <img src={Images.Dfast2012LoanEntityID} placeholder=""/> 
              <img src={Images.Dfast2012RevenueEntityID} placeholder=""/> 
            </div>
          : metadata === "Assessment Coverage Date"
          ? <div className="dfast2012"> 
              <img src={Images.Dfast2012LoanACD} placeholder=""/> 
              <img src={Images.Dfast2012RevenueACD} placeholder=""/> 
            </div>
          : null
        
        : year === "2021" && norm === "DFAST" 
        ? metadata === "Value" || metadata === "Scaling" || metadata === "Interim Type" || metadata === "Period Date" || metadata === "Unit" 
        ? <div className="dfast2021"> 
            <img src={Images.Dfast2021LoanMetadata} placeholder=""/> 
            <img src={Images.Dfast2021RatioMetadata} placeholder=""/> 
            <img src={Images.Dfast2021RevenueMetadata} placeholder=""/>   
            <img src={Images.Dfast2021RwaMetadata} placeholder=""/>  
          </div>
        : metadata === "Financial Concept" ?
          <div className="dfast2021"> 
            <img src={Images.Dfast2021LoanFinCon} placeholder=""/> 
            <img src={Images.Dfast2021RatioFinCon} placeholder=""/> 
            <img src={Images.Dfast2021RevenueFinCon} placeholder=""/>   
            <img src={Images.Dfast2021RwaFinCon} placeholder=""/>  
          </div>
        : metadata === "Types of Scenario" ?
          <div className="dfast2021"> 
            <img src={Images.Dfast2021LoanScenario} placeholder=""/> 
            <img src={Images.Dfast2021RatioScenario} placeholder=""/> 
            <img src={Images.Dfast2021RevenueScenario} placeholder=""/>   
            <img src={Images.Dfast2021RwaScenario} placeholder=""/>  
          </div>
        : metadata === "Data Classification" ?
          <div className="dfast2021"> 
            <img src={Images.Dfast2021LoanDataClassif} placeholder=""/> 
            <img src={Images.Dfast2021RatioDataClassif} placeholder=""/> 
            <img src={Images.Dfast2021RevenueDataClassif} placeholder=""/>   
            <img src={Images.Dfast2021RwaDataClassif} placeholder=""/>  
          </div>
        : metadata === "Entity ID" ?
          <div className="dfast2021"> 
            <img src={Images.Dfast2021LoanEntityID} placeholder=""/> 
            <img src={Images.Dfast2021RatioEntityID} placeholder=""/> 
            <img src={Images.Dfast2021RevenueEntityID} placeholder=""/>   
            <img src={Images.Dfast2021RwaEntityID} placeholder=""/>  
          </div>
        : metadata === "Exercise Quarter" ?
          <div className="dfast2021"> 
            <img src={Images.Dfast2021LoanEQ} placeholder=""/> 
            <img src={Images.Dfast2021RatioEQ} placeholder=""/> 
            <img src={Images.Dfast2021RevenueEQ} placeholder=""/>   
            <img src={Images.Dfast2021RwaEQ} placeholder=""/>  
          </div>
        : metadata === "Assessment Coverage Date" ?
          <div className="dfast2021"> 
            <img src={Images.Dfast2021LoanScenario} placeholder=""/> 
            <img src={Images.Dfast2021RatioScenario} placeholder=""/> 
            <img src={Images.Dfast2021RevenueScenario} placeholder=""/>   
            <img src={Images.Dfast2021RwaScenario} placeholder=""/>  
          </div> 
        : null
        : null
        }
        
    </Container>
  )
}

export default ScreenShot