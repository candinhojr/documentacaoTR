---
layout: post
title: Dumps e Configurações
modulo: banco-de-dados
type: dumps-e-config
codigo: dumps-e-config
---

# Passos para utilizar o banco de dados com docker

**1.** Fazer pull do repositório do sismob.

**2.** Baixar os arquivos da pasta [dump do drive](https://drive.google.com/open?id=0B-h414mXnBScSGJZOTViVDY5R0k) para dentro da pasta docker/dumps.
        Dump DBSISMOB do:
          [v9](https://drive.google.com/drive/folders/0B7kfNsf4ayKQREYtQThPQUQyamM)

**3.** Setar a variável de ambiente *$DUMPS_HOME* com o caminho para a pasta sismob/docker/dumps do repositório do github (não colocar barra no final)
Para exportar uma variável no linux basta digitar no terminal:
``` sh
$ export DUMPS_HOME=[CAMINHO PARA DUMPS]
```

**4.** Rodar o scrip [docker.sh](https://github.com/BruceRodrigues/sismob/blob/homologacao/docker/docker.sh)

# Docker.sh

```bash
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

**Start.** Inicia o banco de dados utilizando uma pasta local como repositório dos arquivos .dat. Por padrão essa pasta será *~/docker-oracle-home/*, mas ela pode ser alterada exportando a variável de ambiente **$DOCKER_ORACLE_HOME**. Ao iniciar o banco pela primeira vez, os arquivos dmp.zip serão descompactados utilizando unzip e serão importados um a um. Esse processo pode ser um pouco demorado, mas acontecerá somente quando um banco é iniciado pela primeira vez.

**Restart.** Reinicia o container do banco. Mantém todas as modificações feitas na base de dados.

**Update.** Força a descompressão dos arquivos dmp.zip da pasta docker/dumps e reseta o banco.

**Reset.** Apaga o banco criado e refaz o processo de importação. **FIXME:** Existe um erro ao tentar remover a pasta *$DOCKER_ORACLE_HOME* pelo script. Por enquanto, remova essa pasta manualmente. *$ sudo rm -r [DOCKER_ORACLE_HOME]*

**Exit.** Finaliza a execução do docker.sh.

# Utilizar várias versões do banco

Se quiser utilizar diferentes versões do banco de dados é necessário alterar a variável de ambiente **$DOCKER_ORACLE_HOME**, setando para uma nova pasta, e executar a opção *Restart*.

# Atualizar dump

**1.** Substituir o arquivo .dmp.zip antigo pelo novo dump do respectivo schema. (Manter o mesmo nome do arquivo antigo)

**2.** Executar *Update*.

# Links úteis

* [Docker image](https://hub.docker.com/r/sath89/oracle-12c/)
* [Oracle Data pump](https://oracle-base.com/articles/10g/oracle-data-pump-10g)
