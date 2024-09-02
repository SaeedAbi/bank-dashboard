import { useQuery } from "@tanstack/react-query";

async function fetchData() {
  const res = await fetch("/positions");
  if (!res.ok) {
    throw new Error("cant get the positions");
  }
}

export function usePositions() {
  const {
    data: positions,
    isLoading: isLoadingPosition,
    error: errorPositions,
  } = useQuery({
    queryKey: ["positions"],
    queryFn: fetchData,
  });
  return { positions, isLoadingPosition, errorPositions };
}
