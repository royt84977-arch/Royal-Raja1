
export enum TransactionType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAWAL = 'WITHDRAWAL',
  WAGER = 'WAGER',
  WINNING = 'WINNING'
}

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  date: string;
  status: 'SUCCESS' | 'PENDING' | 'FAILED';
  gameName?: string;
  bazi?: string; // e.g., "Bazi 1"
  digit?: string; // The number played
  userMobile?: string; // For admin view
}

export interface Game {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
  icon: string;
  status: 'OPEN' | 'CLOSED';
  rules: string;
  bazi?: string[];
}

export interface User {
  name: string;
  mobile: string;
  walletBalance: number;
  bankDetails?: {
    accountHolderName: string;
    accountNumber: string;
    ifsc: string;
    bankName: string;
  };
}