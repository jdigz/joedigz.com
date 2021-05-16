import React from 'react'
import Data from '../assets/data/statementOfQualification.json';
import styled from 'styled-components';
import { DonutLarge } from '@material-ui/icons';

const QualificationsContainer = styled.div`
  margin: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Section = styled.div`
  margin: 24px;
`;
const SectionTitle = styled.h1`
  font-size: 32px;
`;
const Qualification = styled.span`
  display: flex;
  margin: 4px 0;
  font-size: 16px;
  letter-spacing: 0.6px;
  align-items: center;
  p {
    margin: 0;
  }
  svg {
    color: var(--primary);
    margin: 0 7px;
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
            </Section>
            )
        })
      }
    </QualificationsContainer>
  )
}

export default StatementofQualification
