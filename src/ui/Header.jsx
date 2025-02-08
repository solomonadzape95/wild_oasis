/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-iems: center;
  gap: 2.4rem;
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
