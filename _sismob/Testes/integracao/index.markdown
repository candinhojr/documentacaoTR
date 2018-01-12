---
layout: post
title: Teste de Integração
type: modulo
modulo: testes
codigo: integracao
---

# Configuração

* Criar um arquivo chamado `tests.properties` dentro da pasta `{PROJECT_DIR}/sismob.business.impl/src/main/resources/config/`.
* O arquivo criado deverá conter as informações da base de dados usada pelos testes

Exemplo:
```java
hsqldb.jdbc.driverClassName=oracle.jdbc.OracleDriver
hsqldb.jdbc.url=jdbc:oracle:thin:@localhost:1521:xe
hsqldb.jdbc.username=BRIDGE
hsqldb.jdbc.password=j5m9jTr5s4mvgvb82MSM
```

# Convenções

* Os testes automatizados devem ser colocados no mesmo projeto e pacote da classe que ele está testando, dentro da pasta `src/test/java`;
* Todas as classes de testes deverão de nomeadas da seguinte forma: [nome da classe onde estão os métodos a serem testados] + "Test";
* Todos os teste devem funcionar de forma independente;
* As condições para rodar um teste deverão estar em uma classe "Condition" separada, dessa forma ela pode ser reutilizada em outras classes de testes.

# Executando os testes

### Via Maven

* Para compilar o sistema sem executar os testes: `mvn clean install` (testes são desabilitados por padrão)
* Para rodar enquanto compila o sistema: `mvn clean install -D skipTests=false`
* Para rodar somente uma classe de testes: `mvn -Dtest=[Classe] test`
* Para rodar somente um teste específico de uma classe: `mvn -Dtest=[Classe]#[nome do método] test`

### Via Eclipse

Com uma classe de testes ou pacote a ser testado selecionado ou aberto no eclipse:

* Debug As > JUnit Test

# Links úteis
* [assertJ](http://joel-costigliola.github.io/assertj/index.html)
* [Spring test](http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/#testing-introduction)
