import { elements } from "./elements";

class login {
  ValidarBanner() {
    cy.get(elements.bannerWrapperStyle).matchImage();
  }
  ValidarBannerAxaNegocio() {
    cy.get(elements.AXASeguradoraOficialNegocio).matchImage();
  }
  acessarMenuSobreNos() {
    cy.get(elements.menuSobreNos).click();
  }
  clicarLogoAxa() {
    cy.get(elements.logoAxa).click();
  }
  validarUrl(url) {
    cy.wait(4000);
    cy.url().should("contain", url);
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
