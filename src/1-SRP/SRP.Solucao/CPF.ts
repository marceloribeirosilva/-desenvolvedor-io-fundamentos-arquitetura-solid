export default class CPF {
  constructor(public Numero: string) {}

  Validar(): boolean {
    // Simulando uma validação. Não foi implementado a validação real de um cpf
    return this.Numero.length === 11;
  }
}