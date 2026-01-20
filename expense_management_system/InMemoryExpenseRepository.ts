import { ExpenseRepository } from "./ExpenseRepo";
import { Expense } from "./Expense";

export class InMemoryExpenseRepository implements ExpenseRepository {
  private expenses: Expense[] = [];

  save(expense: Expense): void {
    this.expenses.push(expense);
  }

  getAll(): Expense[] {
    return this.expenses;
  }

  findById(id: number): Expense | undefined {
    return this.expenses.find(e => e.id === id);
  }
}
