export default class Email {
  constructor(public Endereco: string){}

  Validar(): boolean {
    return this.Endereco.includes('@')
  }
}