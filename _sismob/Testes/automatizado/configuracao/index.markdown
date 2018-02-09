---
layout: post
title: Configuração do Automatizado (Selenium)
type: modulo
modulo: automatizado
codigo: configuracao
---

Para executar os testes automatizados, você deve configurar alguns arquivos.

**1. Arquivo de acesso ao banco de dados**

Crie um arquivo chamado <b>tests.properties</b> no diretório `{DIRETORIO_SISMOB}/sismob.business.impl/src/main/resources/config/`. O arquivo criado deve conter as informações de acesso ao banco de dados utilizada pelos testes (veja modelo abaixo).

```java
hsqldb.jdbc.driverClassName=oracle.jdbc.OracleDriver
hsqldb.jdbc.url=jdbc:oracle:thin:@localhost:1521:xe
hsqldb.jdbc.username=BRIDGE
hsqldb.jdbc.password=j5m9jTr5s4mvgvb82MSM
```

<br>

**2. Arquivo de configuração do upload de arquivos do sismob**

Crie um arquivo chamado <b>arquivos.properties</b> no diretório `{DIRETORIO_SISMOB}/sismob.business.impl/src/main/resources/config/`. O arquivo criado deve seguir o modelo abaixo.

```java
sismob.arquivos.test.dir=~
```
