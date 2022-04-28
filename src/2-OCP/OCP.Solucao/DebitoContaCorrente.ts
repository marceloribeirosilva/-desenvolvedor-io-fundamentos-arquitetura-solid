import DebitoConta from "./DebitoConta";

export default class DebitoContaCorrente extends DebitoConta {
  public Debitar(valor: number, conta: string): string {
    // Debitar conta corrente
    return this.RetornarNumeroTransacao();
  }

}