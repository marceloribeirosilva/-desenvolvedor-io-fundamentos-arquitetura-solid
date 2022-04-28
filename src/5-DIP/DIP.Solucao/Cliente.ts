import CPF from "./CPF";
import Email from "./Email";

export default class Cliente {
  constructor(
    public ClienteId: number,
    public Nome: string,
    public Email: string,
    public CPF: string,
    public DataCadastro: Date
  ){}

  Validar(): boolean {
    const email = new Email(this.Email);
    const cpf = new CPF(this.CPF);

    return email.Validar() && cpf.Validar();
  }
}