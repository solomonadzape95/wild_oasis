/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Checkbox from "../../ui/Checkbox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useChecking } from "./useCheckIn";
import { useSettings } from "../settings/useSettings";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirm, setConfirm] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const { settings, isLoading: loadingSettings } = useSettings();
  const moveBack = useMoveBack();
  const { checkFn, isCheckingIn } = useChecking();
  const { booking, isLoading } = useBooking();
  useEffect(() => setConfirm(booking?.isPaid || false), [booking]);
  function handleCheckin() {
    if (!confirm) return;
    if (addBreakfast) {
      checkFn({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optBreakfastPrice,
          totalPrice: totalPrice + optBreakfastPrice,
        },
      });
    } else {
      checkFn({ bookingId, breakfast: {} });
    }
  }
  if (isLoading || loadingSettings) return <Spinner />;
  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;
  const optBreakfastPrice = settings.breakfastPrice * numNights * numGuests;
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirm(false);
            }}
            id="breakfast"
          >
            Want to add breakfast for {formatCurrency(optBreakfastPrice)}
          </Checkbox>
        </Box>
      )}
      <Box>
        <Checkbox
          checked={confirm}
          onChange={() => setConfirm(!confirm)}
          id="confirm"
          disabled={confirm || isCheckingIn}
        >
          I confirm that {guests.fullName} have paid the total amount of
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(totalPrice + optBreakfastPrice)} (${formatCurrency(totalPrice)} + ${formatCurrency(optBreakfastPrice)})`}
        </Checkbox>
      </Box>
      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirm || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
