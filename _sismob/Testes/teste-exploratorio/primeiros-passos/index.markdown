---
layout: post
title: Primeiros Passos
type: modulo
modulo: testeexploratorio
codigo: primeirospassos
---
## 1 Fazer o download do repositório do SISMOB no Github

Para clonar o repositório do sismob na sua máquina execute:
```sh
$ git clone https://github.com/sismob/sismob [DIRETORIO]
```
Caso você não informe [DIRETORIO], o comando criará uma pasta chamada <b>sismob</b> no diretório atual.

## 2 Acessar o código de diferentes versões do SISMOB
<br>
Acesse o diretório onde você fez o download do repositório do sismob. Você pode executar o comando abaixo para verificar em que versão você está trabalhando e quais versões do sistema já estão na sua máquina:
```sh
$ git branch
  2.2
  2.4
* 2.7
```

No exemplo acima estas três versões já estão na máquina e a versão em que se está trabalhando atualmente é a 2.7.

#### 2.1 Trocar para uma versão já baixada na sua máquina

Para trocar a versão atual para uma das já disponíveis na sua máquina, execute o comando abaixo, substituindo <b>[VERSAO]</b> pela versão desejada.
```sh
$ git checkout [VERSAO]
Switched to branch '[VERSAO]'
Your branch is up-to-date with 'origin/[VERSAO]'.
```

#### 2.2 Trocar para uma versão não disponível na sua máquina

Caso você queira trocar para uma versão que NÃO esteja na sua máquina, os seguintes comandos podem ser executados:
```sh
$ git fetch https://github.com/sismob/sismob [VERSAO]:[VERSAO]
$ git checkout [VERSAO]
```

Sempre que você trocar de versão (branch), é importante executar o comando abaixo no diretório do SISMOB para atualizar a instalação do mesmo.
```sh
$ mvn clean install
```

Caso tudo ocorra bem, você verá uma mensagem parecida com a abaixo:
```sh
[...]
[INFO] core.tools ......................................... SUCCESS [  0.773 s]
[INFO] sismob.tools ....................................... SUCCESS [  0.861 s]
[INFO] sismob.springboot .................................. SUCCESS [ 13.255 s]
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 01:35 min
[INFO] Finished at: 2018-03-05T16:59:08-03:00
[INFO] Final Memory: 171M/1654M
[INFO] ------------------------------------------------------------------------
[WARNING] The requested profile "postgres" could not be activated because it does not exist.
[WARNING] The requested profile "oracle" could not be activated because it does not exist.
```

## 3 Subindo o sistema pela primeira vez
<br>
Antes de executar o sistema pela primeira vez, com um banco zerado, as seguintes consultas devem ser executadas (disponíveis em {% link consultas-importantes %}):
* Migrações
* Alterar o período de cadastro de proposta

Lembre-se de dar commit. Com o sistema rodando, para inserir objetos de programa/emenda no sistema, basta executar a consulta <b>Criar programas e emendas para um município/estado específico</b> também disponível em {% link consultas-importantes %}. Você deve modificar o CNPJ e o código do IBGE na consulta para os do múnicipio/estado para o qual se quer inserir os objetos.
