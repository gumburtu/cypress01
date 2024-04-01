const { get } = require("cypress/types/lodash");

describe("Temel Komutlar", () => {
  it("Temel Komutlar cy.visit kullanimi", () => {
    cy.visit;
    ("/"); //baseURL tanimlandiysa. baseurl cypress.config.js icerisinde tanimlaniyor.
    cy.visit("/commands"); //baseurl tanimlandiysa sadece path
    cy.visit("https://example.cypress.io/commands"); //baseURL tanimlanmadiysa.
    cy.visit({ url: "https://example.cypress.io/commands", method: "GET" }); //baseURL tanimlanmadiysa
  });

  it("Temel komutlar cy.title kullanimi", () => {
    cy.title().should("eq", "cypress.io"); //title tam esitlik olursa dogrular
    cy.title().should("include", "cypress"); //title iceriksinde cypress geciyorsa
    cy.title().should("contain", "cypress"); //title iceriksinde cypress geciyorsa
  });

  it("Temel komutlar cy.url ve cy.location kullanimi", () => {
    cy.url().should("eq", "https://example.cypress.io/commands"); //url tam esitlik olursa dogrular
    cy.url().should("include", "/commands"); //url icerisinde commands geciyorsa dogrular

    cy.location("pathname").should("eq", "/commands"); //gidilen pathi dogrulamis oluyoruz
    cy.location("protocol").should("eq", "http"); //gidilen protocolu dogrular
    cy.location("hostname").should("eq", "https://example.cypress.io"); //tam esitlikte dogrular
    cy.location("hostname").should("include", "cypress.io"); //cypress.io icerirse dogrular
  });
});
