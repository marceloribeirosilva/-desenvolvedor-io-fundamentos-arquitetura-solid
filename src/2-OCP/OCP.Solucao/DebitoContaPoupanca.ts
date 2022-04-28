import DebitoConta from "./DebitoConta";

export default class DebitoContaPoupanca extends DebitoConta {
  public Debitar(valor: number, conta: string): string {
    // Valida Aniversário da Conta
    // Debita Conta Corrente
    return this.RetornarNumeroTransacao();
  }

}