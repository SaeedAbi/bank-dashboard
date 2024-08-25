import {
  BankType,
  CurrencyType,
  InventoryType,
  ServiceType,
} from '@/interfaces';
import {
  banks,
  categories,
  creditCards,
  currencies,
  positions,
  services,
} from '@/db';

export async function getAllCurrencies(): Promise<CurrencyType[]> {
  return currencies;
}
export async function getAllPositions(): Promise<InventoryType[]> {
  return positions;
}
export async function getAllCategories(): Promise<InventoryType[]> {
  return categories;
}
export async function getAllBanks(): Promise<BankType[]> {
  return banks;
}
export async function getAllCreditCards(): Promise<InventoryType[]> {
  return creditCards;
}
export async function getAllServices(): Promise<ServiceType[]> {
  return services;
}
