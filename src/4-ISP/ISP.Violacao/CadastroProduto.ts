import ICadastro from "./ICadastro";

export default class CadastroProduto implements ICadastro {  
  ValidarDados(): void {
    // Validar CPF, Email
  }
  SalvarBanco(): void {
    // Insert na tabela Cliente
  }
 
  EnviarEmail(): void {
    // Produto não tem e-mail, o que eu faço agora???
    throw new Error("Esse metodo n�o serve pra nada");
  }
}