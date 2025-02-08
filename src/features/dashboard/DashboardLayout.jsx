/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import { useRecentbookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import Spinner from "../../ui/Spinner";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;
export function DashboardLayout() {
  const { bookings, isLoading: isLoadingBooks } = useRecentbookings();
  const { stays, isLoading: isLoadingStays } = useRecentStays();

  if (isLoadingBooks || isLoadingStays) return <Spinner />;
  
  return (
    <StyledDashboardLayout>
      <div>Stats</div>
      <div>Today</div>
      <div>Stay Duration</div>
      <div>Sales</div>
    </StyledDashboardLayout>
  );
}
