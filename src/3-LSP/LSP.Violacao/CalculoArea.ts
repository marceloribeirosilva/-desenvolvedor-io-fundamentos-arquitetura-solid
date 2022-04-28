import Quadrado from "./Quadrado";
import Retangulo from "./Retangulo";

export default class CalculoArea {
  static ObterAreaRetangulo(retangulo: Retangulo): void {
    console.log(`${retangulo.Altura} * ${retangulo.Largura} = ${retangulo.Area()}`)
  }

  static Calcular(): void {
    const quadrado = new Quadrado(10,5);
    this.ObterAreaRetangulo(quadrado);
  }
}