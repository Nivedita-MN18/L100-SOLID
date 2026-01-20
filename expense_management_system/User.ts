import { Role } from "./Role";

export class User {
  constructor(
    public readonly username: string,
    public readonly role: Role
  ) {}
}
