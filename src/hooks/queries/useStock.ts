import { useQuery } from "@tanstack/react-query";

async function fetchData() {
  const res = await fetch("/stocks");
  if (!res.ok) {
    throw new Error("stocks not found");
  }
  return res.json();
}

export function useStock() {
  const {
    data: stocks,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["stocks"],
    queryFn: fetchData,
  });
  return { stocks, isLoading, error };
}
