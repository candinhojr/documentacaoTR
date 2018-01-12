---
layout: post
title: Quer Contribuir?
type: modulo
codigo: querocontribuir
ordem: 20
---
## O que pode ser utilizado para fazer
### (Linguagens, Ferramentas, Frameworks)
<style>
.row img {
  width:100px;
  height:100px;
  text-align: center;
  }

.row {
  text-align: center;
}
</style>
<div class="row" align="center">

<img src="https://cdn0.iconfinder.com/data/icons/octicons/1024/markdown-512.png" alt="" width="100px">

<img src="http://www.redspark.io/wp-content/uploads/2015/09/react-578x270.png" alt="" width="200px">
<a href="https://getbootstrap.com/docs/4.0/components/alerts/"><img src="http://www.seeicons.com/images/iconstore/512/seeicons__57e90b703eba6.png" alt="" width="100px"></a>
<img src="http://www.paulzepernick.com/wp-content/uploads/2015/03/jquery_bumper.sh-600x600.png" alt="" width="100px">
</div>
<br>
<div>
<img src="http://www.seanhelvey.com/assets/images/seanhelvey/2014/08/html5-css-javascript-logos.png" alt="" width="300px" height="150px">
</div>
<p>...<img src="https://image.flaticon.com/icons/svg/407/407120.svg" alt="" width="50px"> e o que sua imaginação permitir</p>

A wiki está em um Repositório do Laboratório BRIDGE


<div class="highlighter-rouge">
  <p>Clonar Repositório</p>
  <pre class="highlight">
    <code id="clonesis" class="textarea">
git clone https://github.com/laboratoriobridge/sismob-wiki
    </code>
  </pre>
  <input id="buttonclone" type="button" name="button" class="btn btn-primary" onclick="copiar('clonesis', 'buttonclone')" value="Copiar script">
  <p></p>
  <br>
  <p><b>Fazer atualizar as alterações, é necessário que seja realizado um pull(Puxar) em linha de código na pasta clonada:</b></p>
  <pre class="highlight">
  <code id="fetchsis">
git pull https://github.com/laboratoriobridge/sismob-wiki
  </code>
  </pre>
  <input id="buttonfetch" type="button" name="button" class="btn btn-primary" onclick="copiar('fetchsis', 'buttonfetch')" value="Copiar script">
</div>
<br>
<p>Baixar ZIP do github:</p>
<button type="button" name="button" class="btn btn-info" ><a style="color:white;" href="https://github.com/laboratoriobridge/sismob-wiki/archive/master.zip">Baixar Zip</a></button>

### Através dela, você pode usar uma IDE ou editor de texto que mais é agradável para você.

dentro da pasta _ sismob, vão haver pastas, pastas que são itens da navbar/barra de navegação a direita, cada pasta é um item e cada subpasta pode ser um subitem de seu item. todas as pastas tem dentro delas uma página índice, onde o jekyll se guia para construir a view, por padrão ela leva o nome de index.markdown e leva as conotações no cabeçalho da página:

 ---

**layout**: post -> Padrão

**title**: nome do título que vai aparecer na página e na navbar

**type**: modulo -> forma de leitura para ser apresentada como item, por padrão será sempre módulo

**codigo**: algum-codigo -> código para caso ele for utilizado em alguma outra chamada

**modulo**: desenvolvimento -> nome do módulo ao qual vai ser atribuido, se for na página principal não há módulo, ele não precisa ser colocado

**ordem**: nº -> ordem em que o item vai aparecer na navbar

 ---
 abaixo dessa configuração você pode compor a página da forma que achar melhor
 por padrão é em markdown,
 mas aceita qualquer tipo de Linguagen interpretada

## Aqui abaixo está a documentação do Git de como usar o markdown
<iframe src="https://guides.github.com/features/mastering-markdown/" width="100%" height="600px"></iframe>


## Aqui abaixo tem uns exercícios do Git de como usar o markdown
<iframe src="https://www.markdowntutorial.com" width="100%" height="600px"></iframe>
