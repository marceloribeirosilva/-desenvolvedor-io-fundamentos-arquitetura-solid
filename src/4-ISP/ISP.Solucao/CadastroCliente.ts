import ICadastro from "./interfaces/ICadastro";
import ICadastroCliente from "./interfaces/ICadastroCliente";

export default class CadastroCliente implements ICadastro, ICadastroCliente {
  ValidarDados(): void {
    // Validar CPF, Email
  }
  EnviarEmail(): void {
    // Enviar e-mail para o cliente
  }
  SalvarBanco(): void {
    // Insert na tabela Cliente
  }

}