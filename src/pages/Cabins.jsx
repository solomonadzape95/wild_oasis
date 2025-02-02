import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { CabinsTable } from "../features/cabins/CabinTable";
import { AddCabin } from "../features/cabins/addCabins";

function Cabins() {
  return (
    <>
      {" "}
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinsTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
