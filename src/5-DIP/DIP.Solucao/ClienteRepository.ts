import mysql from 'mysql2';
import Cliente from "./Cliente";

export default class ClienteRepository {
  AdicionarCliente(cliente: Cliente): void {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'test'
    });
        
    connection.query("INSERT INTO CLIENTE(NOME,EMAIL,CPF, DATACADASTRO) VALUES(?,?,?,?)", [cliente.Nome, cliente.Email, cliente.CPF, cliente.DataCadastro]);
  }
}