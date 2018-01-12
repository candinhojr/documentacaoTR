---
layout: post
title: Anotações TestBoard
type: modulo
modulo: suite-testes
codigo: tesboardnotations
---

Segue nessa sessão a alternativa para se fazer as anotações em java para poder Popular com um texto mais ubíquo para os leitores.


Como é definido o TestBoard?

![](../img/tesboard screenshot.png)

#### Título UID

Nesta parte encontra-se o título utilizado para Identificar o CDT(Caso de Teste), dentro da planilha de Casos de Teste, nós usamos esse título no espaço que fica reservado na coluna Cenário.

#### Passos

Nesta parte encontra-se todos passos, desde o login por exemplo até o ambiente agradável para que o resultado esperado seja atingido, dentro da planilha de Casos de Teste, nós usamos esses passos no espaço que fica reservado na coluna Passos.

#### Asserts

Nesta parte encontra-se todos os Resultados Esperados, ou seja, o comportamento que esperamos que a sequência de passos vai trazer para o teste abordado em questão.


### Como fazer essas anotações serem validadas no meu CDT?

Simples, na sua IDE de desenvolvimento de testes automatizados você pode ir no CDT específico que deseja trazer essas anotações em ordem e utilizar o estilo de comentário abaixo com suas específicas notações:

```
/*
* @titulo Título do Cenário do CDT
*
* @passo Seguência de passos para...
* @passo .. atingir o Cenário esperado para...
* @passo ...chegar no resultado esperado
*
* @assert Resultado Esperado
*/
```

## Como vai ficar no TestBoard

|Título UID|           Passos               |Resultado Esperado|Resultado do teste|
|----------|--------------------------------|------------------|------------------|
|Título do Cenário do CDT| 1. Seguência de passos para...| Resultado Esperado| Sucesso   |
|   |2. .. atingir o Cenário esperado para...  |   |  ou |
|   |3. ...chegar no resultado esperado|   |  Falha |
