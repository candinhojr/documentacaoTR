---
layout: post
title: Nova Arquitetura
type: modulo
codigo: nova-arquitetura
modulo: desenvolvimento
ordem: 2
---

Visando agregar estabilidade ao SISMOB foi criado uma nova forma de desenvolver.

Ela usa conceitos da programação Reativa e Redutiva

que são eles


### O Redux é composto de três princípios que formam e definem o seu conceito. Eles são: ###

**Um único ponto de verdade** – Todo o estado da aplicação é mantido em apenas um único objeto chamado de Store.

**O estado é imutável** – O estado da aplicação é inalterável, a unica maneira de afeta-lo é emitindo uma Action com a mudança.

**Mudanças são feitas apenas por funções puras** – Reducers recebem as Actions emitidas e aplicam-nas ao estado. Sempre retornando um novo estado.

Todo componente React possui dois atributos principais: estado (state) e propriedades (props).

### O que é State(Estado)

**Estado** é ser considerado o conjunto de dados mantidos no momento em que sua aplicação está rodando no lado do cliente. Qualquer atualização que envolva alteração desses dados, automaticamente essa mudança irá alterar o estado.

**O estado (ou state)** da sua aplicação, pode ser definido como: o lugar onde os dados vem e se transformam ao longo do tempo.


### Props

A maioria dos componentes pode ser personalizada com diferentes parâmetros quando eles são criados. Esses parâmetros de criação são chamados props.

Os props são parâmetros que não mudam dinamicamente.

Os seus próprios componentes também podem usar adereços. Isso permite que você faça um único componente que é usado em muitos lugares diferentes em seu aplicativo, com propriedades ligeiramente diferentes em cada local

Em todos os tipos de paradigmas no desenvolvimento de software, passar parâmetros é extremamente comum. Com os componentes do React isso não poderia ser diferente. A diferença é que no React, usamos os [props](https://facebook.github.io/react/docs/components-and-props.html)    (abreviação para properties).

Props são Read-Only#

Se você declara um componente como uma função ou uma classe , ele nunca deve modificar seus próprios adereços. Considere esta sumfunção:

```java
function sum(a, b) {
  return a + b;
}
```


Essas funções são chamadas de "puras" porque não tentam mudar suas entradas e sempre retornam o mesmo resultado para as mesmas entradas.

Em contraste, esta função é impura porque altera sua própria entrada:

```java
function withdraw(account, amount) {
  account.total -= amount;
}
```


O React é bastante flexível, mas tem uma única regra estrita:

Todos os componentes React devem atuar como funções puras em relação aos seus props.


## Como será aplicada a nova Arquitetura

**View:**

  Como funciona:
  A View Recebe Estados por update(Atualização) do StatePresenter e envia Eventos para o StatePresenter.
**StatePresenter:**
**StateManager:**
**DAO(Data Access Object):**
**Repository(BD):**
