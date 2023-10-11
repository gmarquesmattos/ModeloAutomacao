import {
  Given as Dado,
  When as Quando,
  And as E,
  Then as Então,
} from "@badeball/cypress-cucumber-preprocessor";

const signUpPage = require("../../pages/sign-up-page");

Dado("que eu estou na pagina de cadastro", () => {
  cy.visit("https://dev.quimicoscampo.com.br/login");
  cy.get(":nth-child(1) > :nth-child(2) > .primary-input")
    .type("wwwtt")
    .matchImage();
});

Quando("preencho corretamente os campos os obrigatorios", () => {
  signUpPage.typeUserName("teste2028");
  signUpPage.typeEmail();
  signUpPage.typePassword("teste2028");
  signUpPage.typePasswordConfirmation("teste2028");
});

Quando("clico no botão cadastrar", () => {
  signUpPage.clickSignUpBtn();
});

Então("deve ser redirecionado para a pagina de boas-vindas", () => {
  signUpPage.validateSucessSignUp();
});
