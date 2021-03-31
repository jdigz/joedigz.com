import './assets/app/app.scss'
import Header from './components/header';
import styled from 'styled-components';

const PageWrapper = styled.div`
  max-width: 1150px;
  margin: auto;
`;

function App() {
  return (
    <PageWrapper>
      <Header />
    </PageWrapper>
  );
}

export default App;
