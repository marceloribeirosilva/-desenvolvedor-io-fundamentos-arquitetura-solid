import IClienteRepository from "../DIP.Solucao/interfaces/IClienteRepository";
import IClienteServices from "../DIP.Solucao/interfaces/IClienteServices";
import IEmailServices from "../DIP.Solucao/interfaces/IEmailServices";
import Cliente from "./Cliente";
import ClienteRepository from "./ClienteRepository";
import EmailServices from "./EmailServices";

export default class ClienteService implements IClienteServices {
  private readonly _clienteRepository: IClienteRepository;
  private readonly _emailServices: IEmailServices;

  constructor(
    clienteRepository: IClienteRepository,
    emailServices: IEmailServices
  ){
    this._clienteRepository = clienteRepository;
    this._emailServices = emailServices;
  }

  AdicionarCliente(cliente: Cliente): string {
    if (!cliente.Validar()) return 'Dados inválidos';
    
    this._clienteRepository.AdicionarCliente(cliente);

    this._emailServices.Enviar("empresa@empresa.com", cliente.Email, "Bem Vindo", "Parabéns está Cadastrado")

    return 'Cliente cadastrado com sucesso';
  }
}

class TesteDip {
  TesteDip(): void {
    const clienteServices = new ClienteService(new ClienteRepository(), new EmailServices());
  }
}