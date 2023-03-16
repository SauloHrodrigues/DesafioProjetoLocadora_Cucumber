package br.com.desafioLocadorasServicos;

import java.util.Calendar;

import br.com.desafioLocadoras.entidades.Filme;
import br.com.desafioLocadoras.entidades.NotaAluguel;
import br.com.desafioLocadorasDataUtils.DataUtils;

public class AluguelSevice {
	private static NotaAluguel nota;
	
	public static NotaAluguel alugar(Filme filme, String tipo) {
		nota= new NotaAluguel();
		nota.setDataAlugada(DataUtils.obterDataHoje());
		if(filme.getEstoque()==0) {
			throw new RuntimeException("Filme sem estoque");
		}
		
		if("estendido".equalsIgnoreCase(tipo)) {
			nota.setDataDevolucao(DataUtils.obterNovaData(3, "dia"));
			nota.setValoPago(filme.getPreco()*2);
			nota.setPontuacao(2);
		}else if("comum".equalsIgnoreCase(tipo)) {
			nota.setDataDevolucao(DataUtils.obterNovaData(1, "dia"));
			nota.setValoPago(filme.getPreco());
			nota.setPontuacao(1);
		}else {
			nota.setDataDevolucao(DataUtils.obterNovaData(1, "dia"));
			nota.setValoPago(filme.getPreco());			
		}
		filme.setEstoque(filme.getEstoque()-1);
		
		return nota;
	}
	
	

}
