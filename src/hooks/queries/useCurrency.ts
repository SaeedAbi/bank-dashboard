import { useQuery } from "@tanstack/react-query";

async function fetchData() {
  const res = await fetch("/currencies");
  if (!res.ok) {
    throw new Error("can get the currencies");
  }
  return res.json();
}

export function useCurrency() {
  const {
    data: currencies,
    error,
    isLoading: isLoadingCurrency,
  } = useQuery({
    queryKey: ["currencies"],
    queryFn: fetchData,
  });
  return { currencies, isLoadingCurrency, error };
}
