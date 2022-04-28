import nodemailer from 'nodemailer';
import IEmailServices from '../DIP.Solucao/interfaces/IEmailServices';

export default class EmailServices implements IEmailServices{  
  Enviar(de: string, para: string, assunto: string, mensagem: string) : void {
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
      from: de,
      to: para,
      subject: assunto,
      text: mensagem,      
    });
  }
}