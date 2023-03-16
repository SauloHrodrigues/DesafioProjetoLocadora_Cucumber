# language: pt
Funcionalidade: Desafio locadora
								Como usuario
								Eu quero cadastrar alugueis de filmes
								Para controlar preços e datas de entregas

Cenário: Deve alugar um filme
	Dado um filme com estoque de 2 unidades
	E que o preço de aluguel seja R$ 3
	Quando alugar
	Então o preço do aluguel será R$ 3
	E a data de entrega será do dia seguinte
	E o estoque o estoque do filme será 1 unidade 
	

Cenário: Não deve alugar filme sem estoque
	Dado um filme com estoque de 0 unidades
	Quando alugar
	Então não será possivel por falta de estoque
	E o estoque o estoque do filme será 0 unidade
	

Cenario: Deve dar condições especiais para categoria estendida
	Dado um filme com estoque de 2 unidades
	E que o preço de aluguel seja R$ 4
	E que o tipo do aluguel seja estendido
	Quando alugar
	Então o preço do aluguel será R$ 8
	E a data de entrega sera 3 dias
	E a pontuação será de 2 pontos


Cenario: Deve alugar para categoria comun
	Dado um filme com estoque de 2 unidades
	E que o preço de aluguel seja R$ 4
	E que o tipo do aluguel seja comum
	Quando alugar
	Então o preço do aluguel será R$ 4
	E a data de entrega será do dia seguinte
	E a pontuação será de 1 pontos
