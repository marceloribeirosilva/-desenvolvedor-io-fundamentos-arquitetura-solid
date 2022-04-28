import { uuid } from 'uuidv4';

export default abstract class DebitoConta {
  constructor(
    public NumeroTransacao: string,
  ){}

  public abstract Debitar(valor: number, conta: string): string;

  public RetornarNumeroTransacao() : string {
    return uuid();
  }
}