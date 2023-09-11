import { ILogger } from './types';

export class Logger implements ILogger {
  public constructor(private readonly name: string) {}

  log(...message: any[]) {
    console.log(`[${this.name}]`, ...message);
  }
}
