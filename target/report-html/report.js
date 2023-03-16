$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/DesafioLocadora.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 2,
  "name": "Desafio locadora",
  "description": "\t\t\t\t\t\tComo usuario\r\n\t\t\t\t\t\tEu quero cadastrar alugueis de filmes\r\n\t\t\t\t\t\tPara controlar preços e datas de entregas",
  "id": "desafio-locadora",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 7,
  "name": "Deve alugar um filme",
  "description": "",
  "id": "desafio-locadora;deve-alugar-um-filme",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 8,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "que o preço de aluguel seja R$ 3",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "o preço do aluguel será R$ 3",
  "keyword": "Então "
});
formatter.step({
  "line": 12,
  "name": "a data de entrega será do dia seguinte",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o estoque o estoque do filme será 1 unidade",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "DesafioLocadorasSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 189945100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    }
  ],
  "location": "DesafioLocadorasSteps.queOPreçoDeAluguelSejaR$(int)"
});
formatter.result({
  "duration": 85200,
  "status": "passed"
});
formatter.match({
  "location": "DesafioLocadorasSteps.alugar()"
});
formatter.result({
  "duration": 2333900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    }
  ],
  "location": "DesafioLocadorasSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 1421500,
  "status": "passed"
});
formatter.match({
  "location": "DesafioLocadorasSteps.aDataDeEntregaSeráDoDiaSeguinte()"
});
formatter.result({
  "duration": 230800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    }
  ],
  "location": "DesafioLocadorasSteps.oEstoqueOEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "duration": 107800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Não deve alugar filme sem estoque",
  "description": "",
  "id": "desafio-locadora;não-deve-alugar-filme-sem-estoque",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 17,
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 18,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "não será possivel por falta de estoque",
  "keyword": "Então "
});
formatter.step({
  "line": 20,
  "name": "o estoque o estoque do filme será 0 unidade",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "DesafioLocadorasSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 86700,
  "status": "passed"
});
formatter.match({
  "location": "DesafioLocadorasSteps.alugar()"
});
formatter.result({
  "duration": 263100,
  "status": "passed"
});
formatter.match({
  "location": "DesafioLocadorasSteps.nãoSeráPossivelPorFaltaDeEstoque()"
});
formatter.result({
  "duration": 40700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 34
    }
  ],
  "location": "DesafioLocadorasSteps.oEstoqueOEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "duration": 103000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Deve dar condições especiais para categoria estendida",
  "description": "",
  "id": "desafio-locadora;deve-dar-condições-especiais-para-categoria-estendida",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 24,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 25,
  "name": "que o preço de aluguel seja R$ 4",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "que o tipo do aluguel seja estendido",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 28,
  "name": "o preço do aluguel será R$ 8",
  "keyword": "Então "
});
formatter.step({
  "line": 29,
  "name": "a data de entrega sera 3 dias",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "a pontuação será de 2 pontos",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "DesafioLocadorasSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 78200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "DesafioLocadorasSteps.queOPreçoDeAluguelSejaR$(int)"
});
formatter.result({
  "duration": 57400,
  "status": "passed"
});
formatter.match({
  "location": "DesafioLocadorasSteps.queOTipoDoAluguelSejaEstendido()"
});
formatter.result({
  "duration": 43700,
  "status": "passed"
});
formatter.match({
  "location": "DesafioLocadorasSteps.alugar()"
});
formatter.result({
  "duration": 273500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 27
    }
  ],
  "location": "DesafioLocadorasSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 64800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 23
    }
  ],
  "location": "DesafioLocadorasSteps.aDataDeEntregaSeraDias(int)"
});
formatter.result({
  "duration": 377400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "DesafioLocadorasSteps.aPontuaçãoSeráDePontos(int)"
});
formatter.result({
  "duration": 159600,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Deve alugar para categoria comun",
  "description": "",
  "id": "desafio-locadora;deve-alugar-para-categoria-comun",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 34,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 35,
  "name": "que o preço de aluguel seja R$ 4",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "que o tipo do aluguel seja comum",
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 38,
  "name": "o preço do aluguel será R$ 4",
  "keyword": "Então "
});
formatter.step({
  "line": 39,
  "name": "a data de entrega será do dia seguinte",
  "keyword": "E "
});
formatter.step({
  "line": 40,
  "name": "a pontuação será de 1 pontos",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "DesafioLocadorasSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 92800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "DesafioLocadorasSteps.queOPreçoDeAluguelSejaR$(int)"
});
formatter.result({
  "duration": 84800,
  "status": "passed"
});
formatter.match({
  "location": "DesafioLocadorasSteps.queOTipoDoAluguelSejaComum()"
});
formatter.result({
  "duration": 35100,
  "status": "passed"
});
formatter.match({
  "location": "DesafioLocadorasSteps.alugar()"
});
formatter.result({
  "duration": 236500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 27
    }
  ],
  "location": "DesafioLocadorasSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 69400,
  "status": "passed"
});
formatter.match({
  "location": "DesafioLocadorasSteps.aDataDeEntregaSeráDoDiaSeguinte()"
});
formatter.result({
  "duration": 293900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 20
    }
  ],
  "location": "DesafioLocadorasSteps.aPontuaçãoSeráDePontos(int)"
});
formatter.result({
  "duration": 106300,
  "status": "passed"
});
});