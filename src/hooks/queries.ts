//=============================================
// Keys
//=============================================
import { useQuery } from "@tanstack/react-query";
import {
  CardType,
  InventoryType,
  StockType,
  TransactionType,
  UserType,
} from "@/interfaces";
import { fetchAPI } from "@/utils/helper";

export const CARD_KEY = "CARD_KEY";
export const USER_KEY = "USER_KEY";
export const TRANSACTION_KEY = "TRANSACTION_KEY";
export const CATEGORY_KEY = "CATEGORY_KEY";
export const POSITION_KEY = "POSITION_KEY";
export const STOCK_KEY = "STOCK_KEY";

//=============================================
// Queries
//=============================================
export function useCards() {
  return useQuery({
    queryKey: [CARD_KEY],
    async queryFn() {
      return fetchAPI<CardType[]>("/cards");
    },
    suspense: true,
  });
}

export function useUsers() {
  return useQuery({
    queryKey: [USER_KEY],
    async queryFn() {
      return fetchAPI<UserType[]>("/users");
    },
    suspense: true,
  });
}

export function useTransactions() {
  return useQuery({
    queryKey: [TRANSACTION_KEY],
    async queryFn() {
      return fetchAPI<TransactionType[]>("/transactions");
    },
    suspense: true,
  });
}

export function useCategories() {
  return useQuery({
    queryKey: [CATEGORY_KEY],
    async queryFn() {
      return fetchAPI<InventoryType[]>(`/categories`);
    },
    suspense: true,
  });
}

export function usePositions() {
  return useQuery({
    queryKey: [POSITION_KEY],
    async queryFn() {
      return fetchAPI<InventoryType[]>("/positions");
    },
    suspense: true,
  });
}

export function useStocks() {
  return useQuery({
    queryKey: [STOCK_KEY],
    async queryFn() {
      return fetchAPI<StockType[]>(`/stocks`);
    },
    suspense: true,
  });
}
