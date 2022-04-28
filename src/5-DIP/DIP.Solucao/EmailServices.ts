import nodemailer from 'nodemailer';

export default class EmailServices {
  static Enviar(de: string, para: string, assunto: string, mensagem: string) : void {
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