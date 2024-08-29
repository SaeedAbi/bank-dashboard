import { rest } from "msw";
import { getAllPositions } from "@/services/inventories";
import { InventoryType } from "@/interfaces";

const delay = () => Math.random() * 2000;

export const handlers = [
  // =========================================
  // GET
  // =========================================
  rest.get<never, never, InventoryType[]>(
    `/positions`,
    async (_req, res, ctx) => {
      const positions = await getAllPositions();
      return res(ctx.delay(delay()), ctx.json(positions));
    }
  ),
];
