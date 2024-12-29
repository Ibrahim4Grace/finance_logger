import { HasFormatter } from '../interfaces/HasFormatter.js';

//classes
export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owed $${this.amount} for ${this.details}`;
  }
}
