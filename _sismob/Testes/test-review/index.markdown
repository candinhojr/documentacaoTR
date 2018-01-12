---
layout: post
title: Test Review
type: modulo
modulo: testes
codigo: test-review
---

# O que é
Test Review é uma maneira de levantarmos os **Casos de Teste** de uma tarefa específica, em maioria, antes da mesma ser desenvolvidada. Com isso, é proporcionado ao desenvolvedor todos os cenários que aquela tarefa pode impactar e assim, fazer com que a mesma tenha mais qualidade antes mesmo do **Tester** da equipe pegar a tarefa.

Além disso, o **Test Review** também serve como uma forma de realizarmos **testes pareados** e de **nivelação de conhecimento**.

# Como é realizado
A cada versão desenvolvidada, é criado uma planilha no drive ([disponível aqui](https://drive.google.com/drive/u/0/folders/0B3y7IPs9l6rHS1MxQ1lXYzVNOTA)) contendo todas as tarefas planejadas daquela versão, sendo que cada equipe é responsável pelas suas respectivas tarefas, tendo seu dever mantê-la atualizada a cada nova tarefa recebida.

Todos os **casos de teste** devem estar disponíveis quando o prazo para o desenvolvimento da versão foi encerrado, ou seja, **duas semanas** antes de sua efetiva entrega.

É **extremamente importante** que todo **Test Review** de uma tarefa seja visto por algum outro membro, interno da equipe ou não, para assim os cenários serem validados.

Para cada tarefa, é necessário **duplicar** a aba "**Modelo**", renomear a nova aba para o **número da tarefa** e então inserir a tarefa na lista de tarefas da equipe na aba "**Tarefas**". **Importante** manter a lista de tarefas da equipe ordenada de forma **crescente** e botar um **hiperlink** para a aba que se encontra o **test review** da tarefa.

Para uma melhor manuntenção do **Test Review** é **essencial** que os **casos de testes** sigam as **convenções de escrita**.

# Convenções

### Colunas
O aba "**Modelo**" já possui a maior parte das configurações necessárias para criar o **caso de teste**, sendo que são 6 colunas para a descrição do **CDT** e 2 colunas para os **Pré-Requisitos**;

**Casos de Teste:**
* **Id:** Identificação númerica do CDT.
* **Cenário:** Uma breve descrição do que se espera do cenário em questão.
* **Passos:** O que é necessário realizar no sistema para poder realizar a comparação de está correto ou não.
* **Resultados esperados:** Tudo que precisa ser validado no sistema, ou o que o sistema precisa fazer, para considerar que o cenário em questão seja dado como correto.
* **Situação:** Estado atual do cenário, se está correto ou não.
* **Observações:** Qualquer observação que seja relevante para o cenário, ou uma descrição do erro, caso o mesmo esta incorreto.

**Pré-requisitos:**
* **Nome:** Uma breve descrição do que o pré-requisito se trata.
* **Descrição:** Descrição detalhada de uma condição que é necessária para realizar alguns dos cenários descritos.

### Formatação e Nomenclaturas
* **Id**
  1. Númerico, sequencial, só deve estar preenchido caso exista o cenário;
  2. Negrito e centralizado.
<br><br>
* **Cenário**
  1. Deve ser direto e objetivo;
  2. Negrito e centralizado.
  <br><img src="img/Cenario.png" />
<br><br>
* **Passos**
  1. Devem ser precisos, de fácil entendimento, usualmente apenas ação no sistema por passo. Ações mais simples podem ser concatenadas em apenas um passo.
  2. Cada passo de cada cenário deve seguir o padrão: <font color="red">[NÚMERO EM NEGRITO]<font color="blue">.<font color="Magenta3">[ESPAÇO] <font color="green">[DESCRIÇÃO DO PASSO]<font color="Firebrick3">[PONTO E VÍRGULA] / [PONTO FINAL (caso seja o último passo)]</font>;
  3. Referências aos módulos, botões, labels, qualquer coisa pertencente ao sistema deve estar entre aspas e em negrito, utilizando somente a primeira inicial em maiúscula;
  4. Alinhado a esquerda.
  <br><img src="img/Passos.png" />
<br><br>
* **Resultados esperados**
  1. Devem ser precisos, de fácil entendimento, usualmente apenas UMA verificação por item.
  2. Deve sempre referenciar o passo em que é feito a verificação e ser sequencial: <font color="red">[NÚMERO EM NEGRITO].<font color="blue">[SEQUÊNCIA] - <font color="Magenta3">[ESPAÇO] <font color="green">[DESCRIÇÃO DO RESULTADO ESPERADO]<font color="Firebrick3">[PONTO E VÍRGULA] / [PONTO FINAL (caso seja o último passo)]</font>;
  3. Referências aos módulos, botões, labels, qualquer coisa pertencente ao sistema deve estar entre aspas e em negrito, utilizando somente a primeira inicial em maiúscula;
  4. Deve pular uma linha ao realizar a verificação de um resultado esperado de passos diferentes;
  5. Alinhado a esquerda.
  <br><img src="img/ResultadoEsperado.png" />
<br><br>
* **Situação**
    1. Deve representar a situação do cenário;
    2. Selecionar apenas uma das opções disponíveis;
    3. Centralizado.
<br><br>
* **Observações**
    1. Uma observação
    2. Centralizado.
<br><br>
* **Nomes das pré-condições**
    1. Preferencialmente iniciar com a palavre **PRE_**
    2. Utilizar as mesmas regras da coluna **'Cenário'**
    <br><img src="img/NomePreCondicao.png" />
<br><br>
* **Pré-condições**
    1. Utilizar as mesmas regras da coluna **'Passos'**.
    <br><img src="img/PreCondicao.png" />

### Exemplos
Alguns exemplos mais completos e detalhados podem ser observados nos **test review** das tarefas:
* [4054](https://docs.google.com/spreadsheets/d/1QD5TGL-g3zjWCTsitvHQjYMDVsiq97WIdi740-RenIc/edit#gid=1041594082)
* [4126](https://docs.google.com/spreadsheets/d/1QD5TGL-g3zjWCTsitvHQjYMDVsiq97WIdi740-RenIc/edit#gid=1832879817)
* [4151](https://docs.google.com/spreadsheets/d/1QD5TGL-g3zjWCTsitvHQjYMDVsiq97WIdi740-RenIc/edit#gid=1506460450)
* [4184](https://docs.google.com/spreadsheets/d/1QD5TGL-g3zjWCTsitvHQjYMDVsiq97WIdi740-RenIc/edit#gid=749853348)
