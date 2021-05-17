import React from 'react'
import Data from '../assets/data/statementOfQualification.json';
import styled from 'styled-components';
import { DonutLarge } from '@material-ui/icons';

const QualificationsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Section = styled.div`
  margin: 24px;
  margin-bottom: 0;
`;
const SectionTitle = styled.h1`
  font-size: 32px;

  @media (max-width: 1439px){
    font-size: 28px;
  }
  @media (max-width: 1129px){
    font-size: 22px;
    letter-spacing: 1px;
  }
  @media (max-width: 800px){
    font-size: 20px;
    letter-spacing: 0px;
  }
  @media (max-width: 600px){
    font-size: 18px;
  }
`;
const Qualification = styled.span`
  display: flex;
  margin: 4px 0;
  font-size: 16px;
  letter-spacing: 0.6px;
  p {
    margin: 0;
  }
  svg {
    color: var(--primary);
    margin: 0 7px;
  }

  @media (max-width: 600px){
    font-size: 15px;
  }
`;

function StatementofQualification() {
  return (
    <QualificationsContainer>
      {
        Data.map((item) => {
          return(
            <Section key={item.id}>
              <SectionTitle>{item.title}</SectionTitle>
                {item.data.map((value, index) => {
                  return <Qualification key={index}><DonutLarge fontSize="small"/><p>{value}</p></Qualification>
                })}
                <Qualification><DonutLarge fontSize="small"/><p>And More...</p></Qualification>
            </Section>
            )
        })
      }
    </QualificationsContainer>
  )
}

export default StatementofQualification
