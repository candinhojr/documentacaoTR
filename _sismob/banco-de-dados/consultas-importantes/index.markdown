---
layout: post
title: Consultas Importantes
modulo: banco-de-dados
type: consultas-importantes
codigo: consultas-importantes
---


<ul class="anchorList">
  <li>
    <a href="#migrações" >Migrações</a>
  </li>
  <li>
    <a href="#script-do-calistro">Alterar uma proposta específica para ser monitorada por FLORIANÓPOLIS </a>
  </li>
  <li>
    <a href="#altera-proposta-monitorada">Alterar o período de cadastro da proposta</a>
  </li>
  <li>
    <a href="#altera-periodo-proposta">Alterar o proponente da proposta</a>
  </li>
  <li>
    <a href="#altera-proponente">Alterar as senhas para 123qwe</a>
  </li>
  <li>
    <a href="#altera-sequence">Atualizar sequence da tabela Parametrizacao_etapa</a>
  </li>
  <li>
    <a href="#altera-senhas">Buscar algum CNES para inserir na etapa de funcionamento</a>
  </li>
  <li>
    <a href="#busca-cnes">Buscar CNPJ de uma FMS/FES específica</a>
  </li>
  <li>
    <a href="#busca-cnpj">Buscar o IBGE de um município específico</a>
  </li>
  <li>
    <a href="#busca-ibge">Buscar todos os perfis que estão expirados</a>
  </li>
  <li>
    <a href="#busca-perfis-expirados">Criar programas e emendas para um município específico</a>
  </li>
  <li>
    <a href="#criar-programas-emendas">Criar solicitação de etapa</a>
  </li>
  <li>
    <a href="#criar-solicitacao-etapa">Inserir as diligências e alteração de endereço</a>
  </li>
  <li>
    <a href="#inserir-diligencias-endereco">Migração para ser executado no novo dump</a>
  </li>
  <li>
    <a href="#migracao-novo-dump">Popular base de solicitações</a>
  </li>
  <li>
    <a href="#solicitacoes-na-base">Priorizar todas as propostas</a>
  </li>
  <li>
    <a href="#priorizar-propostas">Remover questão dos questionários</a>
  </li>
  <li>
    <a href="#remover-questoes-questionario">Reverter parecer de superação de etapa</a>
  </li>
</ul>


## Migrações

<p id="top1"> Para cadastrar a proposta </p>

<div class="highlighter-rouge">
  <pre class="highlight">
      <!-- Atribuição da Id abaixo -->
    <code class="textarea" id="script-do-calistro"  >
<!-- Query/Consulta -->
ALTER TABLE
dbsismob.tb_ator_sistema
ADD
nu_versao_banco VARCHAR2(10);

COMMENT ON COLUMN
dbsismob.tb_ator_sistema.nu_versao_banco
IS
'Coluna para identificar a versão do banco de dados';

UPDATE
dbsismob.tb_ator_sistema
SET
nu_versao_banco = '2.1.00';

commit;
<!-- Fim da Query/Consulta -->
    </code>
  </pre>
  <input id="myButton1" type="button" class="copiar btn"  onclick="copiar('script-do-calistro', 'myButton1')" data-container="body" data-toggle="popover" data-placement="bottom" data-content="" title="Aviso" value="Copiar Script">
</div>

## Alterar uma proposta específica para ser monitorada por FLORIANÓPOLIS ##
Altera uma proposta específica para ser monitorada por FLORIANÓPOLIS

<div class="highlighter-rouge">
  <pre class="highlight">
  <!-- Atribuição da Id abaixo -->
    <code class="textarea" id="altera-proposta-monitorada"  >
<!-- Query/Consulta -->
UPDATE DBSISMOB.TB_PROPOSTA
SET CO_ATOR_PESSOA_ENTIDADE = 5624687, CO_ENDERECO = 181
WHERE NU_PROPOSTA = NU_PROPOSTA;
commit;
<!-- Fim da Query/Consulta -->
    </code>
  </pre>
  <input id="myButton2" type="button" class="copiar btn"  onclick="copiar('altera-proposta-monitorada', 'myButton2')" data-container="body" data-toggle="popover" data-placement="bottom" data-content="" title="Aviso" value="Copiar Script">
</div>

## Alterar o período de cadastro da proposta: ##

Altera o período de cadastro de proposta para o fim das 4 datas em 31/12/2018.

<div class="highlighter-rouge">
  <pre class="highlight">
  <!-- Atribuição da Id abaixo -->
    <code class="textarea" id="altera-periodo-proposta"  >
<!-- Query/Consulta -->
ALTER TRIGGER dbcorpfns.tra_tbportaria DISABLE;

UPDATE dbcorpfns.tb_portaria
    SET DT_FIM_VIGENCIA = TO_DATE('31/12/2018','DD/MM/YYYY'),
    DT_INICIO_VIGENCIA = TO_DATE('31/12/2016','DD/MM/YYYY'),
    DT_FIM_DILIGENCIA = TO_DATE('31/12/2018','DD/MM/YYYY'),
    DT_FIM_ANALISE = TO_DATE('31/12/2018','DD/MM/YYYY')
WHERE
    co_seq_portaria in (45, 46);

ALTER TRIGGER dbcorpfns.tra_tbportaria ENABLE;
COMMIT;
<!-- Fim da Query/Consulta -->
    </code>
  </pre>
  <input id="myButton3" type="button" class="copiar btn"  onclick="copiar('altera-periodo-proposta', 'myButton3')" data-container="body" data-toggle="popover" data-placement="bottom" data-content="" title="Aviso" value="Copiar Script">
</div>


## Alterar o proponente da proposta:

Altera o proponente de uma proposta para a mesma poder ser utilizada por um técnico em 'Florianópolis'.

<div class="highlighter-rouge">
  <pre class="highlight">
  <!-- Atribuição da Id abaixo -->
    <code class="textarea" id="altera-proponente"  >
<!-- Query/Consulta -->
UPDATE DBSISMOB.TB_PROPOSTA
SET CO_ATOR_PESSOA_ENTIDADE = 5624687, CO_ENDERECO = 181
WHERE NU_PROPOSTA = :NU_PROPOSTA;
commit;
<!-- Fim da Query/Consulta -->
    </code>
  </pre>
  <input id="myButton4" type="button" class="copiar btn"  onclick="copiar('altera-proponente', 'myButton4')" data-container="body" data-toggle="popover" data-placement="bottom" data-content="" title="Aviso" value="Copiar Script">
</div>

## Alterar as senhas para 123qwe:

Altera a senha de todos os usuário para 123qwe.

<div class="highlighter-rouge">
  <pre class="highlight">
  <!-- Atribuição da Id abaixo -->
    <code class="textarea" id="altera-senhas"  >
<!-- Query/Consulta -->
UPDATE dbsismob.tb_autenticacao
SET ds_senha  = '$2a$11$bQtFzFwniBDi/0z7r3.r2ubM13P9ni88mhlz3KIB0nShIh6XKsWAK';
COMMIT;
<!-- Fim da Query/Consulta -->
    </code>
  </pre>
  <input id="myButton5" type="button" class="copiar btn"  onclick="copiar('altera-senhas', 'myButton5')" data-container="body" data-toggle="popover" data-placement="bottom" data-content="" title="Aviso" value="Copiar Script">
</div>


## Atualizar sequence da tabela Parametrizacao_etapa:

Atualizar sequence da tabela Parametrizacao_etapa.

<div class="highlighter-rouge">
  <pre class="highlight">
  <!-- Atribuição da Id abaixo -->
    <code class="textarea" id="altera-sequence"  >
<!-- Query/Consulta -->
alter sequence dbsismob.SQ_PARAMETAPA_COSQPARAMETAPA increment by 269;
select dbsismob.SQ_PARAMETAPA_COSQPARAMETAPA.nextval from dual;
alter sequence dbsismob.SQ_PARAMETAPA_COSQPARAMETAPA increment by 1;
<!-- Fim da Query/Consulta -->
    </code>
  </pre>
  <input id="myButton6" type="button" class="copiar btn"  onclick="copiar('altera-sequence', 'myButton6')" data-container="body" data-toggle="popover" data-placement="bottom" data-content="" title="Aviso" value="Copiar Script">
</div>


## Buscar algum CNES para inserir na etapa de funcionamento:

Busca todos os CNES de um município específico, não levando em consideração o 'Tipo de Obra'.

<div class="highlighter-rouge">
  <pre class="highlight">
  <!-- Atribuição da Id abaixo -->
    <code class="textarea"  id="busca-cnes"  >
<!-- Query/Consulta -->
select CO_CNES, NO_BAIRRO from DBCNESRJ.TB_ESTABELECIMENTO where CO_MUNICIPIO_GESTOR = Código do Município;
<!-- Fim da Query/Consulta -->
    </code>
  </pre>
  <input id="myButton7" type="button" class="copiar btn"  onclick="copiar('busca-cnes', 'myButton7')" data-container="body" data-toggle="popover" data-placement="bottom" data-content="" title="Aviso" value="Copiar Script">
</div>


## Buscar CNPJ de uma FMS/FES específica:

Busca o CNPJ de uma entidade através do nome do município/estado que a representa.

<div class="highlighter-rouge">
  <pre class="highlight">
  <!-- Atribuição da Id abaixo -->
    <code class="textarea"  id="busca-cnpj"  >
<!-- Query/Consulta -->
SELECT NO_PADRONIZADO, NU_CNPJ
FROM DBSISMOB.TB_ATOR_PESSOA_ENTIDADE
WHERE NO_PADRONIZADO LIKE '%NOME_CIDADE_EM_CAPS%';
<!-- Fim da Query/Consulta -->
    </code>
  </pre>
  <input id="myButton8" type="button" class="copiar btn"  onclick="copiar('busca-cnpj', 'myButton8')" data-container="body" data-toggle="popover" data-placement="bottom" data-content="" title="Aviso" value="Copiar Script">
</div>


## Buscar o IBGE de um município específico:

Busca o código IBGE do município.

<div class="highlighter-rouge">
  <pre class="highlight">
  <!-- Atribuição da Id abaixo -->
    <code class="textarea"    id="busca-ibge" >
<!-- Query/Consulta -->
SELECT CO_MUNICIPIO_IBGE FROM DBSISMOB.TB_ATOR_PESSOA_ENTIDADE
WHERE NO_PADRONIZADO LIKE %NOME_CIDADE_EM_CAPS%';
<!-- Fim da Query/Consulta -->
    </code>
  </pre>
  <input id="myButton9" type="button" class="copiar btn"  onclick="copiar('busca-ibge', 'myButton9')" data-container="body" data-toggle="popover" data-placement="bottom" data-content="" title="Aviso" value="Copiar Script">
</div>


## Buscar todos os perfis que estão expirados:

Busca todos os perfis que estão com o período de utilização expirados.

<div class="highlighter-rouge">
  <pre class="highlight">
  <!-- Atribuição da Id abaixo -->
    <code class="textarea"   id="busca-perfis-expirados"  >
<!-- Query/Consulta -->
SELECT dadoPessoal.NU_CPF, atorPapel.DT_FIM, entidade.NU_CNPJ
FROM DBSISMOB.TB_ATOR_PAPEL atorPapel

INNER JOIN DBSISMOB.TB_ATOR_PESSOA_ENTIDADE entidade
ON entidade.CO_ATOR = atorPapel.CO_ATOR_PESSOA_ENTIDADE

INNER JOIN DBSISMOB.TB_ATOR_PESSOA_FISICA pessoaFisica
ON pessoaFisica.CO_ATOR = atorPapel.CO_ATOR

INNER JOIN DBSISMOB.TB_ATOR_DADO_PESSOAL dadoPessoal
ON dadoPessoal.CO_SEQ_ATOR_DADO_PESSOAL = pessoaFisica.CO_ATOR_DADO_PESSOAL

WHERE atorPapel.DT_FIM < DATA_DE_HOJE (DD/MM/AAAA)’';
<!-- Fim da Query/Consulta -->
    </code>
  </pre>
  <input id="myButton10" type="button" class="copiar btn"  onclick="copiar('busca-perfis-expirados', 'myButton10')" data-container="body" data-toggle="popover" data-placement="bottom" data-content="" title="Aviso" value="Copiar Script">
</div>

## Criar programas e emendas para um município específico:

Cria 5 programas e 5 programas com 5 emendas cada no FMS de Florianópolis.

Caso queira adicionar emendas para outros municipios é necessario trocar apenas os valores de  <code>CNPJ_FUNCDO_FLORIPA</code>
e o <code>CO_MUNICIPIO_IBGE_FLORIPA</code> que podem ser encontrados na tabela <code>TB_PESSOA_ENTIDADE</code>

<div class="highlighter-rouge">
  <pre class="highlight">
  <!-- Atribuição da Id abaixo -->
    <code class="textarea" id="criar-programas-emendas"  >
<!-- Query/Consulta -->
ALTER TRIGGER DBCORPFNS.TRA_RLPRGESTOBJETOESFERA DISABLE;
INSERT INTO DBCORPFNS.RL_PROGRAMA_ACAO (CO_PROGRAMA, CO_ACAO, NU_ANO_EXERCICIO) VALUES ('UFSC', 'UFSC', '2018');
DECLARE
CNPJ_FUNCDO_FLORIPA VARCHAR2(14) := '08935681000191';
CO_MUNICIPIO_IBGE_FLORIPA VARCHAR2(6) := '420540';
CO_SEQ_ACAO_ID VARCHAR(4) := 'UFSC';
ANO VARCHAR(4) := '2018';
QUANTIDADE_OBJETOS_PROGRAMA NUMBER(2):= 5;
QUANTIDADE_OBJETOS_EMENDA NUMBER(2):= 5;
QUANTIDADE_EMENDAS NUMBER(2):= 5;
VALOR NUMBER(10) := 1234567890;
VALOR_EMENDA NUMBER(10) := VALOR / QUANTIDADE_EMENDAS;
ID_PARLAMENTAR VARCHAR(4):= '5265';
BEGIN

FOR TIPO_PROPOSTA IN (SELECT * FROM DBPROPOSTAFNS.TB_TIPO_PROPOSTA) LOOP
FOR I IN 1..QUANTIDADE_OBJETOS_PROGRAMA LOOP

INSERT INTO DBCORPFNS.VW_ESFERA_TIPO_ENT_ATIVO_PES (CO_SEQ_ESFERA_TIPO_ENT_PESSOA,NU_CPF_CNPJ_PESSOA,CO_TIPO_ENTIDADE)
(SELECT MAX(CO_SEQ_ESFERA_TIPO_ENT_PESSOA) + 1,CNPJ_FUNCDO_FLORIPA,'13' FROM DBCORPFNS.VW_ESFERA_TIPO_ENT_ATIVO_PES);

INSERT INTO DBPROPOSTAFNS.TB_OBJETO (CO_SEQ_OBJETO, DS_OBJETO, CO_GND, NU_ANO_EXERCICIO, ST_ATIVO)
  (SELECT MAX(CO_SEQ_OBJETO) + 1, 'TESTE INTERNO - BRIDGE' || (MAX(CO_SEQ_OBJETO) + 1), '4', ANO, 'S' FROM DBPROPOSTAFNS.TB_OBJETO);

DECLARE LAST_VALUE_OBJ NUMBER;
BEGIN
SELECT MAX(CO_SEQ_OBJETO) INTO LAST_VALUE_OBJ FROM DBPROPOSTAFNS.TB_OBJETO;

INSERT INTO DBPROPOSTAFNS.RL_TIPOPROPOSTA_OBJETO (CO_SEQ_TIPOPROPOSTA_OBJETO,CO_TIPO_PROPOSTA,CO_TIPO_RECURSO,CO_OBJETO,CO_ACAO)
(SELECT MAX(CO_SEQ_TIPOPROPOSTA_OBJETO) + 1, TIPO_PROPOSTA.CO_TIPO_PROPOSTA,'2',LAST_VALUE_OBJ,CO_SEQ_ACAO_ID FROM DBPROPOSTAFNS.RL_TIPOPROPOSTA_OBJETO);

DECLARE LAST_VALUE_TIPO_PROPOSTA_OBJ NUMBER;
BEGIN
SELECT MAX(CO_SEQ_TIPOPROPOSTA_OBJETO) INTO LAST_VALUE_TIPO_PROPOSTA_OBJ FROM DBPROPOSTAFNS.RL_TIPOPROPOSTA_OBJETO;

INSERT INTO DBCORPFNS.RL_PRGEST_OBJETO_ESFERA (CO_SEQ_PRGEST_OBJETO_ESFERA,CO_PROGRAMA_ESTRATEGICO,CO_TIPOPROPOSTA_OBJETO,CO_ESFERA_ADMINISTRATIVA)
  (SELECT MAX(CO_SEQ_PRGEST_OBJETO_ESFERA) + 1, '245',LAST_VALUE_TIPO_PROPOSTA_OBJ,'02' FROM DBCORPFNS.RL_PRGEST_OBJETO_ESFERA);

DECLARE LAST_VALUE_OBJ_ESFERA NUMBER;
BEGIN
SELECT MAX(CO_SEQ_PRGEST_OBJETO_ESFERA) INTO LAST_VALUE_OBJ_ESFERA FROM DBCORPFNS.RL_PRGEST_OBJETO_ESFERA;

INSERT INTO DBPROPOSTAFNS.RL_PRGESTOBJESF_TIPOENTIDADE (CO_PRGEST_OBJETO_ESFERA,CO_TIPO_ENTIDADE)
VALUES (LAST_VALUE_OBJ_ESFERA,'13');

INSERT INTO DBPROPOSTAFNS.TB_INDICACAO_OBJETO (CO_SEQ_INDIC_OBJETO, VL_OBJETO, DS_OBSERVACAO, NU_CPF_CNPJ_PESSOA, DS_USUARIO, DS_IP_USUARIO, CO_PRGEST_OBJETO_ESFERA)
  (SELECT MAX(CO_SEQ_INDIC_OBJETO) + 1, VALOR, 'INDICAÇÃO OBJETO - TESTE INTERNO BRIDGE', CNPJ_FUNCDO_FLORIPA, 'TESTE BRIDGE', '127.0.0.1', LAST_VALUE_OBJ_ESFERA FROM DBPROPOSTAFNS.TB_INDICACAO_OBJETO);

DECLARE LAST_VALUE_INDIC_OBJ NUMBER;
BEGIN
SELECT MAX(CO_SEQ_INDIC_OBJETO) INTO LAST_VALUE_INDIC_OBJ FROM DBPROPOSTAFNS.TB_INDICACAO_OBJETO;

INSERT INTO DBPROPOSTACONVENIO.RL_INDOBJ_PROJETO (CO_SEQ_INDOBJ_EMENDA_PROJETO, CO_INDIC_OBJETO, CO_EMENDA, CO_PROCESSO, VL_INDICADO, DS_USUARIO, DS_IP_USUARIO, ST_LIMITE_SRI)
  (SELECT MAX(CO_SEQ_INDOBJ_EMENDA_PROJETO) + 1, LAST_VALUE_INDIC_OBJ, NULL, NULL, VALOR, 'TESTE SISMOB - BRIDGE', '127.0.0.1', 'N' FROM DBPROPOSTACONVENIO.RL_INDOBJ_PROJETO);

END;
END;
END;
END;
END LOOP;

FOR J IN 1..QUANTIDADE_OBJETOS_EMENDA LOOP

INSERT INTO DBCORPFNS.VW_ESFERA_TIPO_ENT_ATIVO_PES (CO_SEQ_ESFERA_TIPO_ENT_PESSOA,NU_CPF_CNPJ_PESSOA,CO_TIPO_ENTIDADE)
(SELECT MAX(CO_SEQ_ESFERA_TIPO_ENT_PESSOA) + 1,CNPJ_FUNCDO_FLORIPA,'13' FROM DBCORPFNS.VW_ESFERA_TIPO_ENT_ATIVO_PES);

INSERT INTO DBPROPOSTAFNS.TB_OBJETO (CO_SEQ_OBJETO, DS_OBJETO, CO_GND, NU_ANO_EXERCICIO, ST_ATIVO)
  (SELECT MAX(CO_SEQ_OBJETO) + 1, 'TESTE INTERNO - BRIDGE - CO_SEQ_OBJETO = ' || (MAX(CO_SEQ_OBJETO) + 1), '4', ANO, 'S' FROM DBPROPOSTAFNS.TB_OBJETO);

DECLARE LAST_VALUE_OBJ2 NUMBER;
BEGIN
SELECT MAX(CO_SEQ_OBJETO) INTO LAST_VALUE_OBJ2 FROM DBPROPOSTAFNS.TB_OBJETO;

INSERT INTO DBPROPOSTAFNS.RL_TIPOPROPOSTA_OBJETO (CO_SEQ_TIPOPROPOSTA_OBJETO,CO_TIPO_PROPOSTA,CO_TIPO_RECURSO,CO_OBJETO,CO_ACAO)
(SELECT MAX(CO_SEQ_TIPOPROPOSTA_OBJETO) + 1,TIPO_PROPOSTA.CO_TIPO_PROPOSTA,'2',LAST_VALUE_OBJ2,'UFSC' FROM DBPROPOSTAFNS.RL_TIPOPROPOSTA_OBJETO);

DECLARE LAST_VALUE_TIPO_PROPOSTA_OBJ2 NUMBER;
BEGIN
SELECT MAX(CO_SEQ_TIPOPROPOSTA_OBJETO) INTO LAST_VALUE_TIPO_PROPOSTA_OBJ2 FROM DBPROPOSTAFNS.RL_TIPOPROPOSTA_OBJETO;

INSERT INTO DBCORPFNS.RL_PRGEST_OBJETO_ESFERA (CO_SEQ_PRGEST_OBJETO_ESFERA,CO_PROGRAMA_ESTRATEGICO,CO_TIPOPROPOSTA_OBJETO,CO_ESFERA_ADMINISTRATIVA)
  (SELECT MAX(CO_SEQ_PRGEST_OBJETO_ESFERA) + 1, '245',LAST_VALUE_TIPO_PROPOSTA_OBJ2,'02' FROM DBCORPFNS.RL_PRGEST_OBJETO_ESFERA);

DECLARE LAST_VALUE_OBJ_ESFERA2 NUMBER;
BEGIN
SELECT MAX(CO_SEQ_PRGEST_OBJETO_ESFERA) INTO LAST_VALUE_OBJ_ESFERA2 FROM DBCORPFNS.RL_PRGEST_OBJETO_ESFERA;

INSERT INTO DBPROPOSTAFNS.RL_PRGESTOBJESF_TIPOENTIDADE (CO_PRGEST_OBJETO_ESFERA,CO_TIPO_ENTIDADE)
VALUES (LAST_VALUE_OBJ_ESFERA2,'13');

INSERT INTO DBPROPOSTAFNS.TB_INDICACAO_OBJETO (CO_SEQ_INDIC_OBJETO, VL_OBJETO, DS_OBSERVACAO, NU_CPF_CNPJ_PESSOA, DS_USUARIO, DS_IP_USUARIO, CO_PRGEST_OBJETO_ESFERA)
  (SELECT MAX(CO_SEQ_INDIC_OBJETO) + 1, VALOR, 'INDICAÇÃO OBJETO - TESTE INTERNO BRIDGE', CNPJ_FUNCDO_FLORIPA, 'TESTE BRIDGE', '127.0.0.1', LAST_VALUE_OBJ_ESFERA2 FROM DBPROPOSTAFNS.TB_INDICACAO_OBJETO);

DECLARE LAST_VALUE_INDIC_OBJ2 NUMBER;
BEGIN
SELECT MAX(CO_SEQ_INDIC_OBJETO) INTO LAST_VALUE_INDIC_OBJ2 FROM DBPROPOSTAFNS.TB_INDICACAO_OBJETO;

INSERT INTO DBCORPFNS.TB_FUNCIONAL (CO_PTRES,NU_ANO_EXERCICIO,CO_ACAO,CO_PROGRAMA,CO_FUNCIONAL)
(SELECT MAX(CO_PTRES) + 1,ANO,CO_SEQ_ACAO_ID,'0000','10301121485812104' FROM DBCORPFNS.TB_FUNCIONAL);

DECLARE LAST_VALUE_FUNCIONAL NUMBER;
BEGIN
SELECT MAX(CO_PTRES) INTO LAST_VALUE_FUNCIONAL FROM DBCORPFNS.TB_FUNCIONAL;

FOR K IN 1..QUANTIDADE_EMENDAS LOOP

INSERT INTO DBPROPOSTAFNS.TB_EMENDA (CO_SEQ_EMENDA, NU_EMENDA, NU_FONTE, NU_ANO_EXERCICIO, DS_TITULO, CO_PTRES, CO_GND, CO_MODALIDADE, CO_PARLAMENTAR, CO_MUNICIPIO_IBGE, VL_EMENDA, ST_BLOQUEADA, VL_SALDO_EMENDA, CO_OBJETO)
  (SELECT MAX(CO_SEQ_EMENDA) + 1, '012345' || K, '0123', ANO, 'EMENDA DE TESTE - BRIDGE', LAST_VALUE_FUNCIONAL, '3', '40', ID_PARLAMENTAR, CO_MUNICIPIO_IBGE_FLORIPA, VALOR, 'N', VALOR, LAST_VALUE_OBJ2 FROM DBPROPOSTAFNS.TB_EMENDA);

DECLARE LAST_VALUE_EMENDA2 NUMBER;
BEGIN
SELECT MAX(CO_SEQ_EMENDA) INTO LAST_VALUE_EMENDA2 FROM DBPROPOSTAFNS.TB_EMENDA;

INSERT INTO DBPROPOSTACONVENIO.RL_INDOBJ_PROJETO (CO_SEQ_INDOBJ_EMENDA_PROJETO, CO_INDIC_OBJETO, CO_EMENDA, VL_INDICADO, DS_USUARIO, DS_IP_USUARIO, ST_LIMITE_SRI)
  (SELECT MAX(CO_SEQ_INDOBJ_EMENDA_PROJETO) + 1, LAST_VALUE_INDIC_OBJ2, LAST_VALUE_EMENDA2, VALOR_EMENDA, 'TESTE SISMOB - BRIDGE', '127.0.0.1', 'N' FROM DBPROPOSTACONVENIO.RL_INDOBJ_PROJETO);

END;
END LOOP;
END;
END;
END;
END;
END;
END LOOP;
END LOOP;
END;
<!-- Fim da Query/Consulta -->
    </code>
  </pre>
  <input id="myButton11" type="button" class="copiar btn"  onclick="copiar('criar-programas-emendas', 'myButton11')" data-container="body" data-toggle="popover" data-placement="bottom" data-content="" title="Aviso" value="Copiar Script">
</div>


## Criar solicitação de etapa:

Cria uma solicitação de etapa anterior a etapa de uma proposta específica.

<div class="highlighter-rouge">
  <pre class="highlight">
  <!-- Atribuição da Id abaixo -->
    <code class="textarea"  id="criar-solicitacao-etapa"  >
<!-- Query/Consulta -->
:XXXX;
define var_co_proposta = &XXXX;

UPDATE DBSISMOB.TB_TRAMITE
SET ST_ABERTO   = 'N', st_ultimo='N'
WHERE CO_PROPOSTA =
&var_co_proposta
AND CO_TIPO_TRAMITE in (2,10);

UPDATE DBSISMOB.TB_SOLICITACAO_PARCELA
SET ST_ULTIMO   ='N'
WHERE CO_PROPOSTA =
&var_co_proposta;

INSERT
INTO DBSISMOB.TB_SOLICITACAO_PARCELA
(CO_SEQ_SOLICITACAO_PARCELA, CO_PARCELA,ST_REGISTRO_ATIVO, CO_ETAPA_PROPOSTA,ST_ULTIMO, CO_PROPOSTA,CO_SITUACAO_SOLICITACAO)
VALUES
(
  DBSISMOB.SQ_SOLPARCELA_COSEQSOLPARCELA.NEXTVAL,
  1,
  'S',
  1,
  'S',
  &var_co_proposta,
  1
);

INSERT
INTO DBSISMOB.TB_TRAMITE
(
  CO_SEQ_TRAMITE,
  CO_ATOR_PAPEL,
  DT_TRAMITE,
  ST_REGISTRO_ATIVO,
  CO_TIPO_TRAMITE,
  ST_ABERTO,
  CO_SOLICITACAO_PARCELA,
  TP_SERIALIZADOR,
  NU_UNICO,
  ST_ULTIMO,
  DS_TRAMITE,
  CO_PROPOSTA
)
VALUES
(
  DBSISMOB.SQ_TRAMITE_COSEQTRAMITE.NEXTVAL,
  2,
  CURRENT_TIMESTAMP,
  'S',
  10,
  'S',
  DBSISMOB.SQ_SOLPARCELA_COSEQSOLPARCELA.CURRVAL,
  0,
  SYS_GUID(),
  'S',
  'Obra concluída e solicitada superação da etapa de ação preparatória da obra, dados importados do SISMOB 1.0, desativado em 07/03/2017',
  &var_co_proposta
);
<!-- Fim da Query/Consulta -->
    </code>
  </pre>
  <input id="myButton12" type="button" class="copiar btn"  onclick="copiar('criar-solicitacao-etapa', 'myButton12')" data-container="body" data-toggle="popover" data-placement="bottom" data-content="" title="Aviso" value="Copiar Script">
</div>



## Inserir as diligências e alteração de endereço:

Inclui as diligências para uma 'Solicitação de alteração de endereço'.

<div class="highlighter-rouge">
  <pre class="highlight">
  <!-- Atribuição da Id abaixo -->
    <code class="textarea" id="inserir-diligencias-endereco"  >
<!-- Query/Consulta -->
INSERT INTO DBSISMOB.tb_diligencia (co_seq_diligencia, co_tipo_diligencia, co_parcela, tp_solicitacao_tramite, co_parametrizacao, st_registro_ativo, co_tipo_tramite, co_etapa_proposta) WITH diligencia AS (
    SELECT MAX(co_seq_diligencia) + 1 AS co FROM tb_diligencia) SELECT diligencia.co, 20200025, NULL, 1, 1,'S', NULL, 1 FROM diligencia;

INSERT INTO tb_diligencia (co_seq_diligencia, co_tipo_diligencia, co_parcela, tp_solicitacao_tramite, co_parametrizacao, st_registro_ativo, co_tipo_tramite, co_etapa_proposta) WITH diligencia AS (
    SELECT MAX(co_seq_diligencia) + 1 AS co FROM tb_diligencia) SELECT diligencia.co, 849999, NULL, 1, 1,'S', NULL, 1 FROM diligencia;

INSERT INTO tb_diligencia (co_seq_diligencia, co_tipo_diligencia, co_parcela, tp_solicitacao_tramite, co_parametrizacao, st_registro_ativo, co_tipo_tramite, co_etapa_proposta) WITH diligencia AS (
    SELECT MAX(co_seq_diligencia) + 1 AS co FROM tb_diligencia) SELECT diligencia.co, 369999, NULL, 1, 1, 'S', NULL, 1 FROM diligencia;

COMMIT;
<!-- Fim da Query/Consulta -->
    </code>
  </pre>
  <input id="myButton13" type="button" class="copiar btn"  onclick="copiar('inserir-diligencias-endereco', 'myButton13')" data-container="body" data-toggle="popover" data-placement="bottom" data-content="" title="Aviso" value="Copiar Script">
</div>


## Migração para ser executado no novo dump:

Migração que precisa ser executada no novo dump. Necessário executar antes de subir o servidor.

<div class="highlighter-rouge">
  <pre class="highlight">
  <!-- Atribuição da Id abaixo -->
    <code class="textarea"     id="migracao-novo-dump"  >
<!-- Query/Consulta -->
ALTER TABLE DBSISMOB.TB_PARECER_BLOQUEIO RENAME TO TB_BLOQUEIO;
ALTER TABLE DBSISMOB.TB_BLOQUEIO DROP CONSTRAINT PK_PARECERBLOQUEIO;
ALTER TABLE DBSISMOB.TB_BLOQUEIO DROP COLUMN CO_TRAMITE CASCADE CONSTRAINTS;
ALTER TABLE DBSISMOB.TB_BLOQUEIO ADD (NU_REGISTRO NUMBER(12) NOT NULL);
COMMENT ON COLUMN DBSISMOB.TB_BLOQUEIO.NU_REGISTRO IS 'Número do registro a ser bloqueado.';
ALTER TABLE DBSISMOB.TB_BLOQUEIO MODIFY (CO_OPERACAO NOT NULL);
ALTER TABLE DBSISMOB.TB_BLOQUEIO ADD CONSTRAINT PK_BLOQUEIO PRIMARY KEY (NU_REGISTRO,CO_OPERACAO) ENABLE;

DELETE FROM DBSISMOB.TB_TIPO_OPERACAO;
INSERT INTO DBSISMOB.TB_TIPO_OPERACAO (CO_SEQ_TIPO_OPERACAO, DS_TIPO_OPERACAO) VALUES ('1', 'Proposta');
INSERT INTO DBSISMOB.TB_TIPO_OPERACAO (CO_SEQ_TIPO_OPERACAO, DS_TIPO_OPERACAO) VALUES ('2', 'Usuário');
INSERT INTO DBSISMOB.TB_TIPO_OPERACAO (CO_SEQ_TIPO_OPERACAO, DS_TIPO_OPERACAO) VALUES ('3', 'Solicitação de acesso');
<!-- Fim da Query/Consulta -->
    </code>
  </pre>
  <input id="myButton14" type="button" class="copiar btn"  onclick="copiar('migracao-novo-dump', 'myButton14')" data-container="body" data-toggle="popover" data-placement="bottom" data-content="" title="Aviso" value="Copiar Script">
</div>


## Popular base de solicitações:

Apaga todas as solicitações atuais (etapa, prorrogação de prazo, etc) e cria 3 solicitações em cada situação possível para cada tipo de situação (útil para testar os filtros das listagens).

<div class="highlighter-rouge">
  <pre class="highlight">
  <!-- Atribuição da Id abaixo -->
    <code class="textarea" id="solicitacoes-na-base"  >
<!-- Query/Consulta -->
----------------------------------- DESATIVANDO TODAS AS SOLICITAÇÕES  -----------------------------------
UPDATE TB_SOLICITACAO_PARCELA
SET ST_REGISTRO_ATIVO = 'N', ST_ULTIMO = 'N';
DELETE FROM DBSISMOB.TB_SOLICITACAO_PRORROGACAO
WHERE CO_SEQ_SOLICITACAO_PRORROGACAO > 681;
UPDATE TB_CANCELAMENTO_OBRA_PROPONEN
SET ST_REGISTRO_ATIVO = 'N';
UPDATE dbsismob.tb_solicitacao_alteracao_endrc
SET ST_REGISTRO_ATIVO = 'N';

----------------------------------- SOLICITACAO DE ALTERAÇÃO DE ENDEREÇO  -----------------------------------
UPDATE dbsismob.tb_solicitacao_alteracao_endrc
SET st_registro_ativo = 'S', co_situacao_solicitacao = 1
WHERE CO_SEQ_SOLICITACAO_ALTRC_ENDRC IN (1, 21, 41, 61, 81);

UPDATE dbsismob.tb_solicitacao_alteracao_endrc
SET st_registro_ativo = 'S', co_situacao_solicitacao = 2
WHERE CO_SEQ_SOLICITACAO_ALTRC_ENDRC IN (101, 121, 141, 161, 181);

UPDATE dbsismob.tb_solicitacao_alteracao_endrc
SET st_registro_ativo = 'S', co_situacao_solicitacao = 3
WHERE CO_SEQ_SOLICITACAO_ALTRC_ENDRC IN (201, 221, 241, 261, 281);

UPDATE dbsismob.tb_solicitacao_alteracao_endrc
SET st_registro_ativo = 'S', co_situacao_solicitacao = 4
WHERE CO_SEQ_SOLICITACAO_ALTRC_ENDRC IN (301, 321, 341, 361, 381);

UPDATE dbsismob.tb_solicitacao_alteracao_endrc
SET st_registro_ativo = 'S', co_situacao_solicitacao = 5
WHERE CO_SEQ_SOLICITACAO_ALTRC_ENDRC IN (401, 421, 441, 461, 481);

UPDATE dbsismob.tb_solicitacao_alteracao_endrc
SET st_registro_ativo = 'S', co_situacao_solicitacao = 6
WHERE CO_SEQ_SOLICITACAO_ALTRC_ENDRC IN (501, 521, 541, 561, 581);

UPDATE dbsismob.tb_solicitacao_alteracao_endrc
SET st_registro_ativo = 'S', co_situacao_solicitacao = 7
WHERE CO_SEQ_SOLICITACAO_ALTRC_ENDRC IN (601, 621, 641, 661, 681);

----------------------------------- SOLICITACAO DE PRORROGAÇÃO DE PRAZO -----------------------------------
UPDATE dbsismob.TB_SOLICITACAO_PRORROGACAO
SET co_situacao_solicitacao = 1
WHERE CO_SEQ_SOLICITACAO_PRORROGACAO IN (1, 21, 41, 61, 81);

UPDATE dbsismob.TB_SOLICITACAO_PRORROGACAO
SET co_situacao_solicitacao = 2
WHERE CO_SEQ_SOLICITACAO_PRORROGACAO IN (101, 121, 141, 161, 181);

UPDATE dbsismob.TB_SOLICITACAO_PRORROGACAO
SET co_situacao_solicitacao = 3
WHERE CO_SEQ_SOLICITACAO_PRORROGACAO IN (201, 221, 241, 261, 281);

UPDATE dbsismob.TB_SOLICITACAO_PRORROGACAO
SET co_situacao_solicitacao = 4
WHERE CO_SEQ_SOLICITACAO_PRORROGACAO IN (301, 321, 341, 361, 381);

UPDATE dbsismob.TB_SOLICITACAO_PRORROGACAO
SET co_situacao_solicitacao = 5
WHERE CO_SEQ_SOLICITACAO_PRORROGACAO IN (401, 421, 441, 461, 481);

UPDATE dbsismob.TB_SOLICITACAO_PRORROGACAO
SET co_situacao_solicitacao = 6
WHERE CO_SEQ_SOLICITACAO_PRORROGACAO IN (501, 521, 541, 561, 581);

UPDATE dbsismob.TB_SOLICITACAO_PRORROGACAO
SET co_situacao_solicitacao = 7
WHERE CO_SEQ_SOLICITACAO_PRORROGACAO IN (601, 621, 641, 661, 681);

----------------------------------- SOLICITACAO DE CANCELAMENTO DA OBRA -----------------------------------
UPDATE dbsismob.TB_CANCELAMENTO_OBRA_PROPONEN
SET st_registro_ativo = 'S', co_situacao_solicitacao = 1
WHERE CO_SEQ_TB_CANCELA_OBRA_PROPONE IN (1, 21, 41, 61, 81);

UPDATE dbsismob.TB_CANCELAMENTO_OBRA_PROPONEN
SET st_registro_ativo = 'S', co_situacao_solicitacao = 2
WHERE CO_SEQ_TB_CANCELA_OBRA_PROPONE IN (101, 121, 141, 161, 181);

UPDATE dbsismob.TB_CANCELAMENTO_OBRA_PROPONEN
SET st_registro_ativo = 'S', co_situacao_solicitacao = 3
WHERE CO_SEQ_TB_CANCELA_OBRA_PROPONE IN (201, 221, 241, 261, 281);

UPDATE dbsismob.TB_CANCELAMENTO_OBRA_PROPONEN
SET st_registro_ativo = 'S', co_situacao_solicitacao = 4
WHERE CO_SEQ_TB_CANCELA_OBRA_PROPONE IN (301, 321, 341, 361, 381);

UPDATE dbsismob.TB_CANCELAMENTO_OBRA_PROPONEN
SET st_registro_ativo = 'S', co_situacao_solicitacao = 5
WHERE CO_SEQ_TB_CANCELA_OBRA_PROPONE IN (401, 421, 441, 461, 481);

UPDATE dbsismob.TB_CANCELAMENTO_OBRA_PROPONEN
SET st_registro_ativo = 'S', co_situacao_solicitacao = 6
WHERE CO_SEQ_TB_CANCELA_OBRA_PROPONE IN (501, 521, 541, 561, 581);

UPDATE dbsismob.TB_CANCELAMENTO_OBRA_PROPONEN
SET st_registro_ativo = 'S', co_situacao_solicitacao = 7
WHERE CO_SEQ_TB_CANCELA_OBRA_PROPONE IN (601, 621, 641, 661, 701);

-----------------------------  SOLICITACAO DE SUPERAÇÃO DE ETAPA AÇÃO PREPARATÓRIA  -----------------------------
UPDATE dbsismob.TB_SOLICITACAO_PARCELA
SET st_registro_ativo = 'S', co_situacao_solicitacao = 1, co_etapa_proposta = 1, st_ultimo = 'S'
WHERE CO_SEQ_SOLICITACAO_PARCELA IN (1, 21, 41, 61, 81);

UPDATE dbsismob.TB_SOLICITACAO_PARCELA
SET st_registro_ativo = 'S', co_situacao_solicitacao = 2, co_etapa_proposta = 1, st_ultimo = 'S'
WHERE CO_SEQ_SOLICITACAO_PARCELA IN (101, 121, 141, 161, 181);

UPDATE dbsismob.TB_SOLICITACAO_PARCELA
SET st_registro_ativo = 'S', co_situacao_solicitacao = 4, co_etapa_proposta = 1, st_ultimo = 'S'
WHERE CO_SEQ_SOLICITACAO_PARCELA IN (301, 321, 341, 361, 381);

UPDATE dbsismob.TB_SOLICITACAO_PARCELA
SET st_registro_ativo = 'S', co_situacao_solicitacao = 5, co_etapa_proposta = 1, st_ultimo = 'S'
WHERE CO_SEQ_SOLICITACAO_PARCELA IN (401, 421, 441, 461, 481);

UPDATE dbsismob.TB_SOLICITACAO_PARCELA
SET st_registro_ativo = 'S', co_situacao_solicitacao = 6, co_etapa_proposta = 1, st_ultimo = 'S'
WHERE CO_SEQ_SOLICITACAO_PARCELA IN (501, 521, 541, 561, 581);

UPDATE dbsismob.TB_SOLICITACAO_PARCELA
SET st_registro_ativo = 'S', co_situacao_solicitacao = 7, co_etapa_proposta = 1, st_ultimo = 'S'
WHERE CO_SEQ_SOLICITACAO_PARCELA IN (601, 621, 641, 661, 681);

-----------------------------  SOLICITACAO DE SUPERAÇÃO DE ETAPA DE INÍCIO DE EXECUÇÃO -----------------------------
UPDATE dbsismob.TB_SOLICITACAO_PARCELA
SET st_registro_ativo = 'S', co_situacao_solicitacao = 1, co_etapa_proposta = 2, st_ultimo = 'S'
WHERE CO_SEQ_SOLICITACAO_PARCELA IN (701, 721, 741, 761, 781);

UPDATE dbsismob.TB_SOLICITACAO_PARCELA
SET st_registro_ativo = 'S', co_situacao_solicitacao = 2, co_etapa_proposta = 2, st_ultimo = 'S'
WHERE CO_SEQ_SOLICITACAO_PARCELA IN (801, 821, 841, 861, 881);

UPDATE dbsismob.TB_SOLICITACAO_PARCELA
SET st_registro_ativo = 'S', co_situacao_solicitacao = 4, co_etapa_proposta = 2, st_ultimo = 'S'
WHERE CO_SEQ_SOLICITACAO_PARCELA IN (901, 921, 941, 961, 981);

UPDATE dbsismob.TB_SOLICITACAO_PARCELA
SET st_registro_ativo = 'S', co_situacao_solicitacao = 5, co_etapa_proposta = 2, st_ultimo = 'S'
WHERE CO_SEQ_SOLICITACAO_PARCELA IN (1001, 1021, 1041, 1061, 1081);

UPDATE dbsismob.TB_SOLICITACAO_PARCELA
SET st_registro_ativo = 'S', co_situacao_solicitacao = 6, co_etapa_proposta = 2, st_ultimo = 'S'
WHERE CO_SEQ_SOLICITACAO_PARCELA IN (1101, 1121, 1141, 1161, 1181);

UPDATE dbsismob.TB_SOLICITACAO_PARCELA
SET st_registro_ativo = 'S', co_situacao_solicitacao = 7, co_etapa_proposta = 2, st_ultimo = 'S'
WHERE CO_SEQ_SOLICITACAO_PARCELA IN (1201, 1221, 1241, 1261, 1281);

----------------------------  SOLICITACAO DE SUPERAÇÃO DE ETAPA DE EXECUÇÃO E CONCLUSÃO ----------------------------
UPDATE dbsismob.TB_SOLICITACAO_PARCELA
SET st_registro_ativo = 'S', co_situacao_solicitacao = 1, co_etapa_proposta = 3, st_ultimo = 'S'
WHERE CO_SEQ_SOLICITACAO_PARCELA IN (1301, 1321, 1341, 1361, 1381);

UPDATE dbsismob.TB_SOLICITACAO_PARCELA
SET st_registro_ativo = 'S', co_situacao_solicitacao = 2, co_etapa_proposta = 3, st_ultimo = 'S'
WHERE CO_SEQ_SOLICITACAO_PARCELA IN (1401, 1421, 1441, 1461, 1481);

UPDATE dbsismob.TB_SOLICITACAO_PARCELA
SET st_registro_ativo = 'S', co_situacao_solicitacao = 4, co_etapa_proposta = 3, st_ultimo = 'S'
WHERE CO_SEQ_SOLICITACAO_PARCELA IN (1501, 1521, 1541, 1561, 1581);

UPDATE dbsismob.TB_SOLICITACAO_PARCELA
SET st_registro_ativo = 'S', co_situacao_solicitacao = 5, co_etapa_proposta = 3, st_ultimo = 'S'
WHERE CO_SEQ_SOLICITACAO_PARCELA IN (1601, 1621, 1641, 1661, 1681);

UPDATE dbsismob.TB_SOLICITACAO_PARCELA
SET st_registro_ativo = 'S', co_situacao_solicitacao = 6, co_etapa_proposta = 3, st_ultimo = 'S'
WHERE CO_SEQ_SOLICITACAO_PARCELA IN (1701, 1721, 1741, 1761, 1781);

UPDATE dbsismob.TB_SOLICITACAO_PARCELA
SET st_registro_ativo = 'S', co_situacao_solicitacao = 7, co_etapa_proposta = 3, st_ultimo = 'S'
WHERE CO_SEQ_SOLICITACAO_PARCELA IN (1801, 1821, 1841, 1861, 1881);

COMMIT;
<!-- Fim da Query/Consulta -->
    </code>
  </pre>
  <input id="myButton14" type="button" class="copiar btn"  onclick="copiar('solicitacoes-na-base', 'myButton14')" data-container="body" data-toggle="popover" data-placement="bottom" data-content="" title="Aviso" value="Copiar Script">
</div>


## Priorizar todas as propostas:

Prioriza todas as propostas cadastradas até então para poder ser emitido o parecer de habilitação.

<div class="highlighter-rouge">
  <pre class="highlight">
  <!-- Atribuição da Id abaixo -->
    <code class="textarea"     id="priorizar-propostas"  >
<!-- Query/Consulta -->
update DBPROPOSTACONVENIO.TB_PROJETO
set ST_PRIORIDADE = 'S';
<!-- Fim da Query/Consulta -->
    </code>
  </pre>
  <input id="myButton16" type="button" class="copiar btn"  onclick="copiar('priorizar-propostas', 'myButton16')" data-container="body" data-toggle="popover" data-placement="bottom" data-content="" title="Aviso" value="Copiar Script">
</div>

## Remover questão dos questionários

Remove a maioria das questões de todos os questionários, deixando apenas com 1 questão.

<div class="highlighter-rouge">
  <pre class="highlight">
      <!-- Atribuição da Id abaixo -->
    <code class="textarea" id="remover-questoes-questionario"  >
<!-- Query/Consulta -->
UPDATE
    DBSISMOB.TB_QUESTIONARIO_PERGUNTA
SET
    st_registro_ativo = 'N'
WHERE
    co_seq_questionario_pergunta
        NOT IN (SELECT co_seq_questionario_pergunta
                FROM dbsismob.tb_questionario_pergunta qp
                WHERE co_seq_questionario_pergunta = (SELECT MIN(co_seq_questionario_pergunta)
                                                        FROM dbsismob.tb_questionario_pergunta
                                                        WHERE co_questionario = qp.co_questionario));
COMMIT;
<!-- Fim da Query/Consulta -->
    </code>
  </pre>
  <input id="myButton17" type="button" class="copiar btn"  onclick="copiar('remover-questoes-questionario', 'myButton17')" data-container="body" data-toggle="popover" data-placement="bottom" data-content="" title="Aviso" value="Copiar Script">
</div>

## Reverter parecer de superação de etapa:

Altera a situação da proposta para o estado anterior ao de um parecer.

<div class="highlighter-rouge">
  <pre class="highlight">
      <!-- Atribuição da Id abaixo -->
    <code class="textarea" id="reverter-parecer-superacao"  >
<!-- Query/Consulta -->
:XXXX;
DEFINE var_co_proposta = &XXXX;

UPDATE DBSISMOB.TB_SOLICITACAO_PARCELA
SET CO_SITUACAO_SOLICITACAO = 1
WHERE CO_PROPOSTA = &&var_co_proposta;

UPDATE DBSISMOB.TB_TRAMITE
SET ST_REGISTRO_ATIVO = 'N'
WHERE CO_TIPO_TRAMITE = 2 AND ST_ULTIMO = 'S' AND CO_PROPOSTA = &&var_co_proposta;

UPDATE DBSISMOB.TB_TRAMITE
SET ST_ABERTO = 'S', CO_PARECER = NULL
WHERE ST_ULTIMO = 'S' AND CO_TIPO_TRAMITE = 10 AND CO_PROPOSTA = &&var_co_proposta;

UPDATE DBSISMOB.TB_PARECER
SET ST_REGISTRO_ATIVO ='N'
WHERE co_seq_parecer IN (
SELECT co_parecer
FROM DBSISMOB.TB_TRAMITE
WHERE CO_TIPO_TRAMITE = 2 AND ST_ULTIMO = 'S' AND CO_PROPOSTA = &&var_co_proposta);

UPDATE TB_OBRA
SET CO_SITUACAO_OBRA = 0
WHERE CO_PROPOSTA = &&var_co_proposta;

COMMIT;
<!-- Fim da Query/Consulta -->
    </code>
  </pre>
  <input id="myButton18" type="button" class="copiar btn"  onclick="copiar('reverter-parecer-superacao', 'myButton18')" data-container="body" data-toggle="popover" data-placement="bottom" data-content="" title="Aviso" value="Copiar Script">
</div>
