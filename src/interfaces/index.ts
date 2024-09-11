//=============================================
// enum
//=============================================
export enum ActionType {
  withdraw,
  deposit,
}
export enum TransactionMethod {
  paypal,
  physical,
}
export enum TransactionStatus {
  rejected,
  complete,
  pending,
}
export enum ReturnType {
  positive,
  negative,
}

//=============================================
// Interface
//=============================================
export interface CurrencyType {
  id: string;
  label: string;
  symbol: string;
}
export interface InventoryType {
  id: number;
  label: string;
}
export interface BankType {
  id: number;
  label: string;
  abbreviation: string;
}
export interface StockType {
  id: number;
  label: string;
  amount: number;
  return: number;
  type: ReturnType;
}
export interface LoanType {
  total: number;
  paid: number;
  duration: number;
  interestRate: number;
  installment: number;
}
export interface ServiceType {
  id: number;
  label: string;
  description: string;
}
export interface ProfileType {
  avatar: string;
  fullName: string;
  userName: string;
  email: string;
  password: string;
  birthDate: string;
  presentAddress?: string;
  permanentAddress?: string;
  city?: string;
  postalCode?: number;
  country?: string;

  isSendingDigitalCurrency: boolean;
  isReceiveMerchantOrder: boolean;
  isRecommendationAccount: boolean;
  timeZone?: string;
  isTwoFactorAuth: boolean;
}
export interface UserType {
  /**
   * primary key
   */
  id: number;
  avatar?: string;
  fullName: string;
  position: InventoryType["id"];
  /**
   * each user can have a multiple cards
   */
  cards: CardType["cardNumber"][];
}
export interface CardType {
  /**
   * primary key
   */
  cardNumber: string;
  balance: number;
  holder: UserType["id"];
  /**
   * credit card's type
   */
  type: InventoryType["id"];
  bank: BankType["id"];
  expireDate: string;
}
export interface TransactionType {
  /**
   * primary key
   */
  id: string;
  label: string;
  date: string;
  amount: number;
  type: ActionType;
  method: TransactionMethod;
  description?: string;
  category: InventoryType["id"];
  status: TransactionStatus;
  destinationCardNumber: CardType["cardNumber"];

  /**
   * transaction belongs to that user
   */
  userId: UserType["id"];

}
