---
layout: post
type: modulo
title: Ferramentas e Informações
codigo: ferramentas-info
modulo: desenvolvimento
ordem: 3
---

Para quem precisar dos códigos _UNICODE_ para escrever no `messages.properties` pode utilizar os links abaixo como ajuda.

[Unicode character page](https://unicode-table.com/en/#00C0)

http://online-toolz.com/tools/character-functions.php


SQLs para habilitar as emendas.

***
```sql
UPDATE DBPROPOSTAFNS.TB_OBJETO
SET NU_ANO_EXERCICIO = '2017';

UPDATE DBPROPOSTAFNS.TB_EMENDA
SET CO_MUNICIPIO_IBGE = '420540', // <-- este é o IBGE do município
NU_ANO_EXERCICIO = '2017';

UPDATE DBCORPFNS.TB_PESSOA_FNS
SET CO_MUNICIPIO_IBGE = '420540'; // <-- este é o IBGE do município

```
