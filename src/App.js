import './assets/app/app.scss'
import styled from 'styled-components';

import Header from './components/header';
import Body from './components/body';

const PageWrapper = styled.div`
  width: 100%;
  margin: auto;
`;

function App() {
  return (
    <PageWrapper>
      <Header />
      <Body />
    </PageWrapper>
  );
}

export default App;
