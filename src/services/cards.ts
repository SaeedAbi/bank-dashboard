import { CardType } from "@/interfaces";
import { cardSchema } from "@/validation/card";
import { cards } from "@/db";

// in-memory database
let cardDatabase: CardType[] = [...cards];

export async function createCard(card: CardType): Promise<CardType> {
  try {
    // validate card data
    await cardSchema.validate(card);

    // check if card with the same cardNumber already exists
    if (
      cardDatabase.some(
        (existingCard) => existingCard.cardNumber === card.cardNumber
      )
    ) {
      throw new Error("Card number already exists.");
    }

    cardDatabase.push(card);
    return card;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong"
    );
  }
}
export async function getCardByNumber(cardNumber: string): Promise<CardType> {
  const card = cardDatabase.find((card) => card.cardNumber === cardNumber);

  if (!card) {
    throw new Error("Card not found.");
  }

  return card;
}
export async function getAllCards(): Promise<CardType[]> {
  return cardDatabase;
}
export async function updateCard(
  cardNumber: string,
  updatedCard: Partial<CardType>
): Promise<CardType> {
  try {
    // validate updated card data
    if (updatedCard.cardNumber && updatedCard.cardNumber !== cardNumber) {
      throw new Error("Card number cannot be updated.");
    }

    // find the card to update
    const cardIndex = cardDatabase.findIndex(
      (card) => card.cardNumber === cardNumber
    );
    if (cardIndex === -1) {
      throw new Error("Card not found.");
    }

    // merge updated card data
    const existingCard = cardDatabase[cardIndex];
    const newCard = { ...existingCard, ...updatedCard };

    // validate merged card data
    await cardSchema.validate(newCard);

    cardDatabase[cardIndex] = newCard;
    return newCard;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong"
    );
  }
}
export async function deleteCard(cardNumber: string): Promise<boolean> {
  const cardIndex = cardDatabase.findIndex(
    (card) => card.cardNumber === cardNumber
  );
  if (cardIndex === -1) {
    throw new Error("Card not found.");
  }

  // card deleted successfully
  cardDatabase.splice(cardIndex, 1);
  return true;
}
// this util function is being used only in test environment
export async function dbReset() {
  if (typeof process !== "undefined" && process.env.NODE_ENV === "test") {
    cardDatabase = [];
  }
}
