import { useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { CabinsTable } from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      {" "}
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinsTable />
        <Button onClick={() => setShowForm((show) => !show)}>
          {showForm ? "Close Form" : "Add new Cabin"}
        </Button>
        {showForm && (
          <CreateCabinForm closeForm={() => setShowForm((show) => !show)} />
        )}
      </Row>
    </>
  );
}

export default Cabins;
