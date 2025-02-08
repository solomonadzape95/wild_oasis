/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";
export function Stats({ numDays, bookings, confirmedStays, numCabins }) {
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const occupancy =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * numCabins);
  return (
    <>
      <Stat
        color="blue"
        title="Bookings"
        value={bookings.length}
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        color="green"
        title="Sales"
        value={formatCurrency(sales)}
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        color="indigo"
        title="Check Ins"
        value={confirmedStays.length}
        icon={<HiOutlineCalendar />}
      />
      <Stat
        color="yellow"
        title="Occupancy Rates"
        value={`${Math.round(occupancy * 100)}%`}
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}
