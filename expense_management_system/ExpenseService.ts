import { Expense } from "./Expense";
import { ExpenseRepository } from "./ExpenseRepo";
import { ApprovalRule } from "./Approval";
import { AuthorizationService } from "./auth";
import { User } from "./User";

export class ExpenseService {
  constructor(
    private repo: ExpenseRepository,
    private rules: ApprovalRule[],
    private auth: AuthorizationService
  ) {}

  submitExpense(user: User, expense: Expense): string {
    if (!this.auth.canSubmitExpense(user)) {
      return "Permission denied: cannot submit expense";
    }

    for (const rule of this.rules) {
      if (rule.canAutoApprove(expense)) {
        expense.approve();
        break;
      }
    }

    this.repo.save(expense);

    return expense.isApproved()
      ? "Expense auto-approved"
      : "Expense submitted for manager approval";
  }

  approveExpense(user: User, expenseId: number): string {
    if (!this.auth.canApproveExpense(user)) {
      return "Permission denied: only manager can approve";
    }

    const expense = this.repo.findById(expenseId);
    if (!expense) {
      return "Expense not found";
    }

    if (expense.isApproved()) {
      return "Expense already approved";
    }

    expense.approve();
    return "Expense approved by manager";
  }

  listExpenses(): Expense[] {
    return this.repo.getAll();
  }
}
