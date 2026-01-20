import { Expense } from "./Expense";

export interface ApprovalRule {
  canAutoApprove(expense: Expense): boolean;
}
