---
layout: page
title: Sobre
permalink: /about/
icon: icon-about
---

SISMOB - Sistema de Monitoramento de Obras
<p>
{% for version in site.data.version %}
    Versão: {{ version.version }}
{% endfor %}
</p>

Documentação gerada em **{{ site.time | date: '%d/%m/%y, %H:%M' }}**