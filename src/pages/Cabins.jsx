import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import { CabinsTable } from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);
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
        {showForm && <CreateCabinForm/>}
      </Row>
    </>
  );
}

export default Cabins;
