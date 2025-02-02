import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import { Modal } from "../../ui/Modal";

export function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        {isOpenModal ? "Close Form" : "Add new Cabin"}
      </Button>
      {isOpenModal && (
        <Modal>
          <CreateCabinForm closeForm={() => setIsOpenModal((show) => !show)} />
        </Modal>
      )}
    </div>
  );
}
