---
layout: post
title: Glossário SISMOB
type: modulo
modulo: processos
codigo: glossario
---

Breve explicação de termos utilizados no SISMOB.

## ATORES
### MUNICIPAL/ESTADUAL
- **Técnico**: É um engenheiro responsável por cadastrar as informações do andamento de uma proposta/obra no sistema. Ele tem a permissão de visualizar e editar todas as obras que seu fundo engloba.
- **Gestores municipais/estaduais**: Gestor municipal pode ser um prefeito ou secretário da saúde. Ele possui as mesmas funcionalidades de um técnico, porém recebe informações sobre todas as obras do seu município, enquanto os técnicos (na maioria dos casos) recebem apenas informações sobre obras que foram cadastradas ou editadas pelos mesmos. Gestor Estadual é o equivalente a um Gestor municipal, mas no âmbito estadual. Um gestor estadual é o secretário da saúde do estado.
- **Leitor (estadual/municipal)**: Existem dois tipos de leitores: o federal e o municipal/estadual. Leitor municipal/estadual pode apenas visualizar as propostas/obras de seu município/estado e seus detalhes.

### FEDERAL
- **Administrador**: É o cargo mais alto do sistema. Este usuário tem acesso à quase todas funcionalidades disponíveis, porém atua mais no controle do sistema em si, desempenhando ações como: cadastro de usuários, aprovação de solicitações de acesso, envio de comunicados, cadastro de ciclos de avaliação, etc.
- **Parecerista**: É um representante do ministério da saúde responsável por analisar as informações e o andamento da obra. Ele analisa as informações preenchidas pelo técnico e responde se o ministério está de acordo. A cada etapa, ele envia um parecer para o técnico sobre suas intenções para com a obra.
- **Leitor**(federal): é um cargo do sistema que pode apenas visualizar as propostas/obras e gerar relatórios.
- **Gestores federais: federal/financeiro**: Gestor Federal é o cargo mais alto do sistema depois do administrador. Ele pode adicionar e excluir todos usuários de âmbito nacional, avaliar solicitações de acesso, criar ciclos de avaliação, entre outros. Basicamente está ligado à funcionalidades que envolvem o controle do sistema, que são de interesse do ministério da saúde. Gestor Financeiro pode visualizar as obras e controlar a devolução de recursos. Em alguns casos, obras são canceladas e os recursos ($$$) gastos até então (ou o que restam deles), devem ser devolvidos.
- **Avaliador**: é uma pessoa responsável por avaliar o andamento das obras. Um gestor federal ou o Administrador cria um ciclo de avaliação (algumas obras são selecionadas para serem avaliadas e conferir se o progresso está condizente com o que está registrado no sistema) e os avaliadores as avaliam. Fluxo básico: um técnico cadastra as informações de uma obra, o parecerista analisa se as informações estão congruentes com o que o ministério espera e o avaliador vai até o local da obra (durante o andamento dela) para checar se o técnico preencheu as informações de acordo com a realidade do andamento.
- **Órgãos externos**: São órgãos do governo que precisam acessar o SISMOB para recolher informações. Exemplo: Tribunal de Contas da União

## TERMOS
- **Parecer**: Um parecer é sinônimo de feedback, posicionamento, diagnóstico. Existem 3 tipos de parecer: Favorável, Não favorável e Para Adequação. Dar um parecer na maioria dos casos é uma tarefa de pareceristas.
- **Propostas novas/antigas**: Propostas novas são as propostas cadastradas a partir de 01/01/2017. Propostas antigas são as propostas cadastradas até 31/12/2016. Existem algumas diferenças entre elas, por exemplo: Propostas antigas não possuem a etapa de “Início e Execução”
- **Modal**: É um popup mostrado para o usuário.
- **Notificação**: Notificação é uma informação mostrada para o usuário. Notificações são geradas para informar algo. Elas não ficam registradas, apenas são mostradas para o usuário no presente momento. Exemplo de notificação: Usuário esqueceu de preencher um campo no cadastro da proposta; Relatório acabou de ser gerado.
- **Alerta**: Alerta é também uma informação mostrada para o usuário, porém uma informação mais importante. Alertas ficam registrados num módulo separado, sendo possível visualizá-los quando desejado pelo usuário. Alertas geram notificações.
- **CNES**: A sigla significa Cadastro Nacional de Estabelecimentos de Saúde. É um identificador único dos estabelecimentos da saúde.
- **Licitação**: É a escolha de fornecedores de um serviço para realização do mesmo. Basicamente, uma empresa é escolhida para execução de uma obra.
- **Ambientes**: São os cômodos que estarão presentes na obra. Exemplo: Banheiro, sala de imunização, depósito, etc.
- **Tipos de obra**: Existem 3 tipos de obra que podem ser desempenhados pelo sistema: Construção, Reforma e Ampliação.
- **Programas e componentes**: São os tipos de unidades de saúde que podem vir a ser construídos/reformados/ampliados pelo sistema. Componentes são subdivisões de programas. Exemplo: O programa Atenção básica engloba os componentes Academia da saúde, Requalifica UBS e UBS Fluvial.
- **Fundo: FMS/FES**: Fundo é o acesso ao sistema de uma cidade ou estado, como uma entidade. É como se um município/estado tivesse acesso ao sistema. FMS são os fundos municipais e FES são os fundos estaduais.
- **Portaria**: Uma portaria é como se fosse um documento que registra um conjunto de dados do ministério.
- **Comunicados**: São mensagens enviadas para usuários do sistema. Podem ser enviados pelo administrador ou pelos gestores federais. É como se fosse um e-mail, só que dentro do sistema.
- **Recursos: Programa e emenda**: São as formas de conseguir dinheiro para as obras. Programas são recursos provenientes diretamente do ministério e emendas são provenientes de indicações de parlamentares.
- **Ciclo de Avaliação**: Um ciclo é uma bateria de avaliações. Alguns avaliadores são selecionadas pelo ministério para avaliar algumas obras. Os avaliadores vão até o local das obras para checar se as obras estão condizentes com o que está registrado no sistema.
- **Teste interno/externo**: Teste interno é o teste que acontece dentro da equipe. Teste externo são os testes desempenhados por testers que não fazem parte da equipe, depois da tarefa ter sido aprovada pelo teste interno e integrada.


## SOLICITAÇÕES
### Acesso
- Uma solicitação de acesso é quando uma pessoa preenche suas informações e envia uma requisição para o ministério da saúde ou para algum fundo, com intuito de possuir acesso ao SISMOB.
### Superação de etapa
- Superação de etapa é quando um proposta/obra passa para a fase seguinte. Melhor explicado no tópico de Etapas.
### Alteração de endereço
- É quando é solicitada a mudança do endereço cadastrado inicialmente para a obra.
### Cancelamento
- É quando solicita-se o cancelamento da obra. Quando é feita por um usuário municipal/estadual precisa passar por uma aprovação do ministério. Quando o cancelamento é feito pelo ministério, não há solicitação, logo, não precisa ser aprovado pois já foi definido pelo ministério.
### Prorrogação de prazo
- É quando solicita-se mais tempo para a conclusão de uma das etapas da obra.


## ETAPAS
Para entender o conceito de etapas é necessário entender o conceito de proposta e obra.

- **Proposta** é um projeto de obra. Técnicos cadastram propostas no sistema e caso um parecerista analise e aceite as informações, ele dará um parecer favorável e ela se tornará uma Obra.
- **Ação preparatória** é a fase antes de uma obra começar a ser executada. Nela acontece o levantamento e aprovação de alguns tópicos. Ela deve ter seu projeto, ambientes, licitações, etc, aprovados. Quando esses tópicos são aceitos pelo parecerista, começa a fase de
- **Início e execução**. Nessa fase, são  cadastradas informações sobre o começo da obra (até 30% da execução) e acontece o início da obra de fato. Ao chegar aos 30%, mais uma requisição de aprovação é feita para o parecerista. Caso esta requisição seja aceita, inicia-se a fase de
- **Execução e conclusão**. Nesta fase ocorre o restante da construção da obra. No final dela, outra requisição é feita para um parecerista. Caso aceita, a obra entra no estado de
- **Obra concluída**. Esse estado significa que a parte de construção da obra está finalizada,  e só faltam alguns detalhes como instalação de equipamentos, por exemplo. A obra fica com o status de
- **Obra finalizada** quando são preenchidas as informações do começo de funcionamento, instalação de equipamentos, etc.

## FLUXO REDMINE
### Nova
- Tarefa recém criada.
### Pendente
- Tarefa está aguardando alguma coisa crucial para poder ser executada. Normalmente, está aguardando a conclusão de outra tarefa.
### Aguardando análise
- Está aguardando o diagnóstico pela análise. As analistas irão checar se a situação descrita na tarefa  é relevante e se deve realmente ser implementada.
### Em análise
- Está passando pelo processo de análise para checar a situação descrita acima.
### Aguardando desenvolvimento
- Tarefa está esperando que os desenvolvedores comecem a implementá-la.
### Em desenvolvimento
- Tarefa está sendo implementada pelos desenvolvedores.
### Aguardando integração
- Tarefa já foi desenvolvida e testada pelo teste interno. Está aguardando ser integrada no sistema.
### Aguardando build
- Depois de ser integrada no sistema, a tarefa fica com esse status. Ela está aguardando uma nova versão do sistema ser gerada para automaticamente ir para o status de Aguardando testes. Todavia, o teste externo pode testar tarefas Aguardando build e caso estejam corretas, vão diretamente para o status de Fechada.
### Aguardando testes
- Tarefa foi integrada e está aguardando outra etapa de testes, desta vez pelo teste externo.
### Em testes
- Tarefa está sendo testada pelo teste externo.
### Retornada
- Tarefa não foi aprovada pelo teste externo. Retornada para a equipe desenvolver novamente.
### Fechada
- Tarefa passou pelas duas etapas de testes e está totalmente correta.

### Em quais situações um tester normalmente atua?
- Cria tarefas, com a situação **Nova**.
-  Após testar tarefas de sua equipe, caso esteja tudo certo, muda a situação no redmine de Em desenvolvimento para **Aguardando integração**.
- Após testar tarefas externas Aguardando build ou Aguardando teste, caso estejam corretas, muda-se a situação no redmine para **Fechada**. Caso estejam incorretas, muda-se a situação para **Retornada**.


## BRANCHES
 O sismob trabalha com um padrão de versionamento de MAJOR.MINOR.PATCH. <br/>
 Sendo eles:
 
 <span style="color:red; font-size: 16px">MAJOR(Versão maior):</span> Alterada quando o sistema sofre alguma mudança grande.     
 <span style="color:blue; font-size: 16px">MINOR(Versão menor):</span> Adicões de novas funcionalidades e correções. Muda de acordo com o pacote enviado a cada duas semanas.     
 <span style="color:green; font-size: 16px">PATCH(Versão de correção):</span> Alterado quando é necessario enviar alguma manutenção urgente.   
 <h3>Exemplo: </h3> <i>versão - <span style= "color:red">2</span>.<span style="color:blue">0</span>.<span style="color:green">00</span></i>
