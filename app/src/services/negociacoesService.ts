import { NegociacaoDoDia } from "../interfaces/NegociacaoDoDia";
import { Negociacao } from "../models/negociacao";

export class NegociacoesService {
  public async obterNegociacoesDoDia(): Promise<Negociacao[]> {
    return fetch("http://localhost:8080/dados")
      .then((res) => res.json())
      .then((dados: NegociacaoDoDia[]) =>
        dados.map(
          (dado) => new Negociacao(new Date(), dado.vezes, dado.montante)
        )
      );
  }
}
