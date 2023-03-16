package br.com.desafioLocadorasDataUtils;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class DataUtils {

	public static String obterNovaData(int qtde, String unidade) {
		Calendar cal = Calendar.getInstance();
		if(unidade.equalsIgnoreCase("dia")|| unidade.equalsIgnoreCase("dias")) {
			cal.add(Calendar.DAY_OF_MONTH, qtde);			
		}else if(unidade.equalsIgnoreCase("mes")|| unidade.equalsIgnoreCase("meses")) {
			cal.add(Calendar.MONTH, qtde);			
		}		
		return converter(cal.getTime());
	}
	public static String obterDataHoje() {
		Calendar cal = Calendar.getInstance();
		String dataHoje = converter(cal.getTime());
		return dataHoje;
	}
	
	private static String converter(Date data) {
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		String dataHoje = sdf.format(data);
		return dataHoje;
	}
	
}
