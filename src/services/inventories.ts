import {
    BankType,
    CurrencyType,
    InventoryType, LoanType,
    ServiceType, StockType, StokeType,
} from '@/interfaces';
import {
    banks,
    categories,
    creditCards,
    currencies, loans,
    positions,
    services, stocks,
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
export async function getAllLoans(): Promise<LoanType[]> {
    return loans;
}
export async function getAllStocks(): Promise<StokeType[]> {
    return stocks;
}
