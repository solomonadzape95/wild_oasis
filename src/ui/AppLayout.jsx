import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import Sidebar from "./Sidebar";
const Main = styled.main`
  background: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`;
const StyledAppLayout = styled.div`
  display: grid;
  height: 100vw;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
`;
function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
