import * as readline from "readline";
import { Role } from "./Role";
import { User } from "./User";
import { Expense } from "./Expense";
import { InMemoryExpenseRepository } from "./InMemoryExpenseRepository";
import { AutoApprovalRule } from "./autoApproval";
import { AuthorizationService } from "./auth";
import { ExpenseService } from "./ExpenseService";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(q: string): Promise<string> {
  return new Promise(res => rl.question(q, res));
}

// Setup
const repo = new InMemoryExpenseRepository();
const rules = [new AutoApprovalRule()];
const auth = new AuthorizationService();
const service = new ExpenseService(repo, rules, auth);

let expenseId = 1;

async function main() {
  const roleInput = await ask("Login as (EMPLOYEE / MANAGER): ");
  const username = await ask("Username: ");

  const role = roleInput === "MANAGER" ? Role.MANAGER : Role.EMPLOYEE;
  const user = new User(username, role);

  while (true) {
    console.log("\n1. Submit Expense");
    console.log("2. Approve Expense");
    console.log("3. List Expenses");
    console.log("4. Exit");

    const choice = await ask("Choose: ");

    if (choice === "1") {
      const amount = Number(await ask("Amount: "));
      const category = await ask("Category: ");

      const expense = new Expense(
        expenseId++,
        user.username,
        amount,
        category
      );

      console.log(service.submitExpense(user, expense));

    } else if (choice === "2") {
      const id = Number(await ask("Expense ID to approve: "));
      console.log(service.approveExpense(user, id));

    } else if (choice === "3") {
      const list = service.listExpenses();
      for (const e of list) {
        console.log(
          `${e.id} | ${e.employee} | ${e.amount} | ${e.category} | ${
            e.isApproved() ? "APPROVED" : "PENDING"
          }`
        );
      }

    } else if (choice === "4") {
      rl.close();
      break;
    }
  }
}

main();
