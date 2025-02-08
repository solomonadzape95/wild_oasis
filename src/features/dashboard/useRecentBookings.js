import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentbookings() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));
  const date = subDays(new Date(), numDays).toISOString();
  const { data: bookings, isLoading } = useQuery({
    queryFn: () => getBookingsAfterDate(date),
    queryKey: ["bookings", `last${numDays}`],
  });
  return { bookings, isLoading };
}
