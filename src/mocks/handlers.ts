import { rest } from "msw";
import {
  getAllBanks,
  getAllCategories,
  getAllCreditCards,
  getAllCurrencies,
  getAllLoans,
  getAllPositions,
  getAllServices,
  getAllStocks,
} from "@/services/inventories";
import {
  BankType,
  CardType,
  CurrencyType,
  InventoryType,
  LoanType,
  ServiceType,
  StockType,
  TransactionType,
  UserType,
} from "@/interfaces";
import {
  createCard,
  deleteCard,
  getAllCards,
  getCardByNumber,
  updateCard,
} from "@/services/cards";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "@/services/users";
import {
  createTransaction,
  deleteTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
} from "@/services/transactions";

interface ErrorMessageType {
  message: string;
}

const delay = () => Math.random() * 2000;

export const handlers = [
  // =========================================
  // GET
  // =========================================
  rest.get<never, never, CurrencyType[]>(
    `/currencies`,
    async (_req, res, ctx) => {
      const currencies = await getAllCurrencies();
      return res(ctx.delay(delay()), ctx.json(currencies));
    }
  ),
  rest.get<never, never, InventoryType[]>(
    `/positions`,
    async (_req, res, ctx) => {
      const positions = await getAllPositions();
      return res(ctx.delay(delay()), ctx.json(positions));
    }
  ),
  rest.get<never, never, InventoryType[]>(
    `/categories`,
    async (_req, res, ctx) => {
      const categories = await getAllCategories();
      return res(ctx.delay(delay()), ctx.json(categories));
    }
  ),
  rest.get<never, never, BankType[]>(`/banks`, async (_req, res, ctx) => {
    const banks = await getAllBanks();
    return res(ctx.delay(delay()), ctx.json(banks));
  }),
  rest.get<never, never, InventoryType[]>(
    `/credit-cards`,
    async (_req, res, ctx) => {
      const creditCards = await getAllCreditCards();
      return res(ctx.delay(delay()), ctx.json(creditCards));
    }
  ),
  rest.get<never, never, ServiceType[]>(`/services`, async (_req, res, ctx) => {
    const services = await getAllServices();
    return res(ctx.delay(delay()), ctx.json(services));
  }),
  rest.get<never, never, LoanType[]>(`/loans`, async (_req, res, ctx) => {
    const loans = await getAllLoans();
    return res(ctx.delay(delay()), ctx.json(loans));
  }),
  rest.get<never, never, StockType[]>(`/stocks`, async (_req, res, ctx) => {
    const stocks = await getAllStocks();
    return res(ctx.delay(delay()), ctx.json(stocks));
  }),
  rest.get<never, never, CardType[]>(`/cards`, async (_req, res, ctx) => {
    const cards = await getAllCards();
    return res(ctx.delay(delay()), ctx.json(cards));
  }),
  rest.get<never, { id: CardType["cardNumber"] }, CardType | ErrorMessageType>(
    `/cards/:id`,
    async (req, res, ctx) => {
      try {
        const { id } = req.params;
        const card = await getCardByNumber(id);
        return res(ctx.delay(delay()), ctx.json(card));
      } catch (error) {
        return res(
          ctx.delay(delay()),
          ctx.status(422),
          ctx.json({
            message:
              error instanceof Error ? error.message : "Something went wrong",
          })
        );
      }
    }
  ),
  rest.get<never, never, UserType[]>(`/users`, async (req, res, ctx) => {
    const users = await getAllUsers();
    return res(ctx.delay(delay()), ctx.json(users));
  }),
  rest.get<never, { id: string }, UserType | ErrorMessageType>(
    `/users/:id`,
    async (req, res, ctx) => {
      try {
        const { id } = req.params;
        const user = await getUserById(Number(id));
        return res(ctx.delay(delay()), ctx.json(user));
      } catch (error) {
        return res(
          ctx.delay(delay()),
          ctx.status(422),
          ctx.json({
            message:
              error instanceof Error ? error.message : "Something went wrong",
          })
        );
      }
    }
  ),
  rest.get<never, never, TransactionType[]>(
    `/transactions`,
    async (_req, res, ctx) => {
      const transactions = await getAllTransactions();
      return res(ctx.delay(delay()), ctx.json(transactions));
    }
  ),
  rest.get<
    never,
    { id: TransactionType["id"] },
    TransactionType | ErrorMessageType
  >(`/transactions/:id`, async (req, res, ctx) => {
    try {
      const { id } = req.params;
      const transaction = await getTransactionById(id);
      return res(ctx.delay(delay()), ctx.json(transaction));
    } catch (error) {
      return res(
        ctx.delay(delay()),
        ctx.status(422),
        ctx.json({
          message:
            error instanceof Error ? error.message : "Something went wrong",
        })
      );
    }
  }),

  // =========================================
  // POST
  // =========================================
  rest.post<CardType, never, CardType | ErrorMessageType>(
    `/cards`,
    async (req, res, ctx) => {
      try {
        const body = await req.json<CardType>();
        const card = await createCard(body);
        return res(ctx.delay(delay()), ctx.json(card));
      } catch (error) {
        return res(
          ctx.delay(delay()),
          ctx.status(422),
          ctx.json({
            message:
              error instanceof Error ? error.message : "Something went wrong",
          })
        );
      }
    }
  ),
  rest.post<UserType, never, UserType | ErrorMessageType>(
    `/users`,
    async (req, res, ctx) => {
      try {
        const body = await req.json<UserType>();
        const user = await createUser(body);
        return res(ctx.delay(delay()), ctx.json(user));
      } catch (error) {
        return res(
          ctx.delay(delay()),
          ctx.status(422),
          ctx.json({
            message:
              error instanceof Error ? error.message : "Something went wrong",
          })
        );
      }
    }
  ),
  rest.post<TransactionType, never, TransactionType | ErrorMessageType>(
    `/transactions`,
    async (req, res, ctx) => {
      try {
        const body = await req.json<TransactionType>();
        const transaction = await createTransaction(body);
        return res(ctx.delay(delay()), ctx.json(transaction));
      } catch (error) {
        return res(
          ctx.delay(delay()),
          ctx.status(422),
          ctx.json({
            message:
              error instanceof Error ? error.message : "Something went wrong",
          })
        );
      }
    }
  ),

  // =========================================
  // PATCH
  // =========================================
  rest.patch<Partial<CardType>, never, CardType | ErrorMessageType>(
    `/cards`,
    async (req, res, ctx) => {
      try {
        const body = await req.json<Partial<CardType>>();

        if (body.cardNumber) {
          const card = await updateCard(body.cardNumber, body);
          return res(ctx.delay(delay()), ctx.json(card));
        } else {
          res(
            ctx.delay(delay()),
            ctx.status(422),
            ctx.json({
              message: "Card Number is not provided",
            })
          );
        }
      } catch (error) {
        return res(
          ctx.delay(delay()),
          ctx.status(422),
          ctx.json({
            message:
              error instanceof Error ? error.message : "Something went wrong",
          })
        );
      }
    }
  ),
  rest.patch<Partial<UserType>, never, UserType | ErrorMessageType>(
    `/users`,
    async (req, res, ctx) => {
      try {
        const body = await req.json<Partial<UserType>>();

        if (body.id) {
          const card = await updateUser(body.id, body);
          return res(ctx.delay(delay()), ctx.json(card));
        } else {
          res(
            ctx.delay(delay()),
            ctx.status(422),
            ctx.json({
              message: "User ID is not provided",
            })
          );
        }
      } catch (error) {
        return res(
          ctx.delay(delay()),
          ctx.status(422),
          ctx.json({
            message:
              error instanceof Error ? error.message : "Something went wrong",
          })
        );
      }
    }
  ),
  rest.patch<
    Partial<TransactionType>,
    never,
    TransactionType | ErrorMessageType
  >(`/transaction`, async (req, res, ctx) => {
    try {
      const body = await req.json<Partial<TransactionType>>();

      if (body.id) {
        const transaction = await updateTransaction(body.id, body);
        return res(ctx.delay(delay()), ctx.json(transaction));
      } else {
        res(
          ctx.delay(delay()),
          ctx.status(422),
          ctx.json({
            message: "Transaction ID is not provided",
          })
        );
      }
    } catch (error) {
      return res(
        ctx.delay(delay()),
        ctx.status(422),
        ctx.json({
          message:
            error instanceof Error ? error.message : "Something went wrong",
        })
      );
    }
  }),

  // =========================================
  // DELETE
  // =========================================
  rest.delete<
    never,
    { id: CardType["cardNumber"] },
    boolean | ErrorMessageType
  >(`/cards/:id`, async (req, res, ctx) => {
    try {
      const { id } = req.params;
      const result = await deleteCard(id);
      return res(ctx.delay(delay()), ctx.json(result));
    } catch (error) {
      return res(
        ctx.delay(delay()),
        ctx.status(422),
        ctx.json({
          message:
            error instanceof Error ? error.message : "Something went wrong",
        })
      );
    }
  }),
  rest.delete<never, { id: string }, boolean | ErrorMessageType>(
    `/users/:id`,
    async (req, res, ctx) => {
      try {
        const { id } = req.params;
        const result = await deleteUser(+id);
        return res(ctx.delay(delay()), ctx.json(result));
      } catch (error) {
        return res(
          ctx.delay(delay()),
          ctx.status(422),
          ctx.json({
            message:
              error instanceof Error ? error.message : "Something went wrong",
          })
        );
      }
    }
  ),
  rest.delete<never, { id: TransactionType["id"] }, boolean | ErrorMessageType>(
    `/transaction/:id`,
    async (req, res, ctx) => {
      try {
        const { id } = req.params;
        const result = await deleteTransaction(id);
        return res(ctx.delay(delay()), ctx.json(result));
      } catch (error) {
        return res(
          ctx.delay(delay()),
          ctx.status(422),
          ctx.json({
            message:
              error instanceof Error ? error.message : "Something went wrong",
          })
        );
      }
    }
  ),
];
