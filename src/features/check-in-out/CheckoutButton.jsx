/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Button from "../../ui/Button";
import { useCheckingOut } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkOut, isCheckingOut } = useCheckingOut();
  return (
    <Button
      $variation="primary"
      $size="small"
      disabled={isCheckingOut}
      onClick={() => checkOut(bookingId)}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
