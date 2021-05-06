import React from 'react';
import './assets/app/app.scss'
import styled from 'styled-components';

import Header from './components/header';
import Body from './components/Body';
import Footer from './components/footer';
import FloatingFooter from './components/floatingFooter';

const PageWrapper = styled.div`
  width: 100%;
  margin: auto;
  scroll-behavior: smooth;
  max-width: 1920px;
`;

function App() {
  return (
    <PageWrapper>
      <Header />
      <Body />
      <Footer />
      <FloatingFooter />
    </PageWrapper>
  );
}

export default App;
