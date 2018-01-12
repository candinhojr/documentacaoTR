---
layout: post
title: Geraçãos dos Thrifts
modulo: desenvolvimento
type: modulo
codigo: thrifts
ordem: 4
---
# SismobThriftGeneratorRunner

Gera os arquivos .thrift para as classes que estão listadas dentro desta classe no método main.
Recursivamente o gerador percorre os atributos das classes e gera outro arquivo para cada nova classe que for encontrada.

Os atributos que possuírem a anotação @IgnoreThrift não serão exportados no arquivo .thrift.

# Comando sh generate_all.sh

Executar o comando SH (sh generate_all.sh), que está dentro da pasta sismob.common.api/thrift
Este comando irá gerar as classes <alguma coisa>Thrift contendo a classe thrift relacionada com as classes originais do passo 1.

_Para executar este comando é necessário ter instalado o binário do thrift **0.9.3** no sistema operacional_:

http://ftp.unicamp.br/pub/apache/thrift/0.9.3/thrift-0.9.3.tar.gz

Compile e instale com:

```bash
$ sudo apt-get install libboost-dev libboost-test-dev libboost-program-options-dev libevent-dev automake libtool flex bison pkg-config g++ libssl-dev
$ ./configure
$ sudo make
$ sudo make install
$ thrift -version # Thrift version 0.9.3
```
