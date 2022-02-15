import styled from "styled-components";
import { 
  Value, 
  Scaling, 
  InterimType,
  PeriodDate,
  Unit,
  FinancialConcept,
  TOS,
  DataClassification,
  EntityID,
  ExerciseQuarter,
  ACD 
} from '../data/DfastData22012';

const Container = styled.div`
  width: 100%;
`
const Table = styled.table`
  font-size: 20px;
  width: 95%;
  border-collapse: collapse;
  table-layout:fixed;

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

      >td {
        text-align: center;
        border: 1px solid #ddd;
      }
    }      
  }
`
const DfastTableRight22012 = ({data}) => {
  return (
        <Container>
            <Table>
            {data === "Value" ? 
              <tbody>
                <tr>
                  <th colSpan={"2"}>{data}</th>
                </tr>
                {Value.map((item) => (
                  <tr>
                    {item.map((i) => (
                      <td>{i}</td>   
                    ))}
                  </tr>
                ))}
              </tbody>

              :data === "Scaling" ?
                <tbody>
                  <tr>
                    <th colSpan={"2"}>{data}</th>
                  </tr>
                  {Scaling.map((item) => (
                    <tr>
                      {item.map((i) => (
                        <td>{i}</td>   
                      ))}
                    </tr>
                  ))}
                </tbody>

              :data === "Interim Type" ?
                <tbody>
                    <tr>
                      <th colSpan={"2"}>{data}</th>
                    </tr>
                    {InterimType.map((item) => (
                      <tr>
                        {item.map((i) => (
                          <td>{i}</td>   
                        ))}
                      </tr>
                    ))}
                </tbody>
              :data === "Period Date" ?
                <tbody>
                    <tr>
                      <th colSpan={"2"}>{data}</th>
                    </tr>
                    {PeriodDate.map((item) => (
                      <tr>
                        {item.map((i) => (
                          <td>{i}</td>   
                        ))}
                      </tr>
                    ))}
                </tbody>
              :data === "Unit" ?
                <tbody>
                    <tr>
                      <th colSpan={"2"}>{data}</th>
                    </tr>
                    {Unit.map((item) => (
                      <tr>
                        {item.map((i) => (
                          <td>{i}</td>   
                        ))}
                      </tr>
                    ))}
                </tbody>
              :data === "Financial Concept" ?
                <tbody>
                    <tr>
                      <th colSpan={"2"}>{data}</th>
                    </tr>
                    {FinancialConcept.map((item) => (
                      <tr>
                        {item.map((i) => (
                          <td>{i}</td>   
                        ))}
                      </tr>
                    ))}
                </tbody>
              :data === "Types of Scenario" ?
                <tbody>
                    <tr>
                      <th colSpan={"2"}>{data}</th>
                    </tr>
                    {TOS.map((item) => (
                      <tr>
                        {item.map((i) => (
                          <td>{i}</td>   
                        ))}
                      </tr>
                    ))}
                </tbody>
              :data === "Data Classification" ?
                <tbody>
                    <tr>
                      <th colSpan={"2"}>{data}</th>
                    </tr>
                    {DataClassification.map((item) => (
                      <tr>
                        {item.map((i) => (
                          <td>{i}</td>   
                        ))}
                      </tr>
                    ))}
                </tbody>
              :data === "Entity ID" ?
                <tbody>
                    <tr>
                      <th colSpan={"2"}>{data}</th>
                    </tr>
                    {EntityID.map((item) => (
                      <tr>
                        {item.map((i) => (
                          <td>{i}</td>   
                        ))}
                      </tr>
                    ))}
                </tbody>
              :data === "Exercise Quarter" ?
                <tbody>
                    <tr>
                      <th colSpan={"2"}>{data}</th>
                    </tr>
                    {ExerciseQuarter.map((item) => (
                      <tr>
                        {item.map((i) => (
                          <td>{i}</td>   
                        ))}
                      </tr>
                    ))}
                </tbody>
              :data === "Assessment Coverage Date" ?
                <tbody>
                    <tr>
                      <th colSpan={"2"}>{data}</th>
                    </tr>
                    {ACD.map((item) => (
                      <tr>
                        {item.map((i) => (
                          <td>{i}</td>   
                        ))}
                      </tr>
                    ))}
                </tbody>
              : null
              }

                </Table>
        </Container>
    );
};

export default DfastTableRight22012;
