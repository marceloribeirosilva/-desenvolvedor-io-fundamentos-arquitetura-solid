import Cliente from "../Cliente";

export default interface IClienteServices {
  AdicionarCliente(cliente: Cliente): string;
}