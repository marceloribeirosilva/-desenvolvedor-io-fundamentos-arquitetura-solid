import Cliente from "../Cliente";

export default interface IClienteRepository {
  AdicionarCliente(cliente: Cliente): void;
}