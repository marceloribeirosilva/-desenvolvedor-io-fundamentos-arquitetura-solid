import mysql from 'mysql2';
import nodemailer from 'nodemailer';

class Cliente {
  constructor(
    private ClienteId: number,
    private Nome: string,
    private Email: string,
    private CPF: string,
    private DataCadastro: Date
  ){}

  AdicionarCliente(): string {
    // Validando e-mail
    if (!this.Email.includes('@')) return 'Cliente com e-mail inválido';

    // Validando CPF
    if (this.CPF.length !== 11) return 'Cliente com CPF inválido';

    // Inserindo no banco
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'test'
    });
        
    connection.query("INSERT INTO CLIENTE(NOME,EMAIL,CPF, DATACADASTRO) VALUES(?,?,?,?)", [this.Nome, this.Email, this.CPF, this.DataCadastro]);

    // Enviando e-mail
    const transporter = nodemailer.createTransport({
      host: "smtp.teste.email",
      port: 587,
      secure: false, 
      auth: {
        user: 'user_test',
        pass: 'pwd_test'
      },
    });
      
    transporter.sendMail({
      from: 'empresa@empresa.com.br',
      to: this.Email,
      subject: 'Bem Vindo',
      text: 'Parabéns! Você está cadastrado',      
    });

    return 'Cliente cadastrado com sucesso';
  }
}