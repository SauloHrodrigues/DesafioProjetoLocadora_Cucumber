package br.com.desafioLocadoras.steps;

import org.junit.Assert;

import br.com.desafioLocadoras.entidades.Filme;
import br.com.desafioLocadoras.entidades.NotaAluguel;
import br.com.desafioLocadorasDataUtils.DataUtils;
import br.com.desafioLocadorasServicos.AluguelSevice;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class DesafioLocadorasSteps {
	private Filme filme;
	private NotaAluguel nota;
	private String erro;
	private String tipoAluguel;
	

	@Dado("^um filme com estoque de (\\d+) unidades$")
	public void umFilmeComEstoqueDeUnidades(int arg1) throws Throwable {
		filme = new Filme();
		filme.setEstoque(arg1);
	}

	@Dado("^que o preço de aluguel seja R\\$ (\\d+)$")
	public void queOPreçoDeAluguelSejaR$(int arg1) throws Throwable {
		filme.setPreco(arg1);
	}

	@Quando("^alugar$")
	public void alugar() throws Throwable {
		try {
			nota = AluguelSevice.alugar(filme, tipoAluguel);
			
		} catch (Exception e) {
			erro = e.getMessage();
		}
	}

	@Então("^o preço do aluguel será R\\$ (\\d+)$")
	public void oPreçoDoAluguelSeráR$(int arg1) throws Throwable {
		Assert.assertEquals(arg1, nota.getValoPago());
	}

	@Então("^a data de entrega será do dia seguinte$")
	public void aDataDeEntregaSeráDoDiaSeguinte() throws Throwable {
		String diaSeguinte = DataUtils.obterNovaData(1, "dia");
		Assert.assertEquals(nota.getDataDevolucao(), diaSeguinte);
	}

	@Então("^o estoque o estoque do filme será (\\d+) unidade$")
	public void oEstoqueOEstoqueDoFilmeSeráUnidade(int arg1) throws Throwable {
		Assert.assertEquals(arg1, filme.getEstoque());
	}

	// estoque 0
	@Então("^não será possivel por falta de estoque$")
	public void nãoSeráPossivelPorFaltaDeEstoque() throws Throwable {
		Assert.assertEquals("Filme sem estoque", erro);
	}
	
	// Condições Especiais
	
	@Dado("^que o tipo do aluguel seja estendido$")
	public void queOTipoDoAluguelSejaEstendido() throws Throwable {
	   tipoAluguel="estendido";
	}

	@Então("^a data de entrega sera (\\d+) dias$")
	public void aDataDeEntregaSeraDias(int arg1) throws Throwable {
	    String EntregaTresDias = DataUtils.obterNovaData(arg1, "dia");
	    Assert.assertEquals(nota.getDataDevolucao(), EntregaTresDias);
	    
	}

	@Então("^a pontuação será de (\\d+) pontos$")
	public void aPontuaçãoSeráDePontos(int arg1) throws Throwable {
	  Assert.assertEquals(arg1, nota.getPontuacao());
	}
	
	// comum
	@Dado("^que o tipo do aluguel seja comum$")
	public void queOTipoDoAluguelSejaComum() throws Throwable {
		tipoAluguel="comum";
	}
	

}
