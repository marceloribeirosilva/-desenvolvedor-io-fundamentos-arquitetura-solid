import DebitoConta from "./DebitoConta";

export default class DebitoContaInvestimento extends DebitoConta {
  public Debitar(valor: number, conta: string): string {
    // Debitar conta investimento
    // isentar taxas
    return this.RetornarNumeroTransacao();
  }

}