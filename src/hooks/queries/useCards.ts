import { useQuery } from "@tanstack/react-query";

async function fetchData() {
  const res = await fetch("/cards");
  if (!res.ok) {
    throw new Error("cant get the cards");
  }
  return res.json();
}

export function useCards() {
  const {
    data: cards,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cards"],
    queryFn: fetchData,
  });
  return { isLoading, error, cards };
}
