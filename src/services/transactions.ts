import { TransactionType } from "@/interfaces";
import { transactions } from "@/db";
import { transactionSchema } from "@/validation/transaction";

// in-memory database
const transactionsDatabase: TransactionType[] = [...transactions];

export async function createTransaction(
  transaction: TransactionType
): Promise<TransactionType> {
  try {
    // validate transaction data
    await transactionSchema.validate(transaction);

    // check if transaction with the same id already exists
    if (
      transactionsDatabase.some(
        (existingTransaction) => existingTransaction.id === transaction.id
      )
    ) {
      throw new Error("Transaction already exists.");
    }

    transactionsDatabase.push(transaction);
    return transaction;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong"
    );
  }
}
export async function getTransactionById(
  id: TransactionType["id"]
): Promise<TransactionType> {
  const transaction = transactionsDatabase.find((t) => t.id === id);

  if (!transaction) {
    throw new Error("Transaction not found.");
  }

  return transaction;
}
export async function getAllTransactions(): Promise<TransactionType[]> {
  return transactionsDatabase;
}
export async function updateTransaction(
  id: TransactionType["id"],
  updatedTransaction: Partial<TransactionType>
): Promise<TransactionType> {
  try {
    // validate updated transaction data
    if (updatedTransaction.id && updatedTransaction.id !== id) {
      throw new Error("Transaction cannot be updated.");
    }

    // find the transaction to update
    const transactionIndex = transactionsDatabase.findIndex((t) => t.id === id);
    if (transactionIndex === -1) {
      throw new Error("Transaction not found.");
    }

    // merge updated transaction data
    const existingTransaction = transactionsDatabase[transactionIndex];
    const newTransaction = { ...existingTransaction, ...updatedTransaction };

    // validate merged transaction data
    await transactionSchema.validate(newTransaction);

    transactionsDatabase[transactionIndex] = newTransaction;
    return newTransaction;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong"
    );
  }
}
export async function deleteTransaction(
  id: TransactionType["id"]
): Promise<boolean> {
  const transactionIndex = transactionsDatabase.findIndex(
    (transaction) => transaction.id === id
  );
  if (transactionIndex === -1) {
    throw new Error("Transaction not found.");
  }

  // transaction deleted successfully
  transactionsDatabase.splice(transactionIndex, 1);
  return true;
}
