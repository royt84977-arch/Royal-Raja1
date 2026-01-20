
import React from 'react';
import { Game, Transaction, TransactionType } from './types';
import { 
  Trophy, 
  Dices, 
  Zap, 
  MapPin, 
  Target 
} from 'lucide-react';

export const GAMES: Game[] = [
  { 
    id: 'kf1', 
    name: 'Kolkata Fatafat', 
    startTime: '10:00 AM', 
    endTime: '08:00 PM', 
    icon: 'target', 
    status: 'OPEN',
    rules: '8 Bazi daily. Results are declared every hour on the hour. Single, Patti, and Jodi bets are available.',
    bazi: ['Bazi 1', 'Bazi 2', 'Bazi 3', 'Bazi 4', 'Bazi 5', 'Bazi 6', 'Bazi 7', 'Bazi 8'],
  },
  { 
    id: 'mh1', 
    name: 'Maharashtra', 
    startTime: '11:00 AM', 
    endTime: '09:00 PM', 
    icon: 'map-pin', 
    status: 'OPEN',
    rules: 'This is a state-level game. Bids are accepted until 15 minutes before the draw time. Payout is 9x for Single.',
    bazi: ['Bazi 1', 'Bazi 2', 'Bazi 3', 'Bazi 4'],
  },
  { 
    id: 'df1', 
    name: 'Delhi Fatafat', 
    startTime: '12:00 PM', 
    endTime: '10:00 PM', 
    icon: 'zap', 
    status: 'OPEN',
    rules: 'Similar to Kolkata Fatafat but follows the Delhi timezone for results. Max bet per number is ₹10,000.',
    bazi: ['Bazi 1', 'Bazi 2', 'Bazi 3', 'Bazi 4'],
  },
  { 
    id: 'mb1', 
    name: 'Main Bazar', 
    startTime: '09:00 PM', 
    endTime: '12:00 AM', 
    icon: 'dices', 
    status: 'CLOSED',
    rules: 'Night market game. Open and Close results are declared separately. Jodi is the most popular bet type.',
    bazi: ['Open', 'Close'],
  },
  { 
    id: 'nd1', 
    name: 'New Dumdum', 
    startTime: '08:00 AM', 
    endTime: '06:00 PM', 
    icon: 'trophy', 
    status: 'OPEN',
    rules: 'Early morning game. Minimum bid amount is ₹10. Winnings can be withdrawn instantly after result declaration.',
    bazi: ['Bazi 1', 'Bazi 2', 'Bazi 3', 'Bazi 4'],
  },
];

export let MOCK_TRANSACTIONS: Transaction[] = [
  { id: 'tx1', type: TransactionType.DEPOSIT, amount: 500, date: '2023-11-20 10:30', status: 'SUCCESS', userMobile: '+91 1234567890' },
  { id: 'tx2', type: TransactionType.WAGER, amount: 100, date: '2023-11-20 11:15', status: 'SUCCESS', gameName: 'Kolkata Fatafat', bazi: 'Bazi 2', digit: '5', userMobile: '+91 1234567890' },
  { id: 'tx3', type: TransactionType.WINNING, amount: 450, date: '2023-11-20 12:00', status: 'SUCCESS', gameName: 'Kolkata Fatafat', userMobile: '+91 1234567890' },
  { id: 'tx4', type: TransactionType.WITHDRAWAL, amount: 300, date: '2023-11-21 09:45', status: 'PENDING', userMobile: '+91 1234567890' },
  { id: 'tx5', type: TransactionType.WAGER, amount: 50, date: '2023-11-21 10:00', status: 'SUCCESS', gameName: 'Delhi Fatafat', bazi: 'Bazi 1', digit: '42', userMobile: '+91 9876543210' },
  { id: 'tx6', type: TransactionType.WAGER, amount: 20, date: '2023-11-21 10:05', status: 'SUCCESS', gameName: 'Kolkata Fatafat', bazi: 'Bazi 5', digit: '128', userMobile: '+91 1234567890' },
];

// Function to add new transactions to the mock list
export const addTransaction = (transaction: Transaction) => {
  MOCK_TRANSACTIONS.unshift(transaction);
};

// Function to delete a transaction from the mock list
export const deleteTransaction = (transactionId: string) => {
  const index = MOCK_TRANSACTIONS.findIndex(tx => tx.id === transactionId);
  if (index > -1) {
    MOCK_TRANSACTIONS.splice(index, 1);
  }
};


export const BANNERS = [
  { id: 1, image: 'https://picsum.photos/seed/bonus/800/400', title: '100% Welcome Bonus', subtitle: 'On your first deposit' },
  { id: 2, image: 'https://picsum.photos/seed/festival/800/400', title: 'Festival Special', subtitle: 'Play and Win up to ₹1 Lakh' },
  { id: 3, image: 'https://picsum.photos/seed/refer/800/400', title: 'Refer & Earn', subtitle: 'Get ₹50 per friend join' },
];