/* eslint-disable react/react-in-jsx-scope */
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import { CabinsTable } from "./CabinTable";

export function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new Cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm type="modal" />
      </Modal.Window>
      <Modal.Open opens="cabin-table">
        <Button>Show Table</Button>
      </Modal.Open>
      <Modal.Window name="cabin-table">
        <CabinsTable />
      </Modal.Window>
    </Modal>
    // <div>
    //   <Button onClick={() => setIsOpenModal((show) => !show)}>
    //     {isOpenModal ? "Close Form" : "Add new Cabin"}
    //   </Button>
    //   {isOpenModal && (
    //     <Modal onClose={() => setIsOpenModal((show) => !show)}>
    //       <CreateCabinForm closeForm={() => setIsOpenModal((show) => !show)} type="modal"/>
    //     </Modal>
    //   )}
    // </div>
  );
}
