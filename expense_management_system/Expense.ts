export class Expense {
  private approved = false;

  constructor(
    public readonly id: number,
    public readonly employee: string,
    public readonly amount: number,
    public readonly category: string
  ) {}

  approve() {
    this.approved = true;
  }

  isApproved(): boolean {
    return this.approved;
  }
}
