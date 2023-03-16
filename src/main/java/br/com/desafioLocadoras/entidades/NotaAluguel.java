package br.com.desafioLocadoras.entidades;

import java.util.Date;

public class NotaAluguel {

	private String dataAlugada;
	private String dataDevolucao;
	private int valoPago;
	private int pontuacao;
	
	public String getDataAlugada() {
		return dataAlugada;
	}
	public void setDataAlugada(String dataAlugada) {
		this.dataAlugada = dataAlugada;
	}
	public String getDataDevolucao() {
		return dataDevolucao;
	}
	public void setDataDevolucao(String dataDevolucao) {
		this.dataDevolucao = dataDevolucao;
	}
	public int getValoPago() {
		return valoPago;
	}
	public void setValoPago(int valoPago) {
		this.valoPago = valoPago;
	}
	public int getPontuacao() {
		return pontuacao;
	}
	public void setPontuacao(int pontuacao) {
		this.pontuacao = pontuacao;
	}
	
	
	
	
	
}
