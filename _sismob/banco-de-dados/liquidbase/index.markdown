---
layout: post
type: modulo
title: LiquidBase
codigo: liquidbase
modulo: banco-de-dados
---

Comandos para gerar o XML a partir da base de dados

1 - dentro da pasta liquibase do projeto (sismob.tools/liquibase)

1.1 - para exportar a estrutura e os dados

**liquibase --changeLogFile=./changelog.xml --diffTypes="sequences, tables, views, columns, indexes, foreignkeys, primarykeys, uniqueconstraints, data" --dataOutputDirectory=./data generateChangeLog**
