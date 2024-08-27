import {
  BankType,
  CurrencyType,
  InventoryType,
  LoanType,
  ServiceType,
  StokeType,
} from '@/interfaces';
import {
  banks,
  categories,
  creditCards,
  currencies,
  loans,
  positions,
  services,
  stocks,
} from '@/db';
import { randomDelayForAPIServices, sleep } from '@/utils/helper';

export async function getAllCurrencies(): Promise<CurrencyType[]> {
  await randomDelayForAPIServices();
  return currencies;
}
export async function getAllPositions(): Promise<InventoryType[]> {
  await randomDelayForAPIServices();
  return positions;
}
export async function getAllCategories(): Promise<InventoryType[]> {
  await randomDelayForAPIServices();
  return categories;
}
export async function getAllBanks(): Promise<BankType[]> {
  await randomDelayForAPIServices();
  return banks;
}
export async function getAllCreditCards(): Promise<InventoryType[]> {
  await randomDelayForAPIServices();
  return creditCards;
}
export async function getAllServices(): Promise<ServiceType[]> {
  await randomDelayForAPIServices();
  return services;
}
export async function getAllLoans(): Promise<LoanType[]> {
  await randomDelayForAPIServices();
  return loans;
}
export async function getAllStocks(): Promise<StokeType[]> {
  await randomDelayForAPIServices();
  return stocks;
}
