/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import { Modal } from "../../ui/Modal";

export function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    // <Modal>
    //   <Modal.Open opens="cabin-form">
    //     <Button>Add new Cabin</Button>
    //   </Modal.Open>
    //   <Modal.Window name='cabin-form'>
    //     <CreateCabinForm
    //       closeForm={() => setIsOpenModal((show) => !show)}
    //       type="modal"
    //     />
    //   </Modal.Window>
    // </Modal>
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        {isOpenModal ? "Close Form" : "Add new Cabin"}
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal((show) => !show)}>
          <CreateCabinForm closeForm={() => setIsOpenModal((show) => !show)} type="modal"/>
        </Modal>
      )}
    </div>
  );
}
