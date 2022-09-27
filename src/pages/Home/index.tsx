import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import GlobalStyle from 'lib/globalStyles';
import { Header } from 'layouts/AppLayout/Header';
import { Sidebar } from 'layouts/AppLayout/Sidebar';
import { Products } from 'layouts/AppLayout/Products';
import { BasketList } from 'layouts/AppLayout/BasketList';
import { Footer } from 'layouts/AppLayout/Footer';
import { mediaBreakpointDown } from 'lib/styleHelpers';
import { ReduxStateType } from 'types';

const StyledMainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 76.68px;
`;

const StyledBasketList = styled(BasketList)`
  ${mediaBreakpointDown(1290)} {
    display: none;
  }
`;

const Home: React.FC = () => {
  const { isSidebarOpen } = useSelector((state: ReduxStateType) => state.sidebar);

  return (
    <>
      <GlobalStyle isSidebarOpen={isSidebarOpen} />
      <Header />
      <StyledMainWrapper>
        <Sidebar />
        <Products />
        <StyledBasketList />
      </StyledMainWrapper>
      <Footer />
    </>
  );
};

export default Home;
