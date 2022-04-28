import ICadastro from "./ICadastro";

export default class CadastroCliente implements ICadastro {
  ValidarDados(): void {
    // Validar CPF, Email
  }
  SalvarBanco(): void {
    // Insert na tabela Cliente
  }
  EnviarEmail(): void {
    // Enviar e-mail para o cliente
  }

}