import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CcarTableRight from './components/CcarTableRight2012';
import { getLink } from '../src/Links'
import DfastTableRight1 from './components/DfastTableRight12012';
import DfastTableRight2 from './components/DfastTableRight22012'
import DfastTableRight02021 from './components/DfastTableRight02021';
import DfastTableRight12021 from './components/DfastTableRight12021';
import DfastTableRight22021 from './components/DfastTableRight22021';
import DfastTableRight32021 from './components/DfastTableRight32021';
import ScreenShot from './components/ScreenShot';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 6.5px;
  height: 250vh;
`
const ContentSection = styled.div`
  display: flex;
`
const LabelColumn = styled.div`
  margin: 20px 50px;

  >h1 {
    font-weight: 550;
    margin-bottom: 6.5px;
  }

  >span {
    font-weight: 550;
    font-size: 10px;
  }
`
const ContentColumn = styled.div`
  margin: 20px 10px;
  

  >h1 {
    font-weight: 100;
    margin-bottom: 5px;

    >a {
      text-decoration: underline;
      color: black;

      &:hover {
        color: blue;
      }
    }
  }

  >select {
    margin-bottom: 5px;
    width: 200px;
    font-size: 13px;
  }

`

const TableText = styled.h1`
  margin-bottom: 20px;
  font-weight: 500;
`
const TableSection = styled.div`
  margin-left: 50px
`
const CcarContainer = styled.div`
  display: flex;
`
const CcarTableLeft = styled.table`
  font-size: 20px;
  width: 28%;
  border-collapse: collapse;

  >tbody {

    >tr {
      font-size: 15px;
      line-height: 25px;
      border: 1px solid #ddd;

      &:nth-child(even) {
        background-color: #f2f2f2;
      }
      
      &:hover {
        background-color: #ddd;
      }

      >th {
        background-color: #00447c;
        color: white;
        font-size: 15px;
        padding: 5px;
      }
    }
  }
`
const DfastTable = styled.div``
const DfastTableContainerLeft1 = styled.div`
  display: flex;
  margin-top: 30px;
`
const DfastTableLeft1 = styled.table`
  font-size: 20px;
  width: 40%;
  border-collapse: collapse;
  
  >tbody {

    >tr {
      font-size: 15px;
      line-height: 25px;
      border: 1px solid #ddd;
      margin-left: 10px;

      &:nth-child(even) {
        background-color: #f2f2f2;
      }
      
      &:hover {
        background-color: #ddd;
      }

      >th {
        background-color: #00447c;
        color: white;
        font-size: 15px;
        padding: 5px;
      }
    }
  }
`
const DfastTableContainerLeft2 = styled.div`
  display: flex;
  margin-top: 30px;
`
const DfastTableLeft2 = styled.table`
  font-size: 20px;
  width: 40%;
  border-collapse: collapse;

  >tbody {

    >tr {
      font-size: 15px;
      line-height: 25px;
      border: 1px solid #ddd;
      margin-left: 10px;

      &:nth-child(even) {
        background-color: #f2f2f2;
      }
      
      &:hover {
        background-color: #ddd;
      }

      >th {
        background-color: #00447c;
        color: white;
        font-size: 15px;
        padding: 5px;
      }
    }
  }
`

const App = () => {
  const [date, setDate] = useState("")
  const [report, setReport] = useState(" ")
  const [docID, setDocID] = useState("")
  const [norm, setNorm] = useState("")
  const [metadata, setMetadate] = useState(null)
  
  useEffect(() => {
    setDocID(report + " " + date);
  }, [date, report]);
  
  return (
      <Container>

          <ContentSection>
            <LabelColumn>
              <h1>Project ID and Name:</h1>
              <h1>Company Name:</h1>
              <h1>Iconum:</h1>
              <h1>Select Date:</h1>
              <h1>Select Report:</h1>
              <h1>Doc ID:</h1>
              <h1>Select Norm Table Type:</h1>
              <h1>Select Metadata Type:</h1>
            </LabelColumn>
            <ContentColumn>
              <h1>BK050b - SIFI - U.S D-SIBs (CCAR and DFAST)</h1>
              <h1>Bank of America Corporation</h1>
              <h1>22213</h1>

              <select value={date} onChange={e => setDate(e.target.value)}>
                <option>&nbsp;</option>
                <option>2012</option>
                <option>2021</option>
              </select><br/>

              <select value={report} onChange={e => setReport(e.target.value)}>
                <option>&nbsp;</option>
                <option>CCAR-CSV</option>
                <option>CCAR-PDF</option>
                <option>DFAST-CSV</option>
                <option>DFAST-PDF</option>
              </select><br/>

              <h1><a href={getLink(docID)} target="_blank">{docID}</a>&nbsp;</h1>

              <select value={norm} onChange={e => setNorm(e.target.value)}>
                <option>&nbsp;</option>
                <option>CCAR</option>
                <option>DFAST</option>
              </select><br/>

              <select value={metadata} onChange={e => setMetadate(e.target.value)}>
                <option>&nbsp;</option>
                <option value="Value" selected="">Value</option>
                <optgroup label="Metadata">
                  <option value="Scaling">Scaling</option>
                  <option value="Interim Type">Interim Type</option>
                  <option value="Period Date">Period Date</option>
                  <option value="Unit">Unit</option>
                </optgroup>
                <optgroup label="Dimensions">
                  <option value="Financial Concept">Financial Concept</option>
                  <option value="Types of Scenario">Types of Scenarios</option>
                  <option value="Data Classification">Data Classification</option>
                  <option value="Entity ID">Entity ID</option>
                  <option value="Exercise Quarter">Exercise Quarter</option>
                  <option value="Forecast Horizon">Forecast Horizon</option>
                  <option value="Number of Participating Firms">Number of Participating Firms</option>
                  <option value="Exercise Name">Exercise Name</option>
                </optgroup>
              </select>
            </ContentColumn>

          </ContentSection>

          <TableSection>
            <TableText>Normalized Table(s)</TableText>
            {/* GET THE SELECTED VALUE OF NORM */}
            {date === "2012" && norm === "CCAR" ? 
              <CcarContainer>
                <CcarTableLeft>
                  <tbody>
                    <tr>
                      <th>Row Table</th>
                    </tr>
                    <tr>Tier 1 Common Capital Ratio (%)</tr>
                    <tr>Tier 1 Capital Ratio (%)</tr>
                    <tr>Total Risk-based Capital Ratio (%)</tr>
                    <tr>Tier 1 Leverage Ratio (%)</tr>   
                  </tbody>
                </CcarTableLeft>
                {/* CHECK IF THERE IS SELECTED DATA IN METADATA BEFORE SHOWING THE TABLES */}
                {metadata && <CcarTableRight data={metadata} />}
              </CcarContainer>

             : date === "2012" && norm === "DFAST" ?
              <DfastTable>
                <DfastTableContainerLeft1>
                  <DfastTableLeft1>
                    <tbody>
                      <tr>
                        <th>Row Table</th>
                      </tr>
                      <tr>Pre-Provision Net Revenue</tr>
                      <tr>Other Revenue</tr>
                      <tr>Less: Provions</tr>
                      <tr>Less: Realized Losses/Gains on Securities(AFS/HTM)</tr>
                      <tr>Less: Trading and Counterparty Losses</tr>
                      <tr>Less: Other Losses/Gains</tr>
                      <tr>Net Income before Taxes</tr>   
                    </tbody>
                  </DfastTableLeft1>
                  {/* CHECK IF THERE IS SELECTED DATA IN METADATA BEFORE SHOWING THE TABLES */}
                  {metadata && <DfastTableRight1 data={metadata} />}
                </DfastTableContainerLeft1>

                <DfastTableContainerLeft2>
                  <DfastTableLeft2>
                    <tbody>
                      <tr>
                        <th>Row Table</th>
                      </tr>
                      <tr>Loan Losses</tr>
                      <tr>First Lien Mortgages, Domestic</tr>
                      <tr>Junior Liens and HELOCs, Domestic</tr>
                      <tr>Commercial and Industrial</tr>
                      <tr>Commercial Real Estate, Domestic</tr>
                      <tr>Credit Cards</tr>
                      <tr>Other Consumer</tr>
                      <tr>Other Loans</tr>      
                    </tbody>
                  </DfastTableLeft2>
                  {/* CHECK IF THERE IS SELECTED DATA IN METADATA BEFORE SHOWING THE TABLES */}
                  {metadata && <DfastTableRight2 data={metadata} />}
                </DfastTableContainerLeft2>
              </DfastTable>

             : date === "2021" && norm === "DFAST" ?
             <DfastTable>
                <CcarContainer>
                  <CcarTableLeft>
                    <tbody>
                      <tr>
                        <th>Row Table</th>
                      </tr>
                      <tr>Common Equity Tier 1 Capital Ratio</tr>
                      <tr>Tier 1 Capital Ratio</tr>
                      <tr>Total Capital Ratio</tr>
                      <tr>Tier 1 Leverage Ratio</tr>
                      <tr>Supplementary Leverage Ratio</tr>    
                    </tbody>
                  </CcarTableLeft>
                  {/* CHECK IF THERE IS SELECTED DATA IN METADATA BEFORE SHOWING THE TABLES */}
                  {metadata && <DfastTableRight02021 data={metadata} />}
                </CcarContainer>

                <DfastTableContainerLeft1>
                  <DfastTableLeft1>
                    <tbody>
                      <tr>
                        <th>Row Table</th>
                      </tr>
                      <tr>Risk-Weigthed Assets</tr>
                    </tbody>
                  </DfastTableLeft1>
                  {/* CHECK IF THERE IS SELECTED DATA IN METADATA BEFORE SHOWING THE TABLES */}
                  {metadata && <DfastTableRight12021 data={metadata} />}
                </DfastTableContainerLeft1>

                <DfastTableContainerLeft2>
                  <DfastTableLeft2>
                    <tbody>
                      <tr>
                        <th>Row Table</th>
                      </tr>
                      <tr>Pre-Provision Net Revenue</tr>
                      <tr>Net Interest Income</tr>
                      <tr>Nonintereset Income</tr>
                      <tr>Less: Noninterest Expense</tr>
                      <tr>Other Revenue</tr>
                      <tr>Less: Provision for Loan and Lease Losses</tr>
                      <tr>Less: Credit Losses on Investment Securities (AFS/HTM)</tr>
                      <tr>Less: Trading and Counterparty Losses</tr>
                      <tr>Less: Other Losses/Gains</tr>
                      <tr>Net Income before Taxes</tr>
                      <tr>Other Comprehensive Income</tr>
                      <tr>AOCI included in Capital(billions of dollars)</tr>    
                    </tbody>
                  </DfastTableLeft2>
                  {/* CHECK IF THERE IS SELECTED DATA IN METADATA BEFORE SHOWING THE TABLES */}
                  {metadata && <DfastTableRight22021 data={metadata} />}
                </DfastTableContainerLeft2>

                <DfastTableContainerLeft2>
                  <DfastTableLeft2>
                    <tbody>
                      <tr>
                        <th>Row Table</th>
                      </tr>
                      <tr>Loan Losses</tr>
                      <tr>First Lien Mortgages,Domestic</tr>
                      <tr>Junior Liens and HELOCs,Domestic</tr>
                      <tr>Commercial and Industrial</tr>
                      <tr>Commercial Real Estate,Domestic</tr>
                      <tr>Credit Cards</tr>
                      <tr>Other Consumer</tr>
                      <tr>Other Loans</tr>      
                    </tbody>
                  </DfastTableLeft2>
                  {/* CHECK IF THERE IS SELECTED DATA IN METADATA BEFORE SHOWING THE TABLES */}
                  {metadata && <DfastTableRight32021 data={metadata} />}
                </DfastTableContainerLeft2>

              </DfastTable>
             : null
            }
            
          </TableSection>
          
          <ScreenShot year={date} norm={norm} metadata={metadata} />
      </Container>
  );
};

export default App;
