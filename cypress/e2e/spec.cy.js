/// <reference types="cypress" />

describe("Webpack example", () => {
  it("loads", () => {
    cy.visit("/");
    cy.contains("WebdriverUniversity.com (New Approach To Learning)").should(
      "be.visible"
    );
  });
});
