//require("cypress-xpath");
//require("cypress-plugin-tab");
//import "cypress-file-upload";
//import "cypress-wait-until";
//import { dataApi, postCooperativa, body } from "./login/data";

Cypress.Screenshot.defaults({
  capture: "runner",
});

Cypress.Commands.add("getIframe", (iFrameLocator) => {
  cy.get(iFrameLocator)
    .its("0.contentDocument.body")
    .should("be.visible")
    .then(cy.wrap);
});

Cypress.Commands.add("aguardaLoad", () => {
  cy.intercept("POST", "*/*.action").as("action");
  cy.wait("@action");
});

Cypress.Commands.add("gravaArquivo", (nomeArquivo, nomeAtributo, conteudo) => {
  cy.readFile(nomeArquivo).then((data) => {
    data[nomeAtributo] = conteudo;
    cy.writeFile(nomeArquivo, data);
  });
});

Cypress.Commands.add("limparArquivo", (nome) => {
  cy.writeFile(nome, {});
});

Cypress.Commands.add("clicaElementoAguardaRequest", (elemento) => {
  cy.intercept("/**").as("ajax-requests");
  cy.clicaElemento(elemento);
  cy.wait("@ajax-requests");
});

Cypress.Commands.add("verificaMensagemSucesso", (elemento, valor) => {
  cy.get(elemento).should("contain", valor);
  cy.screenshot(`Elemento contém o valor: ${valor}`);
});

Cypress.Commands.add("selecionaValor", (referencia, valor) => {
  cy.get(referencia).select(valor);
  cy.screenshot(`Elemento contém o valor: ${valor}`);
});

Cypress.Commands.add("clicaBotao", (botao) => {
  cy.get("button")
    .contains(botao)
    // .screenshot(`Clicou no botão ${botao}`)
    .click({ force: true });
});

// Cypress.Commands.add("clicaElemento", (elemento) => {
//   cy.get(elemento).click({ force: true });
//   cy.screenshot(`Clicou no elemento ${elemento}`);
// });

Cypress.Commands.add("preencheCampoById", (elemento, valor) => {
  cy.get(elemento).clear();
  cy.get(elemento).type(valor, { force: true });
  // .screenshot(`informou o valor ${valor} no campo ${elemento}`);
});

export const getNextMonth = () => {
  const actualDate = new Date();
  actualDate.setMonth(actualDate.getMonth() + 1);
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return actualDate.toLocaleDateString("pt-BR", options);
};

Cypress.Commands.add("capturaTelaPasso", () => {
  let step = window.testState.currentStep;
  let descStep = window.testState.currentScenario.steps[step].text;
  cy.screenshot(descStep);
});

Cypress.Commands.add("clicaElementoByXpath", (element) => {
  cy.screenshot(`Clicou no elemento ${element}`);
  cy.xpath(element).click({ force: true });
});

Cypress.Commands.add("forceCliqueElemento", (element) => {
  cy.get(element).click({ force: true, multiple: true });
  // .screenshot(`Clicou no elemento ${element}`);
});

Cypress.Commands.add("forceCliqueElementoByXpath", (element) => {
  cy.screenshot(`Clicou no elemento ${element}`);
  cy.xpath(element).click({ force: true, multiple: true });
});

Cypress.Commands.add("preencheCampoByXpath", (element, valor) => {
  // cy.xpath(element).clear();
  cy.xpath(element).type(valor, { force: true });
  // .screenshot(`informou o valor ${valor} no campo ${element}`);
});

Cypress.Commands.add("checkElementoByXpath", (element) => {
  cy.xpath(element).click({ force: true }).screenshot("check no elemento");
});

Cypress.Commands.add("checkElemento", (element) => {
  cy.get(element).click({ force: true }).screenshot("check no elemento");
});

Cypress.Commands.add("verificaElementoExiste", (element) => {
  cy.get(element).should("exist").screenshot(`Elemento ${element} existe`);
});

Cypress.Commands.add("verificaElementoExisteByXpath", (element) => {
  cy.xpath(element).should("exist").screenshot(`Elemento ${element} existe`);
});

Cypress.Commands.add("verificaElementoVisivelByXpath", (element) => {
  cy.xpath(element).should("be.visible");
  // .screenshot(`Elemento ${element} visível`);
});

Cypress.Commands.add("aguardar", (milissegundos) => {
  cy.wait(milissegundos);
});

Cypress.Commands.add("clicaCampo", (referencia, opcoes) => {
  if (opcoes) {
    cy.get(referencia).click(opcoes);
    return;
  }
  cy.get(referencia);
});

Cypress.Commands.add("enter", (elemento, valor) => {
  //cy.get(elemento).type('{enter}')
  cy.get(elemento)
    .should("be.visible")
    // .type('Bahia{enter}')
    .type(`${valor}{enter}`);
  //`texto string ${valor} texto string`
});
Cypress.Commands.add("tab", () => {
  tab();
});

Cypress.Commands.add("esc", () => {
  cy.type("{esc}");
});

Cypress.Commands.add("getTextoComponente", (elemento) => {
  cy.get(elemento)
    .invoke("text")
    .then(($value) => {
      cy.log($value);
      console.log("gui@ " + $value);
    });
});

Cypress.Commands.add("getTextoComponenteParametroBdd", (elemento, valor) => {
  cy.get(elements[elemento])
    .invoke("text")
    .then(($value_1) => {
      expect($value_1).to.eq(valor);
    });
});

Cypress.Commands.add("getTextoComponenteCompara", (elemento, valor) => {
  cy.get(elemento)
    .invoke("text")
    .then(($value_1) => {
      expect($value_1).to.eq(valor);
    });
});

Cypress.Commands.add("inserirAnexo", (Elemento, CaminhoArquivo) => {
  cy.get(Elemento).selectFile(CaminhoArquivo);
});

Cypress.Commands.add("verificarSeElementoExiste", (Elemento) => {
  cy.get(Elemento).should("be.visible");
});
////////////////////////////////

const BASE_URL = "https://dev-api.quimicoscampo.com.br";
Cypress.Commands.add("tokenCorteva", (user, passwd) => {
  cy.request({
    method: "POST",
    url: "https://dev-api.quimicoscampo.com.br/login",
    body: {
      email: user,
      password: "trinca137",
    },
  })
    .then((res) => {
      const token = JSON.parse(JSON.stringify(res.body["data"].token));
      console.log(token);
      return token;
    })
    .as("token");
});

// Cypress.Commands.add("getApi", (endPoint) => {
//   cy.get("@token")
//     .then((token) => {
//       cy.request({
//         method: "GET",
//         url: `${BASE_URL}${dataApi[endPoint]}`,
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//     })
//     .as("getResponse");
// });

Cypress.Commands.add("validarStatusCode", (endPoint) => {
  cy.get("@getResponse").then((res) => {
    expect(res.status).to.be.equal(200);
  });
});

Cypress.Commands.add("validarStatusCodePost", (endPoint) => {
  cy.get("@responsePost").then((res) => {
    expect(res.status).to.be.equal(endPoint);
  });
});

// const BASE_URL_APP = "https://dev-api.quimicoscampo.com.br";
// Cypress.Commands.add("tokenAPPCorteva", (user, passwd) => {
//   cy.request({
//     method: "POST",
//     url: "https://dev-api.quimicoscampo.com.br/login",
//     body: {
//       email: user,
//       password: "trinca137",
//     },
//   })
//     .then((res) => {
//       const token = JSON.parse(JSON.stringify(res.body["data"].token));
//       console.log(token);
//       return token;
//     })
//     .as("tokenAPP");
// });
//   cy.pause()
//   cy.get("@token")
//     .then((token) => {
//       cy.request({
//         method: "POST",
//         // url: `${BASE_URL}${data[endPoint]}`,
//         url: "https://dev-api.quimicoscampo.com.br/cooperatives-import",

//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",

//         },

//         body
//         // body
//         // body: {
//         //        "data": [
//         //       {
//         //         "cooperative": {
//         //           "name": "CooperanteQA\n",
//         //           "identity": "90938223062",
//         //           "nucleus": "Avaré - SP"
//         //         },
//         //         "farms": [
//         //           {
//         //             "name": "FazendaQA",
//         //             "ownerEmail": "agrozam@terra.com.br",
//         //             "businnesPlace": 16,
//         //             "code": "125474",
//         //             "stateRegistry": "07.427.348/001-85",
//         //             "state": "RS",
//         //             "address": "EST.DO DAER-SANTO AUGUSTO/IJUI",
//         //             "city": "SANTO AUGUSTO",
//         //             "technicians": [
//         //               "Rodrigo Marim"
//         //             ],
//         //             "phone": "55981169688"
//         //           }
//         //         ]
//         //       }
//         //     ],
//         //     "filename": "Criacao (1).xlsx"
//         //   },

//       }).then((res) => {
//         const response = JSON.parse(JSON.stringify(res.body));
//         console.log(response);
//         return response;
//       });
//     })
//     .as("responsePost");
// });
