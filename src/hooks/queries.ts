//=============================================
// Keys
//=============================================
import { useQuery } from "@tanstack/react-query";
import { CardType } from "@/interfaces";
import { fetchAPI } from "@/utils/helper";

export const CARD_KEY = "CARD_KEY";

//=============================================
// Queries
//=============================================
export function useCards() {
  return useQuery({
    queryKey: [CARD_KEY],
    async queryFn() {
      return fetchAPI<CardType[]>("/cards");
    },
  });
}
