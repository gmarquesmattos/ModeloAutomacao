declare namespace Cypress {
    interface Chainable<Subject> {
        pageAccessibility(): Chainable<any>
        componentAccessibility(selector: any): Chainable<any>
        getIframe(iFrameLocator: any): Chainable<any>
        aguardaLoad(): Chainable<any>
        gravaArquivo(nomeArquivo: any, nomeAtributo: any, conteudo: any): Chainable<any>
        limparArquivo(nome: any): Chainable<any>
        clicaElementoAguardaRequest(elemento: any): Chainable<any>
        verificaMensagemSucesso(elemento: any, valor: any): Chainable<any>
        selecionaValor(referencia: any, valor: any): Chainable<any>
        clicaBotao(botao: any): Chainable<any>
        preencheCampoById(elemento: any, valor: any): Chainable<any>
        capturaTelaPasso(): Chainable<any>
        clicaElementoByXpath(element: any): Chainable<any>
        forceCliqueElemento(element: any): Chainable<any>
        forceCliqueElementoByXpath(element: any): Chainable<any>
        preencheCampoByXpath(element: any, valor: any): Chainable<any>
        checkElementoByXpath(element: any): Chainable<any>
        checkElemento(element: any): Chainable<any>
        verificaElementoExiste(element: any): Chainable<any>
        verificaElementoExisteByXpath(element: any): Chainable<any>
        verificaElementoVisivelByXpath(element: any): Chainable<any>
        aguardar(milissegundos: any): Chainable<any>
        clicaCampo(referencia: any, opcoes: any): Chainable<any>
        enter(elemento: any, valor: any): Chainable<any>
        tab(): Chainable<any>
        esc(): Chainable<any>
        getTextoComponente(elemento: any): Chainable<any>
        getTextoComponenteParametroBdd(elemento: any, valor: any): Chainable<any>
        getTextoComponenteCompara(elemento: any, valor: any): Chainable<any>
        inserirAnexo(Elemento: any, CaminhoArquivo: any): Chainable<any>
        verificarSeElementoExiste(Elemento: any): Chainable<any>
        tokenCorteva(user: any, passwd: any): Chainable<any>
        getApi(endPoint: any): Chainable<any>
        validarStatusCode(endPoint: any): Chainable<any>
        validarStatusCodePost(endPoint: any): Chainable<any>
  }
}