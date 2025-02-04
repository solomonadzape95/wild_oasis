import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const filterVal = searchParams.get("status") || "all";
  const filter =
    filterVal === "all" || !filterVal
      ? null
      : { field: "status", value: filterVal };
  const sortByVal = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByVal.split("-");
  const sortBy = { field, direction };
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });
  return { isLoading, bookings, error };
}
