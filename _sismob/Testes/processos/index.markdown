---
layout: post
title: Processos
type: modulo
modulo: testes
codigo: t-processos
---

## Desenvolvimento do Teste automatizado

A criação dos testes automatizados é realizada dentro do pacote sismob.selenium.test e são integradas dentro da organização <a href="https://github.com/QAsismob/sismob">QAsismob</a>, no <a href="https://github.com/">GitHub</a>.

Para participar da organização, basta solicitar um convite para algum dos administradores (aka Calistro).

### Como contribuir

É aconselhado que seja criado um outro diretório no seu computador, o qual será utilizado somente para ser desenvolvido o teste automatizado, desta forma, não irá intervir com o processo de testes interno de outras tarefas, podendo alterar de branchs sem se preocupar com os testes.

Para fazer isso basta realizar os passos abaixo na sua pasta raiz do sismob:

```bash
cd ..
mkdir testes-automatizado
cd testes-automatizado
git clone https://github.com/{seu_usuario_github}/sismob
```

Ao terminar de fazer suas alterações, abrir um PR para a organização.

No final da Sprint, será aberto um PR da organização para o SISMOB, contendo todo o material produzido durante a mesma.

### Atualizando seu repositório
Para atualizar seu branch, deve ser utilizado o comando:

```bash
git pull https://github.com/qasismob/sismob
```
