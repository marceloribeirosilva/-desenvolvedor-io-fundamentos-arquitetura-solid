export default interface IEmailServices {
  Enviar(de: string, para: string, assunto: string, mensagem: string): void;
}