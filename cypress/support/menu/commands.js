import { elements, menus } from "./elements";

class login {
  acessarMenuSobreNos() {
    cy.get(elements.bannerWrapperStyle).matchImage();
  }
  ValidarBannerAxaNegocio() {
    cy.get(elements.AXASeguradoraOficialNegocio).matchImage();
  }
  clicarmenu(menu1) {
    cy.get(menus[menu1]).click();
  }
  clicarsubMenuNivel2(menu2) {
    cy.get(menus[menu2]).click();
  }
  clicarSubMenuNivel3(menu3) {
    cy.get(menus[menu3]).click();
  }
  ValidarLogo() {
    cy.get(elements.logoAxa).matchImage();
  }
  verificarAcessibilidade() {
    cy.visit("https://www.axa.com.br/");
    cy.pageAccessibility();
  }
}

export default new login();
