---
layout: post
title: Dumps e Configurações
modulo: banco-de-dados
type: dumps-e-config
codigo: dumps-e-config
---

# Passos para utilizar o banco de dados com docker


1. Fazer pull do repositório do sismob.
2. Baixar os arquivos das <b>outras bases</b> <a href="https://drive.google.com/open?id=0B-h414mXnBScSGJZOTViVDY5R0k" target="_blank">nesse link</a> para dentro da pasta <b>sismob/docker/dumps</b>.
3. Baixar o arquivo da <b>base do Sismob</b> <a href="https://drive.google.com/drive/folders/0B7kfNsf4ayKQREYtQThPQUQyamM" target="_blank">nesse link</a> para dentro da pasta <b>sismob/docker/dumps</b>.
4. Setar a variável de ambiente <b>$DUMPS_HOME</b> com o caminho para a pasta <b>sismob/docker/dumps</b> do repositório do github (não colocar barra no final). Para exportar uma variável no linux basta digitar no terminal:

	``` sh
	$ export DUMPS_HOME=[CAMINHO PARA DUMPS]
	```

5. Rodar o script [docker.sh](https://github.com/BruceRodrigues/sismob/blob/homologacao/docker/docker.sh) na pasta <b>sismob/docker</b>:

	```sh
	$ sh docker.sh
	```

# Docker.sh

```sh
##############################################################
##################### SISMOB DOCKER ##########################
##############################################################

Selecione uma opção
1 - Start
2 - Restart
3 - Update
4 - Reset
5 - Exit

##############################################################
##############################################################
```

1. **Start:** Inicia o banco de dados utilizando uma pasta local como repositório dos arquivos .dat. Por padrão essa pasta será *~/docker-oracle-home/*, mas ela pode ser alterada exportando a variável de ambiente **$DOCKER_ORACLE_HOME**. Ao iniciar o banco pela primeira vez, os arquivos dmp.zip serão descompactados utilizando unzip e serão importados um a um. Esse processo pode ser um pouco demorado, mas acontecerá somente quando um banco é iniciado pela primeira vez.

2. **Restart.** Reinicia o container do banco. Mantém todas as modificações feitas na base de dados.

3. **Update:** Força a descompressão dos arquivos dmp.zip da pasta docker/dumps e reseta o banco.

4. **Reset:** Apaga o banco criado e refaz o processo de importação. <span style="color: red">**FIXME:** Existe um erro ao tentar remover a pasta *$DOCKER_ORACLE_HOME* pelo script. Por enquanto, remova essa pasta manualmente. *$ sudo rm -r [DOCKER_ORACLE_HOME]*</span>

5. **Exit:** Finaliza a execução do docker.sh.

# Utilizar várias versões do banco

Se quiser utilizar diferentes versões do banco de dados é necessário alterar a variável de ambiente **$DOCKER_ORACLE_HOME**, setando para uma nova pasta, e executar a opção *Restart*.

# Atualizar dump

1. Substituir o arquivo .dmp.zip antigo pelo novo dump do respectivo schema (manter o mesmo nome do arquivo antigo).
2. Executar *Update*.

# Links úteis

* [Docker image](https://hub.docker.com/r/sath89/oracle-12c/)
* [Oracle Data pump](https://oracle-base.com/articles/10g/oracle-data-pump-10g)
