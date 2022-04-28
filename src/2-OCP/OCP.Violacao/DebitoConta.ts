import TipoConta from "./TipoConta";

export default class DebitoConta {
  public Debitar(valor: number, conta: string, tipoConta: TipoConta): void {
    if (tipoConta === TipoConta.Corrente) {
      // Debita Conta Corrente
    }

    if (tipoConta === TipoConta.Poupanca) {
      // Valida Aniversário da Conta
      // Debita Conta Poupança
    }
  }
}