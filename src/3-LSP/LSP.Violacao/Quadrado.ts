import Retangulo from "./Retangulo";

export default class Quadrado extends Retangulo {
  constructor(public Altura: number, public Largura: number) {    
    super(Largura, Largura)
  }
}