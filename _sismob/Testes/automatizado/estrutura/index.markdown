---
layout: post
title: Estrutura
type: modulo
modulo: automatizado
codigo: estrutura
---

# Estrutura
<img src="img/arquitetura_teste_automatizado.png" />

# Hierarquia
<img src="img/fluxo_funcionamento.png" />

### 1. Padrões de nomenclatura ###
* Caso de teste: CDT_NomeDoCasoDeTeste
* Suites: Suite_NomeDaSuite
* Setup: BD_NomeDoSetup
* DTO: NomeDTO
* Page: NomePage
* Form: NomeForm
* Model: nomeModel

![]()

### 2. Definições ###
1. WebDriver: É uma abstração da interface do navegador implementado no Selenium 2.0. Ele possui uma Classe de implementação para cada navegador que tenha suporte para o Selenium ( ChromeDriver, EventFiringWebDriver, FirefoxDriver, HtmlUnitDriver, InternetExplorerDriver, PhantomJSDriver, SafariDriver, etc).
1. DriverManager: Classe que gerencia o Webdriver, possuindo 2 métodos.
    1. createWebDriver() - Define qual classe implementadora do webDriver será utilizada. No caso do SISMOB, atualmente é setado de forma única o ChromeDriver. No método também são definidos os argumentos do navegador. Por exemplo: janela maximizada, navegação incógnita, etc.
    1. closeWebDriver() - Define as ações tomadas ao finalizar o webDriver. Por exemplo, webDriver.Close() fecha a janela do browser utilizada pelo webDriver e webDriver.Dispose() fecha todas janelas do browser e encerra a sessão de maneira segura.
1. CasoDeTesteSismob: Estendida da classe CasoDeTeste. Possui alguns métodos próprios e alguns herdados. Tem como objetivo controlar a execução do CDT.
    1. passos() - Método que define os passos necessários para o cenário de teste.
    1. asserts() - Método onde serão carregados os componentes e modelos necessários para o CDT, além de realizar os asserts.
    1. iniciarVariaveis() - Utilizado para inicializar todas as variáveis e atributos do CDT, deixando os passos mais limpos e claros.
    1. passosAposAsserts() - Utilizado para manipular o sistema após a execução dos asserts.
1. CasoDeTeste: Classe pai do CasoDeTesteSismob. Organiza os passos e asserts dos CDTs.
1. SetupBD: Classe que utiliza o Spring para usar os serviços existentes no sistema para obtenção ou criação de usuários e propostas em determinadas condições.

![]()


### 3. Boas práticas ###
* CDT_VerificarTodosCamposTela: Para todos os módulos, deve ser feito um caso de teste chamado VerificarTodosCampos que tem como objetivo checar se os campos estáticos estão presentes na tela desejada. É vantajoso que seja feito dessa forma pois diminui muito a quantidade de casos de teste. Ao invés de ter vários CDTs que verificam individualmente se determinados labels, buttons, fields, etc estão presentes na tela, é conveniente que seja desenvolvido apenas um VerificarTodosCampos.




