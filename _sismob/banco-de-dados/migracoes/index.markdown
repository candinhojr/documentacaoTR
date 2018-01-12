---
layout: post
title: Migrações
type: modulo
modulo: banco-de-dados
codigo: migracoes
---
Migração é uma forma de modificar a estrutura do banco de dados. Utilizamos o [liquibase](http://www.liquibase.org/) para migração.

# Criando uma nova migração

No terminal e a partir da raiz do projeto, execute:

```sh
$ sh sismob.tools/migrate.sh {ddl dml pos-ddl} [NOME_DA_MIGRACAO]
```

O comando irá gerar os arquivos:

```
sismob.business.impl/src/main/resources/db/migrations/current/{ddl,dml,pos-ddl}/yyyyMMddhhmmss_nome_da_migracao.xml
sismob.business.impl/src/main/resources/db/migrations/current/{ddl,dml,pos-ddl}/yyyyMMddhhmmss_nome_da_migracao.sql
```

Modifique o arquivo `.sql` com as alterações desejadas. O arquivo `.xml` não deve incluir outros comandos de migração.

# Tipos de migração

* **DDL**: Migração estrutural. Ex.: criação, remoção ou alteração de tabelas e colunas;
* **DML**: Migração de dados. Ex.: inserção, atualização ou remoção de tuplas;
* **Pós-DDL**: Migração estrutural idêntica ao DDL, porém roda **após** as migrações de dados (DML).

A ordem de migração é: todos os arquivos DDL, todos os arquivos DML e, por fim, todos os arquivos Pós-DDL. *Este padrão é utilizado devido à exigências de brasília*.

# Padrão de nomenclatura

Todas as migrações devem estar dentro da pasta `sismob.business.impl/src/main/resources/db/migrations/current/[tipo da migração]`. A migração consiste de dois arquivos:

* Um arquivo **SQL** de nome `[TIMESTAMP]_[NOME_DA_MIGRACAO].sql` contendo as modificações a serem realizadas;
* Um arquivo **XML** de nome `[TIMESTAMP]_[NOME_DA_MIGRACAO].xml` contendo o changeset do liquibase e a inclusão do SQL correspondente. **Este arquivo não deve conter outros comandos do liquibase**, apenas a inclusão do SQL. Este arquivo é gerado automaticamente pelo bash `migrate.sh`.
