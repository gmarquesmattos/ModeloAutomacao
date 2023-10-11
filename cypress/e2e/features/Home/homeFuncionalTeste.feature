
# language: pt

Funcionalidade: Validação Testes
Como usuário
Eu quero verificar se imagem do baner é a mesma

Contexto: Abrir o portal
Dado visualizo no topo da tela banner inicial

Cenario: Deve validar o baner do portal
Então O banner deve permanecer o mesmo

Cenario: Deve validar o baner axa seguradora oficial
Então O banner axa seguradora deve permanecer o mesmo

Cenario: Validar redirecionamento ao clicar no logo
Quando Acessar alguma página do sistema
Quando Clicar na logo
Então deve ser possivel retornar para pagina principal 'https://www.axa.com.br/'

Cenario: Validar clicar na logo já estando na página principal
Quando Clicar na logo
Então deve ser possivel retornar para pagina principal 'https://www.axa.com.br/'

Cenario: Validar imagem visual do logo
Então Logo deve permancer o mesmo