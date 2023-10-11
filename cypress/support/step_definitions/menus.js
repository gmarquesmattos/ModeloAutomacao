import {
  Given as Dado,
  When as Quando,
  And as E,
  Then as Então,
} from "@badeball/cypress-cucumber-preprocessor";

const signUpPage = require("../../pages/sign-up-page");
import commands from "../menu/commands";
Quando("Clicar no menu sobre nos", () => {
  commands.acessarMenuSobreNos();
});

Quando("Clicar no subMenu {string}", (menu) => {
  commands.clicarmenu(menu);
});

Quando("Clicar no subMenuNivel2 {string}", (menu) => {
  commands.clicarsubMenuNivel2(menu);
});

Quando("Clicar no subMenuNivel3 {string}", (menu) => {
  commands.clicarSubMenuNivel3(menu);
});

Então("Deve ser possivel acessar a {string}", (url) => {
  commands.validarUrl(url);
});

Então("Deve validar a acessibilidade dos menus", () => {
  commands.verificarAcessibilidade();
});
