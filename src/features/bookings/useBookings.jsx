/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();
  //FILTER
  const filterVal = searchParams.get("status") || "all";
  const filter =
    filterVal === "all" || !filterVal
      ? null
      : { field: "status", value: filterVal };

  //SORT
  const sortByVal = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByVal.split("-");
  const sortBy = { field, direction };
  //PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });
  return { isLoading, bookings, error, count };
}
