import './assets/app/app.scss'
import styled from 'styled-components';

import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
const PageWrapper = styled.div`
  width: 100%;
  margin: auto;
`;

function App() {
  return (
    <PageWrapper>
      <Header />
      <Body />
      <Footer />
    </PageWrapper>
  );
}

export default App;
