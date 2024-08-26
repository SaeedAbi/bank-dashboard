//=============================================
// enum
//=============================================
export enum Currency {
  USD,
  Euro,
  Pound,
}
export enum Position {
  CEO,
  director,
  designer,
}
export enum TransactionType {
  withdraw,
  deposit,
}
export enum TransactionMethod {
  paypal,
  physical,
}
export enum TransactionCategory {
  entertainment,
  bill,
  investment,
  grocery,
  travel,
  shopping,
}
export enum TransactionStatus {
  rejected,
  complete,
  pending,
}
export enum BankName {
  DBL,
  BRC,
  ABM,
  MCP,
}
export enum CartType {
  gift,
  physical,
  virtual,
  others,
}
export enum StockType {
  positive,
  negative,
}
export enum ServiceCategory {
  insurance,
  shopping,
  safety,
}
//=============================================
// Interface
//=============================================
export interface Card {
  balance: number;
  holder: User['id'];
  cardType: CartType;
  bank: BankName;

  /**
   * primary key
   */
  CardNumber: string;
  expireDate: Date;
}
export interface User {
  avatar: string; //file address
  fullName: string;
  position: Position;

  /**
   * primary key
   */
  id: string;
  cards: Card['CardNumber'][];
}
export interface Transaction {
  title: string;
  date: Date;
  amount: number;
  type: TransactionType;
  method: TransactionMethod;
  description: string;
  category: TransactionCategory;
  status: TransactionStatus;
  destinationCardNumber: Card['CardNumber'];

  /**
   * primary key
   */
  id: string;
}
export interface Stoke {
  title: string;
  amount: number;
  return: number;
  type: StockType;
  id: string;
}
export interface Loan {
  total: number;
  paid: number;
  duration: number;
  interestRate: number;
  installment: number;
}
export interface Service {
  title: string;
  description: string;
  category: ServiceCategory;
}
export interface Profile {
  avatar: string;
  fullName: string;
  userName: string;
  email: string;
  password: string;
  birthDate: Date;
  presentAddress?: string;
  permanentAddress?: string;
  city?: string;
  postalCode?: number;
  country?: string;

  isSendingDigitalCurrency: boolean;
  isReceiveMerchantOrder: boolean;
  isRecommendationAccount: boolean;
  timeZone?: string; //
  isTwoFactorAuth: boolean;
}
