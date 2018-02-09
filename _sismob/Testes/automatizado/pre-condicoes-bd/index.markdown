---
layout: post
title: Pré-condições do BD
type: modulo
modulo: automatizado
codigo: precondicaobd
---

## Pré-condições do banco de dados para casos de teste
<br>
Na execução de casos de testes pode ser necessário garantir que determinados objetos existam no banco de dados e estejam em um estado específico, para que um determinado caso de teste possa ser executado. Por exemplo, para a realização de um teste de emissão de parecer de prorrogação de prazo para uma obra, no ínicio da execução do caso de teste deve existir uma obra com uma solicitação de prorrogação de prazo aguardando análise.

Com o intuito de agilizar a execução de casos de testes com estas características, uma estrutura de suporte existe e está disponível para a elaboração dos mesmos. Assim, casos de testes que dependam de pré-condições específicas sempre poderão ser executados, não importando se a funcionalidade do sistema que trata das pré-condições está funcionando ou não.
<br><br>

**Mas e como isto funciona?**

É muito simples! Na criação de um caso de testes (CDT) você pode também definir um **caso de testes de preparação do banco de dados**. Neste último, você deve detalhar todas as condições necessárias para a execução do CDT sendo desenvolvido. Quando o seu CDT for executado, todas as pré-condições por você definidas serão utilizadas pelo serviço de pré-condições para efetuar uma busca no banco de dados. Caso a proposta/usuário (ou qualquer outro objeto em questão) seja encontrado no BD, o seu CDT poderá utilizar o mesmo para a execução.
<br><br>

**Mas e se não houver nenhuma proposta/usuário com as pré-condições definidas?**

Aqui é onde a mágica acontece! Se nenhum objeto atender as pré-condições por você definidas, um novo objeto será inserido no banco de dados sem a necessidade de execução dos fluxos do sistema!
<br><br>

**Que bacana! Mas afinal, como eu uso este serviço?**

Como mencionado, a obtenção dos objetos necessários para um CDT é realizada em um caso de testes de preparação do banco de dados. Tudo (ou quase tudo) que você precisa saber é detalhado a seguir.

---

### Construção dos casos de testes

Primeiro, o caso de testes de preparação do banco de dados deve ser criado (seção 1). Em seguida, algumas alterações devem ser feitas no CDT (seção 2).
<br><br>

**1. Caso de testes de preparação do banco de dados**

Para a implementação deste, primeiro crie uma classe filha de `SetupBD`. É uma boa prática colocar esta classe de preparação do BD em um sub-pacote `setup` dentro do pacote onde o CDT será desenvolvido. Ao criar tal classe, existem dois métodos com os quais você deve se preocupar: `prepararProposta()` e `prepararUsuario()`. Estes métodos são os locais onde devem ser definidas as pré-condições do caso de testes. Abaixo há um exemplo da preparação para um CDT de _emissão de um parecer favorável para uma solicitação de cancelamento de uma obra de construção do programa 'Requalifica UBS'_.

```java
public class BD_SolicitacaoDeCancelamento extends SetupBD {

  @Override
  public void prepararProposta() {
    //@formatter:off
    SetupBD.setProposta(this.precondicaoPropostaService.getProposta(
                PrecondicaoTipoObra.CONSTRUCAO,
                PrecondicaoPrograma.REQUALIFICA_UBS,
                PrecondicaoFundo.FMS_FLORIANOPOLIS_SC,
                PrecondicaoSolicitacao.CANCELAMENTO(SituacaoSolicitacao.AGUARDANDO_ANALISE)));
    //@formatter:on
  }

	@Override
	public void prepararUsuario() {
        //@formatter:off
		SetupBD.setUsuario(this.precondicaoUsuarioService.getUsuario(
                PrecondicaoPapel.PARECERISTA,
                PrecondicaoFundoUsuario.FMS_FLORIANOPOLIS_SC));
        //@formatter:on
	}
}
```

**PS:** É interessante utilizar as anotações `@formatter:off` e `@formatter:on` e colocar cada pré-condição em uma linha diferente.

Na preparação de uma proposta, o serviço de propostas (`precondicaoPropostaService`) deve ser utilizado. O método `getProposta(...)` é o responsável por retornar a proposta necessária para o CDT. Você pode passar por parâmetro quantas pré-condições forem necessárias, e em qualquer ordem. **É importante lembrar que se você informar pré-condições conflitantes (por exemplo, uma proposta em situação incompleta com uma solicitação de prorrogação de prazo aguardando análise), o CDT pode não executar ou pode ter um comportamento inesperado.** Neste exemplo, um usuário com papel de parecerista também é buscado utilizando o serviço de usuários (`precondicaoUsuarioService`), pois o mesmo será utilizado para efetuar o login no sistema e para emitir o parecer da solicitação. Outro ponto importante é que, caso você não necessite de todos os objetos de preparação do BD, então os métodos de preparação desnecessários devem permanecer vazios.

Todas as pré-condições disponíveis estão no pacote `br.gov.saude.sismob.spring.conditions`. Detalhes estão disponíveis mais abaixo.
<br><br>

**2. Caso de teste de funcionalidade do sistema**

Com o caso de testes de preparação do BD criado, você pode elaborar o CDT de funcionalidade do sistema. Na classe do CDT é necessário adicionar a anotação `@Setup` indicando a classe do caso de testes de preparação do BD, como mostrado abaixo. É necessário declarar atributos para os objetos que você preparou no outro caso de testes (`UsuarioDTO` e `PropostaDTO`). Declare apenas o que for necessário. No método `iniciarVariaveis()` estes atributos devem ser definidos através dos métodos estáticos `getProposta()` e `getUsuario()` da classe `SetupBD`. Agora, basta você elaborar o CDT utilizando o número da proposta e/ou informações do usuário das pré-condições!

```java
@Setup(BD_SolicitacaoDeCancelamento.class)
public class EmitirParecerSolicitacaoCancelamento extends CasoDeTesteSismob {

	private LoginFluxo login;
	private HomeTecnicoPage home;
	private ListaDePropostasEObrasPage listaPropostasObras;
	private UsuarioDTO usuario;
	private PropostaDTO proposta;

	@Override
	public void iniciarVariaveis() {
		this.login = new LoginFluxo(this.webDriver);
		this.home = new HomeTecnicoPage(this.webDriver);
		this.listaPropostasObras = new ListaDePropostasEObrasPage(this.webDriver);
		this.usuario = SetupBD.getUsuario();
		this.proposta = SetupBD.getProposta();
	}

	@Override
	public void passos() {
		this.login.com(this.usuario);
		this.home.obrasButton().clicar();
		this.listaPropostasObras.pesquisaPropostaTextField().preencher(this.proposta.getNumeroProposta());
		this.listaPropostasObras.pesquisarButton().clicar();
		// TODO Continua...
	}

	@Override
	public void asserts() {
		// TODO Aqui vão as verificações necessárias
	}

}
```

---

### Pré-condições disponíveis

#### Proposta
- `PrecondicaoSituacaoProposta`: `INCOMPLETA`, `AGUARDANDO_ANALISE`, `FAVORAVEL`, ...
- `PrecondicaoSituacaoObra`: `ACAO_PREPARATORIA`, `INICIO_EXECUCAO`, `EXECUCAO_CONCLUSAO`, ...
- `PrecondicaoEtapaProposta`: `HABILITACAO`, `ACAO_PREPARATORIA`, `INICIO_EXECUCAO`, ...
- `PrecondicaoSituacaoMonitoramento`: `ATUALIZADO`, `NAO_MONITORADO`, `EM_ATRASO_30`, ...
- `PrecondicaoTipoObra`: `AMPLIACAO`, `CONSTRUCAO`, `REFORMA`
- `PrecondicaoTipoRecurso`: `EMENDA`, `PROGRAMA`
- `PrecondicaoTipoProposta`: `ANTIGA`, `NOVA`
- `PrecondicaoPrograma`: `REQUALIFICA_UBS`, `OFICINA_ORTOPEDICA`, `UNIDADE_DE_PRONTO_ATENDIMENTO`, ...
- `PrecondicaoSolicitacao`: `SUPERACAO_ACAO_PREPARATORIA`, `PRORROGACAO`, `CANCELAMENTO`, ...
- `PrecondicaoEsferaFundo`: `ESTADUAL`, `MUNICIPAL`
- `PrecondicaoFundo`: `FMS_FLORIANOPOLIS_SC`, `FMS_SAO_PAULO_SP`, `FES_SC`, ...

#### Usuário
- `PrecondicaoPapel`: `TECNICO`, `PARECERISTA`, `LEITOR`, ...
- `PrecondicaoFundoUsuario`: `FMS_FLORIANOPOLIS_SC`, `FMS_SAO_PAULO_SP`, `FES_SC`, ...

---

Caso você encontre bugs, problemas, necessite de novas funcionalidades ou ainda tenha dúvidas, não deixe de comunicar à galera do automatizado!
