/* eslint-disable react/react-in-jsx-scope */
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { CabinsTable } from "../features/cabins/CabinTable";
import { AddCabin } from "../features/cabins/addCabins";
import { CabinTableOperations } from "../features/cabins/CabinTableOperations";

function Cabins() {
  return (
    <>
      {" "}
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinsTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
