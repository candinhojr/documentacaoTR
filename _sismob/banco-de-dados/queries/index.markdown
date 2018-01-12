---
layout: post
title: Escrevendo queries
modulo: banco-de-dados
type: modulo
codigo: queries
---
Todas as queries escritas que fazem projeção para algum DTO devem ser implementadas em uma classe própria e utilizar o padrão QueryCommand.

## Estrutura da classe
Todas as classes queries devem obrigatoriamente estender SimpleJpaDslQueryCommand ou PostProcessJpaDslQueryCommand (para queries que exigem alguma nova operação após a projeção dos resultados).  

Todas as queries devem possuir uma classe estática interna para representar seu filtro, essa classe deve ser um simples [POJO] (https://pt.wikipedia.org/wiki/Plain_Old_Java_Objects).

Todos os path's utilizados para fazer joins devem sempre ser declarados como atributos da classe query. Dessa forma a query fica mais clara de se entender e mais simples para fazer manutenção/alterações.

## Nomeclatura
* Classes de filtro devem sempre se chamar **Filter**
* Classes de query devem sempre iniciar com o nome do DTO que ela faz projeção seguido da palavra **Query**.

## Restrições
* Classes queries não devem ser injetáveis.
* Para manter a coesão, classes queries não devem utilizar serviços, apenas fazem seleção e projeção de informações. Se um DTO possui outros DTO's como atributos, este deve ser montado pelo serviço, utilizando diferentes queries.
* Queries não devem ser chamadas dentro de loops.

## Exemplo

Query para o DTO DadosPessoaisForm.  

```java
public class DadosPessoaisFormQuery extends SimpleJpaDslQueryCommand<DadosPessoaisFormQuery.Filter, DadosPessoaisForm> {

	private QAtorPapel atorPapel = QAtorPapel.atorPapel;
	private QAtor ator = QAtor.ator;
	private QAtorPessoaFisica atorPessoaFisica = QAtorPessoaFisica.atorPessoaFisica;
	private QDadosPessoais dadosPessoais = QDadosPessoais.dadosPessoais;

	//Classe filtro utilizada na seleção
	@Data
	public static class Filter {
		private Long atorPapelId;
	}

	@Override
	public void query(JPQLQuery query) {
		//Joins feitos utilizando os path's declarados como atributos
		query.from(this.atorPapel);
		query.join(this.atorPapel.tbAtor(), this.ator);
		query.join(this.ator.tbAtorPessoaFisica(), this.atorPessoaFisica);
		query.join(this.atorPessoaFisica.tbDadosPessoais(), this.dadosPessoais);

		//Seleção da query utilizando o filtro
		if (this.filter.atorPapelId != null) {
			query.where(this.atorPapel.coSeqAtorPapel.eq(this.filter.atorPapelId));
		}
	}

	//Projeção dos dados
	@Override
	public Select<DadosPessoaisForm> select() {
		MDadosPessoaisForm meta = MDadosPessoaisForm.meta;
		Select<DadosPessoaisForm> select = new Select<>(DadosPessoaisForm.class);
		select.as(this.dadosPessoais.nome, meta.nome);
		return select;
	}

}
```
