import ICadastro from "./interfaces/ICadastro";
import ICadastroProduto from "./interfaces/ICadastroProduto";

export default class CadastroProduto implements ICadastro, ICadastroProduto {
  ValidarDados(): void {
    // Validar valor
  }
  SalvarBanco(): void {
    // Insert tabela Produto
  }

}