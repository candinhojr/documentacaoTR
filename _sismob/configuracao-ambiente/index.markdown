---
layout: post
title: Configurações do Ambiente
type: configuracao-ambiente
codigo: configuracao-ambiente
ordem: 8
---
<!-- Nav tabs -->
<ul class="nav nav-tabs" id="indexTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" data-toggle="tab" href="#linux" role="tab">Linux</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#windows" role="tab">Windows</a>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="linux" role="tabpanel">
    <!-- Linux -->
    <br>
    <h1>Linux</h1>
    <p></p>
    <h2 align="center">Java 8</h2>
    <h3 align="center">Instalação</h3>
    <h1 align="center"><img src="http://logodatabases.com/wp-content/uploads/2012/03/java-logo-large.png" alt="" width="100px"></h1>
    <p></p>
    <p>Passo 1</p>
    <p><code>sudo add-apt-repository ppa:webupd8team/java</code></p>
    <p>Passo 2</p>
    <p><code>sudo apt-get update</code></p>
    <p>Passo 3</p>
    <p><code>sudo apt-get install oracle-java8-installer</code></p>
    <p>Passo 4</p>
    <p><code>sudo apt-get install oracle-java8-set-default</code></p>


    <h2 align="center">Git</h2>
    <h1 align="center"><img src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png" alt="" width="100px"></h1>

    <p>Passo 1 - Instalação</p>
    <p><code>sudo apt-get install git</code></p>
    <p>Passo 2</p>
    <p>* Logar no github e fazer um fork do repositório <a href="https://github.com/sismob/sismob">sismob</a></p>
    <p>Passo 3 - Clonar o projeto sismob:</p>
    <p><code>git clone https://github.com/[usuario]/[nome_repositorio]</code></p>
    <p>Passo 4 - Criar arquivo para o banco</p>
    <p>* Após clonar o repositório, crie um arquivo chamado <b>database.properties</b> dentro da pasta {DIRETORIO_DO_PROJETO}/sismob.business.impl/src/main/resources/config/</p>
      <p>- O arquivo criado deverá conter as informações da base de dados usada pela aplicação</p>

      <p>Exemplo para um banco local:</p>
      <div class="highlighter-rouge">
        <pre class="highlight">
            <!-- Atribuição da Id abaixo -->
          <code class="textarea" id="database-properties"  >
      <!-- Conteúdo do Arquivo -->
oracle.jdbc.driverClassName=oracle.jdbc.OracleDriver
oracle.jdbc.url=jdbc:oracle:thin:@localhost:1521:xe
oracle.jdbc.username=BRIDGE
oracle.jdbc.password=j5m9jTr5s4mvgvb82MSM
      <!-- Fim da Conteúdo do Arquivo  -->
          </code>
        </pre>
        <input id="myButton1" type="button" class="copiar btn"  onclick="copiar('database-properties', 'myButton1')" data-container="body" data-toggle="popover" data-placement="bottom" data-content="" title="Aviso" value="Copiar Script">
      </div>
      <br>
      <p>* Para não gerar .orig:</p>
      <p><code>git config --global mergetool.keepBackup false</code></p>
    <br>
    <h1 align="center"><img src="https://maven.apache.org/images/maven-logo-black-on-white.png" alt="Maven" width="100px"></h1>
    <br>

    <p>Passo 1 - Instalação</p>
    <p><code>sudo apt-get install maven</code></p>
    <p>* Executar o comando</p>
    <p><code>mvn clean install</code> (A build irá falhar)</p>

    <p>Passo 2 - baixar a configuração</p>****
    <p>Baixar  <a href="https://drive.google.com/drive/u/1/folders/0B_N8pY55c8qNR2FaUVJadmwwX2c">settings.xml</a> na pasta “Programação” no Drive do SISMOB e mover para a pasta .m2 que está na home</p>*
    <p>Passo 3 - mover a configuração**</p>
    <p><code>sudo mv settings.xml ~/.m2/</code>/.m2 é (pasta oculta)</p>

    <h1 align="center"><img src="https://peerigon.github.io/talks/2016-10-18-webandwine-introduction-to-docker/assets/large_v-trans.png" alt="Docker" width="100px"></h1>
    <p><code>wget -qO- https://get.docker.com/ | sh</code></p>

    <p><code>sudo usermod -aG docker 'Nome do seu usuário do PC'</code></p>
    <p><ul>
      <li>Reiniciar a máquina OU Fazer logoff e login</li>
      <li>Logar no <a href="https://hub.docker.com/">DockerHub</a> utilizando sua conta do github(criar conta no docker com mesmo nome de usuário)</li>
      <li>Pedir acesso as images do banco do SISMOB</li>
      <li>Logar com sua conta no docker e executar no terminal: <br> <code>docker login</code></li>
      <li>Fazer pull da imagem do banco no docker: <a href="{{ site.baseurl}}/sismob/banco-de-dados/dumps-e-config/index.html">Configurando Dumps</a></li>
    </ul></p>


    <h1 align="center"> IDE para Banco de Dados </h1>

    <!-- Nav tabs -->
    <ul class="nav nav-tabs" id="tabIDE" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#sqldeveloper" role="tab">SQLDeveloper</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#datagrip" role="tab">DataGrip</a>
      </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      <div class="tab-pane active" id="sqldeveloper" role="tabpanel" >
        <br>
        <h2 align="center">SQLDeveloper</h2>
          <p align="center"><img src="http://technostixs.com/wp-content/uploads/2014/11/SQLDev.png" alt="SQLDeveloper" width="100px"></p>
          <p>  Passo 1 - Baixar Arquivo</p>
          <p><a href="http://www.oracle.com/technetwork/developer-tools/sql-developer/downloads/index.html">Download</a></p>
          <p>Passo 2 - Descompactar para a pasta /opt </p>
          <p> <code>sudo unzip sqldeveloper-x.zip /opt/</code></p>
          <p>Passo 3 - abrir sqlDeveloper</p>
          <p><code>sudo sh /opt/sqldeveloper.sh</code></p>
          <p>(caso peça o path do java /usr/lib/jvm/java-8-oracle )</p>
          <p>Passo 4 - Adicionar conexão e configurar com as seguinte diretrizes</p>
          <p>
            * Connections -> New Connections -> Connection Type: Advanced <br>
            * URL: jdbc:oracle:thin:@localhost:1521:XE <br>
            * Username: DBSISMOB <br>
            * Password: j5m9jTr5s4mvgvb82MSM <br>
            * Connect
          </p>

      </div>
      <div class="tab-pane" id="datagrip" role="tabpanel">
        <br>
        <h2 align="center">DataGrip</h2>
        <p align="center"><img src="https://resources.jetbrains.com/assets/marketo/newsletter/january2016/newsletter_promo.png" alt="DataGrip" width="100px"></p>
        <ol>
          <li>  <p> Baixar Arquivo</p>
            <p><a href="https://www.jetbrains.com/datagrip/download">Download</a></p></li>
          <li><p>Instalar </p>
          <p> <code>sh seudir/bin/datagrip.sh</code></p></li>
          <li><p>Ativar</p>
          <p>Para ativação clicar em *License server* e colocar o link http://idea.imsxm.com</p></li>
          <li><p>Adicionar o banco e configurar</p>
            <ul>
              <li><p>Clicar na aba View -> Tool Windows -> Database </p></li>
              <li><p>Copiar o import desejado abaixo, clicando no botão </p></li>
              <br>
                <div class="row">
                  <div class="col-sm-2">
                    <textarea class="textarea" id="import-homologacao"  style="display:none;">
                    #DataSourceSettings#
                    #LocalDataSource: HOMOLOGA
                    #BEGIN#
                    <data-source source="LOCAL" name="HOMOLOGA" uuid="a9ab2ee1-c139-4735-8e06-2ffd24beb7ff"><database-info product="Oracle" version="Oracle Database 12c Standard Edition Release 12.1.0.2.0 - 64bit Production" jdbc-version="4.0" driver-name="Oracle JDBC driver" driver-version="12.1.0.2.0"><extra-name-characters>$#</extra-name-characters><identifier-quote-string>&quot;</identifier-quote-string></database-info><case-sensitivity plain-identifiers="upper" quoted-identifiers="exact"/><driver-ref>oracle</driver-ref><synchronize>true</synchronize><auto-commit>false</auto-commit><jdbc-driver>oracle.jdbc.OracleDriver</jdbc-driver><jdbc-url>jdbc:oracle:thin:@homologacao.sismob.ufsc.br:1521:xe</jdbc-url><secret-storage>master_key</secret-storage><user-name>DBSISMOB</user-name><introspection-schemas>*:DBCGPAN,DBCNES,DBCNESRJ,DBCORPFNS,DBFAF,DBGERAL,DBNACIONAL,DBPESSOA,DBPGESCONTA,DBPROPOSTACONVENIO,DBPROPOSTAFNS,DBPROPOSTASAS,DBSISMOB</introspection-schemas><driver-properties><property name="v$session.program" value="DataGrip"/></driver-properties></data-source>
                    #END#
                    </textarea>
                      <button class="copiar btn btn-primary"  onclick="copiar('import-homologacao')">Import do homologação</button>
                  </div>
                </div>
                <div class="row">
                  <p></p>
                  <div class="col-sm-2">
                    <textarea class="textarea" id="import-local"  style="display:none;">
                      #DataSourceSettings#
                      #LocalDataSource: LOCAL
                      #BEGIN#
                      <data-source source="LOCAL" name="LOCAL" uuid="5383d532-9e36-47bb-9d4d-31d0bb11480f"><database-info product="Oracle" version="Oracle Database 12c Standard Edition Release 12.1.0.2.0 - 64bit Production" jdbc-version="4.0" driver-name="Oracle JDBC driver" driver-version="12.1.0.2.0"><extra-name-characters>$#</extra-name-characters><identifier-quote-string>&quot;</identifier-quote-string></database-info><case-sensitivity plain-identifiers="upper" quoted-identifiers="exact"/><driver-ref>oracle</driver-ref><synchronize>true</synchronize><auto-commit>false</auto-commit><jdbc-driver>oracle.jdbc.OracleDriver</jdbc-driver><jdbc-url>jdbc:oracle:thin:@localhost:1521:XE</jdbc-url><secret-storage>master_key</secret-storage><user-name>BRIDGE</user-name><introspection-schemas>*:BRIDGE,DBCGPAN,DBCNES,DBCNESRJ,DBCORPFNS,DBFAF,DBGERAL,DBNACIONAL,DBPESSOA,DBPGESCONTA,DBPROPOSTACONVENIO,DBPROPOSTAFNS,DBPROPOSTASAS,DBSISMOB</introspection-schemas><default-dialect>OracleSqlPlus</default-dialect><driver-properties><property name="v$session.program" value="DataGrip"/></driver-properties></data-source>
                      #END#
                    </textarea>
                    <button class="copiar btn btn-primary"  onclick="copiar('import-local')">Import do Banco Local</button>
                  </div>
                </div>
                <div class="row">
                  <br>
                  <div class="col-sm-2">
                    <textarea class="textarea" id="import-producao" style="display:none;" >
                      #DataSourceSettings#
                      #LocalDataSource: PROD
                      #BEGIN#
                      <data-source source="LOCAL" name="PROD" read-only="true" uuid="3649a763-6913-4e6f-8b0a-5e83005fa465"><database-info product="Oracle" version="Oracle Database 11g Enterprise Edition Release 11.2.0.4.0 - 64bit Production&#xa;With the Partitioning, Real Application Clusters, Automatic Storage Management, OLAP,&#xa;Data Mining and Real Application Testing options" jdbc-version="4.0" driver-name="Oracle JDBC driver" driver-version="12.1.0.2.0"><extra-name-characters>$#</extra-name-characters><identifier-quote-string>&quot;</identifier-quote-string></database-info><case-sensitivity plain-identifiers="upper" quoted-identifiers="exact"/><driver-ref>oracle</driver-ref><synchronize>true</synchronize><auto-commit>false</auto-commit><jdbc-driver>oracle.jdbc.OracleDriver</jdbc-driver><jdbc-url>jdbc:oracle:thin:@srvoradf0.saude.gov:1521/dfpo1.saude.gov</jdbc-url><secret-storage>master_key</secret-storage><user-name>SISMOBWEB</user-name><introspection-schemas>*:DBCORPFNS,DBPROPOSTACONVENIO,DBPROPOSTAFNS,DBPROPOSTASAS,DBSISMOB,SISMOBWEB</introspection-schemas><driver-properties><property name="v$session.program" value="DataGrip"/></driver-properties></data-source>
                      #END#
                    </textarea>
                    <button class="copiar btn btn-primary"  onclick="copiar('import-producao')">Import do Produção</button>
                  </div>
                </div>
                <br>
              <li><p>No DataGrip, na view que foi aberta, clicar no sinal '+' -> Import from clipboard</p></li>
              <li><p> Configurar o usuário e senha (todo o resto deve já vir setado corretamente por padrão)</p></li>
            </ul>
          </li>

          <li><p>(Opcional)</p>
              <p>Ir na aba Schemas e selecionar <b>somente</b> aqueles schemas úteis, para evitar poluição visual</p>
              <br>
              <p><b>Clicar em Ok</b></p></li>
        </ol>

      </div>
    </div>

    <h1 align="center"> IDE JAVA</h1>
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#eclipse" role="tab">Eclipse</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#intellij" role="tab">IntelliJ</a>
      </li>
    </ul>
    <!-- Tab panes -->
    <div class="tab-content">
      <div class="tab-pane active" id="eclipse" role="tabpanel">
        <h1 align="center">Java EE Eclipse</h1>
        <h1 align="center"><img src="http://www.eclipse.org/membership/promo/images/eclipsecon-ad-europe2017-400x400.png" alt="eclipse" width="100px"></h1>
        <ol>
          <li><b>Baixar</b></li>
            <a href="http://www.eclipse.org/downloads/eclipse-packages/">Download</a>
            <p>Escolher: <b>Eclipse IDE for Java EE Developers</b></p>
          <li>Descompactar e abrir o eclipse</li>
          <li><b>Importar projetos: </b></li>
          File -> Import -> Existing Maven Projects
          <li>Importar todos os projetos do sismob com exceção do core.processor</li>
          <li><b>Save actions: </b></li>
          window -> preferences -> java -> editor -> save actions -> configure
          <li>Print das telas em: <a href="https://drive.google.com/drive/u/1/folders/0B7kfNsf4ayKQTVl1SzhGUFVjenc">Link</a></li>
          <li><b>Marcar:</b>
              <ul>
                <li>Perform the selected actions on save</li>
                <li>Format sorce code</li>
                <li>Format all lines</li>
                <li>Organize imports</li>
                <li>Additional actions:
                  <ul>
                        <li>organizing(remove trailin whitespace - all lines;)  </li>
                        <li>code style (use blocks - always; and use parentheses - only if necessary)  </li>
                        <li>member accesses (use this qualifier for field accesses - always; and for methods accesses ) </li>
                        <li>missing code (add missing annotations)  </li>
                        <li>unnecessary code (remove unused imports; remove unnecessary casts)  </li>
                      </ul>
                  </li>
              </ul>
          </li>
          <li>Importar arquivo sismob-formatter que está na pasta do sismob, em window -> preferences -> java -> code style formatter</li>
          <li>Importar arquivo cleanUp que está na pasta sismob, em Window -> preferences - > java -> cleanUp</li>
          <li>Importar arquivo `bridge.importorder` que está na pasta sismob, em Window -> preferences - > java -> code style > Organize Imports</li>
          <li>Instalar Maven Integration JDT APT : Help -> Eclipse Marketplace:
            <ol>
              <li>Pesquisar por Jboss  </li>
              <li>Instalar JBoss Tools  </li>
              <li>Marcar:
                  <ul>
                    <li>JBoss Maven Integration</li>
                    <li>Maven Integration JDT APT  </li>
                  </ul>
              </li>
            </ol>
          </li>
          <li>Selecionar o projeto sismob.common.api > Project > Properties > maven > annotation processing > Marcar Automatically configure JDT APT</li>
          <li>Selecionar o projeto sismob.tools > Project > Properties > Java Build Path > Projects > Adicionar o projeto core.tools</li>
          <li>Selecionar o projeto sismob.business.impl > Project > Properties > maven > annotation processing > Marcar Automatically configure JDT APT</li>
          <li>Run > Debug Configurations > New Java Application > Project: sismob.springboot, Main class: br.gov.sismob.application.SismobApplication </li>
          <li>Windows > Preferences > Maven > Annotation Processing > Marcar Automatically configure JDT APT</li>
          <li><b>Fechar eclipse</b></li>
        </ol>
      </div>
      <div class="tab-pane" id="intellij" role="tabpanel">
        <a href="https://www.jetbrains.com/idea/"><h1 align="center">Jet Brains InteliiJ</h1></a>
        <h1 align="center"><img src="https://seeklogo.com/images/I/intellij-idea-logo-F0395EF783-seeklogo.com.png" alt="" width="100px"></h1>

        <p align="center">Em Construção</p></div>
    </div>


    <h1 align="center">Lombok</h1>
    <h1 align="center"><img src="http://images.clipartpanda.com/pepper-clipart-DooFi_Pepper.svg" alt="lombok" width="100px"></h1>

    <p>Passo 1 - Baixar</p>
    <p><a href="https://projectlombok.org/download.html">Download</a></p>
    <p>Passo2 - Executar</p>
    <p><code>sudo java -jar lombok.jar</code></p>
    <p>Passo 3 - Instalar</p>
    <p>Selecionar pasta do eclipse e instalar.</p>

    <h1 align="center"><img src="https://talk.jekyllrb.com/uploads/jekyllrb/original/1X/4f9bd5334246d33651e846aed812280fbff586ba.png" alt="Jekyll" width="200px"></h1>
    <p><b>Passo 1 - Instalação</b></p>
    <p><code>sudo apt-add-repository ppa:brightbox/ruby-ng</code></p>
    <p><code>sudo apt-get update</code></p>
    <p><code>sudo apt-get install ruby2.3 ruby2.3-dev build-essential</code></p>
    <p><code>sudo gem2.3 install bundler</code></p>
    <p><code>sudo gem install posix-spawn</code></p>
    <p><code>sudo gem install jekyll</code></p>

    <p><b>Passo 2 - Para servir a documentação em um servidor local:</b>
      <br><code>jekyll serve</code> ou <code>jekyll s</code> (a partir da raiz da documentação).</p>


    <h1 align="center">Testes automatizados</h1>
    <h1 align="center"><img src="http://shipit.resultadosdigitais.com.br/images/posts/acceptance-tests.png" alt="" width="100px"></h1>
    <p><b>Passo 1 - Baixar o chromedriver</b></p>
    <p><code>wget -N http://chromedriver.storage.googleapis.com/2.29/chromedriver_linux64.zip</code></p>
    <p><code>unzip chromedriver_linux64.zip</code></p>
    <p><code>chmod +x chromedriver</code></p>
    <p><code>sudo mv -f chromedriver /usr/local/share/chromedriver</code></p>
    <p><code>sudo ln -s /usr/local/share/chromedriver /usr/local/bin/chromedriver</code></p>
    <p><code>sudo ln -s /usr/local/share/chromedriver /usr/bin/chromedriver</code></p>
    <p><b>Passo 2 - Licença</b></p>
    <p>Baixar a licença do Testbench do vaadin <a href="https://drive.google.com/open?id=0B7kfNsf4ayKQMGVtRVBrSkgyaGc">License</a> e mover para a home</p>

    <h1 align="center">Sugestões</h1>
    <p><a href="http://askubuntu.com/questions/477551/how-can-i-use-docker-without-sudo">Docker without sudo(docker sem precisar da permissão do superusuario)</a></p>

    <p><a href="http://git-scm.com/docs/git-credential-store">Git credentials para linux</a></p>

    <p>Quick diff (mostra as diferenças do git em relação a última versão na barra lateral do eclipse):</p>
    <ol>
      <li>No eclipse, Window -> Preferences - Pesquisar por Quick Diff</li>
      <li>Trocar o “reference source” por “A Git Revision” e escolher as cores conforme preferência.</li>
    </ol>

    <p>Content assist (editor do eclipse mais “inteligente”):</p>
    <ol>
      <li>Window -> Preferences -> Java -> Editor -> Content Assist</li>
      <li>Insertion: Completion overwrites</li>
      <li>Fill method arguments and show guessed arguments: Insert best guessed arguments</li>
    </ol>

    <h1 align="center">Meld (Comparador para conflitos no git):</h1>
    <h1 align="center"><img src="http://icons.iconarchive.com/icons/alecive/flatwoken/512/Apps-Meld-icon.png" alt="" width="100px"></h1>

    <p><code>sudo apt-get install meld</code></p>
    <p>Em caso de conflito ao fazer pull, utilizar o seguinte comando:</p>
    <p><code>git mergetool -t meld</code></p>
    <p>Existe uma forma de setar o meld como ferramenta padrão de merge. Caso necessário, perguntar ao oráculo.</p>

    <h1 align="center">Git Alias</h1>

    <p>Configurando alias no git, entrar no diretório onde encontra-se o projeto e seguir os exemplos abaixo:</p>
    <p> Adicionando alias de pull no projeto core do SISMOB, repositório master (foi utilizado o alias ‘pullcore’, podendo ser trocado por qualquer outra palavra):</p>
    <p><code>git config alias.pullcore "pull https://github.com/sismob/core"</code></p>
    <p>Utilização: git pullcore</p>

    <p>Adicionando alias de pull no projeto sismob do SISMOB, repositório master (foi utilizado o alias ‘pullsismob’, podendo ser trocado por qualquer outra palavra):</p>
    <p><code>git config alias.pullsismob "pull https://github.com/sismob/sismob"</code></p>
    <p>Utilização: git pullsismob</p>

    <p>Obs 1: Da forma acima, os alias funcionarão apenas nos diretórios e sub-diretórios onde foram executados os comandos (recomendável). Para configuração global, utilizar <code>--global</code>.</p>


      <h1 align="center">Aumentar memória do eclipse</h1>
      <p>Abrir o eclipse.ini: </p>
      <p><code>sudo cd  /opt/eclipse/eclipse.ini</code></p>
      <ol>
        <li>trocar --launcher.XXMaxPermSize, de 256M para 4096M</li>
        <li>trocar -Xms40m para Xms4096m e -Xmx512m para -Xmx4096m</li>
      </ol>


    <h1 align="center">LogBack</h1>

    <p>O arquivo `logback-spring.xml` controla o nível de log. É útil para debugar queries. Os valores dos binding parameters vão aparecer abaixo da query quando a propriedade level for definida como "TRACE" na linha seguinte:</p>
          <p><code>"< logger name="org.hibernate.type" level="TRACE" />"</code></p>

    A quantidade de linhas de log aumenta bastante ao mudar o level para "TRACE". Para voltar ao nível normal de log, basta definir o valor de level para "ERROR" outra vez. Faça Refresh nos projetos e Update Maven Projects sempre que fizer essa alteração.

    <h1 align="center">SonarLint</h1>
    <h1 align="center"><img src="https://pbs.twimg.com/profile_images/724309565861404673/tshDtvTW.png" alt="SonarLint" width="100px"></h1>

    <p>O SonarLint é uma extensão do Eclipse que permite receber feedback on-the-fly sobre bugs e qualidade do código que está sendo desenvolvido.
    Para instalar siga os passos:</p>
    <ul>
      <li>No eclipse, na parte superior clique em 'Help' > 'Eclipse Marketplace'.</li>
      <li>No campo 'Find' digite 'SonarLint'.</li>
      <li>Clique em 'Install' e siga os passos.</li>
    </ul>
    <p>ou:</p>
    <p><a href="http://www.sonarlint.org/eclipse/">Site para baixar</a></p>


    <!-- End Linux -->
  </div>
  <div class="tab-pane" id="windows" role="tabpanel">
  <br>
  <br>
    <h1 align="center">Em construção by <a href="https://laboratoriobridge.slack.com/team/pedro.pacheco">P Pacheco</a></h1>
  </div>

</div>
