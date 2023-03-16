package br.com.desafioLocadoras.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty", // gera relatório no console
		"html:target/report-html", // gera relatório em html
		"json:target/report.json"},// gera relatório em JSON
							features="src/test/resources/features/"
									+ "DesafioLocadora.feature",
							glue = "br.com.desafioLocadoras.steps",
							//tags = "@esse",//executa apenas os cenarios com essa tags 
							monochrome=false,
							snippets = SnippetType.CAMELCASE,
							dryRun = false,
							strict = false
							)
public class RunnerDesafioTest {

}
