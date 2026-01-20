import { User } from "./User";
import { Role } from "./Role";

export class AuthorizationService {
  canSubmitExpense(user: User): boolean {
    return user.role === Role.EMPLOYEE;
  }

  canApproveExpense(user: User): boolean {
    return user.role === Role.MANAGER;
  }
}
