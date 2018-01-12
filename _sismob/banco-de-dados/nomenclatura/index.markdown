---
layout: post
title: Padrão de Nomenclatura
modulo: banco-de-dados
type: nomenclatura
codigo: nomenclatura
---

## Padrão de nomenclatura a ser utilizada no SISMOB

O banco de dados deve seguir os padrões definidos pelo DATASUS.

Segue link com o PDF com o detalhe dos padrões:
https://drive.google.com/open?id=0B-h414mXnBScQ29jUHk4bWxKaGs

**Observações específicas do SISMOB**
* Não utilizar o sufixo ou prefixo "DbSismob" no nome das classes JPA. Caso exista uma classe com o mesmo nome e em outro pacote esta deve ser excluída, caso não seja utilizada, ou deve receber o prefixo com o nome do SCHEMA que ela pertence;
* Nome das tabela - quando possuir vários nomes o primeiro deve ser o mais significativo ou o principal. Ex.: TB_PROPOSTA_ANEXO ou TB_MONITORAMENTO_PROJETO_LICITACAO
* Se um enum não possuir uma tabela de relacionamento deve ser usado o prefixo "TP_" nas tabelas que recebem o @Enumerated

**Orientações para manipulação do banco**

* Para criação de chaves, estamos utilizando três tamanhos definidos em changelog-master.xml: small (4), medium (9) e big (12). Use conforme a necessidade da tabela, se esta tende a ter muitos registros, utilize 12, caso contrário, uma tabela com poucos tipos por exemplo, utilize 4.
* A chave estrangeira precisa ter o mesmo tamanho e tipo da chave primária da tabela a qual ela está referenciando.
* Para toda chave estrangeira, é necessário a criação de um Index na coluna que possui a FK.
* Muito cuidado na hora de definir as constraints, existe um padrão para criação do nome de cada uma, e caso seja criada de maneira errada sua manutenção é custosa. Este padrão está definido no documento acima. Abaixo alguns exemplos, utilizando TB_TABELA_ORIGEM e TB_TABELA_DESTINO:
- PK_TABELAORIGEM (sem TB nem underline)
- FK_TABELADESTINO_TABELAORIGEM
- IN_TABELAORIGEM_COTABELADESTINO
- CK_TABELAORIGEM_STREGISTROATIVO
* Caso o nome da constraint ultrapasse 30 caracteres, utilizar abreviação conforme definido no documento acima.
* TODAS as colunas e tabelas do sistema precisam de comentário.
* É necessário que esteja escrito no comentário da coluna que possui chave primária gerada por sequence (CO_SEQ), o nome da sequence que está sendo utilizada.
* É necessário que esteja escrito no comentário da coluna que possui chave estrangeira qual tabela e qual chave está sendo referenciada.
* As tabelas de relacionamento (RL) também possuem um padrão para criação do nome, sendo basicamente RL_TABELA1_TABELA2. Mais informações no documento acima.
* Toda coluna do tipo ST ou TP precisa ter um valor DEFAULT, ser NOT NULL, ter uma constraint Check que verifica seus possíveis valores e ter explícito no comentário da coluna quais são os possíveis valores.
* Pela necessidade de ser NOT NULL, o uso de TP é desencorajado, a menos que haja a garantia de que sempre haverá um valor pra essa coluna. Caso contrário, cria-se uma tabela de tipos e usa-se chave estrangeira normalmente.
* O uso de chave primária composta em tabelas que não são RL é desencorajado, pois possui difícil manutenibilidade.
* Qualquer dúvida, não havendo o entendimento do documento ou algum problema desconhecido, não hesite em perguntar ao colega.
