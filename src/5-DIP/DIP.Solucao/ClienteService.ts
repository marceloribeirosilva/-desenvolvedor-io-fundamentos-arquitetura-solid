import Cliente from "./Cliente";
import ClienteRepository from "./ClienteRepository";
import EmailServices from "./EmailServices";

export default class ClienteService {
  AdicionarCliente(cliente: Cliente): string {
    if (!cliente.Validar()) return 'Dados inválidos';

    const repositorio = new ClienteRepository();
    repositorio.AdicionarCliente(cliente);

    EmailServices.Enviar("empresa@empresa.com", cliente.Email, "Bem Vindo", "Parabéns está Cadastrado")

    return 'Cliente cadastrado com sucesso';
  }
}