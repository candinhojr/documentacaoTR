---
layout: post
title: Acesso ao Sistema
type: modulo
modulo: testemanual
codigo: acessosistema
---

## CNPJ para acesso de administrador e fundos
<br>

| Usuário                  | CNPJ           |
| :----------------------- |:---------------|
| Administrador            | 16766065000182 |
| FES Rio de Janeiro       | 35949791000185 |
| FES Santa Catarina       | 80673411000187 |
| FES São Paulo            | 13851748000140 |
| FMS Florianópolis        | 08935681000191 |
| FMS Rio de Janeiro       | 11715094000100 |
| FMS São Paulo            | 13864377000130 |

Todos os CNPJS dos fundos podem ser consultados no banco de dados <b>DBSISMOB</b> na tabela <b>TB_ATOR_PESSOA_ENTIDADE</b>. A consulta abaixo pode ser utilizada:

```sql
SELECT
    NU_CNPJ,
    NO_PADRONIZADO,
    ST_REGISTRO_ATIVO
FROM
    DBSISMOB.TB_ATOR_PESSOA_ENTIDADE
WHERE
    NO_PADRONIZADO LIKE '%SANTA CATARINA%';
```

## Senha de acesso
<br>
Para todos os usuários a senha padrão de acesso no ambiente de teste é definida como <b>123qwe</b>.

## Primeiro acesso
<br>
Para alguém que nunca tenha acessado o SISMOB, o primeiro acesso pode ser solicitado no link <b>Primeiro acesso</b> na página de login do sistema. Caso a pessoa não conste na base de pessoas utilizada pelo SISMOB para concessão de acesso, é possível inserí-la através do script disponível em {% link consultas-importantes %}.
