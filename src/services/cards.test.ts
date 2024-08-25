import {
  createCard,
  getCardByNumber,
  getAllCards,
  updateCard,
  deleteCard,
  dbReset,
} from './cards';
import { CardType } from '@/interfaces';

let newCards = [];

describe('CardType CRUD Operations', () => {
  beforeEach(() => {
    // reset reference before each test
    newCards = [];
    dbReset();
  });
  test('should create a card', async () => {
    const newCard: CardType = {
      cardNumber: '1234-5678-9012-3456',
      balance: 1500,
      holder: 1,
      type: 2,
      bank: 3,
      expireDate: '2025-12-31',
    };

    const createdCard = await createCard(newCard);
    expect(createdCard).toEqual(newCard);
  });
  test('should not create a card with duplicate card number', async () => {
    const card: CardType = {
      cardNumber: '1234-5678-9012-3456',
      balance: 1500,
      holder: 1,
      type: 2,
      bank: 3,
      expireDate: '2025-12-31',
    };
    await createCard(card);
    const duplicateCard = () => createCard(card);

    await expect(duplicateCard).rejects.toThrow('Card number already exists');
  });
  test('should get a card by card number', async () => {
    const card: CardType = {
      cardNumber: '1234-5678-9012-3456',
      balance: 1500,
      holder: 1,
      type: 2,
      bank: 3,
      expireDate: '2025-12-31',
    };
    await createCard(card);

    const fetchedCard = await getCardByNumber('1234-5678-9012-3456');
    expect(fetchedCard).toEqual(card);
  });
  test('should throw an error for non-existent card', async () => {
    const fetchedCard = getCardByNumber('non-existent-card-number');
    await expect(fetchedCard).rejects.toThrow('Card not found.');
  });
  test('should update a card', async () => {
    const card: CardType = {
      cardNumber: '1234-5678-9012-3456',
      balance: 1500,
      holder: 1,
      type: 2,
      bank: 3,
      expireDate: '2025-12-31',
    };
    await createCard(card);

    const updatedCard: Partial<CardType> = { balance: 2000 };
    const result = await updateCard('1234-5678-9012-3456', updatedCard);
    expect(result?.balance).toBe(2000);
  });
  test('should not update card with invalid data', async () => {
    const card: CardType = {
      cardNumber: '1234-5678-9012-3456',
      balance: 1500,
      holder: 1,
      type: 2,
      bank: 3,
      expireDate: '2025-12-31',
    };
    await createCard(card);

    const invalidUpdate: Partial<CardType> = { balance: 6000 }; // invalid balance
    const patchRequest = () => updateCard('1234-5678-9012-3456', invalidUpdate);
    await expect(patchRequest).rejects.toThrow(
      'balance must be less than or equal to 5000'
    );
  });
  test('should delete a card', async () => {
    const card: CardType = {
      cardNumber: '1234-5678-9012-3456',
      balance: 1500,
      holder: 1,
      type: 2,
      bank: 3,
      expireDate: '2025-12-31',
    };
    await createCard(card);

    const deleteResult = await deleteCard('1234-5678-9012-3456');
    expect(deleteResult).toBe(true);
    expect(newCards).not.toContainEqual(card);
  });
  test('should throw an error when deleting a non-existent card', async () => {
    const deleteResult = deleteCard('non-existent-card-number');
    await expect(deleteResult).rejects.toThrow('Card not found.');
  });
  test('should get all cards', async () => {
    const card1: CardType = {
      cardNumber: '1234-5678-9012-3456',
      balance: 1500,
      holder: 1,
      type: 2,
      bank: 3,
      expireDate: '2025-12-31',
    };
    const card2: CardType = {
      cardNumber: '9876-5432-1098-7654',
      balance: 2500,
      holder: 2,
      type: 1,
      bank: 4,
      expireDate: '2024-11-30',
    };

    await createCard(card1);
    await createCard(card2);

    const allCards = await getAllCards();
    expect(allCards).toEqual([card1, card2]);
  });
});
