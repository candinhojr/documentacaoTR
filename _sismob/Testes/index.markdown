---
layout: post
title: Testes
type: modulo
codigo: testes
ordem: 6
---

{% include lista-links-block.html %}


###  Porque é necessário testar?

Sistemas de software tornam-se cada vez mais parte do nosso dia-a-dia, desde aplicações comerciais (ex.: bancos) até produtos de consumo (ex.: carros). A maioria das pessoas já teve alguma experiência com um software que não funcionou como esperado. Softwares que não funcionam corretamente podem levar a muitos problemas, incluindo financeiro, tempo e reputação das empresas. Podendo, inclusive, chegar a influenciar na integridade das pessoas.

O ser humano está sujeito a cometer um erro (engano), que produz um defeito (falha, bug), no código, em um software ou sistema ou em um documento. Se um defeito no código for executado, o sistema falhará ao tentar fazer o que deveria (ou, em algumas vezes, o que não deveria), causando uma falha. Defeitos no software, sistemas ou documentos resultam em falhas, mas nem todos os defeitos causam falhas.

Os defeitos ocorrem porque os seres humanos são passíveis de falha e porque existe pressão no prazo,
códigos complexos, complexidade na infraestrutura, mudanças na tecnologia e/ou muitas interações de
sistema.

Falhas também podem ser causadas por condições do ambiente tais como: radiação, magnetismo, campos
eletrônicos e poluição, que podem causar falhas em software embarcado (firmware) ou influenciar a execução do software pela mudança das condições de hardware.

Com a ajuda do teste é possível medir a qualidade do software em termos de defeitos encontrados, por
características e requisitos funcionais ou não funcionais do software (confiabilidade, usabilidade, eficiência, manutenibilidade e portabilidade).

## O que é **Teste**?

Uma visão comum do processo de teste é de que ele consiste apenas da fase de execução, como executar o
programa. Esta, na verdade, é uma parte do teste, mas não contempla todas as atividades do teste.

Existem atividades de teste antes e depois da fase de execução. Por exemplo: planejamento e controle, escolha das condições de teste, modelagem dos casos de teste, checagem dos resultados, avaliação do critério de conclusão, geração de relatórios sobre o processo de teste e sobre sistema alvo e encerramento ou conclusão (ex.: após a finalização de uma fase de teste). Teste também inclui revisão de documentos (incluindo o código fonte) e análise estática.

Testes dinâmicos e estáticos podem ser usados para atingir objetivos similares e proveem informações para melhorar o sistema a ser testado e o próprio processo de teste.

Testes podem possuir objetivos diferentes:

* Encontrar defeitos.
* Ganhar confiança sobre o nível de qualidade
* Prover informações para tomada de decisão.
* Prevenir defeitos.

O processo mental de projetar testes de forma antecipada no ciclo de vida (verificando a base de teste através da modelagem de teste) pode ajudar a prevenir defeitos que poderiam ser introduzidos no código. A revisão de documentos (ex.: requisitos) também ajuda a prevenir defeitos que possam aparecem no código.

## Os 7 Princípios do Teste

##### Princípio 1 – Teste demonstra a presença de defeitos
O teste pode demonstrar a presença de defeitos, mas não pode provar que eles não existem. O Teste reduz a probabilidade que os defeitos permaneçam em um software, mas mesmo se nenhum defeito for encontrado, não prova que ele esteja perfeito.
##### Princípio 2 – Teste exaustivo é impossível
Testar tudo (todas as combinações de entradas e pré-condições) não é viável, exceto para casos triviais. Em vez do teste exaustivo, riscos e prioridades são levados em consideração para dar foco aos esforços de teste.
##### Princípio 3 – Teste antecipado
A atividade de teste deve começar o mais breve possível no ciclo de desenvolvimento do software ou sistema e deve ser focado em objetivos definidos.
##### Princípio 4 – Agrupamento de defeitos
Um número pequeno de módulos contém a maioria dos defeitos descobertos durante o teste antes de sua
entrega ou exibe a maioria das falhas operacionais.
##### Princípio 5 – Paradoxo do Pesticida
Pode ocorrer de um mesmo conjunto de testes que são repetidos várias vezes não encontrarem novos defeitos após um determinado momento. Para superar este “paradoxo do pesticida”, os casos de testes necessitam ser frequentemente revisado e atualizado. Um conjunto de testes novo e diferente precisa ser escrito para exercitar diferentes partes do software ou sistema com objetivo de aumentar a possibilidade de encontrar mais erros.
##### Princípio 6 – Teste depende do contexto
Testes são realizados de forma diferente conforme o contexto. Por exemplo, softwares de segurança crítica são testados diferentemente de um software de comércio eletrônico.
##### Princípio 7 – A ilusão da ausência de erros
Encontrar e consertar defeitos não ajuda se o sistema construído não atende às expectativas e necessidades dos usuários.

## Tipos de Teste

### Teste de Função (Teste funcional)

As funções que um sistema, subsistema ou componente devem realizar podem ser descritas nos seguintes
produtos de trabalho: especificação de requisitos; casos de uso, especificação funcional, ou podem não estar documentados. As funções representam “o que” o sistema faz.

Testes funcionais são baseados em funções (descritas nos documentos ou compreendidas pelos testadores), e devem ser realizados em todos os níveis de teste (ex.: teste de componente deve ser baseado na especificação do componente).

Técnicas baseadas em especificação podem ser utilizadas para derivar as condições de teste e casos de testes a partir da funcionalidade do software ou sistema. Teste funcional considera o comportamento externo do software (teste caixa-preta).

Um tipo de teste funcional, o teste de segurança, investiga as funções (ex.: um “firewall”) relacionados à detecção de ameaça de vírus ou de ações mal intencionadas.

### Teste de características do produto de software (testes não funcionais)

Testes não funcionais incluem, mas não se limita a: teste de performance; teste de carga; teste de estresse; teste de usabilidade; teste de interoperabilidade; teste de manutenibilidade; teste de confiabilidade e teste de portabilidade. É o teste de “como” o sistema trabalha.

Testes não funcionais podem ser realizados em todos os níveis de teste. O termo teste não funcional descreve que o teste é executado para medir as características que podem ser quantificadas em uma escala variável, como o tempo de resposta em um teste de performance. Estes testes podem ser referenciados a um modelo de qualidade como definido na norma ”Engenharia de Software – Qualidade de Produto de Software” (ISO 9126).

### Teste de estrutura/arquitetura do software (teste estrutural)

Teste estrutural (caixa-branca) pode ser feito em todos os níveis de testes. Recomenda-se utilizar as técnicas estruturais após as técnicas baseadas em especificação, já que ela auxilia a medição da eficiência do teste através da avaliação da cobertura de um tipo de estrutura.

Cobertura é a extensão que uma estrutura foi exercitada por um conjunto de testes, expresso como uma
porcentagem de itens cobertos. Se a cobertura não atinge 100%, então mais testes devem ser construídos a fim de testar aqueles itens que não foram contemplados para, desta forma, aumentar a cobertura.

Em todos os níveis de teste, mas especialmente no teste de componente e teste de integração de componentes, ferramentas podem ser usadas para medir a cobertura do código dos elementos assim como as declarações ou decisões. Teste estrutural deve ser baseado na arquitetura do sistema, como uma hierarquia de chamadas.

Teste de estrutura também pode ser aplicado no sistema, integração de sistema ou nível de teste de aceite (por exemplo, para modelos de negócios ou estrutura de menu).

### Teste relacionado a mudanças (teste de confirmação e regressão)

Quando um defeito é detectado e resolvido, o software pode ser retestado para confirmar que o defeito original foi realmente removido. Isto é chamado de teste de confirmação. Depurar (resolver defeitos) é uma atividade do desenvolvimento, e não uma atividade do teste.

Teste de regressão é o teste repetido de um programa que já foi testado, após sua modificação, para descobrir a existência de algum defeito introduzido ou não coberto originalmente como resultado da mudança. Estes defeitos podem estar no software ou em um componente, relacionado ou não ao software. É realizado quando o software, ou seu ambiente é modificado. A quantidade de teste de regressão é baseada no risco de não se encontrar defeitos no software que estava funcionando previamente.

Os testes devem ser repetíveis se forem utilizados nos teste de confirmação e para suportar o teste de
regressão.

Teste de regressão pode ser realizado em todos os níveis de teste, e se aplicam aos testes funcionais, não funcionais e estruturais. Testes de regressão são executados muitas vezes e geralmente desenvolve-se vagarosamente, o que faz com que seja um forte candidato à automação.

## Técnicas de Teste Caixa Preta

### Partição de Equivalência

Na Partição de Equivalência, as entradas do software ou sistema são divididas em grupos que tenham um
comportamento similar, podendo ser tratados da mesma forma. Partições (ou classes) de equivalência podem ser encontradas em dados válidos e inválidos (por exemplo, valores que deveriam ser rejeitados). Partições podem também ser identificadas para valores de saídas, valores internos e valores relacionados a tempo, (antes e após um evento) e para parâmetros de interface (durante teste de integração). Testes podem ser elaborados para cobrir as partições. Partição de Equivalência é aplicável a todos os níveis de testes.

A Partição de Equivalência pode ser usada para atingir a cobertura dos valores de entrada e saída. Pode ser aplicada em uma entrada manual, interface entrada de sistema ou como parâmetro de interface num teste de integração.

### Análise do Valor Limite

O comportamento nos limites de uma partição de equivalência é onde existe maior probabilidade de estar
incorreto. Portanto, limites são áreas onde testes estão mais propensos a indicar defeitos. Os valores limites de uma partição são seu máximo e seu mínimo. Um valor limite para uma partição válida é um valor limite válido. O limite de partição inválida é um valor limite inválido. Testes podem ser projetados para cobrir tanto valores inválidos como válidos. Quando os casos de testes são projetados, um valor em cada limite é escolhido.

Análise do valor limite pode ser aplicada em todos os níveis de teste. É relativamente fácil aplicá-la, sua capacidade de encontrar defeitos é alta e especificações detalhadas podem ser úteis em sua elaboração.

Esta técnica é muitas vezes considerada uma extensão da partição de equivalência e pode ser aplicada para entradas manuais como, por exemplo, em escalas de tempo ou tabela de limites. Valores limites podem também ser usados para selecionar dados de testes.

### Tabela de Decisão

A tabela de decisão é considerada uma boa alternativa para capturar requisitos de sistemas que contém
condições lógicas e para documentar o comportamento interno do sistema. Elas podem ser utilizadas para
registrar regras de negócio complexas a serem implementadas. A especificação é analisada e as condições e ações do sistema são identificadas. As condições de entrada e ações são declaradas de uma forma que possam ser entendidas, como verdadeiras ou falsas (Booleano). A tabela de decisão contém as condições que disparam as ações, muitas vezes combinações verdadeiras e falsas para todas as condições de entrada, e ações resultantes para cada combinação de condições. Cada coluna da tabela corresponde a uma regra de negócio que define uma única combinação de condições que resulta na execução de ações associadas com aquela regra. A cobertura padrão comumente usada em uma tabela de decisão é ter no mínimo um teste por coluna cobrindo todas as combinações de condições apresentadas.

O grande ganho na utilização da tabela de decisão é que ela cria combinações de condições que geralmente não foram exercitadas durante os testes. Pode ser aplicada a todas as situações quando a execução do software depende de muitas decisões lógicas.

### Teste de transição de estados

Um sistema pode exibir respostas diferentes dependendo da sua condição atual ou de estado anterior. Neste caso, o comportamento do sistema pode ser representado como um diagrama de transição de estados. Permite ao testador visualizar o software em termos de estados, transições entre estados, as entradas ou eventos que disparam as mudanças de estado (transição) e as ações que podem resultar daquelas transições.

Os estados do sistema, ou objetos em teste, são isolados, identificáveis e finitos. Uma tabela de estado exibe a relação entre estados e entradas, e pode destacar possíveis transições inválidas.
Os testes podem ser construídos para cobrir uma sequência típica de status, cobrir todos os estados, exercitar todas as transições, exercitar uma sequência específica de transições ou testar transições inválidas.

Teste de transição de status é muito utilizada em softwares industriais embarcados e automações técnicas em geral. No entanto, a técnica é também adequada para modelar um objeto de negócio tendo estado específico ou para testar fluxos de telas de diálogos (exemplo: aplicação de internet e cenários de negócios).

### Teste de Caso de Uso

Testes podem ser especificados a partir de casos de uso ou cenários de negócios. Um caso de uso descreve interações entre os atores (usuários e o sistema) que produz um resultado relevante para um usuário do sistema. Cada caso de uso tem pré-condições, que precisam ser garantidas para que o caso de uso funcione com sucesso. Cada caso de uso é finalizado com uma pós-condição que representa os resultados observados e o estado final do sistema após o término do caso de uso. Um caso de uso normalmente tem um cenário mais comum (mais provável), e algumas vezes ramificações.

Caso de uso descreve o fluxo de processo de um sistema baseado nas suas possibilidades de utilização. Os casos de testes derivados de casos de uso são muito úteis na descoberta de defeitos no fluxo do processo durante a utilização do sistema no mundo real. Casos de uso muitas vezes são tratados como cenários, e úteis para construir testes de aceite com a participação do usuário final. Eles podem ajudar a descobrir defeitos de integração causados pela interação e interferência de diferentes componentes, que testes individuais de componentes podem não ter detectado.

## Técnicas de Teste Caixa Branca

Teste de estrutura ou caixa-branca é baseado na estrutura do software ou sistema, como veremos nos
exemplos que seguem abaixo:

* Nível de Componente: a estrutura é o próprio código, ex.: comandos, decisões e desvios.
* Nível de Integração: a estrutura pode ser uma árvore de chamadas (um diagrama em que um módulo
chama outros módulos).
* Nível de Sistema: A estrutura pode ser uma estrutura de menu, processos de negócios ou estruturas das
páginas Web.

Nesta seção há basicamente duas técnicas de cobertura de código baseados em comandos e decisões serão
discutidas. Para teste de decisão, um diagrama de controle de fluxo pode ser utilizado para visualizar as
alternativas de cada decisão.

### Teste e Cobertura de Sentença

No teste de componente, cobertura de sentença é avaliada pela porcentagem de sentenças executáveis que
foram exercitadas por um conjunto de casos de testes. No teste de sentenças derivam-se casos de teste para
executar sentenças específicas, normalmente para se aumentar a cobertura.

### Teste e Cobertura de Decisão

Cobertura de decisão, também chamada de teste de ramificação, é avaliada pela porcentagem dos resultados da decisão (por exemplo, as opções de “Verdadeiro” ou “Falso” de uma expressão condicional - IF) que foram exercitados em um conjunto de casos de teste. No teste de decisão derivam-se os casos de testes para executar decisões específicas, normalmente para se aumentar a cobertura.

Teste de decisão é uma forma de teste de controle de fluxo, já que ele gera um fluxo específico através dos pontos de decisões. A cobertura de decisão é mais eficiente que a cobertura de sentenças: 100% da cobertura de decisão garante 100% da cobertura de sentença, mas não vice-versa.

### Outras técnicas baseadas na estrutura

Existem formas mais detalhadas de cobertura estrutural além da cobertura de decisão, por exemplo, cobertura de condições e cobertura de múltiplas condições.

O conceito de cobertura também pode ser aplicado a outros níveis de teste (teste de integração) no qual, as porcentagens de módulos, componentes ou classes são exercitadas por um conjunto de casos de teste. Por exemplo, poderia expressá-las como cobertura de módulos, componentes ou classes.

Normalmente é utilizada uma ferramenta para dar o suporte de teste de estrutura do código

## Técnicas baseadas na experiência ou Teste **Exploratório**

Os testes baseados na experiência são testes derivados da intuição e conhecimento dos testadores através de sua experiência em aplicações e tecnologia similares. Quando usado para aumentar a técnica sistemática, testes intuitivos podem ser úteis para identificar testes específicos que não são facilmente identificados pelas técnicas formais, especialmente quando aplicado após ter estabelecido o processo mais formal. No entanto esta técnica pode produzir amplas variedades e graus de eficiência, dependendo da experiência do testador.

Possivelmente a técnica mais amplamente aplicada é a de supor (adivinhar) onde estão os erros. Uma
abordagem estruturada da técnica de dedução de erros é enumerar uma lista de possíveis erros e construir testes com objetivo de atacar/cobrir estes erros. Esta abordagem sistemática é chamada de ataque de falha.

Estas listas de defeitos e falhas podem ser construídas com base na experiência, dados de defeitos/falhas disponíveis e do conhecimento comum de como o software falha. Teste **exploratório** ocorre simultaneamente à modelagem, execução e registro de teste, e baseia-se nos objetivos de teste, onde é realizado em um tempo predefinido. É uma abordagem muito usual, em locais onde a especificação é rara ou inadequada e existe grande pressão por conta de prazo, ou para
aprimorar/complementar um teste mais formal. Pode servir como uma checagem do processo de teste,
assegurando que os defeitos mais importantes sejam encontrados.

### Referências

[Certified Tester - Foundation Level Syllabus, Comissão Internacional para Qualificação de Teste de Software](http://bstqb.org.br/uploads/syllabus/syllabus_ctfl_2011br.pdf)
