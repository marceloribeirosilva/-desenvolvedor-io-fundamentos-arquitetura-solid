export default class Retangulo {
  constructor(
    public Altura: number,
    public Largura: number
  ){}

  public Area(): number {
    return this.Altura * this.Largura;
  }
}