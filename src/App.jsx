import styled from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;
function App() {
  return (
    <>
      {" "}
      <GlobalStyles />
      <StyledApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h3">Check In and Check Out</Heading>
              <Button
                variation="primary"
                size="small"
                onClick={() => alert("checked in!!")}
              >
                Check In
              </Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("checked out!!")}
              >
                Check Out
              </Button>
            </div>
          </Row>
          <Row type="vertical">
            {" "}
            <Heading as="h3">My Form</Heading>
            <Input type="number" placeholder="number of guests" />
            <Input type="number" placeholder="number of guests" />
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
