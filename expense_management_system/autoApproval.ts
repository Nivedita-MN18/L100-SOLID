import { ApprovalRule } from "./Approval";
import { Expense } from "./Expense";

export class AutoApprovalRule implements ApprovalRule {
  canAutoApprove(expense: Expense): boolean {
    return expense.amount <= 1000;
  }
}
