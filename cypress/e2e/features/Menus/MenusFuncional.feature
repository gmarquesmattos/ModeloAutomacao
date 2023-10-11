                  # language: pt

                  Funcionalidade: Validação do menu da home
                  Como usuário
                  Eu quero verificar se os menus estão acessiveis e disponiveis


                  Contexto: Abrir o portal
                  Dado visualizo no topo da tela banner inicial

                  Esquema do Cenário: Validar menu sobre nós
                  Quando Clicar no menu sobre nos
                  Quando Clicar no subMenu '<subMenu>'
                  Quando Clicar no subMenuNivel2 '<subMenuNivel2>'
                  Quando Clicar no subMenuNivel3 '<subMenuNivel3>'
                  Então Deve ser possivel acessar a '<url>'


                  Exemplos:
                  | subMenu     | subMenuNivel2       | subMenuNivel3       | url  |
                  | compromisso | sustentabilidadeESG | ambiental           | www. |
                  | compromisso | sustentabilidadeESG | socialFilantropia   | www. |
                  | compromisso | sustentabilidadeESG | governanca          | www. |
                  | compromisso | sustentabilidadeESG | diversidadeInclusao | www. |
                  | compromisso | governaca           | canalDenuncia       | www. |
                  | compromisso | governaca           | controleRiscos      | www. |
                  | compromisso | governaca           | eticaCompliance     | www. |
                  | compromisso | governaca           | privacidadeDados    | www. |
                  | compromisso | governaca           | relacaoInvestidores | www. |