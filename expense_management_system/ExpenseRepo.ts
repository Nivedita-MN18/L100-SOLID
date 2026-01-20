import { Expense } from "./Expense";

export interface ExpenseRepository {
  save(expense: Expense): void;
  getAll(): Expense[];
  findById(id: number): Expense | undefined;
}
